/* ============ TRINACRIA EXPRESS — Bio-Sortiment (Convivia / INTEX s.r.l.) ============ */

const CATS = {
  sughi:      "Saucen & Sugo",
  pesti:      "Pesto",
  pate:       "Patè & Conserve",
  marmellate: "Marmeladen",
  creme:      "Süße Cremes",
  gelato:     "Gelato",
};

/* ---------- Sprachabhängige dynamische Texte (DE / EN / IT) ---------- */
const I18N_STR = {
  de: {
    cats: CATS, bio: "Bio",
    size: (w, c, s) => `${w} · ${c} Stück/Karton · ${s} Monate haltbar`,
    ingSummary: "Zutaten &amp; EAN", bioNote: "*aus biologischer Landwirtschaft",
    priceAsk: "Preis auf Anfrage", addBtn: "Zur Anfrage",
    cartEmpty: "Deine Anfrageliste ist leer —<br>das Sortiment wartet.",
    pcs: (c) => `${c} Stk./Karton`, carton: (q) => `${q} ${q === 1 ? "Karton" : "Kartons"}`,
    dash: "—", less: "Weniger", more: "Mehr", remove: "Entfernen",
    comingSoon: "Unser Webshop ist noch im Aufbau — in Kürze bestellbar. Für Anfragen und Muster schreibt uns gern über die Kontaktseite.",
    added: (n) => `${n} steht auf der Anfrageliste`,
    needFirst: "Bitte zuerst Produkte zur Anfrage hinzufügen",
    mailSubject: "Produktanfrage Trinacria Express",
    mailBody: (lines) => `Guten Tag,\n\nich interessiere mich für folgende Produkte:\n\n${lines}\n\nBitte senden Sie mir ein Angebot.\n\nName:\nFirma:\nLieferadresse:\nTelefon:\n\nVielen Dank!`,
    mailLine: (q, p) => `- ${q} x ${p.name} (${p.weight}, ${p.carton} Stk./Karton, EAN ${p.ean})`,
  },
  en: {
    cats: { sughi: "Sauces & sugo", pesti: "Pesto", pate: "Patés & preserves", marmellate: "Jams", creme: "Sweet creams", gelato: "Gelato" },
    bio: "Organic",
    size: (w, c, s) => `${w} · ${c} pcs/case · best before ${s} months`,
    ingSummary: "Ingredients &amp; EAN", bioNote: "*from organic farming",
    priceAsk: "Price on request", addBtn: "Add to enquiry",
    cartEmpty: "Your enquiry list is empty —<br>the range is waiting.",
    pcs: (c) => `${c} pcs/case`, carton: (q) => `${q} ${q === 1 ? "case" : "cases"}`,
    dash: "—", less: "Less", more: "More", remove: "Remove",
    comingSoon: "Our web shop is still being built — orders coming soon. For enquiries and samples, please write to us via the contact page.",
    added: (n) => `${n} added to your enquiry`,
    needFirst: "Please add products to your enquiry first",
    mailSubject: "Product enquiry Trinacria Express",
    mailBody: (lines) => `Hello,\n\nI'm interested in the following products:\n\n${lines}\n\nPlease send me an offer.\n\nName:\nCompany:\nDelivery address:\nPhone:\n\nThank you!`,
    mailLine: (q, p) => `- ${q} x ${p.name} (${p.weight}, ${p.carton} pcs/case, EAN ${p.ean})`,
  },
  it: {
    cats: { sughi: "Salse & sugo", pesti: "Pesto", pate: "Patè & conserve", marmellate: "Marmellate", creme: "Creme dolci", gelato: "Gelato" },
    bio: "Bio",
    size: (w, c, s) => `${w} · ${c} pz/cartone · ${s} mesi di conservazione`,
    ingSummary: "Ingredienti &amp; EAN", bioNote: "*da agricoltura biologica",
    priceAsk: "Prezzo su richiesta", addBtn: "Aggiungi alla richiesta",
    cartEmpty: "La tua lista è vuota —<br>il catalogo ti aspetta.",
    pcs: (c) => `${c} pz/cartone`, carton: (q) => `${q} ${q === 1 ? "cartone" : "cartoni"}`,
    dash: "—", less: "Meno", more: "Più", remove: "Rimuovi",
    comingSoon: "Il nostro shop online è ancora in costruzione — presto ordinabile. Per richieste e campioni scriveteci dalla pagina contatti.",
    added: (n) => `${n} aggiunto alla richiesta`,
    needFirst: "Aggiungi prima dei prodotti alla richiesta",
    mailSubject: "Richiesta prodotti Trinacria Express",
    mailBody: (lines) => `Buongiorno,\n\nsono interessato ai seguenti prodotti:\n\n${lines}\n\nVi prego di inviarmi un'offerta.\n\nNome:\nAzienda:\nIndirizzo di consegna:\nTelefono:\n\nGrazie!`,
    mailLine: (q, p) => `- ${q} x ${p.name} (${p.weight}, ${p.carton} pz/cartone, EAN ${p.ean})`,
  },
};
const LANG = () => window.__teLang || document.documentElement.lang || "de";
const S = () => I18N_STR[LANG()] || I18N_STR.de;

