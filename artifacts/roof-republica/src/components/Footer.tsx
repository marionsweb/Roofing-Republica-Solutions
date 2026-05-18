import { Link } from "wouter";
import { Home, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#111111", color: "rgba(255,255,255,0.75)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
              style={{ background: "hsl(17 68% 49%)" }}
            >
              <Home className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-white font-bold text-lg"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Roof Republica
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Lagos' most trusted roofing company. Quality materials, expert installation, and reliable repairs along the Lekki-Epe corridor.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/portfolio", label: "Our Projects" },
              { href: "/quote", label: "Get a Quote" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors" data-testid={`footer-link-${l.label.toLowerCase().replace(/ /g, "-")}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Roofing Materials Sales",
              "New Roof Installation",
              "Roof Repairs",
              "Roof Inspection",
            ].map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-white transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(17 68% 49%)" }} />
              <span>Emmanuel Plaza, Bogije, Lekki-Epe Expressway, Lagos</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(17 68% 49%)" }} />
              <a href="tel:+2348012345678" className="hover:text-white transition-colors">+234 801 234 5678</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(17 68% 49%)" }} />
              <a href="mailto:info@roofrepublica.ng" className="hover:text-white transition-colors">info@roofrepublica.ng</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(17 68% 49%)" }} />
              <span>Mon–Sat 8am–6pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>&copy; 2024 Roof Republica. All rights reserved.</span>
          <span>Emmanuel Plaza, Bogije, Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
