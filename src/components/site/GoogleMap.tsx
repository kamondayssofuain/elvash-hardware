import { useEffect, useRef, useState } from "react";

const DEPOT_LAT = -1.3002;
const DEPOT_LNG = 36.85;
const RADIUS_KM = 5;

declare global {
  interface Window {
    initElvashMap?: () => void;
    google?: any;
  }
}


export function GoogleMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;

    const apiKey = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
    const channel = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID;

    if (!apiKey) {
      setError("Google Maps key is not configured.");
      return;
    }

    const initMap = () => {
      if (!ref.current || !window.google) return;
      const center = { lat: DEPOT_LAT, lng: DEPOT_LNG };
      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom: 12,
        mapTypeId: "roadmap",
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      new window.google.maps.Marker({
        position: center,
        map,
        title: "Elvash Hardware Depot",
      });

      new window.google.maps.Circle({
        map,
        center,
        radius: RADIUS_KM * 1000,
        fillColor: "#E2571C",
        fillOpacity: 0.12,
        strokeColor: "#E2571C",
        strokeOpacity: 0.9,
        strokeWeight: 2,
      });

      setLoaded(true);
    };

    if (window.google?.maps) {
      initMap();
      return;
    }

    window.initElvashMap = initMap;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async&callback=initElvashMap&channel=${encodeURIComponent(channel ?? "")}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => setError("Google Maps failed to load.");
    document.head.appendChild(script);

    return () => {
      window.initElvashMap = undefined;
      script.remove();
    };
  }, []);

  return (
    <div className="relative h-full w-full min-h-[320px] bg-muted">
      <div ref={ref} className="absolute inset-0" />
      {!loaded && !error && (
        <div className="absolute inset-0 grid place-items-center bg-muted text-sm text-muted-foreground">
          Loading map…
        </div>
      )}
      {error && (
        <div className="absolute inset-0 grid place-items-center bg-muted p-4 text-center text-sm text-crimson">
          {error}
        </div>
      )}
    </div>
  );
}
