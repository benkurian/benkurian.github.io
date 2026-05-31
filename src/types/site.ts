export interface ModalLinkItem {
  meta: string;
  title: string;
  detail: string;
  url: string;
  action: 'listen' | 'watch' | 'read' | 'view';
}

export interface ModalLinkSection {
  heading: string;
  items: ModalLinkItem[];
}

export interface ModalData {
  label: string;
  title: string;
  meta: string;
  content: string;
  linkSections?: ModalLinkSection[];
}

export interface Card {
  id: string;
  label: string;
  title: string;
  desc: string;
  bgImage?: string;
  modal: ModalData;
}

export interface Section {
  id: string;
  number: string;
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
    date: string;
    name: string[];
    subtitle: string;
    bgImage: string;
  };
  about: {
    label: string;
    heading: string;
    paragraphs: string[];
    photo: string;
    video: string | null;
  };
  resumeUrl: string;
  sections: Section[];
  footer: {
    heading: string;
    links: FooterLink[];
    copy: string;
  };
}
