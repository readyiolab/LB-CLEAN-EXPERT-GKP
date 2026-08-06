import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Loader2, Phone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { BlogPost as BlogPostType, blogApi } from "@/lib/api/blogs";

const stripHtml = (html = "") => {
  const documentFragment = new DOMParser().parseFromString(html, "text/html");
  return documentFragment.body.textContent || "";
};

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await blogApi.getBySlug(slug);
        setBlog(data.blog);
      } catch (error) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (notFound || !blog) return <Navigate to="/blogs" replace />;

  const description = blog.blog_excerpt || blog.blog_description || stripHtml(blog.blog_content).slice(0, 160);
  const tags = blog.blog_tags?.split(",").map((tag) => tag.trim()).filter(Boolean) || [];

  return (
    <Layout>
      <Seo
        title={blog.blog_title}
        description={description}
        keywords={tags}
        path={`/blogs/${blog.blog_slug}`}
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
                <span>Blog</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium tracking-normal normal-case text-xs">
                  <Calendar className="w-3.5 h-3.5" /> {formatDate(blog.created_at)}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-tight">
                {blog.blog_title}
              </h1>
            </motion.div>
          </div>
        </section>

        {blog.blog_image && (
          <div className="container-narrow -mt-2">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl mt-10">
              <img src={blog.blog_image} alt={blog.blog_title} className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        <section className="py-12 md:py-16">
          <div className="container-narrow">
            {blog.blog_excerpt && (
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-serif mb-12">
                {blog.blog_excerpt}
              </p>
            )}

            {blog.blog_description && (
              <p className="text-muted-foreground leading-relaxed mb-10">
                {blog.blog_description}
              </p>
            )}

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.blog_content }}
            />

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
      </article>
    </Layout>
  );
};

export default BlogPost;
