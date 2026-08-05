import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const articles = [
  {
    title: "How Often Should You Deep Clean Your House in Gorakhpur?",
    excerpt:
      "Gorakhpur's seasonal climate transitions bring heavy dust and monsoon moisture. Discover why quarterly deep cleaning prevents dust mite accumulation, protects furniture, and improves indoor air quality.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
  },
  {
    title: "The Ultimate Post-Construction Cleaning Checklist for New Homes",
    excerpt:
      "Just finished building or renovating your house opposite Zoo or near Deoria Bypass? Here is a step-by-step checklist to safely strip away concrete dust, paint smears, and chemical fumes before moving in.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
  },
  {
    title: "Why Solar Panel Cleaning Increases Power Output by Up to 25%",
    excerpt:
      "Dust, bird droppings, and industrial smog accumulate fast on solar panels across Eastern UP. Learn how regular chemical-free washing restores solar efficiency and boosts energy savings.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
  },
];

const Blogs = () => (
  <Layout>
    <Seo
      title="Cleaning Tips & Guides Gorakhpur | Cleaning Expert"
      description="Expert cleaning tips, seasonal home maintenance guides, and hygiene advice tailored for homes and businesses in Gorakhpur. Stay clean, stay healthy."
      keywords={[
        "home deep cleaning tips and tricks gorakhpur",
        "how to remove monsoon mold from house gorakhpur",
        "best water tank cleaning method at home gorakhpur",
        "commercial hygiene standards for businesses in gorakhpur",
        "solar panel maintenance and cleaning frequency gorakhpur",
      ]}
      path="/blogs"
    />

    <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-secondary/30">
      <div className="container-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">Blog</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground max-w-4xl leading-tight">
            Cleaning Insights, Tips & Local Maintenance Guides
          </h1>
        </motion.div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container-full grid gap-10 md:grid-cols-3">
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-5">
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug">
              {article.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="py-20 bg-secondary/40">
      <div className="container-narrow text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Want the Job Done by Experts Instead?
        </h2>
        <p className="text-muted-foreground mb-8">
          Our Gorakhpur team is available round the clock for homes, offices, and commercial spaces.
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

export default Blogs;
