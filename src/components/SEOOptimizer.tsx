import { useEffect } from 'react';

const SEOOptimizer = () => {
  useEffect(() => {
    // Add JSON-LD for better search engine understanding
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://theta.lovableproject.com/"
      }]
    };

    // Add Rich Snippets for better search appearance
    const richSnippetSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Theta",
      "url": "https://theta.lovableproject.com",
      "description": "Ultimate digital library platform for ebooks, audiobooks, and podcasts",
      "keywords": "ebooks, audiobooks, podcasts, digital library, book reader, audiobook player",
      "inLanguage": "en-US",
      "copyrightYear": "2025",
      "author": {
        "@type": "Organization",
        "name": "Theta"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://theta.lovableproject.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Create and inject schemas
    const schemas = [breadcrumbSchema, richSnippetSchema];
    
    schemas.forEach((schema, index) => {
      const existingScript = document.getElementById(`seo-schema-${index}`);
      if (!existingScript) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        script.id = `seo-schema-${index}`;
        document.head.appendChild(script);
      }
    });

    // Add additional meta tags for better indexing
    const additionalMetas = [
      { name: 'theme-color', content: '#6366f1' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:site_name', content: 'Theta' },
      { property: 'article:publisher', content: 'https://theta.lovableproject.com' },
      { name: 'twitter:creator', content: '@theta_platform' },
      { name: 'twitter:domain', content: 'theta.lovableproject.com' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Theta' }
    ];

    additionalMetas.forEach(meta => {
      const existing = document.querySelector(`meta[name="${meta.name}"], meta[property="${meta.property}"]`);
      if (!existing) {
        const metaTag = document.createElement('meta');
        if (meta.name) metaTag.name = meta.name;
        if (meta.property) metaTag.setAttribute('property', meta.property);
        metaTag.content = meta.content;
        document.head.appendChild(metaTag);
      }
    });

    // Add preconnect for better performance
    const preconnects = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://storage.googleapis.com'
    ];

    preconnects.forEach(url => {
      const existing = document.querySelector(`link[href="${url}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        if (url.includes('fonts.gstatic.com')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }
    });

    return () => {
      // Cleanup schemas on unmount
      schemas.forEach((_, index) => {
        const script = document.getElementById(`seo-schema-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default SEOOptimizer;