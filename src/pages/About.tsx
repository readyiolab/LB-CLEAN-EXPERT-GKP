import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Shield, Clock, Award, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

import { Button } from "@/components/ui/button";

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Background-verified staff and insured service for complete peace of mind.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Mechanized cleaning with industry-grade tools and eco-friendly chemicals.",
    },
    {
      icon: Users,
      title: "Local Team",
      description: "Gorakhpur-based cleaning specialists who understand local needs and standards.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 operations mean we work around your schedule, not the other way around.",
    },
  ];

  return (
    <Layout>
      <Seo
        title="About Cleaning Expert Gorakhpur | Trained Local Team"
        description="Learn about Cleaning Expert Gorakhpur — background-verified staff, eco-friendly chemicals, and 24/7 deep cleaning for homes, offices, and commercial spaces."
        keywords={[
          "professional deep home cleaning services in gorakhpur",
          "best sofa and carpet cleaning near me gorakhpur",
          "affordable kitchen deep cleaning service in gorakhpur",
          "24 hour commercial deep cleaning company gorakhpur",
          "local full house deep sanitization services gorakhpur",
        ]}
        path="/about"
      />

      {/* Hero */}
      <section ref={heroRef} className="relative h-[80vh] md:h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1920&q=80"
            alt="Professional cleaning team in Gorakhpur"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/10 to-charcoal/50" />
        </motion.div>

        <div className="relative container-full h-full flex flex-col justify-end pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-5">
              About Us
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
              Cleaning Expert
              <br />
              <span className="italic font-normal">Gorakhpur</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              Professional deep cleaning services for homes, offices, and commercial spaces.
              Available 24/7 across Gorakhpur with trained staff and eco-friendly solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 md:py-40">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-6">
              Our Mission
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.25] tracking-tight">
              To make every home and workplace in Gorakhpur a
              <span className="italic"> cleaner, healthier, </span>
              and more welcoming space.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 md:pb-32">
        <div className="container-full">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 md:mb-36">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5"
            >
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-5">
                Who We Are
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                Local Cleaning Experts
                <br />
                <span className="italic">You Can Rely On</span>
              </h3>
              <p className="text-muted-foreground leading-[1.8] mb-5">
                Cleaning Expert Gorakhpur started with a simple goal: to bring reliable, high-quality deep cleaning
                services to homes and businesses across Gorakhpur. We saw the need for trained professionals who use
                modern equipment and safe, effective cleaning solutions.
              </p>
              <p className="text-muted-foreground leading-[1.8]">
                Today, our team serves residential apartments, villas, offices, restaurants, schools, hospitals, and
                industrial spaces. We are proud to be a locally trusted name for deep cleaning and sanitization.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="md:col-span-7 relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&q=80"
                  alt="Cleaning team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-36 bg-linen">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              What Guides Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-background p-8 rounded-xl border border-border text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-[1.8]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>

        <div className="relative container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-5">
              Book a Service
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Call our Gorakhpur team anytime. We are available 24/7 to schedule your deep cleaning service
              and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 py-6 text-sm tracking-[0.05em] font-semibold btn-premium"
              >
                <a href="tel:+91-9115339900">
                  <Phone className="mr-2 w-4 h-4" />
                  Call +91-9115339900
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-10 py-6 text-sm tracking-[0.05em] font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white"
              >
                <Link to="/">
                  Back to Home
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
