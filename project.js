const $ = (s) => document.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h) e.textContent = h; return e; };
const p = EXPERIENCES.find((x) => x.id === document.body.dataset.project);
const m = $("#project");
const back = el("a", "back", T.back); back.href = "../../#experiences"; m.append(back);

// Un point est soit un texte, soit [texte, [sous-points]].
function list(a) {
  const u = el("ul", "pts");
  a.forEach((t) => { const li = el("li", "", Array.isArray(t) ? t[0] : t); if (Array.isArray(t) && t[1]) li.append(list(t[1])); u.append(li); });
  return u;
}
// images : [chemin, légende, explication optionnelle]. Une image introuvable est masquée.
function gallery(imgs) {
  const g = el("div", "gallery");
  imgs.forEach(([src, cap, expl]) => {
    const f = el("figure"), i = el("img"); i.src = T.proj + src; i.alt = cap || ""; i.loading = "lazy"; i.onerror = () => f.remove(); f.append(i);
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
function facts(a) { const d = el("dl", "facts"); a.forEach(([k, v]) => d.append(el("dt", "", k), el("dd", "", v))); return d; }

function section(s) {
  const box = el("div", s.callout ? "callout" : "");
  box.append(el(s.h === 3 ? "h3" : "h2", "", s.title));
  (s.text || []).forEach((t) => box.append(el("p", "", t)));
  if (s.facts && s.facts.length) box.append(facts(s.facts));
  if (s.points && s.points.length) box.append(list(s.points));
  if (s.metrics && s.metrics.length) box.append(metrics(s.metrics));
  if (s.images && s.images.length) box.append(gallery(s.images));
  m.append(box);
}

if (!p) { m.append(el("p", "", T.none)); }
else {
  document.title = p.title + " (" + p.org + ") — Grégory Capon";
  m.append(el("h1", "", p.title), el("p", "meta", [p.org, p.period].filter(Boolean).join(" — ")));
  if (p.summary) m.append(el("p", "lead", p.summary));
  if (p.links && p.links.length) { const l = el("p", "links"); p.links.forEach(([label, url]) => { const a = el("a", "", label); a.href = url; a.target = "_blank"; a.rel = "noopener"; l.append(a); }); m.append(l); }
  if (p.tags && p.tags.length) { const u = el("ul", "tags"); p.tags.forEach((g) => u.append(el("li", "", g))); m.append(u); }
  (p.description || []).forEach((t) => m.append(el("p", "", t)));
  if (p.points && p.points.length) { m.append(el("h2", "", T.pts), list(p.points)); }
  (p.sections || []).forEach(section);
  if (p.images && p.images.length) { m.append(el("h2", "", T.images), gallery(p.images)); }
}
