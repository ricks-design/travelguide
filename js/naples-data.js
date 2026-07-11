/* ============================================================
   NAPLES — place data
   Edit this file to add/change places. Fields:
   name     display name
   cat      "pizza" | "street" | "coffee" | "bars" | "sights" | "trips"
   area     neighbourhood label (free text)
   top      true = ★ top pick
   todo     true = "on my list, not been yet"
   closed   true = currently closed (card stays, marked)
   desc     your notes (English)
   maps     Google Maps link
   lat/lng  coordinates for the map (omit to hide from map)
   img      optional: filename inside /images, e.g. "masardona.jpg"
   ============================================================ */

const CITY = {
  name: "Napoli",
  center: [40.8455, 14.2515],
  zoom: 13,
  updated: "July 2026",
};

const PLACES = [
  /* ---------------- SIGHTS & CULTURE ---------------- */
  {
    name: "Toledo Metro Station",
    cat: "sights", area: "Toledo",
    desc: "Beautifully done with thousands of tiny blue mosaic tiles — repeatedly voted one of the most beautiful metro stations in Europe. Great photo spot.",
    maps: "https://www.google.com/maps/search/?api=1&query=Toledo%20Metro%20Station%20Naples&query_place_id=ChIJOSg_CVAIOxMRmk2pdbC2dPQ",
    lat: 40.84249, lng: 14.24888,
  },
  {
    name: "Murales Maradona",
    cat: "sights", area: "Quartieri Spagnoli",
    desc: "If you want to understand Naples, you have to come here. Best at night when the tourists are gone. The whole square is blue and white — pure Maradona cult.",
    maps: "https://maps.app.goo.gl/7W9zAFevUL5WEqQD9",
    lat: 40.84144, lng: 14.24525,
  },
  {
    name: "Quartieri Spagnoli",
    cat: "sights", area: "Quartieri Spagnoli",
    desc: "Worth it day and night — this is simply where life happens. Somewhere between poverty, tourists, mafia, spritz, Madonna statues, cardboard cut-outs of footballers and freshly washed laundry.",
    maps: "https://www.google.com/maps/search/?api=1&query=Quartieri+Spagnoli+Napoli",
    lat: 40.8409, lng: 14.2440,
  },
  {
    name: "Duomo — Cathedral of Santa Maria Assunta",
    cat: "sights", area: "Centro Storico",
    desc: "The city's main church, inseparable from its history. Ancient mosaics in the side chapel and, on the other side, the blood of San Gennaro, the city's patron saint.",
    maps: "https://maps.app.goo.gl/ZKHXu2MR5zBkzLpB8",
    lat: 40.85254, lng: 14.25932,
  },
  {
    name: "Museo Archeologico Nazionale (MANN)",
    cat: "sights", area: "Centro Storico",
    desc: "The museum Naples is famous for — an enormous amount from Pompeii and beyond. For me: far too expensive, poorly curated, no audio guide. Go if antiquity is your thing, manage expectations otherwise.",
    maps: "https://maps.google.com?q=Arch%C3%A4ologisches%20Nationalmuseum%20Neapel,%20Piazza%20Museo,%2018/19,%2080135%20Napoli%20NA,%20Italien&ftid=0x133b0867e2c94023:0xb48ecf1589057c98",
    lat: 40.85360, lng: 14.25053,
  },
  {
    name: "Gallerie d'Italia",
    cat: "sights", area: "Toledo",
    desc: "I really liked this one. Beautifully presented, with a focus on Italian Baroque. One of the three Caravaggios in Naples, plus other exciting artists.",
    maps: "https://maps.app.goo.gl/GrbeWHq1YqDriiWT7",
    lat: 40.84057, lng: 14.24872,
  },
  {
    name: "Teatro San Carlo",
    cat: "sights", area: "San Ferdinando",
    desc: "One of the oldest opera houses in the world. Artistically no longer what it once was, but absolutely worth seeing — and hearing. The programme is thin, but there are short guided tours.",
    maps: "https://maps.google.com?q=Teatro%20San%20Carlo,%20Via%20San%20Carlo,%2098,%2080132%20Napoli%20NA,%20Italien&ftid=0x133b085218e9d0d3:0xf4bc5fe47dfae739",
    lat: 40.83748, lng: 14.24964,
  },
  {
    name: "Chiostro Maiolicato (Santa Chiara)",
    cat: "sights", area: "Centro Storico",
    desc: "Wonderful cloister covered in majolica tiles, with a small audio tour.",
    maps: "https://maps.app.goo.gl/bDHFj45tu7bM2e328",
    lat: 40.84606, lng: 14.25329,
  },
  {
    name: "Pio Monte della Misericordia",
    cat: "sights", area: "Centro Storico", top: true,
    desc: "A must if you like Caravaggio! Fascinating history. One of his most beautiful paintings hangs at the centre of a hexagonal building, with a related painting in every corner. Incredible!",
    maps: "https://maps.app.goo.gl/jbLeCXHdSoTbZZrF7",
    lat: 40.85196, lng: 14.26036,
  },
  {
    name: "Castel Sant'Elmo",
    cat: "sights", area: "Vomero", top: true,
    desc: "Worth it. Best to take the stairs on the eastern side up or down. The view from outside the fortress isn't bad either, but the entrance fee still pays off — fantastic panorama over the whole gulf.",
    maps: "https://maps.app.goo.gl/ZKbpDC87Peaen6n79",
    lat: 40.84445, lng: 14.23890,
  },
  {
    name: "Galleria Umberto I",
    cat: "sights", area: "San Ferdinando",
    desc: "A bit like Milan. Cool architecture, nice to walk through, though the shops don't offer much. Beautifully restored over the years.",
    maps: "https://maps.app.goo.gl/RiAhQRmrr95n5Kbq8",
    lat: 40.83853, lng: 14.24947,
  },
  {
    name: "Certosa di San Martino",
    cat: "sights", area: "Vomero",
    desc: "One ticket covers museum, cloister, monastery and viewpoint. The view from Castel Sant'Elmo next door is probably better.",
    maps: "https://maps.app.goo.gl/mbBGCVFkQeFJgut99",
    lat: 40.84360, lng: 14.24077,
  },
  {
    name: "Sant'Anna dei Lombardi",
    cat: "sights", area: "Centro Storico", top: true,
    desc: "The famous Vasari sacristy is mind-blowing! If you ask, the people in the church will also take you down into the crypt.",
    maps: "https://maps.app.goo.gl/qFpy1Bepbmp1CEmNA",
    lat: 40.84485, lng: 14.25051,
  },
  {
    name: "Napoli Sotterranea",
    cat: "sights", area: "Centro Storico",
    desc: "One of several ways to explore underground Naples. Genuinely interesting — narrow passages, underground cisterns, partly used as air-raid shelters in the war. Overall I found the Catacombs of San Gennaro more worthwhile.",
    maps: "https://maps.app.goo.gl/nwuS5xqLPRoCMYpaA",
    lat: 40.85126, lng: 14.25672,
  },
  {
    name: "Catacombs of San Gennaro",
    cat: "sights", area: "Sanità / Capodimonte",
    desc: "Really fascinating, great guided tour. Ticket also covers San Gaudioso.",
    maps: "https://maps.app.goo.gl/pY2cvz2U1yBLmneY6",
    lat: 40.86506, lng: 14.24743,
  },
  {
    name: "Catacombs of San Gaudioso",
    cat: "sights", area: "Sanità", todo: true,
    desc: "Haven't been myself yet, but it's supposed to be very cool — and it comes combined with the San Gennaro ticket.",
    maps: "https://maps.google.com?q=Catacombe%20di%20San%20Gaudioso,%20Via%20Sanit%C3%A0,%20123,%2080136%20Napoli%20NA,%20Italien&ftid=0x133b0865b7f94de7:0x4494b7d83d1bd73e",
    lat: 40.85947, lng: 14.24853,
  },
  {
    name: "San Lorenzo Maggiore",
    cat: "sights", area: "Centro Storico", todo: true,
    desc: "On my list for next time — supposed to be great, with Roman excavations underneath the church.",
    maps: "https://maps.app.goo.gl/S3oii6AUUQtwH1Eq8",
    lat: 40.85068, lng: 14.25757,
  },
  {
    name: "Real Bosco di Capodimonte",
    cat: "sights", area: "Capodimonte",
    desc: "The most famous gallery in Naples — and extremely badly curated and presented. When I was there, everything I wanted to see (Caravaggio, Gentileschi …) was on loan in Paris. Once those are back it might be worth it. The only Botticelli in Naples hangs hidden in a corner. The park, though, is lovely for a quiet walk.",
    maps: "https://maps.google.com?q=Real%20Bosco%20di%20Capodimonte,%20Via%20Miano,%202,%2080131%20Napoli%20NA,%20Italien&ftid=0x133b087a487a37e5:0x23a48496e5b732fc",
    lat: 40.86698, lng: 14.25066,
  },

  /* ---------------- PIZZA ---------------- */
  {
    name: "Vincenzo Capuano",
    cat: "pizza", area: "Chiaia (Piazza Vittoria)", top: true,
    desc: "For me, the best pizza in town. Not classic Neapolitan but \u201ccontemporary\u201d. Also recommended in Berlin, by the way. Since 2024 there's a second branch on Piazza Trieste e Trento with a lovely winter garden right on the busy square.",
    maps: "https://maps.app.goo.gl/waX48f9aqFMw3SSAA",
    maps2: { label: "Branch Piazza Trieste e Trento", url: "https://maps.app.goo.gl/UWRKqsNNtQQAiaPN8" },
    lat: 40.83219, lng: 14.24178,
  },
  {
    name: "50 Kalò",
    cat: "pizza", area: "Mergellina",
    desc: "Famous for a reason. A bit out of the centre but open late into the night and worth the trip! Since 2024 you can take the new metro L6 from Municipio/Chiaia in a few minutes — note it only runs until about 21:00 on weekdays and until early afternoon at weekends (as of 2026).",
    maps: "https://maps.app.goo.gl/9cEmLqPxEs1JwZAp9",
    lat: 40.82837, lng: 14.22026,
  },
  {
    name: "Diego Vitagliano",
    cat: "pizza", area: "Bagnoli",
    desc: "The trip out is worth it for one of the best pizzerias in Naples. Great primi and dolci too. Ambience is fine — but very loud.",
    maps: "https://maps.app.goo.gl/cXbnDTC1RF5K5vE87",
    lat: 40.81710, lng: 14.17569,
  },
  {
    name: "Gino e Toto Sorbillo",
    cat: "pizza", area: "Centro Storico",
    desc: "One of the most famous in Naples — and genuinely good. Often a queue, but it moves fast with the waiting list. Have one or two Nastro Azzurro across the street while you wait.",
    maps: "https://maps.app.goo.gl/Af6sy1qRPXaRexdS7",
    lat: 40.85043, lng: 14.25536,
  },
  {
    name: "L'Antica Pizzeria da Michele",
    cat: "pizza", area: "Forcella",
    desc: "Famous from the movie — and the pizza really is superb. The queue hype is completely overblown. The nice part: you can watch the pizzaioli from outside, they practically work on the street because it's so cramped. Either go right at opening time or take away. Margherita or marinara only.",
    maps: "https://maps.app.goo.gl/PEmaEDg1EQm4bJdLA",
    lat: 40.84976, lng: 14.26330,
  },
  {
    name: "Starita",
    cat: "pizza", area: "Materdei",
    desc: "Famous and busy. Super fast service. It's not cosy — but eating in Naples rarely is.",
    maps: "https://maps.app.goo.gl/5UGhkWC1q5U6S6QQA",
    lat: 40.85593, lng: 14.24642,
  },
  {
    name: "Pizzeria Da Attilio",
    cat: "pizza", area: "Pignasecca",
    desc: "Super central. The speciality here is the ricotta-stuffed crust.",
    maps: "https://maps.app.goo.gl/R3ho15uW6zbnmAbM9",
    lat: 40.84523, lng: 14.24835,
  },
  {
    name: "La Notizia 53",
    cat: "pizza", area: "Posillipo/Fuorigrotta",
    desc: "Two shops right next to each other. Extremely famous and highly rated, but hard to reach — and my last visit in 2025 wasn't hugely worth it either.",
    maps: "https://maps.app.goo.gl/PSg2cN6h5QxVnf9P6",
    lat: 40.83566, lng: 14.20996,
  },
  {
    name: "Bro — Ciro & Antonio Tutino",
    cat: "pizza", area: "Piazza Mercato",
    desc: "Also well known and highly rated.",
    maps: "https://maps.app.goo.gl/tp8QqrFQ6JtzrK326",
    lat: 40.84725, lng: 14.26696,
  },
  {
    name: "Acunzo Pizza",
    cat: "pizza", area: "Vomero", todo: true,
    desc: "Haven't made it yet — but it's on my list for the Vomero.",
    maps: "https://maps.app.goo.gl/nmCbBMEaW3UCQVox9",
    lat: 40.84280, lng: 14.23228,
  },
  {
    name: "Gorizia 1916",
    cat: "pizza", area: "Vomero",
    desc: "Another very well-known classic in the Vomero.",
    maps: "https://maps.app.goo.gl/pLvCQgfLaGbv7pGK7",
    lat: 40.84336, lng: 14.23171,
  },

  /* ---------------- STREET FOOD, FRIED & SWEETS ---------------- */
  {
    name: "La Masardona",
    cat: "street", area: "Near Napoli Centrale", top: true,
    desc: "For me, the best friggitoria in Naples. Best plan: straight out of the station and over here. Nastro Azzurro plus something fried, eaten on the street. Fantastic — and full of locals.",
    maps: "https://maps.app.goo.gl/Y2Me6mzcot4W5wiZA",
    lat: 40.84854, lng: 14.27353,
  },
  {
    name: "1947 Pizza Fritta",
    cat: "street", area: "Forcella",
    desc: "Extremely good pizza fritta in a very convenient location. Highly recommended!",
    maps: "https://maps.app.goo.gl/tWivoNSTHvLt951E6",
    lat: 40.85001, lng: 14.26347,
  },
  {
    name: "Pizzeria De' Figliole",
    cat: "street", area: "Forcella",
    desc: "Fantastic pizza fritta in a women-run shop. More of a bistro feel, but original and perfect pizza fritta.",
    maps: "https://maps.app.goo.gl/joxB6ngnMYJ5vmWf7",
    lat: 40.85122, lng: 14.26341,
  },
  {
    name: "Pizza Fritta da Zia Esterina (Sorbillo)",
    cat: "street", area: "Piazza Trieste e Trento",
    desc: "Really good pizza fritta!",
    maps: "https://maps.app.goo.gl/KGdKUhMRiJSNrPpg9",
    lat: 40.83749, lng: 14.24830,
  },
  {
    name: "Novità Street Food",
    cat: "street", area: "Forcella",
    desc: "Great for a snack or aperitivo. Also good to go.",
    maps: "https://maps.app.goo.gl/m18T2gcSsVLYq18p8",
    lat: 40.84945, lng: 14.26372,
  },
  {
    name: "Sfogliatelle Attanasio",
    cat: "street", area: "Near Napoli Centrale", top: true,
    desc: "Wow! The best sfogliatelle, and cheap. These things are unreal. Right by the station — usually only a short wait.",
    maps: "https://maps.app.goo.gl/mDWDqsk1T1vfewou7",
    lat: 40.85321, lng: 14.26898,
  },
  {
    name: "Mary's Sfogliatella",
    cat: "street", area: "Galleria Umberto I",
    desc: "Really good! Strictly to go.",
    maps: "https://maps.google.com?q=Mary's%20Sfogliatella,%20Galleria%20Umberto%20I,%2066,%2080132%20Napoli%20NA,%20Italien&ftid=0x133b085ae31d8a09:0xc42201ee038bde1",
    lat: 40.83844, lng: 14.24870,
  },
  {
    name: "Gay-Odin Gelato",
    cat: "street", area: "Multiple locations", top: true,
    desc: "Chocolate factory since 1894 with shops all over the city. Superb gelato — fondente and pistacchio salato are the move.",
    maps: "https://maps.google.com?q=Gay-Odin%20via%20Benedetto%20Croce%20fabbrica%20di%20cioccolato%201894,%20Via%20Benedetto%20Croce,%2061,%2080134%20Napoli%20NA,%20Italien&ftid=0x133b0843796a0939:0x5fa5642c7d6b382e",
    lat: 40.84764, lng: 14.25314,
  },
  {
    name: "Pasticceria Poppella",
    cat: "street", area: "Sanità",
    desc: "Sanità institution — home of the fiocco di neve.",
    maps: "https://maps.app.goo.gl/9Uvny2jkA5QX5T668",
    lat: 40.85741, lng: 14.25344,
  },
  {
    name: "Vomero Fried Food",
    cat: "street", area: "Vomero",
    desc: "Small fried snacks for when you're strolling through the Vomero.",
    maps: "https://maps.google.com?q=Vomero%20Fried%20Food,%20Via%20Domenico%20Cimarosa,%2044,%2080129%20Napoli%20NA,%20Italien&ftid=0x133b08fa32c2a9d1:0x22f61b25f56e8a0d",
    lat: 40.84281, lng: 14.23284,
  },
  {
    name: "Trattoria da Donato",
    cat: "street", area: "Near Napoli Centrale",
    desc: "Recommended if you ever want something other than pizza (rarely the case). Local specialities, family-run since 1956.",
    maps: "https://maps.google.com?q=Antica%20Trattoria%20e%20Pizzeria%20da%20Donato,%20Via%20Silvio%20Spaventa,%2039/41,%2080142%20Napoli%20NA,%20Italien&ftid=0x133b083df0eef2a9:0xe0ee0cb0da953819",
    lat: 40.85044, lng: 14.26938,
  },
  {
    name: "Chiosco Taralli Caldi",
    cat: "street", area: "Lungomare",
    desc: "Neon-lit kiosk by the sea. Grab a Nastro Azzurro and stroll along the promenade… (Tourist-pricing reports are piling up — agree the price before they open the bottle.)",
    maps: "https://maps.app.goo.gl/gHs6i91YKkXt3qMH8",
    lat: 40.83164, lng: 14.25115,
  },

  /* ---------------- COFFEE & CAFÉS ---------------- */
  {
    name: "Ventimetriquadri",
    cat: "coffee", area: "Vomero", top: true,
    desc: "Great little place. Specialty coffee, a small but excellent selection of natural wines, small snacks and genuinely lovely owners and staff. I always end up going several times.",
    maps: "https://maps.app.goo.gl/xvesBg6TU13JKDZi7",
    lat: 40.84543, lng: 14.23165,
  },
  {
    name: "The Florist",
    cat: "coffee", area: "Eastern Sanità",
    desc: "Sweet little café slightly off-centre. Combines well with a walk through the eastern Sanità. Lots of homemade products, their own honey and so on.",
    maps: "https://maps.app.goo.gl/ynhbAuEFurASV21C6",
    lat: 40.85995, lng: 14.26158,
  },
  {
    name: "Posca — Bar/Bakery/Bistrot",
    cat: "coffee", area: "Port'Alba",
    desc: "Bar, bakery and bistrot in one, right by Port'Alba. Solid all-day option.",
    maps: "https://maps.app.goo.gl/rUaqkseVxQ7TQ88Q6",
    lat: 40.84946, lng: 14.25094,
  },
  {
    name: "It's | caffè & bistrot",
    cat: "coffee", area: "Near Università",
    desc: "Modern coffee place with a bookshop. Outdoor seating too. Limited food menu.",
    maps: "https://maps.app.goo.gl/zv3RCcs9s4iB8jXi7",
    lat: 40.84436, lng: 14.25577,
  },

  /* ---------------- BARS & WINE ---------------- */
  {
    name: "Barrio Botanico — Vomero",
    cat: "bars", area: "Vomero",
    desc: "Really recommendable for cocktails and a rich aperitivo that can replace dinner. Nice seating inside and out. The original Municipio location (that wonderful yellow courtyard in Palazzo Fondi) has been closed for building renovation since January 2024, reopening date still unknown — the Vomero branch carries the torch.",
    maps: "https://maps.app.goo.gl/xf8nvV1tdjEawAvS7",
    lat: 40.84335, lng: 14.23005,
  },
  {
    name: "Enoteca Belledonne",
    cat: "bars", area: "Chiaia",
    desc: "Good spot with a lovely wine selection. Friendly owner who gives great advice.",
    maps: "https://maps.app.goo.gl/pp8bQbBtxWY3VAjy9",
    lat: 40.83515, lng: 14.23944,
  },
  {
    name: "L'Antiquario",
    cat: "bars", area: "Chiaia",
    desc: "The dressier cocktail bar — speakeasy atmosphere, serious drinks.",
    maps: "https://maps.app.goo.gl/pKdQXwkvjBg3bssx5",
    lat: 40.83294, lng: 14.24223,
  },
  {
    name: "Archeobar — Negroneria Napoletana",
    cat: "bars", area: "Centro Storico",
    desc: "Lovely spot for Negronis in every conceivable form.",
    maps: "https://maps.app.goo.gl/5bJk1WmrPVQBJRBU8",
    lat: 40.84717, lng: 14.25584,
  },
  {
    name: "Antica Cantina Sepe",
    cat: "bars", area: "Sanità",
    desc: "An institution for easy-drinking local wines. A great corner in general — you sit relaxed by the street and just watch the neighbourhood go by.",
    maps: "https://maps.app.goo.gl/nteXqVK4ARnFPPZX8",
    lat: 40.85680, lng: 14.25500,
  },
  {
    name: "Peppe Masiello",
    cat: "bars", area: "Quartieri Spagnoli",
    desc: "Fascinating — somewhere between Erasmus and mafia vibes. Occasionally men with face tattoos and too many scars, where you're not quite sure what happens next. Just sit down and people-watch. Served with terrible burnt bread with mayo. The perfect spritz to end a Quartieri walk.",
    maps: "https://maps.app.goo.gl/SxVB1bFnMDAKrors7",
    lat: 40.84224, lng: 14.24738,
  },
  {
    name: "HBTOO",
    cat: "bars", area: "Coroglio/Bagnoli", todo: true,
    desc: "Club that was recommended to me — haven't been yet. Big venue with a view of Nisida.",
    maps: "https://maps.app.goo.gl/736aUzhBPzhiKFRi6",
    lat: 40.80110, lng: 14.17525,
  },

  /* ---------------- DAY TRIPS ---------------- */
  {
    name: "Pepe in Grani (Caiazzo)",
    cat: "trips", area: "Caiazzo, ~1.5 h", top: true,
    desc: "If you fancy a little excursion, this is very much worth it. Famous from Netflix's \u201cChef's Table\u201d. Book ahead, no exceptions! The creations are extraordinary — starters and desserts are insane. Service was mediocre. The village is tiny and sleepy and basically lives off the restaurant. We stayed overnight back then; next time I'd eat early and head back. Train: EAV line Napoli–Piedimonte Matese from the upper level of Napoli Centrale (ticket office hidden through a side entrance on the right). No evening train back from Caiazzo — take Mimo, the restaurant's personal driver, ~20 min to Caserta for €40, then the €4 train to Naples runs until ~22:35. (Logistics as of my last visit — double-check.)",
    maps: "https://www.google.com/maps/search/?api=1&query=Pepe%20in%20Grani%20Caiazzo&query_place_id=ChIJO9FwdeNZOhMRKp1UBErRQXs",
    lat: 41.17718, lng: 14.36601,
  },
  {
    name: "Procida",
    cat: "trips", area: "Island, short ferry ride",
    desc: "Absolutely beautiful if you want to escape Naples for a day. Quick trip by ferry.",
    maps: "https://www.google.com/maps/search/?api=1&query=Marina%20Grande%20Procida",
    lat: 40.76545, lng: 14.03023,
  },
  {
    name: "Capri — East-side hike",
    cat: "trips", area: "Island",
    desc: "A lovely excursion too. In low season sadly nothing was open at all; in high season it's certainly mobbed. The hike in the east of the island (Belvedere di Tragara → Arco Naturale) is gorgeous.",
    maps: "https://maps.app.goo.gl/eBxsMMnpNxKkzFvz8",
    lat: 40.55047, lng: 14.25709,
  },
  {
    name: "Pompeii",
    cat: "trips", area: "Circumvesuviana",
    desc: "It's been a long while since I was there. It is cool, but it eats a full day — you have to decide whether that day is better spent in the city or out here.",
    maps: "https://www.google.com/maps/search/?api=1&query=Archaeological%20Park%20of%20Pompeii&query_place_id=ChIJg-rRh728OxMRNZtSjoBipHw",
    lat: 40.75122, lng: 14.48868,
  },
  {
    name: "Herculaneum (Ercolano)",
    cat: "trips", area: "Circumvesuviana", todo: true,
    desc: "Possibly the more relaxed alternative to Pompeii. We didn't manage it back then because it closes quite early.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parco%20Archeologico%20di%20Ercolano&query_place_id=ChIJ17d1Me-mOxMRe4JncVKqWGI",
    lat: 40.80593, lng: 14.34739,
  },
  {
    name: "Vesuvius",
    cat: "trips", area: "Gran Cono",
    desc: "I found it a bit disappointing last time. Quick to reach by train, but then a fairly expensive bus up. You can't get all the way to the top and the loop trail is closed. Nice view over the gulf; the path ends at a shop full of gloriously ugly souvenirs. Overall: rather not a recommendation.",
    maps: "https://www.google.com/maps/search/?api=1&query=Vesuvio%20Gran%20Cono&query_place_id=ChIJoZP2jailOxMRz4SXRTU1BR8",
    lat: 40.82836, lng: 14.42665,
  },
  {
    name: "Spiaggia della Gaiola",
    cat: "trips", area: "Posillipo", todo: true,
    desc: "Recommended to me by a Neapolitan colleague — haven't been myself yet. Protected marine reserve; entry is free but you have to book a slot online on busy days.",
    maps: "https://maps.app.goo.gl/NvF1FvKrNLbvXAoX6",
    lat: 40.79263, lng: 14.18766,
  },
  {
    name: "Baia delle Rocce Verdi",
    cat: "trips", area: "Posillipo",
    desc: "Classic Neapolitan beach club on the Posillipo rocks — pools, sea access and a view towards Capri.",
    maps: "https://maps.app.goo.gl/4yHvpDKLRquFYpqK7",
    lat: 40.79751, lng: 14.19881,
  },
];
