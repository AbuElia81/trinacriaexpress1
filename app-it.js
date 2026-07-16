/* ============ TRINACRIA EXPRESS — Baviera → Sicilia (birre bavaresi) ============ */

const STILI = {
  chiare:  "Birre chiare",
  frumento:"Birre di frumento",
  scure:   "Birre scure",
};

const PRODOTTI = [
  { id: "b01", stile: "chiare", nome: "Helles Lager", it: "Lager chiara bavarese",
    alc: "5,0 % vol", formato: "0,5 l", cartone: 20,
    desc: "La birra quotidiana della Baviera: maltata, morbida, poco amara. Fermentazione bassa, maturazione lenta. Perfetta con pesce alla griglia e fritture.",
    ingr: "Acqua, malto d'orzo, luppolo, lievito." },

  { id: "b02", stile: "frumento", nome: "Weissbier (Hefeweizen)", it: "Birra di frumento non filtrata",
    alc: "5,4 % vol", formato: "0,5 l", cartone: 20,
    desc: "Torbida, cremosa, con note di banana e chiodi di garofano dal lievito. Il classico bavarese per eccellenza, da versare lentamente.",
    ingr: "Acqua, malto di FRUMENTO, malto d'orzo, luppolo, lievito." },

  { id: "b03", stile: "frumento", nome: "Dunkles Weissbier", it: "Birra di frumento scura",
    alc: "5,3 % vol", formato: "0,5 l", cartone: 20,
    desc: "La sorella scura della Weissbier: malti tostati, caramello, pane nero. Sorprendente con formaggi stagionati siciliani.",
    ingr: "Acqua, malto di FRUMENTO, malto d'orzo (anche tostato), luppolo, lievito." },

  { id: "b04", stile: "chiare", nome: "Märzen / Oktoberfestbier", it: "Birra dell'Oktoberfest",
    alc: "5,8 % vol", formato: "0,5 l", cartone: 20,
    desc: "Ambrata, piena, con un finale rotondo. Nata per essere birrificata a marzo e bevuta in autunno — oggi si beve tutto l'anno.",
    ingr: "Acqua, malto d'orzo, luppolo, lievito." },

  { id: "b05", stile: "chiare", nome: "Pils", it: "Pilsner bavarese",
    alc: "4,9 % vol", formato: "0,33 l", cartone: 24,
    desc: "Dorata, secca, con un amaro elegante di luppolo nobile. La più dissetante della gamma: ideale d'estate.",
    ingr: "Acqua, malto d'orzo, luppolo, lievito." },

  { id: "b06", stile: "scure", nome: "Dunkles Lager", it: "Lager scura",
    alc: "5,0 % vol", formato: "0,5 l", cartone: 20,
    desc: "Il vero antenato della birra bavarese: malti scuri, cacao, crosta di pane. Meno dolce di quanto sembri.",
    ingr: "Acqua, malto d'orzo (anche tostato), luppolo, lievito." },

  { id: "b07", stile: "scure", nome: "Doppelbock", it: "Doppio bock",
    alc: "7,5 % vol", formato: "0,33 l", cartone: 24,
    desc: "Densa, scura, quasi liquorosa. Nata nei monasteri come «pane liquido» durante il digiuno. Da meditazione, o con cioccolato e ricotta.",
    ingr: "Acqua, malto d'orzo (anche tostato), luppolo, lievito." },

  { id: "b08", stile: "chiare", nome: "Kellerbier / Zwickl", it: "Birra di cantina non filtrata",
    alc: "5,1 % vol", formato: "0,5 l", cartone: 20,
    desc: "Non filtrata e non pastorizzata, come veniva spillata direttamente dalla cantina. Rustica, viva, con un corpo morbido.",
    ingr: "Acqua, malto d'orzo, luppolo, lievito." },
];

