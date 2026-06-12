// @ts-check
import { defineConfig } from 'astro/config';
import { getAllCardEntries } from './src/data/site.ts';

const workRedirects = Object.fromEntries(
  getAllCardEntries().map(({ sectionId, card }) => [
    `/work/${card.id}/`,
    `/${sectionId}/${card.id}/`,
  ]),
);

// https://astro.build/config
export default defineConfig({
  site: 'https://www.benkurian.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  redirects: workRedirects,
});
