import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  schema?: Record<string, any> | Record<string, any>[];
  noindex?: boolean;
  keywords?: string;
  articlePublished?: string;
  articleModified?: string;
}

const SITE_URL = 'https://aswinsai.tech';
const SITE_NAME = 'Aswinsai Palakonda — Full Stack Developer';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/aswin.jpg`;
const TWITTER_HANDLE = '@aswinsai';

export const SEOHead = ({
  title,
  description,
  canonical = SITE_URL,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema,
  noindex = false,
  keywords,
  articlePublished,
  articleModified,
}: SEOHeadProps) => {
  // Ensure canonical has trailing consistency
  const cleanCanonical = canonical.endsWith('/') ? canonical.slice(0, -1) : canonical;
  
  // Build schemas array
  const schemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet>
      {/* Primary Title — Keep under 60 chars for SERP display */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical */}
      <link rel="canonical" href={cleanCanonical} />

      {/* Open Graph — Facebook, LinkedIn, Discord, Slack */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={cleanCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific OG tags */}
      {articlePublished && <meta property="article:published_time" content={articlePublished} />}
      {articleModified && <meta property="article:modified_time" content={articleModified} />}
      {ogType === 'article' && <meta property="article:author" content="Aswinsai Palakonda" />}

      {/* Twitter — X.com cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />

      {/* Indexing control */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Structured Data / JSON-LD */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};
