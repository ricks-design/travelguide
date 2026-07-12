/* City guide: bilingual rendering (DE default), filters, search,
   Leaflet map with list<->map sync. */

const I18N = {
  de: {
    all: "Alle", top: "★ Favoriten",
    count: (a, b) => a + " von " + b + " Orten",
    countBounds: (a, b) => a + " von " + b + " Orten im Kartenausschnitt",
    search: "Suchen…",
    maps: "Google Maps",
    todo: "Auf meiner Liste", closed: "Aktuell geschlossen",
    btnCity: "Auf Neapel zentrieren", btnAll: "Alles anzeigen (inkl. Ausflüge)",
    btnSync: "Liste folgt Karte",
    openMaps: "In Google Maps öffnen ↗", showEntry: "Eintrag anzeigen ↓",
    toggle: "EN",
  },
  en: {
    all: "All", top: "★ Top picks",
    count: (a, b) => a + " of " + b + " places",
    countBounds: (a, b) => a + " of " + b + " places in current map view",
    search: "Search…",
    maps: "Google Maps",
    todo: "On my list", closed: "Currently closed",
    btnCity: "Center on Naples", btnAll: "Show everything (incl. day trips)",
    btnSync: "List follows map",
    openMaps: "Open in Google Maps ↗", showEntry: "Show entry ↓",
    toggle: "DE",
  },
};

const CATS = {
  pizza:  { label: { de: "Pizza", en: "Pizza" }, color: "var(--c-pizza)", hex: "#f0a94e" },
  street: { label: { de: "Streetfood & Süßes", en: "Street food & sweets" }, color: "var(--c-street)", hex: "#ef7f6b" },
  coffee: { label: { de: "Kaffee & Cafés", en: "Coffee & cafés" }, color: "var(--c-coffee)", hex: "#d9c27c" },
  bars:   { label: { de: "Bars & Wein", en: "Bars & wine" }, color: "var(--c-bars)", hex: "#c96f85" },
  sights: { label: { de: "Sehenswürdigkeiten", en: "Sights & culture" }, color: "var(--c-sights)", hex: "#5fb2e6" },
  trips:  { label: { de: "Ausflüge", en: "Day trips" }, color: "var(--c-trips)", hex: "#7fcf9b" },
};

let lang = location.hash === "#en" ? "en" : "de";
let activeFilter = "all";
let searchTerm = "";
let syncWithMap = true;   // list shows only places inside the current map view
let map, markerLayer;

const t = () => I18N[lang];
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* ---------- filtering ---------- */
function matchesFilter(p) {
  const f =
    activeFilter === "all" ? true :
    activeFilter === "top" ? !!p.top :
    p.cat === activeFilter;
  if (!f) return false;
  if (!searchTerm) return true;
  const hay = (p.name + " " + (p.area || "") + " " + p.desc.de + " " + p.desc.en).toLowerCase();
  return hay.includes(searchTerm);
}

