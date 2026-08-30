/* ============ TRINACRIA EXPRESS — Menue-Button (rechts oben) ============
   Klappt die Seitenlinks auf, statt sie alle in die Kopfzeile zu schreiben. */
(function () {
  var btn = document.getElementById("menuBtn");
  var panel = document.getElementById("menuPanel");
  if (!btn || !panel) return;

  function open() {
    panel.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    document.addEventListener("click", onDocClick, true);
    document.addEventListener("keydown", onKey);
  }
  function close() {
    panel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", onDocClick, true);
    document.removeEventListener("keydown", onKey);
  }
  function onDocClick(e) {
    if (!panel.contains(e.target) && !btn.contains(e.target)) close();
  }
  function onKey(e) {
    if (e.key === "Escape" || e.key === "Esc") { close(); btn.focus(); }
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (panel.hidden) open(); else close();
  });

  /* Link angeklickt (auch Sprungmarken auf derselben Seite) -> Menue zu */
  panel.addEventListener("click", function (e) {
    if (e.target.closest("a")) close();
  });
})();
