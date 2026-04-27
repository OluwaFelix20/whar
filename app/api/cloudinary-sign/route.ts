import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { auth } from "@clerk/nextjs/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  // Require authentication for signed uploads
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { folder, resource_type } = body;

  // Allow only specific folders to prevent abuse
  const allowedFolders = ["whamr/avatars", "whamr/stickers", "whamr/uploads"];
  if (!allowedFolders.includes(folder)) {
    return NextResponse.json({ error: "Invalid folder" }, { status: 400 });
  }

  const timestamp = Math.round(Date.now() / 1000);

  // Build the params to sign — these MUST match what the client sends
  const paramsToSign: Record<string, string | number> = {
    folder,
    timestamp,
    // Tag uploads with the user ID for tracking
    context: `user_id=${userId}`,
  };

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET!
  );

  return NextResponse.json({
    signature,
    timestamp,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    folder,
    context: `user_id=${userId}`,
    resource_type: resource_type ?? "auto",
  });
}
