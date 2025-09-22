import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Organization structured data
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Theta",
      "description": "Ultimate digital library platform for ebooks, audiobooks, and podcasts with AI-powered content discovery and seamless format switching",
      "url": "https://theta.lovableproject.com",
      "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/iJN771walYfdNUZNwzWnchBG9512/uploads/1758453165494-Theta Logo PNG.png",
      "sameAs": [
        "https://twitter.com/theta_platform"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@theta.com"
      }
    };

    // WebApplication structured data
    const webAppSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Theta",
      "description": "Revolutionary digital content platform combining ebooks, audiobooks, and podcasts. AI-powered multimedia library with seamless switching between reading and listening, unified progress tracking, and intelligent content discovery.",
      "url": "https://theta.lovableproject.com",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/ComingSoon"
      },
      "featureList": [
        "Unified library for ebooks, audiobooks, and podcasts",
        "Seamless switching between reading and listening",
        "AI-powered content discovery",
        "Import local files",
        "Smart playlists and bookmarks",
        "AI content summaries"
      ],
      "screenshot": "https://storage.googleapis.com/gpt-engineer-file-uploads/iJN771walYfdNUZNwzWnchBG9512/social-images/social-1758453313306-Screenshot 2025-09-21 at 4.44.37 PM.png"
    };

    // SoftwareApplication for creators
    const creatorAppSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Theta Create",
      "description": "AI-powered writing studio for creating ebooks and audiobooks. Convert manuscripts to audiobooks instantly with AI voices.",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web Browser",
      "featureList": [
        "AI writing studio",
        "Instant audiobook generation",
        "One-click publishing",
        "Creator analytics",
        "Multi-language support"
      ],
      "isPartOf": {
        "@type": "WebApplication",
        "name": "Theta"
      }
    };

    // FAQ structured data
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Theta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Theta is a unified platform that brings together ebooks, audiobooks, and podcasts in one beautiful experience. You can seamlessly switch between reading and listening, with AI helping you pick up exactly where you left off."
          }
        },
        {
          "@type": "Question",
          "name": "How does the seamless switching work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI technology finds the exact line in the audiobook that corresponds to where you stopped reading in the ebook, allowing for perfect synchronization between formats."
          }
        },
        {
          "@type": "Question",
          "name": "Can I import my own content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! You can import your own local files including ebooks, documents, and audio files to use in the Theta player."
          }
        },
        {
          "@type": "Question",
          "name": "What is Theta Create?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Theta Create is our AI-powered writing studio that helps authors go from idea to published ebook and audiobook. It includes AI writing assistance, instant audiobook generation, and one-click publishing to the global Theta audience."
          }
        }
      ]
    };

    // Create script elements and add to head
    const schemas = [organizationSchema, webAppSchema, creatorAppSchema, faqSchema];
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default StructuredData;