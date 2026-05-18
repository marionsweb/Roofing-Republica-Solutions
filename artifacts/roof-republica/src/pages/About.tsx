import { useEffect } from "react";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import { Link } from "wouter";

const team = [
  {
    name: "Emeka Chukwuemeka",
    role: "Managing Director",
    bio: "With over 15 years in the roofing and construction industry across Lagos, Emeka founded Roof Republica to bring professional-grade roofing services to the fast-growing Lekki-Epe corridor.",
    initial: "EC",
  },
  {
    name: "Biodun Adewale",
    role: "Senior Site Supervisor",
    bio: "Biodun oversees all installation and repair projects. His 12 years of hands-on experience means every job is done right — on time and within budget.",
    initial: "BA",
  },
  {
    name: "Chidinma Obi",
    role: "Sales Manager",
    bio: "Chidinma leads our sales and customer relations team. She ensures every client — from individual homeowners to large contractors — gets the right product at the right price.",
    initial: "CO",
  },
];

const whyUs = [
  "Genuine, manufacturer-certified roofing materials — no substandard substitutes",
  "Experienced installation crews trained to the highest industry standards",
  "Full project management from site assessment to final handover",
  "Transparent, itemized quotations with no hidden charges",
  "Fast response time — especially for emergency roof repairs",
  "Post-installation support and annual maintenance plans",
];

const brands = [
  "Decra Roofing Systems",
  "Gerard Roofing Technologies",
  "Metrotile Nigeria",
  "ColorSteel West Africa",
  "Danpastor Roofing",
  "Boral Roofing",
];

export default function About() {
  useEffect(() => {
    document.title = "About Roof Republica | Roofing Company Bogije Lagos";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Learn about Roof Republica — Lagos' trusted roofing company based in Bogije, along the Lekki-Epe Expressway. Our story, mission, team, and brand partnerships.");
  }, []);

  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ background: "#1a1a1a" }} className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(17 68% 49%)" }}>
            Our Story
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Built to Last.<br />Built for Lagos.
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-lg">
            Roof Republica was born from a simple conviction: people along the Lekki-Epe corridor deserve a roofing company that delivers quality without compromise.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
              How We Started
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Roof Republica was founded over a decade ago in Bogije, right along the Lekki-Epe Expressway — an area that was just beginning its explosive growth into one of Lagos' most active real estate zones.
              </p>
              <p>
                Our founder saw a problem: homeowners and contractors were struggling to find a reliable, honest supplier and installer in the area. Most had to travel long distances or deal with suppliers who couldn't guarantee the quality of their materials.
              </p>
              <p>
                We set up shop to change that. Starting with a small materials depot, we quickly built a reputation for stocking genuine, manufacturer-certified products and delivering professional installation services. Word spread fast.
              </p>
              <p>
                Today, we've completed over 500 projects — from bungalows in Ajah to commercial warehouses in Ibeju-Lekki. We serve residential homeowners, commercial property developers, and professional contractors, all from our base in Bogije.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop" alt="Completed roofing project" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square mt-8">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" alt="Roof installation in Lagos" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop" alt="Roofing materials" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square mt-8">
              <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=400&h=400&fit=crop" alt="Our team at work" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: "#f8f8f8" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-7 h-7" />,
                title: "Our Mission",
                text: "To provide every client — whether a first-time homeowner or a large contractor — with quality roofing materials, expert installation, and honest service at competitive prices.",
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: "Our Standard",
                text: "We never compromise on materials. Every sheet, tile, and accessory we sell is sourced from reputable manufacturers and verified for quality before it reaches our yard.",
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Our Commitment",
                text: "We treat every project as if it's our own home. From the initial quote to the final inspection, we're with you every step of the way.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "hsl(17 68% 49% / 0.12)", color: "hsl(17 68% 49%)" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1a1a1a" }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
              Why Choose Roof Republica
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg border border-gray-100">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(17 68% 49%)" }} />
                <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20" style={{ background: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(17 68% 49%)" }}>
              The Team
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The People Behind the Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl p-6 text-center"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                data-testid={`card-team-${member.name.toLowerCase().replace(/ /g, "-")}`}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                  style={{ background: "hsl(17 68% 49%)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {member.initial}
                </div>
                <h3 className="font-bold text-white text-lg">{member.name}</h3>
                <div className="text-xs font-semibold uppercase tracking-wider mt-1 mb-3" style={{ color: "hsl(17 68% 49%)" }}>
                  {member.role}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partnerships */}
      <section className="py-14" style={{ background: "#f8f8f8" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(17 68% 49%)" }}>
            Partnerships
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
            Authorized Dealers & Brand Partners
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto">
            We are authorized dealers for leading roofing brands — giving you the assurance that every material we supply is genuine and backed by manufacturer warranties.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand) => (
              <div
                key={brand}
                className="px-5 py-3 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-600"
                data-testid={`badge-brand-${brand.toLowerCase().replace(/ /g, "-")}`}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to Work With Us?
          </h2>
          <p className="text-gray-500 mb-8">
            Get in touch today for a free consultation on your roofing project.
          </p>
          <Link
            href="/quote"
            className="inline-block px-8 py-4 rounded-lg text-white font-bold transition-opacity hover:opacity-90"
            style={{ background: "hsl(17 68% 49%)" }}
            data-testid="button-about-cta"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