/* ---------- Griglia prodotti ---------- */
const grid = document.getElementById("productGrid");
grid.innerHTML = PRODOTTI.map((p) => `
  <article class="card" data-cat="${p.stile}">
    <div class="card-media pack ph" data-label="${p.nome}">
      <img src="images/prodotti-it/${p.id}.jpg" alt="${p.nome} — foto segnaposto" loading="lazy" onerror="this.remove()">
    </div>
    <div class="card-body">
      <p class="card-origin">${STILI[p.stile]} · Baviera</p>
      <h3 class="card-name">${p.nome}</h3>
      <p class="card-de">${p.it}</p>
      <p class="card-size">${p.formato} · ${p.alc} · ${p.cartone} bottiglie/cartone</p>
      <p class="card-desc">${p.desc}</p>
      <details class="card-ing">
        <summary>Ingredienti</summary>
        <p>${p.ingr}</p>
        <p class="card-ean">Prodotto secondo il Reinheitsgebot bavarese del 1516.</p>
      </details>
      <div class="card-foot">
        <span class="card-ask">Prezzo su richiesta</span>
        <button class="card-add" data-id="${p.id}">Aggiungi</button>
      </div>
    </div>
  </article>
`).join("");

/* ---------- Filtri ---------- */
document.getElementById("filters").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
  const cat = chip.dataset.cat;
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("hidden", cat !== "tutti" && card.dataset.cat !== cat);
  });
});

/* ---------- Lista richiesta ---------- */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("tx-richiesta")) || {}; } catch { cart = {}; }

const save = () => localStorage.setItem("tx-richiesta", JSON.stringify(cart));
const byId = (id) => PRODOTTI.find((p) => p.id === id);

function renderCart() {
  const items = Object.entries(cart);
  const count = items.reduce((s, [, q]) => s + q, 0);
  document.getElementById("cartCount").textContent = count;

  const box = document.getElementById("cartItems");
  if (!items.length) {
    box.innerHTML = `<p class="cart-empty">La tua lista è vuota —<br>la Baviera aspetta.</p>`;
  } else {
    box.innerHTML = items.map(([id, qty]) => {
      const p = byId(id);
      return `
        <div class="cart-item">
          <div class="cart-item-thumb pack ph">
            <img src="images/prodotti-it/${p.id}.jpg" alt="" onerror="this.remove()">
          </div>
          <div>
            <p class="cart-item-name">${p.nome}</p>
            <p class="cart-item-price">${p.formato} · ${p.cartone} bottiglie/cartone</p>
            <div class="qty">
              <button data-act="dec" data-id="${id}" aria-label="Meno">−</button>
              <span>${qty} ${qty === 1 ? "cartone" : "cartoni"}</span>
              <button data-act="inc" data-id="${id}" aria-label="Più">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-act="rm" data-id="${id}" aria-label="Rimuovi">×</button>
        </div>`;
    }).join("");
  }

  document.getElementById("cartTotal").textContent =
    count === 0 ? "—" : `${count} ${count === 1 ? "cartone" : "cartoni"}`;
}

/* ---------- Azioni ---------- */
grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".card-add");
  if (!btn) return;
  cart[btn.dataset.id] = (cart[btn.dataset.id] || 0) + 1;
  save(); renderCart();
  toast(`${byId(btn.dataset.id).nome} aggiunto alla richiesta`);
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
  const items = Object.entries(cart);
  if (!items.length) { toast("Aggiungi prima qualche prodotto"); return; }
  const righe = items.map(([id, q]) => {
    const p = byId(id);
    return `- ${q} x ${p.nome} (${p.formato}, ${p.cartone} bottiglie/cartone)`;
  }).join("\n");
  const body = `Buongiorno,\n\nvorrei ricevere un'offerta per i seguenti prodotti:\n\n${righe}\n\nNome:\nAzienda:\nIndirizzo di consegna:\nTelefono:\n\nGrazie!`;
  window.location.href =
    `mailto:trinacriaexpress26@gmail.com?subject=${encodeURIComponent("Richiesta Baviera → Sicilia")}&body=${encodeURIComponent(body)}`;
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

/* ---------- Marquee ---------- */
const track = document.getElementById("marqueeTrack");
if (track) track.innerHTML += track.innerHTML;

renderCart();
