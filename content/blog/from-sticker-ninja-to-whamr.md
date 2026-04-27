---
title: "From Sticker Ninja to Whamr: why we renamed the whole thing"
description: "Five letters, one brand. The story behind the rename, why the old name didn't work anymore, and how we picked the new one."
date: "2026-03-28"
category: "Brand"
author: "Whamr Team"
readTime: "5 min read"
---

For most of its life, this product was called Sticker Ninja. On the first of this month, we renamed it to Whamr. Here's why.

## The original name did its job

Sticker Ninja was a good name for a sticker app. It said exactly what the product did: it helped you create and manage stickers. The ninja part was playful, a bit cheeky, didn't take itself too seriously. Worked fine for what we were building at the time.

The problem is that we weren't building a sticker app anymore.

## The product outgrew the name

Over 18 months, what started as a WhatsApp sticker exporter turned into something broader:

- A meme editor with templates and layered text
- A discovery feed ranking content by viral engagement
- A social graph with follows, likes, comments, DMs
- Group community spaces (Dojos)
- Multi-platform sharing to 15+ apps
- Collections, bulk exports, moderation tools
- Soon: video content, audio content, creator monetisation

Calling any of that "a sticker app" misleads people. We were telling users they were about to enter a narrow utility and then dropping them into a full content platform. The name set the wrong expectation.

Worse, it limited how we could think about our own roadmap. Every time we talked about adding video or audio, someone inside the company would ask "does that fit the Sticker Ninja brand?" The name was a constraint on our own imagination.

## The criteria for a new name

We wrote down what we wanted before we started brainstorming. Five criteria:

1. **Five letters or fewer.** Short, punchy, easy to type.
2. **Captures the reaction, not the format.** Most platform names describe what content is (Snapchat = snaps, TikTok = ticking clock of short videos). We wanted ours to describe what great content does.
3. **Digital-native.** Belongs in the lineage of Tumblr, Flickr, Grindr. The missing vowel, the `-r` suffix, the handle-like quality.
4. **Works as noun, verb, and brand.** "It's a whamr" / "I whamr'd it" / "I found it on Whamr." If a name can do all three, it has a better chance of entering language.
5. **Pronounceable globally.** No silent letters, no ambiguous vowels, no tricky consonant clusters.

## The candidates we considered

Before Whamr, we looked at several options:

- **Zinga.** Good energy, but zinga.com was taken and Zynga the game company owns the trademark. Dead on arrival.
- **Riffr.** Worked conceptually, but riffr.com was registered and the alternative TLDs felt wrong.
- **Cackl.** Cackl.io was active, and the word itself felt more niche than we wanted.
- **Zingg.** Zingg.ai was already active.

None of them cleared both the linguistic test and the domain test.

## Landing on Whamr

"Wham" kept coming up in our conversations about what makes content work. Not the band, not the George Michael song. The sound effect. The gut-reaction moment when someone drops the perfect meme in a group chat and everyone loses it at once.

Wham is the impact. Wham is what you're actually sharing when you send a meme. You're not sharing an image file. You're trying to produce a reaction in someone else.

Adding the `-r` put it in the right lineage. It stopped being a verb and became a place. "Whamr" is where whams come from.

We checked whamr.com. It was available. We bought it that week.

## How it works in language

The thing we didn't expect was how fast the word started working in conversation:

- "That's an absolute whamr." (noun — a piece of content that lands)
- "Just whamr'd it to the group." (verb — the act of sending)
- "Found it on Whamr." (brand — the destination)

The three-way usage means people can talk about the platform, the content on the platform, and the action of using it, all with the same word. That kind of linguistic economy is rare in a brand name. We didn't design for it exactly, but we noticed it working in internal chats within days of switching.

## What changed with the rename

Mechanically, Phase 0 of our project plan covers every reference:

- Package names, service names, Docker images
- Environment variable prefixes (STICKER_NINJA_* → WHAMR_*)
- Every user-facing string
- Database schema references
- Documentation, READMEs, support articles
- Domain and all configured URLs

Two weeks of cleanup work to rename the whole system, test everything, deploy.

Strategically, the rename unlocks the product roadmap. We can talk about video, audio, creator monetisation, and Dojos without anyone inside or outside the company asking "does this fit the sticker app?" Because Whamr isn't a sticker app. It's a content platform, and the name finally reflects that.

## The lesson

Names are load-bearing. The one you pick at the start carries the assumptions you made about the product at the start. When the product changes enough, the name has to change too — or it will drag on everything else.

If your brand is quietly constraining your product thinking, that's the signal. Rename it. It's not fun, but it's a lot less expensive than pretending the old name still fits.
