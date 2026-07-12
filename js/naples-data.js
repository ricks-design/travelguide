/* ============================================================
   NAPLES — place data (bilingual)
   desc: { de: "…", en: "…" }  — German is the default language.
   Fields:
   name    display name
   cat     "pizza" | "street" | "coffee" | "bars" | "sights" | "trips"
   area    neighbourhood label
   top     true = ★ top pick
   todo    true = "on my list"
   closed  true = currently closed
   maps    Google Maps link  (maps2: optional second link)
   lat/lng coordinates (omit to hide from map)
   img     optional photo filename inside /images
   ============================================================ */

const CITY = {
  name: "Napoli",
  center: [40.8455, 14.2515],
  zoom: 13,
  updated: { de: "Juli 2026", en: "July 2026" },
};

const PLACES = [
  /* ---------------- SIGHTS ---------------- */
  {
    name: "U-Bahnhof Toledo",
    cat: "sights", area: "Toledo",
    desc: {
      de: "Sehr cool gemacht mit vielen kleinen blauen Mosaiksteinen. Gutes Fotomotiv.",
      en: "Beautifully done with thousands of tiny blue mosaic tiles — repeatedly voted one of the most beautiful metro stations in Europe. Great photo spot.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Toledo%20Metro%20Station%20Naples&query_place_id=ChIJOSg_CVAIOxMRmk2pdbC2dPQ",
    lat: 40.84249, lng: 14.24888,
  },
  {
    name: "Murales Maradona",
    cat: "sights", area: "Quartieri Spagnoli",
    desc: {
      de: "Wenn man Neapel besser verstehen möchte, dann muss man hier hin. Am besten nachts, wenn keine Touristen mehr da sind. Der komplette Platz ist blau-weiß. Maradona-Kult…",
      en: "If you want to understand Naples, you have to come here. Best at night when the tourists are gone. The whole square is blue and white — pure Maradona cult.",
    },
    maps: "https://maps.app.goo.gl/7W9zAFevUL5WEqQD9",
    lat: 40.84144, lng: 14.24525,
  },
  {
    name: "Quartieri Spagnoli",
    cat: "sights", area: "Quartieri Spagnoli",
    desc: {
      de: "Tag wie nachts empfehlenswert. Hier ist einfach das Leben. Zwischen Armut, Touristen, Mafia, Spritz, Madonnenstatuen, Papp-Aufstellern von Fußballern und frisch gewaschener Wäsche. Zum Abschluss einen Spritz bei Peppe Masiello.",
      en: "Worth it day and night — this is simply where life happens. Somewhere between poverty, tourists, mafia, spritz, Madonna statues, cardboard cut-outs of footballers and freshly washed laundry. Finish with a spritz at Peppe Masiello.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Quartieri+Spagnoli+Napoli",
    lat: 40.8409, lng: 14.2440,
  },
  {
    name: "Dom / Kathedrale der Hl. Maria",
    cat: "sights", area: "Centro Storico",
    desc: {
      de: "Hauptkirche der Stadt. Gehört zu ihrer Geschichte dazu. Ewig alte Mosaike in der Seitenkapelle und das Blut des Stadtheiligen San Gennaro auf der anderen Seite.",
      en: "The city's main church, inseparable from its history. Ancient mosaics in the side chapel and, on the other side, the blood of San Gennaro, the city's patron saint.",
    },
    maps: "https://maps.app.goo.gl/ZKHXu2MR5zBkzLpB8",
    lat: 40.85254, lng: 14.25932,
  },
  {
    name: "Museo Archeologico (MANN)",
    cat: "sights", area: "Centro Storico",
    desc: {
      de: "Für das Museum ist Neapel berühmt. Mega viel aus Pompeji usw. Viel zu teuer, für mich nicht gut kuratiert, kein Audioguide, usw.",
      en: "The museum Naples is famous for — an enormous amount from Pompeii and beyond. For me: far too expensive, poorly curated, no audio guide. Manage expectations.",
    },
    maps: "https://maps.google.com?q=Arch%C3%A4ologisches%20Nationalmuseum%20Neapel,%20Piazza%20Museo,%2018/19,%2080135%20Napoli%20NA,%20Italien&ftid=0x133b0867e2c94023:0xb48ecf1589057c98",
    lat: 40.85360, lng: 14.25053,
  },
  {
    name: "Gallerie d'Italia",
    cat: "sights", area: "Toledo",
    desc: {
      de: "Hat mir gut gefallen. Schön präsentiert, Schwerpunkt auch hier auf italienischem Barock. Einer von drei Caravaggio in Neapel und auch sonst spannende Künstler.",
      en: "I really liked this one. Beautifully presented, with a focus on Italian Baroque. One of the three Caravaggios in Naples, plus other exciting artists.",
    },
    maps: "https://maps.app.goo.gl/GrbeWHq1YqDriiWT7",
    lat: 40.84057, lng: 14.24872,
  },
  {
    name: "Teatro San Carlo",
    cat: "sights", area: "San Ferdinando",
    desc: {
      de: "Eines der ältesten Opernhäuser der Welt. Qualitativ nicht mehr da, wo es mal war. Trotzdem absolut sehens-/hörenswert. Programm ist knapp, aber es gibt auch kurze Führungen.",
      en: "One of the oldest opera houses in the world. Artistically no longer what it once was, but absolutely worth seeing — and hearing. The programme is thin, but there are short guided tours.",
    },
    maps: "https://maps.google.com?q=Teatro%20San%20Carlo,%20Via%20San%20Carlo,%2098,%2080132%20Napoli%20NA,%20Italien&ftid=0x133b085218e9d0d3:0xf4bc5fe47dfae739",
    lat: 40.83748, lng: 14.24964,
  },
  {
    name: "Chiostro Maiolicato (Santa Chiara)",
    cat: "sights", area: "Centro Storico",
    desc: {
      de: "Toller Innenhof/Kreuzgang, kleine Audioführung.",
      en: "Wonderful cloister covered in majolica tiles, with a small audio tour.",
    },
    maps: "https://maps.app.goo.gl/bDHFj45tu7bM2e328",
    lat: 40.84606, lng: 14.25329,
  },
  {
    name: "Pio Monte della Misericordia",
    cat: "sights", area: "Centro Storico", top: true,
    desc: {
      de: "Sehenswert, wenn man Caravaggio mag! Spannende Geschichte. Eines der schönsten Caravaggio-Gemälde hängt zentral in einem sechseckigen Bau. In jeder Ecke ein weiteres Gemälde, das sich auf den Caravaggio bezieht. Mega!!",
      en: "A must if you like Caravaggio! Fascinating history. One of his most beautiful paintings hangs at the centre of a hexagonal building, with a related painting in every corner. Incredible!",
    },
    maps: "https://maps.app.goo.gl/jbLeCXHdSoTbZZrF7",
    lat: 40.85196, lng: 14.26036,
  },
  {
    name: "Castel Sant'Elmo",
    cat: "sights", area: "Vomero", top: true,
    desc: {
      de: "Lohnt sich. Am besten den Weg über die Treppen auf der Ostseite hoch- oder runterlaufen. Oben schöner Ausblick; außerhalb der Burg auch nicht schlecht, aber der Eintritt lohnt sich trotzdem. Toller Blick über den Golf.",
      en: "Worth it. Best to take the stairs on the eastern side up or down. The view from outside the fortress isn't bad either, but the entrance fee still pays off — fantastic panorama over the whole gulf.",
    },
    maps: "https://maps.app.goo.gl/ZKbpDC87Peaen6n79",
    lat: 40.84445, lng: 14.23890,
  },
  {
    name: "Galleria Umberto I",
    cat: "sights", area: "San Ferdinando",
    desc: {
      de: "Bisschen wie in Mailand. Coole Architektur, kann man durchlaufen, aber die Geschäfte geben nicht viel her. Über die Jahre schön restauriert worden.",
      en: "A bit like Milan. Cool architecture, nice to walk through, though the shops don't offer much. Beautifully restored over the years.",
    },
    maps: "https://maps.app.goo.gl/RiAhQRmrr95n5Kbq8",
    lat: 40.83853, lng: 14.24947,
  },
  {
    name: "Kloster San Martino",
    cat: "sights", area: "Vomero",
    desc: {
      de: "Eintritt für Museum, Kreuzgang, Kloster und Ausblick. Ausblick vom Castel wohl schöner.",
      en: "One ticket covers museum, cloister, monastery and viewpoint. The view from Castel Sant'Elmo next door is probably better.",
    },
    maps: "https://maps.app.goo.gl/mbBGCVFkQeFJgut99",
    lat: 40.84360, lng: 14.24077,
  },
  {
    name: "Sant'Anna dei Lombardi",
    cat: "sights", area: "Centro Storico", top: true,
    desc: {
      de: "Der berühmte Vasari-Korridor ist Wahnsinn! Die Leute in der Kirche führen einen auf Nachfrage auch in die Katakomben.",
      en: "The famous Vasari sacristy is mind-blowing! If you ask, the people in the church will also take you down into the crypt.",
    },
    maps: "https://maps.app.goo.gl/qFpy1Bepbmp1CEmNA",
    lat: 40.84485, lng: 14.25051,
  },
  {
    name: "Napoli Sotterranea",
    cat: "sights", area: "Centro Storico",
    desc: {
      de: "Eine der diversen Möglichkeiten, den Untergrund von Neapel zu besichtigen. Schon spannend: enge Gänge, unterirdische Seen, teilweise als Bunker im Krieg genutzt. Insgesamt fand ich die Katakomben des Hl. Gennaro sehenswerter.",
      en: "One of several ways to explore underground Naples. Genuinely interesting — narrow passages, underground cisterns, partly used as air-raid shelters in the war. Overall I found the Catacombs of San Gennaro more worthwhile.",
    },
    maps: "https://maps.app.goo.gl/nwuS5xqLPRoCMYpaA",
    lat: 40.85126, lng: 14.25672,
  },
  {
    name: "Katakomben des Hl. Gennaro",
    cat: "sights", area: "Sanità / Capodimonte",
    desc: {
      de: "Super spannend, coole Führung. Gibt's auch in Kombination mit den Katakomben des San Gaudioso.",
      en: "Really fascinating, great guided tour. Ticket also covers San Gaudioso.",
    },
    maps: "https://maps.app.goo.gl/pY2cvz2U1yBLmneY6",
    lat: 40.86506, lng: 14.24743,
  },
  {
    name: "Katakomben des San Gaudioso",
    cat: "sights", area: "Sanità", todo: true,
    desc: {
      de: "War ich noch nicht, soll aber auch sehr cool sein — und ist im Kombi-Ticket mit San Gennaro drin.",
      en: "Haven't been myself yet, but it's supposed to be very cool — and it comes combined with the San Gennaro ticket.",
    },
    maps: "https://maps.google.com?q=Catacombe%20di%20San%20Gaudioso,%20Via%20Sanit%C3%A0,%20123,%2080136%20Napoli%20NA,%20Italien&ftid=0x133b0865b7f94de7:0x4494b7d83d1bd73e",
    lat: 40.85947, lng: 14.24853,
  },
  {
    name: "San Lorenzo Maggiore",
    cat: "sights", area: "Centro Storico", todo: true,
    desc: {
      de: "Hab ich für das nächste Mal auf der Liste. Ist glaub ich ganz cool mit römischen Ausgrabungen.",
      en: "On my list for next time — supposed to be great, with Roman excavations underneath the church.",
    },
    maps: "https://maps.app.goo.gl/S3oii6AUUQtwH1Eq8",
    lat: 40.85068, lng: 14.25757,
  },
  {
    name: "Real Bosco di Capodimonte",
    cat: "sights", area: "Capodimonte",
    desc: {
      de: "Berühmteste Galerie in Neapel. Extrem schlecht kuratiert und präsentiert. Als ich drin war, waren die Sachen, die ich sehen wollte (Caravaggio, Gentileschi usw.), nach Paris verliehen. Wenn die wieder da sind, eventuell schon sehenswert. Der einzige Botticelli in Neapel hängt versteckt in der Ecke 😅 Der Park ist ganz schön, wenn man mal mit bisschen Ruhe spazieren gehen möchte.",
      en: "The most famous gallery in Naples — and extremely badly curated and presented. When I was there, everything I wanted to see (Caravaggio, Gentileschi …) was on loan in Paris. Once those are back it might be worth it. The only Botticelli in Naples hangs hidden in a corner. The park, though, is lovely for a quiet walk.",
    },
    maps: "https://maps.google.com?q=Real%20Bosco%20di%20Capodimonte,%20Via%20Miano,%202,%2080131%20Napoli%20NA,%20Italien&ftid=0x133b087a487a37e5:0x23a48496e5b732fc",
    lat: 40.86698, lng: 14.25066,
  },

  /* ---------------- PIZZA ---------------- */
  {
    name: "Vincenzo Capuano",
    cat: "pizza", area: "Chiaia (Piazza Vittoria)", top: true,
    desc: {
      de: "Für mich die beste Pizza. Keine klassische neapolitanische, aber „Contemporary“. Übrigens auch in Berlin empfehlenswert. Seit 2024 auch an der Piazza Trieste e Trento mit schönem Wintergarten direkt am belebten Platz.",
      en: "For me, the best pizza in town. Not classic Neapolitan but \u201ccontemporary\u201d. Also recommended in Berlin, by the way. Since 2024 there's a second branch on Piazza Trieste e Trento with a lovely winter garden right on the busy square.",
    },
    maps: "https://maps.app.goo.gl/waX48f9aqFMw3SSAA",
    maps2: { label: { de: "Filiale Piazza Trieste e Trento", en: "Branch Piazza Trieste e Trento" }, url: "https://maps.app.goo.gl/UWRKqsNNtQQAiaPN8" },
    lat: 40.83219, lng: 14.24178,
  },
  {
    name: "50 Kalò",
    cat: "pizza", area: "Mergellina",
    desc: {
      de: "Super bekannt. Etwas außerhalb, aber hat bis spät in der Nacht offen und ist die Fahrt wert! Seit Juli 2024 auch mit der neuen U-Bahn L6 ab Municipio/Chiaia in wenigen Minuten zu erreichen. Update 2026: Die L6 fährt inzwischen Mo–Fr bis ca. 21 Uhr, am Wochenende weiterhin nur vormittags.",
      en: "Famous for a reason. A bit out of the centre but open late into the night and worth the trip! Since 2024 you can take the new metro L6 from Municipio/Chiaia in a few minutes — note it only runs until about 21:00 on weekdays and mornings only at weekends (as of 2026).",
    },
    maps: "https://maps.app.goo.gl/9cEmLqPxEs1JwZAp9",
    lat: 40.82837, lng: 14.22026,
  },
  {
    name: "Diego Vitagliano",
    cat: "pizza", area: "Bagnoli",
    desc: {
      de: "Die Fahrt lohnt sich für eine der besten Pizzerien Napolis. Auch tolle Primi und Dolci. Ambiente in Ordnung. Sehr laut.",
      en: "The trip out is worth it for one of the best pizzerias in Naples. Great primi and dolci too. Ambience is fine — but very loud.",
    },
    maps: "https://maps.app.goo.gl/cXbnDTC1RF5K5vE87",
    lat: 40.81710, lng: 14.17569,
  },
  {
    name: "Gino e Toto Sorbillo",
    cat: "pizza", area: "Centro Storico",
    desc: {
      de: "Eine der bekanntesten in Neapel. Wirklich gut. Oft eine Schlange, aber es geht schnell mit Warteliste. Erstmal 1–2 Nastro Azzurro gegenüber trinken, während man wartet.",
      en: "One of the most famous in Naples — and genuinely good. Often a queue, but it moves fast with the waiting list. Have one or two Nastro Azzurro across the street while you wait.",
    },
    maps: "https://maps.app.goo.gl/Af6sy1qRPXaRexdS7",
    lat: 40.85043, lng: 14.25536,
  },
  {
    name: "L'Antica Pizzeria da Michele",
    cat: "pizza", area: "Forcella",
    desc: {
      de: "Bekannt aus dem Film — Pizza ist wirklich super. Schlangen sind völlig übertrieben. Schön ist, dass man den Pizzaioli von draußen zuschauen kann; die arbeiten quasi auf der Straße, weil es so eng ist. Entweder direkt zur Öffnungszeit hingehen oder To-go. Gibt nur Margherita oder Marinara.",
      en: "Famous from the movie — and the pizza really is superb. The queue hype is completely overblown. The nice part: you can watch the pizzaioli from outside, they practically work on the street because it's so cramped. Either go right at opening time or take away. Margherita or marinara only.",
    },
    maps: "https://maps.app.goo.gl/PEmaEDg1EQm4bJdLA",
    lat: 40.84976, lng: 14.26330,
  },
  {
    name: "Starita",
    cat: "pizza", area: "Materdei",
    desc: {
      de: "Berühmte und gut besuchte Pizzeria. Super schneller Service. Gemütlich ist es nicht, aber das ist es beim Essen sowieso selten in Neapel.",
      en: "Famous and busy. Super fast service. It's not cosy — but eating in Naples rarely is.",
    },
    maps: "https://maps.app.goo.gl/5UGhkWC1q5U6S6QQA",
    lat: 40.85593, lng: 14.24642,
  },
  {
    name: "Pizzeria Da Attilio",
    cat: "pizza", area: "Pignasecca",
    desc: {
      de: "Super zentral. Spezialität hier: der Ricotta-gefüllte Rand.",
      en: "Super central. The speciality here is the ricotta-stuffed crust.",
    },
    maps: "https://maps.app.goo.gl/R3ho15uW6zbnmAbM9",
    lat: 40.84523, lng: 14.24835,
  },
  {
    name: "La Notizia 53",
    cat: "pizza", area: "Posillipo/Fuorigrotta",
    desc: {
      de: "Gibt zwei Läden direkt nebeneinander. Extrem bekannt und gut bewertet. Schlecht zu erreichen. Letzter Besuch 2025 war auch nicht extrem lohnenswert.",
      en: "Two shops right next to each other. Extremely famous and highly rated, but hard to reach — and my last visit in 2025 wasn't hugely worth it either.",
    },
    maps: "https://maps.app.goo.gl/PSg2cN6h5QxVnf9P6",
    lat: 40.83566, lng: 14.20996,
  },
  {
    name: "Bro — Ciro & Antonio Tutino",
    cat: "pizza", area: "Piazza Mercato",
    desc: {
      de: "Auch bekannt und gut bewertet.",
      en: "Also well known and highly rated.",
    },
    maps: "https://maps.app.goo.gl/tp8QqrFQ6JtzrK326",
    lat: 40.84725, lng: 14.26696,
  },
  {
    name: "Acunzo Pizza",
    cat: "pizza", area: "Vomero", todo: true,
    desc: {
      de: "War ich leider nicht. Ist aber auf meiner Liste fürs Vomero.",
      en: "Haven't made it yet — but it's on my list for the Vomero.",
    },
    maps: "https://maps.app.goo.gl/nmCbBMEaW3UCQVox9",
    lat: 40.84280, lng: 14.23228,
  },
  {
    name: "Gorizia 1916",
    cat: "pizza", area: "Vomero",
    desc: {
      de: "Auch sehr bekannt im Vomero.",
      en: "Another very well-known classic in the Vomero.",
    },
    maps: "https://maps.app.goo.gl/pLvCQgfLaGbv7pGK7",
    lat: 40.84336, lng: 14.23171,
  },

  /* ---------------- STREET FOOD & SÜSSES ---------------- */
  {
    name: "La Masardona",
    cat: "street", area: "Nähe Napoli Centrale", top: true,
    desc: {
      de: "Für mich die beste Friggitoria in Neapel. Am besten direkt aus dem Bahnhof raus und dorthin. Nastro Azzurro + irgendetwas Frittiertes auf der Straße essen. Mega gut, viele Einheimische.",
      en: "For me, the best friggitoria in Naples. Best plan: straight out of the station and over here. Nastro Azzurro plus something fried, eaten on the street. Fantastic — and full of locals.",
    },
    maps: "https://maps.app.goo.gl/Y2Me6mzcot4W5wiZA",
    lat: 40.84854, lng: 14.27353,
  },
  {
    name: "1947 Pizza Fritta",
    cat: "street", area: "Forcella",
    desc: {
      de: "Extrem gute Pizza fritta in sehr praktischer Lage. Sehr empfehlenswert!",
      en: "Extremely good pizza fritta in a very convenient location. Highly recommended!",
    },
    maps: "https://maps.app.goo.gl/tWivoNSTHvLt951E6",
    lat: 40.85001, lng: 14.26347,
  },
  {
    name: "Pizzeria De' Figliole",
    cat: "street", area: "Forcella",
    desc: {
      de: "Mega gute Pizza fritta im von Frauen geführten Laden. Eher Bistro-Charakter, aber original und perfekte Pizza fritta.",
      en: "Fantastic pizza fritta in a women-run shop. More of a bistro feel, but original and perfect pizza fritta.",
    },
    maps: "https://maps.app.goo.gl/joxB6ngnMYJ5vmWf7",
    lat: 40.85122, lng: 14.26341,
  },
  {
    name: "Pizza Fritta da Zia Esterina (Sorbillo)",
    cat: "street", area: "Piazza Trieste e Trento",
    desc: {
      de: "Richtig gute Pizza fritta!",
      en: "Really good pizza fritta!",
    },
    maps: "https://maps.app.goo.gl/KGdKUhMRiJSNrPpg9",
    lat: 40.83749, lng: 14.24830,
  },
  {
    name: "Novità Street Food",
    cat: "street", area: "Forcella",
    desc: {
      de: "Mega gut für einen Snack oder Aperitivo. Auch To-go gut.",
      en: "Great for a snack or aperitivo. Also good to go.",
    },
    maps: "https://maps.app.goo.gl/m18T2gcSsVLYq18p8",
    lat: 40.84945, lng: 14.26372,
  },
  {
    name: "Sfogliatelle Attanasio",
    cat: "street", area: "Nähe Napoli Centrale", top: true,
    desc: {
      de: "Wow! Beste Sfogliatelle und preiswert. Die Dinger sind der Wahnsinn. Direkt am Bahnhof, aber oft kurze Wartezeiten.",
      en: "Wow! The best sfogliatelle, and cheap. These things are unreal. Right by the station — usually only a short wait.",
    },
    maps: "https://maps.app.goo.gl/mDWDqsk1T1vfewou7",
    lat: 40.85321, lng: 14.26898,
  },
  {
    name: "Mary's Sfogliatella",
    cat: "street", area: "Galleria Umberto I",
    desc: {
      de: "Mega gut! Nur auf die Hand.",
      en: "Really good! Strictly to go.",
    },
    maps: "https://maps.google.com?q=Mary's%20Sfogliatella,%20Galleria%20Umberto%20I,%2066,%2080132%20Napoli%20NA,%20Italien&ftid=0x133b085ae31d8a09:0xc42201ee038bde1",
    lat: 40.83844, lng: 14.24870,
  },
  {
    name: "Gay-Odin Gelato",
    cat: "street", area: "Mehrere Standorte", top: true,
    desc: {
      de: "Mehrere Standorte in der ganzen Stadt. Super leckeres Eis: Fondente/Pistacchio salato 😍",
      en: "Chocolate factory since 1894 with shops all over the city. Superb gelato — fondente and pistacchio salato are the move.",
    },
    maps: "https://maps.google.com?q=Gay-Odin%20via%20Benedetto%20Croce%20fabbrica%20di%20cioccolato%201894,%20Via%20Benedetto%20Croce,%2061,%2080134%20Napoli%20NA,%20Italien&ftid=0x133b0843796a0939:0x5fa5642c7d6b382e",
    lat: 40.84764, lng: 14.25314,
  },
  {
    name: "Pasticceria Poppella",
    cat: "street", area: "Sanità",
    desc: {
      de: "Institution in der Sanità — Heimat des Fiocco di Neve.",
      en: "Sanità institution — home of the fiocco di neve.",
    },
    maps: "https://maps.app.goo.gl/9Uvny2jkA5QX5T668",
    lat: 40.85741, lng: 14.25344,
  },
  {
    name: "Vomero Fried Food",
    cat: "street", area: "Vomero",
    desc: {
      de: "Kleine Snacks, wenn man durchs Vomero spaziert.",
      en: "Small fried snacks for when you're strolling through the Vomero.",
    },
    maps: "https://maps.google.com?q=Vomero%20Fried%20Food,%20Via%20Domenico%20Cimarosa,%2044,%2080129%20Napoli%20NA,%20Italien&ftid=0x133b08fa32c2a9d1:0x22f61b25f56e8a0d",
    lat: 40.84281, lng: 14.23284,
  },
  {
    name: "Trattoria da Donato",
    cat: "street", area: "Nähe Napoli Centrale",
    desc: {
      de: "Empfehlenswert, falls man mal was anderes als Pizza möchte (selten der Fall). Lokale Spezialitäten.",
      en: "Recommended if you ever want something other than pizza (rarely the case). Local specialities, family-run since 1956.",
    },
    maps: "https://maps.google.com?q=Antica%20Trattoria%20e%20Pizzeria%20da%20Donato,%20Via%20Silvio%20Spaventa,%2039/41,%2080142%20Napoli%20NA,%20Italien&ftid=0x133b083df0eef2a9:0xe0ee0cb0da953819",
    lat: 40.85044, lng: 14.26938,
  },
  {
    name: "Chiosco Taralli Caldi",
    cat: "street", area: "Lungomare",
    desc: {
      de: "Neon-beleuchteter Kiosk am Meer. Mit dem Nastro Azzurro in der Hand an der Promenade spazieren… (Hinweis 2026: Es häufen sich Berichte über Touristenpreise — Preis vorher klären.)",
      en: "Neon-lit kiosk by the sea. Grab a Nastro Azzurro and stroll along the promenade… (Tourist-pricing reports are piling up — agree the price before they open the bottle.)",
    },
    maps: "https://maps.app.goo.gl/gHs6i91YKkXt3qMH8",
    lat: 40.83164, lng: 14.25115,
  },

  /* ---------------- KAFFEE & CAFÉS ---------------- */
  {
    name: "Ventimetriquadri",
    cat: "coffee", area: "Vomero", top: true,
    desc: {
      de: "Super Laden. Specialty Coffee, kleine, aber feine Auswahl an Naturweinen, kleine Snacks und super nette Besitzer/Mitarbeitende. War ich immer mehrmals.",
      en: "Great little place. Specialty coffee, a small but excellent selection of natural wines, small snacks and genuinely lovely owners and staff. I always end up going several times.",
    },
    maps: "https://maps.app.goo.gl/xvesBg6TU13JKDZi7",
    lat: 40.84543, lng: 14.23165,
  },
  {
    name: "The Florist",
    cat: "coffee", area: "Östliche Sanità",
    desc: {
      de: "Süßes Café etwas am Stadtrand. Gut zu verbinden mit einem Spaziergang durch die östliche Sanità. Viele selbst gemachte Produkte, eigener Honig etc.",
      en: "Sweet little café slightly off-centre. Combines well with a walk through the eastern Sanità. Lots of homemade products, their own honey and so on.",
    },
    maps: "https://maps.app.goo.gl/ynhbAuEFurASV21C6",
    lat: 40.85995, lng: 14.26158,
  },
  {
    name: "Posca — Bar/Bakery/Bistrot",
    cat: "coffee", area: "Port'Alba",
    desc: {
      de: "Bar, Bakery und Bistrot in einem, direkt an der Port'Alba. Solide Option den ganzen Tag über.",
      en: "Bar, bakery and bistrot in one, right by Port'Alba. Solid all-day option.",
    },
    maps: "https://maps.app.goo.gl/rUaqkseVxQ7TQ88Q6",
    lat: 40.84946, lng: 14.25094,
  },
  {
    name: "It's | caffè & bistrot",
    cat: "coffee", area: "Nähe Università",
    desc: {
      de: "Moderner Kaffee mit Buchhandlung. Man kann auch draußen sitzen. Essensangebot gering.",
      en: "Modern coffee place with a bookshop. Outdoor seating too. Limited food menu.",
    },
    maps: "https://maps.app.goo.gl/zv3RCcs9s4iB8jXi7",
    lat: 40.84436, lng: 14.25577,
  },

  /* ---------------- BARS & WEIN ---------------- */
  {
    name: "Barrio Botanico — Vomero",
    cat: "bars", area: "Vomero",
    desc: {
      de: "Wirklich sehr empfehlenswerte Location für Cocktails und reichhaltigen Aperitivo — kann auch ein Abendessen ersetzen. Man sitzt drinnen wie draußen ganz schön. Der Original-Standort am Municipio (der tolle gelbe Innenhof im Palazzo Fondi) ist seit Januar 2024 wegen Gebäudesanierung geschlossen, Wiedereröffnung weiter offen.",
      en: "Really recommendable for cocktails and a rich aperitivo that can replace dinner. Nice seating inside and out. The original Municipio location (that wonderful yellow courtyard in Palazzo Fondi) has been closed for building renovation since January 2024, reopening date still unknown.",
    },
    maps: "https://maps.app.goo.gl/xf8nvV1tdjEawAvS7",
    lat: 40.84335, lng: 14.23005,
  },
  {
    name: "Enoteca Belledonne",
    cat: "bars", area: "Chiaia",
    desc: {
      de: "Gute Location mit schöner Weinauswahl. Netter Besitzer mit guter Beratung.",
      en: "Good spot with a lovely wine selection. Friendly owner who gives great advice.",
    },
    maps: "https://maps.app.goo.gl/pp8bQbBtxWY3VAjy9",
    lat: 40.83515, lng: 14.23944,
  },
  {
    name: "L'Antiquario",
    cat: "bars", area: "Chiaia",
    desc: {
      de: "Schickere Cocktailbar.",
      en: "The dressier cocktail bar — speakeasy atmosphere, serious drinks.",
    },
    maps: "https://maps.app.goo.gl/pKdQXwkvjBg3bssx5",
    lat: 40.83294, lng: 14.24223,
  },
  {
    name: "Archeobar — Negroneria Napoletana",
    cat: "bars", area: "Centro Storico",
    desc: {
      de: "Schöne Location für Negroni in allen Formen.",
      en: "Lovely spot for Negronis in every conceivable form.",
    },
    maps: "https://maps.app.goo.gl/5bJk1WmrPVQBJRBU8",
    lat: 40.84717, lng: 14.25584,
  },
  {
    name: "Antica Cantina Sepe",
    cat: "bars", area: "Sanità",
    desc: {
      de: "Institution für lokale Weine, easy drinking. Auch generell eine ganz coole Ecke: Man sitzt entspannt an der Straße und kann ein bisschen beobachten.",
      en: "An institution for easy-drinking local wines. A great corner in general — you sit relaxed by the street and just watch the neighbourhood go by.",
    },
    maps: "https://maps.app.goo.gl/nteXqVK4ARnFPPZX8",
    lat: 40.85680, lng: 14.25500,
  },
  {
    name: "Peppe Masiello",
    cat: "bars", area: "Quartieri Spagnoli",
    desc: {
      de: "Sehr spannend, zwischen Erasmus- und Mafia-Vibes. Ab und an auch mal im Gesicht tätowierte Männer mit zu vielen Narben, wo man nicht so genau weiß, was gleich passiert. Einfach mal hinsetzen und die Leute beobachten. Dazu schreckliches verbranntes Brot mit Mayo.",
      en: "Fascinating — somewhere between Erasmus and mafia vibes. Occasionally men with face tattoos and too many scars, where you're not quite sure what happens next. Just sit down and people-watch. Served with terrible burnt bread with mayo.",
    },
    maps: "https://maps.app.goo.gl/SxVB1bFnMDAKrors7",
    lat: 40.84224, lng: 14.24738,
  },
  {
    name: "HBTOO",
    cat: "bars", area: "Coroglio/Bagnoli", todo: true,
    desc: {
      de: "Club wurde mir empfohlen. War noch nicht dort.",
      en: "Club that was recommended to me — haven't been yet. Big venue with a view of Nisida.",
    },
    maps: "https://maps.app.goo.gl/736aUzhBPzhiKFRi6",
    lat: 40.80110, lng: 14.17525,
  },

  /* ---------------- AUSFLÜGE ---------------- */
  {
    name: "Pepe in Grani (Caiazzo)",
    cat: "trips", area: "Caiazzo, ca. 1,5 h", top: true,
    desc: {
      de: "Falls man Bock auf einen kleinen Ausflug hat, ist das schon sehr empfehlenswert. Super bekannt aus der Netflix-Serie „Chef's Table“. Reservieren unbedingt! Die Kreationen dort sind schon extrem geil, Vor- und Nachspeisen der Wahnsinn! Service war eher mittelmäßig. Das Dorf ist klein und verschlafen und lebt eigentlich nur von dem Restaurant. Wir haben damals dort geschlafen; das nächste Mal würde ich eher früh essen und danach wieder zurückfahren. Zug: EAV-Tickets (am Bahnhof etwas unübersichtlich über einen Seiteneingang rechts, wie auch nach Ercolano, Pompeji usw.). Zug fährt am Bahnhof oben (!) ganz links hinten, Gleis 3, Linie Napoli–Piedimonte Matese. Zurück fährt der Zug abends nicht mehr von Caiazzo — dann mit Mimo (Personal Driver des Restaurants) in 20 min bequem für 40 € nach Caserta; dort fährt der Zug für 4 € bis ca. 22:35 nach Napoli. (Logistik-Stand: letzter Besuch — vorher checken.)",
      en: "If you fancy a little excursion, this is very much worth it. Famous from Netflix's \u201cChef's Table\u201d. Book ahead, no exceptions! The creations are extraordinary — starters and desserts are insane. Service was mediocre. The village is tiny and sleepy and basically lives off the restaurant. We stayed overnight back then; next time I'd eat early and head back. Train: EAV line Napoli–Piedimonte Matese from the upper level of Napoli Centrale (ticket office hidden through a side entrance on the right). No evening train back from Caiazzo — take Mimo, the restaurant's personal driver, ~20 min to Caserta for €40, then the €4 train to Naples runs until ~22:35. (Logistics as of my last visit — double-check.)",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Pepe%20in%20Grani%20Caiazzo&query_place_id=ChIJO9FwdeNZOhMRKp1UBErRQXs",
    maps2: { label: { de: "Fahrplan EAV (Piedimonte Matese)", en: "EAV timetable (Piedimonte Matese)" }, url: "https://www.eavsrl.it/download/orari-ferrovia-l7-napoli-afragola-av-santa-maria-c-v-piedimonte-in-vigore-dal-6-luglio-al-13-settembre-2026/?wpdmdl=52683&refresh=6a533571c0fa21783838065" },
    lat: 41.17718, lng: 14.36601,
  },
  {
    name: "Procida",
    cat: "trips", area: "Insel, kurze Fährfahrt",
    desc: {
      de: "Mega schön, falls man mal Neapel entfliehen möchte. Kurzer Trip mit der Fähre.",
      en: "Absolutely beautiful if you want to escape Naples for a day. Quick trip by ferry.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Marina%20Grande%20Procida",
    lat: 40.76545, lng: 14.03023,
  },
  {
    name: "Capri — Wanderung im Osten",
    cat: "trips", area: "Insel",
    desc: {
      de: "Auch ein schöner Ausflug. In der Nebensaison war leider gar nichts los und alles geschlossen; zur Saison sicher mega überlaufen. Die Wanderung im Osten der Insel (Belvedere di Tragara → Arco Naturale) ist sehr schön.",
      en: "A lovely excursion too. In low season sadly nothing was open at all; in high season it's certainly mobbed. The hike in the east of the island (Belvedere di Tragara → Arco Naturale) is gorgeous.",
    },
    maps: "https://maps.app.goo.gl/eBxsMMnpNxKkzFvz8",
    lat: 40.55047, lng: 14.25709,
  },
  {
    name: "Pompeji",
    cat: "trips", area: "Circumvesuviana",
    desc: {
      de: "Schon ganz lange her, dass ich dort war. Ist schon cool, aber man braucht natürlich einen ganzen Tag. Muss man überlegen, ob man den lieber in der Stadt investiert oder rausfährt.",
      en: "It's been a long while since I was there. It is cool, but it eats a full day — you have to decide whether that day is better spent in the city or out here.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Archaeological%20Park%20of%20Pompeii&query_place_id=ChIJg-rRh728OxMRNZtSjoBipHw",
    lat: 40.75122, lng: 14.48868,
  },
  {
    name: "Ercolano (Herculaneum)",
    cat: "trips", area: "Circumvesuviana", todo: true,
    desc: {
      de: "Vielleicht die entspanntere Alternative zu Pompeji. Haben wir damals nicht mehr geschafft, weil die recht früh schließen.",
      en: "Possibly the more relaxed alternative to Pompeii. We didn't manage it back then because it closes quite early.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Parco%20Archeologico%20di%20Ercolano&query_place_id=ChIJ17d1Me-mOxMRe4JncVKqWGI",
    lat: 40.80593, lng: 14.34739,
  },
  {
    name: "Vesuvio",
    cat: "trips", area: "Gran Cono",
    desc: {
      de: "Fand ich das letzte Mal etwas enttäuschend. Man ist schnell mit der Bahn dort, muss dann aber noch mit einem recht teuren Bus nach oben. Ganz nach oben kommt man nicht, der Rundweg ist auch gesperrt. Schöner Blick auf den Golf; der Weg endet an einem tollen Shop, wo man allerlei hässliche Souvenirs kaufen kann. Insgesamt eher keine Empfehlung.",
      en: "I found it a bit disappointing last time. Quick to reach by train, but then a fairly expensive bus up. You can't get all the way to the top and the loop trail is closed. Nice view over the gulf; the path ends at a shop full of gloriously ugly souvenirs. Overall: rather not a recommendation.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Vesuvio%20Gran%20Cono&query_place_id=ChIJoZP2jailOxMRz4SXRTU1BR8",
    lat: 40.82836, lng: 14.42665,
  },
  {
    name: "Spiaggia della Gaiola",
    cat: "trips", area: "Posillipo", todo: true,
    desc: {
      de: "Wurde mir von einem neapolitanischen Kollegen empfohlen. War aber selbst noch nicht dort. (Meeresschutzgebiet — Eintritt frei, an vollen Tagen muss man online einen Slot buchen.)",
      en: "Recommended to me by a Neapolitan colleague — haven't been myself yet. Protected marine reserve; entry is free but you have to book a slot online on busy days.",
    },
    maps: "https://maps.app.goo.gl/NvF1FvKrNLbvXAoX6",
    lat: 40.79263, lng: 14.18766,
  },
  {
    name: "Baia delle Rocce Verdi",
    cat: "trips", area: "Posillipo",
    desc: {
      de: "Klassischer neapolitanischer Beach Club auf den Posillipo-Felsen — Pools, Meerzugang und Blick Richtung Capri.",
      en: "Classic Neapolitan beach club on the Posillipo rocks — pools, sea access and a view towards Capri.",
    },
    maps: "https://maps.app.goo.gl/4yHvpDKLRquFYpqK7",
    lat: 40.79751, lng: 14.19881,
  },
];
