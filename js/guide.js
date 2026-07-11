/* City guide: renders cards, filters, and the Leaflet map from PLACES. */

const CATS = {
  pizza:  { label: "Pizza",               color: "var(--c-pizza)",  hex: "#f0a94e" },
  street: { label: "Street food & sweets", color: "var(--c-street)", hex: "#ef7f6b" },
  coffee: { label: "Coffee & cafés",      color: "var(--c-coffee)", hex: "#d9c27c" },
  bars:   { label: "Bars & wine",         color: "var(--c-bars)",   hex: "#c96f85" },
  sights: { label: "Sights & culture",    color: "var(--c-sights)", hex: "#5fb2e6" },
  trips:  { label: "Day trips",           color: "var(--c-trips)",  hex: "#7fcf9b" },
};

let activeFilter = "all";
let searchTerm = "";
let map, markerLayer;

/* ---------- filtering ---------- */
function matches(p) {
  const f =
    activeFilter === "all" ? true :
    activeFilter === "top" ? !!p.top :
    p.cat === activeFilter;
  if (!f) return false;
  if (!searchTerm) return true;
  const hay = (p.name + " " + (p.area || "") + " " + p.desc).toLowerCase();
  return hay.includes(searchTerm);
}

/* ---------- cards ---------- */
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderCards() {
  const grid = document.getElementById("grid");
  const visible = PLACES.filter(matches);
  document.getElementById("count").textContent =
    visible.length + " of " + PLACES.length + " places";

  grid.innerHTML = visible.map((p) => {
    const cat = CATS[p.cat];
    const star = p.top ? '<span class="star" title="Top pick">★</span> ' : "";
    const todo = p.todo ? '<span class="badge todo">On my list</span>' : "";
    const closed = p.closed ? '<span class="badge closed">Currently closed</span>' : "";
    const img = p.img
      ? '<img class="photo" loading="lazy" src="images/' + p.img + '" alt="' + esc(p.name) + '">'
      : "";
    let links = '<a href="' + p.maps + '" target="_blank" rel="noopener">Google Maps</a>';
    if (p.maps2) {
      links += '<a href="' + p.maps2.url + '" target="_blank" rel="noopener">' + esc(p.maps2.label) + "</a>";
    }
    return (
      '<article class="card" style="--cat:' + cat.color + '">' +
      img +
      '<div class="meta"><span class="catlabel">' + cat.label + "</span>" +
      (p.area ? "<span>· " + esc(p.area) + "</span>" : "") +
      "</div>" +
      "<h3>" + star + esc(p.name) + todo + closed + "</h3>" +
      '<p class="desc">' + esc(p.desc) + "</p>" +
      '<div class="links">' + links + "</div>" +
      "</article>"
    );
  }).join("");
}

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

  document.getElementById("btn-city").addEventListener("click", () =>
    map.setView(CITY.center, CITY.zoom)
  );
  document.getElementById("btn-all").addEventListener("click", fitAll);
}

function renderMarkers() {
  markerLayer.clearLayers();
  PLACES.filter(matches).forEach((p) => {
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
      '<span style="opacity:.7">' + cat.label + "</span><br>" +
      '<a href="' + p.maps + '" target="_blank" rel="noopener">Open in Google Maps ↗</a>'
    );
    markerLayer.addLayer(m);
  });
}

function fitAll() {
  const pts = PLACES.filter(matches).filter((p) => p.lat != null)
    .map((p) => [p.lat, p.lng]);
  if (pts.length) map.fitBounds(pts, { padding: [30, 30] });
}

/* ---------- chips & search ---------- */
function buildChips() {
  const chips = [
    { key: "all", label: "All" },
    { key: "top", label: "★ Top picks" },
    ...Object.entries(CATS).map(([key, c]) => ({
      key,
      label: '<span class="dot" style="background:' + c.hex + '"></span>' + c.label,
    })),
  ];
  const el = document.getElementById("chips");
  el.innerHTML = chips.map((c) =>
    '<button class="chip' + (c.key === "all" ? " active" : "") + '" data-key="' + c.key + '">' + c.label + "</button>"
  ).join("");
  el.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeFilter = btn.dataset.key;
    el.querySelectorAll(".chip").forEach((b) => b.classList.toggle("active", b === btn));
    renderCards();
    renderMarkers();
  });

  document.getElementById("search").addEventListener("input", (e) => {
    searchTerm = e.target.value.trim().toLowerCase();
    renderCards();
    renderMarkers();
  });
}

buildChips();
renderCards();
initMap();
