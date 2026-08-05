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
                href="mailto:cleaningexpert9@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-background/10 px-6 py-3 text-sm font-semibold tracking-[0.05em] text-background hover:bg-background/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
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
                <Mail className="w-4 h-4 text-background/40 shrink-0" />
                <a
                  href="mailto:cleaningexpert9@gmail.com"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  cleaningexpert9@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-background/40 shrink-0" />
                <p className="text-sm text-background/60">
                  24/7 — All Days
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
