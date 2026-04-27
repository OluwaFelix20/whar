"use client";

import { useState, useRef } from "react";
import { useUser } from "@clerk/nextjs";

export default function AvatarUploader({
  initialAvatarUrl,
}: {
  initialAvatarUrl?: string;
}) {
  const { user } = useUser();
  const [preview, setPreview] = useState<string | null>(initialAvatarUrl ?? null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setError(null);

    if (!file.type.startsWith("image/")) {
      setError("Please pick an image file (JPG, PNG, WebP, HEIC).");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("Avatar must be under 2MB.");
      return;
    }

    setUploading(true);
    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);

    try {
      const signRes = await fetch("/api/cloudinary/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uploadType: "avatar" }),
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

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${sig.cloudName}/image/upload`,
        { method: "POST", body: formData }
      );

      if (!uploadRes.ok) {
        const errText = await uploadRes.text();
        throw new Error(`Upload failed: ${errText}`);
      }

      const uploadData = await uploadRes.json();

      const saveRes = await fetch("/api/save-avatar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ avatarUrl: uploadData.secure_url }),
      });

      if (!saveRes.ok) throw new Error("Failed to save avatar");

      setPreview(uploadData.secure_url);
      await user?.reload();
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Upload failed");
      setPreview(initialAvatarUrl ?? null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-bg-alt border border-border p-8">
      <div className="h-label mb-6">Profile picture</div>
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="relative shrink-0">
          <div
            className="w-32 h-32 rounded-full overflow-hidden border-2 border-border bg-bg flex items-center justify-center"
            style={{
              borderColor: preview ? "rgba(212,255,61,0.4)" : undefined,
            }}
          >
            {preview ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={preview}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="h-display text-5xl text-ink-muted">?</span>
            )}
          </div>
          {uploading && (
            <div className="absolute inset-0 bg-bg/60 rounded-full flex items-center justify-center">
              <div className="h-2 w-2 bg-wham rounded-full animate-pulse" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="h-display text-2xl text-ink mb-2">Your face here.</h3>
          <p className="text-ink-dim text-sm mb-4 leading-relaxed">
            Square works best. JPG, PNG, WebP, or HEIC. Max 2MB. We'll auto-crop
            to centre on your face.
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="bg-wham text-bg font-display font-extrabold uppercase tracking-tight text-sm px-5 py-2.5 hover:bg-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontVariationSettings: '"wdth" 85' }}
            >
              {uploading
                ? "Uploading..."
                : preview
                  ? "Change picture"
                  : "Upload picture"}
            </button>
            {preview && !uploading && (
              <button
                onClick={() => {
                  setPreview(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-heat transition-colors px-3"
              >
                Remove
              </button>
            )}
          </div>
          {error && <p className="mt-3 text-heat text-sm font-mono">{error}</p>}
        </div>
      </div>
    </div>
  );
}
