"use client";

import { useState, useRef } from "react";

type UploadedSticker = {
  url: string;
  publicId: string;
  duration: number;
  format: string;
  width: number;
  height: number;
  bytes: number;
  thumbnail: string;
};

type Props = {
  onUploaded?: (sticker: UploadedSticker) => void;
};

export default function VideoStickerUploader({ onUploaded }: Props) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState<UploadedSticker[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const MAX_BYTES = 25 * 1024 * 1024; // 25MB
  const MAX_DURATION = 10; // 10s for sticker-style videos

  const handleFile = async (file: File) => {
    setError(null);

    if (!file.type.startsWith("video/")) {
      setError("File must be a video (MP4, MOV, WebM)");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("Video must be under 25MB");
      return;
    }

    setUploading(true);
    setProgress(0);

    try {
      // 1. Get signed upload params
      const signRes = await fetch("/api/cloudinary-sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          folder: "whamr/stickers",
          resource_type: "video",
        }),
      });

      if (!signRes.ok) throw new Error("Failed to get upload signature");
      const sig = await signRes.json();

      // 2. Upload via XHR for progress events
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", sig.api_key);
      formData.append("timestamp", sig.timestamp.toString());
      formData.append("signature", sig.signature);
      formData.append("folder", sig.folder);
      formData.append("context", sig.context);

      const data = await new Promise<{
        secure_url: string;
        public_id: string;
        duration: number;
        format: string;
        width: number;
        height: number;
        bytes: number;
      }>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          `https://api.cloudinary.com/v1_1/${sig.cloud_name}/video/upload`
        );
        xhr.upload.addEventListener("progress", (e) => {
          if (e.lengthComputable) {
            setProgress(Math.round((e.loaded / e.total) * 100));
          }
        });
        xhr.addEventListener("load", () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(new Error(`Upload failed: ${xhr.status}`));
          }
        });
        xhr.addEventListener("error", () => reject(new Error("Network error")));
        xhr.send(formData);
      });

      // Reject videos longer than the max duration
      if (data.duration > MAX_DURATION) {
        setError(
          `Video is ${Math.round(data.duration)}s — stickers must be ${MAX_DURATION}s or less`
        );
        // Clean-up note: in production, also delete the asset from Cloudinary here
        return;
      }

      // Build a thumbnail URL using Cloudinary's transformation API
      const thumbnail = data.secure_url
        .replace("/video/upload/", "/video/upload/w_400,h_400,c_fill,so_0,f_auto,q_auto/")
        .replace(/\.[^.]+$/, ".jpg");

      const sticker: UploadedSticker = {
        url: data.secure_url,
        publicId: data.public_id,
        duration: data.duration,
        format: data.format,
        width: data.width,
        height: data.height,
        bytes: data.bytes,
        thumbnail,
      };

      setUploaded((prev) => [sticker, ...prev]);
      onUploaded?.(sticker);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="space-y-6">
      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onClick={() => !uploading && fileInputRef.current?.click()}
        className={`border-2 border-dashed p-10 md:p-14 text-center cursor-pointer transition-all ${
          dragActive
            ? "border-wham bg-wham/5"
            : uploading
              ? "border-wham/30 bg-bg-alt cursor-wait"
              : "border-border-strong bg-bg-alt hover:border-wham/40"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
          disabled={uploading}
        />
        {uploading ? (
          <div>
            <div className="h-display text-5xl md:text-6xl text-wham mb-4 leading-none">
              {progress}%
            </div>
            <div className="w-full max-w-sm mx-auto h-1 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-wham transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mt-4">
              Uploading and transcoding...
            </p>
          </div>
        ) : (
          <>
            <div className="h-display text-5xl md:text-6xl text-wham mb-4 leading-none">
              ▶
            </div>
            <h3 className="h-display text-2xl md:text-3xl text-ink mb-2">
              Drop a video sticker here
            </h3>
            <p className="text-ink-dim mb-2 text-sm">
              or click to pick from your computer
            </p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted mt-3">
              MP4 · MOV · WebM · 10s max · 25MB max
            </p>
          </>
        )}
      </div>

      {error && (
        <div className="bg-heat/10 border border-heat/40 p-4 font-mono text-xs uppercase tracking-wider text-heat">
          ✕ {error}
        </div>
      )}

      {/* Uploaded list */}
      {uploaded.length > 0 && (
        <div>
          <div className="h-label mb-4">Your video stickers</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {uploaded.map((s) => (
              <div
                key={s.publicId}
                className="card-raise bg-bg-alt border border-border overflow-hidden"
              >
                <div className="aspect-square bg-bg relative overflow-hidden">
                  <video
                    src={s.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-wham">
                      {Math.round(s.duration)}s · {s.format}
                    </span>
                    <span className="font-mono text-[10px] text-ink-muted">
                      {(s.bytes / 1024).toFixed(0)}KB
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
