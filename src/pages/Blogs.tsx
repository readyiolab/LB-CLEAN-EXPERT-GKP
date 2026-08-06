import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Calendar, Loader2 } from "lucide-react";
import { BlogPost, blogApi } from "@/lib/api/blogs";

const stripHtml = (html = "") => {
  const documentFragment = new DOMParser().parseFromString(html, "text/html");
  return documentFragment.body.textContent || "";
};

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const getExcerpt = (blog: BlogPost) => {
  const source = blog.blog_excerpt || blog.blog_description || stripHtml(blog.blog_content);
  return source.length > 150 ? `${source.slice(0, 150)}...` : source;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await blogApi.getPublished(12);
        setBlogs(data.blogs || []);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
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
        <div className="container-full">
          {loading ? (
            <div className="flex min-h-64 items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : error ? (
            <p className="text-center text-muted-foreground">{error}</p>
          ) : blogs.length === 0 ? (
            <p className="text-center text-muted-foreground">No blog posts published yet.</p>
          ) : (
            <div className="grid gap-10 md:grid-cols-3">
              {blogs.map((blog, i) => (
                <motion.article
                  key={blog.blog_id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <Link to={`/blogs/${blog.blog_slug}`} className="block">
                    {blog.blog_image && (
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-5 bg-secondary">
                        <img
                          src={blog.blog_image}
                          alt={blog.blog_title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">
                      <span>Blog</span>
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium tracking-normal normal-case text-xs">
                        <Calendar className="w-3.5 h-3.5" /> {formatDate(blog.created_at)}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                      {blog.blog_title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{getExcerpt(blog)}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      Read article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
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
};

export default Blogs;
