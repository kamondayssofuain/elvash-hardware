Use uploaded image as Elvash Hardware logo

## Goal
Replace the current "E" placeholder logo in the site header with the uploaded green/red "EL" mark image, and update the favicon to match.

## Steps
1. Upload the uploaded logo image (`user-uploads://ChatGPT_Image_Aug_21_2026_08_04_24_PM.png`) to Lovable Assets as `src/assets/logo.png.asset.json`.
2. In `src/routes/index.tsx`, replace the header's `<span className="grid h-11 w-11...">E</span>` placeholder with an `<img>` using the new asset URL, sized at `h-11 w-11` with `object-contain`.
3. Keep the "Elvash Hardware" wordmark and "Nairobi, Kenya" eyebrow text next to the logo.
4. Generate a square favicon from the same logo and save it as `public/favicon.png`, then update `src/routes/__root.tsx` to reference `/favicon.png` and remove the default `public/favicon.ico`.
5. Run `bun run build` to verify no errors and check the preview.

## Notes
- The logo image will be treated as an app asset via Lovable Assets CDN.
- Favicon must remain a real file in `public/` per project rules.
- No other visual changes unless required to make the logo fit the existing header layout.
