Use uploaded image as Elvash Hardware logo

## Goal
Replace the current "E" placeholder logo in the site header with the uploaded green/red "EL" mark image, and update the favicon to match.

## Prerequisite fix
The project currently has a TypeScript build error in `src/components/site/GoogleMap.tsx` (`Cannot find name 'google'`). This must be fixed before any build verification can pass. The fix is to declare the `google` global type for the Maps JavaScript API (add a minimal `declare const google: any` or install `@types/google.maps`).

## Steps
1. Fix the `GoogleMap.tsx` TypeScript error by adding a minimal global `google` declaration so the build passes.
2. Upload the uploaded logo image (`user-uploads://ChatGPT_Image_Aug_21_2026_08_04_24_PM.png`) to Lovable Assets as `src/assets/logo.png.asset.json`.
3. In `src/routes/index.tsx`, replace the header's `<span className="grid h-11 w-11...">E</span>` placeholder with an `<img>` using the new asset URL, sized at `h-11 w-11` with `object-contain`.
4. Keep the "Elvash Hardware" wordmark and "Nairobi, Kenya" eyebrow text next to the logo.
5. Generate a square favicon from the same logo and save it as `public/favicon.png`, then update `src/routes/__root.tsx` to reference `/favicon.png` and remove the default `public/favicon.ico`.
6. Run `bun run build` to verify no errors and check the preview.

## Notes
- The logo image will be treated as an app asset via Lovable Assets CDN.
- Favicon must remain a real file in `public/` per project rules.
- No other visual changes unless required to make the logo fit the existing header layout.
