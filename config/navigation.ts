import { NavLink } from "@/types";

export const mainNavLinks: NavLink[] = [
  { name: "Start", href: "/#start" },
  { name: "Leistungen", href: "/#leistungen" },
  { name: "Über MK", href: "/#ueber-mk" },
  { name: "Kontakt", href: "/#kontakt" },
];

export const footerServiceLinks: NavLink[] = [
  { name: "Unterhaltsreinigung", href: "/#leistungen" },
  { name: "Glas- & Fensterreinigung", href: "/#leistungen" },
  { name: "Baugrob- & Endreinigung", href: "/#leistungen" },
  { name: "Sonderreinigung", href: "/#leistungen" },
];

export const legalLinks: NavLink[] = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
];
