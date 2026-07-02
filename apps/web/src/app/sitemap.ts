import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch experts from NestJS backend
  let experts = [];
  try {
    const res = await fetch(`http://localhost:3001/api/experts`);
    if (res.ok) {
      experts = await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch experts for sitemap', error);
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mantis.com';

  const expertUrls = experts.map((expert: any) => ({
    url: `${baseUrl}/en/dashboard?expert=${expert.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...expertUrls,
  ];
}