function inView(p) {
  if (!syncWithMap || !map) return true;
  if (p.lat == null) return true;
  return map.getBounds().contains([p.lat, p.lng]);
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ---------- cards ---------- */
function renderCards() {
  const grid = document.getElementById("grid");
  const filtered = PLACES.filter(matchesFilter);
  const visible = filtered.filter(inView);
  document.getElementById("count").textContent = syncWithMap
    ? t().countBounds(visible.length, filtered.length)
    : t().count(visible.length, PLACES.length);

  grid.innerHTML = visible.map((p) => {
    const cat = CATS[p.cat];
    const star = p.top ? '<span class="star" title="Top pick">★</span> ' : "";
    const todo = p.todo ? '<span class="badge todo">' + t().todo + "</span>" : "";
    const closed = p.closed ? '<span class="badge closed">' + t().closed + "</span>" : "";
    const img = p.img
      ? '<img class="photo" loading="lazy" src="images/' + p.img + '" alt="' + esc(p.name) + '">'
      : "";
    let links = '<a href="' + p.maps + '" target="_blank" rel="noopener">' + t().maps + "</a>";
    if (p.maps2) {
      links += '<a href="' + p.maps2.url + '" target="_blank" rel="noopener">' + esc(p.maps2.label[lang]) + "</a>";
    }
    return (
      '<article class="card" id="card-' + slug(p.name) + '" style="--cat:' + cat.color + '">' +
      img +
      '<div class="meta"><span class="catlabel">' + cat.label[lang] + "</span>" +
      (p.area ? "<span>· " + esc(p.area) + "</span>" : "") +
      "</div>" +
      "<h3>" + star + esc(p.name) + todo + closed + "</h3>" +
      '<p class="desc">' + esc(p.desc[lang]) + "</p>" +
      '<div class="links">' + links + "</div>" +
      "</article>"
    );
  }).join("");
}

/* Jump from a map popup to the corresponding card. */
function focusCard(id) {
  // If the card is filtered out by the bounds sync, it always exists after a
  // popup click, because the marker is inside the view. Still, be defensive:
  let el = document.getElementById("card-" + id);
  if (!el) { renderCards(); el = document.getElementById("card-" + id); }
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.remove("flash");
  void el.offsetWidth; // restart animation
  el.classList.add("flash");
}
window.focusCard = focusCard;

/* ---------- map ---------- */
function initMap() {
  map = L.map("map", { scrollWheelZoom: false }).setView(CITY.center, CITY.zoom);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19,
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
  renderMarkers();

  map.on("moveend zoomend", () => { if (syncWithMap) renderCards(); });

  document.getElementById("btn-city").addEventListener("click", () =>
    map.setView(CITY.center, CITY.zoom)
  );
  document.getElementById("btn-all").addEventListener("click", fitAll);

  const syncBtn = document.getElementById("btn-sync");
  syncBtn.classList.toggle("active", syncWithMap);
  syncBtn.setAttribute("aria-pressed", String(syncWithMap));
  syncBtn.addEventListener("click", () => {
    syncWithMap = !syncWithMap;
    syncBtn.classList.toggle("active", syncWithMap);
    syncBtn.setAttribute("aria-pressed", String(syncWithMap));
    renderCards();
  });
}

function renderMarkers() {
  markerLayer.clearLayers();
  PLACES.filter(matchesFilter).forEach((p) => {
    if (p.lat == null) return;
    const cat = CATS[p.cat];
    const m = L.circleMarker([p.lat, p.lng], {
      radius: p.top ? 9 : 7,
      color: cat.hex,
      weight: 2,
      fillColor: cat.hex,
      fillOpacity: p.top ? 0.85 : 0.5,
    });
    m.bindPopup(
      "<strong>" + (p.top ? "★ " : "") + esc(p.name) + "</strong><br>" +
      '<span style="opacity:.7">' + cat.label[lang] + "</span><br>" +
      '<a href="#" onclick="focusCard(\'' + slug(p.name) + '\');return false;">' + t().showEntry + "</a><br>" +
      '<a href="' + p.maps + '" target="_blank" rel="noopener">' + t().openMaps + "</a>"
    );
    markerLayer.addLayer(m);
  });
}

function fitAll() {
  const pts = PLACES.filter(matchesFilter).filter((p) => p.lat != null)
    .map((p) => [p.lat, p.lng]);
  if (pts.length) map.fitBounds(pts, { padding: [30, 30] });
}

/* ---------- chips, search, language ---------- */
function buildChips() {
  const chips = [
    { key: "all", label: t().all },
    { key: "top", label: t().top },
    ...Object.entries(CATS).map(([key, c]) => ({
      key,
      label: '<span class="dot" style="background:' + c.hex + '"></span>' + c.label[lang],
    })),
  ];
  const el = document.getElementById("chips");
  el.innerHTML = chips.map((c) =>
    '<button class="chip' + (c.key === activeFilter ? " active" : "") + '" data-key="' + c.key + '">' + c.label + "</button>"
  ).join("");
}

function applyLang() {
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang;
  document.getElementById("search").placeholder = t().search;
  document.getElementById("btn-city").textContent = t().btnCity;
  document.getElementById("btn-all").textContent = t().btnAll;
  document.getElementById("btn-sync").textContent = t().btnSync;
  document.getElementById("lang-toggle").textContent = t().toggle;
  buildChips();
  renderCards();
  if (markerLayer) renderMarkers();
}

document.getElementById("chips").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  activeFilter = btn.dataset.key;
  document.querySelectorAll("#chips .chip").forEach((b) =>
    b.classList.toggle("active", b === btn)
  );
  renderCards();
  renderMarkers();
});

const searchInput = document.getElementById("search");
const searchWrap = document.getElementById("search-wrap");
const searchClear = document.getElementById("search-clear");

function applySearch() {
  searchTerm = searchInput.value.trim().toLowerCase();
  searchWrap.classList.toggle("has-value", searchInput.value.length > 0);
  renderCards();
  renderMarkers();
}
searchInput.addEventListener("input", applySearch);
searchInput.addEventListener("search", applySearch); // fires on native clear too
searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  applySearch();
});

document.getElementById("lang-toggle").addEventListener("click", () => {
  lang = lang === "de" ? "en" : "de";
  if (lang === "en") {
    location.hash = "#en";
  } else {
    history.replaceState(null, "", location.pathname + location.search);
  }
  applyLang();
});

applyLang();
initMap();
renderCards(); // re-render once map exists so the bounds filter applies
