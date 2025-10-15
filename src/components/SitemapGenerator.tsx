import { useEffect } from 'react';

const SitemapGenerator = () => {
  useEffect(() => {
    // Generate sitemap.xml content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://theta.co.in/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    // Create and add meta tag for sitemap
    const existingLink = document.querySelector('link[rel="sitemap"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'sitemap';
      link.type = 'application/xml';
      link.href = '/sitemap.xml';
      document.head.appendChild(link);
    }

    // Add robots meta tag if not exists
    const existingRobots = document.querySelector('meta[name="robots"]');
    if (!existingRobots) {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(robots);
    }

    return () => {
      // Cleanup if needed
      const sitemapLink = document.querySelector('link[rel="sitemap"]') as HTMLLinkElement;
      if (sitemapLink && sitemapLink.href.includes('/sitemap.xml')) {
        sitemapLink.remove();
      }
    };
  }, []);

  return null;
};

export default SitemapGenerator;