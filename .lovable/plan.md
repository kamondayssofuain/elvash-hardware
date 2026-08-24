# Add Google Maps integration

## Goal
Wire the existing `GoogleMap` component into the Elvash Hardware homepage so visitors see an interactive map of the depot location and 5km free-delivery radius, then publish the site.

## Current state
- `src/components/site/GoogleMap.tsx` already exists and loads the Maps JS API using the Lovable-managed browser key.
- The Google Maps Platform connector is already linked to the project.
- The map is not yet rendered on the page; the "Why Elvash" section currently shows the static `RadiusDiagram`.
- Build is blocked by missing `@supabase/supabase-js` in `package.json`, which the auto-generated Supabase client files import.

## Steps
1. **Fix build blocker** — install the missing `@supabase/supabase-js` dependency so the auto-generated Supabase integration files compile.
2. **Wire the map into the page** — import `GoogleMap` and `ClientOnly` in `src/routes/index.tsx` and replace the static `RadiusDiagram` in the "Why Elvash" section with the interactive map. Wrap it in `ClientOnly` so it only renders in the browser and avoids SSR/hydration issues.
3. **Polish** — keep the 5km-radius circle and depot marker already defined in `GoogleMap.tsx`, and ensure the container height works in the new layout.
4. **Verify** — run `bun run build` to confirm no TypeScript or build errors.
5. **Publish** — publish the site once the build is green.

## Technical notes
- The map relies on `VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY` and `VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID`, which are injected by the linked connector.
- `ClientOnly` is the standard TanStack Start guard for browser-only libraries; do not statically import the map component into SSR.