const PRODUCTS = [
  { id: "p01", cat: "sughi", name: "Salsa pronta di pomodoro ciliegino", de: "Fertige Kirschtomatensauce",
    ean: "8053251660525", weight: "330 g", carton: 12, shelf: "24–36",
    ing: "Kirschtomaten* (97,5 %), natives Olivenöl extra* (1,7 %), Meersalz, Basilikum* (0,3 %).",
    hue: ["#c0502c", "#7c2a16"] },
  { id: "p02", cat: "sughi", name: "Salsa di pomodoro ciliegino con peperoni", de: "Kirschtomatensauce mit Paprika",
    ean: "8053251660549", weight: "330 g", carton: 12, shelf: "24–36",
    ing: "Kirschtomaten* (93 %), Paprika* (4,6 %), natives Olivenöl extra* (1,4 %), Meersalz, Basilikum* (0,4 %).",
    hue: ["#c0502c", "#7c2a16"] },
  { id: "p03", cat: "sughi", name: "Salsa pronta di pomodoro datterino", de: "Fertige Datterino-Tomatensauce",
    ean: "8053251660419", weight: "330 g", carton: 12, shelf: "24–36",
    ing: "Datterino-Tomaten* (96 %), natives Olivenöl extra* (1,7 %), Meersalz, Basilikum* (0,5 %).",
    hue: ["#cf5b30", "#8a2f18"] },
  { id: "p04", cat: "sughi", name: "Sugo alla Siciliana", de: "Kirschtomaten-Sugo auf sizilianische Art",
    ean: "8053251660518", weight: "250 g", carton: 12, shelf: "24–36",
    ing: "Kirschtomaten* (91 %), natives Olivenöl extra* (2,5 %), Zwiebeln* (1,6 %), Kapern* (1,1 %), Meersalz, Sellerie* (0,7 %), Karotten*, Basilikum* (0,6 %), Petersilie* (0,1 %), Knoblauch* (0,02 %), Zitronenschale*, schwarzer Pfeffer*, Chili*.",
    hue: ["#c0502c", "#7c2a16"] },
  { id: "p05", cat: "sughi", name: "Sugo all'Arrabbiata", de: "Kirschtomaten-Sugo Arrabbiata",
    ean: "8053251660976", weight: "250 g", carton: 12, shelf: "24–36",
    ing: "Kirschtomaten* (95 %), natives Olivenöl extra* (1,5 %), Zwiebeln*, Meersalz, Basilikum* (0,3 %), Chili* (0,1 %), Petersilie*, Zitronenschale*, Knoblauch*.",
    hue: ["#b83f22", "#6f2010"] },
  { id: "p06", cat: "sughi", name: "Sugo alla Puttanesca", de: "Kirschtomaten-Sugo Puttanesca",
    ean: "8053251660839", weight: "250 g", carton: 12, shelf: "24–36",
    ing: "Kirschtomaten* (92 %), natives Olivenöl extra* (2,5 %), Kapern* (1,47 %), Zwiebeln*, Meersalz, schwarze Oliven* (0,7 %), grüne Oliven* (0,7 %), Basilikum* (0,3 %), Petersilie*, schwarzer Pfeffer*, Knoblauch*, Zitronenschale*, wilde Fenchelsamen*, Chili*.",
    hue: ["#a83820", "#5f1c0e"] },
  { id: "p07", cat: "sughi", name: "Sugo alla Palermitana", de: "Kirschtomaten-Sugo nach Palermo-Art",
    ean: "8053251660846", weight: "250 g", carton: 12, shelf: "24–36",
    ing: "Kirschtomaten* (94 %), natives Olivenöl extra* (2,5 %), Zwiebeln* (0,9 %), Meersalz, Kapern* (0,3 %), Basilikum* (0,3 %), Sultaninen*, wilde Fenchelsamen* (0,2 %), Petersilie*, Knoblauch*, Zitronenschale*, schwarzer Pfeffer*.",
    hue: ["#c0502c", "#7c2a16"] },
  { id: "p08", cat: "sughi", name: "Sugo alla Norma", de: "Kirschtomaten-Sugo mit Auberginen",
    ean: "8053251660198", weight: "250 g", carton: 12, shelf: "24–36",
    ing: "Kirschtomaten* (82,6 %), Auberginen* (11,5 %), Basilikum*, natives Olivenöl extra*, Apfelessig*, Meersalz, Knoblauch*.",
    hue: ["#a4442a", "#5f1c0e"] },
  { id: "p09", cat: "sughi", name: "Sugo alla Mediterranea", de: "Kirschtomaten-Sugo mediterran",
    ean: "8053251660617", weight: "250 g", carton: 12, shelf: "24–36",
    ing: "Kirschtomaten* (94 %), getrocknete Tomaten* (2,2 %), natives Olivenöl extra* (1,5 %), Meersalz, Kapern* (0,3 %), Basilikum* (0,3 %), Petersilie*, Weißweinessig*, Rosmarin*, Chili*, Oregano*.",
    hue: ["#c0502c", "#7c2a16"] },
  { id: "p10", cat: "sughi", name: "Passata di pomodoro", de: "Passierte Tomaten — ideal für Saucen, Ragù & Pizza",
    ean: "8053251661065", weight: "420 g", carton: 12, shelf: "24–36",
    ing: "Kirschtomaten* (mind. 99 %), Meersalz.",
    hue: ["#c94f2b", "#7c2a16"] },

  { id: "p11", cat: "pesti", name: "Pesto di finocchietto selvatico", de: "Pesto aus wildem Fenchel",
    ean: "8053251660983", weight: "190 g", carton: 12, shelf: "24–30",
    ing: "Wilder Fenchel* (48 %), natives Olivenöl extra* (32 %), Zwiebeln*, getrocknete Tomaten*, Weißweinessig*, Sultaninen*, Rohrzucker*, Meersalz.",
    hue: ["#8f975f", "#4f5531"] },
  { id: "p12", cat: "pesti", name: "Pesto trapanese", de: "Pesto nach Trapani-Art",
    ean: "8053251660785", weight: "190 g", carton: 12, shelf: "24–30",
    ing: "Tomaten* (82 %), natives Olivenöl extra* (10 %), Basilikum* (2,4 %), MANDELN* (2,4 %), Weißweinessig*, Meersalz, Knoblauch*.",
    hue: ["#b4593a", "#6f2010"] },
  { id: "p13", cat: "pesti", name: "Pesto di basilico alla siciliana", de: "Sizilianisches Basilikum-Pesto",
    ean: "8053251660440", weight: "190 g", carton: 12, shelf: "24–30",
    ing: "Basilikum* (53 %), natives Olivenöl extra* (32 %), MANDELN* (5 %), Apfelsaftkonzentrat*, Apfelessig*, getrocknete Tomaten*, Meersalz, Knoblauch*, schwarzer Pfeffer*.",
    hue: ["#7f8f4e", "#43502a"] },

  { id: "p14", cat: "pate", name: "Patè di melanzane", de: "Auberginen-Patè",
    ean: "8053251660556", weight: "190 g", carton: 12, shelf: "24–30",
    ing: "Auberginen* (67 %), natives Olivenöl extra* (25 %), Basilikum*, Rohrzucker*, Weißweinessig*, Meersalz, MANDELN* (1 %), Petersilie*, Knoblauch*, Rosmarin*, schwarzer Pfeffer*.",
    hue: ["#8a7f4e", "#4b4426"] },
  { id: "p15", cat: "pate", name: "Patè di peperoncino", de: "Chili-Patè",
    ean: "8053251660938", weight: "190 g", carton: 12, shelf: "24–30",
    ing: "Chili* (83 %), natives Olivenöl extra* (13 %), Weißweinessig*, Meersalz, Kartoffelstärke*.",
    hue: ["#c33a22", "#75190d"] },
  { id: "p16", cat: "pate", name: "Caponata siciliana", de: "Sizilianische Caponata",
    ean: "8053251660761", weight: "190 g", carton: 12, shelf: "24–30",
    ing: "Auberginen* (50 %), Tomatensauce* (16 %), Zwiebeln* (11 %), Sellerie* (7 %), natives Olivenöl extra* (5 %), Weißweinessig*, Rohrzucker*, grüne Oliven*, Kapern*, Meersalz, Basilikum*, schwarzer Pfeffer*, Chili*.",
    hue: ["#9a5a30", "#542c15"] },

  { id: "p17", cat: "marmellate", name: "Marmellata di arance rosse", de: "Blutorangen-Marmelade",
    ean: "8053251661157", weight: "360 g", carton: 6, shelf: "24–36",
    ing: "Rohrzucker*, Blutorangen mit Schale*, Geliermittel: Fruchtpektin, Säuerungsmittel: Zitronensäure. Fruchtanteil: 45 g je 100 g.",
    hue: ["#d4703a", "#93381d"] },
  { id: "p18", cat: "marmellate", name: "Marmellata di limoni", de: "Zitronen-Marmelade",
    ean: "8053251661164", weight: "360 g", carton: 6, shelf: "24–36",
    ing: "Rohrzucker*, Zitronen mit Schale*, Geliermittel: Fruchtpektin, Säuerungsmittel: Zitronensäure. Fruchtanteil: 45 g je 100 g.",
    hue: ["#e0c14b", "#a98a20"] },
  { id: "p19", cat: "marmellate", name: "Marmellata di mandarini", de: "Mandarinen-Marmelade",
    ean: "8053251661140", weight: "360 g", carton: 6, shelf: "24–36",
    ing: "Rohrzucker*, Mandarinen mit Schale*, Geliermittel: Fruchtpektin, Säuerungsmittel: Zitronensäure. Fruchtanteil: 45 g je 100 g.",
    hue: ["#e29a3c", "#a2651c"] },
  { id: "p20", cat: "marmellate", name: "Confettura extra di fichi bianchi", de: "Extra-Konfitüre aus weißen Feigen",
    ean: "8053251661133", weight: "360 g", carton: 6, shelf: "24–36",
    ing: "Feigen*, Rohrzucker*, Geliermittel: Fruchtpektin, Säuerungsmittel: Zitronensäure. Fruchtanteil: 90 g je 100 g.",
    hue: ["#c2a86a", "#7e6635"] },

  { id: "p21", cat: "creme", name: "Crema dolce di pistacchio", de: "Süße Pistaziencreme",
    ean: "8053251660341", weight: "190 g", carton: 12, shelf: "24",
    ing: "PISTAZIEN* (45 %), Rohrzucker*, Olivenöl*, Sonnenblumenöl*.",
    hue: ["#a4b06a", "#5c6633"] },
  { id: "p22", cat: "creme", name: "Crema dolce di mandorle", de: "Süße Mandelcreme",
    ean: "8053251660358", weight: "190 g", carton: 12, shelf: "24",
    ing: "MANDELN* (38 %), Rohrzucker*, Olivenöl*, Sonnenblumenöl*.",
    hue: ["#dcc08c", "#a3854c"] },
  { id: "p23", cat: "creme", name: "Crema dolce di nocciole", de: "Süße Haselnusscreme",
    ean: "8053251660495", weight: "190 g", carton: 12, shelf: "24",
    ing: "HASELNÜSSE* (38 %), Rohrzucker*, Olivenöl*, Sonnenblumenöl*.",
    hue: ["#b98a5c", "#6d4c2c"] },

  /* ---- Gelato · PEPINO 1884, Torino (seit 1884 · Erfinder des Pinguino, 1938) ---- */
  { id: "g01", cat: "gelato", bio: false, name: "Pinguino Fiordilatte", de: "Das Original von 1938: Milchcreme-Stieleis im Zartbitter-Schokomantel.",
    ean: "auf Anfrage", weight: "65 ml · tiefgekühlt", carton: 24, shelf: "18",
    ing: "MILCH, Zucker, Zartbitterschokolade (Kakaomasse, Zucker, Kakaobutter, Emulgator: SOJALECITHIN), MAGERMILCHPULVER, SAHNE, Glukosesirup, Vanillearoma. Kann Spuren von SCHALENFRÜCHTEN enthalten.",
    hue: ["#6f4a2e", "#3a2413"] },
  { id: "g02", cat: "gelato", bio: false, name: "Pinguino Crema", de: "Feines Eier-Cremeeis am Stiel im knackigen Schokoladenmantel.",
    ean: "auf Anfrage", weight: "65 ml · tiefgekühlt", carton: 24, shelf: "18",
    ing: "MILCH, Zucker, EIGELB, Zartbitterschokolade (Kakaomasse, Zucker, Kakaobutter, Emulgator: SOJALECITHIN), SAHNE, MAGERMILCHPULVER, Glukosesirup, Aroma.",
    hue: ["#dcae3f", "#8f6817"] },
  { id: "g03", cat: "gelato", bio: false, name: "Pinguino Gianduia", de: "Piemonteser Gianduia — Haselnuss-Schokolade als Stieleis im Schokomantel.",
    ean: "auf Anfrage", weight: "65 ml · tiefgekühlt", carton: 24, shelf: "18",
    ing: "MILCH, Zucker, HASELNÜSSE (10 %), Zartbitterschokolade (Kakaomasse, Zucker, Kakaobutter, Emulgator: SOJALECITHIN), Kakao, SAHNE, MAGERMILCHPULVER, Glukosesirup, Aroma.",
    hue: ["#7a4a2c", "#3e2110"] },
  { id: "g04", cat: "gelato", bio: false, name: "Pinguino Nocciola Piemonte", de: "Stieleis aus Piemonteser Haselnüssen, überzogen mit Zartbitterschokolade.",
    ean: "auf Anfrage", weight: "65 ml · tiefgekühlt", carton: 24, shelf: "18",
    ing: "MILCH, Zucker, HASELNÜSSE (12 %), SAHNE, MAGERMILCHPULVER, Zartbitterschokolade (Kakaomasse, Zucker, Kakaobutter, Emulgator: SOJALECITHIN), Glukosesirup, Aroma.",
    hue: ["#b98a5c", "#6d4c2c"] },
  { id: "g05", cat: "gelato", bio: false, name: "Pinguino Pistacchio", de: "Pistazien-Stieleis im feinen Zartbitter-Schokomantel.",
    ean: "auf Anfrage", weight: "65 ml · tiefgekühlt", carton: 24, shelf: "18",
    ing: "MILCH, Zucker, PISTAZIEN (8 %), SAHNE, MAGERMILCHPULVER, Zartbitterschokolade (Kakaomasse, Zucker, Kakaobutter, Emulgator: SOJALECITHIN), Glukosesirup, Aroma.",
    hue: ["#9aa864", "#586031"] },
  { id: "g06", cat: "gelato", bio: false, name: "Pinguino Caffè", de: "Espresso-Stieleis, umhüllt von Zartbitterschokolade.",
    ean: "auf Anfrage", weight: "65 ml · tiefgekühlt", carton: 24, shelf: "18",
    ing: "MILCH, Zucker, SAHNE, MAGERMILCHPULVER, löslicher Kaffee (1,2 %), Zartbitterschokolade (Kakaomasse, Zucker, Kakaobutter, Emulgator: SOJALECITHIN), Glukosesirup, Aroma.",
    hue: ["#6b4a34", "#392416"] },
  { id: "g07", cat: "gelato", bio: false, name: "Pinguino Menta", de: "Erfrischendes Minz-Stieleis im dunklen Schokomantel.",
    ean: "auf Anfrage", weight: "65 ml · tiefgekühlt", carton: 24, shelf: "18",
    ing: "MILCH, Zucker, SAHNE, MAGERMILCHPULVER, Zartbitterschokolade (Kakaomasse, Zucker, Kakaobutter, Emulgator: SOJALECITHIN), Glukosesirup, Minzaroma, Farbstoff: Chlorophylle.",
    hue: ["#6fae8f", "#356b52"] },
];

