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
      "nav.automaten": "Vending",
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
      "idx.h2": "Sicilian organic specialities &amp; gelato",
      "idx.p": "Delivered straight to you.",
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
      "kt.status": "With “Send” your message goes straight to trinacriaexpress26@gmail.com. We usually reply within one or two working days.",

      /* ---- Verkaufsautomaten ---- */
      "__title.av": "Vending machines — Trinacria Express",
      "__desc.av": "Trinacria Express is looking for locations in and around Munich for Sicilian organic specialities from the vending machine (Sielaff SÜ 2020 SoftDrop). Rent, revenue share or free products.",
      "av.eyebrow": "Locations wanted",
      "av.h2": "Our <em>vending machines.</em>",
      "av.lead1": "A vending machine doesn't have to mean crisps and chocolate bars. Ours is a little Sicilian bottega, open around the clock: sugo, pesto, caponata, jams, pistachio cream — all organic, all in glass jars.",
      "av.lead2": "We run the <strong>Sielaff SÜ 2020</strong> in the SoftDrop version and are looking for <strong>locations and partners</strong> in and around Munich: businesses, foyers, residential complexes, hotels, sports venues, shopping centres, campsites, holiday flats.",
      "av.models.h": "Three models — pick one",
      "av.m1.h": "Rent",
      "av.m1.p": "You provide the space, we pay a fixed monthly rent. Predictable, straightforward, no effort for you.",
      "av.m2.h": "Revenue share",
      "av.m2.p": "You get a share of the revenue. If the machine does well, you earn with it. If it does badly, you pay nothing.",
      "av.m3.h": "Free products",
      "av.m3.p": "Goods instead of money: a monthly allowance from our range for you, your team or your guests.",
      "av.fig.cap": "Sielaff SÜ 2020 SoftDrop in the Trinacria Express design. The front is fully wrapped — to your specifications on request.",
      "av.specs.h": "The machine: Sielaff SÜ 2020 (SoftDrop)",
      "av.specs.p": "Our goods come in glass jars. An ordinary spiral vending machine lets products drop — no glass survives that. The SoftDrop lift system takes the product from its slot and sets it down gently in the tray.",
      "av.sp.masse.k": "Dimensions (H × W × D)",
      "av.sp.masse.v": "1,830 × 990 × 880 mm",
      "av.sp.gewicht.k": "Weight",
      "av.sp.gewicht.v": "approx. 300–475 kg depending on version (without goods)",
      "av.sp.kap.k": "Capacity",
      "av.sp.kap.v": "up to 60 selections · 6 levels of 10 slots · approx. 675–900 items",
      "av.sp.strom.k": "Power supply",
      "av.sp.strom.v": "220–230 V, 50/60 Hz, 6–10 A — standard Schuko socket, no three-phase power",
      "av.sp.leistung.k": "Power draw",
      "av.sp.leistung.v": "max. 670 W",
      "av.sp.verbrauch.k": "Consumption",
      "av.sp.verbrauch.v": "approx. 2.62 kWh / 24 h at 25 °C — around 950–1,060 kWh per year",
      "av.sp.umgebung.k": "Environment",
      "av.sp.umgebung.v": "indoor installation, +5 °C to +32 °C · LED lighting with night dimming",
      "av.sp.bezahlung.k": "Payment",
      "av.sp.bezahlung.v": "cashless: debit card, credit card, Apple&nbsp;Pay, Google&nbsp;Pay — coin slot optional",
      "av.spec.note": "Technical data per manufacturer data sheet, Sielaff GmbH &amp; Co. KG, Herrieden.",
      "av.need.h": "What we need from the location",
      "av.n1.l": "Space",
      "av.n1.v": "approx. 2 m²",
      "av.n1.p": "Footprint 1.0 × 0.9 m, plus about 10 cm wall clearance and around 0.9 m door-opening area at the front. Level, load-bearing floor (point load up to approx. 500 kg with goods).",
      "av.n2.l": "Power",
      "av.n2.v": "1 × Schuko",
      "av.n2.p": "An ordinary 230 V socket (10 A) within max. 1.5 m. No three-phase power, no water connection. We cover the electricity costs — flat rate or via a sub-meter.",
      "av.n3.l": "Network",
      "av.n3.v": "no Wi-Fi needed",
      "av.n3.p": "The machine reports fill level, revenue and faults over the mobile network. Your network stays out of it.",
      "av.n4.l": "The rest",
      "av.n4.v": "on us",
      "av.n4.p": "Purchase, wrapping, restocking (twice a week, in person), cleaning, maintenance, HACCP documentation, liability insurance.",
      "av.cta.p": "<strong>Got a space?</strong> Drop us a line telling us where it is and how many people pass by each day. We'll get back to you within two days — and bring the range along to taste at the meeting.",
      "av.cta.btn": "Offer a location"
    },

    it: {
      /* ---- geteilt: Navigation & Footer ---- */
      "nav.sortiment": "Prodotti",
      "nav.automaten": "Distributori",
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
      "idx.h2": "Specialità biologiche siciliane &amp; gelato",
      "idx.p": "Consegnati direttamente a voi.",
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
      "kt.status": "Con “Invia” il messaggio arriva direttamente a trinacriaexpress26@gmail.com. Rispondiamo di solito entro uno o due giorni lavorativi.",

      /* ---- Distributori automatici ---- */
      "__title.av": "Distributori automatici — Trinacria Express",
      "__desc.av": "Trinacria Express cerca punti di collocamento a Monaco e dintorni per specialità biologiche siciliane dal distributore (Sielaff SÜ 2020 SoftDrop). Affitto, partecipazione al fatturato o prodotti in omaggio.",
      "av.eyebrow": "Cerchiamo spazi",
      "av.h2": "I nostri <em>distributori automatici.</em>",
      "av.lead1": "Un distributore non deve per forza significare patatine e barrette. Il nostro è una piccola bottega siciliana, aperta 24 ore su 24: sugo, pesto, caponata, marmellate, crema di pistacchio — tutto biologico, tutto in vetro.",
      "av.lead2": "Gestiamo il <strong>Sielaff SÜ 2020</strong> nella versione SoftDrop e cerchiamo <strong>spazi e partner</strong> a Monaco e dintorni: aziende, atri, complessi residenziali, hotel, impianti sportivi, centri commerciali, campeggi, case vacanza.",
      "av.models.h": "Tre modelli — scegliete voi",
      "av.m1.h": "Affitto",
      "av.m1.p": "Voi mettete lo spazio, noi paghiamo un affitto mensile fisso. Prevedibile, semplice, nessun impegno per voi.",
      "av.m2.h": "Partecipazione al fatturato",
      "av.m2.p": "Ricevete una quota del fatturato. Se il distributore va bene, guadagnate con noi. Se va male, non pagate nulla.",
      "av.m3.h": "Prodotti in omaggio",
      "av.m3.p": "Merce invece di denaro: un contingente mensile dal nostro catalogo per voi, il vostro team o i vostri ospiti.",
      "av.fig.cap": "Sielaff SÜ 2020 SoftDrop nel design Trinacria Express. Il fronte è personalizzato su tutta la superficie — su richiesta secondo le vostre indicazioni.",
      "av.specs.h": "Il distributore: Sielaff SÜ 2020 (SoftDrop)",
      "av.specs.p": "La nostra merce è confezionata in vetro. Un normale distributore a spirale lascia cadere i prodotti — nessun vetro sopravvive. Il sistema di sollevamento SoftDrop preleva il prodotto dallo scomparto e lo deposita delicatamente nel vano di ritiro.",
      "av.sp.masse.k": "Dimensioni (A × L × P)",
      "av.sp.masse.v": "1.830 × 990 × 880 mm",
      "av.sp.gewicht.k": "Peso",
      "av.sp.gewicht.v": "ca. 300–475 kg secondo la versione (senza merce)",
      "av.sp.kap.k": "Capacità",
      "av.sp.kap.v": "fino a 60 selezioni · 6 livelli da 10 scomparti · ca. 675–900 articoli",
      "av.sp.strom.k": "Alimentazione",
      "av.sp.strom.v": "220–230 V, 50/60 Hz, 6–10 A — presa Schuko standard, senza corrente trifase",
      "av.sp.leistung.k": "Potenza assorbita",
      "av.sp.leistung.v": "max. 670 W",
      "av.sp.verbrauch.k": "Consumo",
      "av.sp.verbrauch.v": "ca. 2,62 kWh / 24 h a 25 °C — circa 950–1.060 kWh all'anno",
      "av.sp.umgebung.k": "Ambiente",
      "av.sp.umgebung.v": "installazione interna, da +5 °C a +32 °C · illuminazione LED con riduzione notturna",
      "av.sp.bezahlung.k": "Pagamento",
      "av.sp.bezahlung.v": "senza contanti: bancomat, carta di credito, Apple&nbsp;Pay, Google&nbsp;Pay — gettoniera opzionale",
      "av.spec.note": "Dati tecnici secondo la scheda del produttore, Sielaff GmbH &amp; Co. KG, Herrieden.",
      "av.need.h": "Cosa ci serve dal punto di collocamento",
      "av.n1.l": "Spazio",
      "av.n1.v": "ca. 2 m²",
      "av.n1.p": "Superficie 1,0 × 0,9 m, più circa 10 cm di distanza dalla parete e circa 0,9 m di area di apertura dello sportello sul davanti. Pavimento piano e portante (carico puntuale fino a ca. 500 kg con merce).",
      "av.n2.l": "Corrente",
      "av.n2.v": "1 × Schuko",
      "av.n2.p": "Una normale presa da 230 V (10 A) entro max. 1,5 m. Nessuna corrente trifase, nessun allacciamento idrico. I costi dell'elettricità li copriamo noi — a forfait o tramite contatore separato.",
      "av.n3.l": "Rete",
      "av.n3.v": "nessun Wi-Fi",
      "av.n3.p": "Il distributore segnala livello di riempimento, fatturato e guasti tramite rete mobile. La vostra rete resta fuori.",
      "av.n4.l": "Il resto",
      "av.n4.v": "ci pensiamo noi",
      "av.n4.p": "Acquisto, personalizzazione, rifornimento (2× a settimana, di persona), pulizia, manutenzione, documentazione HACCP, assicurazione di responsabilità civile.",
      "av.cta.p": "<strong>Avete uno spazio?</strong> Scriveteci due righe indicando dove si trova e quante persone passano ogni giorno. Vi rispondiamo entro due giorni — e all'incontro portiamo il catalogo da assaggiare.",
      "av.cta.btn": "Proponi uno spazio"
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
