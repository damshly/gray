import { ServiceItem } from "@/types";
import { siteConfig } from "@/config/site";

export const servicesData: ServiceItem[] = [
  {
    id: "unterhalt",
    slug: "unterhaltsreinigung",
    number: "01",
    category: "Gewerbe & Büro",
    title: "Unterhalts- & Büroreinigung",
    description:
      "Kontinuierliche Sauberkeit und Werterhalt für Ihre Arbeitsumgebung. Wir sorgen für makellose Büros, Konferenzräume und Sanitäranlagen nach maßgeschneiderten Reinigungsintervallen.",
    features: [
      "Tägliche oder wöchentliche Reinigungszyklen",
      "Hygienische Desinfektion von Kontaktflächen",
      "Umweltschonende Reinigungsmittel",
      "Diskreter & flexibler Service außerhalb Ihrer Betriebszeiten",
    ],
    imageSrc: "/services-1.jpg",
    imageAlt: "Professionelle Büro- und Unterhaltsreinigung in Rottweil",
    imagePosition: "right",
    metaTitle: `Unterhalts- & Büroreinigung Rottweil | ${siteConfig.name}`,
    metaDescription:
      "Professionelle Unterhalts- und Büroreinigung in Rottweil. Tägliche und wöchentliche Reinigungszyklen, Desinfektion und umweltschonende Mittel. Jetzt Angebot anfordern!",
    subServices: [
      {
        id: "bueroreinigung",
        slug: "bueroreinigung",
        title: "Büroreinigung",
        shortDesc: "Saubere Arbeitsumgebung für maximale Produktivität",
        description:
          "Professionelle Büroreinigung nach Maß – wir reinigen Schreibtische, Böden, Sanitäranlagen und Gemeinschaftsbereiche zuverlässig und diskret, auch außerhalb Ihrer Bürozeiten.",
        features: [
          "Reinigung von Schreibtischen und Arbeitsflächen",
          "Bodenreinigung und -pflege",
          "Sanitärreinigung & Auffüllung der Verbrauchsmaterialien",
          "Reinigung von Küchenbereichen & Pausenräumen",
          "Flexible Termine auch am Wochenende",
        ],
        metaTitle: `Büroreinigung Rottweil | ${siteConfig.name}`,
        metaDescription:
          "Professionelle Büroreinigung in Rottweil – diskret, zuverlässig, flexibel. Wir reinigen Ihre Büroräume nach Maß. Jetzt kostenloses Angebot anfordern!",
      },
      {
        id: "praxisreinigung",
        slug: "praxisreinigung",
        title: "Praxis- & Kanzleireinigung",
        shortDesc: "Hygienische Standards für Arztpraxen & Kanzleien",
        description:
          "Hygienische Reinigung nach den strengen Anforderungen von Arztpraxen, Anwaltskanzleien und anderen sensiblen Geschäftsräumen – mit zertifizierten Desinfektionsmitteln.",
        features: [
          "Desinfektion von Kontaktflächen & Türgriffen",
          "Hygienische Reinigung von Wartebereichen",
          "Fachgerechte Entsorgung von Hygieneabfällen",
          "Vertrauliche und diskrete Durchführung",
        ],
        metaTitle: `Praxis- & Kanzleireinigung Rottweil | ${siteConfig.name}`,
        metaDescription:
          "Hygienische Praxis- und Kanzleireinigung in Rottweil mit zertifizierten Mitteln. Für Arztpraxen, Anwälte und Behörden. Jetzt anfragen!",
      },
      {
        id: "gewerbereinigung",
        slug: "gewerbereinigung",
        title: "Gewerbe- & Industriereinigung",
        shortDesc: "Sauberkeit in Werkstätten, Lager und Produktion",
        description:
          "Maßgeschneiderte Reinigungslösungen für Gewerbebetriebe, Produktionshallen und Lagerflächen – effizient, zuverlässig und mit branchenspezifischem Know-how.",
        features: [
          "Maschinelle Hallenboden- und Flächenreinigung",
          "Reinigung von Produktionsanlagen und -umgebung",
          "Entfernung von Öl-, Fett- und Schmutzrückständen",
          "Flexible Reinigung im laufenden Betrieb",
        ],
        metaTitle: `Gewerbereinigung Rottweil | ${siteConfig.name}`,
        metaDescription:
          "Professionelle Gewerbereinigung in Rottweil – für Werkstätten, Lager und Produktionshallen. Effizient und zuverlässig. Jetzt Angebot anfordern!",
      },
    ],
  },
  {
    id: "glas",
    slug: "glasreinigung",
    number: "02",
    category: "Fenster & Fassade",
    title: "Glas- & Fensterreinigung",
    description:
      "Kristallklare Durchsicht ohne Schlieren oder Rückstände. Ob Schaufenster, Wintergärten, Bürokomplexe oder Glasfassaden – wir bringen Ihre Glasflächen zum Strahlen.",
    features: [
      "Streifenfreie Reinigung von Innen- & Außenglas",
      "Inklusive Rahmen-, Falz- und Fensterbankpflege",
      "Reinigung auch in schwer zugänglichen Höhen",
      "Werterhaltende Pflege für Glas & Rahmenmaterial",
    ],
    imageSrc: "/services-2.jpg",
    imageAlt: "Streifenfreie Glas- und Fensterreinigung Rottweil",
    imagePosition: "left",
    metaTitle: `Glas- & Fensterreinigung Rottweil | ${siteConfig.name}`,
    metaDescription:
      "Streifenfreie Glas- und Fensterreinigung in Rottweil. Innen- & Außenglas, Glasfassaden und Schaufenster. Professionell & zuverlässig. Jetzt anfragen!",
    subServices: [
      {
        id: "fensterreinigung",
        slug: "fensterreinigung",
        title: "Fensterreinigung",
        shortDesc: "Klare Sicht mit streifenfreiem Ergebnis",
        description:
          "Streifenfreie Fensterreinigung innen und außen – inklusive Rahmen, Falze und Fensterbänke. Für Privathaushalte, Büros und Gewerbebetriebe in Rottweil und Umgebung.",
        features: [
          "Streifenfreies Reinigungsergebnis garantiert",
          "Innen- und Außenreinigung",
          "Rahmen-, Falz- und Fensterbankpflege inklusive",
          "Haushalte, Büros und Gewerbe",
        ],
        metaTitle: `Fensterreinigung Rottweil | ${siteConfig.name}`,
        metaDescription:
          "Professionelle Fensterreinigung in Rottweil – streifenfrei, innen & außen, inklusive Rahmen. Für Privat und Gewerbe. Jetzt Angebot anfordern!",
      },
      {
        id: "fassadenreinigung",
        slug: "fassadenreinigung",
        title: "Fassaden- & Glasfassadenreinigung",
        shortDesc: "Strahlende Fassaden für einen professionellen Auftritt",
        description:
          "Reinigung von Glasfassaden, Schaufenstern und Vorhangfassaden an Büro- und Geschäftshäusern – auch in großer Höhe und mit Spezialtechnik.",
        features: [
          "Reinigung von Glasfassaden und Vorhangfassaden",
          "Schaufensterfronten & Eingangsbereiche",
          "Einsatz von Hubarbeitsbühnen & Spezialtechnik",
          "Regelmäßige Wartungsverträge möglich",
        ],
        metaTitle: `Fassadenreinigung Rottweil | ${siteConfig.name}`,
        metaDescription:
          "Professionelle Fassaden- und Glasfassadenreinigung in Rottweil. Für Bürogebäude und Geschäftshäuser. Auch große Höhen. Jetzt anfragen!",
      },
      {
        id: "wintergartenreinigung",
        slug: "wintergartenreinigung",
        title: "Wintergarten- & Lichtbandreinigung",
        shortDesc: "Lichtdurchflutet und makellos rein",
        description:
          "Professionelle Reinigung von Wintergärten, Dachfenstern und Lichtbändern – für maximalen Lichteinfall und ein gepflegtes Erscheinungsbild das ganze Jahr über.",
        features: [
          "Innen- und Außenreinigung von Wintergartenverglasung",
          "Dachfenster und Lichtbänder",
          "Entfernung von Moos, Algen und Schmutzablagerungen",
          "Schonende Reinigung wertvoller Glasstrukturen",
        ],
        metaTitle: `Wintergartenreinigung Rottweil | ${siteConfig.name}`,
        metaDescription:
          "Professionelle Wintergarten- und Lichtbandreinigung in Rottweil – innen & außen, ganzjährig. Jetzt kostenloses Angebot anfordern!",
      },
    ],
  },
  {
    id: "grund",
    slug: "grundreinigung",
    number: "03",
    category: "Spezial & Bau",
    title: "Grund-, Bau- & Sonderreinigung",
    description:
      "Gründliche Tiefenreinigung für anspruchsvolle Anforderungen: nach Bauarbeiten, vor Einzügen oder zur intensiven Wiederherstellung von strapazierten Boden- und Oberflächen.",
    features: [
      "Baugrob- und Bauendreinigung vor Übergabe",
      "Maschinelle Boden- und Teppichgrundreinigung",
      "Entfernung hartnäckiger Verschmutzungen & Farbreste",
      "Individuelle Lösungen für Privat & Gewerbe",
    ],
    imageSrc: "/services-3.jpg",
    imageAlt: "Bau- und Spezialreinigung Rottweil",
    imagePosition: "right",
    metaTitle: `Grund- & Baureinigung Rottweil | ${siteConfig.name}`,
    metaDescription:
      "Professionelle Grund-, Bau- und Sonderreinigung in Rottweil. Nach Umzügen, Bauarbeiten oder als intensive Tiefenreinigung. Für Privat & Gewerbe. Jetzt anfragen!",
    subServices: [
      {
        id: "baugrobrreinigung",
        slug: "baugrobrreinigung",
        title: "Baugrobrreinigung",
        shortDesc: "Grobe Bauschmutzelimination vor der Feinreinigung",
        description:
          "Effektive Entfernung von grobem Bauschmutz, Putzresten, Mörtelrückständen und Verpackungsmaterial nach Rohbau- und Umbauarbeiten – als Vorbereitung für die Bauendreinigung.",
        features: [
          "Entfernung von Schutt, Staub und Bauschutt",
          "Reinigung von Fenstern und Böden nach Rohbau",
          "Entsorgung von Bauschrott und Verpackungen",
          "Maschineller Einsatz für große Flächen",
        ],
        metaTitle: `Baugrobrreinigung Rottweil | ${siteConfig.name}`,
        metaDescription:
          "Professionelle Baugrobrreinigung in Rottweil – effektive Entfernung von Bauschmutz nach Rohbau- und Umbauarbeiten. Jetzt anfragen!",
      },
      {
        id: "bauendreinigung",
        slug: "bauendreinigung",
        title: "Bauendreinigung",
        shortDesc: "Übergabereifes Ergebnis nach Baufertigstellung",
        description:
          "Feinste Reinigung nach Fertigstellung des Baus oder der Renovierung – für ein makelloses Übergabeergebnis. Wir entfernen Klebereste, Farbreste, Kalkablagerungen und Feinstaub.",
        features: [
          "Entfernung von Klebe-, Farb- und Kalkrückständen",
          "Gründliche Reinigung aller Oberflächen",
          "Streifenfreie Glasreinigung aller Fensterflächen",
          "Übergabereinigung für Bauträger und Auftraggeber",
        ],
        metaTitle: `Bauendreinigung Rottweil | ${siteConfig.name}`,
        metaDescription:
          "Professionelle Bauendreinigung in Rottweil – übergabebereit und makellos. Für Neu- und Umbauten. Jetzt Angebot anfordern!",
      },
      {
        id: "grundreinigung-boeden",
        slug: "bodengrundrreinigung",
        title: "Boden-Grundrreinigung",
        shortDesc: "Tiefenreinigung für strapazierte Böden aller Art",
        description:
          "Maschinelle Tiefenreinigung für Steinböden, PVC, Parkett, Teppich und Fliesen – Entfernung von eingetrocknetem Schmutz, altem Wachs und Pflegemittelrückständen.",
        features: [
          "Maschinelle Grundrreinigung aller Bodenbeläge",
          "Entfernung von Wachs und Pflegemittelrückständen",
          "Anschließende Neu-Versiegelung & Pflege",
          "Teppichreinigung mit Nassextraktion",
        ],
        metaTitle: `Boden-Grundrreinigung Rottweil | ${siteConfig.name}`,
        metaDescription:
          "Maschinelle Boden-Grundrreinigung in Rottweil – für Stein, PVC, Parkett und Teppich. Tiefenreinigung und Versiegelung. Jetzt anfragen!",
      },
    ],
  },
];