/* ---------- Produktgrid ---------- */
const grid = document.getElementById("productGrid");
function renderGrid() {
  const t = S();
  grid.innerHTML = PRODUCTS.map((p) => `
  <article class="card" data-cat="${p.cat}">
    <div class="card-media pack ph" data-label="${p.name}" style="--ph-bg: linear-gradient(165deg, ${p.hue[0]}, ${p.hue[1]})">
      <img src="images/products/${p.id}.jpg" alt="${p.name}" loading="lazy" onerror="this.remove()">
    </div>
    <div class="card-body">
      <p class="card-origin">${t.cats[p.cat]}${p.bio === false ? "" : " · " + t.bio}</p>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-de">${p.de}</p>
      <p class="card-size">${t.size(p.weight, p.carton, p.shelf)}</p>
      <details class="card-ing">
        <summary>${t.ingSummary}</summary>
        <p>${p.ing}${p.bio === false ? "" : ' <span class="bio-note">' + t.bioNote + "</span>"}</p>
        <p class="card-ean">EAN ${p.ean}</p>
      </details>
      <div class="card-foot">
        <span class="card-ask">${t.priceAsk}</span>
        <button class="card-add" data-id="${p.id}">${t.addBtn}</button>
      </div>
    </div>
  </article>
`).join("");
}
renderGrid();

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

