import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";

// POST /api/save-avatar
// Body: { avatarUrl: string }
// Saves the Cloudinary URL to the user's Clerk metadata

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const { avatarUrl } = body;

  if (!avatarUrl || typeof avatarUrl !== "string") {
    return NextResponse.json({ error: "Missing avatarUrl" }, { status: 400 });
  }

  // Validate it's a Cloudinary URL from our cloud
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!avatarUrl.includes(`res.cloudinary.com/${cloudName}/`)) {
    return NextResponse.json(
      { error: "Invalid avatar URL" },
      { status: 400 }
    );
  }

  try {
    const client = await clerkClient();
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        cloudinaryAvatarUrl: avatarUrl,
      },
    });

    return NextResponse.json({ success: true, avatarUrl });
  } catch (error) {
    console.error("Failed to save avatar:", error);
    return NextResponse.json(
      { error: "Failed to save avatar" },
      { status: 500 }
    );
  }
}
