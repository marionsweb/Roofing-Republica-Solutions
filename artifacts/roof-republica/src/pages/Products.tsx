import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WA_BASE = "https://wa.me/2348012345678?text=";

type Category = "All" | "Aluminum" | "Long Span" | "Stone-Coated" | "Decra Tiles" | "Accessories";

const categories: Category[] = ["All", "Aluminum", "Long Span", "Stone-Coated", "Decra Tiles", "Accessories"];

interface Product {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  material: string;
  colors: { name: string; hex: string }[];
  priceRange: string;
  desc: string;
  image: string;
}

const products: Product[] = [
  {
    id: "aluminum-sheet",
    name: "Aluminum Roofing Sheet",
    category: "Aluminum",
    material: "Aluminum",
    colors: [
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Blue", hex: "#3B82F6" },
      { name: "Red", hex: "#EF4444" },
    ],
    priceRange: "₦3,500 – ₦6,000/sheet",
    desc: "Lightweight, corrosion-resistant aluminum sheets ideal for residential roofs. Available in multiple gauges and pre-painted finishes.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=280&fit=crop",
  },
  {
    id: "long-span-sheet",
    name: "Long Span Roofing Sheet",
    category: "Long Span",
    material: "Pre-Painted Steel",
    colors: [
      { name: "Charcoal", hex: "#374151" },
      { name: "Green", hex: "#16A34A" },
      { name: "Terracotta", hex: "#B45309" },
    ],
    priceRange: "₦4,200 – ₦7,500/sheet",
    desc: "Heavy-duty pre-painted steel sheets with longer spans — perfect for commercial buildings and large residential roofs requiring fewer joints.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop",
  },
  {
    id: "stone-coated-tile",
    name: "Stone-Coated Roofing Tile",
    category: "Stone-Coated",
    material: "Stone-Coated Steel",
    colors: [
      { name: "Black", hex: "#1F2937" },
      { name: "Brown", hex: "#92400E" },
      { name: "Red", hex: "#DC2626" },
    ],
    priceRange: "₦2,800 – ₦4,500/tile",
    desc: "Premium stone-coated steel tiles offering excellent durability, noise reduction, and a beautiful natural appearance. Fire and weather resistant.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=280&fit=crop",
  },
  {
    id: "decra-tile",
    name: "Decra Tile",
    category: "Decra Tiles",
    material: "Steel with Stone Coating",
    colors: [
      { name: "Forest Green", hex: "#166534" },
      { name: "Terracotta", hex: "#C2410C" },
      { name: "Slate", hex: "#475569" },
    ],
    priceRange: "₦3,200 – ₦5,000/tile",
    desc: "Genuine Decra tiles — lightweight, wind-resistant, and designed to replicate the look of traditional clay tiles. Ideal for upmarket residential properties.",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=400&h=280&fit=crop",
  },
  {
    id: "ridge-cap",
    name: "Ridge Cap",
    category: "Accessories",
    material: "Aluminum",
    colors: [
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Brown", hex: "#92400E" },
      { name: "Green", hex: "#16A34A" },
    ],
    priceRange: "₦1,500 – ₦2,500/piece",
    desc: "Matching ridge caps to seal and protect roof peaks. Compatible with most aluminum and steel roofing sheets. Weather-sealed profile.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=280&fit=crop&q=60&sat=-100",
  },
  {
    id: "screws-fasteners",
    name: "Roofing Screws & Fasteners",
    category: "Accessories",
    material: "Galvanised Steel",
    colors: [{ name: "Silver", hex: "#C0C0C0" }],
    priceRange: "₦500 – ₦1,200/pack",
    desc: "Self-drilling roofing screws with neoprene washers. Rust-proof galvanized coating for long-lasting performance in Lagos weather.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=280&fit=crop",
  },
  {
    id: "roof-membrane",
    name: "Roof Underlayment / Membrane",
    category: "Accessories",
    material: "Synthetic Polymer",
    colors: [{ name: "Grey", hex: "#6B7280" }],
    priceRange: "₦2,000 – ₦4,000/roll",
    desc: "High-quality synthetic roof underlayment for added waterproofing and thermal insulation beneath roofing sheets. Sold per roll.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=280&fit=crop",
  },
  {
    id: "gutter-system",
    name: "Gutter System",
    category: "Accessories",
    material: "Aluminum",
    colors: [
      { name: "White", hex: "#F9FAFB" },
      { name: "Brown", hex: "#92400E" },
    ],
    priceRange: "₦2,500 – ₦5,000/meter",
    desc: "Seamless aluminum gutter channels and downpipes. Prevents water damage to walls and foundations. Custom lengths available.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop&q=60&sat=-60",
  },
];

export default function Products() {
  const [active, setActive] = useState<Category>("All");

  useEffect(() => {
    document.title = "Roofing Materials Lagos | Roof Republica Products";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Browse our catalogue of roofing materials: aluminum sheets, long span, stone-coated tiles, Decra tiles, and accessories. Competitive prices in Naira. Lagos delivery available.");
  }, []);

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ background: "#1a1a1a" }} className="py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(17 68% 49%)" }}>
            Product Catalogue
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Roofing Materials
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Browse our full range of roofing materials. All prices in Nigerian Naira (₦). WhatsApp us to confirm availability and arrange delivery.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: active === cat ? "hsl(17 68% 49%)" : "#f3f4f6",
                  color: active === cat ? "white" : "#374151",
                  border: "none",
                }}
                data-testid={`filter-${cat.toLowerCase().replace(/ /g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                data-testid={`card-product-${p.id}`}
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-4">
                  <div
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "hsl(17 68% 49%)" }}
                  >
                    {p.category}
                  </div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#1a1a1a" }}>
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>

                  <div className="mb-3">
                    <div className="text-xs text-gray-400 mb-1">Material: {p.material}</div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-xs text-gray-400">Colors:</span>
                      {p.colors.map((c) => (
                        <span
                          key={c.name}
                          className="inline-flex items-center gap-1"
                          title={c.name}
                        >
                          <span
                            className="w-4 h-4 rounded-full border border-gray-200 inline-block"
                            style={{ background: c.hex }}
                          />
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.colors.map((c) => (
                        <span key={c.name} className="text-xs text-gray-400">{c.name}{p.colors.indexOf(c) < p.colors.length - 1 ? "," : ""}</span>
                      ))}
                    </div>
                  </div>

                  <div className="font-bold text-base mb-4" style={{ color: "#1a1a1a" }}>
                    {p.priceRange}
                  </div>

                  <a
                    href={`${WA_BASE}${encodeURIComponent(`Hello, I'm interested in the ${p.name}. Price range: ${p.priceRange}. Please share more details and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90 active:scale-95"
                    style={{ background: "#25D366" }}
                    data-testid={`button-inquire-${p.id}`}
                  >
                    <FaWhatsapp /> Inquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: "#f8f8f8" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
            Can't Find What You Need?
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            We stock far more than what's listed here. Chat with us on WhatsApp and we'll check availability and get you a price instantly.
          </p>
          <a
            href="https://wa.me/2348012345678?text=Hello%2C%20I%27m%20looking%20for%20roofing%20materials%20not%20listed%20on%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#25D366" }}
            data-testid="button-whatsapp-unlisted"
          >
            <FaWhatsapp className="text-lg" /> Ask About Other Products
          </a>
        </div>
      </section>
    </div>
  );
}
