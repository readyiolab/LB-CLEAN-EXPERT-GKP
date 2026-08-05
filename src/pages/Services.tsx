import { motion } from "framer-motion";
import { Phone, Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";

const groups = [
  {
    label: "Residential Cleaning Services",
    items: [
      ["Deep Home Cleaning", "Comprehensive sanitization of living areas, bedrooms, balconies, doors, windows, and ceiling fans."],
      ["Kitchen Deep Cleaning", "Heavy degreasing of tiles, chimney exteriors, cabinets, countertop descaling, and appliance scrubbing."],
      ["Bathroom Deep Cleaning", "Hard water stain removal, tile grouting cleanup, disinfectant wash, and tap polishing."],
      ["Sofa Cleaning", "Fabric foam shampooing, leather conditioning, and deep vacuum extraction."],
      ["Carpet Cleaning", "Industrial dry cleaning and hot-water extraction for rugs and wall-to-wall carpets."],
      ["Mattress Cleaning", "UV-C treatment and deep allergen extraction for dust mites and bedbugs."],
      ["Curtain Cleaning", "On-site dry cleaning and steam vacuuming without dismantling setup."],
      ["Move-In / Move-Out Cleaning", "Turnkey deep sanitization for tenant transitions and vacant properties."],
      ["Villa & Apartment Cleaning", "Dedicated crew cleaning for large residential complexes and individual houses."],
    ],
  },
  {
    label: "Commercial & Institutional Cleaning",
    items: [
      ["Commercial Cleaning", "Custom sanitization plans for corporate buildings and retail spaces."],
      ["Office Cleaning", "Desk sanitization, carpet vacuuming, pantry cleanup, and washroom hygiene."],
      ["Retail Store Cleaning", "High-footfall floor buffing, glass display cleaning, and shelf dusting."],
      ["Restaurant Cleaning", "Kitchen grease trap cleaning, floor scrubbing, and dining hall sanitization."],
      ["School & College Cleaning", "Safe, non-toxic sanitization of classrooms, corridors, and sports areas."],
      ["Hospital & Clinic Cleaning", "Hospital-grade disinfections adhering to medical hygiene protocols."],
      ["Warehouse Cleaning", "High-ceiling dust removal, industrial floor sweeping, and rack cleaning."],
      ["Factory Cleaning", "Heavy machinery exterior wiping, industrial grease management, and site cleanup."],
      ["Hotel & Guest House Cleaning", "Rapid turnover deep cleaning for guest rooms, lobbies, and banquet halls."],
    ],
  },
  {
    label: "Specialized Industrial & Outdoor Cleaning",
    items: [
      ["Water Tank Cleaning", "6-stage overhead and underground tank cleaning using high-pressure jet washers."],
      ["Solar Panel Cleaning", "Specialized soft-wash treatment to eliminate dust layers and restore maximum energy efficiency."],
      ["Post Construction Cleaning", "Heavy paint removal, grout residue cleaning, and fine dust elimination."],
    ],
  },
];

const Services = () => (
  <Layout>
    <Seo
      title="Cleaning Services in Gorakhpur | Home & Commercial"
      description="Explore 21+ specialized cleaning services in Gorakhpur including home deep clean, sofa shampooing, water tank, solar panel, and commercial sanitization."
      keywords={[
        "complete list of home cleaning services gorakhpur",
        "best solar panel and water tank cleaning gorakhpur",
        "post construction house cleaning services in gorakhpur",
        "professional office and commercial sanitization gorakhpur",
        "24 hour restaurant and hotel cleaning services gorakhpur",
      ]}
      path="/services"
    />

    <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-secondary/30">
      <div className="container-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            21+ Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground max-w-4xl leading-tight">
            Our Specialized Cleaning Services in Gorakhpur
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            From full-house deep cleaning to water tank and solar panel maintenance, our trained
            local teams handle every residential, commercial, and industrial cleaning need — 24/7.
          </p>
        </motion.div>
      </div>
    </section>

    {groups.map((group) => (
      <section key={group.label} className="py-16 md:py-24 border-b border-border last:border-0">
        <div className="container-full">
          <h2 className="font-serif text-2xl md:text-4xl text-foreground mb-10">{group.label}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map(([title, description], i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <h3 className="font-serif text-lg text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    ))}

    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-narrow text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Not Sure Which Service You Need?
        </h2>
        <p className="text-muted-foreground mb-8">
          Call our Gorakhpur team any time — we'll recommend the right cleaning plan and give you a
          transparent quote.
        </p>
        <Button asChild size="lg" className="rounded-full px-10 py-6 font-semibold">
          <a href="tel:+91-9115339900">
            <Phone className="mr-2 w-4 h-4" /> Call 24/7: +91-9115339900
          </a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;
