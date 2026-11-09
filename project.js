const $ = (s) => document.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h) e.textContent = h; return e; };
// Texte avec `code` en police de code.
const rich = (e, t) => { String(t).split("`").forEach((s, i) => e.append(i % 2 ? el("code", "", s) : document.createTextNode(s))); return e; };
const arr = (x) => (x === undefined ? [] : [].concat(x));
const p = EXPERIENCES.find((x) => x.id === document.body.dataset.project);
const m = $("#project");
document.body.classList.add("proj");
const back = el("a", "back", T.back); back.href = "../../#experiences"; m.append(back);

// Un point est soit un texte, soit [texte, [sous-points]].
function list(a) {
  const u = el("ul", "pts");
  a.forEach((t) => { const li = rich(el("li"), Array.isArray(t) ? t[0] : t); if (Array.isArray(t) && t[1]) li.append(list(t[1])); u.append(li); });
  return u;
}
function caption(f, cap, expl) {
  if (!cap && !expl) return;
  const c = el("figcaption"); if (cap) c.append(el("b", "", cap)); if (expl) c.append(document.createTextNode(expl)); f.append(c);
}
// images : [chemin, légende, explication, largeur en %] (ou juste "chemin"). Une image introuvable est masquée.
function gallery(imgs, center) {
  const g = el("div", "gallery");
  imgs.forEach((im) => {
    const [src, cap, expl, size, align] = [].concat(im);
    const f = el("figure"), i = el("img"); i.src = T.proj + src; i.alt = cap || ""; i.loading = "lazy"; i.onerror = () => f.remove();
    if (size) { f.className = "sized"; f.style.width = size + "%"; }
    if (center || align === "center") f.classList.add("ctr");
    f.append(i); caption(f, cap, expl); g.append(f);
  });
  return g;
}
// Lien YouTube ou Google Drive -> adresse d’intégration.
function embedUrl(u) {
  let k = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  if (k) return "https://www.youtube-nocookie.com/embed/" + k[1];
  k = u.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  return k ? "https://drive.google.com/file/d/" + k[1] + "/preview" : u;
}
// videos : [fichier ou lien, légende, explication, largeur en %]
function videos(list) {
  const g = el("div", "gallery");
  list.forEach(([src, cap, expl, size]) => {
    const f = el("figure"); let v;
    if (/^https?:/.test(src)) { v = el("iframe"); v.src = embedUrl(src); v.allowFullscreen = true; v.loading = "lazy"; v.title = cap || "Vidéo"; }
    else { v = el("video"); v.src = T.proj + src; v.controls = true; v.preload = "metadata"; v.playsInline = true; }
    if (size) { f.className = "sized"; f.style.width = size + "%"; }
    if (!size) f.className = "vid";
    f.append(v); caption(f, cap, expl); g.append(f);
  });
  return g;
}
function metrics(a) {
  const g = el("div", "metrics" + (a.length === 4 ? " two" : ""));
  a.forEach(([v, label, note]) => { const d = el("div", "metric"); d.append(el("b", "", v), el("span", "", label)); if (note) d.append(el("small", "", note)); g.append(d); });
  return g;
}
function facts(a, cards) {
  if (cards) { const g = el("div", "fcards"); a.forEach(([k, v]) => { const d = el("div", "fcard"); d.append(el("b", "", k), rich(el("p"), v)); g.append(d); }); return g; }
  const d = el("dl", "facts"); a.forEach(([k, v]) => d.append(el("dt", "", k), rich(el("dd"), v))); return d;
}
function links(a) {
  const ok = a.filter(([, u]) => u); if (!ok.length) return el("span");
  const l = el("p", "links"); ok.forEach(([label, url]) => { const x = el("a", "", label); x.href = url; x.target = "_blank"; x.rel = "noopener"; l.append(x); }); return l;
}

function section(s) {
  const box = el("div", s.callout ? "callout" : "");
  const ctr = s.center !== undefined ? s.center : p.center;
  box.append(el(s.h === 3 ? "h3" : "h2", "", s.title));
  arr(s.text).forEach((t) => box.append(rich(el("p"), t)));
  if (s.links && s.links.length) box.append(links(s.links));
  if (s.imagesFirst && s.images && s.images.length) box.append(gallery(s.images, ctr));
  if (s.facts && s.facts.length) box.append(facts(s.facts, s.cards));
  let side = false;
  if (s.side && !s.imagesFirst && s.points && s.points.length && s.images && s.images.length) {
    side = true; const w = el("div", "side"); w.append(list(s.points), gallery(s.images)); box.append(w);
  } else if (s.points && s.points.length) box.append(list(s.points));
  if (s.metrics && s.metrics.length) box.append(metrics(s.metrics));
  if (s.columns && s.columns.length) {
    const g = el("div", "cols");
    s.columns.forEach((c) => { const d = el("div", "col"); d.append(el("h3", "", c.title)); if (c.points) d.append(list(c.points)); g.append(d); });
    box.append(g);
  }
  if (!side && !s.imagesFirst && s.images && s.images.length) box.append(gallery(s.images, ctr));
  if (s.videos && s.videos.length) box.append(videos(s.videos));
  m.append(box);
}

if (!p) { m.append(el("p", "", T.none)); }
else {
  document.title = p.title + " (" + p.org + ") — Grégory Capon";
  m.append(el("h1", "", p.title), el("p", "meta", [p.org, p.period].filter(Boolean).join(" — ")));
  if (p.summary) m.append(el("p", "lead", p.summary));
  if (p.links && p.links.length) m.append(links(p.links));
  if (p.tags && p.tags.length) { const u = el("ul", "tags"); p.tags.forEach((g) => u.append(el("li", "", g))); m.append(u); }
  arr(p.description).forEach((t) => m.append(rich(el("p"), t)));
  if (p.points && p.points.length) { m.append(el("h2", "", T.pts), list(p.points)); }
  (p.sections || []).forEach(section);
  if (p.images && p.images.length) { m.append(el("h2", "", T.images), gallery(p.images, p.center)); }
  if (p.videos && p.videos.length) { m.append(el("h2", "", "Vidéos"), videos(p.videos)); }
}
