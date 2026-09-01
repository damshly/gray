import { ComponentType, SVGProps } from "react";

export interface NavDropdownItem {
  name: string;
  href: string;
  description?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  badge?: string;
}

export interface NavSubGroup {
  title: string;
  items: NavDropdownItem[];
}

export interface NavLink {
  name: string;
  href: string;
  dropdown?: NavSubGroup[];
}

export interface SubService {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  metaTitle: string;
  metaDescription: string;
  subServices: SubService[];
}

export interface ReasonItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SiteContact {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  city: string;
  region: string;
}

export interface SiteConfig {
  name: string;
  brandShort: string;
  tagline: string;
  description: string;
  contact: SiteContact;
}
