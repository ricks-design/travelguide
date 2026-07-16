/* ============================================================
   LONDON — place data (bilingual)
   Same structure as naples-data.js.
   cat: "sights" | "night" | "day" | "trips"
   ============================================================ */

const CITY = {
  name: { de: "London", en: "London" },
  center: [51.5074, -0.1278],
  zoom: 11,
  updated: { de: "Juli 2026", en: "July 2026" },
};

const CATS = {
  sights: { label: { de: "Sehenswürdigkeiten", en: "Sights" }, color: "var(--c-sights)", hex: "#00a0e2" },
  night:  { label: { de: "Ausgehen", en: "Going out" }, color: "var(--c-night)", hex: "#e1251b" },
  day:    { label: { de: "Tagsüber", en: "Daytime" }, color: "var(--c-day)", hex: "#ffd300" },
  trips:  { label: { de: "Aktiv & Ausflüge", en: "Active & day trips" }, color: "var(--c-trips)", hex: "#6bcf97" },
};

const PLACES = [
  /* ---------------- SIGHTS ---------------- */
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
];
