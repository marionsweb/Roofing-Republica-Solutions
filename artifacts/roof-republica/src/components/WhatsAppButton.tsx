import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/2348012345678?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20your%20roofing%20services.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
      style={{ background: "#25D366" }}
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp-float"
    >
      <FaWhatsapp className="text-white text-2xl" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
