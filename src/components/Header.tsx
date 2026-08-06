import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/blogs", label: "Blogs" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];


  const serviceLinks = [
    "Deep Home Cleaning",
    "Kitchen Deep Cleaning",
    "Bathroom Deep Cleaning",
    "Sofa Cleaning",
    "Carpet Cleaning",
    "Mattress Cleaning",
    "Curtain Cleaning",
    "Move-In / Move-Out Cleaning",
    "Commercial Cleaning",
    "Office Cleaning",
    "Restaurant Cleaning",
    "School & College Cleaning",
    "Hospital & Clinic Cleaning",
    "Water Tank Cleaning",
    "Solar Panel Cleaning",
    "Post Construction Cleaning",
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <nav className="container-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 tracking-tight text-foreground hover:opacity-90 transition-opacity duration-300"
          >
            <img src="/logo.webp" alt="Cleaning Expert Logo" className="h-14 md:h-16 w-auto object-contain rounded-md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+91-9115339900"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold tracking-[0.05em] uppercase text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              +91-9115339900
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+91-9115339900"
              className="p-2 hover:bg-accent transition-colors duration-300"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              className="p-2 hover:bg-accent transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="md:hidden border-t border-border overflow-hidden"
            >
              <div className="py-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className="block px-2 py-2.5 text-sm font-medium hover:bg-accent transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 border-t border-border mt-4">
                  <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground/50 px-2 mb-3">
                    Services
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {serviceLinks.map((service, i) => (
                      <motion.a
                        key={service}
                        href="tel:+91-9115339900"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.03 }}
                        className="block px-2 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-300"
                      >
                        {service}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="pt-4 px-2">
                  <a
                    href="tel:+91-9115339900"
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-[0.05em] uppercase text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
