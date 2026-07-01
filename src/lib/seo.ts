export const SITE = {
  name: 'Ben Kurian',
  url: 'https://www.benkurian.com',
  locale: 'en_US',
  defaultImage: '/images/hero.jpg',
  defaultDescription:
    'Ben Kurian is a student in Columbus, Ohio working on healthcare advocacy, documentary filmmaking, debate, and music..',
  homeTitle: 'Ben Kurian | Portfolio',
  sameAs: [
    'https://www.linkedin.com/in/ben-kurian/',
    'https://www.youtube.com/@benkurian317',
    'https://www.instagram.com/benkurian_/',
  ],
} as const;

const CARD_DESCRIPTIONS: Record<string, string> = {
  span: 'Ben Kurian co-founded SPAN, a youth healthcare advocacy organization active in 15+ states, working with legislators on patient-focused policy nationwide.',
  medbridge:
    'Project MedBridge redirects surplus medical supplies from Central Ohio clinics to low-resource communities worldwide, co-founded and led by Ben Kurian.',
  docs: 'Four-time C-SPAN StudentCam winner Ben Kurian directs documentary films on healthcare, education, and public policy aired to millions of viewers.',
  hosa: 'Ohio HOSA State Vice President Ben Kurian leads youth health leadership across 250 chapters, with top international finishes in biomedical debate and allied health.',
  debate:
    'Lincoln-Douglas debate captain Ben Kurian at Olentangy Liberty High School, with state finals bids, national qualifiers, and summer debate instruction.',
  tedx: 'Ben Kurian delivered a TEDx talk on community leadership and serves on the steering committee for TEDxOlentangy Liberty Youth in Powell, Ohio.',
  performance:
    'Multi-instrumentalist Ben Kurian performs on piano, violin, drums, and bass guitar with training across classical and contemporary repertoire.',
  composition:
    'Award-winning composer Ben Kurian earns international recognition from the American College of Musicians for original piano works.',
  civicweek:
    'Ben Kurian spoke on youth civic engagement at the Civic Learning Week National Forum in Philadelphia alongside national education leaders.',
  ibtta:
    'Ben Kurian presented on AI and road safety at the IBTTA Technology Summit in Dallas after his C-SPAN documentary on Vision Zero.',
  news: 'Press coverage and official recognition for Ben Kurian from Ohio Governor Mike DeWine, U.S. Senators, and regional media for filmmaking and advocacy.',
};

export function canonicalUrl(pathname: string, site: URL | string = SITE.url): string {
  if (pathname === '/' || pathname === '') return new URL('/', site).href;
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return new URL(normalized, site).href;
}

export function absoluteAssetUrl(path: string, site: URL | string = SITE.url): string {
  return new URL(path, site).href;
}

export function pageTitle(page: string, siteName: string = SITE.name): string {
  return `${page} | ${siteName}`;
}

export function getCardDescription(cardId: string, fallback: string): string {
  return CARD_DESCRIPTIONS[cardId] ?? fallback;
}

export function truncateDescription(text: string, max = 160): string {
  if (text.length <= max) return text;
  const trimmed = text.slice(0, max - 1);
  const lastSpace = trimmed.lastIndexOf(' ');
  return `${trimmed.slice(0, lastSpace > 80 ? lastSpace : trimmed.length).trim()}.`;
}