/* ---------- Anfrageliste ---------- */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("tx-anfrage")) || {}; } catch { cart = {}; }

const save = () => localStorage.setItem("tx-anfrage", JSON.stringify(cart));
const byId = (id) => PRODUCTS.find((p) => p.id === id);

function renderCart() {
  const t = S();
  const items = Object.entries(cart);
  const count = items.reduce((s, [, q]) => s + q, 0);
  document.getElementById("cartCount").textContent = count;

  const box = document.getElementById("cartItems");
  if (!items.length) {
    box.innerHTML = `<p class="cart-empty">${t.cartEmpty}</p>`;
  } else {
    box.innerHTML = items.map(([id, qty]) => {
      const p = byId(id);
      return `
        <div class="cart-item">
          <div class="cart-item-thumb pack ph" style="--ph-bg: linear-gradient(165deg, ${p.hue[0]}, ${p.hue[1]})">
            <img src="images/products/${p.id}.jpg" alt="" onerror="this.remove()">
          </div>
          <div>
            <p class="cart-item-name">${p.name}</p>
            <p class="cart-item-price">${p.weight} · ${t.pcs(p.carton)}</p>
            <div class="qty">
              <button data-act="dec" data-id="${id}" aria-label="${t.less}">−</button>
              <span>${t.carton(qty)}</span>
              <button data-act="inc" data-id="${id}" aria-label="${t.more}">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-act="rm" data-id="${id}" aria-label="${t.remove}">×</button>
        </div>`;
    }).join("");
  }

  document.getElementById("cartTotal").textContent =
    count === 0 ? t.dash : t.carton(count);
}

