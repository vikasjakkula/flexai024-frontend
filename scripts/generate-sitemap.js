/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.SITE_URL || 'https://flexai024.vercel.app';

// Define main routes. Include important nested routes.
const routes = [
  { path: '/', priority: 1.0 },
  { path: '/pricing', priority: 0.7 },
  { path: '/community', priority: 0.5 },
  { path: '/community/forum', priority: 0.4 },
  { path: '/community/photos', priority: 0.4 },
  { path: '/community/workouts', priority: 0.4 },
  { path: '/nutrition', priority: 0.6 },
  { path: '/nutrition/protein', priority: 0.5 },
  { path: '/nutrition/meals', priority: 0.5 },
  { path: '/nutrition/plans', priority: 0.5 },
  { path: '/contact/ask-questions', priority: 0.4 },
  { path: '/contact/report-bugs', priority: 0.3 },
  { path: '/library', priority: 0.9 },
  { path: '/library/exercises', priority: 0.8 },
  { path: '/library/video-library', priority: 0.6 },
  { path: '/library/routines', priority: 0.6 },
  { path: '/library/workout-logs', priority: 0.5 },
  { path: '/library/form-checker', priority: 0.5 },
  { path: '/library/calender', priority: 0.3 },
  { path: '/profile', priority: 0.3 },
];

const lastMod = new Date().toISOString();

function generate() {
  const urls = routes
    .map(({ path, priority }) => {
      const loc = `${BASE_URL}${path}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastMod}</lastmod>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  const buildOut = path.join(__dirname, '..', 'build', 'sitemap.xml');
  const publicOut = path.join(__dirname, '..', 'public', 'sitemap.xml');

  try {
    if (!fs.existsSync(path.dirname(buildOut))) {
      fs.mkdirSync(path.dirname(buildOut), { recursive: true });
    }
    fs.writeFileSync(buildOut, xml, 'utf8');
    fs.writeFileSync(publicOut, xml, 'utf8');
    console.log('Sitemap generated at', buildOut, 'and', publicOut);
  } catch (err) {
    console.error('Failed to write sitemap:', err);
    process.exitCode = 1;
  }
}

generate();


