import { getAllCardEntries } from '../data/site';
import { SITE } from '../lib/seo';

const pages = [
  `${SITE.url}/`,
  `${SITE.url}/gpa/`,
  ...getAllCardEntries().map(({ sectionId, card }) => `${SITE.url}/${sectionId}/${card.id}/`),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

export function GET() {
  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

export const prerender = true;
