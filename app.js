const $ = (s) => document.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h) e.textContent = h; return e; };
const meta = (x) => [x.org, x.period].filter(Boolean).join(" — ");
const tags = (a) => { const u = el("ul", "tags"); a.forEach((g) => u.append(el("li", "", g))); return u; };

function card(x) {
  const c = el(x.id ? "a" : "div", "card");
  if (x.id) c.href = T.dir + "/" + x.id + "/";
  c.append(el("h3", "", x.title));
  if (meta(x)) c.append(el("p", "meta", meta(x)));
  if (x.summary) c.append(el("p", "sum", x.summary));
  if (!x.id && x.points && x.points.length) { const u = el("ul", "pts"); x.points.forEach((p) => u.append(el("li", "", p))); c.append(u); }
  if (x.tags && x.tags.length) c.append(tags(x.tags));
  if (x.id) c.append(el("span", "more", T.view));
  return c;
}

// Catégories déroulantes, fermées par défaut ; une catégorie vide n’apparaît pas.
function groups(box, cats, items) {
  Object.entries(cats).forEach(([k, label]) => {
    const its = items.filter((x) => x.cat === k);
    if (!its.length) return;
    const d = el("details", "group"), s = el("summary");
    s.append(el("span", "", label), el("span", "count", String(its.length)));
    const ul = el("ul", "rail");
    its.forEach((x) => { const li = el("li"); li.append(card(x)); ul.append(li); });
    d.append(s, ul); box.append(d);
  });
}

// Chaque section est rendue séparément : une erreur n’empêche pas les autres.
function run(sel, f) {
  try { f(); } catch (e) {
    console.error(e);
    $(sel).append(el("p", "sum", "Erreur d’affichage — data.js n’est pas à jour ? / Display error — is data.js up to date?"));
  }
}
run("#exp", () => groups($("#exp"), EXP_CATS, EXPERIENCES));
run("#form", () => groups($("#form"), FORM_CATS, FORMATIONS));
run("#dipl", () => DIPLOMES.forEach((d) => {
  const li = el("li"); li.append(el("b", "", d.title));
  const m = [d.org, d.year].filter(Boolean).join(" — ");
  if (m) li.append(el("p", "meta", m));
  $("#dipl").append(li);
}));
run("#skills", () => SKILLS.forEach(([k, v]) => $("#skills").append(el("dt", "", k), el("dd", "", v))));
