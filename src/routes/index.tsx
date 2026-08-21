import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Ruler,
  FileText,
  Hammer,
  Truck,
  ArrowRight,
} from "lucide-react";

import { HazardStripe, Eyebrow } from "@/components/site/Hazard";
import { RadiusDiagram } from "@/components/site/RadiusDiagram";
import heroYard from "@/assets/hero-yard.jpg";
import bayBuilding from "@/assets/bay-building.jpg";
import bayElectrical from "@/assets/bay-electrical.jpg";
import baySewer from "@/assets/bay-sewer.jpg";
import bayPlumbing from "@/assets/bay-plumbing.jpg";
import bayGeneral from "@/assets/bay-general.jpg";
import fitWardrobes from "@/assets/fit-wardrobes.jpg";
import interiorPartitioning from "@/assets/interior-partitioning.jpg";
import interiorTilingJobAsset from "@/assets/interior-tiling-job.jpg.asset.json";
import interiorWallTilingAsset from "@/assets/interior-wall-tiling.jpg.asset.json";
import fitKitchenAsset from "@/assets/fit-kitchen.jpg.asset.json";
import fitDoorsAsset from "@/assets/fit-doors.jpg.asset.json";
import interiorPaintAsset from "@/assets/interior-paint.jpg.asset.json";

