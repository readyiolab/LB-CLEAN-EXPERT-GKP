import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
}

export const Seo = ({ title, description, keywords, path }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && keywords.length > 0 && (
      <meta name="keywords" content={keywords.join(", ")} />
    )}
    <link rel="canonical" href={path} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={path} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);
