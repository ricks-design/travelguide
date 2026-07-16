# City Notes — private travel guides

Static site (plain HTML/CSS/JS, no build step). Works on GitHub Pages, any web
host, or straight off the filesystem.

## Structure

```
index.html          landing page (city overview)
naples.html         Naples guide
london.html         London guide
css/style.css       shared styles + per-city colour themes
js/guide.js         shared logic: filters, search, map/list sync
js/naples-data.js   Naples: CITY, CATS, PLACES
js/london-data.js   London: CITY, CATS, PLACES
vendor/             Leaflet 1.9.4 (local copy, no CDN)
images/             photos (hero-napoli.jpg, hero-london.jpg)
```

## IMPORTANT when updating

`css/style.css` and `js/guide.js` are **shared by all cities**. If you change or
add a city, upload those two as well — otherwise the new page loads with the old
stylesheet (wrong colours) and the old logic (no cards, no markers).

## Publish on GitHub Pages

1. Push these files to a repository root.
2. Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
3. Live at `https://<username>.github.io/<repo>/` after a minute or two.

A public repo means anyone with the URL can read it. For a properly private
share: keep the repo private and host on Netlify (password protection) or
Cloudflare Pages + Access.

## Why Leaflet is vendored, not loaded from a CDN

The CDN version needs `crossorigin`, which browsers reject when the page has no
real origin — i.e. opened as a local file or inside a sandboxed preview. Result:
`L is not defined`, dead map, no markers. The local copy in `vendor/` works
everywhere. If the map ever fails anyway, `guide.js` hides the map section and
keeps the list fully usable.

## Adding a city

1. Copy `london.html` → `rome.html`. Change the title, hero text, the
   `theme-*` class on `<body>` and the data script tag at the bottom.
2. Copy `js/london-data.js` → `js/rome-data.js`. Set `CITY.center`, define
   `CATS` (your categories) and fill `PLACES`.
3. Add a `body.theme-rome { ... }` block in `css/style.css` (copy the London one
   and change the colours).
4. In `index.html`, turn the "In Arbeit" card into a live link.

## Place fields (`js/*-data.js`)

| field | meaning |
|---|---|
| `name` | display name |
| `cat` | key from that city's `CATS` |
| `area` | neighbourhood label |
| `desc` | `{ de: "…", en: "…" }` — German is the default language |
| `maps` | Google Maps link |
| `maps2` | optional second link: `{ label: {de,en}, url }` |
| `lat` / `lng` | map position (omit to keep off the map) |
| `img` | optional photo filename inside `images/` |
| `top` | ★ favourite (the ★ filter chip only appears if a city has any) |
| `todo` | badge "on my list" |
| `closed` | badge "currently closed" |
| `closing` | badge "closing soon" |

Tip: right-click any spot in Google Maps to copy its coordinates.

## Language

German is the default. The EN button in the filter bar switches everything;
`london.html#en` links straight to English. Page copy lives in the HTML
(`.lang-de` / `.lang-en`), UI strings in `I18N` in `js/guide.js`, place texts in
the data files.

## Photos

Hero: `images/hero-<city>.jpg`, landscape, ~1800 px wide. If the file is
missing, the header falls back to plain dark automatically.
Per place: drop the file in `images/` and add `img: "name.jpg"` to that entry.
