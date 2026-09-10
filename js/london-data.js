/* ============================================================
   LONDON — place data (bilingual)
   Same structure as naples-data.js.
   cat: "sights" | "food" | "day" | "shop" | "night" | "trips"
   ============================================================ */

const CITY = {
  name: { de: "London", en: "London" },
  center: [51.5074, -0.1278],
  zoom: 11,
  updated: { de: "Juli 2026", en: "July 2026" },
};

const CATS = {
  sights: { label: { de: "Sehenswürdigkeiten", en: "Sights" }, color: "var(--c-sights)", hex: "#00a0e2" },
  food:   { label: { de: "Essen", en: "Food" }, color: "var(--c-food)", hex: "#f4a13c" },
  day:    { label: { de: "Tagsüber", en: "Daytime" }, color: "var(--c-day)", hex: "#ffd300" },
  shop:   { label: { de: "Shopping & Märkte", en: "Shopping & markets" }, color: "var(--c-shop)", hex: "#b48ee0" },
  night:  { label: { de: "Ausgehen", en: "Going out" }, color: "var(--c-night)", hex: "#e1251b" },
  trips:  { label: { de: "Aktiv & Ausflüge", en: "Active & day trips" }, color: "var(--c-trips)", hex: "#6bcf97" },
};

const PLACES = [
  /* ---------------- FOOD ---------------- */
  {
    name: "50 Kalò di Ciro Salvo",
    cat: "food", area: "Trafalgar Square / Northumberland Ave",
    desc: {
      de: "Der Londoner Ableger von Ciro Salvos neapolitanischer Pizzeria — dasselbe 50 Kalò, das in Neapel auf dieser Liste steht (dort in Mergellina). Hoch hydrierter, lang gereifter Teig, in Neapel 2014 eröffnet, London 2018. Marmorsäulen-Saal südlich vom Trafalgar Square, wenige Minuten von Charing Cross/Embankment. Täglich 12–23:30 Uhr (Fr/Sa bis 24 Uhr); am Wochenende vorher reservieren.",
      en: "The London outpost of Ciro Salvo's Neapolitan pizzeria — the same 50 Kalò that's on this list in Naples (there in Mergellina). Highly hydrated, long-fermented dough; opened in Naples in 2014, London in 2018. Marble-columned room just south of Trafalgar Square, a few minutes from Charing Cross/Embankment. Daily 12–11:30pm (Fri/Sat to midnight); book ahead at weekends.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=50%20Kal%C3%B2%20di%20Ciro%20Salvo%20London&query_place_id=ChIJ76-IInUFdkgR5bH-0ABH0Zo",
    maps2: { label: { de: "→ 50 Kalò in Neapel", en: "→ 50 Kalò in Naples" }, url: "naples.html#place=50-kal" },
    lat: 51.50713, lng: -0.12649,
  },
  {
    name: "Pieminister",
    cat: "food", area: "Borough Market",
    desc: {
      de: "Pie-Stand in der Markthalle. Die Standard-Sorte Steak and Ale (auf der Karte „Moo“) ist die beste — bei Spezialvarianten wie Moo & Blue geht der klare Fleischgeschmack etwas verloren.",
      en: "Pie stall inside the market hall. The standard Steak and Ale flavour (called \"Moo\" on the menu) is the best one — fancier variants like Moo & Blue muddy the clean beef flavour a bit.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Pieminister%20Borough%20Market&query_place_id=ChIJDVu0dlcDdkgRhM0egVyrGGc",
    lat: 51.50574, lng: -0.08995,
  },
  {
    name: "Rambutan",
    cat: "food", area: "Borough Market",
    desc: {
      de: "Sri-lankisches Restaurant von Cynthia Shanmugalingam, direkt am Rand von Borough Market. Feurige Currys über offenem Feuer, wechselnde Karte. Keine Reservierung nötig, aber mittags/abends oft voll.",
      en: "Sri Lankan restaurant by Cynthia Shanmugalingam, right on the edge of Borough Market. Fiery curries cooked over open fire, menu changes regularly. No reservation needed, but often packed at lunch and dinner.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Rambutan%20Borough%20Market&query_place_id=ChIJnZxnVJUDdkgRs7i5rhmIjwM",
    lat: 51.50556, lng: -0.09152,
  },
  {
    name: "Dishoom Covent Garden",
    cat: "food", area: "Covent Garden",
    desc: {
      de: "Bombay-Café-Konzept mit mehreren Filialen in London, dies die erste und ursprüngliche von 2010. Bombay-Frühstück, Black Daal, Biryani. Unbedingt vorher reservieren — ohne Reservierung sind 30+ Minuten Wartezeit normal.",
      en: "Bombay-café concept with several branches across London — this is the original, from 2010. Bombay breakfast, black daal, biryani. Book ahead; without a reservation, 30+ minute waits are normal.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Dishoom%20Covent%20Garden&query_place_id=ChIJxZXYx7cEdkgRdgAOZ6OHOJw",
    lat: 51.51252, lng: -0.12683,
  },
  {
    name: "Darjeeling Express",
    cat: "food", area: "Soho",
    desc: {
      de: "Von einem komplett weiblichen Küchenteam geführtes Restaurant von Asma Khan, bengalische/Hyderabadi-Hausmannskost. Zieht 2026 von Kingly Court (Carnaby Street) auf die Rupert Street in Soho um — Adresse vor dem Besuch checken.",
      en: "Restaurant run entirely by a female kitchen team, led by Asma Khan — Bengali and Hyderabadi home cooking. Moving in 2026 from Kingly Court (Carnaby Street) to Rupert Street in Soho — check the address before going.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Darjeeling%20Express%20Rupert%20Street&query_place_id=ChIJedBoD9UEdkgRnEfxjGeFIpY",
    lat: 51.51130, lng: -0.13280,
  },
  {
    name: "Roti King",
    cat: "food", area: "Euston",
    desc: {
      de: "Malaysischer Kellerimbiss direkt neben der Euston Station, seit Jahren Kultstatus. Roti Canai frisch vom Blech, dazu Beef Rendang oder Char Kway Teow. Kein Schnickschnack, oft Schlange, geht aber schnell.",
      en: "Malaysian basement spot right by Euston station, cult status for years. Roti canai fresh off the griddle, with beef rendang or char kway teow on the side. No frills, often a queue, but it moves fast.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Roti%20King%20Euston&query_place_id=ChIJtRRu9iQbdkgRqt8jDR1osYw",
    lat: 51.52910, lng: -0.13200,
  },
  {
    name: "BAPJO",
    cat: "food", area: "Waterloo / Lambeth North",
    desc: {
      de: "Kleines koreanisches Restaurant nahe Waterloo/Lambeth North. Bibimbap, koreanisches Fried Chicken, Stews. Sehr klein, keine eigene Toilette (das Pub ein paar Türen weiter hilft aus).",
      en: "Small Korean restaurant near Waterloo/Lambeth North. Bibimbap, Korean fried chicken, stews. Very small, no toilet of its own (the pub a few doors down covers that).",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=BAPJO%20Baylis%20Road&query_place_id=ChIJfZ842nMFdkgRBfolNpjxj3M",
    lat: 51.50037, lng: -0.11085,
  },
  {
    name: "Smoking Goat Shoreditch",
    cat: "food", area: "Shoreditch",
    desc: {
      de: "Thai-Grill mit Bangkok-Streetfood-Anspruch, gegrilltes und geräuchertes Fleisch im Fokus. Größerer zweiter Standort im ehemaligen Tea Building an der Shoreditch High Street. Für Gruppen ab 8 Personen gibt es nur das Feasting-Menü.",
      en: "Thai grill going for a Bangkok street-food feel, built around grilled and smoked meat. This is the bigger, second location, in the former Tea Building on Shoreditch High Street. Groups of 8+ only get the set feasting menu.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Smoking%20Goat%20Shoreditch&query_place_id=ChIJC_TBt7AcdkgRhkmL-r9VwRU",
    lat: 51.52422, lng: -0.07692,
  },

  /* ---------------- SIGHTS ---------------- */
  {
    name: "Westminster Abbey",
    cat: "sights", area: "Westminster",
    desc: {
      de: "Grabkirche der englischen Könige, seit 1066 Krönungsort. Als Kirche jederzeit kostenlos zugänglich — sonntags ist das sogar der einzige Weg hinein, da dann keine Besichtigung stattfindet. Für den Sonntagsgottesdienst mindestens 45 Minuten vorher am Great West Door anstellen (offiziell werden 20–30 Minuten empfohlen, in der Praxis lieber mehr Puffer einplanen); die Plätze sind begrenzt und gehen nach Ankunftsreihenfolge. Sightseeing-Ticket Mo–Sa, regulär rund 30 £.",
      en: "Burial church of England's monarchs, coronation site since 1066. Free to enter for worship at any time — on Sundays that's the only way in, since there's no sightseeing that day. For the Sunday service, queue at the Great West Door at least 45 minutes early (official guidance says 20–30 minutes, but more buffer doesn't hurt); seating is limited and first-come, first-served. Sightseeing tickets Mon–Sat, around £30.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Westminster%20Abbey&query_place_id=ChIJLzVDusQEdkgRelObBaL_jto",
    lat: 51.49937, lng: -0.12730,
  },
  {
    name: "Palace of Westminster",
    cat: "sights", area: "Westminster",
    desc: {
      de: "Regierungssitz mit Big Ben direkt an der Themse, gegenüber der Abbey. Von außen jederzeit zugänglich, allein der Spaziergang an der Fassade entlang der Themse lohnt sich. Für Führungen oder Tribünenplätze im Unter-/Oberhaus muss man sich vorher registrieren.",
      en: "Seat of government with Big Ben right on the Thames, opposite the Abbey. Free to view from outside at any time — the walk along the riverside facade alone is worth it. Guided tours or public gallery seats in the Commons/Lords need registering for in advance.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Palace%20of%20Westminster&query_place_id=ChIJmZuNDMQEdkgRfB9O9456eQc",
    lat: 51.49948, lng: -0.12481,
  },
  {
    name: "Leadenhall Market",
    cat: "sights", area: "City of London",
    desc: {
      de: "Überdachter viktorianischer Markt aus dem 19. Jahrhundert mitten in der City, aufwendig verzierte Eisenkonstruktion. Kein Muss zum Einkaufen — einfach hinsetzen, einen Kaffee trinken und nach oben schauen reicht.",
      en: "Covered Victorian market from the 19th century right in the City, elaborately decorated ironwork. No need to buy anything — just sit down with a coffee and look up at the architecture.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Leadenhall%20Market&query_place_id=ChIJURt2jFIDdkgRsxERfqYhtSo",
    lat: 51.51277, lng: -0.08353,
  },
  {
    name: "St Dunstan in the East",
    cat: "sights", area: "City of London",
    desc: {
      de: "Kirchenruine aus dem 12. Jahrhundert, im Blitz 1941 zerstört und seit 1971 als öffentlicher Garten begrünt. Efeu und Bäume wachsen durch die Fensteröffnungen — wirklich hübsch verwunschen. Kostenlos, täglich 8–19 Uhr, zwischen London Bridge und Tower of London.",
      en: "12th-century church ruin, gutted in the 1941 Blitz and turned into a public garden in 1971. Ivy and trees grow through the window openings — genuinely picturesque, half-wild. Free, daily 8am–7pm, between London Bridge and the Tower of London.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=St%20Dunstan%20in%20the%20East&query_place_id=ChIJbxkx_1EDdkgRLfU_tC9tPb0",
    lat: 51.50972, lng: -0.08246,
  },
  {
    name: "Wallace Collection",
    cat: "sights", area: "Marylebone",
    desc: {
      de: "Stadtpalais am Manchester Square mit der Sammlung der Familie Hertford: französisches Rokoko, italienischer Barock, eine der größten Waffen- und Rüstungssammlungen des Landes. Eintritt frei, täglich 10–17 Uhr. Café im überdachten Innenhof.",
      en: "Town house on Manchester Square holding the Hertford family collection: French Rococo, Italian Baroque and one of the country's largest arms and armour collections. Free entry, daily 10am–5pm. Café in the covered courtyard.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=The%20Wallace%20Collection&query_place_id=ChIJczuZfc0adkgRc8X-u3ZiHcE",
    lat: 51.51732, lng: -0.15309,
  },
  {
    name: "Tate Modern — Level 10",
    cat: "sights", area: "Bankside",
    desc: {
      de: "Die Aussichtsebene liegt im 10. Stock des Blavatnik Building (nicht im 8.), Zugang per Lift von Level 0–4. Eintritt frei, 10–17 Uhr. Blick auf St Paul's und die Themse. Nach einem Urteil des Supreme Court 2023 ist die Südseite gesperrt und Fotografieren Richtung der Nachbarwohnungen untersagt. Alternative mit Alkohol: Kitchen & Bar auf Level 6 im Natalie Bell Building.",
      en: "The viewing level is on floor 10 of the Blavatnik Building (not the 8th), reached by lift from levels 0–4. Free, 10am–5pm. Views over St Paul's and the Thames. Following a 2023 Supreme Court ruling the south side is closed off and photography towards the neighbouring flats is prohibited. Alternative with a drink: Kitchen & Bar on level 6 of the Natalie Bell Building.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Tate%20Modern&query_place_id=ChIJlRl2MakEdkgR55tr4CNv_B8",
    lat: 51.50760, lng: -0.09936,
  },
  {
    name: "Hampstead Heath & Kenwood House",
    cat: "sights", area: "Hampstead",
    desc: {
      de: "Weitläufige, bewusst ungepflegte Parklandschaft im Norden. Kenwood House am Nordrand: Eintritt frei (English Heritage), u. a. ein Rembrandt-Selbstporträt und Vermeers „Die Gitarrenspielerin“, täglich 10–17 Uhr. Aussicht vom Parliament Hill über die Skyline. Die Badeteiche sind ganzjährig geöffnet.",
      en: "Sprawling, deliberately unmanicured parkland in the north. Kenwood House on the northern edge: free entry (English Heritage), with a Rembrandt self-portrait and Vermeer's Guitar Player, daily 10am–5pm. Skyline view from Parliament Hill. The swimming ponds are open year-round.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Kenwood%20House&query_place_id=ChIJTZPtjmkadkgRzYTgxNoj3-Y",
    maps2: { label: { de: "Hampstead Heath", en: "Hampstead Heath" }, url: "https://www.google.com/maps/search/?api=1&query=Hampstead%20Heath&query_place_id=ChIJIzJDyggadkgROFAV19Ti070" },
    lat: 51.57139, lng: -0.16745,
  },
  {
    name: "Regent's Canal & Primrose Hill",
    cat: "sights", area: "Camden / Primrose Hill",
    desc: {
      de: "Treidelpfad am Kanal, gut zu laufen oder zu fahren: von Camden westwärts durch den Regent's Park nach Little Venice, ostwärts über Angel und Hackney bis zu den Docks. Primrose Hill liegt nördlich des Regent's Park, 63 m hoch, freier Blick auf die Skyline.",
      en: "Canal towpath, good for walking or cycling: west from Camden through Regent's Park to Little Venice, east via Angel and Hackney to the docks. Primrose Hill sits north of Regent's Park, 63 m high, with an open view of the skyline.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Primrose%20Hill%20London&query_place_id=ChIJ6V7jzO4adkgRmRjI9lMi07M",
    maps2: { label: { de: "Regent's Canal", en: "Regent's Canal" }, url: "https://www.google.com/maps/search/?api=1&query=Regent%27s%20Canal&query_place_id=ChIJ_2PfNT4bdkgRCKVVFzcrrRE" },
    lat: 51.54126, lng: -0.15332,
  },
  {
    name: "Battersea Power Station",
    cat: "sights", area: "Nine Elms",
    desc: {
      de: "Das Kraftwerk vom Pink-Floyd-Cover, nach jahrzehntelangem Leerstand 2022 als Shopping- und Gastro-Komplex wiedereröffnet. Zugang und Turbinenhallen sind frei; Lift 109 (Aufzug im Nordwest-Schornstein, gläserne Kabine, kein Rundgang oben) kostet extra. Eigene Station der Northern Line.",
      en: "The power station from the Pink Floyd cover, reopened in 2022 as a shopping and dining complex after decades derelict. Access and the turbine halls are free; Lift 109 (a glass lift inside the north-west chimney, no walkway at the top) costs extra. Has its own Northern line station.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Battersea%20Power%20Station&query_place_id=ChIJ4Z9Tf_0EdkgRXVFCTtu_oJY",
    lat: 51.48202, lng: -0.14449,
  },

  /* ---------------- NIGHTLIFE ---------------- */
  {
    name: "Pop Brixton",
    cat: "night", area: "Brixton", closing: true,
    desc: {
      de: "Container-Komplex mit Streetfood, Bars und kleinen Läden, 2015 als Zwischennutzung eröffnet. Achtung: Lambeth Council hat im März 2026 die Baugenehmigung für 288 Wohnungen auf dem Grundstück erteilt, der Pachtvertrag läuft bis Winter 2026 — danach ist Schluss. Mi–So geöffnet.",
      en: "Container complex with street food, bars and small shops, opened in 2015 as a meanwhile-use project. Note: in March 2026 Lambeth Council granted planning permission for 288 flats on the site and the lease runs to winter 2026 — after that it closes. Open Wed–Sun.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Pop%20Brixton&query_place_id=ChIJLTXBQGYEdkgRSQCCdD1ed4A",
    lat: 51.46337, lng: -0.11241,
  },
  {
    name: "Queen of Hoxton",
    cat: "night", area: "Shoreditch",
    desc: {
      de: "Bar, Club und Dachterrasse auf drei Ebenen, seit 2009. Im Keller Clubnächte, oben eine Rooftop-Bar, die je nach Saison umdekoriert wird (im Winter mit Jurte und Feuerstellen). Di–So, montags geschlossen.",
      en: "Bar, club and rooftop across three floors, going since 2009. Club nights in the basement, a rooftop bar upstairs that gets redecorated each season (yurt and fire pits in winter). Tue–Sun, closed Mondays.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Queen%20of%20Hoxton&query_place_id=ChIJuRFCz7EcdkgRJhtzI4Y11Tg",
    lat: 51.52210, lng: -0.08115,
  },
  {
    name: "Notting Hill Arts Club",
    cat: "night", area: "Notting Hill",
    desc: {
      de: "Kellerclub gegenüber der Station Notting Hill Gate, seit 1997. An den meisten Abenden Livemusik quer durch die Genres, Fr/Sa DJs. Tagsüber Café. Programm vorher auf der Website checken.",
      en: "Basement club opposite Notting Hill Gate station, going since 1997. Live music across most genres on most nights, DJs on Fri/Sat. Café during the day. Check the website for what's on.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Notting%20Hill%20Arts%20Club&query_place_id=ChIJvzeq-fsPdkgR0RDqFq7cZfI",
    lat: 51.50927, lng: -0.19450,
  },
  {
    name: "The Miller",
    cat: "night", area: "London Bridge",
    desc: {
      de: "Pub hinter dem Guy's Hospital, dadurch deutlich weniger überlaufen als alles rund um die Station. Oben regelmäßig Comedy und Livemusik, draußen viele Tische. Sonntags geschlossen.",
      en: "Pub tucked behind Guy's Hospital, which keeps it far less rammed than anything nearer the station. Comedy and live music upstairs, plenty of tables outside. Closed Sundays.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=The%20Miller%20Snowsfields&query_place_id=ChIJSVKELloDdkgRl4JvlF6lFkg",
    lat: 51.50218, lng: -0.08746,
  },

  /* ---------------- TAGSÜBER ---------------- */
  {
    name: "Maltby Street Market",
    cat: "day", area: "Bermondsey",
    desc: {
      de: "Streetfood-Markt in den Eisenbahnbögen am Ropewalk. Klein, deutlich entspannter als Borough Market; die Bars lassen einen das Essen von nebenan mit reinnehmen. Nur Fr abends, Sa und So.",
      en: "Street food market in the railway arches along the Ropewalk. Small, and considerably more relaxed than Borough Market; the bars let you bring in food from the stalls next door. Fri evenings, Sat and Sun only.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Maltby%20Street%20Market&query_place_id=ChIJZ9jUVEEDdkgRN7k3RDL_908",
    lat: 51.49946, lng: -0.07593,
  },
  {
    name: "Bermondsey Street",
    cat: "day", area: "Bermondsey",
    desc: {
      de: "Straße mit Cafés, Pubs und Restaurants zwischen London Bridge und Maltby Street — die beiden lassen sich gut zu einem Nachmittag verbinden. Unterwegs: White Cube Bermondsey (Galerie, Eintritt frei) und die Buchhandlung Morocco Bound in einer Seitenstraße.",
      en: "Street of cafés, pubs and restaurants running between London Bridge and Maltby Street — the two combine well into one afternoon. Along the way: White Cube Bermondsey (gallery, free) and the Morocco Bound bookshop just off it.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Bermondsey%20Street%20London&query_place_id=ChIJ3zuCyUQDdkgRK-qKftgeg9o",
    lat: 51.50080, lng: -0.08184,
  },
  {
    name: "Violet Bakery",
    cat: "day", area: "Hackney",
    desc: {
      de: "Bäckerei von Claire Ptak in der Wilton Way, bekannt geworden durch die Hochzeitstorte für Harry und Meghan. Kuchen, Cookies, Kaffee; drinnen wenig Platz, ein paar Tische auf dem Gehweg. Täglich ab 8 Uhr (So ab 9).",
      en: "Claire Ptak's bakery on Wilton Way, best known for making Harry and Meghan's wedding cake. Cakes, cookies, coffee; little space inside, a few tables on the pavement. Daily from 8am (9am Sun).",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Violet%20Cakes%20Hackney&query_place_id=ChIJOd435u0cdkgRfZtUjmTNMqE",
    lat: 51.54548, lng: -0.06410,
  },
  {
    name: "Prufrock Coffee",
    cat: "day", area: "Leather Lane / Clerkenwell",
    desc: {
      de: "Specialty-Coffee-Institution auf der Leather Lane seit 2011, geführt von Gwilym Davies (World Barista Champion 2009). Bohnen von Square Mile, wechselndes Filtermenü, Frühstück. Werktags 7:30–16:30, Wochenende länger. Nur Walk-in.",
      en: "Specialty coffee institution on Leather Lane since 2011, run by Gwilym Davies (2009 World Barista Champion). Square Mile beans, a rotating filter menu, breakfast. Weekdays 7:30am–4:30pm, longer at weekends. Walk-ins only.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Prufrock%20Coffee%20Leather%20Lane&query_place_id=ChIJac2MJkwbdkgREaRKCWzWrHc",
    lat: 51.51993, lng: -0.10947,
  },
  {
    name: "Borough Market",
    cat: "day", area: "Southwark",
    desc: {
      de: "Londons älteste Lebensmittelmarkthalle, seit über 1000 Jahren an dieser Stelle. Di–Sa geöffnet (montags zu), am dichtesten am Wochenende. Pieminister und Rambutan (beide auf dieser Liste) liegen direkt hier.",
      en: "London's oldest food market, on this site for over 1,000 years. Open Tue–Sat (closed Mondays), busiest at weekends. Pieminister and Rambutan (both on this list) are right here.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Borough%20Market&query_place_id=ChIJD2bPdVcDdkgRuUSgnOXnKDE",
    lat: 51.50558, lng: -0.09048,
  },
  {
    name: "Camden Market",
    cat: "day", area: "Camden",
    desc: {
      de: "Marktkomplex am Regent's Canal mit Ständen für Kleidung, Antiquitäten und vor allem Streetfood aus aller Welt. Zum Essen hin, nicht zum Shoppen — die Foodstände sind der eigentliche Grund hierzukommen.",
      en: "Market complex on Regent's Canal with stalls for clothes, antiques, and above all street food from around the world. Come for the food, not the shopping — the food stalls are the real reason to be here.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Camden%20Market&query_place_id=ChIJSfFEEuQadkgRCO-FF_-eZUc",
    lat: 51.54140, lng: -0.14651,
  },
  {
    name: "GAIL's Bakery",
    cat: "day", area: "Notting Hill",
    desc: {
      de: "Bäckereikette mit vielen Filialen in London, hier die an der Portobello Road. Scones mit Clotted Cream und Marmelade, dazu ein Kaffee — gut zu verbinden mit dem Markt direkt nebenan.",
      en: "Bakery chain with many branches across London, this one on Portobello Road. Scones with clotted cream and jam, plus a coffee — combines well with the market right next door.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=GAIL%27s%20Bakery%20Portobello%20Road&query_place_id=ChIJDUImdeIPdkgRpCRodwv-hXc",
    lat: 51.51455, lng: -0.20409,
  },
  {
    name: "Monmouth Coffee",
    cat: "day", area: "Borough Market",
    desc: {
      de: "Kaffeeinstitution direkt neben Borough Market, seit den 1990ern. Kein Coffee-to-go, dafür Filterkaffee, der direkt vor einem aufgebrüht wird. Pfandsystem für Mehrwegbecher (5 £, bei Rückgabe erstattet).",
      en: "Coffee institution right next to Borough Market, going since the 1990s. No takeaway cups — filter coffee brewed right in front of you instead. Reusable-cup deposit system (£5, refunded on return).",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Monmouth%20Coffee%20Borough%20Market&query_place_id=ChIJ94DTm1cDdkgRibmgxzXy2EQ",
    lat: 51.50553, lng: -0.09141,
  },
  {
    name: "Catalyst",
    cat: "day", area: "Holborn",
    desc: {
      de: "Skandinavisch-minimalistisches Café am Gray's Inn Road in Holborn, eigene Röstung. 2026 unter die besten Coffeeshops Großbritanniens gewählt. Am Wochenende geschlossen.",
      en: "Scandi-minimalist café on Gray's Inn Road in Holborn, roasts its own beans. Named among the UK's best coffee shops for 2026. Closed at weekends.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Catalyst%20Coffee%20Holborn&query_place_id=ChIJbeLD-0sbdkgRp4IcJrH47b8",
    lat: 51.51981, lng: -0.11200,
  },
  {
    name: "Climpson & Sons",
    cat: "day", area: "Broadway Market / Hackney",
    desc: {
      de: "Kaffeerösterei seit 2002, das Café direkt am Broadway Market in Hackney. Kein Sitzplatz drinnen, aber Bänke draußen auf dem Markt. Gute Ergänzung zu einem Spaziergang am Regent's Canal.",
      en: "Coffee roastery since 2002, the café sits right on Broadway Market in Hackney. No seating inside, but benches out on the market. Combines well with a walk along Regent's Canal.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Climpson%20%26%20Sons%20Broadway%20Market&query_place_id=ChIJx54enugcdkgRgI7vkpta1sE",
    lat: 51.53748, lng: -0.06127,
  },

  /* ---------------- SHOPPING & MÄRKTE ---------------- */
  {
    name: "Carnaby Street",
    cat: "shop", area: "Soho",
    desc: {
      de: "Fußgängerzone mit Modeketten und ein paar unabhängigen Läden, seit den 1960ern für Street-Fashion bekannt. Nettes Bummeln, nichts, wofür man einen ganzen Nachmittag einplanen muss.",
      en: "Pedestrian shopping street with fashion chains and a handful of independent shops, known for street fashion since the 1960s. Nice for a stroll, not worth planning a whole afternoon around.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Carnaby%20Street&query_place_id=ChIJhYw3EdUEdkgRYaGKThvmX9o",
    lat: 51.51319, lng: -0.13885,
  },
  {
    name: "Neal's Yard",
    cat: "shop", area: "Covent Garden",
    desc: {
      de: "Kleiner, bunt bemalter Innenhof in Covent Garden, versteckt zwischen den Gassen. Gesundheitskost-Läden und ein paar Cafés, vor allem zum Fotografieren und kurz Durchatmen.",
      en: "Small, brightly painted courtyard in Covent Garden, tucked between the alleys. Health-food shops and a couple of cafés, mainly for photos and a quick breather.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Neal%27s%20Yard%20Covent%20Garden&query_place_id=ChIJ4V9RKM0EdkgRc59GlBoOclQ",
    lat: 51.51447, lng: -0.12635,
  },
  {
    name: "Fortnum & Mason",
    cat: "shop", area: "Piccadilly",
    desc: {
      de: "Traditionskaufhaus am Piccadilly seit 1707, bekannt für Tee, Marmelade und Angestellte in den charakteristischen Livree-Mänteln. Auch ohne etwas zu kaufen sehenswert — die Lebensmittelabteilung im Erdgeschoss ist die schönste.",
      en: "Traditional department store on Piccadilly since 1707, known for tea, jam, and staff in their signature livery coats. Worth a look even without buying anything — the food hall on the ground floor is the nicest part.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Fortnum%20%26%20Mason&query_place_id=ChIJ__8_XtYEdkgRtTLtWfASNFg",
    lat: 51.50837, lng: -0.13831,
  },
  {
    name: "Portobello Road Market",
    cat: "shop", area: "Notting Hill",
    desc: {
      de: "Lange Marktstraße in Notting Hill, samstags am vollsten: Antiquitäten, Vintage-Kleidung, Streetfood. Werktags deutlich ruhiger, Stände trotzdem geöffnet.",
      en: "Long market street in Notting Hill, busiest on Saturdays: antiques, vintage clothing, street food. Noticeably quieter on weekdays, with stalls still open.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Portobello%20Road%20Market&query_place_id=ChIJG1YB2m4RdkgRsetv9D40NGY",
    lat: 51.51700, lng: -0.20585,
  },

  /* ---------------- AKTIV & AUSFLÜGE ---------------- */
  {
    name: "Kew Gardens + Boot zurück",
    cat: "trips", area: "Richmond",
    desc: {
      de: "Botanischer Garten, UNESCO-Welterbe, gut ein Tag. Zum Boot ab Kew Pier (10 Min. vom Elizabeth Gate) eine Korrektur: Das fahren Thames River Boats, saisonal von Anfang Mai bis Oktober, flussabwärts nach Westminster oder flussaufwärts Richtung Richmond/Hampton Court — teils gezeitenabhängig, also Fahrplan vorher checken. Oyster gilt dort nicht; das geht nur bei Uber Boat/Thames Clippers, die westlich aber nur bis Putney fahren.",
      en: "Botanic garden, UNESCO World Heritage, easily a full day. One correction on the boat from Kew Pier (10 min from Elizabeth Gate): it's run by Thames River Boats, seasonally from early May to October, downstream to Westminster or upstream towards Richmond/Hampton Court — partly tide-dependent, so check the timetable first. Oyster is not accepted there; that only works on Uber Boat/Thames Clippers, which go no further west than Putney.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Royal%20Botanic%20Gardens%20Kew&query_place_id=ChIJQzRbYMUNdkgRfvuRYk-Rb9E",
    maps2: { label: { de: "Kew Pier", en: "Kew Pier" }, url: "https://www.google.com/maps/search/?api=1&query=Kew%20Pier&query_place_id=ChIJHQHDbNkNdkgRChrccmJZ2X4" },
    lat: 51.47874, lng: -0.29557,
  },
  {
    name: "Sea Lanes Canary Wharf",
    cat: "trips", area: "Canary Wharf",
    desc: {
      de: "Seit dem 19. Juni 2026 geöffnet: 50-m-Pool mit sechs Bahnen, schwimmend im Eden Dock, gespeist mit Dockwasser. Unbeheizt, ganzjährig an 364 Tagen, Slot vorher buchen, ab 10 £. Zwei Saunen und Gastro am Becken. Vorhängeschloss für den Spind mitbringen.",
      en: "Open since 19 June 2026: a 50 m, six-lane pool floating in Eden Dock, filled with dock water. Unheated, open 364 days a year, book a slot in advance, from £10. Two saunas and food and drink poolside. Bring your own padlock for the lockers.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Sea%20Lanes%20Canary%20Wharf&query_place_id=ChIJ3UQSMZQDdkgRMDN28J5VGdk",
    lat: 51.50422, lng: -0.02508,
  },
  {
    name: "Isle of Wight (mit dem Rad)",
    cat: "trips", area: "Südküste",
    desc: {
      de: "Insel vor Portsmouth, per Fähre ab Portsmouth, Southampton oder Lymington. Die Round-the-Island-Route misst rund 100 km und lässt sich auf zwei Tage strecken. Räder nehmen die Fähren mit; für ein Wochenende ab London realistisch.",
      en: "Island off Portsmouth, reached by ferry from Portsmouth, Southampton or Lymington. The round-the-island route is roughly 100 km and splits neatly over two days. The ferries take bikes; realistic as a weekend from London.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Isle%20of%20Wight&query_place_id=ChIJOVZa5YeHdEgRUXy-QlHOOXQ",
    lat: 50.69385, lng: -1.30473,
  },
  {
    name: "Queen Elizabeth Olympic Park",
    cat: "trips", area: "Stratford",
    desc: {
      de: "Ehemaliges Olympiagelände von 2012 in Stratford, seitdem als Park mit Sportanlagen weiterbetrieben. Der ArcelorMittal Orbit (Aussichtsturm mit Rutsche) ist das Landmark, Eintritt ca. 15 £, die Rutsche kostet extra. Weitläufiges Gelände, gut zu Fuß oder mit dem Rad zu erkunden.",
      en: "Former 2012 Olympic site in Stratford, kept running since as a park with sports venues. The ArcelorMittal Orbit (viewing tower with slide) is the landmark, entry around £15, the slide costs extra. Large grounds, good on foot or by bike.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Queen%20Elizabeth%20Olympic%20Park&query_place_id=ChIJkf4NDG8ddkgRXEINXuEbip8",
    lat: 51.54396, lng: -0.01521,
  },
];
