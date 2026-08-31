import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "unterhalt",
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
  },
  {
    id: "glas",
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
  },
  {
    id: "grund",
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
  },
];
