/* ============================================================
   ROM — Ortsdaten (zweisprachig)
   Struktur wie naples-data.js / london-data.js.
   cat: "food" | "drinks" | "sweet" | "art" | "sights"
   Quelle: eigene Notizen (Stand Okt 2024), Fakten und Preise
   im August 2026 gegengeprüft.
   ============================================================ */

const CITY = {
  name: { de: "Rom", en: "Rome" },
  center: [41.8992, 12.4768],
  zoom: 13,
  updated: { de: "August 2026", en: "August 2026" },
};

const CATS = {
  food:   { label: { de: "Essen", en: "Food" }, color: "var(--c-food)", hex: "#e0703f" },
  drinks: { label: { de: "Wein & Aperitivo", en: "Wine & aperitivo" }, color: "var(--c-drinks)", hex: "#b5546b" },
  sweet:  { label: { de: "Kaffee & Gelato", en: "Coffee & gelato" }, color: "var(--c-sweet)", hex: "#d8c07a" },
  art:    { label: { de: "Kunst", en: "Art" }, color: "var(--c-art)", hex: "#7fa8d9" },
  sights: { label: { de: "Sehenswürdigkeiten", en: "Sights" }, color: "var(--c-sights)", hex: "#7fcf9b" },
};

const PLACES = [
  /* ---------------- ESSEN ---------------- */
  {
    name: "Supplizio",
    cat: "food", area: "Via dei Banchi Vecchi", top: true,
    desc: {
      de: "Die besten Supplì der Stadt. Kleiner Laden zwischen Campo de' Fiori und Ponte Sisto, immer gut besucht, wenige Sitzplätze. Klassisch mit Ragù, dazu wechselnde Varianten und Frittiertes. Beim Klassiker bleiben lohnt sich.",
      en: "The best supplì in the city. Small place between Campo de' Fiori and Ponte Sisto, always busy, few seats. Classic with ragù plus rotating variants and other fried things. Worth sticking to the classic.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Supplizio%20Roma&query_place_id=ChIJ0expikRgLxMRKURtjxS0dDc",
    lat: 41.897487, lng: 12.467911,
  },
  {
    name: "Antica Friggitoria La Masardona",
    cat: "food", area: "Piazza dell'Oro",
    desc: {
      de: "Der römische Ableger der Neapolitaner Institution. In Rom eher Restaurant als Frittiererei. Das Frittierte, allen voran die Pizza fritta, ist sehr gut; die Holzofen-Pizza war beim letzten Besuch nur mittelmäßig. Montags geschlossen, sonst mittags und abends geöffnet.",
      en: "The Roman offshoot of the Neapolitan institution. In Rome it works more as a restaurant than a fry shop. The fried food, above all the pizza fritta, is very good; the wood-oven pizza was only average last time. Closed Mondays, otherwise open for lunch and dinner.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Antica%20Friggitoria%20La%20Masardona%20Roma&query_place_id=ChIJ3cJupzVhLxMRNw_0H0Fw9hU",
    lat: 41.899938, lng: 12.464962,
  },
  {
    name: "Pizzarium & Panificio Bonci",
    cat: "food", area: "Prati / Trionfale",
    desc: {
      de: "Gabriele Boncis Pizza al taglio, seit Jahren ganz oben in den italienischen Führern. Sehr bekannt, entsprechend voll, mit Nummernsystem und Wartezeiten, dazu nicht billig — die Qualität rechtfertigt es. Kaum Sitzplätze. Zehn Gehminuten entfernt liegt das Panificio in der Via Trionfale: dieselbe Handschrift, dazu Brot, Maritozzi und ein größeres Mittagsangebot. Gut als Frühstück vor dem Vatikan.",
      en: "Gabriele Bonci's pizza al taglio, for years at the top of the Italian guides. Very well known and correspondingly busy, with a ticket system and waiting times, and not cheap — the quality justifies it. Barely any seating. Ten minutes' walk away is the Panificio on Via Trionfale: same hand, plus bread, maritozzi and a larger lunch offering. Good breakfast before the Vatican.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Bonci%20Pizzarium&query_place_id=ChIJr76feHtgLxMRSpUk8Ed4h24",
    maps2: { label: { de: "Panificio Bonci", en: "Panificio Bonci" }, url: "https://www.google.com/maps/search/?api=1&query=Panificio%20Bonci&query_place_id=ChIJP-r63olgLxMRW4D2YwU-63k" },
    lat: 41.906676, lng: 12.446671,
  },
  {
    name: "50 Kalò di Ciro Salvo",
    cat: "food", area: "Via Flavia / Nähe Termini", top: true,
    desc: {
      de: "Der römische Ableger einer der besten Pizzerien Neapels, hoch hydrierter, lang gereifter Teig. Täglich mittags und abends geöffnet, am Wochenende ohne Reservierung mit Wartezeit. Steht bei Gambero Rosso in den Tre Spicchi. Die Supplì sind ebenfalls gut.",
      en: "The Roman offshoot of one of Naples' best pizzerias, highly hydrated, long-fermented dough. Open daily for lunch and dinner; at weekends expect a wait without a booking. Holds Tre Spicchi in the Gambero Rosso guide. The supplì are good too.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=50%20Kal%C3%B2%20di%20Ciro%20Salvo%20Roma&query_place_id=ChIJm-izlfFhLxMRPLKypi5mjjg",
    maps2: { label: { de: "→ 50 Kalò in Neapel", en: "→ 50 Kalò in Naples" }, url: "naples.html#place=50-kal" },
    lat: 41.906016, lng: 12.495745,
  },
  {
    name: "Pinsere",
    cat: "food", area: "Via Flavia", top: true,
    desc: {
      de: "Pinsa zum Mitnehmen, ovale Fladen mit knuspriger Kruste, wechselnde Beläge. Günstig, schnell, ein paar Sitzplätze. Schließt früh — als Mittagessen einplanen, nicht als Abendessen. Zwei Minuten von 50 Kalò entfernt.",
      en: "Pinsa to take away, oval flatbreads with a crisp crust and rotating toppings. Cheap, fast, a few seats. Closes early — plan it as lunch, not dinner. Two minutes from 50 Kalò.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Pinsere%20Roma&query_place_id=ChIJO3MwNghhLxMRmLw_2k6zhJU",
    lat: 41.907616, lng: 12.497777,
  },
  {
    name: "Trattoria da Enzo al 29",
    cat: "food", area: "Trastevere",
    desc: {
      de: "Römische Küche in einem sehr kleinen Raum in Trastevere. Keine Reservierung, dafür Schlange: eine halbe Stunde vor Öffnung anstellen, sonst wird es zweiter oder dritter Durchgang. Getränke kann man in der Schlange bestellen. Cacio e pepe, Rigatoni con la pajata, Burrata. Im August teils geschlossen — vorher prüfen.",
      en: "Roman cooking in a very small room in Trastevere. No reservations, so there's a queue: turn up half an hour before opening or you'll be in the second or third sitting. You can order drinks while queuing. Cacio e pepe, rigatoni con la pajata, burrata. Partly closed in August — check first.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Trattoria%20Da%20Enzo%20al%2029&query_place_id=ChIJfy613ThgLxMR-Kr1iDROgrU",
    lat: 41.888085, lng: 12.477855,
  },
  {
    name: "Saltimbocca",
    cat: "food", area: "Via di Tor Millina / Piazza Navona",
    desc: {
      de: "Restaurant in einer Seitengasse der Piazza Navona, also in einer Lage, in der man normalerweise nichts Gutes erwartet. Trotzdem solide römische Küche zu vernünftigen Preisen, große Portionen, durchgehend geöffnet. Coda alla vaccinara und Frittura sind die Stärken.",
      en: "Restaurant in a side street off Piazza Navona — a location where you'd normally expect nothing good. Solid Roman cooking at reasonable prices nonetheless, large portions, open all day. Coda alla vaccinara and the fried seafood are the strengths.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Saltimbocca%20ristorante%20Roma&query_place_id=ChIJL87HTUVgLxMRMJl5wXE4U5o",
    lat: 41.899242, lng: 12.471580,
  },
  {
    name: "Prosciutteria Cantina dei Papi",
    cat: "food", area: "Trastevere",
    desc: {
      de: "Schinken- und Käseplatten, von denen man tatsächlich satt wird, dazu eine ordentliche Weinauswahl. Kein Tischservice, klein, oft voll. Für Vegetarier ungeeignet. In der Via della Scala gibt es zwei Filialen wenige Meter auseinander.",
      en: "Ham and cheese boards you actually get full on, with a decent wine list. No table service, small, often full. Not a place for vegetarians. There are two branches a few metres apart on Via della Scala.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Prosciutteria%20Cantina%20dei%20Papi%20Trastevere&query_place_id=ChIJNXdFb0dgLxMRFkz0zcdGF4U",
    lat: 41.890668, lng: 12.468651,
  },
  {
    name: "Roscioli Caffè",
    cat: "food", area: "Piazza Benedetto Cairoli",
    desc: {
      de: "Café und Konditorei der Familie Roscioli, ein paar Schritte vom bekannteren Salumeria-Restaurant entfernt. An der Bar gut für Kaffee, Maritozzo und kleine Snacks; das Preisniveau ist für einen Stehkaffee hoch. Täglich ab 7 Uhr.",
      en: "The Roscioli family's café and pastry shop, a few steps from the better-known salumeria restaurant. Good at the bar for coffee, maritozzo and small snacks; pricey for a standing coffee. Daily from 7am.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Roscioli%20Caff%C3%A8%20Pasticceria&query_place_id=ChIJZ846zUhgLxMRzdyZ615Fc4Q",
    lat: 41.894146, lng: 12.474440,
  },

  /* ---------------- WEIN & APERITIVO ---------------- */
  {
    name: "Freni e Frizioni",
    cat: "drinks", area: "Trastevere",
    desc: {
      de: "Ehemalige Autowerkstatt, daher der Name. Umfangreicher Aperitivo mit Buffet, junges Publikum, Cocktails auf hohem Niveau. Die Terrasse ist inzwischen abgetrennt, die Party auf dem ganzen Platz davor gibt es nicht mehr — die Location hat dadurch verloren. Täglich ab 18:30.",
      en: "A former car repair shop, hence the name. Substantial aperitivo with a buffet, young crowd, seriously good cocktails. The terrace is now fenced off and the party across the whole square outside is gone — the place has lost something for it. Daily from 6:30pm.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Freni%20e%20Frizioni%20Roma&query_place_id=ChIJS0bh60dgLxMR5n3lh9HtPt8",
    lat: 41.891349, lng: 12.470756,
  },
  {
    name: "Bar del Pari",
    cat: "drinks", area: "Via XX Settembre",
    desc: {
      de: "Kleine, unaufgeregte Bar an der Via XX Settembre — nicht in Trastevere, sondern im Behördenviertel Richtung Porta Pia. Großes Peroni mit Chips und Oliven, große Panini-Auswahl. Sonntags geschlossen, unter der Woche schon ab 6 Uhr geöffnet. Tipp von Marc.",
      en: "Small, unfussy bar on Via XX Settembre — not in Trastevere but in the ministry district towards Porta Pia. Large Peroni with crisps and olives, a big choice of panini. Closed Sundays, open from 6am on weekdays. Marc's tip.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Bar%20del%20Pari%20Roma&query_place_id=ChIJwQpRdahhLxMR7Qm_5XFwkn0",
    lat: 41.905590, lng: 12.495438,
  },
  {
    name: "Cul de Sac",
    cat: "drinks", area: "Piazza di Pasquino",
    desc: {
      de: "Enge Weinkneipe an der Piazza di Pasquino, seit den Siebzigern. Sehr lange Weinkarte mit Erläuterungen, dazu Pâtés, Käse, Salumi und ein paar warme Gerichte. Durchgehend von mittags bis spät geöffnet. Draußen sitzt man direkt am Platz.",
      en: "Cramped wine bar on Piazza di Pasquino, going since the seventies. Very long wine list with annotations, plus pâtés, cheese, salumi and a few hot dishes. Open through from midday until late. Outside seating right on the square.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Cul%20de%20Sac%20Roma&query_place_id=ChIJH5aYZEVgLxMRgghKtKVE548",
    lat: 41.897723, lng: 12.472081,
  },
  {
    name: "L'Angolo Divino",
    cat: "drinks", area: "Via dei Balestrari", top: true,
    desc: {
      de: "Weinbar in einer Seitenstraße südlich des Campo de' Fiori. Große Karte, Preis-Leistung stimmt, und das Essen ist mehr als eine Beilage. Alter Holzausbau, ruhig, wenige Tische. Unter der Woche mittags und abends, am Wochenende durchgehend.",
      en: "Wine bar in a side street south of Campo de' Fiori. Big list, fair prices, and the food is more than an afterthought. Old wooden interior, quiet, few tables. Lunch and evening on weekdays, straight through at weekends.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=L%27Angolo%20Divino%20Enoteca%20Roma&query_place_id=ChIJc3z__kVgLxMRdvQSySCW5wg",
    lat: 41.894637, lng: 12.472163,
  },

  /* ---------------- KAFFEE & GELATO ---------------- */
  {
    name: "Come il Latte",
    cat: "sweet", area: "Via Silvio Spaventa", top: true,
    desc: {
      de: "Beste Eisdiele in Rom, mehrfach getestet. Schwerpunkt auf Milchsorten, dazu Schokoladenbrunnen zum Eintauchen der Waffel und Sahne auf Wunsch. Liegt nicht in Trastevere, sondern nördlich von Termini Richtung Porta Pia. Täglich 12–23 Uhr.",
      en: "The best gelateria in Rome, tested repeatedly. The focus is on milk-based flavours, with chocolate fountains for dipping the cone and cream on request. Not in Trastevere but north of Termini towards Porta Pia. Daily 12pm–11pm.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Come%20il%20Latte%20Roma&query_place_id=ChIJDzdqEAhhLxMRyXr0LrH7xHc",
    lat: 41.907095, lng: 12.496054,
  },
  {
    name: "Otaleg",
    cat: "sweet", area: "Trastevere",
    desc: {
      de: "„Gelato“ rückwärts. Marco Radicionis Laden in der Via di San Cosimato, mehrfach ausgezeichnet, viele ungewöhnliche und vegane Sorten. Serviert wird in Kugeln statt mit dem Spatel, was in Italien selten ist. Täglich 12–24 Uhr. Es gibt eine zweite Filiale nahe dem Vatikan.",
      en: "\"Gelato\" backwards. Marco Radicioni's shop on Via di San Cosimato, repeatedly awarded, with many unusual and vegan flavours. Served in scoops rather than with a spatula, which is rare in Italy. Daily 12pm–midnight. There is a second branch near the Vatican.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Otaleg%20Trastevere&query_place_id=ChIJ9Y5rI7KKJRMRs5I2u26nGM8",
    lat: 41.888125, lng: 12.470470,
  },
  {
    name: "Fiordiluna",
    cat: "sweet", area: "Trastevere",
    desc: {
      de: "Kleine Eisdiele in der Via della Lungaretta, seit 1993. Wenige Sorten, dafür sehr klare Fruchtsorbets und gute Nusssorten. Cannoli werden auf Bestellung gefüllt. Durchgehend von morgens bis Mitternacht.",
      en: "Small gelateria on Via della Lungaretta, going since 1993. Few flavours but very clean fruit sorbets and good nut ones. Cannoli filled to order. Open through from morning until midnight.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Fiordiluna%20Trastevere&query_place_id=ChIJzRMkAEhgLxMRNe0Dejg6zd8",
    lat: 41.889627, lng: 12.472587,
  },
  {
    name: "Gelateria Mastro Cono",
    cat: "sweet", area: "Via del Governo Vecchio",
    desc: {
      de: "Unscheinbarer Laden in der Via del Governo Vecchio, zwei Minuten von der Piazza Navona. Ordentliches Eis ohne Schlange in einer Gegend, in der das nicht selbstverständlich ist — als Zwischenstopp brauchbar, nicht als Ziel.",
      en: "Unremarkable shop on Via del Governo Vecchio, two minutes from Piazza Navona. Decent gelato without a queue in an area where that isn't a given — useful as a stop en route, not as a destination.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Gelateria%20Mastro%20Cono%20Piazza%20Navona&query_place_id=ChIJt1xr9jhhLxMRyY9Ugrs4djI",
    lat: 41.897965, lng: 12.471691,
  },
  {
    name: "Le Levain",
    cat: "sweet", area: "Trastevere",
    desc: {
      de: "Französische Bäckerei in einer ruhigen Seitenstraße in Trastevere. Guter Kaffee, sehr gute Croissants und Viennoiserie, salzige und süße Snacks, dazu eine kleine Mittagskarte. Schließt nachmittags. Als Frühstück vor Trastevere gut eingeplant.",
      en: "French bakery in a quiet Trastevere side street. Good coffee, very good croissants and viennoiserie, savoury and sweet snacks, plus a small lunch menu. Closes in the afternoon. Works well as breakfast before Trastevere.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Le%20Levain%20Roma&query_place_id=ChIJFcPuGjlgLxMRtPc88C14UdM",
    lat: 41.887143, lng: 12.468721,
  },
  {
    name: "Faro — Caffè Specialty",
    cat: "sweet", area: "Via Piave",
    desc: {
      de: "Specialty Coffee mit Filterauswahl und wechselnden Röstungen, dazu Frühstück und Sandwiches. Nicht günstig, für Tischbedienung kommt ein Euro dazu. Nördlich von Termini, in Laufweite von Come il Latte und 50 Kalò. Nachmittags geschlossen.",
      en: "Specialty coffee with a filter selection and rotating roasts, plus breakfast and sandwiches. Not cheap, and there's a one-euro charge for table service. North of Termini, walkable from Come il Latte and 50 Kalò. Closed in the afternoon.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Faro%20Caff%C3%A8%20Specialty%20Roma&query_place_id=ChIJO2OdIAlhLxMRV3acpzJo9ls",
    lat: 41.910151, lng: 12.498393,
  },

  /* ---------------- KUNST ---------------- */
  {
    name: "Galleria Borghese",
    cat: "art", area: "Villa Borghese", top: true,
    desc: {
      de: "Eine der bedeutendsten Sammlungen Europas auf zwei Etagen: die Bernini-Skulpturen, sechs Caravaggios, dazu Tizian und Raffael. Zeitfenster von zwei Stunden, maximal 180 Personen, Reservierung für alle Pflicht — auch für Freikarten. Intero 18 € inklusive 2 € Buchungsgebühr, Di–So 9–19 Uhr, montags zu. Restkontingente werden eine halbe Stunde nach Beginn jedes Turnus an der Kasse verkauft, verlassen sollte man sich darauf nicht. Nur kleine Taschen bis 21×15 cm, Rucksäcke müssen an die Garderobe.",
      en: "One of Europe's most significant collections across two floors: the Bernini sculptures, six Caravaggios, plus Titian and Raphael. Two-hour time slots, maximum 180 people, booking compulsory for everyone — including free tickets. Full price €18 including the €2 booking fee, Tue–Sun 9am–7pm, closed Mondays. Any remaining tickets go on sale at the desk half an hour after each slot starts, but don't count on it. Only small bags up to 21×15 cm; backpacks go to the cloakroom.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Galleria%20Borghese&query_place_id=ChIJq-bXVgRhLxMRv3vgOXaktBs",
    lat: 41.914210, lng: 12.492144,
  },
  {
    name: "San Luigi dei Francesi",
    cat: "art", area: "Nähe Piazza Navona", top: true,
    desc: {
      de: "Die französische Nationalkirche mit dem Matthäus-Zyklus von Caravaggio in der Contarelli-Kapelle: Berufung, Inspiration und Martyrium. Die Restaurierung der Seitenkapellen, die 2024 den Blick versperrte, ist abgeschlossen. Eintritt frei, Beleuchtung per Münzautomat. Mittags mehrere Stunden geschlossen.",
      en: "The French national church, with Caravaggio's Matthew cycle in the Contarelli Chapel: the calling, the inspiration and the martyrdom. The side-chapel restoration that blocked the view in 2024 is finished. Free entry; the lighting runs off a coin box. Closed for several hours around midday.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=San%20Luigi%20dei%20Francesi&query_place_id=ChIJLQGCLlBgLxMRuYQp8kv6syI",
    lat: 41.899610, lng: 12.474741,
  },
  {
    name: "Santa Maria del Popolo",
    cat: "art", area: "Piazza del Popolo",
    desc: {
      de: "Die zweijährige Restaurierung ist seit Dezember 2024 abgeschlossen, die Kirche wieder komplett zugänglich. In der Cerasi-Kapelle zwei Caravaggios — Kreuzigung Petri und Bekehrung Pauli — nebeneinander; die Chigi-Kapelle stammt von Raffael, ergänzt von Bernini. Eintritt frei, mehrere Zeitfenster pro Tag, sonntags nur nachmittags.",
      en: "The two-year restoration was completed in December 2024 and the church is fully accessible again. The Cerasi Chapel holds two Caravaggios side by side — the Crucifixion of Peter and the Conversion of Paul; the Chigi Chapel is Raphael's, later added to by Bernini. Free entry, several time windows per day, Sunday afternoons only.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Basilica%20di%20Santa%20Maria%20del%20Popolo&query_place_id=ChIJn8_twvhgLxMRrSlE7RYxCbg",
    lat: 41.911463, lng: 12.476243,
  },
  {
    name: "Sant'Agostino in Campo Marzio",
    cat: "art", area: "Nähe Piazza Navona",
    desc: {
      de: "Erste Kapelle links: Caravaggios „Madonna di Loreto“, die Pilgermadonna, deren knieende Pilger mit schmutzigen Fußsohlen zum Betrachter zeigen — der Grund, warum das Bild 1606 als Skandal galt. Weiter hinten ein Prophet Jesaja von Raffael. Eintritt frei, Beleuchtung 2 € in Münzen. Teils Restaurierungsarbeiten.",
      en: "First chapel on the left: Caravaggio's Madonna di Loreto, the pilgrims' Madonna, whose kneeling pilgrims turn their dirty soles towards the viewer — the reason the painting was a scandal in 1606. Further in, a prophet Isaiah by Raphael. Free entry; €2 in coins for the lighting. Some restoration work ongoing.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Basilica%20di%20Sant%27Agostino%20in%20Campo%20Marzio&query_place_id=ChIJWb-7VlBgLxMRiW_fYnwl1lc",
    lat: 41.900844, lng: 12.474263,
  },
  {
    name: "Santa Maria della Pace",
    cat: "art", area: "Nähe Piazza Navona",
    desc: {
      de: "Versteckt in den Gassen westlich der Piazza Navona, mit halbrunder Vorhalle von Pietro da Cortona. Innen über dem Eingang der Chigi-Kapelle die vier Sibyllen von Raffael. Anschließend der Bramante-Kreuzgang nebenan, der als Ausstellungsraum genutzt wird. Täglich 9:30–18 Uhr, Eintritt frei.",
      en: "Hidden in the lanes west of Piazza Navona, with a semicircular porch by Pietro da Cortona. Inside, above the entrance to the Chigi Chapel, Raphael's four Sibyls. Then the Bramante cloister next door, used as an exhibition space. Daily 9:30am–6pm, free entry.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Santa%20Maria%20della%20Pace%20Roma&query_place_id=ChIJVwUlsVpgLxMRPaJOt8e6icE",
    lat: 41.899791, lng: 12.471530,
  },
  {
    name: "Palazzo Barberini",
    cat: "art", area: "Quirinal",
    desc: {
      de: "Barockpalast von Maderno, Bernini und Borromini, heute Teil der Gallerie Nazionali d'Arte Antica. Caravaggios Judith, Holbeins Heinrich VIII., Raffaels Fornarina, dazu Pietro da Cortonas Deckenfresko im Salone. Kombiticket mit der Galleria Corsini 15 €, 20 Tage gültig. Di–So 10–19 Uhr, letzter Einlass 18 Uhr.",
      en: "Baroque palace by Maderno, Bernini and Borromini, now part of the Gallerie Nazionali d'Arte Antica. Caravaggio's Judith, Holbein's Henry VIII, Raphael's Fornarina, and Pietro da Cortona's ceiling fresco in the salone. Combined ticket with Galleria Corsini €15, valid 20 days. Tue–Sun 10am–7pm, last entry 6pm.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Palazzo%20Barberini%20Gallerie%20Nazionali&query_place_id=ChIJk7HQeqlhLxMRwIY3JsnfdjU",
    lat: 41.903358, lng: 12.489826,
  },
  {
    name: "Galleria Doria Pamphilj",
    cat: "art", area: "Via del Corso",
    desc: {
      de: "Privatpalast, noch immer im Familienbesitz, an der Via del Corso. Velázquez' Innozenz X. und Caravaggios Ruhe auf der Flucht nach Ägypten in einer barocken Spiegelgalerie. Der kostenlose Audioguide ist von einem Nachfahren der Familie gesprochen und deutlich besser als das übliche Museumsformat. Mittwochs geschlossen.",
      en: "A private palace, still family-owned, on Via del Corso. Velázquez's Innocent X and Caravaggio's Rest on the Flight into Egypt in a baroque mirrored gallery. The free audioguide is narrated by a descendant of the family and is considerably better than the usual museum format. Closed Wednesdays.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Galleria%20Doria%20Pamphilj&query_place_id=ChIJF0obe01gLxMR0JJHtlD0kMY",
    lat: 41.897978, lng: 12.481574,
  },
  {
    name: "Scuderie del Quirinale",
    cat: "art", area: "Via XXIV Maggio",
    desc: {
      de: "Ehemaliger päpstlicher Marstall, heute reiner Ausstellungsraum ohne feste Sammlung — geöffnet nur, wenn eine Ausstellung läuft. Die Kuratierung ist überdurchschnittlich, das Haus selbst sehenswert, und aus dem zweiten Stock sieht man die Peterskuppel. Programm vorher prüfen; Eintritt je nach Ausstellung, zuletzt 18 €.",
      en: "A former papal stable, now purely an exhibition space with no permanent collection — open only when a show is running. The curation is above average, the building itself worth seeing, and from the second floor you can see the dome of St Peter's. Check the programme first; admission varies by show, most recently €18.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Scuderie%20del%20Quirinale&query_place_id=ChIJqVSndq1hLxMR41tL3BYx9jM",
    lat: 41.898660, lng: 12.486116,
  },

  /* ---------------- SEHENSWÜRDIGKEITEN ---------------- */
  {
    name: "Kolosseum & Foro Romano",
    cat: "sights", area: "Piazza del Colosseo",
    desc: {
      de: "Architektonisch beeindruckend, aber extrem überfüllt und stark auf Fotostopps ausgelegt — es gibt in Rom lohnendere Ziele. Das Standardticket (18 €) gilt 24 Stunden und umfasst Kolosseum, Forum Romanum, Palatin und Kaiserforen; die Arena und die Untergeschosse kosten extra. Tickets sind personengebunden, der Verkauf startet 30 Tage vorher, ein Ausweis muss mit. Vorab über ticketing.colosseo.it buchen.",
      en: "Architecturally impressive but extremely crowded and heavily geared to photo stops — Rome has more rewarding destinations. The standard ticket (€18) is valid 24 hours and covers the Colosseum, Roman Forum, Palatine and Imperial Fora; the arena floor and the underground cost extra. Tickets are name-bound, sales open 30 days ahead, and you need ID. Book in advance via ticketing.colosseo.it.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Colosseo%20Roma&query_place_id=ChIJrRMgU7ZhLxMRxAOFkC7I8Sg",
    lat: 41.890210, lng: 12.492231,
  },
  {
    name: "Pantheon",
    cat: "sights", area: "Piazza della Rotonda",
    desc: {
      de: "Das am besten erhaltene Bauwerk der Antike, die unbewehrte Betonkuppel mit 43,3 m Durchmesser ist bis heute die größte ihrer Art. Seit 1. Juli 2026 kostet der Eintritt 7 € statt 5 €, für Einwohner Roms weiterhin frei. Online über museiitaliani buchen, dann geht man direkt hinein; Saltafila-Tickets gibt es nicht. Täglich 9–19 Uhr, letzter Einlass 18:30. Abends von außen gut beleuchtet.",
      en: "The best-preserved building of antiquity; the unreinforced concrete dome, 43.3 m across, is still the largest of its kind. Since 1 July 2026 admission is €7 rather than €5, still free for Rome residents. Book online via museiitaliani and you walk straight in; there are no skip-the-line tickets. Daily 9am–7pm, last entry 6:30pm. Well lit from outside in the evening.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Pantheon%20Roma&query_place_id=ChIJqUCGZ09gLxMRLM42IPpl0co",
    lat: 41.898611, lng: 12.476873,
  },
  {
    name: "Vatikanische Museen",
    cat: "sights", area: "Vatikan",
    desc: {
      de: "Unbedingt vorab buchen: 20 € plus 5 € Vorverkauf über museivaticani.va, Tickets kommen 60 Tage vorher in den Verkauf. Immer sehr voll, eine Führung lohnt trotzdem — sie endet allerdings vor der Sixtinischen Kapelle. Den Audioguide (8 €) am besten schon vor der Führung mitnehmen, dann hat man ihn für die Kapelle und die Pinakothek danach. Kopfhörer mit 3,5-mm-Klinke mitbringen. Sonntags geschlossen, außer am letzten Sonntag im Monat (dann gratis und entsprechend voll). Das Essen im Haus ist teuer und schlecht; Rucksäcke sind erlaubt, also selbst mitbringen.",
      en: "Book well ahead: €20 plus a €5 booking fee via museivaticani.va, with tickets released 60 days in advance. Always very busy, but a guided tour is still worth it — it ends before the Sistine Chapel, though. Pick up the audioguide (€8) before the tour, so you have it for the chapel and the Pinacoteca afterwards. Bring headphones with a 3.5 mm jack. Closed Sundays except the last Sunday of the month (free then, and correspondingly packed). The food inside is expensive and bad; backpacks are allowed, so bring your own.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Musei%20Vaticani&query_place_id=ChIJKcGbg2NgLxMRthZkUqDs4M8",
    lat: 41.906488, lng: 12.453641,
  },
  {
    name: "Petersdom & Kuppel",
    cat: "sights", area: "Vatikan", top: true,
    desc: {
      de: "Früh kommen: Die Basilika öffnet um 7 Uhr, die Kuppel um 7:30 — dann sind die Sicherheitskontrollen kurz und der Dom noch leer. Für die Kuppel gibt es zwei Wege: am Kiosk im Portikus vor Ort (10 € Treppe, 15 € Aufzug) oder vorab online über basilicasanpietro.va mit fester Einlasszeit und Audioguide, dafür teurer. Der Aufzug spart die einfachen 231 Stufen; die letzten 320 durch die enge Wendeltreppe bleiben in beiden Fällen. Nichts für Klaustrophobiker, der Ausblick lohnt es. Für Dom plus Kuppel eine bis eineinhalb Stunden einplanen.",
      en: "Come early: the basilica opens at 7am, the dome at 7:30 — security is quick then and the church is still empty. Two routes up the dome: the kiosk in the portico on the day (€10 stairs, €15 lift) or booking ahead online via basilicasanpietro.va with a fixed entry time and audioguide, which costs more. The lift saves the easy 231 steps; the last 320 up the narrowing spiral remain either way. Not for the claustrophobic, but the view repays it. Allow one to one and a half hours for church plus dome.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Basilica%20di%20San%20Pietro&query_place_id=ChIJWZsUt2FgLxMRg1KHzXfwS3I",
    lat: 41.902167, lng: 12.453937,
  },
  {
    name: "Engelsburg",
    cat: "sights", area: "Lungotevere Castello",
    desc: {
      de: "Hadrians Mausoleum, später Festung, Papstresidenz und Gefängnis. Innen wechselnde Ausstellungen in den päpstlichen Räumen, die Qualität schwankt stark, einen Audioguide gibt es nicht. Für das Gebotene nicht günstig. Der Grund hinzugehen ist die Dachterrasse mit Blick auf den Petersdom und über die Stadt. Tickets sind inzwischen personengebunden und sollten vorab gebucht werden. Montags geschlossen.",
      en: "Hadrian's mausoleum, later a fortress, papal residence and prison. Inside, changing exhibitions in the papal rooms, of very variable quality, and no audioguide. Not cheap for what it is. The reason to go is the roof terrace with its view of St Peter's and across the city. Tickets are now name-bound and should be booked in advance. Closed Mondays.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Castel%20Sant%27Angelo&query_place_id=ChIJ0aTnEYeKJRMRiUF95xwRbDY",
    lat: 41.903063, lng: 12.466276,
  },
  {
    name: "Via dei Fori Imperiali bei Nacht",
    cat: "sights", area: "Zwischen Piazza Venezia und Kolosseum", top: true,
    desc: {
      de: "Abends vom Monumento a Vittorio Emanuele II zum Kolosseum laufen. Die Kaiserforen links und rechts sind beleuchtet, tagsüber ist hier alles voll, nachts kaum jemand unterwegs. Kostet nichts, dauert etwa zwanzig Minuten und ist der beste Weg, das antike Rom zu sehen, ohne anzustehen.",
      en: "Walk from the Monumento a Vittorio Emanuele II down to the Colosseum in the evening. The Imperial Fora on either side are lit; by day this is packed, at night there's almost no one about. Costs nothing, takes about twenty minutes, and is the best way to see ancient Rome without queuing.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Via%20dei%20Fori%20Imperiali&query_place_id=ChIJT5yj8LNhLxMRx1c73-kM9EI",
    lat: 41.893245, lng: 12.487146,
  },
];