/* ---------- Webshop-Status ---------- */
const SHOP_LIVE = false; // auf true setzen, sobald der Webshop bestellbar ist

/* ---------- Aktionen ---------- */
grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".card-add");
  if (!btn) return;
  if (!SHOP_LIVE) {
    const p = byId(btn.dataset.id);
    window.location.href = "kontakt.html?produkt=" + encodeURIComponent(p ? p.name : "");
    return;
  }
  cart[btn.dataset.id] = (cart[btn.dataset.id] || 0) + 1;
  save(); renderCart();
  toast(S().added(byId(btn.dataset.id).name));
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

/* ---------- Anfrage per E-Mail ---------- */
document.getElementById("checkoutBtn").addEventListener("click", () => {
  const t = S();
  const items = Object.entries(cart);
  if (!items.length) { toast(t.needFirst); return; }
  const lines = items.map(([id, q]) => t.mailLine(q, byId(id))).join("\n");
  const body = t.mailBody(lines);
  window.location.href =
    `mailto:trinacriaexpress26@gmail.com?subject=${encodeURIComponent(t.mailSubject)}&body=${encodeURIComponent(body)}`;
});

/* ---------- Drawer ---------- */
const openCart = (open) => document.body.classList.toggle("cart-open", open);
document.getElementById("cartBtn").addEventListener("click", () => { if (!SHOP_LIVE) { toast(S().comingSoon); return; } openCart(true); });
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

