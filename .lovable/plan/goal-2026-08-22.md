Add sticky mobile WhatsApp + Call bar and fix runtime error

## Goal
Add a sticky bottom call-to-action bar on mobile with one-tap Call and WhatsApp buttons, and fix the current runtime error that blocks the preview.

## Prerequisite fix
The preview currently throws:
`Uncaught SyntaxError: The requested module '/src/routes/index.tsx?tsr-shared=1' does not provide an export named 'EMAIL'`

This happens because `EMAIL` (and likely `PHONE`) are declared as non-exported constants in `src/routes/index.tsx`, but a TanStack shared chunk is trying to import them. Fix: change `const EMAIL` and `const PHONE` to `export const EMAIL` and `export const PHONE`.

## Steps
1. In `src/routes/index.tsx`, export `PHONE` and `EMAIL` constants so the shared module resolution succeeds.
2. Add a sticky bottom mobile CTA bar component inside `src/routes/index.tsx` (or a new `src/components/site/MobileCtaBar.tsx`) that:
   - Is visible only below the `md` breakpoint (`md:hidden`).
   - Has a "Call" button using `tel:${PHONE}` with a Phone icon.
   - Has a "WhatsApp" button using `https://wa.me/${PHONE}` (with the number in international format, no +) and a WhatsApp/chat icon.
   - Uses the existing industrial color tokens (lime/crimson or safety orange) for high contrast.
   - Sits above existing content with safe bottom padding (`pb-safe` / `bottom-0`).
3. Ensure the bar does not overlap the footer or contact form by adding enough bottom padding to the main page wrapper on mobile.
4. Run `bun run build` to confirm the runtime error is gone and the new component compiles.
5. Verify in the mobile preview that both buttons trigger the correct actions.

## Notes
- The WhatsApp number will reuse the existing business phone `+254704025070`, formatted as `254704025070` for `wa.me`.
- No desktop layout changes; the bar is mobile-only.
- This plan supersedes the previous structured-data plan because `LocalBusiness` JSON-LD is already present in `src/routes/index.tsx`.
