import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/2348012345678?text=Hello%2C%20I%27d%20like%20to%20get%20in%20touch%20with%20Roof%20Republica.";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Roof Republica | Bogije, Lekki-Epe Lagos";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Contact Roof Republica at Emmanuel Plaza, Bogije, Lekki-Epe Expressway, Lagos. Call, WhatsApp, or email us for roofing materials, installation, and repairs.");
  }, []);

  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ background: "#1a1a1a" }} className="py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(17 68% 49%)" }}>
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Contact Us
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            We're based in Bogije, along the Lekki-Epe Expressway. Come visit us, call, or send a WhatsApp message — we'll get back to you fast.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-8" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
              Reach Us
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(17 68% 49% / 0.12)", color: "hsl(17 68% 49%)" }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "#1a1a1a" }}>Address</div>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    Emmanuel Plaza, Bogije<br />
                    Lekki-Epe Expressway, Lagos<br />
                    Nigeria
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(17 68% 49% / 0.12)", color: "hsl(17 68% 49%)" }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "#1a1a1a" }}>Phone</div>
                  <a
                    href="tel:+2348012345678"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                    data-testid="link-phone"
                  >
                    +234 801 234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#dcfce7", color: "#16a34a" }}
                >
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "#1a1a1a" }}>WhatsApp</div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: "#16a34a" }}
                    data-testid="link-whatsapp-contact"
                  >
                    Chat with us on WhatsApp
                  </a>
                  <div className="text-gray-400 text-xs mt-0.5">+234 801 234 5678</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(17 68% 49% / 0.12)", color: "hsl(17 68% 49%)" }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "#1a1a1a" }}>Email</div>
                  <a
                    href="mailto:info@roofrepublica.ng"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                    data-testid="link-email"
                  >
                    info@roofrepublica.ng
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(17 68% 49% / 0.12)", color: "hsl(17 68% 49%)" }}
                >
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "#1a1a1a" }}>Business Hours</div>
                  <div className="text-gray-600 text-sm space-y-0.5">
                    <div>Monday – Saturday: 8:00am – 6:00pm</div>
                    <div className="text-gray-400">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90 active:scale-95"
                style={{ background: "#25D366" }}
                data-testid="button-whatsapp-contact"
              >
                <FaWhatsapp className="text-lg" /> WhatsApp Us
              </a>
              <a
                href="tel:+2348012345678"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors border-2 hover:bg-gray-50"
                style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
                data-testid="button-call-contact"
              >
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
              Find Us
            </h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: "400px" }}>
              <iframe
                title="Roof Republica Location — Bogije, Lagos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1!2d3.8!3d6.4800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5!2sBogije%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="map-embed"
              />
            </div>
            <div
              className="mt-4 p-4 rounded-xl text-sm"
              style={{ background: "#f8f8f8", color: "#374151" }}
            >
              <div className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>Getting Here</div>
              <p>
                We're located at Emmanuel Plaza, Bogije, along the Lekki-Epe Expressway. Coming from Lagos Island, drive past Ajah, through Abraham Adesanya Roundabout, continue on the expressway past Abijo until you reach Bogije.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Areas */}
      <section className="py-12" style={{ background: "#f8f8f8" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg font-bold mb-4" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
            Areas We Serve
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            We cover all areas along the Lekki-Epe Expressway and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Bogije", "Ajah", "Sangotedo", "Ibeju-Lekki", "Abraham Adesanya",
              "Abijo", "Lekki Phase 1", "Lekki Phase 2", "Chevron", "Epe",
              "Agbowa", "Victoria Island", "Yaba",
            ].map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600"
                data-testid={`badge-area-${area.toLowerCase().replace(/ /g, "-")}`}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
