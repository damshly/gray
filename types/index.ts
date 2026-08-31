import { ComponentType, SVGProps } from "react";

export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
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