/* ---------- Sprache wechseln: Grid + Filter + Warenkorb neu rendern ---------- */
document.addEventListener("te:langchange", () => {
  renderGrid();
  const active = document.querySelector(".chip.active");
  if (active) {
    const cat = active.dataset.cat;
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.toggle("hidden", cat !== "tutti" && card.dataset.cat !== cat);
    });
  }
  renderCart();
});

/* ---------- Kontaktformular (FormSubmit → direkt an trinacriaexpress26@gmail.com) ---------- */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const cfStatus = document.getElementById("cf-status");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type=submit]");
    btn.disabled = true;
    if (cfStatus) cfStatus.textContent = "Wird gesendet …";
    try {
      const res = await fetch("https://formsubmit.co/ajax/trinacriaexpress26@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contactForm),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      contactForm.reset();
      if (cfStatus) cfStatus.textContent = "Danke! Eure Nachricht ist raus — wir melden uns.";
      toast("Nachricht gesendet");
    } catch (err) {
      if (cfStatus)
        cfStatus.innerHTML =
          'Senden hat gerade nicht geklappt. Schreibt uns bitte direkt an <a href="mailto:trinacriaexpress26@gmail.com">trinacriaexpress26@gmail.com</a>.';
    } finally {
      btn.disabled = false;
    }
  });
}
