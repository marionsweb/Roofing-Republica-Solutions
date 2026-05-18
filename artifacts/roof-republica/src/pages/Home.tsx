import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Star, ArrowRight, Shield, Wrench, Package } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "https://wa.me/2348012345678?text=Hello%2C%20I%27d%20like%20to%20get%20a%20free%20quote.";

const services = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Roofing Materials Sales",
    desc: "Quality aluminum, long span, stone-coated tiles, decra tiles, and accessories at the best prices in Lagos.",
    href: "/products",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "New Roof Installation",
    desc: "Professional installation for residential and commercial properties. We handle everything from start to finish.",
    href: "/services",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Roof Repairs & Maintenance",
    desc: "Fast, reliable repairs for leaking, damaged, or aging roofs. We restore your roof to full strength.",
    href: "/services",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years in Business" },
  { value: "3", label: "Customer Types Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    name: "Adebayo Olusegun",
    location: "Ajah, Lagos",
    role: "Homeowner",
    text: "Roof Republica installed a complete stone-coated roof on my duplex in just 5 days. The quality is outstanding and the team was professional throughout. I'd recommend them to anyone on the Lekki axis.",
    rating: 5,
  },
  {
    name: "Mrs Nkechi Okafor",
    location: "Sangotedo, Lagos",
    role: "Property Developer",
    text: "I've used Roof Republica on three of my properties now. Their pricing is fair, materials are genuine, and they never cut corners. My go-to roofing company in Lagos.",
    rating: 5,
  },
  {
    name: "Emeka Nwosu",
    location: "Ibeju-Lekki, Lagos",
    role: "Contractor",
    text: "As a contractor, I need a supplier I can trust. Roof Republica always delivers on time, the long span sheets are top quality, and their after-sales support is excellent.",
    rating: 5,
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Roof Republica | Lagos' Most Trusted Roofing Company";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Roof Republica is Lagos' leading roofing company. We sell roofing materials, install new roofs, and handle repairs along the Lekki-Epe corridor. Get a free quote today.");
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at right top, hsl(17 68% 49% / 0.6) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: "hsl(17 68% 49% / 0.15)", color: "hsl(17 68% 49%)", border: "1px solid hsl(17 68% 49% / 0.3)" }}
          >
            Bogije, Lekki-Epe Expressway, Lagos
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            data-testid="heading-hero"
          >
            Lagos' Most
            <br />
            <span style={{ color: "hsl(17 68% 49%)" }}>Trusted Roofing</span>
            <br />
            Company
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium roofing materials, expert installation, and reliable repairs for residential and commercial properties along the Lekki-Epe corridor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 rounded-lg text-white font-bold text-base transition-all hover:opacity-90 active:scale-95"
              style={{ background: "hsl(17 68% 49%)" }}
              data-testid="button-hero-quote"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-lg font-bold text-base transition-all hover:bg-white/10 active:scale-95 flex items-center justify-center gap-2"
              style={{ border: "2px solid rgba(255,255,255,0.3)", color: "white" }}
              data-testid="button-hero-portfolio"
            >
              View Our Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-6 sm:gap-10">
            {["500+ Projects Completed", "10+ Years Experience", "Lekki-Epe's #1 Choice"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(17 68% 49%)" }} />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "hsl(17 68% 49%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} data-testid={`stat-${s.label.toLowerCase().replace(/ /g, "-")}`}>
              <div className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.value}
              </div>
              <div className="text-white/80 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "hsl(17 68% 49%)" }}
            >
              What We Do
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Complete Roofing Solutions
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              From sourcing the best roofing materials to full installation and ongoing maintenance — we cover every aspect of your roofing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group block p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-200"
                data-testid={`card-service-${s.title.toLowerCase().replace(/ /g, "-")}`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-orange-600"
                  style={{ background: "hsl(17 68% 49% / 0.12)", color: "hsl(17 68% 49%)" }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div
                  className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                  style={{ color: "hsl(17 68% 49%)" }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20" style={{ background: "#f8f8f8" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(17 68% 49%)" }}>
                Why Roof Republica
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
                Built on Trust.<br />Backed by Experience.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We've been the roofing partner of choice for homeowners, property developers, and contractors along the Lekki-Epe expressway for over a decade. Our reputation is built on honest pricing, genuine materials, and work that lasts.
              </p>
              <ul className="space-y-4">
                {[
                  "Genuine, manufacturer-certified roofing materials",
                  "Experienced installation crews with 10+ years on-site",
                  "Fast turnaround — most projects completed within 5-7 days",
                  "Transparent pricing with no hidden costs",
                  "Post-installation support and maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(17 68% 49%)" }} />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "#1a1a1a" }}
                data-testid="button-learn-more-about"
              >
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden aspect-square bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop"
                  alt="Completed roofing project in Lagos"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square bg-gray-200 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
                  alt="Professional roof installation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop"
                  alt="Roofing materials"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square bg-gray-200 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=400&h=400&fit=crop"
                  alt="Residential roofing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20" style={{ background: "#1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(17 68% 49%)" }}>
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                data-testid={`card-testimonial-${t.name.toLowerCase().replace(/ /g, "-")}`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "hsl(17 68% 49%)" }} />
                  ))}
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs mt-0.5">{t.role} · {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Get a free, no-obligation quote for your roofing project. We serve Ajah, Sangotedo, Ibeju-Lekki, Bogije, Chevron, and all areas along the Lekki-Epe Expressway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 rounded-lg text-white font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: "hsl(17 68% 49%)" }}
              data-testid="button-cta-quote"
            >
              Get a Free Quote
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-base transition-colors hover:bg-green-600 flex items-center justify-center gap-2 text-white"
              style={{ background: "#25D366" }}
              data-testid="button-cta-whatsapp"
            >
              <FaWhatsapp className="text-lg" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
