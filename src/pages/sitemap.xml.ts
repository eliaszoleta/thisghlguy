import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const siteUrl = 'https://thisghlguy.com';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-03-15' },
  { url: '/gohighlevel-basics/', priority: '0.8', changefreq: 'weekly', lastmod: '2026-03-15' },
  { url: '/gohighlevel-features/', priority: '0.8', changefreq: 'weekly', lastmod: '2026-03-15' },
  { url: '/gohighlevel-automation/', priority: '0.8', changefreq: 'weekly', lastmod: '2026-03-15' },
  { url: '/gohighlevel-saas/', priority: '0.8', changefreq: 'weekly', lastmod: '2026-03-15' },
  { url: '/gohighlevel-comparisons/', priority: '0.8', changefreq: 'weekly', lastmod: '2026-03-15' },
  { url: '/gohighlevel-tutorials/', priority: '0.8', changefreq: 'weekly', lastmod: '2026-03-15' },
  { url: '/about/', priority: '0.3', changefreq: 'monthly', lastmod: '2026-03-15' },
];

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');

  const articleEntries = articles.map((article) => {
    const lastmod = (article.data.updatedDate ?? article.data.publishDate)
      .toISOString()
      .split('T')[0];
    const priority = article.data.featured ? '0.9' : '0.7';
    return {
      url: `/${article.id}/`,
      lastmod,
      priority,
      changefreq: 'monthly',
    };
  });

  const allEntries = [...staticPages, ...articleEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
    .map(
      (entry) => `  <url>
    <loc>${siteUrl}${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
