import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";

// POST /api/save-sticker
// Body: { stickerUrl: string, publicId: string, format: string }
// Appends a sticker to the user's collection in Clerk metadata
// (Production would write to PostgreSQL via the dedicated content service)

type StickerEntry = {
  url: string;
  publicId: string;
  format: string;
  uploadedAt: string;
};

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const { stickerUrl, publicId, format } = body;

  if (!stickerUrl || !publicId || !format) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!stickerUrl.includes(`res.cloudinary.com/${cloudName}/`)) {
    return NextResponse.json(
      { error: "Invalid sticker URL" },
      { status: 400 }
    );
  }

  try {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    const existingStickers =
      (user.publicMetadata?.stickers as StickerEntry[] | undefined) ?? [];

    const newSticker: StickerEntry = {
      url: stickerUrl,
      publicId,
      format,
      uploadedAt: new Date().toISOString(),
    };

    // Cap at 50 stickers per user for now
    const updatedStickers = [newSticker, ...existingStickers].slice(0, 50);

    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...user.publicMetadata,
        stickers: updatedStickers,
      },
    });

    return NextResponse.json({
      success: true,
      sticker: newSticker,
      total: updatedStickers.length,
    });
  } catch (error) {
    console.error("Failed to save sticker:", error);
    return NextResponse.json(
      { error: "Failed to save sticker" },
      { status: 500 }
    );
  }
}
