# Elvash Yard Builder

# Lovable Prompt — Elvash Hardware Website

Copy everything below into Lovable as your starting prompt.

---

Build a one-page marketing website for **Elvash Hardware**, a builder's hardware supplier and installer based in Nairobi, Kenya.

## Business summary
Elvash Hardware is a Nairobi-based supplier of building, electrical, sewer, plumbing and general hardware materials. Beyond supply, they also install kitchen cabinets, wardrobes, and doors, and offer interior design and installation services (office partitioning, paint works, gypsum ceiling designing, floor tiling). They offer **free site visits, free quotations, and free delivery within a 5km radius** of their yard.

## Contact details (use exactly as given)
- Phone: +254 704 025 070
- Email: elvash_contractors@gmail.com
- Postal address: P.O. Box 00344-00200, Nairobi, Kenya
- Location context: Nairobi, Kenya

## Design direction
Go for an **industrial "builder's yard" aesthetic** — not a generic soft SaaS template. Think hardware-store signage, hazard stripes, aisle numbers, and concrete/steel textures.

- **Color palette:** warm concrete/paper background (#EDEAE3), near-black ink text (#211D1A), steel blue-grey (#37505F, #24363F) for panels, safety orange (#E2571C) as the primary accent, safety yellow (#F4B400) as a secondary accent, muted concrete grey (#CFC9BC) for borders/lines.
- **Typography:** a bold condensed/industrial display face for headlines (e.g. Archivo Black or Oswald), a clean grotesk for body text (e.g. Inter), and a monospace face for labels, phone numbers, specs, and small caps eyebrow text (e.g. IBM Plex Mono) — like a spec sheet or hardware store placard.
- **Signature motifs:** diagonal yellow/black hazard-stripe dividers between sections; product/service cards styled like numbered hardware-store aisles ("Bay 01", "Bay 02", etc.) with small bolt/rivet details in the corners; a simple diagram illustrating the 5km free-delivery radius around the yard.
- **Tone of copy:** plain, confident, trade-oriented language. Short sentences. No fluffy marketing speak.

## Site structure & content

**1. Header (sticky)**
Logo mark "E" + "Elvash Hardware / Nairobi, Kenya", nav links (The Yard, Supply & Fit, Interiors, Why Us, Contact), and a prominent "Call 0704 025 070" button.

**2. Hero section**
Headline about going from foundation to finish (materials through to installed, finished interiors). Subheadline mentioning free site visits, free quotation, and free delivery within 5km. Two CTAs: "Request a free quote" (tel: link) and "See what we stock" (anchor link to products section). Include a small panel/card listing the three free perks.

**3. Trust bar**
Three quick-fact items: Free site visits, Free quotation, Free delivery within 5km — each with a short one-line description.

**4. "The Yard" — product categories (Bay 01–05)**
Five cards, each numbered like a hardware aisle, with a product photo/illustration, category name, and a bullet list of items:
- **01 Building materials** — Cement, Timber, Steel, Paints, Locks
- **02 Electrical materials** — Cables, MCCBs & MCBs, Light fittings, Fitments
- **03 Sewer materials** — SW pipes, SW fittings, Cisterns, Manholes
- **04 Plumbing materials** — PPR pipes & fittings, Taps, Non-return valves, Kitchen & sink mixers
- **05 General hardware** — Iron hoop, Binding wire, Nets, Polythene sheets

**5. "Supply & Fit" — supplied and installed**
Three rows/cards, each with an icon or photo:
- Kitchen cabinets — built and installed to exact kitchen measurements
- Wardrobes — fitted wardrobes sized for the room
- Doors, frames & architraves — supplied and hung, trim finished to match

Include a short "How it works" callout: Measure → Quote → Install (site visit and quotation are free either way; installers proceed once the quote is approved).

**6. "Interiors" — design and installation**
Four cards in a row (stack on mobile):
- Office partitioning — divide space into working rooms without altering the shell
- Paint works — interior and exterior painting, prep to top coat
- Gypsum designing — ceiling designs, coves and bulkheads cast on site
- Floor tiling — tile supply and laying for floors and wet areas

**7. "Why Elvash" — free delivery radius**
Explain the three free perks again with more detail (free site visits, free quotation, free delivery within 5km), ideally alongside a simple radius diagram/map graphic showing the 5km free-delivery zone around the yard.

**8. Contact section**
Dark full-width band with: phone (click-to-call), email (click-to-email), postal address, and a strong closing CTA card: "Ready for a free quote? Call or email with your list, drawings, or a rough idea — we'll arrange a site visit and price it for you, no charge."

**9. Footer**
Small copyright line + one-line summary of service categories (Building · Electrical · Sewer · Plumbing · General Hardware · Interiors).

## Functional requirements
- Fully responsive across mobile, tablet, and desktop — collapse the nav into a mobile menu, stack multi-column grids down to 1–2 columns on small screens.
- Phone numbers and email use `tel:` and `mailto:` links so they work as tap-to-call/email on mobile.
- Smooth scroll to in-page anchor links from the nav.
- Use real, appropriately licensed product/trade photography (construction materials, cabinetry, tiling, etc.) or clean custom icons/illustrations for each category — avoid generic stock photos that don't match the industrial tone.
- Keep the page to a single scrollable page (no separate routed pages needed) unless asked otherwise.

## What NOT to do
- Don't use a generic SaaS/startup template look (soft gradients, rounded pill buttons everywhere, pastel colors).
- Don't invent services, prices, or contact details beyond what's listed above.
- Don't add fake testimonials, fake team photos, or fake client logos.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://elvash-hardware.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8ea8290a-a07d-4229-8fb9-475a6a7a19fa).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
