import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your location"),
  serviceType: z.string().min(1, "Please select a service type"),
  projectSize: z.string().min(1, "Please select a project size"),
  details: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "Materials Purchase", label: "Materials Purchase" },
  { value: "New Roof Installation", label: "New Roof Installation" },
  { value: "Roof Repair", label: "Roof Repair" },
  { value: "Roof Inspection", label: "Roof Inspection" },
];

const sizeOptions = [
  { value: "", label: "Select project size..." },
  { value: "Small (under 100 sqm)", label: "Small — under 100 sqm" },
  { value: "Medium (100–300 sqm)", label: "Medium — 100–300 sqm" },
  { value: "Large (300 sqm+)", label: "Large — 300 sqm+" },
];

export default function Quote() {
  useEffect(() => {
    document.title = "Get a Free Roofing Quote | Roof Republica Lagos";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Get a free roofing quote from Roof Republica in Lagos. Fill out the form and we'll contact you directly on WhatsApp. Serving Ajah, Ibeju-Lekki, Sangotedo, and the Lekki-Epe corridor.");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const msg =
      `Hello Roof Republica, I'd like to request a quote.\n\n` +
      `Name: ${data.fullName}\n` +
      `Phone: ${data.phone}\n` +
      `Location: ${data.location}\n` +
      `Service: ${data.serviceType}\n` +
      `Project Size: ${data.projectSize}\n` +
      (data.details ? `Details: ${data.details}` : "");
    const url = `https://wa.me/2348012345678?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border text-sm transition-colors outline-none focus:ring-2";
  const inputStyle = { borderColor: "#e5e7eb", color: "#1a1a1a", background: "#fff" };

  return (
    <div style={{ paddingTop: "64px" }}>
      <section style={{ background: "#1a1a1a" }} className="py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(17 68% 49%)" }}>
            Free Quote
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Get a Free Roofing Quote
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Fill in your details and we'll reach out on WhatsApp with a no-obligation quote tailored to your project.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20" style={{ background: "#f8f8f8" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Info */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}>
              What Happens Next?
            </h2>
            <div className="space-y-5">
              {[
                { step: "1", title: "Submit Your Details", desc: "Fill out the form with your project information." },
                { step: "2", title: "WhatsApp Redirect", desc: "You'll be taken to WhatsApp with your details pre-filled in the message." },
                { step: "3", title: "We Respond Fast", desc: "Our team will review your request and respond within a few hours." },
                { step: "4", title: "Site Visit or Quote", desc: "For larger jobs, we'll arrange a site visit. For materials, we'll share pricing immediately." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5"
                    style={{ background: "hsl(17 68% 49%)" }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>{item.title}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl" style={{ background: "#1a1a1a" }}>
              <div className="flex items-center gap-2 mb-2">
                <FaWhatsapp className="text-green-400 text-lg" />
                <span className="text-white font-semibold text-sm">Prefer to message directly?</span>
              </div>
              <a
                href="https://wa.me/2348012345678?text=Hello%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20roofing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 text-sm hover:text-green-300 transition-colors"
                data-testid="link-direct-whatsapp"
              >
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#1a1a1a" }}>
                  Full Name <span style={{ color: "hsl(17 68% 49%)" }}>*</span>
                </label>
                <input
                  {...register("fullName")}
                  placeholder="e.g. Adebayo Olusegun"
                  className={inputClass}
                  style={inputStyle}
                  data-testid="input-full-name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#1a1a1a" }}>
                  Phone Number <span style={{ color: "hsl(17 68% 49%)" }}>*</span>
                </label>
                <input
                  {...register("phone")}
                  placeholder="+234 801 234 5678"
                  className={inputClass}
                  style={inputStyle}
                  data-testid="input-phone"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#1a1a1a" }}>
                  Location / Area <span style={{ color: "hsl(17 68% 49%)" }}>*</span>
                </label>
                <input
                  {...register("location")}
                  placeholder="e.g. Ajah, Sangotedo, Ibeju-Lekki"
                  className={inputClass}
                  style={inputStyle}
                  data-testid="input-location"
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#1a1a1a" }}>
                  Type of Service <span style={{ color: "hsl(17 68% 49%)" }}>*</span>
                </label>
                <select
                  {...register("serviceType")}
                  className={inputClass}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  data-testid="select-service-type"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="text-red-500 text-xs mt-1">{errors.serviceType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#1a1a1a" }}>
                  Project Size <span style={{ color: "hsl(17 68% 49%)" }}>*</span>
                </label>
                <select
                  {...register("projectSize")}
                  className={inputClass}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  data-testid="select-project-size"
                >
                  {sizeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.projectSize && (
                  <p className="text-red-500 text-xs mt-1">{errors.projectSize.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#1a1a1a" }}>
                  Additional Details
                  <span className="text-gray-400 font-normal ml-1">(optional)</span>
                </label>
                <textarea
                  {...register("details")}
                  rows={4}
                  placeholder="Describe your roof type, any existing issues, specific materials you're interested in, or any other details..."
                  className={inputClass}
                  style={{ ...inputStyle, resize: "vertical" }}
                  data-testid="textarea-details"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-3 transition-opacity hover:opacity-90 active:scale-95"
                style={{ background: "#25D366" }}
                data-testid="button-submit-quote"
              >
                <FaWhatsapp className="text-xl" />
                Send Quote Request on WhatsApp
              </button>

              <p className="text-gray-400 text-xs text-center flex items-center justify-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Free, no-obligation quote. We usually respond within 2 hours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
