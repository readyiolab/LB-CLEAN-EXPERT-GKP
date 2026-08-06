import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Top bar */}
      <div className="border-b border-background/10">
        <div className="container-full py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <Link
                to="/"
                className="font-serif text-3xl md:text-4xl tracking-tight text-background"
              >
                Cleaning Expert
              </Link>
              <p className="mt-3 text-sm text-background/50 leading-relaxed max-w-sm">
                Professional deep cleaning services in Gorakhpur. Available 24/7 for homes, offices, and commercial spaces.
              </p>
            </div>

            {/* Quick contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+91-9115339900"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-[0.05em] text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91-9115339900
              </a>
              <a
                href="https://wa.me/919115339900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold tracking-[0.05em] text-white hover:bg-[#20bd5a] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-full py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Home Services */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Home Services
            </h4>
            <ul className="space-y-3">
              {[
                "Deep Home Cleaning",
                "Kitchen Deep Cleaning",
                "Bathroom Cleaning",
                "Sofa Cleaning",
                "Carpet Cleaning",
                "Mattress Cleaning",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="tel:+91-9115339900"
                    className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial Services */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Commercial Services
            </h4>
            <ul className="space-y-3">
              {[
                "Office Cleaning",
                "Restaurant Cleaning",
                "School Cleaning",
                "Hospital Cleaning",
                "Warehouse Cleaning",
                "Hotel Cleaning",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="tel:+91-9115339900"
                    className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/blogs", label: "Blogs" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-background/40 mt-0.5 shrink-0" />
                <p className="text-sm text-background/60 leading-relaxed">
                  32/301 Lohiya Enclave Phase 1, Opposite Zoo, Deoria bypass road, Gorakhpur, UP 273016
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-background/40 shrink-0" />
                <a
                  href="tel:+91-9115339900"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  +91-9115339900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#25D366] shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <a
                  href="https://wa.me/919115339900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  WhatsApp Us 24/7
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-background/40 shrink-0" />
                <p className="text-sm text-background/60">
                  24/7 — 365 Days
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-full py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Cleaning Expert Gorakhpur. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-xs text-background/30 hover:text-background/60 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-background/30 hover:text-background/60 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
