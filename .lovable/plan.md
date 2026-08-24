Add desktop Call and WhatsApp buttons to the header and contact section

## Goal
Make it easy for desktop visitors to call or start a WhatsApp chat with the same business number (+254 704 025 070), while keeping the existing mobile-only sticky CTA bar unchanged.

## Steps
1. In `src/routes/index.tsx`, add a desktop WhatsApp button in the `Header` component, next to the existing "Call" button.
   - Use the `MessageCircle` icon already imported from `lucide-react`.
   - Link to `https://wa.me/254704025070` with `target="_blank"` and `rel="noopener noreferrer"`.
   - Hide it on mobile (`hidden md:inline-flex`) so it complements the sticky bottom bar instead of duplicating it.
   - Use the same high-contrast industrial styling as the existing Call button (lime/crimson or safety/concrete tokens).
   - Ensure a minimum 44 px touch target and visible focus ring.

2. In the `Contact` section, add a WhatsApp CTA alongside the existing Call and Email buttons.
   - Place it as a third button in the "Ready for a free quote?" box.
   - Label it clearly: "WhatsApp" with the `MessageCircle` icon.
   - Link to `https://wa.me/254704025070`.
   - Keep the existing Call and Email buttons.

3. Verify click/tap friendliness:
   - Buttons have at least 44 × 44 px hit area.
   - Clear hover/focus states.
   - Adequate gap between buttons.

4. Run `bun run build` to confirm no TypeScript or runtime errors.

5. Verify in the desktop preview that both header buttons open the correct actions (Call via `tel:` and WhatsApp via `wa.me`).

## Notes
- The WhatsApp number reuses the existing exported `PHONE` constant, formatted as `254704025070` for `wa.me`.
- No mobile layout changes; mobile visitors keep the sticky bottom Call/WhatsApp bar.
- No changes to structured data or SEO metadata are required.
