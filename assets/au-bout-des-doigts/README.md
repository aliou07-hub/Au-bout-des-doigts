# Asset documentation — Au Bout Des Doigts (N'Djamena, Chad)

## Verification summary

Identity was verified via:
- Tripadvisor listing (rating 4.4/5, 59 reviews, #3 of 17 restaurants in N'Djamena, Italian/French cuisine, hours 10:00–16:00 & 18:00–00:00, 18 traveler photos): https://www.tripadvisor.com/Restaurant_Review-g293779-d8059624-Reviews-Au_Bout_Des_Doigts-N_Djamena.html
- Petit Futé listing (Italian restaurant, wood-fired pizza, grilled meat, cocktails, wine, lounge atmosphere): https://www.petitfute.com/v45655-n-djamena/c1165-restaurants/c1031-cuisines-du-monde/c1036-cuisine-mediterraneenne/c82-restaurant-italien/1574288-au-bout-des-doigts.html
- Facebook page (restaurant's own account, posts pizza photos): https://www.facebook.com/p/Au-Bout-Des-Doigts-NDjamena-100082974925041/

## Update (2026-09-07): authentic photos added

The user supplied 9 real photos of the restaurant directly in conversation (received via Telegram). Several carry the restaurant's own "Au bout des doigts" watermark, confirming they are the venue's own marketing photos, not third-party uploads. These are now used throughout the site (hero, about, signature pizza carousel, drinks & bar, lounge/terrace, and the gallery) and are documented in `assets.json` under `authentic_images` with `"verified_identity": true, "placeholder": false`.

Three spots still use licensed Unsplash stock photography because no authentic photo covers them: the cocktail shot in the Signature carousel, the wine-glasses shot in the small Wine carousel card (the real bottle photo is used more prominently in the main Bar section instead), and the tomato/basil shot for the "Local Dishes" card (none of the supplied photos depict a specifically local/Chadian dish — a mango-avocado-prosciutto-goat cheese salad was supplied but is a European-style dish, so it was placed in the Gallery only rather than mislabeled as "local"). These three remain documented under `stock_placeholder_images` in `assets.json`.

**Note on original Tripadvisor/Facebook photos:** those remain undownloaded for the reason below — they are still third-party uploads, unrelated to the authentic photos the user has since supplied directly.

## Why the original Tripadvisor/Facebook photos are not scraped

Real photos of this restaurant also exist as traveler uploads (18 photos on Tripadvisor) and page posts (Facebook), but those specific ones are third-party copyrighted content — being publicly visible does not make them commercially reusable, and this project has no license or authorization to reproduce them. No verifiable video of this specific restaurant (N'Djamena, Chad) was found on YouTube, Facebook, Instagram, or TikTok that could be confidently embedded. Per the build spec, no video was fabricated and no unlicensed photos were downloaded from those platforms.

## What is used instead for the remaining gaps

The 3 remaining slots use licensed stock photography from Unsplash (Unsplash License — free for commercial use, no permission required), chosen to visually match the restaurant's verified concept. These are marked `"verified_identity": false, "placeholder": true` in `assets.json`.

**Action for the restaurant owner:** supply a cocktail photo, a wine-glass/bottle detail, and a specific local/Chadian dish photo to fully retire the remaining 3 stock placeholders.

## Per-asset log

The full, authoritative list lives in `assets.json` (`authentic_images` + `stock_placeholder_images`, each with id/category/description/file-or-source/placement). Summary:

| id | category | description | file / source | identity verified | recommended placement |
|----|----------|--------------|----------------|---------------------|------------------------|
| auth-01 | atmosphere | Open-air movie night poolside on the terrace | atmosphere/terrace-cinema-night.jpg | **Yes** | Hero background, Gallery |
| auth-02 | atmosphere | Kids' pizza-making workshop, bunting flags | atmosphere/kids-pizza-workshop.jpg | **Yes** | Gallery |
| auth-03 | food | Three pasta dishes on Ankara-print linen | food/pasta-trio.jpg | **Yes** | Signature carousel (Italian), Gallery |
| auth-04 | interior | Chef prepping pizza dough at the counter | interior/pizza-prep-counter.jpg | **Yes** | About section, Gallery |
| auth-05 | drinks | Chianti/Lambrusco/Prosecco on wine barrels | drinks/wine-bottles-bar.jpg | **Yes** | Drinks & Bar section, Gallery |
| auth-06 | pizza | Wood-fired pizza, prosciutto &amp; arugula | pizza/prosciutto-arugula-pizza.jpg | **Yes** | Signature carousel (Pizza), Gallery |
| auth-07 | food | Grilled meat skewers (restaurant watermark) | food/grilled-skewers.jpg | **Yes** | Signature carousel (Grilled), Gallery |
| auth-08 | food | Mango/avocado/goat cheese salad (restaurant watermark) | food/mango-avocado-salad.jpg | **Yes** | Gallery only |
| auth-09 | terrace | Lounge terrace seating, event set-up | terrace/terrace-lounge-seating.jpg | **Yes** | Lounge/Terrace section, Gallery |
| stock-01 | drinks | Craft cocktail (no authentic photo available) | images.unsplash.com/photo-1470337458703-46ad1756a187 | No (placeholder) | Signature carousel (Cocktails) |
| stock-02 | drinks | Wine glasses (no authentic close-up available) | images.unsplash.com/photo-1510812431401-41d2bd2722f3 | No (placeholder) | Signature carousel (Wine) |
| stock-03 | food | Tomato &amp; basil (no authentic local-dish photo available) | images.unsplash.com/photo-1571997478779-2adcbbe9ab2f | No (placeholder) | Signature carousel (Local Dishes) |

All authentic files are unoptimized originals as received (200–360KB each, JPEG). For production, run them through a compressor and generate WebP/AVIF variants before final launch.

## Video

No video is embedded. No verified, identity-confirmed video of Au Bout Des Doigts (N'Djamena, Chad) could be found on YouTube, Facebook, Instagram or TikTok. Per the build spec (§8–9), the hero uses a strong static image with a cinematic gradient overlay instead of fabricating or substituting unrelated footage.

- Platform: n/a
- URL: n/a
- Identity verified: n/a — none found
- Recommended placement: n/a
- Embed allowed: n/a
- Fallback: static hero image (`hero-01`) with dark gradient overlay, implemented in `index.html`