const PHONE = "+254704025070";
const PHONE_DISPLAY = "0704 025 070";
const EMAIL = "elvash_contractors@gmail.com";
const SITE_URL = "https://id-preview--8ea8290a-a07d-4229-8fb9-475a6a7a19fa.lovable.app";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Elvash Hardware",
      url: SITE_URL,
      telephone: PHONE,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "P.O. Box 00344-00200",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: "Nairobi, Kenya",
      description:
        "Nairobi supplier of building, electrical, sewer, plumbing and general hardware. We also fit kitchens, wardrobes and doors.",
    },
    {
      "@type": ["LocalBusiness", "HardwareStore"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Elvash Hardware",
      url: SITE_URL,
      telephone: PHONE,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "P.O. Box 00344-00200",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: {
        "@type": "City",
        name: "Nairobi",
      },
      description:
        "Builder's hardware supplier and installer based in Nairobi, Kenya. Free site visits, free quotations and free delivery within 5km.",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elvash Hardware — Building Materials & Fitting, Nairobi" },
      {
        name: "description",
        content:
          "Nairobi supplier of building, electrical, sewer, plumbing and general hardware. We also fit kitchens, wardrobes and doors. Free site visit, free quote, free delivery within 5km.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:title",
        content: "Elvash Hardware — Building Materials & Fitting, Nairobi",
      },
      {
        property: "og:description",
        content:
          "Materials from the depot, installed by our own fitters. Free site visits, free quotations, free delivery within 5km of the depot.",
      },
      { "script:ld+json": STRUCTURED_DATA },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "The Depot", href: "#depot" },
  { label: "Supply & Fit", href: "#supply-fit" },
  { label: "Interiors", href: "#interiors" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const BAYS = [
  {
    no: "01",
    name: "Building materials",
    img: bayBuilding,
    items: ["Cement", "Timber", "Steel", "Paints", "Locks"],
  },
  {
    no: "02",
    name: "Electrical materials",
    img: bayElectrical,
    items: ["Cables", "MCCBs & MCBs", "Light fittings", "Fitments"],
  },
  {
    no: "03",
    name: "Sewer materials",
    img: baySewer,
    items: ["SW pipes", "SW fittings", "Cisterns", "Manholes"],
  },
  {
    no: "04",
    name: "Plumbing materials",
    img: bayPlumbing,
    items: [
      "PPR pipes & fittings",
      "Taps",
      "Non-return valves",
      "Kitchen & sink mixers",
    ],
  },
  {
    no: "05",
    name: "General hardware",
    img: bayGeneral,
    items: ["Iron hoop", "Binding wire", "Nets", "Polythene sheets"],
  },
];

const FIT: { no: string; title: string; text: string; img?: string }[] = [
  {
    no: "A",
    title: "Kitchen cabinets",
    text: "Built and installed to your exact kitchen measurements. Carcass, doors, worktop cut-outs — fitted on site.",
    img: fitKitchenAsset.url,
  },
  {
    no: "B",
    title: "Wardrobes",
    text: "Fitted wardrobes sized for the room. Hanging rails, shelving and sliding or hinged doors.",
    img: fitWardrobes,
  },
  {
    no: "C",
    title: "Doors, frames & architraves",
    text: "Supplied and hung. Frames plumbed, ironmongery fitted, trim finished to match.",
    img: fitDoorsAsset.url,
  },
];

const INTERIORS: { title: string; text: string; img?: string }[] = [
  {
    title: "Office partitioning",
    text: "Divide space into working rooms without altering the shell.",
    img: interiorPartitioning,
  },
  {
    title: "Paint works",
    text: "Interior and exterior painting, prep through to top coat.",
    img: interiorPaintAsset.url,
  },
  {
    title: "Gypsum designing",
    text: "Ceiling designs, coves and bulkheads cast on site.",
  },
  {
    title: "Wall tiling",
    text: "Marble, ceramic and porcelain wall finishes for bathrooms and feature walls.",
    img: interiorWallTilingAsset.url,
  },
  {
    title: "Floor tiling",
    text: "Tile supply and laying for floors and wet areas.",
    img: interiorTilingJobAsset.url,
  },
];

const PERKS = [
  {
    icon: Ruler,
    title: "Free site visits",
    text: "We come out and measure before anything is priced.",
  },
  {
    icon: FileText,
    title: "Free quotation",
    text: "Itemised list, no charge, no obligation to proceed.",
  },
  {
    icon: Truck,
    title: "Free delivery within 5km",
    text: "Anything within 5km of the depot lands at no extra cost.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink/15 bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden
            className="grid h-11 w-11 shrink-0 place-items-center bg-ink font-display text-xl text-lime"
          >
            E
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-tight sm:text-lg">
              Elvash Hardware
            </span>
            <span className="eyebrow block truncate text-muted-foreground">
              Nairobi, Kenya
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-xs uppercase tracking-widest text-ink/75 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="hidden items-center gap-2 bg-primary px-4 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-ink sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
          </a>
          <a
            href={`tel:${PHONE}`}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="grid h-11 w-11 shrink-0 place-items-center bg-primary text-primary-foreground sm:hidden"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center border-2 border-ink/20 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-2 border-ink/15 bg-card lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border px-5 py-4 font-mono text-sm uppercase tracking-widest"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
      <HazardStripe className="h-2" />
    </header>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b-2 border-ink/15">
          <img
            src={heroYard}
            alt="Elvash Hardware builder's depot with stacked building materials"
            width={1600}
            height={1100}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-steel-dark/85" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow flex items-center gap-3 text-lime">
                <span aria-hidden className="inline-block h-2 w-2 bg-lime" />
                NAIROBI&apos;S . BUILDERS . SOLUION
              </p>
              <h1 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-background sm:text-6xl lg:text-7xl">
                From foundation
                <br />
                <span className="text-crimson-bright">to finish.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
                We supply and fit materials. Cement, cable, pipe and steel off
                the shelf — through to kitchens, wardrobes, doors and finished
                interiors. Free site visit, free quotation, free delivery within
                5km.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 bg-primary px-6 py-4 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-caution hover:text-ink"
                >
                  Request a free quote <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#depot"
                  className="inline-flex items-center gap-2 border-2 border-background/40 px-6 py-4 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:border-lime hover:text-lime"
                >
                  See what we stock
                </a>
              </div>
            </div>

            <div className="rivets border-2 border-lime/40 bg-ink/50 p-6">
              <p className="eyebrow text-lime">No charge</p>
              <ul className="mt-4 divide-y divide-background/15">
                {PERKS.map((p) => (
                  <li key={p.title} className="flex items-start gap-3 py-3">
                    <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                    <span>
                      <span className="block font-mono text-sm uppercase tracking-wider text-background">
                        {p.title}
                      </span>
                      <span className="block text-sm text-background/65">
                        {p.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-b-2 border-ink/15 bg-card">
          <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-3">
            {PERKS.map((p) => (
              <div key={p.title} className="bg-card px-5 py-7 sm:px-8">
                <p.icon className="h-6 w-6 text-lime-deep" />
                <h2 className="mt-3 font-display text-lg uppercase text-crimson">
                  {p.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <HazardStripe />

        {/* THE DEPOT */}
        <section id="depot" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <Eyebrow>Bays 01 – 05</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl uppercase leading-tight sm:text-5xl">
            THE DEPO
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Five bays. Bring a list or a drawing and we&rsquo;ll pull it
            together.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BAYS.map((bay) => (
              <article
                key={bay.no}
                className="rivets flex flex-col border-2 border-ink/15 bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink/15">
                  <img
                    src={bay.img}
                    alt={bay.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover object-center"
                  />
                  <span className="absolute left-0 top-0 bg-ink px-3 py-2 font-mono text-xs tracking-widest text-lime">
                    BAY {bay.no}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl uppercase leading-tight">
                    {bay.name}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {bay.items.map((i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 font-mono text-sm text-ink/80"
                      >
                        <span
                          aria-hidden
                          className="h-px w-4 shrink-0 bg-primary"
                        />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <HazardStripe />

        {/* SUPPLY & FIT */}
        <section id="supply-fit" className="bg-card">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
            <Eyebrow>Supplied and installed</Eyebrow>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight sm:text-5xl">
              Supply &amp; Fit
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Our own fitters. One party responsible for the material and the
              workmanship.
            </p>

            <div className="mt-10 grid gap-px bg-border lg:grid-cols-[2fr_1fr]">
              <div className="grid gap-px bg-border">
                {FIT.map((f) => (
                  <div
                    key={f.no}
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 bg-card p-6 sm:p-8"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center border-2 border-ink/20 font-mono text-lg">
                      {f.no}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl uppercase leading-tight">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {f.text}
                      </p>
                      {f.img && (
                        <img
                          src={f.img}
                          alt={f.title}
                          loading="lazy"
                          className="mt-4 aspect-[4/3] w-full border-2 border-ink/15 object-cover object-center"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-steel-dark p-6 text-background sm:p-8">
                <p className="eyebrow text-lime">How it works</p>
                <ol className="mt-6 space-y-6">
                  {[
                    {
                      icon: Ruler,
                      t: "Measure",
                      d: "We visit the site and take the measurements ourselves.",
                    },
                    {
                      icon: FileText,
                      t: "Quote",
                      d: "Itemised price for material and labour. Free either way.",
                    },
                    {
                      icon: Hammer,
                      t: "Install",
                      d: "Once the quote is approved, our installers proceed.",
                    },
                  ].map((s, idx) => (
                    <li key={s.t} className="flex gap-4">
                      <s.icon className="mt-1 h-5 w-5 shrink-0 text-lime" />
                      <div className="min-w-0">
                        <p className="font-mono text-sm uppercase tracking-widest">
                          {String(idx + 1).padStart(2, "0")} · {s.t}
                        </p>
                        <p className="mt-1 text-sm text-background/70">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <HazardStripe />

        {/* INTERIORS */}
        <section id="interiors" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <Eyebrow>Design and installation</Eyebrow>
          <h2 className="mt-4 font-display text-3xl uppercase leading-tight sm:text-5xl">
            Interiors
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INTERIORS.map((c, i) => (
              <article
                key={c.title}
                className="flex flex-col border-2 border-ink/15 bg-card p-6"
              >
                <span className="font-mono text-xs tracking-widest text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg uppercase leading-tight">
                  {c.title}
                </h3>
                <span aria-hidden className="mt-4 h-1 w-10 bg-lime" />
                <p className="mt-4 text-sm text-muted-foreground">{c.text}</p>
                {c.img && (
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="mt-5 aspect-[4/3] w-full border-2 border-ink/15 object-cover object-center"
                  />
                )}
              </article>
            ))}
          </div>
        </section>

        <HazardStripe />

        {/* WHY */}
        <section id="why" className="bg-card">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>What it costs you to ask</Eyebrow>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight sm:text-5xl">
                Why Elvash
              </h2>
              <dl className="mt-8 divide-y-2 divide-border border-y-2 border-border">
                <div className="py-6">
                  <dt className="font-display text-lg uppercase text-crimson">
                    Free site visits
                  </dt>
                  <dd className="mt-2 text-sm text-muted-foreground">
                    We come to the site, look at the job and take our own
                    measurements. Nothing to pay, and no obligation to buy
                    anything afterwards.
                  </dd>
                </div>
                <div className="py-6">
                  <dt className="font-display text-lg uppercase text-crimson">
                    Free quotation
                  </dt>
                  <dd className="mt-2 text-sm text-muted-foreground">
                    You get an itemised quote covering materials and labour, so
                    you can see what each line costs before you commit.
                  </dd>
                </div>
                <div className="py-6">
                  <dt className="font-display text-lg uppercase text-crimson">
                    Free delivery within 5km
                  </dt>
                  <dd className="mt-2 text-sm text-muted-foreground">
                    Any order going to a site within 5km of our depot is
                    delivered at no extra charge. Further out, we&rsquo;ll price
                    the transport with the quote.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rivets border-2 border-ink/15 bg-background p-6 sm:p-8">
              <RadiusDiagram />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-steel-dark text-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
            <p className="eyebrow flex items-center gap-3 text-lime">
              <span aria-hidden className="inline-block h-2 w-2 bg-lime" />
              Get in touch
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight sm:text-5xl">
              Contact
            </h2>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <ul className="grid gap-px bg-background/15">
                <li className="bg-steel-dark">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-4 py-5 transition-colors hover:text-lime"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-lime" />
                    <span className="min-w-0">
                      <span className="eyebrow block text-background/60">
                        Phone
                      </span>
                      <span className="block break-words font-mono text-lg">
                        +254 704 025 070
                      </span>
                    </span>
                  </a>
                </li>
                <li className="bg-steel-dark">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 py-5 transition-colors hover:text-lime"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-lime" />
                    <span className="min-w-0">
                      <span className="eyebrow block text-background/60">
                        Email
                      </span>
                      <span className="block break-all font-mono text-lg">
                        {EMAIL}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4 bg-steel-dark py-5">
                  <MapPin className="h-5 w-5 shrink-0 text-lime" />
                  <span className="min-w-0">
                    <span className="eyebrow block text-background/60">
                      Postal address
                    </span>
                    <span className="block font-mono text-lg">
                      P.O. Box 00344-00200, Nairobi, Kenya
                    </span>
                  </span>
                </li>
              </ul>

              <div className="rivets border-2 border-caution/50 bg-ink/40 p-6 sm:p-8">
                <h3 className="font-display text-2xl uppercase leading-tight text-lime">
                  Ready for a free quote?
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-background/80">
                  Call or email with your list, drawings, or a rough idea —
                  we&rsquo;ll arrange a site visit and price it for you, no
                  charge.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center gap-2 bg-primary px-5 py-4 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-caution hover:text-ink"
                  >
                    <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 border-2 border-background/40 px-5 py-4 font-mono text-xs uppercase tracking-widest transition-colors hover:border-lime hover:text-lime"
                  >
                    <Mail className="h-4 w-4" /> Email us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HazardStripe />

      <footer className="bg-ink text-background/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 font-mono text-xs uppercase tracking-widest sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>&copy; {new Date().getFullYear()} Elvash Hardware</p>
          <p className="text-background/50">
            Building · Electrical · Sewer · Plumbing · General Hardware ·
            Interiors
          </p>
        </div>
      </footer>
    </div>
  );
}
