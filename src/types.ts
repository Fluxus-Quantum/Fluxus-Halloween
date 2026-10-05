export type AudienceType = 'ph' | 'corporate';

export interface ServiceItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  highlights: string[];
  specs: string[];
}

export interface PackItem {
  id: string;
  number: string;
  tag: string;
  name: string;
  subtitle: string;
  image: string;
  isPopular?: boolean;
  accentColor: string;
  features: string[];
  idealFor: string;
}

export interface ComparisonRow {
  criterion: string;
  traditionalPain: string;
  fluxusBenefit: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  image: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'logistica' | 'legal' | 'tecnica';
}

export interface EstimatorSelection {
  audience: AudienceType;
  attendees: number;
  services: string[];
  venueType: 'salon_comunal' | 'auditorio' | 'exterior' | 'oficina';
  preferredDate: string;
}
