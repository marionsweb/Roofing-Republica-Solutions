import { useEffect } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

const WA_BASE = "https://wa.me/2348012345678?text=";

const services = [
  {
    id: "materials",
    tag: "01",
    title: "Roofing Materials Sales",
    subtitle: "Wholesale & Retail",
    desc: "We stock the widest range of quality roofing materials in the Lekki-Epe area. Whether you're a contractor buying in bulk or a homeowner sourcing for a single project, we have the right materials at competitive prices.",
    benefits: [
      "Aluminum roofing sheets — residential grade to industrial grade",
      "Long span roofing sheets — durable, pre-painted steel",
      "Stone-coated steel roofing tiles — weather and fire resistant",
      "Decra tiles — lightweight, premium aesthetic",
      "Accessories: ridge caps, gutters, fasteners, membranes",
      "Genuine manufacturer-certified products",
    ],
    waMsg: encodeURIComponent("Hello, I'd like to inquire about your roofing materials. Please can you share your current price list?"),
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
  {
    id: "installation",
    tag: "02",
    title: "New Roof Installation",
    subtitle: "Residential & Commercial",
    desc: "From bungalows and duplexes to commercial warehouses and office buildings, our installation teams deliver precision workmanship. We manage the entire process — supply, installation, and final inspection.",
    benefits: [
      "Site assessment and structural evaluation before work begins",
      "Full project management from delivery to installation",
      "Experienced crews with 10+ years of installation experience",
      "Residential: bungalows, duplexes, terraces, estate houses",
      "Commercial: warehouses, factories, office complexes",
      "Post-installation waterproofing and finishing",
    ],
    waMsg: encodeURIComponent("Hello, I need a new roof installed. Please can I get a quote for my property?"),
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: "repairs",
    tag: "03",
    title: "Roof Repairs & Maintenance",
    subtitle: "Fast. Reliable. Guaranteed.",
    desc: "A leaking or damaged roof needs urgent attention. Our repair team responds quickly across the Lekki-Epe corridor to diagnose and fix roofing problems — from minor leaks to major storm damage.",
    benefits: [
      "Emergency leak repair — fast response across the Lekki axis",
      "Full roof inspection and damage assessment",
      "Replacement of damaged or corroded roofing sheets",
      "Re-fastening of loose panels and ridge caps",
      "Gutter cleaning, repair, and replacement",
      "Annual maintenance plans for property managers",
    ],
    waMsg: encodeURIComponent("Hello, my roof needs repair. Please can your team come and assess the damage?"),
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=600&h=400&fit=crop",
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Roofing Services Lagos | Roof Republica";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Roof Republica offers roofing materials sales, new roof installation, and roof repairs in Lagos. Serving Ajah, Ibeju-Lekki, Sangotedo, and the entire Lekki-Epe corridor.");
  }, []);

  return (
    <div style={{ paddingTop: "64px" }}>
      {/* Page Header */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "#1a1a1a" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(17 68% 49%)" }}>
            Our Services
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Complete Roofing Solutions for Lagos
          </h1>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            From roofing materials to full installation and repairs — everything you need for a strong, weatherproof roof. Serving residential, commercial, and contractor clients across the Lekki-Epe Expressway.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="bg-white">
        {services.map((s, idx) => (
          <section
            key={s.id}
            id={s.id}
            className="py-16 sm:py-20 border-b border-gray-100 last:border-0"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-4xl font-bold opacity-20"
                      style={{ color: "hsl(17 68% 49%)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {s.tag}
                    </span>
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "hsl(17 68% 49%)" }}
                    >
                      {s.subtitle}
                    </span>
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(17 68% 49%)" }} />
                        <span className="text-gray-600 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`${WA_BASE}${s.waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90 active:scale-95"
                      style={{ background: "#25D366" }}
                      data-testid={`button-whatsapp-${s.id}`}
                    >
                      <FaWhatsapp className="text-lg" /> Request a Quote on WhatsApp
                    </a>
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors border-2 hover:bg-gray-50"
                      style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
                      data-testid={`button-form-quote-${s.id}`}
                    >
                      Fill a Quote Form <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={`rounded-2xl overflow-hidden shadow-lg aspect-video lg:aspect-square ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16" style={{ background: "hsl(17 68% 49%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Not Sure What You Need?
          </h2>
          <p className="text-white/80 mb-8">
            Chat with our team on WhatsApp and we'll help you figure out exactly what your roof needs — at no cost.
          </p>
          <a
            href="https://wa.me/2348012345678?text=Hello%2C%20I%27d%20like%20to%20discuss%20my%20roofing%20needs."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-base transition-all hover:bg-green-600 active:scale-95"
            style={{ background: "#25D366" }}
            data-testid="button-cta-whatsapp-services"
          >
            <FaWhatsapp className="text-xl" /> Chat With Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
