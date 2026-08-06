import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Clock } from "lucide-react";
import { articles } from "@/data/articles";

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
            key={article.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
          >
            <Link to={`/blogs/${article.slug}`} className="block">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 mb-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">
                <span>{article.category}</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium tracking-normal normal-case text-xs">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </span>
              </div>
              <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                Read article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
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
