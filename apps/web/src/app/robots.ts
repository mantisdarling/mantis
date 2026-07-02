import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checkout', '/login', '/register', '/api/', '/dashboard/settings'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mantis.com'}/sitemap.xml`,
  };
}
