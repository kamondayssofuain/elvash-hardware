# Desktop Call & WhatsApp CTAs + Lead Click Tracking

## 1. Desktop-friendly contact buttons

- Header (desktop): keep the existing "Call 0704 025 070" button and add a WhatsApp button next to it, both hidden on mobile where the sticky bar already covers it.
- Contact section "Ready for a free quote?" box: add a WhatsApp button alongside the existing Call and Email buttons.
- All links use +254 704 025 070: `tel:+254704025070` and `https://wa.me/254704025070?text=...` with a prefilled message ("Hi Elvash Hardware, I'd like a quote for ...").
- Sizing/accessibility: minimum 44px tap height, generous horizontal padding, visible hover and keyboard focus rings, `aria-label` on icon-only variants, `rel="noopener noreferrer"` and `target="_blank"` on WhatsApp links.

## 2. Lead click tracking (Lovable Cloud)

- Enable Lovable Cloud (built-in database) for this project.
- New table `lead_clicks`: id, channel (`call` | `whatsapp`), source (which button: `header`, `contact_box`, `mobile_bar`, `hero`), service (optional — e.g. the section/category context), page path, referrer, user agent, created_at.
- Public site visitors are anonymous, so writes go through a server function that validates the payload and inserts the row; the table itself allows no direct public reads or writes.
- A small `trackLead()` helper fires on every Call/WhatsApp click (including the existing mobile sticky bar and any hero/section CTAs) and never blocks navigation — the tel:/wa.me link opens regardless of whether logging succeeds.

Reviewing the data: the rows can be queried from the backend view. If you also want an in-app dashboard page showing clicks by channel/source, say so and I will add it (it would need a login to stay private).

## 3. Overlap, spacing and z-index audit

- Sticky mobile bar keeps a high z-index above page content but below the mobile menu overlay; the page already reserves bottom padding so the footer is never covered — verify on 360px, 414px and tablet widths.
- Verify header buttons do not wrap or collide with nav links at 768–1024px.
- Verify the contact box buttons wrap cleanly on narrow screens with consistent gaps.
- Check with a real browser pass at mobile, tablet and desktop widths and confirm each CTA is clickable and correctly targeted.

## Technical notes

- `src/routes/index.tsx`: header and contact-section markup, shared `WHATSAPP_URL` constant derived from `PHONE`.
- New `src/lib/leads.functions.ts` with a `createServerFn` insert handler using a server-side client; input validated with Zod and channel/source constrained to known values.
- Migration creates the table with explicit GRANTs, RLS enabled, and no anon policies (inserts happen server-side only).
