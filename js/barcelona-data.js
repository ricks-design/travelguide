/* ============================================================
   BARCELONA — place data (bilingual)
   Tipps von Marc und Katharina.
   Same structure as london-data.js.
   cat: "sights" | "food" | "night" | "day"
   ============================================================ */

const CITY = {
  name: { de: "Barcelona", en: "Barcelona" },
  center: [41.3874, 2.1686],
  zoom: 13,
  updated: { de: "Juli 2026", en: "July 2026" },
};

const CATS = {
  sights: { label: { de: "Sehenswürdigkeiten", en: "Sights" }, color: "var(--c-sights)", hex: "#0E9AA7" },
  food:   { label: { de: "Essen", en: "Food" }, color: "var(--c-food)", hex: "#E8763C" },
  night:  { label: { de: "Ausgehen", en: "Going out" }, color: "var(--c-night)", hex: "#C9427D" },
  day:    { label: { de: "Tagsüber", en: "Daytime" }, color: "var(--c-day)", hex: "#F0B429" },
  trips:  { label: { de: "Ausflüge", en: "Day trips" }, color: "var(--c-trips)", hex: "#7FCF9B" },
};

const PLACES = [
  /* ---------------- SIGHTS ---------------- */
  {
    name: "Sagrada Família",
    cat: "sights", area: "Eixample",
    desc: {
      de: "Erstmal von außen anschauen, wenn man sie noch nicht kennt. Innen ist es schön, aber teuer: 20€ für den Basic-Eintritt ohne Audioguide, die Türme kosten extra.",
      en: "Worth seeing from outside first if you haven't already. The interior is beautiful but pricey: €20 for basic entry without audioguide, the towers cost extra.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Sagrada%20Fam%C3%ADlia&query_place_id=ChIJk_s92NyipBIRUMnDG8Kq2Js",
    lat: 41.4036299, lng: 2.1743558,
  },
  {
    name: "Hospital de Sant Pau",
    cat: "sights", area: "Eixample",
    desc: {
      de: "Wunderschönes altes Krankenhaus, heute Museum, ganz in der Nähe der Sagrada Família. Basic-Ticket ohne Audioguide 15€, lohnt sich.",
      en: "A beautiful old hospital, now a museum, right near the Sagrada Família. Basic ticket without audioguide is €15, worth it.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Hospital%20de%20Sant%20Pau&query_place_id=ChIJJ0AB4M-ipBIRj3HSiyLF-gE",
    lat: 41.4117072, lng: 2.1743395,
  },
  {
    name: "Gràcia",
    cat: "sights", area: "Gràcia",
    desc: {
      de: "Unser liebstes Viertel zum Herumlaufen — kleine Plätze, viele Bars und Läden, deutlich ruhiger als das Zentrum. Placa del Sol ist ein guter Ausgangspunkt.",
      en: "Our favourite neighbourhood for wandering around — small squares, plenty of bars and shops, noticeably calmer than the centre. Plaça del Sol is a good starting point.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Gr%C3%A0cia&query_place_id=ChIJRUY5EQCjpBIRN3jXbxlDy7Q",
    lat: 41.4016055, lng: 2.1567445,
  },
  {
    name: "Park Güell",
    cat: "sights", area: "Gràcia / Carmel",
    desc: {
      de: "Zu Fuß von Gràcia aus erreichbar. Es gibt einen Teil mit Eintritt und einen großen frei zugänglichen Bereich mit gutem Blick über die Stadt.",
      en: "Reachable on foot from Gràcia. There's a paid section and a large free-access area with a good view over the city.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Park%20G%C3%BCell&query_place_id=ChIJq0HUUq6ipBIRWM6qGqALmok",
    lat: 41.4144948, lng: 2.1526945,
  },
  {
    name: "Bunkers del Carmel",
    cat: "sights", area: "El Carmel",
    desc: {
      de: "Toller Blick über die ganze Stadt von den ehemaligen Flakstellungen. Erwartet viele Leute, gute Jacke mitnehmen — perfekt für Sonnenuntergang mit ein paar Bieren und Chips.",
      en: "Great view over the whole city from the old anti-aircraft positions. Expect crowds, bring a warm jacket — perfect for sunset with some beers and chips.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Bunkers%20del%20Carmel&query_place_id=ChIJUcV95LSipBIRUBkO4FCGMRU",
    lat: 41.4193003, lng: 2.1618259,
  },
  {
    name: "Casa Batlló & Casa Milà",
    cat: "sights", area: "Passeig de Gràcia",
    desc: {
      de: "Die zwei Gaudí-Häuser auf dem Weg von Gràcia Richtung Zentrum. Von außen schön anzusehen, drinnen teuer — muss nicht sein, hängt vom eigenen Kulturanspruch ab.",
      en: "The two Gaudí houses on the way from Gràcia towards the centre. Lovely from outside, expensive inside — not essential, depends how much culture you want on this trip.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Casa%20Batll%C3%B3%20%26%20Casa%20Mil%C3%A0&query_place_id=ChIJYUFLSe2ipBIRD04uni940kA",
    maps2: { label: { de: "Casa Milà (La Pedrera)", en: "Casa Milà (La Pedrera)" }, url: "https://www.google.com/maps/search/?api=1&query=La%20Pedrera%20-%20Casa%20Mil%C3%A0&query_place_id=ChIJ1eGKmZOipBIRah43T2Kjn8Q" },
    lat: 41.3917, lng: 2.164918,
  },
  {
    name: "Barri Gòtic & Kathedrale",
    cat: "sights", area: "Ciutat Vella",
    desc: {
      de: "Gotisches Viertel zum Durchlaufen, dazu die Kathedrale — von außen reicht.",
      en: "The Gothic Quarter, good for a wander, plus the cathedral — outside is enough.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Barri%20G%C3%B2tic%20%26%20Kathedrale&query_place_id=ChIJg2xxlvmipBIRg1jhdSQR9hY",
    lat: 41.383962, lng: 2.1761991,
  },
  {
    name: "Santa Maria del Mar",
    cat: "sights", area: "El Born",
    desc: {
      de: "Noch eine Kirche, auch nur von außen nötig.",
      en: "Another church, also fine to just see from outside.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Santa%20Maria%20del%20Mar&query_place_id=ChIJV6QNXv6ipBIRYOHAH1yUvLQ",
    lat: 41.3838871, lng: 2.1820711,
  },
  {
    name: "Platja de la Barceloneta",
    cat: "sights", area: "Barceloneta",
    desc: {
      de: "Stadtstrand, für den Zweck ziemlich gut. Zum Laufen oder mit Leihrad ein paar Stunden am Wasser entlang.",
      en: "City beach, pretty good for what it is. Good for a walk or a few hours along the water on a rented bike.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Platja%20de%20la%20Barceloneta&query_place_id=ChIJJ5Y4CaijpBIR-2VJP9cOjh4",
    lat: 41.3783713, lng: 2.1924685,
  },
  {
    name: "Montjuïc & Plaça Espanya",
    cat: "sights", area: "Montjuïc",
    desc: {
      de: "Montjuïc ist der Hausberg der Stadt, Plaça Espanya liegt ihm zu Füßen — klassisches Sightseeing-Kombi mit gutem Blick über Barcelona von oben.",
      en: "Montjuïc is the city's local mountain, Plaça Espanya sits at its foot — a classic sightseeing combo with a good view over Barcelona from the top.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Montju%C3%AFc%20%26%20Pla%C3%A7a%20Espanya&query_place_id=ChIJIY9aQnmipBIRwhBhDkqH4CM",
    lat: 41.3750289, lng: 2.1491173,
  },
  {
    name: "Museu Nacional d'Art de Catalunya",
    cat: "sights", area: "Montjuïc",
    desc: {
      de: "Super Romanik-Sammlung: Kirchenfresken aus den Bergkirchen der Pyrenäen, die dort abgebaut (bzw. teils geklaut) und im Museum aufwändig wieder aufgebaut wurden. Liegt oben auf Montjuïc.",
      en: "A great Romanesque collection: church frescoes taken down from Pyrenean mountain churches (some of it plundered, to be honest) and painstakingly reassembled inside the museum. Sits up on Montjuïc.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Museu%20Nacional%20d%27Art%20de%20Catalunya&query_place_id=ChIJMU59xHGipBIRkdwlcgUWAYY",
    lat: 41.36844, lng: 2.15357,
  },
  {
    name: "Parc de la Ciutadella & Arc de Triomf",
    cat: "sights", area: "Ciutat Vella",
    desc: {
      de: "Park zum Herumlaufen, auf der Wiese sitzen oder Ruderboot leihen, direkt daneben der Arc de Triomf.",
      en: "Park for walking around, sitting on the grass, or renting a rowing boat, with the Arc de Triomf right next to it.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Parc%20de%20la%20Ciutadella%20%26%20Arc%20de%20Triomf&query_place_id=ChIJ4QmWQ_2ipBIRcD1a5hhhOEI",
    maps2: { label: { de: "Arc de Triomf", en: "Arc de Triomf" }, url: "https://www.google.com/maps/search/?api=1&query=Arc%20de%20Triomf&query_place_id=ChIJoXZqNuOipBIRsZU39a8r_qk" },
    lat: 41.388123, lng: 2.1860152,
  },
  {
    name: "Tibidabo",
    cat: "sights", area: "Sarrià-Sant Gervasi",
    desc: {
      de: "Hausberg im Nordwesten der Stadt mit Vergnügungspark und Sühnetempel obendrauf, per Zug + historischer Straßenbahn/Standseilbahn erreichbar. Weitester Blick über Barcelona, den man bekommen kann.",
      en: "The mountain on the city's northwest edge, with an amusement park and a basilica on top, reached by train plus the old tram/funicular. The widest view you'll get over Barcelona.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Tibidabo&query_place_id=ChIJRdvzz4mXpBIRYypOS8brkts",
    lat: 41.4225, lng: 2.118611,
  },
  /* ---------------- FOOD ---------------- */
  {
    name: "Raspall",
    cat: "food", area: "Gràcia",
    desc: {
      de: "Für Tapas und Drinks: gratis Mini-Tapa bei jeder Bestellung von Bier oder Wein.",
      en: "For tapas and drinks: a free mini-tapa comes with every beer or wine you order.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Raspall&query_place_id=ChIJJQlIHL6ipBIRJqJXPjas0EQ",
    lat: 41.4012077, lng: 2.1606007,
  },
  {
    name: "Can Codina",
    cat: "food", area: "Gràcia",
    desc: {
      de: "Tapas.",
      en: "Tapas.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Can%20Codina&query_place_id=ChIJE4GuyZWipBIRWayhSrQJ_gU",
    lat: 41.398954, lng: 2.160862,
  },
  {
    name: "Vinitus",
    cat: "food", area: "Eixample",
    desc: {
      de: "Tapas mit gutem Preis-Leistungs-Verhältnis.",
      en: "Tapas with a good price-to-quality ratio.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Vinitus&query_place_id=ChIJ3XUCr0K5Z0ARbKq1CqAKgJQ",
    lat: 41.3900261, lng: 2.1640484,
  },
  {
    name: "Bastaix",
    cat: "food", area: "El Born",
    desc: {
      de: "Tapas-Lokal im Zentrum.",
      en: "Tapas place in the centre.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Bastaix&query_place_id=ChIJJc54T_6ipBIRWCQL-2WCRCw",
    lat: 41.383634, lng: 2.182617,
  },
  {
    name: "ELDISET",
    cat: "food", area: "El Born",
    desc: {
      de: "Schönes Tapas- und Weinlokal im Zentrum.",
      en: "Nice tapas and wine place in the centre.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=ELDISET&query_place_id=ChIJN-3jDf6ipBIREgvbwVTBeAc",
    lat: 41.3850432, lng: 2.183387,
  },
  {
    name: "Marcelino 1968",
    cat: "food", area: "Gràcia",
    desc: {
      de: "Für alles Mögliche an Essen.",
      en: "Good for all kinds of food.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Marcelino%201968&query_place_id=ChIJp4B8e72ipBIRR-NAz-3iBq0",
    lat: 41.4014191, lng: 2.1568725,
  },
  {
    name: "Restaurant Hofmann",
    cat: "food", area: "Sarrià-Sant Gervasi",
    desc: {
      de: "Für ein Michelin-Stern-Erlebnis: 49€ für ein sehr schönes Mittagsmenü, 95€ für das Abendmenü.",
      en: "For a Michelin-star experience: €49 for a really nice lunch menu, €95 for dinner.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Restaurant%20Hofmann&query_place_id=ChIJU2yMmZmipBIRincP1doW8ak",
    lat: 41.3972052, lng: 2.152967,
  },
  {
    name: "L'Arrosseria Xàtiva",
    cat: "food", area: "Gràcia",
    desc: {
      de: "Paella in Gràcia.",
      en: "Paella in Gràcia.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=L%27Arrosseria%20X%C3%A0tiva&query_place_id=ChIJW3X2gL6ipBIRKMhN7d0NtJI",
    lat: 41.40389, lng: 2.1596759,
  },
  {
    name: "Terrassa Martínez",
    cat: "food", area: "Montjuïc",
    desc: {
      de: "Paella und Meeresfrüchte, etwas höheres Budget, dafür Lage auf dem Montjuïc mit Blick.",
      en: "Paella and seafood, a bit more of a budget, but the location on Montjuïc comes with a view.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Terrassa%20Mart%C3%ADnez&query_place_id=ChIJuxYkIkWipBIRg0DQG0dNPbA",
    lat: 41.3696075, lng: 2.1725414,
  },
  {
    name: "La Brasa de Pirenaicas",
    cat: "food", area: "Gràcia",
    desc: {
      de: "Katalanische Küche vom Grill in Gràcia.",
      en: "Grilled Catalan cooking in Gràcia.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=La%20Brasa%20de%20Pirenaicas&query_place_id=ChIJz8BgVACjpBIR6UDdafypA3k",
    lat: 41.4023884, lng: 2.1573166,
  },
  {
    name: "Restaurant Barra Alta",
    cat: "food", area: "Sarrià-Sant Gervasi", top: true,
    desc: {
      de: "Aktuell unser Top-Favorit in Barcelona — etwas feiner, das Jakobsmuscheltartar ist unfassbar lecker.",
      en: "Our current top favourite in Barcelona — a bit more refined, the scallop tartare is unbelievably good.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Restaurant%20Barra%20Alta&query_place_id=ChIJ9c5JxpiipBIRmzY14q5u2pQ",
    lat: 41.399738, lng: 2.1505804,
  },
  {
    name: "La Maroteca",
    cat: "food", area: "Eixample",
    desc: {
      de: "Top Fisch und Meeresfrüchte, Fischerfamilie in mittlerweile sechster Generation — lasst euch die Fischtanks hinter der Küche zeigen.",
      en: "Top fish and seafood, run by a fishing family now in its sixth generation — ask to see the fish tanks behind the kitchen.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=La%20Maroteca&query_place_id=ChIJQR2BJIyipBIR5DWQRXQcr74",
    lat: 41.3977263, lng: 2.1678422,
  },
  {
    name: "Rosa Negra (Laietana)",
    cat: "food", area: "Ciutat Vella",
    desc: {
      de: "Mexikanisches Restaurant an der Via Laietana.",
      en: "Mexican restaurant on Via Laietana.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Rosa%20Negra%20%28Laietana%29&query_place_id=ChIJv6nmFvqipBIRhK65nVKPSlw",
    lat: 41.3865044, lng: 2.1756469,
  },
  {
    name: "La Tasqueta de Blai",
    cat: "food", area: "Poble-sec",
    desc: {
      de: "Carrer de Blai in Poble-sec ist die Pintxos-Straße der Stadt, dieser Laden gilt dort als einer der besten. Prinzip wie in San Sebastián: Teller nehmen, sich vom Tresen bedienen, am Ende werden die Spieße gezählt.",
      en: "Carrer de Blai in Poble-sec is the city's pintxos street, and this place is considered one of the best on it. Same system as in San Sebastián: grab a plate, help yourself at the counter, they count the skewers at the end.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=La%20Tasqueta%20de%20Blai&query_place_id=ChIJ4Ruxd12ipBIR-DkqG6wqVGQ",
    lat: 41.3732437, lng: 2.1654207,
  },
  {
    name: "Sophie",
    cat: "food", area: "El Born",
    desc: {
      de: "Die besten Tapas, die wir in Barcelona gegessen haben.",
      en: "The best tapas we've had in Barcelona.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Sophie&query_place_id=ChIJvc9hHJqjpBIRVz8fu9R8u1I",
    lat: 41.3895616, lng: 2.1798551,
  },
  {
    name: "Lluritu 2",
    cat: "food", area: "Gràcia",
    desc: {
      de: "Fisch, Meeresfrüchte und Tapas — einer unserer aktuellen Favoriten in der Nachbarschaft.",
      en: "Fish, seafood and tapas — one of our current neighbourhood favourites.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Lluritu%202&query_place_id=ChIJJUDOpWejpBIR_vmjZWgT1Rs",
    lat: 41.4022966, lng: 2.1562364,
  },
  {
    name: "La Fonda Pirenaica",
    cat: "food", area: "Gràcia",
    desc: {
      de: "Tapas, das Original neben dem neueren Ableger La Brasa de Pirenaicas gleich nebenan — einer unserer aktuellen Favoriten.",
      en: "Tapas, the original next to its newer sibling La Brasa de Pirenaicas right next door — one of our current favourites.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=La%20Fonda%20Pirenaica&query_place_id=ChIJ67qmBACjpBIR5T7kUOzDu1g",
    lat: 41.4023884, lng: 2.1573166,
  },
  {
    name: "Glug",
    cat: "food", area: "Eixample",
    desc: {
      de: "Katalanisch-italienische Küche zum Teilen, große Weinauswahl, Bib Gourmand.",
      en: "Catalan-Italian sharing plates, big wine list, Bib Gourmand.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Glug&query_place_id=ChIJP1F0JgCjpBIRtOimmX8JjJo",
    lat: 41.3883248, lng: 2.1456521,
  },
  {
    name: "Oníric",
    cat: "food", area: "Gràcia",
    desc: {
      de: "Modern-katalanisches Degustationsmenü, familiär geführt.",
      en: "Modern Catalan tasting menu, family-run.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=On%C3%ADric&query_place_id=ChIJNcaqanyjpBIRso8hWh7L3tE",
    lat: 41.4078948, lng: 2.1577474,
  },
  /* ---------------- GOING OUT ---------------- */
  {
    name: "Can Paixano (La Xampanyeria)",
    cat: "night", area: "El Born",
    desc: {
      de: "Unsere liebste Cava-Bar. Amazing Preis-Leistungs-Verhältnis, den „Rosato“ nehmen. Schließt um 23 Uhr!",
      en: "Our favourite cava bar. Amazing price-to-quality ratio, get the \"Rosato\". Closes at 11pm!",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Can%20Paixano%20%28La%20Xampanyeria%29&query_place_id=ChIJI1v-6f-ipBIRTeac1KdrUcg",
    lat: 41.3818137, lng: 2.1833746,
  },
  {
    name: "Stampi Café",
    cat: "night", area: "Montjuïc",
    desc: {
      de: "Schöne italienische Bar mit Antipasti und Cocktails.",
      en: "Nice Italian bar with antipasti and cocktails.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Stampi%20Caf%C3%A9&query_place_id=ChIJZ-yZbkmjpBIRx2Zdr-u9kww",
    lat: 41.37481, lng: 2.1645826,
  },
  {
    name: "Royal Passeig de Gràcia — Rooftop",
    cat: "night", area: "Passeig de Gràcia",
    desc: {
      de: "Eine von vielen schönen Rooftop-Bars mit 365-Grad-Blick über die Stadt. Teuer.",
      en: "One of many nice rooftop bars with a 365-degree view over the city. Expensive.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Royal%20Passeig%20de%20Gr%C3%A0cia%20%E2%80%94%20Rooftop&query_place_id=ChIJP_oJC5OipBIR7dXGfPJtTEA",
    lat: 41.3946531, lng: 2.162478,
  },
  {
    name: "Kimpton Vividora — Rooftop",
    cat: "night", area: "Ciutat Vella",
    desc: {
      de: "Rooftop des Hotels Kimpton Vividora Barcelona.",
      en: "Rooftop of the Kimpton Vividora Barcelona hotel.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Kimpton%20Vividora%20%E2%80%94%20Rooftop&query_place_id=ChIJGSe0PfeipBIR-sKI4VVSrSI",
    lat: 41.3846614, lng: 2.1728778,
  },
  {
    name: "Casa Bonay — Rooftop",
    cat: "night", area: "Eixample",
    desc: {
      de: "Rooftop des Hotels Casa Bonay.",
      en: "Rooftop of the Casa Bonay hotel.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Casa%20Bonay%20%E2%80%94%20Rooftop&query_place_id=ChIJZ7c1TbSjpBIRbJJgUmvahOo",
    lat: 41.3934981, lng: 2.1744033,
  },
  {
    name: "Barceló Raval — Rooftop",
    cat: "night", area: "El Raval",
    desc: {
      de: "Rooftop des Hotels Barceló Raval, super für Sonnenuntergänge — den Seagram's Vermut probieren.",
      en: "Rooftop of the Barceló Raval hotel, great for sunsets — try the Seagram's Vermut.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Barcel%C3%B3%20Raval%20%E2%80%94%20Rooftop&query_place_id=ChIJB3UnMl-ipBIRndNxQk136JA",
    lat: 41.379071, lng: 2.169666,
  },
  {
    name: "Jamboree",
    cat: "night", area: "Ciutat Vella",
    desc: {
      de: "Club, montags unser Tag hier.",
      en: "Club, Monday is our night here.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Jamboree&query_place_id=ChIJjeBz7leipBIR2hJlrAvHBQY",
    lat: 41.3796814, lng: 2.1752178,
  },
  {
    name: "Razzmatazz",
    cat: "night", area: "Poblenou",
    desc: {
      de: "Club, mittwochs.",
      en: "Club, Wednesdays.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Razzmatazz&query_place_id=ChIJtUAGDhmjpBIRypg66Y-dDwQ",
    lat: 41.3977323, lng: 2.1911108,
  },
  {
    name: "La Fira",
    cat: "night", area: "Eixample",
    desc: {
      de: "Club fürs Wochenende, wenn ihr auf Reggaeton steht — es gibt zwei Filialen in der Stadt.",
      en: "Weekend club if you're into reggaeton — there are two branches in the city.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=La%20Fira&query_place_id=ChIJi18F3JyipBIRig68MpDAcCU",
    lat: 41.3922112, lng: 2.1478253,
  },
  {
    name: "Monk Barcelona",
    cat: "night", area: "El Born",
    desc: {
      de: "Cocktailbar hinter der Fassade eines Tante-Emma-Ladens versteckt, unten DJ.",
      en: "Cocktail bar hidden behind the façade of a corner shop, DJ downstairs.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Monk%20Barcelona&query_place_id=ChIJKRmHQ46jpBIRoX7IpueOC0k",
    lat: 41.3831761, lng: 2.1812542,
  },
  /* ---------------- DAYTIME / CAFÉS ---------------- */
  {
    name: "Les Filles Cafè",
    cat: "day", area: "Gràcia",
    desc: {
      de: "Schöner Ort zum Draußensitzen für einen Drink und etwas zu essen.",
      en: "Cute place to sit outside for a drink and something to eat.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Les%20Filles%20Caf%C3%A8&query_place_id=ChIJ0bCOuTmjpBIRUZIl4kNA7QI",
    lat: 41.396173, lng: 2.1568832,
  },
  {
    name: "LA PAPA",
    cat: "day", area: "Eixample",
    desc: {
      de: "Brunch.",
      en: "Brunch.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=LA%20PAPA&query_place_id=ChIJnSeRvgWjpBIRRcG2xbaFLJ4",
    lat: 41.3898631, lng: 2.1577026,
  },
  {
    name: "Alsur Café & Backdoor Bar",
    cat: "day", area: "El Born",
    desc: {
      de: "Brunch, es gibt mehrere Filialen in der Stadt.",
      en: "Brunch, there are several branches around the city.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Alsur%20Caf%C3%A9%20%26%20Backdoor%20Bar&query_place_id=ChIJPxs7HAKjpBIRCRTnJUtQEro",
    lat: 41.3857357, lng: 2.1852047,
  },
  {
    name: "Billy Brunch",
    cat: "day", area: "Eixample",
    desc: {
      de: "Brunch.",
      en: "Brunch.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Billy%20Brunch&query_place_id=ChIJ67TY2euipBIRhKOwdXPxwyQ",
    lat: 41.3976991, lng: 2.1693767,
  },
  {
    name: "Picnic",
    cat: "day", area: "El Born",
    desc: {
      de: "Brunch.",
      en: "Brunch.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Picnic&query_place_id=ChIJiZq-5PyipBIRfK3u0YJJQHE",
    lat: 41.3886029, lng: 2.181611,
  },
  {
    name: "Delacreme",
    cat: "day", area: "Eixample",
    desc: {
      de: "Eis.",
      en: "Ice cream.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Delacreme&query_place_id=ChIJ3TMuUYyipBIRr5QWiKg3WQA",
    lat: 41.3879027, lng: 2.1619416,
  },
  {
    name: "COOKONA",
    cat: "day", area: "Eixample",
    desc: {
      de: "Cookie-Laden, lecker aber sehr süß.",
      en: "Cookie shop, delicious but very sweet.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=COOKONA&query_place_id=ChIJ33YwAZCipBIRcuiQ3iaya-E",
    lat: 41.391378, lng: 2.155046,
  },
  {
    name: "Belliny Brunch Born",
    cat: "day", area: "El Born",
    desc: {
      de: "Brunch im Born.",
      en: "Brunch in El Born.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Belliny%20Brunch%20Born&query_place_id=ChIJif3D3i-jpBIRTY4fpE_JZ4w",
    lat: 41.3840671, lng: 2.1838873,
  },
  {
    name: "Trópico",
    cat: "day", area: "Eixample",
    desc: {
      de: "Brunch, lateinamerikanisch angehaucht.",
      en: "Brunch with a Latin American touch.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Tr%C3%B3pico&query_place_id=ChIJZ_wsu_mjpBIRb4SLxP0tx44",
    lat: 41.3878512, lng: 2.1650035,
  },
  {
    name: "Billy Brunch & Park",
    cat: "day", area: "El Born",
    desc: {
      de: "Zweiter Standort von Billy Brunch, mit Blick auf einen kleinen Park.",
      en: "Second Billy Brunch location, overlooking a small park.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Billy%20Brunch%20%26%20Park&query_place_id=ChIJ44Y8zyCjpBIRlB4-etd1nTM",
    lat: 41.3879012, lng: 2.1787033,
  },
  /* ---------------- DAY TRIPS ---------------- */
  {
    name: "Sitges",
    cat: "trips", area: "Küste, ~35 km südwestlich",
    desc: {
      de: "Kleinstadt an der Küste, gute Tagestour ab Barcelona — Zug ab Sants oder Passeig de Gràcia, gut eine Stunde. Strand, Altstadt, ruhiger als die Stadt.",
      en: "Small coastal town, a good day trip from Barcelona — train from Sants or Passeig de Gràcia, about an hour. Beach, old town, calmer than the city.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Sitges&query_place_id=ChIJ-wiyIEeAoxIR-cgHKfvxYXA",
    lat: 41.2365928, lng: 1.8058987,
  },
  {
    name: "Montserrat",
    cat: "trips", area: "Berge, ~50 km nordwestlich",
    desc: {
      de: "Freistehendes Bergmassiv mit dem Kloster Santa Maria de Montserrat, per Zug plus Zahnradbahn oder Seilbahn erreichbar. Ganzer Tag einplanen.",
      en: "Freestanding mountain massif with the Santa Maria de Montserrat monastery, reached by train plus rack railway or cable car. Plan a full day.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Montserrat&query_place_id=ChIJM91TOlH1pBIR8UpzodtBqPM",
    lat: 41.5933378, lng: 1.8376246,
  },
];
