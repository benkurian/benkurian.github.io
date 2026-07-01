export interface WorkLinkItem {
  meta: string;
  title: string;
  detail: string;
  url: string;
}

export interface WorkLinkSection {
  heading: string;
  items: WorkLinkItem[];
}

export interface WorkDetail {
  label?: string;
  title: string;
  meta: string;
  content: string;
  linkSections?: WorkLinkSection[];
}

export interface Card {
  id: string;
  label: string;
  title: string;
  desc?: string;
  bgImage?: string;
  detail: WorkDetail;
}

export interface Section {
  id: string;
  title: string;
  layout: 'hero-side' | 'thirds' | 'halves';
  cards: Card[];
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface SiteData {
  hero: {
    name: string[];
    subtitle: string;
    bgImage: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    photo: string;
  };
  resumeUrl: string;
  sections: Section[];
  footer: {
    links: FooterLink[];
    copy: string;
  };
}
