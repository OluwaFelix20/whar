---
title: "The 15 sticker formats every messaging app wants (and why it's chaos)"
description: "A field guide to sticker format requirements across WhatsApp, Telegram, Signal, Discord, iMessage, Snapchat, and more. Plus why no one agreed on a standard."
date: "2026-04-10"
category: "Deep Dives"
author: "Whamr Team"
readTime: "7 min read"
---

If you've ever tried to move a sticker from WhatsApp to Telegram and had it come out blurry, oversized, or broken, this one's for you. Every messaging app invented its own sticker format, and none of them are compatible.

Here's a tour of what each app actually wants.

## WhatsApp

The biggest sticker ecosystem by user count, and also the strictest.

- Format: WebP for static stickers, animated WebP for animated ones
- Canvas: Exactly 512×512 pixels
- File size: Under 100KB for static, under 500KB for animated
- Background: Transparent required
- Pack rules: Between 3 and 30 stickers, plus a 96×96 tray icon

WhatsApp enforces these limits inside the app. Upload a sticker that's 520×520 and it rejects the whole pack. Same for a sticker that's 101KB. The compression work has to happen before the pack reaches WhatsApp.

## Telegram

Telegram is more permissive on dimensions but uses an entirely different animated format.

- Format: WebP for static, `.webm` VP9 for animated
- Canvas: At least one dimension must be exactly 512px (the other can be smaller)
- File size: Under 512KB
- Pack install: Via a bot (@WhamrBot in our case) that creates the pack server-side and returns a `t.me/addstickers/...` link

If you animate a sticker using WhatsApp's animated WebP format and try to use it on Telegram, it won't play. They're visually similar formats, technically very different.

## Signal

Signal prioritises privacy above everything else, including sticker packs. Pack creation happens through a Signal-specific API.

- Format: WebP (static and animated)
- Canvas: 512×512
- File size: Under 300KB
- Pack rules: Up to 200 stickers plus a cover image
- Install: `signal.art/addstickers/...` link

300KB is a tight limit. Animated stickers for Signal have to be compressed more aggressively than for WhatsApp.

## Discord

Discord actually has three different image systems that get lumped together.

- **Custom emoji:** PNG or GIF, 128×128 pixels max, under 256KB
- **Server stickers:** PNG or GIF, 320×320 pixels, under 512KB
- **User profile emoji:** Separate system tied to Nitro

None of them use WebP. Discord's ecosystem grew up around web-standard formats.

## iMessage

Apple does sticker packs through Xcode projects and StickerPack extensions. Officially, you build a sticker pack as an iOS app. Unofficially, third-party apps let you import PNG files.

- Format: PNG or APNG
- Canvas: 300×300 minimum
- File size: Under 500KB
- Install: Third-party sticker apps read ZIP archives of PNG files

There's no one-click install flow on iMessage the way there is on WhatsApp. You always go through an intermediary app.

## Snapchat

Snapchat doesn't really have installable sticker packs. Stickers are one-off overlays you add to a Snap.

- Format: PNG or WebP for static, GIF or WebP for animated
- Canvas: Any aspect ratio, square preferred
- File size: Under 1MB
- Install: There's no "install." Each sticker gets loaded as an overlay via the Snap Kit Creative Kit SDK

So "exporting to Snapchat" really means "sending one sticker at a time to the camera, ready to be placed on a Snap."

## Line

Line has a full commercial sticker marketplace with its own submission process. You can't just drop stickers into Line the way you can into WhatsApp.

- Format: PNG or APNG
- Canvas: 370×320 (unusual dimensions)
- File size: Under 1MB
- Install: Official pack submission to LINE Creators Market (approval required)

Line is the only major messenger with a full approval process. Packs get reviewed by humans before they're distributed.

## Instagram Stories

Instagram supports GIF and PNG stickers inside Stories via GIPHY, but they're not really installable. Each sticker gets dropped onto a Story individually.

- Format: PNG or GIF
- Canvas: No fixed ratio
- File size: Under 1MB
- Install: No pack system — stickers are applied per-Story

## Facebook Messenger

- Format: PNG for static, GIF for animated
- Canvas: 512×512
- File size: Under 1MB

Messenger has a sticker store, but adding your own packs isn't straightforward from the user side. Most custom stickers on Messenger get sent as message attachments rather than installed packs.

## iMessage vs Messages on iOS

Confusingly, "iMessage" and "Messages" on iOS handle stickers differently. iMessage stickers go through the Sticker Pack extension system. Regular Messages treats stickers as image attachments.

## Why is it like this?

Every messaging platform built its sticker system independently, optimised for its own constraints:

- **WhatsApp** targeted low-bandwidth markets where 100KB stickers matter
- **Telegram** prioritised animated capability, hence the custom `.webm` approach
- **Signal** prioritised privacy, which is why installation goes through Signal's own servers
- **Discord** grew out of web culture and kept web-standard formats
- **Apple** keeps things inside their developer ecosystem
- **Line** treats stickers as commercial artwork, hence the marketplace

There was never a standard because each platform had different priorities and different existing tech stacks.

## What Whamr does about it

All of this is why Whamr's sticker exporter exists. You upload one canonical master image (PNG, at least 512×512) and the platform handles the conversion automatically:

- Detects the target platform
- Resizes to the correct canvas using Lanczos interpolation (preserves sharp edges)
- Converts to the required format
- Compresses to meet the byte limit, stepping quality down 5% at a time if needed
- Falls back to reducing canvas size if compression alone isn't enough
- Caches the output so the next export of the same sticker to the same platform is instant

Users never have to know the difference between animated WebP and `.webm` VP9. They just pick where they want the sticker to go.

That's the whole point. Cross-platform should feel like one platform.
