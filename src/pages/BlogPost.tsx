import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Phone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { articles, getArticle } from "@/data/articles";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) return <Navigate to="/blogs" replace />;

  const related = articles.filter((a) => a.slug !== article.slug);

  return (
    <Layout>
      <Seo
        title={article.metaTitle}
        description={article.metaDescription}
        keywords={article.keywords}
        path={`/blogs/${article.slug}`}
      />

      <article>
        <section className="pt-20 pb-10 md:pt-28 md:pb-12 bg-secondary/30">
          <div className="container-narrow">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 mb-4 text-[11px] font-semibold tracking-[0.25em] uppercase text-primary">
                <span>{article.category}</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium tracking-normal normal-case text-xs">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-tight">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </section>

        <div className="container-narrow -mt-2">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl mt-10">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <section className="py-12 md:py-16">
          <div className="container-narrow">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-serif mb-12">
              {article.intro}
            </p>

            <div className="space-y-12">
              {article.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 leading-snug">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p) => (
                    <p key={p} className="text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 space-y-3">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-2xl bg-secondary/40 p-8 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                Prefer the experts to handle it?
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Gorakhpur team works 24/7 with industrial machines and eco-safe solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 font-semibold">
                  <a href="tel:+91-9115339900">
                    <Phone className="mr-2 w-4 h-4" /> Call 24/7: +91-9115339900
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 font-semibold">
                  <Link to="/contact">Get a free quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/20">
          <div className="container-full">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Keep reading</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {related.map((a) => (
                <Link key={a.slug} to={`/blogs/${a.slug}`} className="group block">
                  <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-4">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
