import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Clock, Sparkles, Shield, CheckCircle, MapPin, Home, UtensilsCrossed, Sofa, Building, Droplets } from "lucide-react";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const serviceCategories = [
    {
      icon: Home,
      title: "Home Deep Cleaning",
      description: "Full-house deep scrubbing, dust removal, and floor polishing.",
    },
    {
      icon: UtensilsCrossed,
      title: "Kitchen & Bathroom Cleaning",
      description: "Degreasing tiles, oil stain removal, and germ-free descaling.",
    },
    {
      icon: Sofa,
      title: "Upholstery & Fabric Care",
      description: "Deep extraction for sofas, mattresses, carpets, and curtains.",
    },
    {
      icon: Building,
      title: "Commercial & Office Cleaning",
      description: "Scheduled sanitization for offices, schools, and hospitals.",
    },
    {
      icon: Droplets,
      title: "Exterior & Specialized Cleaning",
      description: "Solar panel, water tank, and post-construction cleanup.",
    },
  ];

  const whyChoose = [
    {
      icon: Clock,
      title: "24 Hours Availability",
      description: "Operating round-the-clock to suit your personal schedule or commercial operating hours.",
    },
    {
      icon: Sparkles,
      title: "Advanced Machinery & Eco-Chemicals",
      description: "Industry-grade vacuum extractors, steam cleaners, and non-toxic solutions safe for kids and pets.",
    },
    {
      icon: Shield,
      title: "Trained Local Staff",
      description: "Background-verified, uniform-clad cleaning specialists based right here in Gorakhpur.",
    },
    {
      icon: CheckCircle,
      title: "100% Satisfaction Guarantee",
      description: "Post-cleaning inspection with our team lead before payment collection.",
    },
  ];

  const howItWorks = [
    { step: "01", title: "Choose Your Service", description: "Select your required cleaning category online or via phone." },
    { step: "02", title: "Schedule Time Slot", description: "Pick any preferred time—we operate 24/7 across Gorakhpur." },
    { step: "03", title: "On-Site Execution", description: "Our expert team arrives equipped with all tools and machines." },
    { step: "04", title: "Inspect & Pay", description: "Verify the outcome, enjoy a spotless space, and pay securely." },
  ];

  const popularServices = [
    { title: "Deep Home Cleaning", description: "Comprehensive floor-to-ceiling dirt removal and sanitization." },
    { title: "Sofa & Mattress Shampooing", description: "High-pressure extraction removing deep dust mites and stubborn stains." },
    { title: "Kitchen Oil & Degreasing Cleaning", description: "Heavy-duty degreasing of chimneys, tiles, exhaust fans, and countertops." },
    { title: "Bathroom & Tile Descaling", description: "Hard-water stain removal and anti-bacterial disinfection." },
    { title: "Carpet & Curtain Cleaning", description: "Dry and wet cleaning for delicate fabrics and heavy floor carpets." },
    { title: "Commercial Office Cleaning", description: "Daily, weekly, and one-time janitorial services for workplaces." },
  ];

  const areasServed = [
    "Gorakhpur City", "Gida", "Rustampur", "Kusmhi", "Mohaddipur",
    "Sahjanwa", "Chauri Chaura", "Bansgaon", "Khorabar", "Pipraich",
    "Campierganj", "Sardarnagar", "Mundera Bazar", "Shahpur",
  ];

  const testimonials = [
    {
      quote:
        "Cleaning Expert Gorakhpur transformed our 3BHK flat near Deoria Bypass Road after our renovation. Dust was everywhere, but their team brought in heavy-duty machines and made it brand new in 5 hours!",
      author: "Anil Verma, Gorakhpur",
    },
    {
      quote:
        "Managing a clinic requires 24/7 hygiene. Their night-shift commercial cleaning team keeps our healthcare center sanitized without interfering with patient visits.",
      author: "Dr. S. K. Srivastava, Gorakhpur",
    },
  ];

  const faqs = [

    { q: "Do you provide same-day cleaning in Gorakhpur?", a: "Yes. We operate 24/7 and often accommodate same-day service requests across Gorakhpur based on team availability." },
    { q: "Are your cleaning chemicals safe for kids and pets?", a: "Absolutely. We use eco-friendly, non-toxic solutions that are tough on stains but safe for your family and pets." },
    { q: "How do I book a cleaning service?", a: "You can book instantly by calling +91-9115339900 or filling out the booking form on our website." },
    { q: "Do you clean commercial spaces and offices?", a: "Yes. We offer scheduled sanitization for offices, schools, hospitals, restaurants, warehouses, and retail stores." },
    { q: "What is your satisfaction guarantee?", a: "Our team lead conducts a post-cleaning inspection with you before any payment is collected. If you're not satisfied, we'll re-clean the area." },
  ];

  return (
    <Layout>
      {/* Hero Section — Full Viewport */}
      <section ref={heroRef} className="relative h-[100svh] -mt-16 md:-mt-20 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="Professional deep cleaning service in Gorakhpur"
            className="w-full h-[120%] object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
        </motion.div>

        <motion.div
          className="relative container-full h-full flex flex-col justify-end pb-20 md:pb-28 pt-16 md:pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-sm">
                <Clock className="w-3.5 h-3.5" />
                24/7 Service Available
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5" />
                Gorakhpur, UP
              </span>
            </motion.div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05] tracking-tight">
              Professional Deep Cleaning
              <br />
              <span className="text-primary-foreground">Services in Gorakhpur</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-2xl">
              24/7 eco-friendly, mechanized cleaning for homes, offices, and commercial spaces.
              Book reliable, trained sanitization experts near you today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 py-6 text-sm tracking-[0.05em] font-semibold btn-premium"
              >
                <a href="tel:+91-9115339900">
                  <Phone className="mr-2 w-4 h-4" />
                  Book Instant Service
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-10 py-6 text-sm tracking-[0.05em] font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white"
              >
                <a href="tel:+91-9115339900">
                  Call 24/7: +91-9115339900
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Service Categories */}
      <section className="py-20 md:py-28 bg-linen">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Our Expertise
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Quick Service Categories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 md:p-8 rounded-xl border border-border hover-lift group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32">
        <div className="container-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1527515637464-cff94eecc1ab?w=1200&q=80"
                alt="Trained cleaning team with professional equipment"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
                  Why Choose Us
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
                  Why Choose Cleaning Expert Gorakhpur
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-3">
              Simple Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              How It Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <span className="font-serif text-6xl text-white/20 mb-4 block">
                  {step.step}
                </span>
                <h3 className="font-serif text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-24 md:py-32">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Most Booked
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Popular Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-linen p-8 rounded-xl border border-border hover-lift"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="tel:+91-9115339900"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-24 md:py-32 bg-linen">
        <div className="container-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
                  Local Coverage
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
                  Areas Served Across Gorakhpur
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We bring our deep cleaning services to every corner of Gorakhpur and nearby areas.
                  From residential apartments to large commercial complexes, our local teams are ready to serve.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-3">
                {areasServed.map((area, index) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-background border border-border text-sm text-foreground"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary mr-1.5" />
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a6b?w=1200&q=80"
                alt="Deep cleaning service across Gorakhpur locations"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, index) => (
              <motion.figure
                key={t.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <blockquote className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold tracking-[0.05em] text-muted-foreground">
                  — {t.author}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">

        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Got Questions?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-serif text-lg md:text-xl">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Clean and sparkling home interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>

        <div className="relative container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-5">
              Need Home Services Today?
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Get Your Space Deep Cleaned in Gorakhpur Within Hours
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Don't let dust, grime, and allergens compromise your health. Contact Gorakhpur's
              top-rated cleaning company today for instant booking and transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 py-6 text-sm tracking-[0.05em] font-semibold btn-premium"
              >
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-10 py-6 text-sm tracking-[0.05em] font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white"
              >
                <a href="tel:+91-9115339900">
                  <Phone className="mr-2 w-4 h-4" />
                  Call 24/7: +91-9115339900
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Index;
