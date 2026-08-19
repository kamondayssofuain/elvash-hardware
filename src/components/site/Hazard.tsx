export function HazardStripe({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`hazard h-3 w-full ${className}`} />;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-crimson">
      <span aria-hidden className="inline-block h-2 w-2 bg-lime-deep" />
      {children}
    </p>
  );
}
