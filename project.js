const $ = (s) => document.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h) e.textContent = h; return e; };
const p = EXPERIENCES.find((x) => x.id === document.body.dataset.project);
const m = $("#project");
const back = el("a", "back", T.back); back.href = "../../#experiences"; m.append(back);
if (!p) { m.append(el("p", "", T.none)); }
else {
  document.title = p.title + " (" + p.org + ") — Grégory Capon";
  m.append(el("h1", "", p.title), el("p", "meta", [p.org, p.period].filter(Boolean).join(" — ")));
  if (p.summary) m.append(el("p", "lead", p.summary));
  if (p.tags && p.tags.length) { const u = el("ul", "tags"); p.tags.forEach((g) => u.append(el("li", "", g))); m.append(u); }
  (p.description || []).forEach((t) => m.append(el("p", "", t)));
  if (p.points && p.points.length) { m.append(el("h2", "", T.pts)); const u = el("ul", "pts"); p.points.forEach((t) => u.append(el("li", "", t))); m.append(u); }
  if (p.images && p.images.length) {
    m.append(el("h2", "", T.images)); const g = el("div", "gallery");
    p.images.forEach(([src, cap]) => { const f = el("figure"), i = el("img"); i.src = T.proj + src; i.alt = cap || ""; i.loading = "lazy"; f.append(i); if (cap) f.append(el("figcaption", "", cap)); g.append(f); });
    m.append(g);
  }
}
