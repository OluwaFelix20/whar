"use client";

import { useState, useRef, useEffect } from "react";

type StickerEntry = {
  url: string;
  publicId: string;
  format: string;
  uploadedAt: string;
};

export default function StickerUploader({
  initialStickers = [],
}: {
  initialStickers?: StickerEntry[];
}) {
  const [stickers, setStickers] = useState<StickerEntry[]>(initialStickers);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setError(null);

    const isVideo = file.type.startsWith("video/");
    const isGif = file.type === "image/gif";
    if (!isVideo && !isGif) {
      setError("Stickers must be a video (MP4, WebM, MOV) or animated GIF.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Sticker must be under 10MB.");
      return;
    }

    setUploading(true);
    setProgress(0);

    try {
      const signRes = await fetch("/api/cloudinary/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uploadType: "sticker" }),
      });

      if (!signRes.ok) throw new Error("Failed to get upload signature");
      const sig = await signRes.json();

      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", sig.apiKey);
      formData.append("timestamp", String(sig.timestamp));
      formData.append("signature", sig.signature);
      formData.append("folder", sig.folder);
      formData.append("public_id", sig.publicId);
      formData.append("transformation", sig.transformation);
      formData.append("allowed_formats", sig.allowedFormats);

      // Use XHR so we can track upload progress
      const uploadData = await new Promise<{
        secure_url: string;
        public_id: string;
        format: string;
      }>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          `https://api.cloudinary.com/v1_1/${sig.cloudName}/video/upload`
        );
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            setProgress(Math.round((e.loaded / e.total) * 100));
          }
        };
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(new Error(xhr.responseText || "Upload failed"));
          }
        };
        xhr.onerror = () => reject(new Error("Network error"));
        xhr.send(formData);
      });

      const saveRes = await fetch("/api/save-sticker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stickerUrl: uploadData.secure_url,
          publicId: uploadData.public_id,
          format: uploadData.format,
        }),
      });

      if (!saveRes.ok) throw new Error("Failed to save sticker");

      const saveData = await saveRes.json();
      setStickers((prev) => [saveData.sticker, ...prev]);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      setProgress(0);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="bg-bg-alt border border-border p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="h-label">Your meme stickers</div>
        <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
          {stickers.length}/50
        </span>
      </div>

      {/* DROP ZONE */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onClick={() => !uploading && fileInputRef.current?.click()}
        className={`border-2 border-dashed p-10 md:p-12 text-center cursor-pointer transition-all mb-6 ${
          dragActive
            ? "border-wham bg-wham/5"
            : uploading
              ? "border-wham/30 bg-bg cursor-wait"
              : "border-border-strong bg-bg hover:border-wham/40"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/mp4,video/webm,video/quicktime,image/gif"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
        />

        {uploading ? (
          <div>
            <div className="h-display text-3xl text-wham mb-3">
              Uploading... {progress}%
            </div>
            <div className="h-1 bg-bg-alt overflow-hidden max-w-md mx-auto">
              <div
                className="h-full bg-wham transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="h-display text-5xl text-wham mb-3 leading-none">
              ↑
            </div>
            <h3 className="h-display text-2xl text-ink mb-2">
              Drop a video sticker
            </h3>
            <p className="text-ink-dim text-sm mb-1">
              or click to pick from your computer
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mt-3">
              MP4 · WebM · MOV · GIF · 10MB max · 5s max
            </p>
          </>
        )}
      </div>

      {error && (
        <div className="mb-6 p-4 border border-heat/40 bg-heat/5 text-heat font-mono text-xs">
          {error}
        </div>
      )}

      {/* GALLERY */}
      {stickers.length > 0 ? (
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-4">
            Your library
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {stickers.map((sticker) => (
              <StickerThumb key={sticker.publicId} sticker={sticker} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-ink-muted font-mono text-xs uppercase tracking-wider">
          No stickers yet. Drop one above to start your library.
        </div>
      )}
    </div>
  );
}

function StickerThumb({ sticker }: { sticker: StickerEntry }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cloudinary serves video as both .mp4 and as auto-converted poster image
  return (
    <div
      className="relative aspect-square bg-bg border border-border overflow-hidden card-raise group"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <video
        ref={videoRef}
        src={sticker.url}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-1 right-1 font-mono text-[10px] uppercase tracking-wider text-wham bg-bg/80 px-1.5 py-0.5">
        {sticker.format}
      </div>
    </div>
  );
}
