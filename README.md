# City Notes — private travel guides

A static site (plain HTML/CSS/JS, no build step). Works on GitHub Pages or any web host.

## Publish on GitHub Pages

1. Create a repository (e.g. `city-notes`) and push these files to the root.
2. Repo → Settings → Pages → Source: "Deploy from a branch" → Branch `main`, folder `/ (root)`.
3. The site appears at `https://<username>.github.io/city-notes/` after 1–2 minutes.

Note: a public repo means anyone with the URL can read it. For a truly private
share, either keep the repo private and host elsewhere (Netlify with password,
Cloudflare Pages + Access), or accept "unlisted" visibility on GitHub Pages.

## Language

German is the default; the EN button in the filter bar switches to English
(also reachable directly via `naples.html#en`). All texts live in
`js/naples-data.js` (`desc: { de, en }`) and the `I18N` object in `js/guide.js`.

## Map ↔ list sync

By default the card list only shows places inside the current map view
("Liste folgt Karte" button, toggleable). Marker popups have a "show entry"
link that scrolls to and highlights the matching card. "Alles anzeigen" zooms
out to include the day trips.

## Add your photos

The hero image is `images/hero-napoli.jpg` (used on both pages; if the file
is missing, the header falls back to plain dark). Replace it any time —
landscape, ~1800 px wide works well.

1. Drop the image into `images/` (e.g. `images/masardona.jpg`). Recommended:
   landscape 3:2, ~1200 px wide, JPEG.
2. In `js/naples-data.js`, add `img: "masardona.jpg"` to that place's entry.
   The card picks it up automatically.

## Edit / add places

Everything lives in `js/naples-data.js` — one object per place.
Categories: `pizza`, `street`, `coffee`, `bars`, `sights`, `trips`.
Optional flags: `top: true` (★), `todo: true` ("on my list"), `closed: true`.
`lat`/`lng` put the place on the map; omit them to keep it off the map.
Tip: right-click any spot in Google Maps to copy its coordinates.

## Add a city (e.g. Rome)

1. Copy `naples.html` → `rome.html`; change the title, hero text and the two
   script tags at the bottom to `js/rome-data.js`.
2. Copy `js/naples-data.js` → `js/rome-data.js`; set `CITY.center` to Rome
   (`[41.8933, 12.4829]`) and replace the `PLACES` array.
3. In `index.html`, turn the "Coming soon" card into a live link.

## Structure

```
index.html          landing page (city overview)
naples.html         Naples guide
css/style.css       shared styles (dark, evening-friendly)
js/guide.js         shared logic: filters, search, Leaflet map
js/naples-data.js   Naples places (edit here)
images/             your photos
```

Map: Leaflet + OpenStreetMap/CARTO dark tiles, loaded from CDNs — no API key,
no Google account needed. Each marker links out to Google Maps.
