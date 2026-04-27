import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { cloudinary } from "@/lib/cloudinary";

// POST /api/cloudinary/sign
// Body: { uploadType: "avatar" | "sticker" }
// Returns signed parameters the client uses to upload directly to Cloudinary

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const { uploadType } = body;

  if (!uploadType || !["avatar", "sticker"].includes(uploadType)) {
    return NextResponse.json(
      { error: "Invalid uploadType. Must be 'avatar' or 'sticker'." },
      { status: 400 }
    );
  }

  const timestamp = Math.round(Date.now() / 1000);

  type UploadConfig = {
    folder: string;
    public_id: string;
    transformation: string;
    allowed_formats: string;
    resource_type?: string;
  };

  // Different upload settings per type
  const config: Record<string, UploadConfig> = {
    avatar: {
      folder: `whamr/avatars/${userId}`,
      public_id: `avatar_${timestamp}`,
      transformation: "c_fill,g_face,w_512,h_512,q_auto,f_auto",
      allowed_formats: "jpg,jpeg,png,webp,heic",
    },
    sticker: {
      folder: `whamr/stickers/${userId}`,
      public_id: `sticker_${timestamp}`,
      resource_type: "video",
      transformation: "c_fill,w_512,h_512,du_5,q_auto,f_auto",
      allowed_formats: "mp4,webm,mov,gif",
    },
  };

  const params = {
    timestamp,
    ...config[uploadType],
  };

  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!apiSecret) {
    return NextResponse.json(
      { error: "Server misconfigured: missing CLOUDINARY_API_SECRET" },
      { status: 500 }
    );
  }

  // Sign only the params that go into the upload (not resource_type)
  const paramsToSign: Record<string, string | number> = {};
  Object.entries(params).forEach(([k, v]) => {
    if (k !== "resource_type") paramsToSign[k] = v;
  });

  const signature = cloudinary.utils.api_sign_request(paramsToSign, apiSecret);

  return NextResponse.json({
    signature,
    timestamp,
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    folder: params.folder,
    publicId: params.public_id,
    transformation: params.transformation,
    resourceType: uploadType === "sticker" ? "video" : "image",
    allowedFormats: params.allowed_formats,
  });
}
