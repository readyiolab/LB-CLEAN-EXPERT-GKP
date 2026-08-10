import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const seasonalPackages = [
  {
    season: "Monsoon",
    name: "Damp & Mould Defence",
    description:
      "Anti-fungal treatment for sofas, mattresses and wardrobes, plus drainage and terrace clearance before the rains settle in.",
    includes: ["Sofa & mattress extraction", "Anti-fungal wall treatment", "Drain & terrace clearance"],
    image: "/images/sofa-cleaning-indian.jpg",
  },
  {
    season: "Festive",
    name: "Diwali Full-House Shine",
    description:
      "Floor-to-ceiling deep clean with kitchen degreasing and chimney care, timed so your home is guest-ready before the celebrations.",
    includes: ["Full-house deep clean", "Kitchen & chimney degreasing", "Glass, fans & fixtures"],
    image: "/images/kitchen-cleaning-indian.jpg",
  },
  {
    season: "Summer",
    name: "Dust, Tank & Solar Reset",
    description:
      "Dry-season essentials for Gorakhpur rooftops and homes — six-stage water tank cleaning and chemical-free solar panel soft washing.",
    includes: ["6-stage water tank clean", "Solar panel soft wash", "Curtain & carpet extraction"],
    image: "/images/bathroom-cleaning-indian.jpg",
  },
];

export const SeasonalCollections = () => (
  <section className="py-24 md:py-32 bg-secondary/20">
    <div className="container-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-14"
      >
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
          Curated Collections
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-4">
          Seasonal Cleaning Packages for Gorakhpur Homes
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Each season brings its own grime. We bundle the services that matter most right now, so
          you book once and your home stays ahead of the weather.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {seasonalPackages.map((pkg, i) => (
          <motion.article
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group rounded-2xl overflow-hidden bg-card border border-border flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={pkg.image}
                alt={`${pkg.name} cleaning package in Gorakhpur`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase bg-background/95 backdrop-blur-md text-foreground rounded-full">
                {pkg.season}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-serif text-2xl text-foreground mb-3 leading-snug">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{pkg.description}</p>

              <ul className="space-y-2.5 mb-6">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Book this package
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
