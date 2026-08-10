/* ============ TRINACRIA EXPRESS — Sprachumschalter DE / EN / IT ============
   Deutsch ist das Original im HTML (DOM). EN/IT kommen aus DICT.
   Fehlt ein Schlüssel, bleibt der deutsche Originaltext stehen (Fallback). */
(function () {
  var LANGS = ["de", "en", "it"];
  var STORE = "te_lang";

  var DICT = {
    en: {
      /* ---- geteilt: Navigation & Footer ---- */
      "nav.sortiment": "Products",
      "nav.kontakt": "Contact",
      "foot.pages": "Pages",
      "foot.startseite": "Home",
      "foot.legal": "Legal",
      "foot.brandLine": "Massimiliano di Lorenzo<br>Michael Schnitzer-Trpin<br>Sicily → Germany",
      "foot.note.shop": "© 2026 Trinacria Express — Massimiliano di Lorenzo &amp; Michael Schnitzer-Trpin · Prices on request.",
      "cart.title": "Your enquiry",
      "cart.qty": "Quantity",
      "cart.ship": "Prices on request · we'll reply with an offer",
      "cart.checkout": "Send enquiry by e-mail",

      /* ---- Startseite ---- */
      "__title": "Trinacria Express — Sicily & Bavaria, directly connected",
      "__desc": "Trinacria Express: organic specialities from Sicily to Germany — and soon from Bavaria to Sicily. Choose your direction.",
      "idx.cap": "From the market in Palermo to your table — authentic Sicilian living.",
      "idx.h2": "Our products in Germany",
      "idx.p": "Sicilian organic specialities & gelato — delivered straight to you.",
      "idx.cta": "View products",
      "idx.route.goal": "Germany",
      "idx.mini.r1": "Germany",
      "idx.mini.r2": "Sicily",
      "idx.mini.sub": "Products for Sicily — under construction.",
      "idx.badge": "Soon",
      "idx.banner.cap": "Sugo, pesto, jams & sweet creams — 23 organic specialities from Sicilian soil.",

      /* ---- Sortiment ---- */
      "__title.shop": "Products — Trinacria Express",
      "__desc.shop": "The Trinacria Express range: 23 organic specialities from Sicily and 7 gelato classics by PEPINO 1884. Prices on request.",
      "shop.eyebrow": "The range",
      "shop.h2": "Our range",
      "shop.intro": "23 organic specialities from Sicily — with extra-virgin olive oil and no preservatives — plus 7 gelato classics by PEPINO 1884 from Turin. Prices on request: put together your list and send it to us.",
      "chip.tutti": "All",
      "chip.sughi": "Sauces & sugo",
      "chip.pesti": "Pesto",
      "chip.pate": "Patés & preserves",
      "chip.marmellate": "Jams",
      "chip.creme": "Sweet creams",
      "chip.gelato": "Gelato",

      /* ---- Kontakt ---- */
      "__title.kt": "Contact — Trinacria Express",
      "__desc.kt": "Write to Trinacria Express: questions about products, samples, quantities or prices — we'll get back to you.",
      "kt.eyebrow": "Contact",
      "kt.h2": "Talk <em>directly to us.</em>",
      "kt.lead": "Trinacria Express is run by two people — no call centre, no waiting line. Questions about products, samples, quantities or prices? Just get in touch.",
      "kt.role": "Owner & contact",
      "kt.l.name": "Name",
      "kt.l.email": "E-mail (for our reply)",
      "kt.l.subject": "Subject",
      "kt.l.message": "Message",
      "kt.ph.name": "Your name",
      "kt.ph.email": "you@email.com",
      "kt.ph.subject": "What is it about?",
      "kt.ph.message": "Your message to us …",
      "kt.consent": "I agree that my data may be processed to handle my enquiry (<a href=\"datenschutz.html\">Privacy</a>).",
      "kt.submit": "Send",
      "kt.status": "With “Send” your message goes straight to trinacriaexpress26@gmail.com. We usually reply within one or two working days."
    },

    it: {
      /* ---- geteilt: Navigation & Footer ---- */
      "nav.sortiment": "Prodotti",
      "nav.kontakt": "Contatto",
      "foot.pages": "Pagine",
      "foot.startseite": "Home",
      "foot.legal": "Note legali",
      "foot.brandLine": "Massimiliano di Lorenzo<br>Michael Schnitzer-Trpin<br>Sicilia → Germania",
      "foot.note.shop": "© 2026 Trinacria Express — Massimiliano di Lorenzo &amp; Michael Schnitzer-Trpin · Prezzi su richiesta.",
      "cart.title": "La tua richiesta",
      "cart.qty": "Quantità",
      "cart.ship": "Prezzi su richiesta · vi rispondiamo con un'offerta",
      "cart.checkout": "Invia la richiesta per e-mail",

      /* ---- Startseite ---- */
      "__title": "Trinacria Express — Sicilia e Baviera, collegate",
      "__desc": "Trinacria Express: specialità biologiche dalla Sicilia alla Germania — e presto dalla Baviera alla Sicilia. Scegli la direzione.",
      "idx.cap": "Dal mercato di Palermo fino a voi — autentico spirito siciliano.",
      "idx.h2": "I nostri prodotti in Germania",
      "idx.p": "Specialità biologiche siciliane e gelato — consegnati direttamente a voi.",
      "idx.cta": "Vai ai prodotti",
      "idx.route.goal": "Germania",
      "idx.mini.r1": "Germania",
      "idx.mini.r2": "Sicilia",
      "idx.mini.sub": "Prodotti per la Sicilia — in costruzione.",
      "idx.badge": "Presto",
      "idx.banner.cap": "Sugo, pesto, marmellate e creme dolci — 23 specialità biologiche dalla terra siciliana.",

      /* ---- Sortiment ---- */
      "__title.shop": "Prodotti — Trinacria Express",
      "__desc.shop": "Il catalogo di Trinacria Express: 23 specialità biologiche siciliane e 7 classici del gelato PEPINO 1884. Prezzi su richiesta.",
      "shop.eyebrow": "Il catalogo",
      "shop.h2": "Il nostro catalogo",
      "shop.intro": "23 specialità biologiche dalla Sicilia — con olio extravergine d'oliva e senza conservanti — più 7 classici del gelato PEPINO 1884 di Torino. Prezzi su richiesta: componete la vostra lista e inviatecela.",
      "chip.tutti": "Tutte",
      "chip.sughi": "Salse & sugo",
      "chip.pesti": "Pesto",
      "chip.pate": "Patè & conserve",
      "chip.marmellate": "Marmellate",
      "chip.creme": "Creme dolci",
      "chip.gelato": "Gelato",

      /* ---- Kontatto ---- */
      "__title.kt": "Contatto — Trinacria Express",
      "__desc.kt": "Scrivete a Trinacria Express: domande su prodotti, campioni, quantità o prezzi — vi rispondiamo.",
      "kt.eyebrow": "Contatto",
      "kt.h2": "Parlate <em>direttamente con noi.</em>",
      "kt.lead": "Trinacria Express è gestito da due persone — nessun call center, nessuna attesa. Domande su prodotti, campioni, quantità o prezzi? Scriveteci.",
      "kt.role": "Titolare & contatto",
      "kt.l.name": "Nome",
      "kt.l.email": "E-mail (per la risposta)",
      "kt.l.subject": "Oggetto",
      "kt.l.message": "Messaggio",
      "kt.ph.name": "Il vostro nome",
      "kt.ph.email": "voi@email.it",
      "kt.ph.subject": "Di cosa si tratta?",
      "kt.ph.message": "Il vostro messaggio …",
      "kt.consent": "Acconsento al trattamento dei miei dati per gestire la mia richiesta (<a href=\"datenschutz.html\">Privacy</a>).",
      "kt.submit": "Invia",
      "kt.status": "Con “Invia” il messaggio arriva direttamente a trinacriaexpress26@gmail.com. Rispondiamo di solito entro uno o due giorni lavorativi."
    }
  };

  var deText = {};   // key -> Original-innerHTML (DE)
  var dePh = {};     // key -> Original-placeholder (DE)
  var deTitle = document.title;
  var deDesc = (document.querySelector('meta[name="description"]') || {}).content || "";

  function nodesText() { return document.querySelectorAll("[data-i18n]"); }
  function nodesPh() { return document.querySelectorAll("[data-i18n-ph]"); }

  function cacheDE() {
    nodesText().forEach(function (el) {
      deText[el.getAttribute("data-i18n")] = el.innerHTML;
    });
    nodesPh().forEach(function (el) {
      dePh[el.getAttribute("data-i18n-ph")] = el.getAttribute("placeholder");
    });
  }

  function pick(dict, key, fallback) {
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    return fallback;
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "de";
    var d = lang === "de" ? null : DICT[lang];

    nodesText().forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      el.innerHTML = pick(d, k, deText[k]);
    });
    nodesPh().forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      el.setAttribute("placeholder", pick(d, k, dePh[k]));
    });

    /* Titel + Meta-Description: nur übersetzen, wenn die Seite einen Schlüssel
       deklariert (data-i18n-title / data-i18n-desc am <body>). Sonst Original behalten. */
    var tKey = document.body.getAttribute("data-i18n-title");
    var dKey = document.body.getAttribute("data-i18n-desc");
    document.title = tKey ? pick(d, tKey, deTitle) : deTitle;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", dKey ? pick(d, dKey, deDesc) : deDesc);

    document.documentElement.setAttribute("lang", lang);
    window.__teLang = lang;

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try { localStorage.setItem(STORE, lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent("te:langchange", { detail: lang }));
  }

  function init() {
    cacheDE();
    var saved = "de";
    try { saved = localStorage.getItem(STORE) || "de"; } catch (e) {}
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        apply(b.getAttribute("data-lang"));
      });
    });
    apply(saved);
  }

  window.TE_I18N = { apply: apply, lang: function () { return window.__teLang || "de"; } };

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
