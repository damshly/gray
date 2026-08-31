import { ReasonItem, StatItem } from "@/types";
import { Award, Clock, Leaf, CircleDollarSign } from "lucide-react";

export const reasonsData: ReasonItem[] = [
  {
    id: "qualitaet",
    tag: "Präzision & Sorgfalt",
    title: "Kompromisslose Qualität",
    description:
      "Wir setzen auf modernste Reinigungstechnologien und geschultes Fachpersonal. Jedes Objekt wird mit größter Sorgfalt und nach strengen Qualitätskriterien gereinigt.",
    icon: Award,
  },
  {
    id: "zuverlaessigkeit",
    tag: "Termintreue & Diskretion",
    title: "100% Zuverlässigkeit",
    description:
      "Feste Ansprechpartner, garantierte Pünktlichkeit und reibungslose Abläufe. Wir arbeiten diskret und passen uns flexibel Ihren Betriebs- oder Wunschzeiten an.",
    icon: Clock,
  },
  {
    id: "umwelt",
    tag: "Nachhaltig & Sicher",
    title: "Ökologische Reinigungsmittel",
    description:
      "Für den Schutz Ihrer Gesundheit und unserer Umwelt nutzen wir biologisch abbaubare, materialschonende und hochwirksame Profi-Reinigungsprodukte.",
    icon: Leaf,
  },
  {
    id: "fairness",
    tag: "Fair & Transparent",
    title: "Transparente Preisgestaltung",
    description:
      "Keine versteckten Nebenkosten. Wir erstellen Ihnen nach persönlicher Beratung ein faires, transparentes und genau auf Ihre Bedürfnisse zugeschnittenes Angebot.",
    icon: CircleDollarSign,
  },
];

export const statsData: StatItem[] = [
  { value: "100%", label: "Kundenzufriedenheit" },
  { value: "24/7", label: "Flexibler Service" },
  { value: "Rottweil", label: "und Umgebung" },
  { value: "Top", label: "Preis-Leistungs-Verhältnis" },
];
