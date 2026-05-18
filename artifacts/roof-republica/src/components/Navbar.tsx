import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home } from "lucide-react";

const WHATSAPP = "https://wa.me/2348012345678?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20your%20roofing%20services.";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || open ? "#1a1a1a" : "rgba(26,26,26,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-logo">
            <div
              className="w-8 h-8 rounded flex items-center justify-center"
              style={{ background: "hsl(17 68% 49%)" }}
            >
              <Home className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-white font-bold text-lg tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Roof Republica
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: location === l.href ? "hsl(17 68% 49%)" : "rgba(255,255,255,0.8)",
                }}
                data-testid={`link-nav-${l.label.toLowerCase()}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/quote"
              className="px-4 py-2 rounded text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80"
              style={{ background: "hsl(17 68% 49%)" }}
              data-testid="button-get-quote-nav"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10" style={{ background: "#1a1a1a" }}>
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-base font-medium border-b border-white/10 last:border-0"
                style={{ color: location === l.href ? "hsl(17 68% 49%)" : "rgba(255,255,255,0.85)" }}
                data-testid={`link-mobile-${l.label.toLowerCase()}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="mt-3 py-3 rounded text-center text-white font-semibold"
              style={{ background: "hsl(17 68% 49%)" }}
              data-testid="button-mobile-quote"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
