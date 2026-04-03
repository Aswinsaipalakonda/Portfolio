import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, any>;
  noindex?: boolean;
}

export const SEOHead = ({
  title,
  description,
  canonical = 'https://aswinsai.tech',
  ogImage = 'https://aswinsai.tech/assets/images/aswin.jpg',
  schema,
  noindex = false,
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Indexing */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
