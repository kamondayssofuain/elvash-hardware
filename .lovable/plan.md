Enhance LocalBusiness structured data for Nairobi local SEO

## Current state
`src/routes/index.tsx` already injects a `LocalBusiness` + `HardwareStore` JSON-LD graph with address, phone, email and a basic `areaServed: { City: Nairobi }`. The goal is to strengthen it for local search visibility.

## Proposed changes
1. Add a `logo` property to both `Organization` and `LocalBusiness` pointing to the uploaded EL logo asset.
2. Add `image` to `LocalBusiness` using the same logo asset.
3. Expand `areaServed` from a simple `City` to a `GeoCircle` centred on the depot coordinates (`-1.3002, 36.85`) with a `5km` radius, matching the free-delivery promise.
4. Add `geo` coordinates to the `PostalAddress` via a separate `Place`/`GeoCoordinates` reference or `geo` property on `LocalBusiness`.
5. Add `openingHoursSpecification` for standard trade hours (e.g., Mon–Sat 08:00–18:00, Sun closed) if confirmed; otherwise leave it out.
6. Add `priceRange` (e.g., "$$") and `paymentAccepted` (cash, M-Pesa, bank transfer) if appropriate.
7. Add `hasMap` linking to a Google Maps URL for the depot location.
8. Keep the existing `Organization` graph entry and cross-reference both via `@id`.

## Verification
- Run `bun run build` to ensure no TypeScript or build errors.
- Use a browser/curl to confirm the JSON-LD is present in the rendered HTML `<head>`.
- Validate the output with Google's Rich Results Test schema expectations (manual check).

## Notes
- No visual UI changes; this is a head/SEO-only update.
- All contact values (phone, email, P.O. Box, Nairobi, KE) will be reused from existing constants.
