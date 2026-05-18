import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

type ProjectType = "All" | "Residential" | "Commercial";

const filters: ProjectType[] = ["All", "Residential", "Commercial"];

const projects = [
  {
    id: 1,
    type: "Residential" as const,
    title: "5-Bedroom Duplex Re-roofing",
    location: "Ajah, Lagos",
    year: 2023,
    material: "Stone-Coated Steel Tiles",
    desc: "Complete roof replacement for a large duplex using stone-coated steel tiles. Included full structural inspection, old roof removal, and new waterproofing layer.",
    before: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=340&fit=crop&sat=-80&bright=80",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=340&fit=crop",
  },
  {
    id: 2,
    type: "Commercial" as const,
    title: "Warehouse Industrial Roofing",
    location: "Ibeju-Lekki, Lagos",
    year: 2023,
    material: "Long Span Steel Sheets",
    desc: "3,500 sqm of long span roofing installed for a logistics warehouse. Delivered ahead of schedule with full site management.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=340&fit=crop",
  },
  {
    id: 3,
    type: "Residential" as const,
    title: "Terrace Housing Complex",
    location: "Sangotedo, Lagos",
    year: 2022,
    material: "Aluminum Roofing Sheets",
    desc: "Roofing for a 12-unit terrace housing estate. Aluminum sheets in terracotta color, matching estate aesthetic.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=340&fit=crop",
  },
  {
    id: 4,
    type: "Commercial" as const,
    title: "Office Complex — Phase 2",
    location: "Chevron, Lagos",
    year: 2023,
    material: "Decra Tiles",
    desc: "Premium Decra tile installation for a 4-storey office complex. Selected for its lightweight properties and upmarket finish.",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=500&h=340&fit=crop",
  },
  {
    id: 5,
    type: "Residential" as const,
    title: "Bungalow Roof Repair",
    location: "Lekki Phase 1, Lagos",
    year: 2024,
    material: "Stone-Coated Steel",
    desc: "Emergency roof repair after storm damage. Completed within 48 hours of assessment. New waterproofing membrane and ridge caps installed.",
    before: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=340&fit=crop&sat=-80",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=340&fit=crop&hue-rotate=30",
  },
  {
    id: 6,
    type: "Commercial" as const,
    title: "Church Building Roofing",
    location: "Bogije, Lagos",
    year: 2022,
    material: "Long Span Steel Sheets",
    desc: "Full roofing for a large church auditorium. 2,100 sqm of long span sheets with custom-fabricated ridge caps and guttering.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=340&fit=crop",
  },
  {
    id: 7,
    type: "Residential" as const,
    title: "Luxury Villa — New Build",
    location: "Lekki Phase 2, Lagos",
    year: 2024,
    material: "Decra Tiles — Forest Green",
    desc: "New roof installation for a luxury 6-bedroom villa. Decra tiles in forest green selected by the homeowner for a premium country aesthetic.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=340&fit=crop&hue-rotate=120",
  },
  {
    id: 8,
    type: "Commercial" as const,
    title: "School Block Extension",
    location: "Epe, Lagos",
    year: 2023,
    material: "Aluminum Roofing Sheets",
    desc: "Roofing for a 6-classroom school block extension. Budget-conscious design using quality aluminum sheets with proper insulation.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&h=340&fit=crop",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<ProjectType>("All");

  useEffect(() => {
    document.title = "Roofing Projects Portfolio Lagos | Roof Republica";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "View Roof Republica's completed roofing projects in Ajah, Ibeju-Lekki, Sangotedo, Chevron, and across Lagos. Residential and commercial roofing portfolio.");
  }, []);

  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ background: "#1a1a1a" }} className="py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(17 68% 49%)" }}>
            Our Work
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Projects We're Proud Of
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            From family homes in Ajah to commercial complexes in Ibeju-Lekki — every project reflects our commitment to quality workmanship and lasting results.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: active === f ? "hsl(17 68% 49%)" : "#f3f4f6",
                  color: active === f ? "white" : "#374151",
                }}
                data-testid={`filter-portfolio-${f.toLowerCase()}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                data-testid={`card-project-${p.id}`}
              >
                {p.before && p.after ? (
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 grid grid-cols-2">
                      <div className="relative overflow-hidden">
                        <img src={p.before} alt="Before" className="w-full h-full object-cover" loading="lazy" />
                        <span className="absolute bottom-2 left-2 text-xs text-white font-bold bg-black/60 px-2 py-0.5 rounded">Before</span>
                      </div>
                      <div className="relative overflow-hidden">
                        <img src={p.after} alt="After" className="w-full h-full object-cover" loading="lazy" />
                        <span className="absolute bottom-2 right-2 text-xs text-white font-bold bg-black/60 px-2 py-0.5 rounded">After</span>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/80 -translate-x-0.5" />
                  </div>
                ) : (
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={p.image!}
                      alt={p.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: p.type === "Residential" ? "hsl(17 68% 49% / 0.12)" : "rgba(26,26,26,0.08)",
                        color: p.type === "Residential" ? "hsl(17 68% 49%)" : "#374151",
                      }}
                    >
                      {p.type}
                    </span>
                    <span className="text-xs text-gray-400">{p.year}</span>
                  </div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#1a1a1a" }}>
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                    <MapPin className="w-3 h-3" />
                    {p.location}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-2">{p.desc}</p>
                  <div className="text-xs font-medium" style={{ color: "hsl(17 68% 49%)" }}>
                    Material: {p.material}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "hsl(17 68% 49%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Want Your Project to Look Like This?
          </h2>
          <p className="text-white/80 mb-6">
            Get a free quote for your residential or commercial roofing project today.
          </p>
          <a
            href="/quote"
            className="inline-block px-8 py-4 rounded-lg font-bold text-base transition-colors hover:bg-gray-100"
            style={{ background: "white", color: "hsl(17 68% 49%)" }}
            data-testid="button-portfolio-cta"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}
