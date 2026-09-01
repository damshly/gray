import { NavLink } from "@/types";
import { servicesData } from "@/config/services";

export const mainNavLinks: NavLink[] = [
  { name: "Start", href: "/#start" },
  {
    name: "Leistungen",
    href: "/leistungen",
    dropdown: servicesData.map((service) => ({
      title: service.title,
      items: [
        {
          name: `Alle: ${service.title}`,
          href: `/leistungen/${service.slug}`,
          description: service.description.slice(0, 80) + "…",
        },
        ...service.subServices.map((sub) => ({
          name: sub.title,
          href: `/leistungen/${service.slug}/${sub.slug}`,
          description: sub.shortDesc,
        })),
      ],
    })),
  },
  { name: "Über MK", href: "/#ueber-mk" },
  { name: "Kontakt", href: "/#kontakt" },
];

export const footerServiceLinks: NavLink[] = [
  { name: "Unterhaltsreinigung", href: "/leistungen/unterhaltsreinigung" },
  { name: "Glas- & Fensterreinigung", href: "/leistungen/glasreinigung" },
  { name: "Bau- & Grundreinigung", href: "/leistungen/grundreinigung" },
];

export const legalLinks: NavLink[] = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
];
