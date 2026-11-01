const $ = (s) => document.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h) e.textContent = h; return e; };
const p = EXPERIENCES.find((x) => x.id === document.body.dataset.project);
const m = $("#project");
const back = el("a", "back", T.back); back.href = "../../#experiences"; m.append(back);

function list(a) { const u = el("ul", "pts"); a.forEach((t) => u.append(el("li", "", t))); return u; }
// images : [chemin, légende, explication optionnelle]
function gallery(imgs) {
  const g = el("div", "gallery");
  imgs.forEach(([src, cap, expl]) => {
    const f = el("figure"), i = el("img"); i.src = T.proj + src; i.alt = cap || ""; i.loading = "lazy"; f.append(i);
    if (cap || expl) { const c = el("figcaption"); if (cap) c.append(el("b", "", cap)); if (expl) c.append(document.createTextNode(expl)); f.append(c); }
    g.append(f);
  });
  return g;
}
function metrics(a) {
  const g = el("div", "metrics");
  a.forEach(([v, label, note]) => { const d = el("div", "metric"); d.append(el("b", "", v), el("span", "", label)); if (note) d.append(el("small", "", note)); g.append(d); });
  return g;
}

if (!p) { m.append(el("p", "", T.none)); }
else {
  document.title = p.title + " (" + p.org + ") — Grégory Capon";
  m.append(el("h1", "", p.title), el("p", "meta", [p.org, p.period].filter(Boolean).join(" — ")));
  if (p.summary) m.append(el("p", "lead", p.summary));
  if (p.tags && p.tags.length) { const u = el("ul", "tags"); p.tags.forEach((g) => u.append(el("li", "", g))); m.append(u); }
  (p.description || []).forEach((t) => m.append(el("p", "", t)));
  if (p.points && p.points.length) { m.append(el("h2", "", T.pts), list(p.points)); }
  (p.sections || []).forEach((s) => {
    m.append(el("h2", "", s.title));
    (s.text || []).forEach((t) => m.append(el("p", "", t)));
    if (s.points && s.points.length) m.append(list(s.points));
    if (s.metrics && s.metrics.length) m.append(metrics(s.metrics));
    if (s.images && s.images.length) m.append(gallery(s.images));
  });
  if (p.images && p.images.length) { m.append(el("h2", "", T.images), gallery(p.images)); }
}
