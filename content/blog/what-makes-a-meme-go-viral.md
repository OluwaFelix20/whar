---
title: "What makes a meme go viral: the signals Whamr's feed actually tracks"
description: "The math behind Whamr's virality score, broken down. Why shares matter 5x more than views, and how time decay keeps old content from hogging the feed."
date: "2026-04-05"
category: "How It Works"
author: "Whamr Team"
readTime: "6 min read"
---

Every platform with a feed has a ranking algorithm. Most of them are treated like state secrets. Whamr's isn't. Here's the actual formula we use to score how viral a piece of content is, and why each variable matters.

## The formula

```
virality_score = (likes × 1 + comments × 3 + shares × 5 + views × 0.01) ÷ hours_since_posted
```

That's it. Four engagement signals, one time-decay divisor. Every post on the Trending feed is ranked by this number, highest to lowest.

## Why the weights are what they are

**Shares get multiplied by 5.** A share is the strongest possible signal. It means "this is so good I want to put it in front of other people." Shares are the lifeblood of a content platform — without them, content doesn't spread beyond the original poster's followers.

Weighting shares heaviest pushes genuinely share-worthy content to the top, not just content that gets passive likes.

**Comments get multiplied by 3.** A comment costs effort. The person had to stop scrolling, think of something to say, type it, and hit post. That's a deeper engagement signal than a like. It also means the content sparked a reaction, which is what this platform is for.

**Likes get multiplied by 1.** Likes are the baseline engagement. Cheap, quick, minimal effort. They count, but they count once.

**Views get multiplied by 0.01.** Views are almost free to produce — you get one every time the content loads on someone's screen. Counting them at full weight would let content farm views by auto-playing or appearing in lots of feeds. At 1% weight, they still contribute, but they can't dominate.

## The time decay

Dividing by hours-since-posted does the critical job: it keeps the feed fresh.

A meme that got 1000 likes last year has a time divisor of roughly 8760 (hours in a year), so its score is very small. A meme that got 100 likes in the last hour has a time divisor of 1, so its score is 100x higher.

This means:

- New content can rise fast if it's engaging
- Old viral content doesn't permanently clog the feed
- A slow-burning post that accumulates engagement over days stops dominating after a few days
- Fresh energy wins

## Why we don't use ML to rank

Not yet, anyway. v3.0 adds a personalisation layer trained on individual user click/like history. But the base virality score stays. Here's why.

A pure ML ranking model is a black box. You don't know why your post ranked where it did. Creators can't optimise for it because they can't see it. Platforms can't explain decisions.

A simple formula is transparent. You can read it, understand it, and if you want your post to rank higher, you know what to optimise for: content that gets shared. Not content that gets views, not content that games the system. Content that genuinely moves people to share.

The ML personalisation in v3.0 layers on top of this, not replacing it. Each user sees content re-ranked based on their own history, but the base score stays the same for everyone.

## What virality looks like in practice

A post that gets 100 likes, 30 comments, 20 shares, 5000 views in 6 hours scores:

```
(100 × 1) + (30 × 3) + (20 × 5) + (5000 × 0.01) = 340
340 ÷ 6 hours = 56.6 virality score
```

A post that gets 500 likes, 5 comments, 0 shares, 10,000 views in 12 hours scores:

```
(500 × 1) + (5 × 3) + (0 × 5) + (10000 × 0.01) = 615
615 ÷ 12 hours = 51.3 virality score
```

The first post wins despite having a fifth of the likes and half the views, because the engagement was deeper. It got shared. It started conversations.

## The "Rising" feed

v3.0 introduces a second feed called Rising, which uses the same formula but with a 2-hour time window. It surfaces content that's gaining rapid engagement right now, before it hits the main Trending feed.

If Trending is "what's viral," Rising is "what's about to be viral." It refreshes every 15 minutes.

Good for catching the wave early. Great for small creators whose content might not have enough total engagement to hit Trending yet, but is gaining fast within its own ratio.

## What creators can do with this

Two useful things fall out of knowing the formula:

**Posting timing matters less than you'd think.** Time decay means a post's freshness window is short either way. What matters more is whether early viewers share it, because shares have 5x impact.

**Share-optimise your hooks.** If the first few seconds (or the first few words of the caption) convince someone "this is worth forwarding," your post multiplies. That's what "send the wham" means at the content-design level.

Make stuff people want to share. The formula rewards the rest.
