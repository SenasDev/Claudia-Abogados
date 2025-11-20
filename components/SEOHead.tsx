import React, { useEffect } from 'react';
import { useLanguage } from '../contexts';
import { CONTENT } from '../constants';

interface SEOHeadProps {
  pageKey: keyof typeof CONTENT['es']['meta'];
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ pageKey }) => {
  const { language } = useLanguage();
  const meta = CONTENT[language].meta;

  const title = pageKey === 'homeTitle' ? meta.homeTitle : meta[pageKey] as string;

  // Handle html lang attribute via effect
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  
  // React 19 automatically hoists title, meta, and script tags to the document head
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content="abogados inmobiliarios, real estate law spain, property lawyers madrid, derecho inmobiliario" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta.description} />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "LexImmobiliaria",
            "image": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Paseo de la Castellana, 100",
              "addressLocality": "Madrid",
              "addressRegion": "Madrid",
              "postalCode": "28046",
              "addressCountry": "ES"
            },
            "priceRange": "$$"
          }
        `}
      </script>
    </>
  );
};