import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

interface MarbleMapping {
  id: string;
  currentName: string;
  newName: string;
  currentHero: string;
  newHero: string;
  isAmbiguous: boolean;
  ambiguityReason?: string;
}

const marbleMappings: MarbleMapping[] = [
  {
    id: "prod-abu-black",
    currentName: "Abu Black ",
    newName: "Abu Black",
    currentHero: "/products/Marbles/Abu Black .png",
    newHero: "/products/Marbles/abu-black.png",
    isAmbiguous: false,
  },
  {
    id: "prod-agora-beige",
    currentName: "Agora Beige",
    newName: "Agora Beige",
    currentHero: "/products/Marbles/Agora Beige.png",
    newHero: "/products/Marbles/agora-beige.png",
    isAmbiguous: false,
  },
  {
    id: "prod-arctic-white-b",
    currentName: "Arctic White (B)",
    newName: "Arctic White",
    currentHero: "/products/Marbles/Arctic White (B).png",
    newHero: "/products/Marbles/arctic-white.png",
    isAmbiguous: false,
  },
  {
    id: "prod-armani-bronze",
    currentName: "Armani Bronze",
    newName: "Armani Bronze",
    currentHero: "/products/Marbles/Armani Bronze.png",
    newHero: "/products/Marbles/armani-bronze.png",
    isAmbiguous: false,
  },
  {
    id: "prod-armani-brown-it",
    currentName: "Armani Brown (It)",
    newName: "Armani Brown",
    currentHero: "/products/Marbles/Armani Brown (It).png",
    newHero: "/products/Marbles/armani-brown.png",
    isAmbiguous: false,
  },
  {
    id: "prod-ash-gray-it",
    currentName: "Ash Gray (IT)",
    newName: "Ash Gray",
    currentHero: "/products/Marbles/Ash Gray (IT).png",
    newHero: "/products/Marbles/ash-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-avocado-leather-finish-b",
    currentName: "Avocado Leather finish (B)",
    newName: "Avocado Leather Finish",
    currentHero: "/products/Marbles/Avocado Leather finish (B).png",
    newHero: "/products/Marbles/avocado-leather-finish.png",
    isAmbiguous: false,
  },
  {
    id: "prod-bardilo-gray-it",
    currentName: "Bardilo Gray (IT)",
    newName: "Bardilo Gray",
    currentHero: "/products/Marbles/Bardilo Gray (IT).png",
    newHero: "/products/Marbles/bardilo-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-belecimo-it",
    currentName: "Belecimo (IT)",
    newName: "Belecimo",
    currentHero: "/products/Marbles/Belecimo (IT).png",
    newHero: "/products/Marbles/belecimo.png",
    isAmbiguous: false,
  },
  {
    id: "prod-belecimo-new-it",
    currentName: "Belecimo New (IT)",
    newName: "Belecimo New",
    currentHero: "/products/Marbles/Belecimo New (IT).png",
    newHero: "/products/Marbles/belecimo-new.png",
    isAmbiguous: false,
  },
  {
    id: "prod-black-it",
    currentName: "Black (IT)",
    newName: "Black",
    currentHero: "/products/Marbles/Black (IT).png",
    newHero: "/products/Marbles/black.png",
    isAmbiguous: false,
  },
  {
    id: "prod-black-antique",
    currentName: "Black Antique",
    newName: "Black Antique",
    currentHero: "/products/Marbles/Black Antique.png",
    newHero: "/products/Marbles/black-antique.png",
    isAmbiguous: false,
  },
  {
    id: "prod-black-marquina",
    currentName: "Black Marquina ",
    newName: "Black Marquina",
    currentHero: "/products/Marbles/Black Marquina .png",
    newHero: "/products/Marbles/black-marquina.png",
    isAmbiguous: false,
  },
  {
    id: "prod-black-rose-it",
    currentName: "Black Rose (IT)",
    newName: "Black Rose",
    currentHero: "/products/Marbles/Black Rose (IT).png",
    newHero: "/products/Marbles/black-rose.png",
    isAmbiguous: false,
  },
  {
    id: "prod-blue-bresiait",
    currentName: "Blue Bresia(IT)",
    newName: "Blue Bresia",
    currentHero: "/products/Marbles/Blue Bresia(IT).png",
    newHero: "/products/Marbles/blue-bresia.png",
    isAmbiguous: false,
  },
  {
    id: "prod-brazillian-ytd-1",
    currentName: "Brazillian YTD 1",
    newName: "Brazillian YTD 1",
    currentHero: "/products/Marbles/Brazillian YTD 1.png",
    newHero: "/products/Marbles/brazillian-ytd-1.png",
    isAmbiguous: false,
  },
  {
    id: "prod-cnc-fluted-indian-ytd-2",
    currentName: "CNC Fluted (INDIAN) YTD 2",
    newName: "CNC Fluted YTD 2",
    currentHero: "/products/Marbles/CNC Fluted (INDIAN) YTD 2.png",
    newHero: "/products/Marbles/cnc-fluted-ytd-2.png",
    isAmbiguous: false,
  },
  {
    id: "prod-cnc-white-ytd",
    currentName: "CNC White YTD",
    newName: "CNC White YTD",
    currentHero: "/products/Marbles/CNC White YTD.png",
    newHero: "/products/Marbles/cnc-white-ytd.png",
    isAmbiguous: false,
  },
  {
    id: "prod-calcutta-white-b",
    currentName: "Calcutta White (B)",
    newName: "Calcutta White",
    currentHero: "/products/Marbles/Calcutta White (B).png",
    newHero: "/products/Marbles/calcutta-white.png",
    isAmbiguous: false,
  },
  {
    id: "prod-camel-brown-it",
    currentName: "Camel Brown (IT)",
    newName: "Camel Brown",
    currentHero: "/products/Marbles/Camel Brown (IT).png",
    newHero: "/products/Marbles/camel-brown.png",
    isAmbiguous: false,
  },
  {
    id: "prod-cardian-gray-it",
    currentName: "Cardian Gray (IT)",
    newName: "Cardian Gray",
    currentHero: "/products/Marbles/Cardian Gray (IT).png",
    newHero: "/products/Marbles/cardian-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-cora-cabana-b",
    currentName: "Cora Cabana (B)",
    newName: "Cora Cabana",
    currentHero: "/products/Marbles/Cora Cabana (B).png",
    newHero: "/products/Marbles/cora-cabana.png",
    isAmbiguous: false,
  },
  {
    id: "prod-cream-italian",
    currentName: "Cream Italian ",
    newName: "Cream Italian",
    currentHero: "/products/Marbles/Cream Italian .png",
    newHero: "/products/Marbles/cream-italian.png",
    isAmbiguous: false,
  },
  {
    id: "prod-cream-karaman-it",
    currentName: "Cream Karaman (IT)",
    newName: "Cream Karaman",
    currentHero: "/products/Marbles/Cream Karaman (IT).png",
    newHero: "/products/Marbles/cream-karaman.png",
    isAmbiguous: false,
  },
  {
    id: "prod-crystal-lizato-b",
    currentName: "Crystal Lizato (B)",
    newName: "Crystal Lizato",
    currentHero: "/products/Marbles/Crystal Lizato (B).png",
    newHero: "/products/Marbles/crystal-lizato.png",
    isAmbiguous: false,
  },
  {
    id: "prod-cygnus-black-b",
    currentName: "Cygnus Black (B)",
    newName: "Cygnus Black",
    currentHero: "/products/Marbles/Cygnus Black (B).png",
    newHero: "/products/Marbles/cygnus-black.png",
    isAmbiguous: false,
  },
  {
    id: "prod-emotion-gray-it",
    currentName: "Emotion Gray (IT)",
    newName: "Emotion Gray",
    currentHero: "/products/Marbles/Emotion Gray (IT).png",
    newHero: "/products/Marbles/emotion-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-ess-gray-it",
    currentName: "Ess Gray (IT)",
    newName: "Ess Gray",
    currentHero: "/products/Marbles/Ess Gray (IT).png",
    newHero: "/products/Marbles/ess-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-extreme-gold-b",
    currentName: "Extreme Gold (B)",
    newName: "Extreme Gold",
    currentHero: "/products/Marbles/Extreme Gold (B).png",
    newHero: "/products/Marbles/extreme-gold.png",
    isAmbiguous: false,
  },
  {
    id: "prod-fairyland-blue-it",
    currentName: "Fairyland Blue (IT)",
    newName: "Fairyland Blue",
    currentHero: "/products/Marbles/Fairyland Blue (IT).png",
    newHero: "/products/Marbles/fairyland-blue.png",
    isAmbiguous: false,
  },
  {
    id: "prod-fendi-gray-it",
    currentName: "Fendi Gray (IT)",
    newName: "Fendi Gray",
    currentHero: "/products/Marbles/Fendi Gray (IT).png",
    newHero: "/products/Marbles/fendi-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-french-black-b",
    currentName: "French Black (B)",
    newName: "French Black",
    currentHero: "/products/Marbles/French Black (B).png",
    newHero: "/products/Marbles/french-black.png",
    isAmbiguous: false,
  },
  {
    id: "prod-givenchy-white-b",
    currentName: "Givenchy white (B)",
    newName: "Givenchy White",
    currentHero: "/products/Marbles/Givenchy white (B).png",
    newHero: "/products/Marbles/givenchy-white.png",
    isAmbiguous: false,
  },
  {
    id: "prod-glitter-brown-b",
    currentName: "Glitter Brown (B)",
    newName: "Glitter Brown",
    currentHero: "/products/Marbles/Glitter Brown (B).png",
    newHero: "/products/Marbles/glitter-brown.png",
    isAmbiguous: false,
  },
  {
    id: "prod-golden-spider-it",
    currentName: "Golden Spider (IT)",
    newName: "Golden Spider",
    currentHero: "/products/Marbles/Golden Spider (IT).png",
    newHero: "/products/Marbles/golden-spider.png",
    isAmbiguous: false,
  },
  {
    id: "prod-gray-horizon-b",
    currentName: "Gray Horizon (B)",
    newName: "Gray Horizon",
    currentHero: "/products/Marbles/Gray Horizon (B).png",
    newHero: "/products/Marbles/gray-horizon.png",
    isAmbiguous: false,
  },
  {
    id: "prod-gray-milano-it",
    currentName: "Gray Milano (IT)",
    newName: "Gray Milano",
    currentHero: "/products/Marbles/Gray Milano (IT).png",
    newHero: "/products/Marbles/gray-milano.png",
    isAmbiguous: false,
  },
  {
    id: "prod-gray-wave-it",
    currentName: "Gray wave (IT)",
    newName: "Gray Wave",
    currentHero: "/products/Marbles/Gray wave (IT).png",
    newHero: "/products/Marbles/gray-wave.png",
    isAmbiguous: false,
  },
  {
    id: "prod-green-canyon-b",
    currentName: "Green Canyon (B)",
    newName: "Green Canyon",
    currentHero: "/products/Marbles/Green Canyon (B).png",
    newHero: "/products/Marbles/green-canyon.png",
    isAmbiguous: false,
  },
  {
    id: "prod-ice-gray-it",
    currentName: "Ice Gray (IT)",
    newName: "Ice Gray",
    currentHero: "/products/Marbles/Ice Gray (IT).png",
    newHero: "/products/Marbles/ice-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-imperial-gray-indian",
    currentName: "Imperial Gray (INDIAN)",
    newName: "Imperial Gray",
    currentHero: "/products/Marbles/Imperial Gray (INDIAN).png",
    newHero: "/products/Marbles/imperial-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-lime-brown-it",
    currentName: "Lime Brown (IT)",
    newName: "Lime Brown",
    currentHero: "/products/Marbles/Lime Brown (IT).png",
    newHero: "/products/Marbles/lime-brown.png",
    isAmbiguous: false,
  },
  {
    id: "prod-lime-white",
    currentName: "Lime White ",
    newName: "Lime White",
    currentHero: "/products/Marbles/Lime White .png",
    newHero: "/products/Marbles/lime-white.png",
    isAmbiguous: false,
  },
  {
    id: "prod-london-gray-b",
    currentName: "London Gray (B)",
    newName: "London Gray",
    currentHero: "/products/Marbles/London Gray (B).png",
    newHero: "/products/Marbles/london-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-luna-gray-it",
    currentName: "Luna Gray (IT)",
    newName: "Luna Gray",
    currentHero: "/products/Marbles/Luna Gray (IT).png",
    newHero: "/products/Marbles/luna-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-maori-b",
    currentName: "Maori (B)",
    newName: "Maori",
    currentHero: "/products/Marbles/Maori (B).png",
    newHero: "/products/Marbles/maori.png",
    isAmbiguous: false,
  },
  {
    id: "prod-marco-polo",
    currentName: "Marco Polo",
    newName: "Marco Polo",
    currentHero: "/products/Marbles/Marco Polo.png",
    newHero: "/products/Marbles/marco-polo.png",
    isAmbiguous: false,
  },
  {
    id: "prod-micro-angelo-it",
    currentName: "Micro angelo (IT)",
    newName: "Micro Angelo",
    currentHero: "/products/Marbles/Micro angelo (IT).png",
    newHero: "/products/Marbles/micro-angelo.png",
    isAmbiguous: false,
  },
  {
    id: "prod-mocha-gray-it",
    currentName: "Mocha gray (IT)",
    newName: "Mocha Gray",
    currentHero: "/products/Marbles/Mocha gray (IT).png",
    newHero: "/products/Marbles/mocha-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-moon-cream",
    currentName: "Moon Cream ",
    newName: "Moon Cream",
    currentHero: "/products/Marbles/Moon Cream .png",
    newHero: "/products/Marbles/moon-cream.png",
    isAmbiguous: false,
  },
  {
    id: "prod-moon-gray-it",
    currentName: "Moon Gray (IT)",
    newName: "Moon Gray",
    currentHero: "/products/Marbles/Moon Gray (IT).png",
    newHero: "/products/Marbles/moon-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-multi-red-it",
    currentName: "Multi Red (IT)",
    newName: "Multi Red",
    currentHero: "/products/Marbles/Multi Red (IT).png",
    newHero: "/products/Marbles/multi-red.png",
    isAmbiguous: false,
  },
  {
    id: "prod-mystic-green-indian-exotic",
    currentName: "Mystic Green (INDIAN EXOTIC)",
    newName: "Mystic Green",
    currentHero: "/products/Marbles/Mystic Green (INDIAN EXOTIC).png",
    newHero: "/products/Marbles/mystic-green.png",
    isAmbiguous: false,
  },
  {
    id: "prod-noche-travantine-it",
    currentName: "Noche Travantine (IT)",
    newName: "Noche Travertine",
    currentHero: "/products/Marbles/Noche Travantine (IT).png",
    newHero: "/products/Marbles/noche-travertine.png",
    isAmbiguous: false,
  },
  {
    id: "prod-nordic-gray-it",
    currentName: "Nordic Gray (IT)",
    newName: "Nordic Gray",
    currentHero: "/products/Marbles/Nordic Gray (IT).png",
    newHero: "/products/Marbles/nordic-gray.png",
    isAmbiguous: false,
  },
  {
    id: "prod-ocean-blue-b",
    currentName: "OCean Blue (B)",
    newName: "Ocean Blue",
    currentHero: "/products/Marbles/OCean Blue (B).png",
    newHero: "/products/Marbles/ocean-blue.png",
    isAmbiguous: false,
  },
  {
    id: "prod-ocean-green-b",
    currentName: "Ocean green (B)",
    newName: "Ocean Green",
    currentHero: "/products/Marbles/Ocean green (B).png",
    newHero: "/products/Marbles/ocean-green.png",
    isAmbiguous: false,
  },
  {
    id: "prod-panda-white-it",
    currentName: "Panda White (IT)",
    newName: "Panda White",
    currentHero: "/products/Marbles/Panda White (IT).png",
    newHero: "/products/Marbles/panda-white.png",
    isAmbiguous: false,
  },
  {
    id: "prod-peach-white-p-b",
    currentName: "Peach White P (B)",
    newName: "Peach White P",
    currentHero: "/products/Marbles/Peach White P (B).png",
    newHero: "/products/Marbles/peach-white-p.png",
    isAmbiguous: false,
  },
  {
    id: "prod-peach-white-b",
    currentName: "Peach white (B)",
    newName: "Peach White",
    currentHero: "/products/Marbles/Peach white (B).png",
    newHero: "/products/Marbles/peach-white.png",
    isAmbiguous: false,
  },
  {
    id: "prod-pengia-indian-exotic",
    currentName: "Pengia Indian Exotic ",
    newName: "Pengia",
    currentHero: "/products/Marbles/Pengia Indian Exotic .png",
    newHero: "/products/Marbles/pengia.png",
    isAmbiguous: false,
  },
  {
    id: "prod-polaris-green-b",
    currentName: "Polaris green (b)",
    newName: "Polaris Green",
    currentHero: "/products/Marbles/Polaris green (b).png",
    newHero: "/products/Marbles/polaris-green.png",
    isAmbiguous: false,
  },
  {
    id: "prod-pulpis-brown",
    currentName: "Pulpis Brown",
    newName: "Pulpis Brown",
    currentHero: "/products/Marbles/Pulpis Brown.png",
    newHero: "/products/Marbles/pulpis-brown.png",
    isAmbiguous: false,
  },
  {
    id: "prod-purple-nest-b",
    currentName: "Purple Nest (B)",
    newName: "Purple Nest",
    currentHero: "/products/Marbles/Purple Nest (B).png",
    newHero: "/products/Marbles/purple-nest.png",
    isAmbiguous: false,
  },
  {
    id: "prod-rafelo-b",
    currentName: "Rafelo (B)",
    newName: "Rafelo",
    currentHero: "/products/Marbles/Rafelo (B).png",
    newHero: "/products/Marbles/rafelo.png",
    isAmbiguous: false,
  },
  {
    id: "prod-regal-beige-it",
    currentName: "Regal Beige (IT)",
    newName: "Regal Beige",
    currentHero: "/products/Marbles/Regal Beige (IT).png",
    newHero: "/products/Marbles/regal-beige.png",
    isAmbiguous: false,
  },
  {
    id: "prod-srk-black",
    currentName: "SRK Black ",
    newName: "SRK Black",
    currentHero: "/products/Marbles/SRK Black .png",
    newHero: "/products/Marbles/srk-black.png",
    isAmbiguous: false,
  },
  {
    id: "prod-sangrila-leather-finish-b",
    currentName: "Sangrila leather finish (B)",
    newName: "Sangrila Leather Finish",
    currentHero: "/products/Marbles/Sangrila leather finish (B).png",
    newHero: "/products/Marbles/sangrila-leather-finish.png",
    isAmbiguous: false,
  },
  {
    id: "prod-saran-koli",
    currentName: "Saran Koli ",
    newName: "Saran Koli",
    currentHero: "/products/Marbles/Saran Koli .png",
    newHero: "/products/Marbles/saran-koli.png",
    isAmbiguous: false,
  },
  {
    id: "prod-silver-traventine-it",
    currentName: "Silver Traventine (IT)",
    newName: "Silver Travertine",
    currentHero: "/products/Marbles/Silver Traventine (IT).png",
    newHero: "/products/Marbles/silver-travertine.png",
    isAmbiguous: false,
  },
  {
    id: "prod-snake-black-indian",
    currentName: "Snake Black INDIAN ",
    newName: "Snake Black",
    currentHero: "/products/Marbles/Snake Black INDIAN .png",
    newHero: "/products/Marbles/snake-black.png",
    isAmbiguous: false,
  },
  {
    id: "prod-snow-white-it",
    currentName: "Snow White (IT)",
    newName: "Snow White",
    currentHero: "/products/Marbles/Snow White (IT).png",
    newHero: "/products/Marbles/snow-white.png",
    isAmbiguous: false,
  },
  {
    id: "prod-spider-green",
    currentName: "Spider Green ",
    newName: "Spider Green",
    currentHero: "/products/Marbles/Spider Green .png",
    newHero: "/products/Marbles/spider-green.png",
    isAmbiguous: false,
  },
  {
    id: "prod-stataurio-it",
    currentName: "Stataurio (IT)",
    newName: "Stataurio",
    currentHero: "/products/Marbles/Stataurio (IT).png",
    newHero: "/products/Marbles/stataurio.png",
    isAmbiguous: false,
  },
  {
    id: "prod-sunset-blue-b",
    currentName: "Sunset Blue (B)",
    newName: "Sunset Blue",
    currentHero: "/products/Marbles/Sunset Blue (B).png",
    newHero: "/products/Marbles/sunset-blue.png",
    isAmbiguous: false,
  },
  {
    id: "prod-super-white-b",
    currentName: "Super White (B)",
    newName: "Super White",
    currentHero: "/products/Marbles/Super White (B).png",
    newHero: "/products/Marbles/super-white.png",
    isAmbiguous: false,
  },
  {
    id: "prod-swarowski-white-v",
    currentName: "Swarowski White (V)",
    newName: "Swarowski White",
    currentHero: "/products/Marbles/Swarowski White (V).png",
    newHero: "/products/Marbles/swarowski-white.png",
    isAmbiguous: false,
  },
  {
    id: "prod-turtle-green-b",
    currentName: "Turtle Green (B)",
    newName: "Turtle Green",
    currentHero: "/products/Marbles/Turtle Green (B).png",
    newHero: "/products/Marbles/turtle-green.png",
    isAmbiguous: false,
  },
  {
    id: "prod-vanilla-cream-it",
    currentName: "Vanilla Cream (IT)",
    newName: "Vanilla Cream",
    currentHero: "/products/Marbles/Vanilla Cream (IT).png",
    newHero: "/products/Marbles/vanilla-cream.png",
    isAmbiguous: false,
  },
  {
    id: "prod-volacasa-it",
    currentName: "Volacasa (IT)",
    newName: "Volacasa",
    currentHero: "/products/Marbles/Volacasa (IT).png",
    newHero: "/products/Marbles/volacasa.png",
    isAmbiguous: false,
  },
  {
    id: "prod-wavy-green-indian",
    currentName: "Wavy Green Indian ",
    newName: "Wavy Green",
    currentHero: "/products/Marbles/Wavy Green Indian .png",
    newHero: "/products/Marbles/wavy-green.png",
    isAmbiguous: false,
  },
  {
    id: "prod-white-it",
    currentName: "White (IT)",
    newName: "White (IT)",
    currentHero: "/products/Marbles/White (IT).png",
    newHero: "/products/Marbles/White (IT).png",
    isAmbiguous: true,
    ambiguityReason: "Stripping internal origin code leaves only 'White', colliding directly with 'White (V)' in both product title, slug, and image file naming. Retained for manual review per safety rules.",
  },
  {
    id: "prod-white-v",
    currentName: "White (V)",
    newName: "White (V)",
    currentHero: "/products/Marbles/White (V).png",
    newHero: "/products/Marbles/White (V).png",
    isAmbiguous: true,
    ambiguityReason: "Stripping internal origin code leaves only 'White', colliding directly with 'White (IT)' in both product title, slug, and image file naming. Retained for manual review per safety rules.",
  },
  {
    id: "prod-white-small-poker-v",
    currentName: "White Small Poker (V)",
    newName: "White Small Poker",
    currentHero: "/products/Marbles/White Small Poker (V).png",
    newHero: "/products/Marbles/white-small-poker.png",
    isAmbiguous: false,
  },
  {
    id: "prod-ytd3-it",
    currentName: "YTD3 (IT)",
    newName: "YTD3",
    currentHero: "/products/Marbles/YTD3 (IT).png",
    newHero: "/products/Marbles/ytd3.png",
    isAmbiguous: false,
  },
  {
    id: "prod-ytd4-it",
    currentName: "YTD4 (IT)",
    newName: "YTD4",
    currentHero: "/products/Marbles/YTD4 (IT).png",
    newHero: "/products/Marbles/ytd4.png",
    isAmbiguous: false,
  },
  {
    id: "prod-yellow-traventine-it0",
    currentName: "Yellow Traventine (IT0",
    newName: "Yellow Travertine",
    currentHero: "/products/Marbles/Yellow Traventine (IT0.png",
    newHero: "/products/Marbles/yellow-travertine.png",
    isAmbiguous: false,
  },
];

