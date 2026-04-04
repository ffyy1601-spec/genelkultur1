import { Helmet } from "react-helmet-async";
import { buildCanonicalUrl, DEFAULT_OG_IMAGE, SITE_NAME } from "../lib/seo";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function Seo({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  schema,
}: SeoProps) {
  const canonical = buildCanonicalUrl(path);
  const robots = noindex ? "noindex, nofollow, noarchive" : "index, follow, max-image-preview:large";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content="tr_TR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Helmet>
  );
}
