export interface BlogPost {
  blog_id: number;
  blog_title: string;
  blog_slug: string;
  blog_excerpt?: string;
  blog_description?: string;
  blog_content: string;
  blog_image?: string;
  blog_tags?: string;
  blog_author?: string;
  blog_status: string;
  blog_views: number;
  created_at: string;
  updated_at?: string;
}

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000/api"
    : "https://lbservicesgorakhpur.com/api");

const BLOG_SITE = import.meta.env.VITE_BLOG_SITE || "clean_expert";

const requestJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Blog request failed");
  }

  return data;
};

export const blogApi = {
  getPublished: async (limit = 12, page = 1) => {
    const params = new URLSearchParams({
      blog_site: BLOG_SITE,
      blog_status: "published",
      limit: String(limit),
      page: String(page),
    });

    return requestJson<{ success: true; blogs: BlogPost[]; pagination: unknown }>(
      `${API_BASE_URL}/blog?${params.toString()}`
    );
  },

  getBySlug: async (slug: string) => {
    const params = new URLSearchParams({ blog_site: BLOG_SITE });

    return requestJson<{ success: true; blog: BlogPost }>(
      `${API_BASE_URL}/blog/${encodeURIComponent(slug)}?${params.toString()}`
    );
  },
};
