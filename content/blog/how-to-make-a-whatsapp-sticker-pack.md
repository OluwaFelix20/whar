---
title: "How to make a WhatsApp sticker pack in under a minute"
description: "Step-by-step guide to building a custom WhatsApp sticker pack, exporting it, and installing it on Android or iOS. No design skills required."
date: "2026-04-15"
category: "Tutorials"
author: "Whamr Team"
readTime: "4 min read"
---

Making a sticker pack used to be a project. You had to resize images to exactly 512×512 pixels, strip the backgrounds, convert everything to WebP under 100KB, build a manifest file, and figure out how to get the whole thing into WhatsApp without losing your mind.

On Whamr, it takes under a minute. Here's how.

## What you need

Any 9 images you want to turn into stickers. They can be photos, illustrations, screenshots, frames from a video, or doodles. Whamr handles the rest.

WhatsApp requires between 3 and 30 stickers per pack. Nine is a nice middle number — enough variety, not overwhelming.

## Step one: upload

Open the Whamr editor and drop your images in. Anything you'd find on your camera roll works: JPG, PNG, HEIC, WebP. You can drag-and-drop multiple files at once.

Each image gets processed automatically. The background removal runs in the browser using the subject-detection model, so even if your image has a messy background, Whamr cuts it out cleanly in a couple of seconds.

## Step two: tidy up (optional)

If the auto-cutout missed something, you can touch it up with the eraser tool. If you want to add text, tap any sticker in the preview and type. Colours, fonts, positions all adjustable. Most people skip this step entirely.

## Step three: name the pack

Give your pack a name, a short description, and pick one of the 9 stickers to use as the tray icon. The tray icon is the small thumbnail WhatsApp shows when you're picking which pack to send from.

## Step four: export to WhatsApp

Tap "Export" and pick WhatsApp. On the backend, Whamr:

- Resizes each sticker to 512×512 pixels (WhatsApp's requirement)
- Converts to WebP format
- Compresses each one to under 100KB without visible quality loss
- Builds the manifest file (`sticker_pack.json`) that WhatsApp needs
- Bundles everything into a `.wastickers` archive

All of that happens in under 10 seconds.

## Step five: install

On Android, the `.wastickers` file opens directly in WhatsApp. You'll see a confirmation screen: "Add pack [your pack name] to WhatsApp?" Tap add. Done. Your stickers are now available in the sticker picker.

On iOS, the same flow runs via a Universal Link that opens WhatsApp and shows the same confirmation.

## Sharing your pack with friends

Every pack you make on Whamr has a public URL. If a friend wants it, send them the link. They open it, tap "Add to WhatsApp," and the pack installs on their phone too. They don't need a Whamr account to use packs you've shared.

You can also generate a QR code for each pack. Handy if you're showing someone the pack in person.

## Exporting the same pack to Telegram or Signal

If you want your pack to work on other messaging apps too, pick a different target when exporting. Whamr reformats automatically:

- Telegram wants `.webm` VP9 format for animated stickers
- Signal wants animated WebP at under 300KB
- Discord wants PNG at 320×320 for server stickers

You don't have to remember any of that. Just pick the target and Whamr handles the conversion.

## One last thing

If your pack does well and other people start cloning it, you can turn on Premium. Charge a small unlock fee (between 99 cents and $9.99). Every purchase credits your Whamr account. Once you hit $25, it pays out to your bank.

That's how sticker packs should work.