const graniteCleanups: Record<string, string> = {
  "prod-burgandy-white": "Burgandy White",
  "prod-dyna-blue": "Dyna Blue",
  "prod-godhra-gray": "Godhra Gray",
  "prod-hocco-brown": "Hocco Brown",
  "prod-p-white": "P White",
  "prod-steel-gray": "Steel Gray",
  "prod-symphony-ivory": "Symphony Ivory",
};

const sandstoneCleanups: Record<string, string> = {
  "prod-black-hydra-finish": "Black Hydra Finish",
  "prod-monsoon-leather-finish": "Monsoon Leather Finish",
};

export function runExecution(dryRun: boolean = true) {
  console.log(`=== RUNNING EXECUTION (dryRun = ${dryRun}) ===`);

  const realMarblesDir = fs.realpathSync(path.join(process.cwd(), "public/products/Marbles"));
  console.log(`Target real marbles directory: ${realMarblesDir}`);

  // 1. Rename assets
  console.log("\n--- Step 1: Renaming image files ---");
  let renameCount = 0;
  for (const m of marbleMappings) {
    if (m.isAmbiguous || m.currentHero === m.newHero) {
      continue;
    }
    const oldFileName = path.basename(m.currentHero);
    const newFileName = path.basename(m.newHero);
    const oldFullPath = path.join(realMarblesDir, oldFileName);
    const newFullPath = path.join(realMarblesDir, newFileName);

    if (!fs.existsSync(oldFullPath)) {
      console.error(`ERROR: Source file does not exist: "${oldFullPath}"`);
      continue;
    }

    if (oldFullPath === newFullPath) {
      continue;
    }

    renameCount++;
    console.log(`[RENAME ${renameCount}] "${oldFileName}" -> "${newFileName}"`);
    if (!dryRun) {
      // Use git mv if possible so git tracks it cleanly
      try {
        const gitOld = path.relative(process.cwd(), oldFullPath);
        const gitNew = path.relative(process.cwd(), newFullPath);
        execSync(`git mv "${gitOld}" "${gitNew}"`, { stdio: "pipe" });
      } catch (err) {
        // Fall back to fs.renameSync
        fs.renameSync(oldFullPath, newFullPath);
      }
    }
  }
  console.log(`Total files to rename: ${renameCount}`);

  // 2. Update data/catalogue-taxonomy.ts
  console.log("\n--- Step 2: Updating data/catalogue-taxonomy.ts ---");
  const taxonomyPath = path.join(process.cwd(), "data/catalogue-taxonomy.ts");
  let content = fs.readFileSync(taxonomyPath, "utf-8");

  // Build a lookup map of marble changes
  const marbleById = new Map<string, MarbleMapping>();
  for (const m of marbleMappings) {
    marbleById.set(m.id, m);
  }

  // We will parse products using regex or string manipulation
  // Each product block looks like:
  //   {
  //     "id": "prod-...",
  //     "name": "...",
  //     "slug": "...",
  //     "category": "...",
  //     "subcategory": "...",
  //     "shortDescription": "...",
  //     "description": "...",
  //     "heroImage": "...",
  //     "gallery": [
  //       "..."
  //     ],
  //     "featured": ...,
  //     "sortOrder": ...
  //   }

  let updatedProductsCount = 0;

  // Let's do a reliable replacement using product id block matching
  const productBlockRegex = /(\{\s*"id":\s*"(prod-[^"]+)",[\s\S]*?\n\s*\})/g;

  content = content.replace(productBlockRegex, (fullMatch, block, id) => {
    let modifiedBlock = block;
    let changed = false;

    if (marbleById.has(id)) {
      const m = marbleById.get(id)!;
      if (!m.isAmbiguous) {
        // Update name
        if (m.currentName !== m.newName) {
          // Replace name
          modifiedBlock = modifiedBlock.replace(
            new RegExp(`"name":\\s*"${escapeRegExp(m.currentName)}"`, "g"),
            `"name": "${m.newName}"`
          );
          // Replace shortDescription
          modifiedBlock = modifiedBlock.replace(
            new RegExp(`"shortDescription":\\s*"[^"]*"`, "g"),
            `"shortDescription": "${m.newName} - Marble"`
          );
          // Replace description
          modifiedBlock = modifiedBlock.replace(
            new RegExp(`"description":\\s*"[^"]*"`, "g"),
            `"description": "Premium natural Marble material: ${m.newName}."`
          );
          changed = true;
        }

        // Update heroImage and gallery
        if (m.currentHero !== m.newHero) {
          modifiedBlock = modifiedBlock.replace(
            new RegExp(escapeRegExp(m.currentHero), "g"),
            m.newHero
          );
          changed = true;
        }
      }
    } else if (graniteCleanups[id]) {
      const newName = graniteCleanups[id];
      modifiedBlock = modifiedBlock.replace(
        /"name":\s*"[^"]*"/,
        `"name": "${newName}"`
      );
      modifiedBlock = modifiedBlock.replace(
        /"shortDescription":\s*"[^"]*"/,
        `"shortDescription": "${newName} - Granite"`
      );
      modifiedBlock = modifiedBlock.replace(
        /"description":\s*"[^"]*"/,
        `"description": "Premium natural Granite material: ${newName}."`
      );
      changed = true;
    } else if (sandstoneCleanups[id]) {
      const newName = sandstoneCleanups[id];
      modifiedBlock = modifiedBlock.replace(
        /"name":\s*"[^"]*"/,
        `"name": "${newName}"`
      );
      modifiedBlock = modifiedBlock.replace(
        /"shortDescription":\s*"[^"]*"/,
        `"shortDescription": "${newName} - Sandstone"`
      );
      modifiedBlock = modifiedBlock.replace(
        /"description":\s*"[^"]*"/,
        `"description": "Premium natural Sandstone material: ${newName}."`
      );
      changed = true;
    }

    if (changed) {
      updatedProductsCount++;
    }

    return modifiedBlock;
  });

  console.log(`Total products updated in taxonomy: ${updatedProductsCount}`);

  if (!dryRun) {
    fs.writeFileSync(taxonomyPath, content, "utf-8");
    console.log("Successfully wrote updated catalogue-taxonomy.ts");
  }
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const isDry = process.argv.includes("--dry-run");
runExecution(isDry);
