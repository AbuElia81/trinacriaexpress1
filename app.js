/* ============ TERRA SICULA — Laden ============ */

const PRODUCTS = [
  { id: "p01", name: "Olio Extravergine d'Oliva", origin: "Castelvetrano", size: "Nocellara del Belice · 500 ml", price: 18.50, cat: "dispensa", hue: ["#8a9159", "#4a512e"] },
  { id: "p02", name: "Crema di Pistacchio", origin: "Bronte", size: "Glas · 190 g", price: 14.90, cat: "dolce", hue: ["#a4b06a", "#5c6633"] },
  { id: "p03", name: "Arance Rosse di Sicilia", origin: "Piana di Catania", size: "Kiste · 5 kg", price: 12.00, cat: "fresco", hue: ["#d96a3b", "#8f2b1c"] },
  { id: "p04", name: "Limoni di Siracusa IGP", origin: "Siracusa", size: "Kiste · 3 kg", price: 9.50, cat: "fresco", hue: ["#e6c44f", "#b28a1f"] },
  { id: "p05", name: "Capperi di Pantelleria IGP", origin: "Pantelleria", size: "In Meersalz · 250 g", price: 7.80, cat: "dispensa", hue: ["#7d8a5c", "#44502e"] },
  { id: "p06", name: "Pomodori Secchi sott'olio", origin: "Pachino", size: "Glas · 280 g", price: 8.90, cat: "dispensa", hue: ["#c0502c", "#7c2a16"] },
  { id: "p07", name: "Mandorle di Avola", origin: "Avola", size: "Pizzuta · 400 g", price: 11.40, cat: "dispensa", hue: ["#cfa065", "#8a5f33"] },
  { id: "p08", name: "Miele di Zagara", origin: "Zafferana Etnea", size: "Glas · 400 g", price: 10.50, cat: "dolce", hue: ["#e0a83c", "#a06d1c"] },
  { id: "p09", name: "Sale Marino di Trapani IGP", origin: "Trapani", size: "Beutel · 1 kg", price: 5.20, cat: "dispensa", hue: ["#b9c3c6", "#6f8287"] },
  { id: "p10", name: "'U Strattu — Tomatenextrakt", origin: "Noto", size: "Glas · 300 g", price: 9.20, cat: "dispensa", hue: ["#a83820", "#5f1c0e"] },
  { id: "p11", name: "Origano Selvatico", origin: "Monti Iblei", size: "Bund · 50 g", price: 4.80, cat: "dispensa", hue: ["#8f975f", "#4f5531"] },
  { id: "p12", name: "Marmellata di Arance Rosse", origin: "Ribera", size: "Glas · 340 g", price: 7.50, cat: "dolce", hue: ["#d4703a", "#93381d"] },
  { id: "p13", name: "Busiate Trapanesi", origin: "Trapani", size: "Alter Hartweizen · 500 g", price: 6.40, cat: "dispensa", hue: ["#dbb87a", "#a3803f"] },
  { id: "p14", name: "Nero d'Avola DOC", origin: "Vittoria", size: "Flasche · 750 ml", price: 16.00, cat: "cantina", hue: ["#7c2f3a", "#3d1017"] },
  { id: "p15", name: "Pecorino Siciliano DOP", origin: "Madonie", size: "Gereift · 350 g", price: 13.80, cat: "fresco", hue: ["#e3cf9a", "#a8904f"] },
  { id: "p16", name: "Confettura di Fichi d'India", origin: "Etna", size: "Glas · 340 g", price: 8.20, cat: "dolce", hue: ["#c9603f", "#87301f"] },
];

const fmt = (n) => n.toFixed(2).replace(".", ",") + " €";

/* ---------- Produktgrid ---------- */
const grid = document.getElementById("productGrid");
grid.innerHTML = PRODUCTS.map((p) => `
  <article class="card" data-cat="${p.cat}">
    <div class="card-media ph" data-label="${p.name}" style="--ph-bg: linear-gradient(165deg, ${p.hue[0]}, ${p.hue[1]})">
      <img src="images/products/${p.id}.jpg" alt="${p.name}" loading="lazy" onerror="this.remove()">
    </div>
    <div class="card-body">
      <p class="card-origin">${p.origin}</p>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-size">${p.size}</p>
      <div class="card-foot">
        <span class="card-price">${fmt(p.price)}</span>
        <button class="card-add" data-id="${p.id}">In den Korb</button>
      </div>
    </div>
  </article>
`).join("");

/* ---------- Filter ---------- */
document.getElementById("filters").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
  const cat = chip.dataset.cat;
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("hidden", cat !== "tutti" && card.dataset.cat !== cat);
  });
});

/* ---------- Warenkorb ---------- */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("ts-cart")) || {}; } catch { cart = {}; }

const save = () => localStorage.setItem("ts-cart", JSON.stringify(cart));
const byId = (id) => PRODUCTS.find((p) => p.id === id);

function renderCart() {
  const items = Object.entries(cart);
  const count = items.reduce((s, [, q]) => s + q, 0);
  document.getElementById("cartCount").textContent = count;

  const box = document.getElementById("cartItems");
  if (!items.length) {
    box.innerHTML = `<p class="cart-empty">Dein Korb ist leer —<br>die Vorratskammer wartet.</p>`;
  } else {
    box.innerHTML = items.map(([id, qty]) => {
      const p = byId(id);
      return `
        <div class="cart-item">
          <div class="cart-item-thumb ph" style="--ph-bg: linear-gradient(165deg, ${p.hue[0]}, ${p.hue[1]})">
            <img src="images/products/${p.id}.jpg" alt="" onerror="this.remove()">
          </div>
          <div>
            <p class="cart-item-name">${p.name}</p>
            <p class="cart-item-price">${fmt(p.price)}</p>
            <div class="qty">
              <button data-act="dec" data-id="${id}" aria-label="Weniger">−</button>
              <span>${qty}</span>
              <button data-act="inc" data-id="${id}" aria-label="Mehr">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-act="rm" data-id="${id}" aria-label="Entfernen">×</button>
        </div>`;
    }).join("");
  }

  const total = items.reduce((s, [id, q]) => s + byId(id).price * q, 0);
  document.getElementById("cartTotal").textContent = fmt(total);
}

/* ---------- Aktionen ---------- */
grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".card-add");
  if (!btn) return;
  cart[btn.dataset.id] = (cart[btn.dataset.id] || 0) + 1;
  save(); renderCart();
  toast(`${byId(btn.dataset.id).name} liegt im Korb`);
});

document.getElementById("cartItems").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-act]");
  if (!btn) return;
  const { act, id } = btn.dataset;
  if (act === "inc") cart[id]++;
  if (act === "dec") { cart[id]--; if (cart[id] <= 0) delete cart[id]; }
  if (act === "rm") delete cart[id];
  save(); renderCart();
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  toast("Demo — die Kasse kommt mit der echten Seite");
});

/* ---------- Drawer ---------- */
const openCart = (open) => document.body.classList.toggle("cart-open", open);
document.getElementById("cartBtn").addEventListener("click", () => openCart(true));
document.getElementById("cartClose").addEventListener("click", () => openCart(false));
document.getElementById("cartOverlay").addEventListener("click", () => openCart(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") openCart(false); });

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ---------- Marquee: Spur verdoppeln für nahtlosen Lauf ---------- */
const track = document.getElementById("marqueeTrack");
track.innerHTML += track.innerHTML;

renderCart();
