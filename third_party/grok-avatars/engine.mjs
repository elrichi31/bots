var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// ../../../Documents/Codex/2026-11-02/bro/work/grok-integration/chunk-rolldown-runtime-BCiCTKAo.js
var f = ((e) => typeof __require < `u` ? __require : typeof Proxy < `u` ? new Proxy(e, { get: (e2, t) => (typeof __require < `u` ? __require : e2)[t] }) : e)(function(e) {
  if (typeof __require < `u`) return __require.apply(this, arguments);
  throw Error('Calling `require` for "' + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});

// ../../../Documents/Codex/2026-11-02/bro/work/grok-integration/entry.js
var O = { none: 0, equal: 1 / 2, full: 1 };
var Le = class extends Error {
  constructor(e) {
    super(e), this.name = `SandInvariantViolation`;
  }
};
var Re = null;
var Be = `Invariant violation (message stripped in packaged builds; the stack identifies the site)`;
function Ve() {
  return true;
}
var He = /^at /;
function Ue(e) {
  let t = e.stack;
  if (typeof t != `string` || !t.startsWith(We(e))) return null;
  for (let n of t.slice(We(e).length).split(`
`)) {
    let e2 = n.trim();
    if (He.test(e2)) return e2;
  }
  return null;
}
function We(e) {
  return e.message === `` ? e.name : `${e.name}: ${e.message}`;
}
function Ge(e, t) {
  e || Ke(t, Ge);
}
function Ke(e, t) {
  let n;
  n = Ve() ? Be : typeof e == `function` ? e() : e;
  let r = new Le(n), i = null;
  throw `captureStackTrace` in Error && typeof Error.captureStackTrace == `function` && (Error.captureStackTrace(r, t), Re !== null && (i = Ue(r))), Re?.({ name: r.name, frame: i }), r;
}
var qe = [{ tag: `en`, endonym: `English`, englishName: `English`, direction: `ltr` }, { tag: `hi`, endonym: `\u0939\u093F\u0928\u094D\u0926\u0940`, englishName: `Hindi`, direction: `ltr` }, { tag: `zh-CN`, endonym: `\u7B80\u4F53\u4E2D\u6587`, englishName: `Simplified Chinese`, direction: `ltr` }, { tag: `zh-TW`, endonym: `\u7E41\u9AD4\u4E2D\u6587`, englishName: `Traditional Chinese`, direction: `ltr` }, { tag: `pl`, endonym: `Polski`, englishName: `Polish`, direction: `ltr` }, { tag: `es`, endonym: `Espa\xF1ol`, englishName: `Spanish`, direction: `ltr` }, { tag: `pt`, endonym: `Portugu\xEAs (Brasil)`, englishName: `Brazilian Portuguese`, direction: `ltr` }, { tag: `ja`, endonym: `\u65E5\u672C\u8A9E`, englishName: `Japanese`, direction: `ltr` }, { tag: `fr`, endonym: `Fran\xE7ais`, englishName: `French`, direction: `ltr` }, { tag: `ko`, endonym: `\uD55C\uAD6D\uC5B4`, englishName: `Korean`, direction: `ltr` }, { tag: `de`, endonym: `Deutsch`, englishName: `German`, direction: `ltr` }, { tag: `ru`, endonym: `\u0420\u0443\u0441\u0441\u043A\u0438\u0439`, englishName: `Russian`, direction: `ltr` }, { tag: `tr`, endonym: `T\xFCrk\xE7e`, englishName: `Turkish`, direction: `ltr` }, { tag: `ar`, endonym: `\u0627\u0644\u0639\u0631\u0628\u064A\u0629`, englishName: `Arabic`, direction: `rtl` }, { tag: `it`, endonym: `Italiano`, englishName: `Italian`, direction: `ltr` }, { tag: `sv`, endonym: `Svenska`, englishName: `Swedish`, direction: `ltr` }, { tag: `uk`, endonym: `\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430`, englishName: `Ukrainian`, direction: `ltr` }, { tag: `nl`, endonym: `Nederlands`, englishName: `Dutch`, direction: `ltr` }, { tag: `el`, endonym: `\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC`, englishName: `Greek`, direction: `ltr` }, { tag: `af`, endonym: `Afrikaans`, englishName: `Afrikaans`, direction: `ltr` }, { tag: `he`, endonym: `\u05E2\u05D1\u05E8\u05D9\u05EA`, englishName: `Hebrew`, direction: `rtl` }, { tag: `vi`, endonym: `Ti\u1EBFng Vi\u1EC7t`, englishName: `Vietnamese`, direction: `ltr` }, { tag: `id`, endonym: `Bahasa Indonesia`, englishName: `Indonesian`, direction: `ltr` }, { tag: `ur`, endonym: `\u0627\u0631\u062F\u0648`, englishName: `Urdu`, direction: `rtl` }, { tag: `th`, endonym: `\u0E44\u0E17\u0E22`, englishName: `Thai`, direction: `ltr` }, { tag: `bn`, endonym: `\u09AC\u09BE\u0982\u09B2\u09BE`, englishName: `Bengali`, direction: `ltr` }, { tag: `cs`, endonym: `\u010Ce\u0161tina`, englishName: `Czech`, direction: `ltr` }, { tag: `hu`, endonym: `Magyar`, englishName: `Hungarian`, direction: `ltr` }, { tag: `nb`, endonym: `Norsk bokm\xE5l`, englishName: `Norwegian Bokm\xE5l`, direction: `ltr` }, { tag: `da`, endonym: `Dansk`, englishName: `Danish`, direction: `ltr` }, { tag: `fi`, endonym: `Suomi`, englishName: `Finnish`, direction: `ltr` }, { tag: `mr`, endonym: `\u092E\u0930\u093E\u0920\u0940`, englishName: `Marathi`, direction: `ltr` }, { tag: `te`, endonym: `\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41`, englishName: `Telugu`, direction: `ltr` }, { tag: `sw`, endonym: `Kiswahili`, englishName: `Swahili`, direction: `ltr` }, { tag: `ha`, endonym: `Hausa`, englishName: `Hausa`, direction: `ltr` }, { tag: `ta`, endonym: `\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD`, englishName: `Tamil`, direction: `ltr` }, { tag: `pt-PT`, endonym: `Portugu\xEAs (Portugal)`, englishName: `European Portuguese`, direction: `ltr` }];
var Je = /* @__PURE__ */ qe.map((e) => e.tag);
var Xe = [`system`, ...Je];
var jt = { ".avif": `image/avif`, ".bmp": `image/bmp`, ".gif": `image/gif`, ".ico": `image/x-icon`, ".jpeg": `image/jpeg`, ".jpg": `image/jpeg`, ".png": `image/png`, ".svg": `image/svg+xml`, ".webp": `image/webp` };
var Mt = { ".heic": `image/heic`, ".heif": `image/heif` };
var Nt = { ...jt, ...Mt };
var Ft = { ".m4v": `video/mp4`, ".mov": `video/quicktime`, ".mp4": `video/mp4`, ".ogv": `video/ogg`, ".webm": `video/webm` };
var It = { ".aac": `audio/aac`, ".flac": `audio/flac`, ".m4a": `audio/mp4`, ".mp3": `audio/mpeg`, ".oga": `audio/ogg`, ".ogg": `audio/ogg`, ".opus": `audio/ogg`, ".wav": `audio/wav`, ".weba": `audio/webm` };
var sn = [`blob`, `pebble`, `bean`, `egg`, `squircle`, `tablet`, `capsule`, `cylinder`, `hex`, `gem`, `crystal`, `wedge`, `shield`, `dome`, `arch`, `cloud`, `teardrop`, `leaf`, `square`, `sparkle`, `clover`, `flower`, `heart`, `house`, `star`];
var cn = [{ shape: `pumpkin`, pickerGate: `sand_pumpkin_2026`, pickerColor: `orange` }];
var ln = [...sn, ...cn.map(({ shape: e }) => e)];
var Gn = /* @__PURE__ */ new Set(`txt.text.log.md.markdown.mdx.rst.adoc.tex.json.jsonc.json5.ndjson.csv.tsv.xml.yaml.yml.toml.ini.cfg.conf.env.properties.plist.gradle.html.htm.css.scss.sass.less.svg.js.jsx.mjs.cjs.ts.tsx.mts.cts.py.pyi.rb.go.rs.java.kt.kts.c.h.cc.cpp.cxx.hpp.hh.cs.php.swift.scala.dart.lua.pl.pm.r.sql.graphql.gql.proto.vue.svelte.astro.sh.bash.zsh.fish.bat.ps1.tf.tfvars.dockerfile.diff.patch`.split(`.`));
var Zn = /* @__PURE__ */ new Set(Object.keys(Nt).map((e) => e.slice(1)));
var Qn = /* @__PURE__ */ new Set(Object.keys(Ft).map((e) => e.slice(1)));
var $n = /* @__PURE__ */ new Set(Object.keys(It).map((e) => e.slice(1)));
var mr = (e) => ({ x: e, v: 0, t: e });
var hr = (e, t, n, r) => {
  e.v += (-2 * n * t * e.v - t * t * (e.x - e.t)) * r, e.x += e.v * r, (!Number.isFinite(e.x) || !Number.isFinite(e.v)) && (e.x = e.t, e.v = 0);
};
var gr = 1 / 120;
var _r = (e) => Math.max(1, Math.ceil(e / gr));
var N = (e, t, n) => Math.min(n, Math.max(t, e));
var vr = (e) => e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
var P = (e) => 1 - (1 - e) ** 3;
var yr = (e) => 1 + 2.70158 * (e - 1) ** 3 + 1.70158 * (e - 1) ** 2;
var br = (e) => e * e * (3 - 2 * e);
var xr = [0.42, 0, 0.58, 1];
var Sr = [0.4, 0.06, 0.18, 1];
var Cr = 0.28;
var wr = 0.35;
var Tr = 0.26;
var Er = 4.25 / 60;
var Dr = 2 / 60;
var Or = 1.06;
function kr(e, t, n) {
  let r = 1 - e;
  return 3 * r * r * e * t + 3 * r * e * e * n + e * e * e;
}
function Ar(e, t, n) {
  let r = 1 - e;
  return 3 * r * r * t + 6 * r * e * (n - t) + 3 * e * e * (1 - n);
}
function jr(e, t) {
  let [n, r, i, a] = t, o = e;
  for (let t2 = 0; t2 < 8; t2++) {
    let t3 = kr(o, n, i) - e, r2 = Ar(o, n, i);
    if (Math.abs(t3) < 1e-6 || Math.abs(r2) < 1e-6) break;
    o = Math.min(1, Math.max(0, o - t3 / r2));
  }
  return kr(o, r, a);
}
function Mr(e) {
  let t = Math.min(1, Math.max(0, e));
  return t * t * (3 - 2 * t);
}
function Nr(e, t) {
  let n = Math.min(0.28, (e ? Dr : Er) / Math.max(t, 0.05)), r = (1 - n) * 0.42;
  return { u1: r, u2: r + n };
}
function Pr(e) {
  let t = Math.min(1, Math.max(0, e));
  if (t < 0.7) {
    let e2 = t / 0.7;
    return (1 - (1 - e2) * (1 - e2)) * Or;
  }
  return Or + -0.06000000000000005 * Mr((t - 0.7) / 0.3);
}
function Fr(e, { u1: t, u2: n }) {
  return e < t ? Mr(e / t) : e <= n ? 1 : 1 - Mr((e - n) / Math.max(1e-6, 1 - n));
}
var Ir = Math.PI / 180;
function Lr(e, t) {
  return [e[0] * t[0] - e[1] * t[1] - e[2] * t[2] - e[3] * t[3], e[0] * t[1] + e[1] * t[0] + e[2] * t[3] - e[3] * t[2], e[0] * t[2] - e[1] * t[3] + e[2] * t[0] + e[3] * t[1], e[0] * t[3] + e[1] * t[2] - e[2] * t[1] + e[3] * t[0]];
}
function Rr(e, t) {
  let n = Math.sin(t / 2);
  return [Math.cos(t / 2), e[0] * n, e[1] * n, e[2] * n];
}
function zr(e) {
  let t = Math.hypot(e[0], e[1], e[2], e[3]) || 1;
  return [e[0] / t, e[1] / t, e[2] / t, e[3] / t];
}
function Br(e, t) {
  return zr([1 + (e[0] * t[0] + e[1] * t[1] + e[2] * t[2]), e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]);
}
function Vr(e) {
  let [t, n, r, i] = e;
  return [1 - 2 * (r * r + i * i), 2 * (n * r - t * i), 2 * (n * i + t * r), 2 * (n * r + t * i), 1 - 2 * (n * n + i * i), 2 * (r * i - t * n), 2 * (n * i - t * r), 2 * (r * i + t * n), 1 - 2 * (n * n + r * r)];
}
function Hr(e, t, n) {
  return Lr(Rr([0, 0, 1], n), Lr(Rr([0, 1, 0], t), Rr([1, 0, 0], e)));
}
function Ur(e) {
  let t = e[0], n = e[3], r = e[5], i = e[4], a = e[6], o = e[7], s2 = e[8], c = Math.max(-1, Math.min(1, -a)), l = Math.asin(c);
  return Math.abs(c) > 0.999999 ? [Math.atan2(-r, i), l, 0] : [Math.atan2(o, s2), l, Math.atan2(n, t)];
}
function Wr(e) {
  return Ur(Vr(e));
}
function Gr(e, t) {
  return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2], e[3] * t[0] + e[4] * t[1] + e[5] * t[2], e[6] * t[0] + e[7] * t[1] + e[8] * t[2]];
}
var Kr = 0.1305;
var qr = [{ A: [0.01722, 0.45638, 0.88962], B: [0.186, 0.20949, 0.95996], N: [0.82924, 0.4906, -0.26773] }, { A: [0.48863, 0.67924, 0.54762], B: [0.65674, 0.43195, 0.61815], N: [0.60389, 0.18972, -0.77416] }];
function Jr(e) {
  let t = Math.hypot(e[0], e[1], e[2]) || 1;
  return [e[0] / t, e[1] / t, e[2] / t];
}
var Yr = /* @__PURE__ */ (() => {
  let e = [0, 0, 0];
  for (let { A: t, B: n } of qr) {
    let r = Jr([t[0] + n[0], t[1] + n[1], t[2] + n[2]]);
    e = [e[0] + r[0], e[1] + r[1], e[2] + r[2]];
  }
  return Jr(e);
})();
var Xr = /* @__PURE__ */ (() => {
  let e = Br(Yr, [0, 0, 1]), t = Vr(e), n = 0, r = 0;
  for (let { A: e2, B: i } of qr) {
    let a = Gr(t, [i[0] - e2[0], i[1] - e2[1], i[2] - e2[2]]);
    n += a[0], r += a[1];
  }
  return Lr(Rr([0, 0, 1], ((Math.PI / 2 - Math.atan2(r, n) + Math.PI / 2) % Math.PI + Math.PI) % Math.PI - Math.PI / 2), e);
})();
var Zr = /* @__PURE__ */ (() => {
  let e = Vr(Xr);
  return qr.map(({ A: t, B: n, N: r }) => ({ A: Gr(e, t), B: Gr(e, n), N: Gr(e, r) }));
})();
var Qr = [Xr[0], -Xr[1], -Xr[2], -Xr[3]];
var $r = /* @__PURE__ */ (() => {
  let e = ({ A: e2, B: t2 }) => {
    let n2 = Jr([e2[0] + t2[0], e2[1] + t2[1], e2[2] + t2[2]]), r = t2[0] * n2[0] + t2[1] * n2[1] + t2[2] * n2[2], i = Jr([t2[0] - r * n2[0], t2[1] - r * n2[1], t2[2] - r * n2[2]]);
    i[1] < 0 && (i = [-i[0], -i[1], -i[2]]);
    let a = [n2[1] * i[2] - n2[2] * i[1], n2[2] * i[0] - n2[0] * i[2], n2[0] * i[1] - n2[1] * i[0]];
    return a[0] * n2[0] < 0 && (a = [-a[0], -a[1], -a[2]]), { M: n2, T: i, C: a };
  }, [t, n] = Zr;
  if (t == null || n == null) throw Error(`Motion Lab defines exactly two eye capsules`);
  return [e(t), e(n)];
})();
var ei = /* @__PURE__ */ `sphere.cloud.square.sparkle.clover.heartChubby.starFlower.teardrop.tablet.wedge.house.star6.pebble.bean.egg.squircle.capsule.cylinder.hex.gem.crystal.shield.dome.arch.leaf.pumpkin`.split(`.`);
var ti = /* @__PURE__ */ new Set([`pumpkin`]);
var ni = [`neutral`, `happy`, `surprised`, `sad`, `sleepy`, `squinted`, `calm`, `inspecting`, `confused`];
var ri = 0.26;
var ii = 18;
var ai = /* @__PURE__ */ new Map([[`thinking`, `sad`], [`strange`, `inspecting`], [`angry`, `neutral`], [`inspect`, `inspecting`], [`squint`, `squinted`], [`idle`, `neutral`], [`smile`, `happy`], [`sleep`, `sleepy`]]);
var oi = /* @__PURE__ */ new Set([`sad`, `happy`, `confused`, `squinted`, `sleepy`]);
function si(e, t) {
  return [e[t * 6], e[t * 6 + 1]];
}
function ci(e, t, n) {
  let r = n ? 4 : 2;
  return [e[t * 6] + e[t * 6 + r], e[t * 6 + 1] + e[t * 6 + r + 1]];
}
function li(e) {
  let t = [], n = (e2, n2, r, i, a) => {
    for (let o = a; o < 11; o++) {
      let a2 = o / 10, s2 = 1 - a2, c = s2 * s2 * s2, l = 3 * s2 * s2 * a2, u = 3 * s2 * a2 * a2, d = a2 * a2 * a2;
      t.push([c * e2[0] + l * n2[0] + u * r[0] + d * i[0], c * e2[1] + l * n2[1] + u * r[1] + d * i[1]]);
    }
  };
  return n(si(e, 0), ci(e, 0, true), ci(e, 1, false), si(e, 1), 0), n(si(e, 1), ci(e, 1, true), ci(e, 2, false), si(e, 2), 1), t;
}
function ui({ p0: e, p1: t, p2: n, isArc: r }) {
  let [i, a] = e, [o, s2] = t, [c, l] = n, u = Array(ii).fill(0), d = (e2, t2) => {
    u[e2 * 6] = t2[0], u[e2 * 6 + 1] = t2[1];
  }, f2 = (e2, t2) => {
    u[e2 * 6 + 2] = t2[0] - u[e2 * 6], u[e2 * 6 + 3] = t2[1] - u[e2 * 6 + 1];
  }, p = (e2, t2) => {
    u[e2 * 6 + 4] = t2[0] - u[e2 * 6], u[e2 * 6 + 5] = t2[1] - u[e2 * 6 + 1];
  };
  if (r) {
    let e2 = 2 * (i * (s2 - l) + o * (l - a) + c * (a - s2));
    if (Math.abs(e2) > 1e-9) {
      let t3 = i * i + a * a, n2 = o * o + s2 * s2, r2 = c * c + l * l, m2 = (t3 * (s2 - l) + n2 * (l - a) + r2 * (a - s2)) / e2, h2 = (t3 * (c - o) + n2 * (i - c) + r2 * (o - i)) / e2, g2 = Math.hypot(i - m2, a - h2), _ = Math.atan2(a - h2, i - m2), v = Math.atan2(l - h2, c - m2), y = Math.atan2(s2 - h2, o - m2), b = Math.PI * 2, x = (v - _ + b) % b, S = (y - _ + b) % b <= x ? x : x - b, C = (e3) => [m2 + g2 * Math.cos(e3), h2 + g2 * Math.sin(e3)], w = (e3) => [-Math.sin(e3), Math.cos(e3)], T = S / 2, E = 4 / 3 * Math.tan(T / 4) * g2, D = [_, _ + T, _ + S];
      for (let e3 = 0; e3 < 3; e3++) {
        let t4 = C(D[e3]), n3 = w(D[e3]);
        d(e3, t4), e3 > 0 && f2(e3, [t4[0] - E * n3[0], t4[1] - E * n3[1]]), e3 < 2 && p(e3, [t4[0] + E * n3[0], t4[1] + E * n3[1]]);
      }
      return u;
    }
    let t2 = [(i + c) / 2, (a + l) / 2];
    return d(0, [i, a]), d(1, t2), d(2, [c, l]), p(0, [i + (t2[0] - i) / 3, a + (t2[1] - a) / 3]), f2(1, [t2[0] - (t2[0] - i) / 3, t2[1] - (t2[1] - a) / 3]), p(1, [t2[0] + (c - t2[0]) / 3, t2[1] + (l - t2[1]) / 3]), f2(2, [c - (c - t2[0]) / 3, l - (l - t2[1]) / 3]), u;
  }
  let m = [(i + o) / 2, (a + s2) / 2], h = [(o + c) / 2, (s2 + l) / 2], g = [(m[0] + h[0]) / 2, (m[1] + h[1]) / 2];
  return d(0, [i, a]), d(1, g), d(2, [c, l]), p(0, [i + 2 / 3 * (m[0] - i), a + 2 / 3 * (m[1] - a)]), f2(1, [g[0] + 2 / 3 * (m[0] - g[0]), g[1] + 2 / 3 * (m[1] - g[1])]), p(1, [g[0] + 2 / 3 * (h[0] - g[0]), g[1] + 2 / 3 * (h[1] - g[1])]), f2(2, [c + 2 / 3 * (h[0] - c), l + 2 / 3 * (h[1] - l)]), u;
}
function di(e, t, n, r, i) {
  let a = ui(r);
  return { off: e, tilt: t, wid: n, lidY: 1, oval: i, ovalMix: 0, pts: li(a), path: a, fillRing: null };
}
function fi(e, t, n, r, i) {
  let a = Math.max(0, (t - e) / 2), o = n * Math.PI / 180, s2 = Math.sin(o) * a, c = Math.cos(o) * a;
  return di(r, i, e / 2, { p0: [-s2, -c], p1: [0, 0], p2: [s2, c], isArc: false }, [0, 0]);
}
function pi(e, t, n, r) {
  return fi(e, t, n, [r, 0], 0);
}
function mi(e, t, n) {
  let r = { p0: [-e, 0], p1: [0, 0], p2: [e, 0], isArc: false };
  return di([n, 0], 0, t, r, [e, t]);
}
function hi(e) {
  return [e, e];
}
var gi = { neutral: hi(pi(ri, 0.57, 0, 0)), happy: hi(di([0.03, 0.03], 0, Kr, { p0: [0.16, -0.04], p1: [0, 0.12], p2: [-0.16, -0.04], isArc: true }, [0, 0])), surprised: hi(pi(0.42, 0.86, 0, 0.03)), inspecting: [pi(0.54, 0.54, 0, 0.04), pi(0.36, 0.36, 0, 0.04)], sad: hi(pi(ri, 0.5, -28, -0.05)), sleepy: hi(di([0.01, 0], 0, ri / 2, { p0: [-0.11, 0.025], p1: [0, -0.05], p2: [0.11, 0.025], isArc: false }, [0, 0])), squinted: hi(pi(ri, 0.5, 90, 0.01)), calm: hi(mi(0.296, 0.247, 0.05)), confused: hi(di([-0.1, 0], 0, Kr, { p0: [0.01, 0.16], p1: [-0.17, 0], p2: [0.01, -0.16], isArc: false }, [0, 0])) };
function _i(e) {
  return ni.some((t) => t === e);
}
function vi(e) {
  let t = e.trim().toLowerCase(), n = ai.get(t) ?? t;
  return _i(n) ? n : `neutral`;
}
function yi(e) {
  return oi.has(e);
}
function bi(e) {
  return !yi(e) && !gi[e].some(Si);
}
function F(e, t) {
  return [t(e[0], 0), t(e[1], 1)];
}
function xi(e) {
  return { ...e, ovalMix: 0 };
}
function Si(e) {
  return e.oval[0] > 1e-4 && e.oval[1] > 1e-4;
}
function Ci(e) {
  if (Si(e) || e.pts.length < 3) return false;
  let t = e.pts[0], n = e.pts[e.pts.length - 1], r = n[0] - t[0], i = n[1] - t[1], a = r * r + i * i;
  if (a < 1e-8) return false;
  let o = 0;
  for (let n2 of e.pts) {
    let e2 = ((n2[0] - t[0]) * r + (n2[1] - t[1]) * i) / a, s2 = t[0] + e2 * r, c = t[1] + e2 * i, l = Math.hypot(n2[0] - s2, n2[1] - c);
    l > o && (o = l);
  }
  return o > Math.max(0.012, e.wid * 0.2);
}
var wi = 0.03;
var Ti = 0.42;
var Ei = 20;
function Di(e, t, n) {
  return e + (t - e) * n;
}
function Oi(e, t, n) {
  return [Di(e[0], t[0], n), Di(e[1], t[1], n)];
}
function ki(e, t, n) {
  if (e.length === 0) return [0, 0];
  if (e.length === 1 || n <= 1) return e[0];
  let r = t / (n - 1) * (e.length - 1), i = Math.min(Math.floor(r), e.length - 2);
  return Oi(e[i], e[i + 1], r - i);
}
function Ai(e, t, n) {
  let r = { off: Oi(e.off, t.off, n), tilt: Di(e.tilt, t.tilt, n), wid: Di(e.wid, t.wid, n), lidY: Di(e.lidY, t.lidY, n), oval: Oi(e.oval, t.oval, n), ovalMix: 0, fillRing: null };
  if (e.path && t.path && e.path.length === t.path.length) {
    let i2 = t.path, a2 = e.path.map((e2, t2) => Di(e2, i2[t2], n));
    return { ...r, path: a2, pts: li(a2) };
  }
  let i = Math.max(e.pts.length, t.pts.length, 2), a = [];
  for (let r2 = 0; r2 < i; r2++) a.push(Oi(ki(e.pts, r2, i), ki(t.pts, r2, i), n));
  return { ...r, path: null, pts: a };
}
function ji(e) {
  if (Si(e)) {
    let [t2, n2] = e.oval;
    return { cx: e.off[0], cy: e.off[1], ang: t2 >= n2 ? Math.PI / 2 : 0, halfLen: Math.max(t2, n2), halfW: Math.min(t2, n2) };
  }
  let t = e.wid;
  if (e.pts.length < 2) return { cx: e.off[0], cy: e.off[1], ang: e.tilt, halfLen: t, halfW: t };
  let n = e.pts[0], r = e.pts[e.pts.length - 1];
  return { cx: e.off[0] + (n[0] + r[0]) / 2, cy: e.off[1] + (n[1] + r[1]) / 2, ang: Math.atan2(r[0] - n[0], r[1] - n[1]) + e.tilt, halfLen: Math.hypot(r[0] - n[0], r[1] - n[1]) / 2 + t, halfW: t };
}
function Mi(e, t) {
  let n = t.ang - e.ang;
  for (; n > Math.PI / 2; ) n -= Math.PI;
  for (; n < -Math.PI / 2; ) n += Math.PI;
  return n;
}
function Ni(e, t, n) {
  let r = Math.max(0, e - t), i = Math.max(0, Math.min(1, n)), a = [];
  for (let n2 = 0; n2 < 48; n2++) {
    let o = n2 / 48 * Math.PI * 2, s2 = Math.cos(o), c = Math.sin(o), l = t * s2, u = e * c, d = t / Math.max(Math.abs(s2), 1e-6), f2;
    if (d * Math.abs(c) <= r + 1e-6 && Number.isFinite(d)) f2 = d;
    else {
      let e2 = (c >= 0 ? 1 : -1) * r * c, n3 = Math.max(0, e2 * e2 - r * r + t * t);
      f2 = e2 + Math.sqrt(n3);
    }
    let p = f2 * s2, m = f2 * c;
    a.push([p + (l - p) * i, m + (u - m) * i]);
  }
  return a;
}
function Pi(e, t, n, r) {
  return fi(Math.max(e, 1e-4), Math.max(t, e), 0, r, n);
}
function Fi(e, t, n) {
  if (n <= 1e-4) return xi(e);
  if (n >= 0.995) return xi(t);
  let r = ji(e), i = ji(t), a = Mi(r, i), o = Si(t), s2 = o ? 1 - (1 - n) ** 3 : n * n * n, c = r.ang + a * n, l = Math.max(r.halfLen + (i.halfLen - r.halfLen) * n, 1e-4), u = Math.max(r.halfW + (i.halfW - r.halfW) * n, 1e-4), d = +!!Si(e), f2 = d + (+!!o - d) * s2, p = Pi(2 * u, 2 * l, c, [r.cx + (i.cx - r.cx) * n, r.cy + (i.cy - r.cy) * n]), m = f2 > 1e-4;
  return { ...p, oval: m ? [u, l] : p.oval, ovalMix: m ? f2 : 0, fillRing: Ni(l, u, f2) };
}
function Ii(e, t, n) {
  if (n >= 0.9999) return xi(t);
  let r = ji(e), i = ji(t), a = r.ang + Mi(r, i) * n, o = Math.max(1e-4, r.halfW + (i.halfW - r.halfW) * n), s2 = Math.max(0, r.halfLen - r.halfW) * (1 - n) + Math.max(0, i.halfLen - i.halfW) * n, c = [r.cx + (i.cx - r.cx) * n, r.cy + (i.cy - r.cy) * n];
  return fi(2 * o, 2 * (s2 + o), a * 180 / Math.PI, c, 0);
}
function Li(e) {
  let t = Si(e);
  if (!(e.wid > 0) && !t) return null;
  let n = e.lidY, r = e.tilt * (180 / Math.PI);
  if (t) return { width: 2 * e.oval[0], height: 2 * e.oval[1] * n, tilt: r, cx: e.off[0], cy: e.off[1] };
  if (e.pts.length < 2) return null;
  let i = e.pts[0], a = e.pts[e.pts.length - 1], o = a[0] - i[0], s2 = a[1] - i[1], c = Math.hypot(o, s2), l = 2 * e.wid;
  return { width: l, height: (c + l) * n, tilt: 180 / Math.PI * Math.atan2(o, s2) + r, cx: e.off[0] + (i[0] + a[0]) / 2, cy: e.off[1] + (i[1] + a[1]) / 2 * n };
}
function Ri(e) {
  let t = Li(e);
  if (t == null) return { w: ri, h: 0.57, cx: e.off[0], cy: e.off[1] };
  let n = t.tilt * Math.PI / 180, r = Math.abs(Math.cos(n)), i = Math.abs(Math.sin(n));
  return { w: t.width * r + t.height * i, h: t.width * i + t.height * r, cx: t.cx, cy: t.cy };
}
function zi(e, t, n, r) {
  return t >= e ? Pi(e, t, 0, [n, r]) : Pi(t, e, Math.PI / 2, [n, r]);
}
function Bi(e, t) {
  if (t <= 0) return e;
  let n = Math.min(1, t), r = Ri(e), i = Math.max(r.w, 1e-4), a = Math.max(r.h, i);
  return zi(i, a + (i * Ti - a) * n, r.cx, r.cy);
}
function Vi(e) {
  return { ...e, wid: 0, oval: [0, 0] };
}
function Hi(e) {
  let t, n;
  if (Si(e)) t = -e.oval[1], n = e.oval[1];
  else {
    let r = 1e9, i = -1e9;
    for (let t2 of e.pts) t2[1] < r && (r = t2[1]), t2[1] > i && (i = t2[1]);
    t = r - e.wid, n = i + e.wid;
  }
  return t + 0.4 * (n - t);
}
function Ui(e) {
  if (e.pts.length < 2) return e;
  let t = e.pts[0], n = e.pts[e.pts.length - 1], r = n[0] - t[0], i = n[1] - t[1];
  if (Math.abs(i) < Math.abs(r)) return e;
  let a = Math.atan2(r, i);
  if (Math.abs(a) < 1e-5) return e;
  let o = Math.cos(a), s2 = Math.sin(a);
  return { ...e, tilt: e.tilt + a, pts: e.pts.map((e2) => [e2[0] * o - e2[1] * s2, e2[0] * s2 + e2[1] * o]) };
}
function Wi(e, t) {
  if (t === 0) return e;
  let n = Ui(e), r = Math.max(wi, 1 - t), i = Hi(n) * (1 - r), a = Math.cos(-n.tilt), o = Math.sin(-n.tilt);
  return { ...n, off: [n.off[0] - o * i, n.off[1] + a * i], lidY: n.lidY * r };
}
function Gi(e, t, n, r) {
  if (t < 1e-3) return e;
  let i = n.isFollowingTurn ? Math.min(1, Math.max(-1, r / Ei)) : n.bias, [a, o] = gi.inspecting, s2 = Math.max(1e-4, a.wid), c = Math.max(1e-4, o.wid), l = (1 + i) / 2, u = (e2, n2) => {
    let r2 = 1 + (n2 - 1) * t;
    return { ...xi(e2), wid: e2.wid * r2, pts: e2.pts.map((e3) => [e3[0] * r2, e3[1] * r2]) };
  };
  return [u(e[0], (c / s2) ** +l), u(e[1], (s2 / c) ** +l)];
}
function Ki(e) {
  return +(e === `inspecting`);
}
function qi(e, t, n) {
  return !(e.some(Ci) || t.some(Ci)) && (e.some(Si) || t.some(Si)) ? `oval` : n ? `spine` : `stadium`;
}
function Ji(e) {
  return jr(Math.min(Math.max(e.t / e.dur, 0), 1), Sr);
}
function Yi() {
  let e = `neutral`, t = F(gi.neutral, xi), n = 0, r = null, i = () => {
    if (r == null) return t;
    if (r.kind === `blink`) return r.from;
    if (r.kind === `morph`) {
      let e3 = Math.max(0, Math.min(1, Ji(r))), { from: t2, to: n3, path: i3 } = r;
      return i3 === `oval` ? F(t2, (t3, r2) => Fi(t3, n3[r2], e3)) : i3 === `spine` ? F(t2, (t3, r2) => Ai(t3, n3[r2], e3)) : F(t2, (t3, r2) => Ii(t3, n3[r2], e3));
    }
    let e2 = Math.min(r.t / r.dur, 1), { u1: n2, u2: i2 } = Nr(false, r.dur);
    if (e2 < n2) return F(r.from, (t2) => Wi(t2, Mr(e2 / n2)));
    if (e2 <= i2) return F(r.to, Vi);
    let a2 = Pr((e2 - i2) / Math.max(1e-6, 1 - i2));
    return F(r.to, (e3) => Wi(e3, 1 - a2));
  }, a = () => {
    if (r == null) return n;
    if (r.kind === `blink`) return r.fromInspect;
    let e2 = r.fromInspect, t2 = Ki(r.toName);
    if (r.kind === `morph`) return e2 + (t2 - e2) * Ji(r);
    let i2 = Math.min(r.t / r.dur, 1), { u1: a2, u2: o2 } = Nr(false, r.dur);
    return i2 <= a2 ? e2 : i2 < o2 ? 0 : t2;
  }, o = (t2) => {
    let n2 = F(i(), xi), o2 = gi[t2];
    r = { kind: `morph`, path: qi(n2, o2, n2.some(Ci) || o2.some(Ci) || e === `sleepy` || t2 === `sleepy`), fromInspect: a(), toName: t2, from: n2, to: o2, t: 0, dur: Cr, isHeld: false }, e = t2;
  }, s2 = (t2) => {
    r = { kind: `lidMorph`, fromInspect: a(), toName: t2, from: F(i(), xi), to: gi[t2], t: 0, dur: wr, isHeld: false }, e = t2;
  }, c = () => {
    (r == null || r.isHeld) && (r = { kind: `blink`, fromInspect: n, toName: e, from: F(t, xi), to: gi[e], t: 0, dur: Tr, isHeld: false });
  }, l = (t2) => {
    (t2.name !== e || r != null && r.toName !== t2.name) && (t2.isThroughBlink && !yi(t2.name) && !yi(e) ? s2(t2.name) : o(t2.name));
  }, u = (e2, i2) => {
    i2 >= e2.dur ? (t = F(e2.to, xi), n = Ki(e2.toName), r = null) : r = i2 < 0 ? null : { ...e2, t: i2 };
  }, d = (e2) => {
    r != null && (r = { ...r, isHeld: e2 });
  };
  return { get name() {
    return e;
  }, get isMorphing() {
    return r != null && r.kind !== `blink` && !r.isHeld;
  }, eyes: i, inspectWeight: a, blinkAmount() {
    if (r?.kind !== `blink` || r.isHeld) return null;
    let e2 = Math.min(r.t / r.dur, 1);
    return Math.min(1, Math.max(0, Fr(e2, Nr(true, r.dur))));
  }, morph: o, lidMorph: s2, blink: c, play: l, step(e2) {
    r != null && !r.isHeld && u(r, r.t + e2);
  }, release() {
    d(false);
  }, seek(i2, a2) {
    e = `neutral`, t = F(gi.neutral, xi), n = 0, r = null;
    let o2 = 0, s3 = (e2) => {
      r != null && u(r, e2 - o2);
    };
    for (let e2 of i2) {
      if (e2.t > a2 + 1e-9) break;
      s3(e2.t), l(e2), o2 = e2.t;
    }
    s3(a2), d(true);
  } };
}
var Zi = 0.9;
var Qi = 0.4;
var $i = 0.62;
var ea = 0.3;
var ta = 0.5;
var na = 16;
function ra({ poke: e, turns: t }) {
  switch (e) {
    case `spin`:
      return Zi + Qi * (t - 1);
    case `bounce`:
      return $i;
    case `nod`:
      return ta;
    default:
      throw Error(`Unhandled case: ${String(e)}`);
  }
}
function ia(e) {
  let t = 0, n = 0, r = 0, i = 1, a = 1;
  for (let o of e) {
    let e2 = Math.min(1, o.t / ra(o));
    switch (o.poke) {
      case `spin`:
        n += 180 * o.turns * (1 - Math.cos(Math.PI * e2));
        break;
      case `nod`:
        t += na * aa(e2, 0, 1);
        break;
      case `bounce`: {
        let t2 = aa(e2, 0, 0.18) + aa(e2, 0.82, 1), n2 = aa(e2, 0.18, 0.82);
        r += ea * Math.sin(Math.PI * N((e2 - 0.14) / 0.72, 0, 1)), i *= 1 + 0.08 * t2 - 0.04 * n2, a *= 1 - 0.1 * t2 + 0.06 * n2;
        break;
      }
    }
  }
  return { pitch: t, yaw: n, lift: r, squash: [i, a] };
}
function aa(e, t, n) {
  return e <= t || e >= n ? 0 : Math.sin(Math.PI * (e - t) / (n - t)) ** 2;
}
var oa = 1 / 60;
var sa = 0.55;
var ca = { heartChubby: 0.6, wedge: 0.55 };
function ua(e) {
  return 1 - 0.86 ** (e / oa);
}
function da(e, t, n) {
  let r = e !== `sphere`, i = ca[e] ?? 1;
  return { rx: -(r ? 19 : 14) * i * n, ry: (r ? 26 : 18) * i * t, px: (r ? 0.07 : 0.03) * t, py: (r ? 0.055 : 0.024) * n };
}
var pa = { thinking: `dots`, orbit: `orbit`, radar: `radar`, progress: `progress`, spawning: `gather`, dictating: `wave`, sending: `send`, receiving: `receive`, uploading: `dock`, bouncing: `ball`, writing: `pencil`, alerting: `bang`, "powering-down": `standby` };
var ma = Math.PI;
var ha = 0.1;
var ga = 2654435769;
var _a = /* @__PURE__ */ new Set([`progress`, `spawning`]);
var va = { progress: 2.5, spawning: 2 };
var ya = 1.5;
function ba(e) {
  let t = e | 0;
  return () => {
    t = t + 1831565813 | 0;
    let e2 = Math.imul(t ^ t >>> 15, t | 1);
    return e2 ^= e2 + Math.imul(e2 ^ e2 >>> 7, e2 | 61), ((e2 ^ e2 >>> 14) >>> 0) / 4294967296;
  };
}
function xa(e) {
  return va[e] ?? 2.5;
}
function Sa(e = {}) {
  let t = e.isReducedMotion ?? false, n = ba(e.seed ?? ga), r = mr(0), i = mr(1), a = mr(0), o = null, s2 = null, c = null, l = null, u = false, d = 0, f2 = 0, p = 1, m = false, h = 0, g = 0, _ = 0, v = 0, y = 0, b = () => {
    let e2 = o == null ? null : pa[o], b2 = _;
    o !== s2 && (s2 = o, o != null && (_ = h, u = false));
    let x = e2 != null;
    o != null && _a.has(o) && (!u && h - _ > xa(o) ? (u = true, d = h) : u && h - d > ya && (u = false, _ = h), x = !u), r.t = +!!x, e2 != null && e2 !== c && (c != null && r.x > 0.02 ? (l = c, v = g, y = b2, i.x = +!!t) : (l = null, i.x = 1), i.v = 0, i.t = 1, c = e2, g = h), e2 == null && r.x < 4e-3 && (c = null, l = null), i.x > 0.996 && (l = null), x !== m && (x && !t && (p = n() < 0.5 ? 1 : -1), t || (f2 += ma * p, a.t = f2), m = x);
  };
  return { get target() {
    return o;
  }, set(e2) {
    o = e2;
  }, advance(e2) {
    let n2 = e2 > 0 ? Math.min(e2, ha) : 0;
    h += n2, b();
    let o2 = _r(n2), s3 = n2 / o2;
    for (let e3 = 0; e3 < o2; e3++) hr(r, 14, 1, s3), hr(i, 11, 1, s3), hr(a, 14, 1, s3);
    t && (i.x = 1, a.x = a.t, r.x = r.t);
  }, settle() {
    b();
    for (let e2 of [r, i, a]) e2.x = e2.t, e2.v = 0;
    b();
  }, snapshot() {
    return { amount: N(r.x, 0, 1), spin: a.x, kind: c, outgoing: l, swap: N(i.x, 0, 1), clock: { stateTime: h - g, shotTime: h - _ }, outgoingClock: { stateTime: h - v, shotTime: h - y }, isReducedMotion: t, isSettled: Math.abs(r.x - r.t) < 1e-3 && Math.abs(a.t - a.x) < 0.01 && i.x > 0.996 };
  } };
}
var Ca = /* @__PURE__ */ new Map([[`position`, `position`], [`rotation`, `rotation`], [`squash`, `squash`], [`scale`, `zoom`], [`lids`, `lids`], [`expression`, `expression`], [`pos`, `position`], [`rot`, `rotation`], [`scl`, `squash`], [`zoom`, `zoom`], [`expr`, `expression`]]);
var wa = /* @__PURE__ */ new Map([[`blob`, `sphere`], [`sphereWide`, `sphere`], [`arch`, `horseshoe`], [`spark`, `sparkle`], [`star`, `star6`], [`heart`, `heartChubby`], [`hexagon`, `hex`]]);
var Ta = [0.4, 0, 0.2, 1];
var Ea = 0.6;
var Da = /* @__PURE__ */ (() => {
  let [e, t, n] = Wr(Qr);
  return [e / Ir, t / Ir, n / Ir];
})();
var Oa = { duration: 10, body: null, squashAnchor: 0, restTime: 0, inspect: {}, position: [], rotation: [], squash: [], zoom: [], lids: [], expression: [] };
var ka = { ...Oa, rotation: [{ t: 0, v: Da, ease: xr }] };
function Aa(e) {
  return ei.some((t) => t === e);
}
function ja(e) {
  let t = wa.get(e) ?? e;
  return Aa(t) ? t : `sphere`;
}
function Ma(e) {
  return e != null && e.length === 4;
}
function Na({ t: e, v: t, ease: n }) {
  return { t: e, v: typeof t == `string` ? [] : t, ease: Ma(n) ? n : xr };
}
function Pa(e) {
  return [{ t: e, v: [0], ease: xr }, { t: e + Tr * 0.45, v: [1], ease: xr }, { t: e + Tr, v: [0], ease: xr }];
}
function Fa({ inspect: e }) {
  let t = e?.bias;
  return { bias: t !== void 0 && Number.isFinite(t) ? Math.min(1, Math.max(-1, t)) : void 0, isFollowingTurn: e?.follow };
}
function Ia(e) {
  let t = /* @__PURE__ */ new Map();
  for (let [n2, r2] of Object.entries(e.tracks)) {
    let e2 = Ca.get(n2);
    e2 !== void 0 && t.set(e2, r2);
  }
  let n = (e2) => (t.get(e2) ?? []).map(Na), r = n(`lids`), i = [], a = false;
  for (let e2 of t.get(`expression`) ?? []) e2.v === `blink` ? (a = true, r.push(...Pa(e2.t))) : i.push({ t: e2.t, name: typeof e2.v == `string` ? vi(e2.v) : `neutral`, isThroughBlink: e2.cut === false });
  return a && r.sort((e2, t2) => e2.t - t2.t), { duration: e.duration, body: ja(e.body ?? `sphere`), squashAnchor: e.squashAnchor ?? 0, restTime: e.workArea ? e.workArea.start : 0, inspect: Fa(e), position: n(`position`), rotation: n(`rotation`), squash: n(`squash`), zoom: n(`zoom`), lids: r, expression: i };
}
function La(e, t) {
  if (e.length === 0) return null;
  if (t <= e[0].t) return e[0].v;
  let n = e[e.length - 1];
  if (t >= n.t) return n.v;
  let r = 0;
  for (; r < e.length - 2 && e[r + 1].t <= t; ) r++;
  let i = e[r], a = e[r + 1], o = jr((t - i.t) / Math.max(a.t - i.t, 1e-9), i.ease);
  return i.v.map((e2, t2) => e2 + (a.v[t2] - e2) * o);
}
function Ra(e) {
  let t = e.restTime, n = La(e.rotation, t), r = La(e.position, t), i = La(e.squash, t), a = La(e.zoom, t), o = La(e.lids, t), s2 = `neutral`, c = false;
  for (let n2 of e.expression) c ||= (s2 = n2.name, true), n2.t <= t + 1e-9 && (s2 = n2.name);
  return { rot: n ? [n[0], n[1], n[2]] : [0, 0, 0], pos: r ? [r[0], r[1]] : [0, 0], scl: i ? [i[0], i[1]] : [1, 1], zoom: a ? a[0] : Ea, lids: o ? Math.min(1, Math.max(0, o[0])) : 0, expr: s2, squashAnchor: e.squashAnchor };
}
function za(e, t) {
  return e + 360 * Math.round((t - e) / 360);
}
function Ba(e, t) {
  return Math.abs(((e - t) % 360 + 540) % 360 - 180);
}
function Va(e, t) {
  return Ba(e.rot[0], t.rot[0]) < 4 && Ba(e.rot[1], t.rot[1]) < 4 && Ba(e.rot[2], t.rot[2]) < 4 && Math.abs(e.pos[0] - t.pos[0]) < 0.015 && Math.abs(e.pos[1] - t.pos[1]) < 0.015 && Math.abs(e.scl[0] - t.scl[0]) < 0.02 && Math.abs(e.scl[1] - t.scl[1]) < 0.02 && Math.abs(e.zoom - t.zoom) < 0.02 && Math.abs(e.lids - t.lids) < 0.05;
}
function Ha(e, t) {
  let n = (e2, t2) => [{ t: 0, v: e2, ease: Ta }, { t: wr, v: t2, ease: xr }], r = [za(t.rot[0], e.rot[0]), za(t.rot[1], e.rot[1]), za(t.rot[2], e.rot[2])];
  return { ...Oa, duration: wr, squashAnchor: e.squashAnchor, position: n(e.pos, t.pos), rotation: n(e.rot, r), squash: n(e.scl, t.scl), zoom: n([e.zoom], [t.zoom]), lids: e.lids === 0 && t.lids === 0 ? [] : n([e.lids], [t.lids]) };
}
var Ua = { left: { rot: [0, -20, 0], pos: [-0.1, 0] }, right: { rot: [0, 20, 0], pos: [0.1, 0] }, up: { rot: [-20, 0, 0], pos: [0, 0.1] }, down: { rot: [20, 0, 0], pos: [0, -0.1] }, center: { rot: [0, 0, 0], pos: [0, 0] } };
var Wa = [0.42, 0, 0.58, 1];
var Ga = 0.5;
var Ka = 0.1;
var qa = 10;
var Ja = 1e-4;
var Ya = 0.5;
var Xa = 1e-3;
var Za = `rest`;
function Qa(e) {
  return 360 * Math.round(e / 360);
}
function $a(e, t) {
  let n = `neutral`;
  for (let r of e) {
    if (r.t > t + 1e-9) break;
    n = r.name;
  }
  return n;
}
function eo(e = {}) {
  let t = Math.min(3, Math.max(0.2, e.zoomMul || 1)), n = Yi(), r = e.body ?? `sphere`, i = e.body !== void 0, a = [], o = mr(1), s2 = Sa(), c = null, l = Da, u = [0, 0], d = [1, 1], f2 = 0, p = Ea * t, m = { bias: -1, isFollowingTurn: true }, h = null, g = { isHeld: false, isAlways: e.isGazeAlways ?? false, x: 0, y: 0, cx: 0, cy: 0, hold: 0 }, _ = ka, v = 0, y = false, b = true, x = false, S = null, C = null, w = null, T = 0, E = 0, D = null, O2 = null, ee = false, te = [], ne = () => {
    let e2 = La(_.position, v);
    u = e2 ? [e2[0], e2[1]] : [0, 0];
    let n2 = La(_.rotation, v);
    l = n2 ? [n2[0], n2[1], n2[2]] : [0, 0, 0];
    let r2 = La(_.squash, v);
    d = r2 ? [r2[0], r2[1]] : [1, 1];
    let i2 = La(_.zoom, v);
    i2 && (p = Math.min(2.5, Math.max(0.25, i2[0])) * t);
  }, k = (e2) => {
    (n.blinkAmount() ?? j()) > 0 ? O2 = e2 : (e2(), ae());
  }, re = (e2, t2) => {
    if (D == null) for (let r2 of _.expression) r2.t <= e2 || r2.t > t2 || k(() => n.play(r2));
  }, ie = (e2) => {
    v = e2, h = null, O2 = null, ne(), n.seek(_.expression, e2), D != null && n.seek([{ t: 0, name: D, isThroughBlink: false }], 0);
  }, A = () => {
    let e2 = La(_.lids, v);
    return e2 ? Math.min(1, Math.max(0, e2[0])) : 0;
  }, j = () => ee ? 0 : A(), ae = () => {
    !bi(n.name) || n.isMorphing ? ee = true : ee && A() === 0 && (ee = false);
  }, oe = () => ({ rot: l, pos: u, scl: d, zoom: p / t, lids: j(), expr: n.name, squashAnchor: f2 }), se = (e2) => {
    y = false, _ = e2, v = 0, f2 = e2.squashAnchor, e2.body != null && !i && (r = e2.body), m = { bias: e2.inspect.bias ?? m.bias, isFollowingTurn: e2.inspect.isFollowingTurn ?? m.isFollowingTurn };
  }, ce = (e2) => {
    C = null, se(e2.clip), S = { clip: e2.clip, name: e2.name }, b = true, e2.isPlaying ? (y = true, e2.phase > 0 && ie(e2.phase * e2.clip.duration), n.release(), e2.phase <= 0 && re(-1e-9, 0)) : (ie(0), e2.isRest && (g = { ...g, hold: 0 }));
  }, le = (e2) => {
    let t2 = oe(), r2 = Ra(e2.clip);
    C = e2, se(Ha(t2, r2)), b = false, y = true, D == null && t2.expr !== r2.expr && k(() => n.morph(r2.expr));
  }, ue = () => C != null || S == null || Va(oe(), Ra(S.clip)) ? false : (le({ ...S, isPlaying: true, phase: 0, isRest: false }), true), de = (e2) => {
    let t2 = v, n2 = t2 + e2;
    if (n2 >= _.duration) {
      if (re(t2, _.duration), b) {
        if (E += 1, ue()) return;
        n2 -= _.duration, n2 >= _.duration && (n2 = 0), re(-1e-9, n2), v = n2;
      } else v = _.duration, y = false, C != null && ce(C);
    } else re(t2, n2), v = n2;
    h = null, ne();
  }, fe = (e2, t2, n2) => {
    let r2 = e2 + (t2 - e2) * n2;
    return Math.abs(t2 - r2) < Xa ? t2 : r2;
  }, pe = (e2) => {
    if (x || !g.isHeld && g.hold === 0) return;
    let t2 = ua(e2);
    if (g = { ...g, cx: fe(g.cx, g.x, t2), cy: fe(g.cy, g.y, t2), hold: fe(g.hold, +!!g.isHeld, t2) }, y) return;
    ne();
    let n2 = da(r, g.cx, g.cy), { hold: i2 } = g;
    l = [l[0] + (n2.rx - l[0]) * i2, l[1] + (n2.ry - l[1]) * i2, l[2] * (1 - i2)], u = [u[0] + (n2.px - u[0]) * i2, u[1] + (n2.py - u[1]) * i2];
  }, me = (e2) => {
    if (h == null) return;
    let t2 = h.t + e2, n2 = Math.min(t2 / Ga, 1), r2 = jr(n2, Wa), { fromRot: i2, toRot: a2, fromPos: o2, toPos: s3 } = h;
    l = [i2[0] + (a2[0] - i2[0]) * r2, i2[1] + (a2[1] - i2[1]) * r2, i2[2] + (a2[2] - i2[2]) * r2], u = [o2[0] + (s3[0] - o2[0]) * r2, o2[1] + (s3[1] - o2[1]) * r2], n2 >= 1 ? (l = a2, u = s3, h = null) : h = { ...h, t: t2 };
  }, he = () => {
    if (a.length === 0) return [{ body: r, weight: 1 }];
    let e2 = vr(N(o.x, 0, 1)), t2 = /* @__PURE__ */ new Map();
    for (let n3 of a) t2.set(n3.body, (t2.get(n3.body) ?? 0) + n3.weight * (1 - e2));
    t2.set(r, (t2.get(r) ?? 0) + e2);
    let n2 = [...t2].filter(([, e3]) => e3 > Ja), i2 = n2.reduce((e3, [, t3]) => e3 + t3, 0);
    return n2.map(([e3, t3]) => ({ body: e3, weight: t3 / i2 }));
  }, ge = (e2) => {
    e2 !== r && (a = he(), r = e2, o.x = 0, o.v = 0, o.t = 1);
  }, _e = (e2) => {
    if (a.length === 0) return;
    let t2 = _r(e2);
    for (let n2 = 0; n2 < t2; n2++) hr(o, qa, 1, e2 / t2);
    Math.abs(o.x - 1) < 1e-3 && Math.abs(o.v) < 0.01 && (o.x = 1, o.v = 0, a = []);
  }, ve = () => n.blinkAmount() ?? j(), ye = (e2, t2) => {
    let r2 = Gi(n.eyes(), t2, m, e2), i2 = ve();
    return i2 <= 1e-4 ? r2 : [Bi(r2[0], i2), Bi(r2[1], i2)];
  };
  return { get isPlaying() {
    return y;
  }, get time() {
    return v;
  }, get duration() {
    return _.duration;
  }, get loopCount() {
    return E;
  }, get face() {
    return n.name;
  }, get isSettled() {
    let e2 = x || g.hold === +!!g.isHeld && (!g.isHeld || g.cx === g.x && g.cy === g.y);
    return !y && te.length === 0 && a.length === 0 && h == null && O2 == null && !n.isMorphing && n.blinkAmount() == null && s2.snapshot().isSettled && e2;
  }, load(e2, { isPlaying: t2 = true, transition: n2 = `bridge`, phase: r2 = 0 } = {}) {
    let i2 = e2.name || S?.name || `recipe`, a2 = { clip: Ia(e2), name: i2, isPlaying: t2, phase: N(r2, 0, 1) % 1, isRest: false };
    n2 === `bridge` && S != null && (C != null || S.name !== i2) ? le(a2) : ce(a2);
  }, play() {
    x = false, y = true;
  }, pause() {
    x = true, y = false;
  }, stop() {
    y = false, ie(0);
  }, rest() {
    x = false;
    let e2 = { clip: ka, name: Za, isPlaying: false, phase: 0, isRest: true };
    C == null && (S == null || S.name === Za) ? S ?? ce(e2) : le(e2);
  }, seek: ie, setBody(e2, { isInstant: t2 = false } = {}) {
    i = true, !t2 && !ti.has(e2) && !ti.has(r) ? ge(e2) : (r = e2, a = [], o.x = 1, o.v = 0);
  }, setMorph(e2, { isInstant: t2 = false } = {}) {
    s2.set(e2), t2 && s2.settle();
  }, setExpression(e2, { isThroughBlink: t2 = false } = {}) {
    k(() => {
      t2 && !yi(e2) && !yi(n.name) ? n.lidMorph(e2) : n.morph(e2);
    });
  }, holdFace(e2) {
    e2 !== D && (D = e2, k(() => {
      let e3 = D ?? (C == null ? $a(_.expression, v) : $a(C.clip.expression, 0));
      e3 !== n.name && n.morph(e3);
    }));
  }, poke(e2, { turns: t2 = 1 } = {}) {
    te = [...te, { poke: e2, t: 0, turns: Math.max(1, Math.round(t2)) }];
  }, blink() {
    n.blink();
  }, setInspect({ bias: e2, isFollowingTurn: t2 }) {
    m = { bias: e2 === void 0 ? m.bias : Math.min(1, Math.max(-1, e2)), isFollowingTurn: t2 ?? m.isFollowingTurn };
  }, setGaze(e2) {
    if (e2 == null) {
      g = { ...g, isHeld: false };
      return;
    }
    let t2 = N(e2[0] || 0, -1, 1), n2 = N(e2[1] || 0, -1, 1);
    g = g.hold === 0 ? { ...g, isHeld: true, x: t2, y: n2, cx: t2, cy: n2 } : { ...g, isHeld: true, x: t2, y: n2 };
  }, setGazeAlways(e2) {
    g = { ...g, isAlways: e2 };
  }, look(e2) {
    let t2 = Ua[e2];
    h = { t: 0, fromRot: l, toRot: t2.rot, fromPos: u, toPos: t2.pos };
  }, setGlow(e2) {
    w = e2;
  }, advance(e2) {
    let t2 = Math.min(e2, Ka);
    pe(t2);
    let r2 = 1 - s2.snapshot().amount;
    if (y && de(t2 * r2), me(t2), n.step(t2), O2 != null && (n.blinkAmount() ?? j()) === 0) {
      let e3 = O2;
      O2 = null, e3();
    }
    ae(), _e(t2), te = te.map((e3) => ({ ...e3, t: e3.t + t2 })).filter((e3) => e3.t < ra(e3)), s2.advance(t2);
    let i2 = s2.snapshot();
    i2.amount > 0 || !i2.isSettled ? c ??= [Qa(l[0]), Qa(l[1]), Qa(l[2])] : c = null, T += e2;
  }, frame() {
    let e2 = g.isAlways && y && !x ? da(r, g.cx, g.cy) : null, t2 = sa * g.hold, i2 = ia(te), a2 = [l[0] + (e2 ? e2.rx * t2 : 0) + i2.pitch, l[1] + (e2 ? e2.ry * t2 : 0) + i2.yaw, l[2]], o2 = [u[0] + (e2 ? e2.px * t2 : 0), u[1] + (e2 ? e2.py * t2 : 0) + i2.lift], m2 = [d[0] * i2.squash[0], d[1] * i2.squash[1]], h2 = n.inspectWeight(), _2 = s2.snapshot(), v2 = 1 - _2.amount, b2 = _2.spin % (2 * Math.PI) / Ir, S2 = c ?? [0, 0, 0], C2 = (e3) => S2[e3] + (a2[e3] - S2[e3]) * v2, E2 = C2(1);
    return { body: r, quat: Hr(C2(0) * Ir, (E2 + b2) * Ir, C2(2) * Ir), zoom: p, offset: v2 === 1 ? o2 : [o2[0] * v2, o2[1] * v2], squash: v2 === 1 ? m2 : [1 + (m2[0] - 1) * v2, 1 + (m2[1] - 1) * v2], squashAnchor: f2, eyes: _2.amount >= Ya ? null : ye(E2, h2), glow: w && { ...w, midT: 0.5 + 0.5 * Math.sin(T * 1e3 / 860) }, inspectWeight: h2, bodies: he(), morph: _2.kind === null && _2.isSettled ? null : _2 };
  } };
}
function ro(e) {
  let t = (e2) => Math.round(Math.min(1, Math.max(0, e2)) * 255).toString(16).padStart(2, `0`);
  return `#${t(e[0])}${t(e[1])}${t(e[2])}`;
}
function io(e) {
  return e.inkPaint ?? ro(e.ink);
}
function ao(e) {
  return e.spotPaint ?? ro(e.spot);
}
var oo = [{ name: `Blocked_A`, duration: 2.12, body: `sphere`, squashAnchor: 0, workArea: { start: 0, end: 2.1 }, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0, v: [0, 0], ease: [0.7968976121829217, 0.023358873568246466, 0.25805236576790014, 0.9399472349279558] }, { t: 0.38639855209383034, v: [0.020362603567309623, 0.0321716960933944], ease: [0.7968976121829217, 0.023358873568246466, 0.25805236576790014, 0.9399472349279558] }, { t: 0.7460619029579755, v: [-0.13200621755876568, 0.04928491306786316], ease: [0.16206624605678288, 0.6573718201333453, 0.4776581771164943, 0.9890940068909632] }, { t: 0.8660990266653926, v: [-0.0027221809712659807, 0.05083886406795958], ease: [0.34720720728860055, -0.008777460320222181, 0.2695010548130348, 1.02521711915982] }, { t: 1.0493565888199954, v: [-0.12038936798795193, 0.04235181137057312], ease: [0.2773807176656155, 0.29281356631792965, 0.35341088328075676, 1.0737667821535892] }, { t: 1.2986659810851888, v: [-0.0027221809712659807, 0.05083886406795958], ease: [0.34720720728860055, -0.008777460320222181, 0.2695010548130348, 1.02521711915982] }, { t: 1.7569209127327317, v: [0, 0], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0, v: [0, 0, 0], ease: [0.8199958981940145, -0.1753438779653778, 0.35490544014951186, 0.958837837092147] }, { t: 0.38639855209383034, v: [6.596421550520286, 26.266588805679774, 6.122577979110701], ease: [0.8199958981940145, -0.1753438779653778, 0.35490544014951186, 0.958837837092147] }, { t: 0.7460619029579755, v: [4.03072349953808, -14.070821783965659, -8.088521350792867], ease: [0.16206624605678288, 0.6573718201333453, 0.4776581771164943, 0.9890940068909632] }, { t: 0.8660990266653926, v: [10.306252195330941, 13.969026095064219, 7.524804229298955], ease: [0.34720720728860055, -0.008777460320222181, 0.2695010548130348, 1.02521711915982] }, { t: 1.0493565888199954, v: [8.006914468651756, -9.270764174998455, -8.505309845875193], ease: [0.2773807176656155, 0.29281356631792965, 0.35341088328075676, 1.0737667821535892] }, { t: 1.2986659810851888, v: [10.306252195330941, 13.969026095064219, 7.524804229298955], ease: [0.34720720728860055, -0.008777460320222181, 0.2695010548130348, 1.02521711915982] }, { t: 1.7569209127327317, v: [0, 0, 0], ease: [0.42, 0, 0.58, 1] }], scale: [{ t: 0, v: [0.6], ease: [0.42, 0, 0.06944264684998447, 0.9679740678629829] }, { t: 0.38639855209383034, v: [0.6], ease: [0.42, 0, 0.06944264684998447, 0.9679740678629829] }, { t: 1.1494959879909783, v: [0.5], ease: [0.7910272291113791, -0.026550296201944556, 0.19732842008291107, 1] }, { t: 1.900275655021834, v: [0.6], ease: [0.42, 0, 0.06944264684998447, 0.9679740678629829] }], expression: [{ t: 0.46926065284592233, v: `confused`, ease: [0.42, 0, 0.58, 1] }, { t: 1.606008694397346, v: `neutral`, ease: [0.42, 0, 0.58, 1] }] } }, { name: `Blocked_B`, duration: 3, body: `sphere`, squashAnchor: 0, workArea: { start: 0, end: 3 }, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 1.2593574149757256, v: [0.004259404064870088, -0.22320548763819217], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 1.2593574149757256, v: [22.38040777312499, -0.11374925549943268, -1.3254543924838493], ease: [0.42, 0, 0.58, 1] }], expression: [{ t: 0, v: `sad`, ease: [0.8458217358299596, 0.40487753378378377, 0.13769926619433198, 0.9154349662162162] }] } }, { name: `Blocked_C`, duration: 1.4, body: `sphere`, squashAnchor: 0, workArea: { start: 0, end: 1.3929879324776784 }, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0, v: [-0.10159994888361161, 5766171900318479e-19], ease: [0.42, 0, 0.58, 1] }, { t: 0.6816231863839288, v: [0.06829453998737205, 5766171900318479e-19], ease: [0.42, 0, 0.58, 1] }, { t: 1.3929879324776784, v: [-0.10159994888361161, 5766171900318479e-19], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0, v: [22.100629997955743, -15.657630964434397, -4.681428255949899], ease: [0.42, 0, 0.58, 1] }, { t: 0.6816231863839288, v: [21.919069173693785, 11.388653232575262, 0.7382242020910257], ease: [0.42, 0, 0.58, 1] }, { t: 1.3929879324776784, v: [22.100629997955743, -15.657630964434397, -4.681428255949899], ease: [0.42, 0, 0.58, 1] }], expression: [{ t: 0, v: `sleepy`, ease: [0.8458217358299596, 0.40487753378378377, 0.13769926619433198, 0.9154349662162162] }] } }, { name: `Bodymoves_A`, duration: 5, body: `clover`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0, v: [0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 0.3316869300911854, v: [-0.1, 0], ease: [0.42, 0, 0.58, 1] }, { t: 0.6673157294832825, v: [-0.1, 0], ease: [0.42, 0, 0.58, 1] }, { t: 1, v: [0.1, 0], ease: [0.42, 0, 0.58, 1] }, { t: 1.3356762917933132, v: [0.1, 0], ease: [0.42, 0, 0.58, 1] }, { t: 1.654302811550152, v: [0, 0.1], ease: [0.42, 0, 0.58, 1] }, { t: 2, v: [0, 0.1], ease: [0.42, 0, 0.58, 1] }, { t: 2.329549772036474, v: [0, -0.1], ease: [0.42, 0, 0.58, 1] }, { t: 2.667601683029453, v: [0, -0.1], ease: [0.42, 0, 0.58, 1] }, { t: 2.9985974754558207, v: [0, 0], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0, v: [0, 0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 0.3316869300911854, v: [0, -20, 0], ease: [0.42, 0, 0.58, 1] }, { t: 0.6673157294832825, v: [0, -20, 0], ease: [0.42, 0, 0.58, 1] }, { t: 1, v: [0, 20, 0], ease: [0.42, 0, 0.58, 1] }, { t: 1.3356762917933132, v: [0, 20, 0], ease: [0.42, 0, 0.58, 1] }, { t: 1.654302811550152, v: [-20, 0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 2, v: [-20, 0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 2.329549772036474, v: [20, 0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 2.667601683029453, v: [20, 0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 2.9985974754558207, v: [0, 0, 0], ease: [0.7340521114106021, 0, 0.024581648697214575, 1] }, { t: 4.546161721267454, v: [0, 360, 0], ease: [0.42, 0, 0.58, 1] }] } }, { name: `Done_A`, duration: 3.7, body: `sphere`, squashAnchor: -1, workArea: { start: 0.07228455190755256, end: 2.4415076840284984 }, inspect: { bias: -1, follow: true }, tracks: { expression: [{ t: 0.5404427256792492, v: `happy`, ease: [0.9601942054655871, -0.052470439189189255, 0.20804339574898786, 0.9135346283783784] }, { t: 1.1009640885188103, v: `neutral`, ease: [0.9601942054655871, -0.052470439189189255, 0.20804339574898786, 0.9135346283783784] }], squash: [{ t: 0.026170163234005256, v: [1, 1], ease: [0.42, 0, 0.58, 1] }, { t: 0.1712334301051709, v: [1.095, 0.95], ease: [0.42, 0, 0.58, 1] }, { t: 0.2519479897020158, v: [1, 1.1], ease: [0.42, 0, 0.58, 1] }, { t: 0.5890803023663453, v: [1, 1], ease: [0.42, 0, 0.58, 1] }, { t: 0.7128174264881666, v: [1, 1], ease: [0.42, 0, 0.58, 1] }, { t: 0.7669564766634516, v: [1.095, 0.95], ease: [0.42, 0, 0.58, 1] }, { t: 0.9897759640666083, v: [1, 1.05], ease: [0.42, 0, 0.8951431517668547, 0.3407570422535186] }, { t: 1.2017846598233752, v: [1, 1], ease: [0.31159929257512675, 0.38869681601739836, 0.58, 1] }, { t: 1.2442602578454727, v: [1.02, 0.95], ease: [0.42, 0, 0, 0.9636255030181098] }, { t: 1.3707862721816209, v: [1, 1.05], ease: [0.42, -0.06206202263065829, 0.58, 1] }, { t: 1.5659785175305556, v: [1, 1.05], ease: [0.42, -0.06206202263065829, 0.58, 1] }, { t: 1.7225242861726335, v: [1, 1], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0.07894117002629274, v: [0, 0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 0.5890803023663453, v: [-30.114678799869385, -0.3481515921755908, 14.22102163595976], ease: [0.7300325174456456, -0.12405425024558042, 0.3365835061031919, 0.8017889379937657] }, { t: 1.1421861305872043, v: [-22.577941336944804, 6.412920843838687, -21.655639323327193], ease: [0.583298559499341, -0.33760664743211344, 0.32045494511798944, 1.0963542960860653] }, { t: 1.9672542725679227, v: [-2.0781042925060573, 2.7701174100260233, -1.1097245079483975], ease: [0.42, 0, 0.58, 1] }, { t: 2.265132022348826, v: [0, 0, 0], ease: [0.42, 0, 0.58, 1] }], position: [{ t: 0.21523060911481157, v: [0, 0], ease: [0.26223486988161915, 0.6947245975855132, 0.19480556164846297, 0.9038661358145291] }, { t: 0.4114390589896057, v: [4251034064187152e-20, 0.2658889947011273], ease: [0.6174717437059508, -0.1285535110701914, 0.9558063166458642, 1.4558335539794296] }, { t: 0.7733546480351897, v: [0, 0.0027633019963448496], ease: [0.09538195235865887, 0.5878716966122386, 0.07993556895591414, 0.9424688534678969] }, { t: 0.9897759640666083, v: [4251034064187152e-20, 0.2724621969461928], ease: [0.8363729761758775, -0.06230462217533443, 0.9982539187302559, 1.5] }, { t: 1.2463303718735304, v: [0, 0.004098894994698572], ease: [0.0027852407545025976, 0.747585125427439, 0.2902850468489716, 1.075893533235889] }, { t: 1.4277545322137832, v: [4251034064187152e-20, 0.20927514060819213], ease: [0.6418193857854623, 0.06919682671194852, 0.999114846102708, 1.0051682084254565] }, { t: 1.6154571730378309, v: [0, -0.0012722231452485869], ease: [0.1439324608778934, 0.5569463954729904, 0.40675790714828725, 0.8986649812795062] }, { t: 1.6919913573024103, v: [4251034064187152e-20, 0.12826705419287673], ease: [0.7357127354801332, -0.23608339420075217, 0.998983119560359, 1.0241908800770656] }, { t: 1.838861098534871, v: [0, -0.00406003797139351], ease: [0.16778668894268609, 0.5982980173372091, 0.2604597520439014, 0.8844972998628613] }, { t: 1.8667112801287638, v: [4251034064187152e-20, 0.07903432452816228], ease: [0.4685028760838894, -0.42953625372100485, 0.9202731953835559, 0.8525061773543536] }, { t: 1.9472873681398353, v: [0, -0.006228275916527491], ease: [0.0027852407545025976, 1.5, 0.48865476645304945, 0.9551260679225434] }] } }, { name: `Done_B`, duration: 1.8, body: `sphere`, squashAnchor: -1, workArea: null, inspect: { bias: -1, follow: false }, tracks: { expression: [{ t: 0.1, v: `happy`, ease: [0.4, 0.22, 0.28, 1.34] }], squash: [{ t: 0, v: [1, 1], ease: [0.42, 0, 0.58, 1] }, { t: 0.24, v: [1.12, 0.88], ease: [0.42, 0, 0.58, 1] }, { t: 0.46, v: [0.93, 1.09], ease: [0.42, 0, 0.58, 1] }, { t: 0.68, v: [1.04, 0.97], ease: [0.42, 0, 0.58, 1] }, { t: 0.92, v: [1, 1], ease: [0.42, 0, 0.58, 1] }] } }, { name: `Done_C`, duration: 2, body: `sphere`, squashAnchor: -1, workArea: null, inspect: { bias: -1, follow: true }, tracks: { expression: [{ t: 0, v: `happy`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }, { t: 1.1902334624750293, v: `neutral`, ease: [0.8458217358299596, 0.40487753378378377, 0.13769926619433198, 0.9154349662162162] }], position: [{ t: 0, v: [0, 0], ease: [0.42, 0, 0.4073342890672376, 1.018190339792799] }, { t: 0.3798103165938864, v: [-0.1054748164006256, 0.1247799599228919], ease: [0.6446428602987402, 0.013555142906648983, 0.26273657853993304, 1.0464437149441994] }, { t: 0.9426716022659842, v: [0.10617803719053583, 0.1550632852223643], ease: [0.8992655949641883, 0.06226468791954258, 0.6897429932929974, 1.0606800225733635] }, { t: 1.3822867688368345, v: [0.011140244111415301, -0.17250079856992764], ease: [0.5369766709678977, 0.09639530999237222, 0.4242841447981972, 0.8655803895199093] }, { t: 1.5768176200981194, v: [0.009657934584899294, 0.02418870866616249], ease: [0.10285717371228631, 0.44298137016142797, 0.58, 1] }, { t: 1.7545755610844578, v: [0.005569779366063913, -0.08650009457623184], ease: [0.11393164333435832, 0.20842906107559217, 0.58, 1] }, { t: 1.9557554786340765, v: [0, 0], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0, v: [0, 0, 0], ease: [0.7521899922111783, 0, 0.29680419697434735, 1.2284132127170915] }, { t: 0.3798103165938864, v: [-31.25365067481446, -5.533499139447874, 13.746823539571478], ease: [0.6650959278914218, 0.08187947429053509, 0.027403916739799694, 1.175374728587553] }, { t: 0.9426716022659842, v: [-30.6162399609899, 14.144576441037861, -12.73974221895198], ease: [0.8992655949641883, 0.06226468791954258, 0.6897429932929974, 1.0606800225733635] }, { t: 1.3972576410224693, v: [19.356472882732792, 0.12303000388944017, -1.6697872707546177], ease: [0.5369766709678977, 0.09639530999237222, 0.4242841447981972, 0.8655803895199093] }, { t: 1.5873362914457065, v: [-4.965245810760847, -1.410803032494741, -0.08557034006007683], ease: [0.10285717371228631, 0.44298137016142797, 0.58, 1] }, { t: 1.7574889536920633, v: [12.945220298267941, -0.9549298574076148, -1.3541756721371099], ease: [0.11393164333435832, 0.20842906107559217, 0.58, 1] }, { t: 1.9557554786340765, v: [0, 0, 0], ease: [0.7521899922111783, 0, 0.29680419697434735, 1.2284132127170915] }] } }, { name: `Idle_A`, duration: 6, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0.4874467656537753, v: [0, 0], ease: [0.39919726822734797, -0.1380913825536936, 0.15951040179591214, 1] }, { t: 1.3832000000000173, v: [-0.14647919001828796, 0.027266090496135924], ease: [0.5825263567433967, 0.31017058172003364, 0.04617913732408452, 1.3610608114532912] }, { t: 1.77965296961326, v: [-0.14647919001828796, 0.027266090496135924], ease: [0.22005965712189499, 0.31017058172003364, 0.04617913732408452, 0.9652306378531971] }, { t: 2.75, v: [-0.0745899946905787, -0.16596550351011732], ease: [0.7924378812353865, 0.08203268815009183, 0.20257664629337524, 0.5708768022766131] }, { t: 2.9261481353591154, v: [-0.0745899946905787, -0.16596550351011732], ease: [0.9024115240536277, 0.09528443113772456, 0.31187154968454267, 0.9286115269461079] }, { t: 4.0795674814720835, v: [0, 0], ease: [0.8772841365461845, 0.09396460316883949, 0, 0.9378491736838274] }, { t: 5.754212106241882, v: [0, 0], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0.4874467656537753, v: [0, 0, 0], ease: [0.39919726822734797, -0.1380913825536936, 0.15951040179591214, 1] }, { t: 1.3832000000000173, v: [-16.083597442672094, -32.69316873461356, -11.038560548848148], ease: [0.5825263567433967, 0.31017058172003364, 0.04617913732408452, 1.3610608114532912] }, { t: 1.77965296961326, v: [-13.471262391203387, -31.664036845872012, -11.622988481798327], ease: [0.22005965712189499, 0.31017058172003364, 0.04617913732408452, 0.9652306378531971] }, { t: 2.75, v: [10.37381753258554, 13.583422586232203, 10.666197221172675], ease: [0.7924378812353865, 0.08203268815009183, 0.20257664629337524, 0.5708768022766131] }, { t: 2.9261481353591154, v: [22.819835891847944, 5.292311893891789, 5.163005094237094], ease: [1, -0.5, 0.4051656151419559, 0.8872272583365959] }, { t: 4.0795674814720835, v: [-24.875244874578584, 31.812786832669843, 15.07444269105954], ease: [0.8772841365461845, 0.09396460316883949, 0, 0.9378491736838274] }, { t: 5.754212106241882, v: [0, 360, 0], ease: [0.9122920380277829, 0.038550560528246756, 0.4251612081579069, 0.8172019143128422] }], expression: [{ t: 1.1628970994475138, v: `blink`, ease: [0.42, 0, 0.58, 1] }, { t: 4.00439785911593, v: `blink`, ease: [0.42, 0, 0.58, 1] }, { t: 5.643314779005485, v: `neutral`, ease: [0.42, 0, 0.58, 1] }] } }, { name: `Idle_B`, duration: 4, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 1.6054821209465213, v: [0, 0], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0.9010370289220491, v: [0, 0, 0], ease: [0.42, 0, 0.28927730966925536, 0.9624241226685105] }, { t: 1.6163686240140267, v: [0.12032076750937498, -8.658512604326788, -2.5426418939710658], ease: [0.8747812559101849, -0.03625853912624016, 0.25467036702156304, 0.8980229024542974] }, { t: 2.4902049517966525, v: [0.9659548057072269, 5.658900089349377, 1.7129240357574211], ease: [0.6027205111294465, -0.23084976154500042, 0.2902495275740431, 0.9815467952425966] }, { t: 3.45704978089402, v: [0, 0, 0], ease: [0.42, 0, 0.58, 1] }], scale: [{ t: 0, v: [0.6], ease: [0.6180446538332104, 0.0012432525890504465, 0.1839130507609582, 0.9358696746423821] }, { t: 1.6054821209465213, v: [0.64], ease: [0.8658706538170823, -0.07995460153625837, 0.29979142380351903, 1.0195121615474219] }, { t: 3.841942375109553, v: [0.6], ease: [0.6180446538332104, 0.0012432525890504465, 0.1839130507609582, 0.9405530305724485] }], expression: [{ t: 1.4811034202342213, v: `blink`, ease: [0.4, 0.22, 0.28, 1.34] }, { t: 3.45704978089402, v: `blink`, ease: [0.4, 0.22, 0.28, 1.34] }] } }, { name: `Idle_D`, duration: 6, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { rotation: [{ t: 0, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.6511065418455951, 0, 0.3268385117846959, 1] }, { t: 0.5867355510752692, v: [-34.32339609164593, 16.86196736106905, 15.137354734738835], ease: [0.5996715199956071, 0, 0.24671113951908907, 1] }, { t: 1.0783308131720428, v: [-34.32339609164593, 16.86196736106905, 15.137354734738835], ease: [0.5996715199956071, 0, 0.10657397408207336, 1] }, { t: 1.962638608870968, v: [-6.1682538522357975, 3.098853229789992, 14.349419848128031], ease: [0.42, 0, 0.58, 1] }, { t: 2.671748991935484, v: [-6.1682538522357975, 3.098853229789992, 14.349419848128031], ease: [0.42, 0, 0.2029056425485961, 1] }, { t: 3.914377520161291, v: [7.572938650100637, 40.386943374478015, 25.47389006919084], ease: [0.42, 0, 0.58, 1] }, { t: 4.785706485215049, v: [7.572938650100637, 40.386943374478015, 25.47389006919084], ease: [0.6315554130669547, 0, 0.21641299946004333, 1] }, { t: 5.632732694892469, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.6511065418455951, 0, 0.3268385117846959, 1] }], expression: [{ t: 0.5929099462365591, v: `blink`, ease: [0.4, 0.22, 0.28, 1.34] }, { t: 2.0691383064517033, v: `blink`, ease: [0.4, 0.22, 0.28, 1.34] }, { t: 2.3722908266129035, v: `blink`, ease: [0.4, 0.22, 0.28, 1.34] }, { t: 4.247479838709677, v: `blink`, ease: [0.4, 0.22, 0.28, 1.34] }] } }, { name: `Logo_A`, duration: 4, body: `sphere`, squashAnchor: 0, workArea: { start: 0, end: 2.0002578769692425 }, inspect: { bias: -1, follow: true }, tracks: { rotation: [{ t: 0, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.940308570092613, 0, 0.8322175812019608, 0.42841310531523513] }, { t: 0.9325431465191484, v: [-15.896271043294888, 290.3612956381275, 25.38480127460161], ease: [0.08370250411471428, 0.7821860109261747, 0.1762354651162792, 1] }, { t: 1.9567938859714928, v: [-15.896271043294888, 393.29315635042974, 25.38480127460161], ease: [0.42, 0, 0.58, 1] }] } }, { name: `Logo_B`, duration: 4, body: `sphere`, squashAnchor: 0, workArea: { start: 0, end: 3.1220695798949736 }, inspect: { bias: -1, follow: true }, tracks: { rotation: [{ t: 0, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.77323790487339, 0, 0.19818347223390587, 0.9476806070764106] }, { t: 0.7185100111661579, v: [-11.287778634690255, -33.00231519019303, -21.062449423926747], ease: [0.2717748154604947, -0.2636988609351958, 0.6005198984279181, 0.023491972600300434] }, { t: 1.141527569392348, v: [-11.399396607755296, -31.39663474186699, -19.937494120163255], ease: [0.9137669521901326, 0.04016940837145343, 0.8322175812019608, 0.42841310531523513] }, { t: 2.074070715911496, v: [-15.896271043294888, 290.3612956381275, 25.38480127460161], ease: [0.08370250411471428, 0.7821860109261747, 0.1762354651162792, 1] }, { t: 3.0983214553638407, v: [-15.896271043294888, 393.29315635042974, 25.38480127460161], ease: [0.42, 0, 0.58, 1] }] } }, { name: `Marketing_A`, duration: 4, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0.6167064755838638, v: [0, 0], ease: [0.5771393784786643, 0, 0.41654104823747684, 1] }, { t: 1.4190773177636233, v: [-0.16387514369529332, 0], ease: [0.42, 0, 0.58, 1] }, { t: 2.2684226822363764, v: [-0.16387514369529332, 0.05904395257747427], ease: [0.580719503710575, 0, 0, 1] }, { t: 3.1610281808035716, v: [0, 0], ease: [0.5771393784786643, 0, 0.41654104823747684, 1] }], rotation: [{ t: 0, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.42, 0, 0.58, 1] }, { t: 0.6167064755838638, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.8625910776088882, -0.041613616273912, 0.25952275632662025, 1.049784301761229] }, { t: 1.4190773177636233, v: [-2.97589945531819, -26.234478989223906, -3.2544499064295738], ease: [0.7818125791576046, 0.15346315752484826, 0.32687664998404986, 1.1173618829561318] }, { t: 2.2684226822363764, v: [-31.58476211869586, -3.710798107118315, 24.071416454447956], ease: [0.36229770668640776, -0.17418027527991467, 0.2875659277885649, 1.2452842602722636] }, { t: 2.7962446921443735, v: [-27.874087487241205, 0.739249290532289, 5.007074162025872], ease: [0.42, 0.044881803684311196, 0.58, 1] }, { t: 3.2725893489030398, v: [-19.255583925594408, -17.414119894980235, -7.023063437300964], ease: [0.49415439617951884, -0.031041466813226757, 0.2907565775851124, 1] }, { t: 3.8435756138392856, v: [-19.353875077555468, 20.03044512007725, 19.013275491556097], ease: [0.42, 0, 0.58, 1] }, { t: 3.9805733816964284, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.42, 0, 0.58, 1] }], expression: [{ t: 0.05960518973214285, v: `neutral`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }, { t: 2.2434315286624202, v: `surprised`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }] } }, { name: `Marketing_B`, duration: 4, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { rotation: [{ t: 0, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.42, 0, 0.58, 1] }, { t: 0.6167064755838638, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.8625910776088882, -0.041613616273912, 0.25952275632662025, 1.049784301761229] }, { t: 1.4190773177636233, v: [-2.97589945531819, -26.234478989223906, -3.2544499064295738], ease: [0.7818125791576046, 0.15346315752484826, 0.32687664998404986, 1.1173618829561318] }, { t: 2.2684226822363764, v: [20.16565207199379, -20.644446669166673, 22.47273384376682], ease: [0.36229770668640776, -0.17418027527991467, 0.2875659277885649, 1.2452842602722636] }, { t: 3.2725893489030398, v: [-20.98869306129836, -21.248460672675545, -6.20573622722674], ease: [0.49415439617951884, -0.031041466813226757, 0.2907565775851124, 1] }, { t: 4, v: [-23.757982259034762, 24.83627384870201, 18.82083960330674], ease: [0.42, 0, 0.58, 1] }], expression: [{ t: 0, v: `neutral`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }, { t: 1.4471868365180467, v: `calm`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }] } }, { name: `Marketing_C`, duration: 4, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { rotation: [{ t: 0, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.42, 0, 0.58, 1] }, { t: 0.6167064755838638, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.8625910776088882, -0.041613616273912, 0.25952275632662025, 1.049784301761229] }, { t: 1.4190773177636233, v: [-2.97589945531819, -26.234478989223906, -3.2544499064295738], ease: [0.7818125791576046, 0.15346315752484826, 0.32687664998404986, 1.1173618829561318] }, { t: 2.2684226822363764, v: [20.16565207199379, -20.644446669166673, 22.47273384376682], ease: [0.36229770668640776, -0.17418027527991467, 0.2875659277885649, 1.2452842602722636] }, { t: 3.2725893489030398, v: [-20.98869306129836, -21.248460672675545, -6.20573622722674], ease: [0.49415439617951884, -0.031041466813226757, 0.2907565775851124, 1] }, { t: 4, v: [-23.757982259034762, 24.83627384870201, 18.82083960330674], ease: [0.42, 0, 0.58, 1] }], expression: [{ t: 0, v: `neutral`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }, { t: 1.4471868365180467, v: `calm`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }] } }, { name: `Marketing_D`, duration: 4, body: `sphere`, squashAnchor: -1, workArea: null, inspect: { bias: -1, follow: true }, tracks: { expression: [{ t: 0.05498053786270347, v: `neutral`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }, { t: 0.7522248761500355, v: `happy`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }, { t: 3.188380537862626, v: `neutral`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }], squash: [{ t: 0.6800000000000002, v: [1, 1], ease: [0.42, 0, 0.58, 1] }, { t: 0.9199999999999999, v: [1.12, 0.88], ease: [0.42, 0, 0.58, 1] }, { t: 1.1400000000000001, v: [0.93, 1.09], ease: [0.42, 0, 0.58, 1] }, { t: 1.3600000000000003, v: [1.04, 0.97], ease: [0.42, 0, 0.58, 1] }, { t: 1.6, v: [1, 1], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0, v: [-6.345525006325851, 19.726304895345887, 7.225894380877916], ease: [0.42, 0, 0.58, 1] }, { t: 0.68, v: [-6.345525006325851, 19.726304895345887, 7.225894380877916], ease: [0.6287715517241379, 0, 0.1652870297805643, 1] }, { t: 1.80886178343963, v: [7.946317173704124, -27.372379409841862, -13.611633161590936], ease: [0.5888217507250163, 0, 0, 1] }, { t: 3.406449044585987, v: [0, 0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 3.887429228591649, v: [-6.345525006325851, 19.726304895345887, 7.225894380877916], ease: [0.42, 0, 0.58, 1] }] } }, { name: `Rotation_A`, duration: 6, body: `cloud`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { rotation: [{ t: 0, v: [2.3120950657104795, -34.698071961330996, 6.287220573778937], ease: [1e-3, 1e-3, 0.999, 0.999] }, { t: 3.0420576880625374, v: [-15.896271043294888, 393.29315635042974, 25.38480127460161], ease: [1e-3, 1e-3, 0.999, 0.999] }, { t: 5.685518927730484, v: [-26.2, 719.4, 25.38480127460161], ease: [0.42, 0, 0.58, 1] }] } }, { name: `Rotation_B`, duration: 10, body: `cloud`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { rotation: [{ t: 0, v: [-5.86170199829258, -66.48579621643268, 11.013855401509232], ease: [1e-3, 1e-3, 0.999, 0.999] }, { t: 10, v: [-5.86170199829258, 293.5142037835673, 11.013855401509232], ease: [0.42, 0, 0.58, 1] }] } }, { name: `Rotation_C`, duration: 4, body: `cloud`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0, v: [0, 0], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0, v: [-35, -28.5, 8.9], ease: [1e-3, 1e-3, 0.999, 0.999] }, { t: 3.954889112903226, v: [30.3, -25.03032384031022, 25.838583124958074], ease: [0.42, 0, 0.58, 1] }], expression: [{ t: 2.02137936827957, v: `blink`, ease: [0.4, 0.22, 0.28, 1.34] }] } }, { name: `Streaming_A`, duration: 2.6, body: `sphere`, squashAnchor: 0, workArea: { start: 0, end: 2.593141413751879 }, inspect: { bias: -1, follow: true }, tracks: { rotation: [{ t: 0, v: [-17.330877831673277, 2.263279637703984, 15.443629275983977], ease: [0.7300325174456456, -0.12405425024558042, 0.40585908939755444, 1.0050376870076922] }, { t: 0.3458182816671912, v: [9.638628832336948, 2.025895269795649, -1.2527648183630171], ease: [0.4224707625763918, 0.0022972310598335997, 0.58, 0.9927354054381194] }, { t: 0.5813687143348092, v: [-15.366003917619995, -2.619836674995623, -2.16549892253304], ease: [0.7322498965237162, -0.011667049678267111, 0, 0.9141484219009502] }, { t: 0.8343818658890081, v: [4.338039365692767, 0.49348825557993187, -3.7087410402723067], ease: [0.1580317356155577, -0.07611268668891613, 0.32045494511798944, 1.0963542960860653] }, { t: 1.2183655201918815, v: [-0.2793440526930908, 0, 0], ease: [0.7202644919359068, 0, 0.414580660247694, 0.9498001208025284] }, { t: 1.6185917357603328, v: [-5.399115822872089, 14.530502605079048, 3.1285787766973128], ease: [0.603730806420981, -0.0304892240026259, 0.2700959962528573, 0.9305186654092706] }, { t: 2.0602042690217752, v: [-2.088336039091766, -10.814208972017363, -20.009405175503947], ease: [0.48373539910046165, -0.09542268080702558, 0.26548699703136136, 1] }, { t: 2.593141413751879, v: [-17.330877831673277, 2.263279637703984, 15.443629275983977], ease: [0.7300325174456456, -0.12405425024558042, 0.40585908939755444, 1.0050376870076922] }], position: [{ t: 0.008051106963364502, v: [0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 0.34800758255567965, v: [0, -0.09893530004977505], ease: [0.42, 0, 0.58, 1] }, { t: 0.5873549334090005, v: [0, 0.04654750224419043], ease: [0.42, 0, 0.58, 1] }, { t: 0.8343818658890081, v: [0, 0.004683687521738383], ease: [0.42, 0, 0.58, 1] }, { t: 1.2183655201918815, v: [0, 0], ease: [0.42, 0, 0.27743996350027533, 0.9367983894536062] }, { t: 1.6185917357603328, v: [0.12655004394233813, 0], ease: [0.603730806420981, -0.0304892240026259, 0.2700959962528573, 0.9282552090918559] }, { t: 2.0602042690217752, v: [-0.1362091399555723, 0], ease: [0.48373539910046165, -0.09542268080702558, 0.26548699703136136, 1] }, { t: 2.593141413751879, v: [0, 0], ease: [0.42, 0, 0.58, 1] }] } }, { name: `Streaming_B`, duration: 2.6, body: `sphere`, squashAnchor: 0, workArea: { start: 0, end: 2.593141413751879 }, inspect: { bias: -1, follow: true }, tracks: { expression: [{ t: 0.8343818658890081, v: `surprised`, ease: [0.8458217358299596, 0.40487753378378377, 0.13769926619433198, 0.9154349662162162], cut: true }, { t: 2.1679160926807017, v: `neutral`, ease: [0.8458217358299596, 0.40487753378378377, 0.13769926619433198, 0.9154349662162162], cut: true }], rotation: [{ t: 0, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.7300325174456456, -0.12405425024558042, 0.40585908939755444, 1.0050376870076922] }, { t: 0.3458182816671912, v: [9.638628832336948, 2.025895269795649, -1.2527648183630171], ease: [0.4224707625763918, 0.0022972310598335997, 0.58, 0.9927354054381194] }, { t: 0.8343818658890081, v: [-13.158704916519811, -16.90797681471658, -2.914418472822627], ease: [0.1580317356155577, -0.07611268668891613, 0.32045494511798944, 1.0963542960860653] }, { t: 1.2183655201918815, v: [3.3337098816649693, 21.543227556484112, 4.461698658684633], ease: [0.7202644919359068, 0, 0.414580660247694, 0.9498001208025284] }, { t: 1.6185917357603328, v: [-5.399115822872089, 14.530502605079048, 3.1285787766973128], ease: [0.603730806420981, -0.0304892240026259, 0.2700959962528573, 0.9305186654092706] }, { t: 2.0602042690217752, v: [-2.088336039091766, -10.814208972017363, -20.009405175503947], ease: [0.48373539910046165, -0.09542268080702558, 0.26548699703136136, 1] }, { t: 2.593141413751879, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.7300325174456456, -0.12405425024558042, 0.40585908939755444, 1.0050376870076922] }], position: [{ t: 0.008051106963364502, v: [0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 0.34800758255567965, v: [0, -0.09893530004977505], ease: [0.42, 0, 0.58, 1] }, { t: 0.8343818658890081, v: [0, 0.004683687521738383], ease: [0.42, 0, 0.58, 1] }, { t: 1.36568364300849, v: [0.12655004394233813, 0], ease: [0.603730806420981, -0.0304892240026259, 0.2700959962528573, 0.9282552090918559] }, { t: 2.0602042690217752, v: [-0.1362091399555723, 0], ease: [0.48373539910046165, -0.09542268080702558, 0.26548699703136136, 1] }, { t: 2.593141413751879, v: [0, 0], ease: [0.42, 0, 0.58, 1] }] } }, { name: `Streaming_C`, duration: 2.4, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { expression: [{ t: 0.0930430477108114, v: `squinted`, ease: [0.9601942054655871, -0.052470439189189255, 0.20804339574898786, 0.9135346283783784] }], rotation: [{ t: 0.007536501544973762, v: [-30.114678799869385, -0.3481515921755908, 10.657733527966457], ease: [0.8069695446331039, 0.06068366162676136, 0.22176992691461772, 1.0529567094556063] }, { t: 0.6967011702649526, v: [-25.983934007381276, 7.767555485689494, -17.97884031792412], ease: [0.6337438554404256, 0.03915919163464518, 0.24060607252134747, 0.9552013782917067] }, { t: 1.3, v: [-27.316297934452344, -1.3907007432867593, 11.301625700367927], ease: [0.8069695446331039, 0.06068366162676136, 0.05967881944444445, 0.9976179673321233] }, { t: 2.3830582002457, v: [-30.114678799869385, 359.6518484078244, 10.657733527966457], ease: [0.545887017284529, -0.16488185903681707, 0.58, 1] }], position: [{ t: 0.007536501544973762, v: [0, 0], ease: [0.8069695446331039, 0.06068366162676136, 0.22176992691461772, 1.0529567094556063] }, { t: 0.6967011702649526, v: [0.16304040871678732, 0.1060830475460072], ease: [0.6337438554404256, 0.03915919163464518, 0.24060607252134747, 0.9552013782917067] }, { t: 1.3, v: [-0.16109273893088566, 0.1112767252235085], ease: [0.8069695446331039, 0.06068366162676136, 0.05967881944444445, 0.9976179673321233] }, { t: 2.3830582002457, v: [0, 0], ease: [0.7622975213794354, -0.39274360300976613, 0.22176992691461772, 1.0529567094556063] }] } }, { name: `Working_A`, duration: 8, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0.4874467656537753, v: [0, 0], ease: [0.39919726822734797, -0.1380913825536936, 0.15951040179591214, 1] }, { t: 1.3832000000000173, v: [-0.14647919001828796, 0.027266090496135924], ease: [0.5825263567433967, 0.31017058172003364, 0.04617913732408452, 1.3610608114532912] }, { t: 1.77965296961326, v: [-0.14647919001828796, 0.027266090496135924], ease: [0.22005965712189499, 0.31017058172003364, 0.04617913732408452, 0.9652306378531971] }, { t: 2.5961328343722427, v: [0.06209379465135341, 0.0363636826260471], ease: [0.6823010997778416, 0.03975119923438924, 0.58, 0.7462988396745895] }, { t: 3.066377943544433, v: [-0.016487420591570615, 0.0804209848791122], ease: [0.8034080182827295, -0.08276325518488785, 0.6510110561346553, 0.8128258749805829] }, { t: 3.426085780646072, v: [-0.008916270094194876, -0.2135819760518346], ease: [0.1744021985074266, -0.5, 0.8865519014643501, -0.2214168917492133] }, { t: 4.00439785911593, v: [-0.0052248049102180776, -0.12515593913381462], ease: [0.023812816055625345, 0.31341394515796384, 0.0448947139696587, 1.0658309377957906] }, { t: 5.005029942257856, v: [0, 0], ease: [0.42, 0, 0.58, 1] }, { t: 6.298778790534628, v: [0.03813914798218992, -0.019258402700427682], ease: [0.576933472628317, 0.007827540903749368, 0.12610215878412523, 0.9598864308897559] }, { t: 6.952426906222622, v: [-0.25, -0.004137934943726919], ease: [0.8326089284460128, -0.06392110845094923, 0.3654460022570882, 1.0352901568389925] }, { t: 7.900964066608238, v: [0, 0], ease: [0.39919726822734797, -0.1380913825536936, 0.15951040179591214, 1] }], rotation: [{ t: 0.4874467656537753, v: [0, 0, 0], ease: [0.39919726822734797, -0.1380913825536936, 0.15951040179591214, 1] }, { t: 1.3832000000000173, v: [-11.013174031248813, -20.059833580125414, -12.896783267756348], ease: [0.5825263567433967, 0.31017058172003364, 0.04617913732408452, 1.3610608114532912] }, { t: 1.77965296961326, v: [-17.48975478197329, -18.703976724880516, -12.678205332257816], ease: [0.22005965712189499, 0.31017058172003364, 0.04617913732408452, 0.9652306378531971] }, { t: 2.5961328343722427, v: [-14.554913391638532, 17.164836260093473, 9.376528927180779], ease: [0.6823010997778416, 0.03975119923438924, 0.58, 0.9240336563778733] }, { t: 3.1796016343940767, v: [-24.586251970533304, 0.14133926125606477, -0.7477216271856462], ease: [0.8034080182827295, -0.08276325518488785, 0.9143306014396848, 0.4851034680582119] }, { t: 3.4679142027965795, v: [-1.0943281912285556, -1.1346215368163393, -0.7116952620126241], ease: [0.12040927423864656, -0.18872517040581954, 0.9481776569383256, -0.20917925086224787] }, { t: 4.001861402631413, v: [-147.11069531984157, -0.6757806869448113, -0.4238857605398247], ease: [0.03131913716814155, 0.8644907690193963, 0.0448947139696587, 1.0658309377957906] }, { t: 5.005029942257856, v: [-360, 0, 0], ease: [0.7970933306500759, -0.5, 0.24118105710043447, 0.7361553789450831] }, { t: 6.298778790534628, v: [-364.89323527138873, 18.626179650675688, -0.2598233988596897], ease: [0.576933472628317, 0.007827540903749368, 0.12610215878412523, 0.9742744867440337] }, { t: 6.952426906222622, v: [-366.80423922162356, -23.365336474310464, -3.339162411443921], ease: [0.8326089284460128, -0.06392110845094923, 0.3654460022570882, 1.0352901568389925] }, { t: 7.900964066608238, v: [-360, 0, 0], ease: [0.42, 0, 0.58, 1] }], expression: [{ t: 1.1672000000000002, v: `blink`, ease: [0.42, 0, 0.58, 1] }, { t: 1.77965296961326, v: `surprised`, ease: [0.7394673582995951, 0.10409628378378377, 0.6676682692307693, 1.5] }, { t: 5.643314779005485, v: `neutral`, ease: [0.42, 0, 0.58, 1] }, { t: 6.298778790534628, v: `strange`, ease: [0.9601942054655871, -0.052470439189189255, 0.20804339574898786, 0.9135346283783784] }, { t: 7.3115338882283, v: `neutral`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }] } }, { name: `Working_B`, duration: 4.8, body: `sphere`, squashAnchor: 0, workArea: { start: 0, end: 4.8 }, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0.17746730083234244, v: [0, 0], ease: [0.807066718478605, 0.026672824415491948, 0.05397305674842967, 1.0519668384455731] }, { t: 1.4141067024830507, v: [-0.1, -14911040730998862e-21], ease: [0.7054694160272805, 0.15290809768637542, 0, 0.9011176996605331] }, { t: 2.75, v: [0.1, -0.0019533463357608513], ease: [0.8240202817829232, -0.24792725943516045, 0.2993925437700369, 1] }, { t: 4.7824019024970275, v: [0, 0], ease: [0.42, 0, 0.07071724310528026, 1.3032158407916754] }], rotation: [{ t: 0.17746730083234244, v: [0, 0, 0], ease: [0.807066718478605, 0.026672824415491948, 0.05397305674842967, 1.0519668384455731] }, { t: 1.4141067024830507, v: [1.431495026310406, -16.140319998213133, -36.05175434586088], ease: [0.7054694160272805, 0.15290809768637542, 0, 0.9507801322055007] }, { t: 2.75, v: [-3.793664340840882, 16.145026960161896, 23.111555762366347], ease: [0.8145184258410576, 0.05868417745499387, 0.7187386211123404, 0.8220737938312388] }, { t: 3.300369915174868, v: [-0.658471135071176, 32.094524718170625, 23.00284198348812], ease: [0.9529378729987852, -0.03412152368009878, 0.7143170242443122, 0.5254015949332431] }, { t: 3.896330300821882, v: [-0.03018222484427137, -273.02901001946327, 5.757592653481982], ease: [0.11270319506726437, 0.6690303636987784, 0.23166630377840014, 0.9738369897382892] }, { t: 4.7824019024970275, v: [-0.02727988727869867, -360, 0], ease: [0.42, 0, 0.58, 1] }], scale: [{ t: 0.17779177760649373, v: [0.6], ease: [0.807066718478605, 0.026672824415491948, 0.05397305674842967, 0.9010023979880923] }, { t: 1.4141067024830507, v: [0.4215844279727266], ease: [0.758517646256336, -0.08984960385218788, 0.3074500979615823, 0.9070651813931356] }, { t: 2.25, v: [0.5281520264776418], ease: [1, 0.12529134929810246, 0.3851632150743237, 0.8426351606267645] }, { t: 2.9883359098579825, v: [0.6153393854797824], ease: [0.6185932743021068, -0.26875053521000764, 0.341686978852472, 1] }, { t: 4.608223713420763, v: [0.6], ease: [0.807066718478605, 0.026672824415491948, 0.05397305674842967, 1.0519668384455731] }], expression: [{ t: 0.7466486120839366, v: `inspect`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }, { t: 2.556108799048751, v: `surprised`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }, { t: 3.7592152199762188, v: `neutral`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }] } }, { name: `Working_C`, duration: 5, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0.17491812227074233, v: [-0.06835221071089878, -14911040730998862e-21], ease: [0.48050979200063776, 0.06136202638923106, 0.999, 1.5] }, { t: 1.5108114197876916, v: [0.032133292775302545, -0.0019533463357608513], ease: [1e-3, 0.24090214653366723, 0.58, 1] }, { t: 1.7971520856616507, v: [-0.06835221071089878, -14911040730998862e-21], ease: [0.48050979200063776, 0.06136202638923106, 0.999, 1.5] }, { t: 3.1330453831785996, v: [0.032133292775302545, -0.0019533463357608513], ease: [1e-3, 0.24090214653366723, 0.58, 1] }, { t: 3.4083292556973226, v: [-0.06835221071089878, -14911040730998862e-21], ease: [0.48050979200063776, 0.06136202638923106, 0.999, 1.5] }, { t: 4.777367618612606, v: [0.032133292775302545, -0.0019533463357608513], ease: [1e-3, 0.24090214653366723, 0.58, 1] }, { t: 5, v: [-0.06835221071089878, -14911040730998862e-21], ease: [0.48050979200063776, 0.06136202638923106, 0.999, 1.5] }], rotation: [{ t: 0.17491812227074233, v: [22.808320996747383, -5.474402376762305, -34.85465299871112], ease: [0.48050979200063776, 0.06136202638923106, 0.9994333239875214, 1.5] }, { t: 1.5108114197876916, v: [25.82236401380847, 8.163455755358939, 36.34926880424543], ease: [0, 0.24090214653366723, 0.58, 1] }, { t: 1.7971520856616507, v: [22.808320996747383, -5.474402376762305, -34.85465299871112], ease: [0.48050979200063776, 0.06136202638923106, 0.9994333239875214, 1.5] }, { t: 3.1330453831785996, v: [25.82236401380847, 8.163455755358939, 36.34926880424543], ease: [0, 0.24090214653366723, 0.58, 1] }, { t: 3.4083292556973226, v: [22.808320996747383, -5.474402376762305, -34.85465299871112], ease: [0.48050979200063776, 0.06136202638923106, 0.9994333239875214, 1.5] }, { t: 4.777367618612606, v: [25.82236401380847, 8.163455755358939, 36.34926880424543], ease: [0, 0.24090214653366723, 0.58, 1] }, { t: 5, v: [22.808320996747383, -5.474402376762305, -34.85465299871112], ease: [0.48050979200063776, 0.06136202638923106, 0.9994333239875214, 1.5] }], expression: [{ t: 0, v: `surprised`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }] } }, { name: `Working_D`, duration: 5, body: `sphere`, squashAnchor: 0, workArea: { start: 0, end: 5 }, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 1.5264103096017296, v: [0, 0], ease: [0.8183794558884002, 0, 0.42063048773799955, 0.8916191063669083] }, { t: 2.2538209606986896, v: [0.13302558581350077, 0.08599672420051416], ease: [0.7164816671975539, -0.07059803322016199, 0.15856161687281733, 1] }, { t: 2.636972068926158, v: [0, 0], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0, v: [-2.97589945531819, -26.234478989223906, -3.2544499064295738], ease: [0.7818125791576046, 0.15346315752484826, 0.32687664998404986, 1.1173618829561318] }, { t: 0.003820960698689868, v: [2.4615600363954893, -24.921015876700608, 2.790543200988768], ease: [0.42, 0, 0.58, 1] }, { t: 0.5222436429350663, v: [20.16565207199379, -20.644446669166673, 22.47273384376682], ease: [0.36229770668640776, -0.17418027527991467, 0.2875659277885649, 1.2452842602722636] }, { t: 1.5264103096017296, v: [-20.98869306129836, -21.248460672675545, -6.20573622722674], ease: [0.49415439617951884, -0.031041466813226757, 0.2907565775851124, 1] }, { t: 2.2538209606986896, v: [-23.757982259034762, 24.83627384870201, 18.82083960330674], ease: [0.42, 0, 0.58, 1] }, { t: 2.636972068926158, v: [8.316132781421524, -27.390741199393897, -9.531735566337252], ease: [0.12247552635300568, -0.002557518043474879, 0.7043012111749869, 0.5773041000961353] }, { t: 3.494456667932666, v: [6.3335276735657375, -0.1762970079864843, 0.6565665872756274], ease: [0.42, 0.5038392468370619, 0.58, 1] }, { t: 4.25382096069869, v: [8.1703683326745, 24.729657859977713, 10.395084291173474], ease: [0.42, 0, 0.58, 1] }, { t: 4.971120960698738, v: [2.4615600363954893, -24.921015876700608, 2.790543200988768], ease: [0.42, 0, 0.58, 1] }], expression: [{ t: 0.003820960698689868, v: `calm`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }] } }, { name: `Working_E`, duration: 4, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0.6167064755838638, v: [0, 0], ease: [0.5771393784786643, 0, 0.41654104823747684, 1] }, { t: 1.4190773177636233, v: [-0.16387514369529332, 0], ease: [0.42, 0, 0.58, 1] }, { t: 2.2684226822363764, v: [-0.16387514369529332, 0.05904395257747427], ease: [0.580719503710575, 0, 0, 1] }, { t: 3.1610281808035716, v: [0, 0], ease: [0.5771393784786643, 0, 0.41654104823747684, 1] }], rotation: [{ t: 0, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.42, 0, 0.58, 1] }, { t: 0.6167064755838638, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.8625910776088882, -0.041613616273912, 0.25952275632662025, 1.049784301761229] }, { t: 1.4190773177636233, v: [-2.97589945531819, -26.234478989223906, -3.2544499064295738], ease: [0.7818125791576046, 0.15346315752484826, 0.32687664998404986, 1.1173618829561318] }, { t: 2.2684226822363764, v: [-31.58476211869586, -3.710798107118315, 24.071416454447956], ease: [0.36229770668640776, -0.17418027527991467, 0.2875659277885649, 1.2452842602722636] }, { t: 2.7962446921443735, v: [-27.874087487241205, 0.739249290532289, 5.007074162025872], ease: [0.42, 0.044881803684311196, 0.58, 1] }, { t: 3.2725893489030398, v: [-19.255583925594408, -17.414119894980235, -7.023063437300964], ease: [0.49415439617951884, -0.031041466813226757, 0.2907565775851124, 1] }, { t: 3.8435756138392856, v: [-10.064416055441825, 12.982763466855692, 19.192265328801522], ease: [0.42, 0, 0.58, 1] }, { t: 3.9805733816964284, v: [-15.896271043294888, 33.29315635042974, 25.38480127460161], ease: [0.42, 0, 0.58, 1] }], expression: [{ t: 0.05960518973214285, v: `neutral`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }, { t: 2.2434315286624202, v: `surprised`, ease: [0.7416814271255061, 0.03220016891891886, 0.26459703947368424, 1.0216427364864864] }] } }, { name: `Working_F`, duration: 5, body: `sphere`, squashAnchor: 0, workArea: null, inspect: { bias: -1, follow: true }, tracks: { position: [{ t: 0.4874467656537753, v: [0, 0], ease: [0.6778358120868745, -0.22439715100065685, 0.15951040179591214, 1] }, { t: 1.3832000000000173, v: [-0.14647919001828796, 0.027266090496135924], ease: [0.5825263567433967, 0.31017058172003364, 0.04617913732408452, 1.3610608114532912] }, { t: 1.77965296961326, v: [-0.14647919001828796, 0.027266090496135924], ease: [0.22005965712189499, 0.31017058172003364, 0.04617913732408452, 0.9652306378531971] }, { t: 2.5961328343722427, v: [0.06209379465135341, 0.0363636826260471], ease: [0.6823010997778416, 0.03975119923438924, 0.58, 0.7462988396745895] }, { t: 3.066377943544433, v: [-0.016487420591570615, 0.0804209848791122], ease: [0.8034080182827295, -0.08276325518488785, 0.6510110561346553, 0.8128258749805829] }, { t: 3.426085780646072, v: [-0.008916270094194876, -0.2135819760518346], ease: [0.1744021985074266, -0.5, 0.8865519014643501, -0.2214168917492133] }, { t: 4.00439785911593, v: [-0.0052248049102180776, -0.12515593913381462], ease: [0.023812816055625345, 0.31341394515796384, 0.0448947139696587, 1.0658309377957906] }, { t: 4.893926749555462, v: [0, 0], ease: [0.42, 0, 0.58, 1] }], rotation: [{ t: 0.4874467656537753, v: [0, 0, 0], ease: [0.6778358120868745, -0.22439715100065685, 0.15951040179591214, 1] }, { t: 1.3832000000000173, v: [-11.013174031248813, -20.059833580125414, -12.896783267756348], ease: [0.5825263567433967, 0.31017058172003364, 0.04617913732408452, 1.3610608114532912] }, { t: 1.77965296961326, v: [-17.48975478197329, -18.703976724880516, -12.678205332257816], ease: [0.22005965712189499, 0.31017058172003364, 0.04617913732408452, 0.9652306378531971] }, { t: 2.5961328343722427, v: [-14.554913391638532, 17.164836260093473, 9.376528927180779], ease: [0.6823010997778416, 0.03975119923438924, 0.58, 0.9240336563778733] }, { t: 3.1796016343940767, v: [-24.586251970533304, 0.14133926125606477, -0.7477216271856462], ease: [0.8034080182827295, -0.08276325518488785, 0.9143306014396848, 0.4851034680582119] }, { t: 3.4679142027965795, v: [-1.0943281912285556, -1.1346215368163393, -0.7116952620126241], ease: [0.12040927423864656, -0.18872517040581954, 0.9481776569383256, -0.20917925086224787] }, { t: 4.001861402631413, v: [-147.11069531984157, -0.6757806869448113, -0.4238857605398247], ease: [0.03131913716814155, 0.8644907690193963, 0.0448947139696587, 1.0658309377957906] }, { t: 4.893926749555462, v: [-360, 0, 0], ease: [0.7970933306500759, -0.5, 0.24118105710043447, 0.7361553789450831] }], expression: [{ t: 1.8508295659644571, v: `surprised`, ease: [0.7394673582995951, 0.10409628378378377, 0.6676682692307693, 1.5] }, { t: 4.893926749555462, v: `neutral`, ease: [0.8458217358299596, 0.40487753378378377, 0.13769926619433198, 0.9154349662162162], cut: true }], lids: [{ t: 1.1672000000000002, v: [0], ease: [0.42, 0, 0.58, 1] }, { t: 1.2797000000000003, v: [1], ease: [0.42, 0, 0.58, 1] }, { t: 1.4172000000000002, v: [0], ease: [0.42, 0, 0.58, 1] }] } }];
var so = 120;
var co = { clips: [`Working_A`, `Working_B`, `Working_C`, `Working_D`, `Working_E`, `Working_F`] };
var lo = { idle: { clips: [`Idle_B`, `Idle_B`, `Idle_D`, `Idle_B`, `Idle_A`], compactClips: [`Idle_B`] }, listening: { clips: [`Idle_D`], face: `calm` }, thinking: { clips: [`Idle_B`], morph: `thinking` }, streaming: { clips: [`Streaming_A`, `Streaming_B`, `Streaming_C`] }, searching: { clips: [`Idle_B`], morph: `radar` }, reading: co, working: co, coding: co, running: co, computing: co, controlling: co, waiting: { clips: [`Idle_B`], morph: `orbit` }, blocked: { clips: [`Blocked_A`], next: `drowsy`, holdSeconds: so }, finished: { clips: [`Done_B`, `Done_A`], face: `happy`, next: `idle` }, failed: { clips: [`Blocked_B`], next: `idle` }, sleeping: { clips: [`Idle_B`], face: `sleepy` }, waking: { clips: [`Idle_B`], face: `surprised`, next: `idle`, holdSeconds: 1.6 }, happy: { clips: [`Done_A`] }, excited: { clips: [`Done_C`] }, laughing: { clips: [`Done_B`] }, proud: { clips: [`Marketing_B`] }, curious: { clips: [`Working_B`], face: `inspecting` }, playful: { clips: [`Bodymoves_A`] }, shy: { clips: [`Idle_D`], face: `calm` }, surprised: { clips: [`Idle_B`], face: `surprised` }, suspicious: { clips: [`Idle_D`], face: `squinted` }, angry: { clips: [`Blocked_A`], face: `squinted` }, confused: { clips: [`Blocked_A`] }, sad: { clips: [`Blocked_B`] }, drowsy: { clips: [`Blocked_C`] }, bored: { clips: [`Idle_B`], face: `sleepy` }, scared: { clips: [`Idle_D`], face: `surprised` }, celebrate: { clips: [`Rotation_A`], face: `happy` }, approving: { clips: [`Rotation_C`], next: `idle` }, orbit: { clips: [`Idle_B`], morph: `orbit` }, radar: { clips: [`Idle_B`], morph: `radar` }, progress: { clips: [`Idle_B`], morph: `progress` }, spawning: { clips: [`Idle_B`], morph: `spawning` }, loading: { clips: [`Idle_B`], morph: `progress` }, dictating: { clips: [`Idle_B`], morph: `dictating` }, sending: { clips: [`Idle_B`], morph: `sending` }, receiving: { clips: [`Idle_B`], morph: `receiving` }, uploading: { clips: [`Idle_B`], morph: `uploading` }, writing: { clips: [`Idle_B`], morph: `writing` }, alerting: { clips: [`Idle_B`], morph: `alerting` }, bouncing: { clips: [`Idle_B`], morph: `bouncing` }, "powering-down": { clips: [`Idle_B`], morph: `powering-down` }, humming: { clips: [`Idle_B`], face: `calm` }, notifying: { clips: [`Done_B`], face: `surprised` }, dragging: { clips: [`Idle_B`], face: `surprised` }, logo: { clips: [`Logo_A`, `Logo_B`] }, showcase: { clips: [`Marketing_A`, `Marketing_B`, `Marketing_C`, `Marketing_D`] }, turntable: { clips: [`Rotation_B`] } };
var uo = /* @__PURE__ */ new Map(oo.map((e) => [e.name, e]));
function fo(e) {
  let t = uo.get(e);
  if (t == null) throw Error(`No motion recipe named ${e}`);
  return t;
}
var po = `surprised`;
function mo(e, t, n) {
  let r = [...e];
  for (let e2 = r.length - 1; e2 > 0; --e2) ho(r, e2, Math.floor(t() * (e2 + 1)));
  let i = r.findIndex((e2) => e2 !== n);
  return i > 0 && ho(r, 0, i), r;
}
function ho(e, t, n) {
  let r = e[t], i = e[n];
  r !== void 0 && i !== void 0 && (e[t] = i, e[n] = r);
}
function go(e, t, n = {}) {
  let r = ba(n.seed ?? 1), i = /* @__PURE__ */ new Map(), a = n.isCompact ?? false, o = n.isResting ?? false, s2 = false, c = o, l = t, u = lo[t], d = 0, f2 = 0, p = e.loopCount, m = null, h = () => a && u.compactClips != null ? u.compactClips : u.clips, g = () => u.next != null && u.holdSeconds == null, _ = () => {
    let e2 = h(), t2 = i.get(e2) ?? [];
    return t2.length === 0 && t2.push(...mo(e2, r, m)), i.set(e2, t2), t2.shift();
  }, v = () => {
    let t2 = g() ? h()[f2] : _();
    if (p = e.loopCount, t2 === void 0 || t2 === m) return;
    let i2 = c || g();
    e.load(fo(t2), { phase: i2 ? 0 : n.firstPhase ?? r() }), c = true, m = t2, p = e.loopCount;
  }, y = () => {
    e.holdFace(u.face ?? (s2 ? po : null));
  }, b = (t2) => {
    l = t2, u = lo[t2], d = 0, f2 = 0, e.setMorph(u.morph ?? null), y(), o || v();
  };
  return o && e.rest(), b(t), { get state() {
    return l;
  }, get clip() {
    return m;
  }, setState(e2) {
    e2 !== l && b(e2);
  }, setCompact(e2) {
    a = e2;
  }, setEmphasis(e2) {
    e2 !== s2 && (s2 = e2, y());
  }, setResting(t2) {
    t2 !== o && (o = t2, o ? (e.rest(), m = null) : v());
  }, advance(t2) {
    if (o) return;
    d += t2;
    let n2 = u.next;
    n2 != null && u.holdSeconds != null && d >= u.holdSeconds ? b(n2) : e.loopCount !== p && (n2 != null && u.holdSeconds == null && (f2 += 1, f2 >= h().length) ? b(n2) : v());
  } };
}
var _o = 0.26;
var vo = 0.57;
var yo = 0.64;
var bo = 0.04;
var xo = 0.12;
var So = 11;
var Co = 18;
var wo = 48;
var To = 10;
var Eo = 64;
var Do = { on: false, oval: false, width: 0, height: 0, tilt: 0, cx: 0, cy: 0 };
var Oo = { cloud: { width: 0.21294, height: 0.4668299999999999, gap: 0.47001600000000004, shiftY: 0.06999999999999999 }, square: { width: 0.2553258426966292, height: 0.559752808988764, gap: 0.529408, shiftY: 0.12 }, sparkle: { width: 0.18381999999999998, height: 0.40298999999999996, gap: 0.41215999999999997, shiftY: 0 }, clover: { width: 0.23296, height: 0.51072, gap: 0.559104, shiftY: -0.020000000000000018 }, heartChubby: { width: 0.18657600000000002, height: 0.409032, gap: 0.44620799999999994, shiftY: 0.051999999999999935 }, starFlower: { width: 0.19292, height: 0.42294, gap: 0.38297600000000004, shiftY: 0.12 }, teardrop: { width: 0.20779200000000003, height: 0.455544, gap: 0.45260800000000007, shiftY: 0.18 }, tablet: { width: 0.2132, height: 0.4673999999999999, gap: 0.587776, shiftY: 0.01999999999999999 }, wedge: { width: 0.2132, height: 0.4673999999999999, gap: 0.46771199999999996, shiftY: 0.18 }, house: { width: 0.2295124, height: 0.5031617999999999, gap: 0.5125120000000001, shiftY: 0.18499534000463813 }, star6: { width: 0.184782, height: 0.44965988999999995, gap: 0.41913343999999997, shiftY: 0.12 }, pebble: { width: 0.23920000000000002, height: 0.5244, gap: 0.546304, shiftY: 0.12 }, bean: { width: 0.2028, height: 0.4446, gap: 0.4608, shiftY: 0.12 }, egg: { width: 0.23920000000000002, height: 0.5244, gap: 0.433664, shiftY: 0.11299906800092761 }, squircle: { width: 0.23920000000000002, height: 0.5244, gap: 0.5632, shiftY: 0.12 }, capsule: { width: 0.2106, height: 0.4617, gap: 0.36044800000000005, shiftY: 0.12 }, cylinder: { width: 0.23920000000000002, height: 0.5244, gap: 0.47872000000000003, shiftY: 0.12 }, hex: { width: 0.26, height: 0.57, gap: 0.64, shiftY: 0.12 }, gem: { width: 0.23920000000000002, height: 0.5244, gap: 0.501248, shiftY: 0.12 }, crystal: { width: 0.1612, height: 0.3534, gap: 0.3712, shiftY: 0.12 }, shield: { width: 0.26790400000000003, height: 0.5873280000000001, gap: 0.44492800000000005, shiftY: 0.12 }, dome: { width: 0.2132, height: 0.4673999999999999, gap: 0.47872000000000003, shiftY: 0.10599813600185524 }, arch: { width: 0.19240000000000002, height: 0.42179999999999995, gap: 0.44799999999999995, shiftY: 0.16 }, leaf: { width: 0.1872, height: 0.41039999999999993, gap: 0.44799999999999995, shiftY: 0.039999999999999994 } };
function ko(e, t) {
  let n = Oo[e], r = n.width / _o, i = n.height / vo, a = n.gap / yo;
  return t.every((e2) => Go(e2) && !(e2.fillRing != null && e2.fillRing.length > 0)) ? jo(No(t[0]), No(t[1]), n, r, i, a) : { loops: Po(t, r, a, i, 0, n.shiftY), shiftY: 0 };
}
function Ao(e) {
  return Po(e, 1, 1, 1, bo, xo);
}
function jo(e, t, n, r, i, a) {
  let o = I(e.width * r), s2 = I(e.height * r), c = I(t.width * r), l = I(t.height * r), u = Math.max(0, I(Math.min(o, s2))), d = Math.max(0, I(Math.max(o, s2))), f2 = Math.max(0, I(Math.min(c, l))), p = Math.max(0, I(Math.max(c, l))), m = Math.max(0, I((yo + (e.on ? I(e.cx) : 0) + (t.on ? I(t.cx) : 0)) * a, yo * a)), h = Math.max(0.05, Math.min(1.8, m));
  return { loops: [Mo(-1, u, d, -I(I(e.tilt) + (o >= s2 ? 0 : 90)), h), Mo(1, f2, p, I(I(t.tilt) + (c >= l ? 0 : 90)), h)], shiftY: I(n.shiftY + (I(e.cy) + I(t.cy)) / 2 * i, n.shiftY) };
}
function Mo(e, t, n, r, i) {
  let a = Math.max(0.01, Math.min(1, t)) / 2, o = Math.max(0.02, Math.min(1.8, Math.max(n, t))) / 2, s2 = -r * Math.PI / 180, c = Math.cos(s2), l = Math.sin(s2);
  return Array.from({ length: Eo }, (t2, n2) => {
    let r2 = 2 * Math.PI * n2 / Eo, s3 = e * o * Math.cos(r2), u = a * Math.sin(r2);
    return { x: s3 * c - u * l + e * i / 2, y: s3 * l + u * c };
  });
}
function No(e) {
  let t = Go(e);
  if (!(e.wid > 0) && !t) return Do;
  let n = e.lidY || 1, r = (e.tilt || 0) * (180 / Math.PI);
  if (t) return { on: true, oval: true, width: 2 * e.oval[0], height: 2 * e.oval[1] * n, tilt: r, cx: e.off[0], cy: e.off[1] };
  let i = e.pts;
  if (i.length < 2) return { ...Do, cx: e.off[0], cy: e.off[1] };
  let a = i[0], o = i[i.length - 1], s2 = o[0] - a[0], c = o[1] - a[1], l = Math.hypot(s2, c), u = 2 * e.wid;
  return { on: true, oval: false, width: u, height: (l + u) * n, tilt: 180 / Math.PI * Math.atan2(s2, c) + r, cx: e.off[0] + (a[0] + o[0]) / 2, cy: e.off[1] + (a[1] + o[1]) / 2 * n };
}
function Po(e, t, n, r, i, a) {
  let o = [], s2 = Math.sin(i), c = -Math.sin(a);
  return e.forEach((e2, i2) => {
    let a2 = Go(e2);
    if (!(e2.wid > 0) && !a2 || !a2 && e2.pts.length < 2) return;
    let l = i2 === 0 ? -1 : 1, u = e2.lidY || 1, d = Math.cos(e2.tilt || 0), f2 = Math.sin(e2.tilt || 0), p = l * ((yo / 2 + I(e2.off[0])) * n) + s2, m = c + I(e2.off[1]) * r, h = (e3, n2) => {
      let r2 = e3 * d - n2 * f2, i3 = e3 * f2 + n2 * d;
      return { x: p + l * r2 * t, y: m + i3 * t * u };
    };
    if (e2.fillRing != null && e2.fillRing.length >= 3) {
      let t2 = I(e2.off[0]), n2 = I(e2.off[1]);
      o.push(e2.fillRing.map(([e3, r2]) => h(e3 - t2, (r2 - n2) * u)));
      return;
    }
    if (a2) {
      let t2 = [];
      for (let n2 = 0; n2 < wo; n2++) {
        let r2 = 2 * Math.PI * n2 / wo;
        t2.push(h(e2.oval[0] * Math.cos(r2), e2.oval[1] * u * Math.sin(r2)));
      }
      o.push(t2);
      return;
    }
    let g = e2.wid * t, _ = e2.path != null && e2.path.length === Co ? Io(e2.path, h, g) : Fo(e2.pts.map((e3) => h(e3[0], e3[1])), g);
    _.length > 0 && o.push(_);
  }), o;
}
function Fo(e, t) {
  let n = [];
  for (let t2 of e) {
    let e2 = n.at(-1);
    (e2 == null || Math.hypot(t2.x - e2.x, t2.y - e2.y) > 1e-6) && n.push(t2);
  }
  if (n.length === 0 || t <= 0) return [];
  let r = zo(n, t);
  if (r != null) return r;
  let i = n.length;
  if (i < 2) return [];
  let a = [], o = [];
  for (let e2 = 0; e2 < i; e2++) {
    let t2 = n[Math.max(0, e2 - 1)], r2 = n[Math.min(i - 1, e2 + 1)], s2 = Math.hypot(r2.x - t2.x, r2.y - t2.y) || 1, c = -(r2.y - t2.y) / s2, l = (r2.x - t2.x) / s2;
    e2 > 0 && c * a[e2 - 1] + l * o[e2 - 1] < 0 && (c = -c, l = -l), a.push(c), o.push(l);
  }
  return Lo(n, a, o, t, Wo(n[1].x - n[0].x, n[1].y - n[0].y), Wo(n[i - 1].x - n[i - 2].x, n[i - 1].y - n[i - 2].y));
}
function Io(e, t, n) {
  if (n <= 0) return [];
  let r = [];
  for (let n2 = 0; n2 < 2; n2++) {
    let i2 = Bo(e, n2), a2 = Vo(e, n2, 4), o2 = Vo(e, n2 + 1, 2), s3 = Bo(e, n2 + 1);
    for (let e2 = n2 === 0 ? 0 : 1; e2 < So; e2++) {
      let n3 = e2 / 10, c2 = Ho(i2, a2, o2, s3, n3), l2 = Uo(i2, a2, o2, s3, n3), u2 = t(c2[0], c2[1]), d2 = t(c2[0] + l2[0], c2[1] + l2[1]);
      r.push({ x: u2.x, y: u2.y, tx: d2.x - u2.x, ty: d2.y - u2.y });
    }
  }
  let i = zo(r, n);
  if (i != null) return i;
  let a = r.length, o = [], s2 = [];
  for (let e2 = 0; e2 < a; e2++) {
    let t2 = Math.hypot(r[e2].tx, r[e2].ty) || 1, n2 = -r[e2].ty / t2, i2 = r[e2].tx / t2;
    e2 > 0 && n2 * o[e2 - 1] + i2 * s2[e2 - 1] < 0 && (n2 = -n2, i2 = -i2), o.push(n2), s2.push(i2);
  }
  let c = r[0], l = r[a - 1], u = Math.hypot(c.tx, c.ty) || 1, d = Math.hypot(l.tx, l.ty) || 1;
  return Lo(r, o, s2, n, { x: c.tx / u, y: c.ty / u }, { x: l.tx / d, y: l.ty / d });
}
function Lo(e, t, n, r, i, a) {
  let o = e.length, s2 = e.map((e2, i2) => ({ x: e2.x + t[i2] * r, y: e2.y + n[i2] * r })), c = e.map((e2, i2) => ({ x: e2.x - t[i2] * r, y: e2.y - n[i2] * r })), l = { x: e[0].x - i.x * r, y: e[0].y - i.y * r }, u = { x: e[o - 1].x + a.x * r, y: e[o - 1].y + a.y * r };
  return [...s2, ...Ro(e[o - 1], s2[o - 1], u, r), ...[...c].reverse(), ...Ro(e[0], c[0], l, r)];
}
function Ro(e, t, n, r) {
  let i = [], a = Math.atan2(t.y - e.y, t.x - e.x), o = Math.atan2(n.y - e.y, n.x - e.x) - a;
  for (; o > Math.PI; ) o -= 2 * Math.PI;
  for (; o < -Math.PI; ) o += 2 * Math.PI;
  let s2 = o >= 0 ? 1 : -1;
  for (let t2 = 1; t2 < To; t2++) {
    let n2 = a + t2 / To * s2 * Math.PI;
    i.push({ x: e.x + r * Math.cos(n2), y: e.y + r * Math.sin(n2) });
  }
  return i;
}
function zo(e, t) {
  let n = 0, r = 0;
  for (let t2 of e) n += t2.x, r += t2.y;
  n /= e.length, r /= e.length;
  let i = 0;
  for (let t2 of e) i = Math.max(i, Math.hypot(t2.x - n, t2.y - r));
  if (t <= i * 1.05) return null;
  let a = [];
  for (let n2 = 0; n2 < wo; n2++) {
    let r2 = 2 * Math.PI * n2 / wo, i2 = Math.cos(r2), o = Math.sin(r2), s2 = -1 / 0, c = 0, l = 0;
    for (let t2 of e) {
      let e2 = t2.x * i2 + t2.y * o;
      e2 > s2 && (s2 = e2, c = t2.x, l = t2.y);
    }
    a.push({ x: c + i2 * t, y: l + o * t });
  }
  return a;
}
function Bo(e, t) {
  return [e[t * 6], e[t * 6 + 1]];
}
function Vo(e, t, n) {
  return [e[t * 6] + e[t * 6 + n], e[t * 6 + 1] + e[t * 6 + n + 1]];
}
function Ho(e, t, n, r, i) {
  let a = 1 - i;
  return [a * a * a * e[0] + 3 * a * a * i * t[0] + 3 * a * i * i * n[0] + i * i * i * r[0], a * a * a * e[1] + 3 * a * a * i * t[1] + 3 * a * i * i * n[1] + i * i * i * r[1]];
}
function Uo(e, t, n, r, i) {
  let a = 1 - i;
  return [3 * a * a * (t[0] - e[0]) + 6 * a * i * (n[0] - t[0]) + 3 * i * i * (r[0] - n[0]), 3 * a * a * (t[1] - e[1]) + 6 * a * i * (n[1] - t[1]) + 3 * i * i * (r[1] - n[1])];
}
function Wo(e, t) {
  let n = Math.hypot(e, t) || 1;
  return { x: e / n, y: t / n };
}
function Go(e) {
  return e.oval[0] > 1e-4 && e.oval[1] > 1e-4;
}
function I(e, t = 0) {
  return Number.isFinite(e) ? e : t;
}
var L = 114.2705;
var Ko = (e, t, n) => e.map(([e2, r], i) => [e2 + (t[i][0] - e2) * n, r + (t[i][1] - r) * n]);
var qo = 1e-10;
var Jo = 2 ** 26;
function Yo(e) {
  let t = Xo(e);
  if (t == null) return [];
  let n = ts(t.map((t2) => e[t2])), [r, i, a, o] = t, s2 = [[r, i, a], [r, i, o], [r, a, o], [i, a, o]].map(([t2, r2, i2]) => {
    let a2 = Zo(e, [t2, r2, i2]);
    return Qo(a2, n) > 0 ? Zo(e, [t2, i2, r2]) : a2;
  });
  return e.forEach((n2, r2) => {
    if (t.includes(r2)) return;
    let i2 = s2.map((e2) => Qo(e2, n2) > qo);
    if (!i2.includes(true)) return;
    let a2 = /* @__PURE__ */ new Set();
    s2.forEach((e2, t2) => {
      if (!i2[t2]) for (let t3 = 0; t3 < 3; t3++) a2.add($o(e2.corners[t3], e2.corners[(t3 + 1) % 3]));
    });
    let o2 = [];
    s2.forEach((t2, n3) => {
      if (!i2[n3]) o2.push(t2);
      else for (let n4 = 0; n4 < 3; n4++) {
        let i3 = t2.corners[n4], s3 = t2.corners[(n4 + 1) % 3];
        a2.has($o(s3, i3)) && o2.push(Zo(e, [i3, s3, r2]));
      }
    }), s2 = o2;
  }), s2.map((e2) => e2.corners);
}
function Xo(e) {
  if (e.length < 4) return null;
  let t = 0;
  e.forEach((n2, r2) => {
    n2[0] < e[t][0] && (t = r2);
  });
  let n = es(e, (n2) => as(ns(n2, e[t]))), r = es(e, (r2) => as(rs(ns(e[n], e[t]), ns(r2, e[t])))), i = rs(ns(e[n], e[t]), ns(e[r], e[t])), a = es(e, (n2) => Math.abs(is(i, ns(n2, e[t]))));
  return Math.abs(is(i, ns(e[a], e[t]))) < qo ? null : [t, n, r, a];
}
function Zo(e, t) {
  let n = e[t[0]], r = rs(ns(e[t[1]], n), ns(e[t[2]], n)), i = as(r) || 1, a = [r[0] / i, r[1] / i, r[2] / i];
  return { corners: t, normal: a, offset: is(a, n) };
}
function Qo(e, t) {
  return is(e.normal, t) - e.offset;
}
function $o(e, t) {
  return e * Jo + t;
}
function es(e, t) {
  let n = 0, r = -1 / 0;
  return e.forEach((e2, i) => {
    let a = t(e2);
    a > r && (r = a, n = i);
  }), n;
}
function ts(e) {
  let t = e.length;
  return [e.reduce((e2, t2) => e2 + t2[0], 0) / t, e.reduce((e2, t2) => e2 + t2[1], 0) / t, e.reduce((e2, t2) => e2 + t2[2], 0) / t];
}
function ns(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function rs(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function is(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function as(e) {
  return Math.hypot(e[0], e[1], e[2]);
}
var os = [{ x: 0.934475052698969, y: 0.004363180216799212 }, { x: 0.948891570423846, y: 0.039714756021395174 }, { x: 0.9608728659762679, y: 0.07607039935952659 }, { x: 0.9703302557200477, y: 0.11326502451357987 }, { x: 0.977189539605176, y: 0.15112675873557632 }, { x: 0.9813908922405818, y: 0.18947802927479046 }, { x: 0.9828887074578869, y: 0.2281365499571005 }, { x: 0.9816519990958227, y: 0.2669163757988432 }, { x: 0.9776625497902636, y: 0.30562830330137525 }, { x: 0.9709166586711733, y: 0.3440810419322467 }, { x: 0.9614266573440594, y: 0.3820827122339433 }, { x: 0.949221424670692, y: 0.41944230284893746 }, { x: 0.9343467338379507, y: 0.45597122804302315 }, { x: 0.9168643128164508, y: 0.49148439126889626 }, { x: 0.8968538338085426, y: 0.5258027955519334 }, { x: 0.8744135590875667, y: 0.5587560766363049 }, { x: 0.8496605481016927, y: 0.5901852347689388 }, { x: 0.8227287687893752, y: 0.6199442885313702 }, { x: 0.7937617531488526, y: 0.6478973166280976 }, { x: 0.762905919754175, y: 0.6739136951531549 }, { x: 0.7303134746505421, y: 0.6978700569784003 }, { x: 0.6961411032024281, y: 0.7196491755310737 }, { x: 0.6605596057818293, y: 0.7391502303914683 }, { x: 0.6237513457393834, y: 0.7562897143525837 }, { x: 0.5859073404691287, y: 0.7710015652906158 }, { x: 0.5472248974285161, y: 0.7832374824769789 }, { x: 0.507904865265839, y: 0.7929662862613107 }, { x: 0.4681494646643414, y: 0.8001734773422571 }, { x: 0.4281602030115182, y: 0.8048604074486263 }, { x: 0.38813613170852307, y: 0.8070434681543606 }, { x: 0.34827256966973696, y: 0.8067537475134688 }, { x: 0.3087597745583025, y: 0.8040363403785654 }, { x: 0.26978201344672026, y: 0.7989504065912386 }, { x: 0.23151662960878241, y: 0.7915694823366872 }, { x: 0.19413194481287305, y: 0.7819778247879767 }, { x: 0.1577852845947917, y: 0.7702630818507747 }, { x: 0.12262733079593371, y: 0.7565354795442158 }, { x: 0.08880015313138229, y: 0.7409422361214794 }, { x: 0.05642586889159421, y: 0.7236017950683938 }, { x: 0.02561647598492663, y: 0.704659966051552 }, { x: -0.0036037810305528913, y: 0.6895105233164277 }, { x: -0.03317542334906984, y: 0.7095400285365243 }, { x: -0.06438496917371282, y: 0.7280864309789705 }, { x: -0.0971349646590295, y: 0.7450166000084965 }, { x: -0.13130575647382275, y: 0.7601465770772312 }, { x: -0.16677330012669841, y: 0.7733777436363767 }, { x: -0.20339569964825052, y: 0.7845796245158417 }, { x: -0.24101725346433553, y: 0.7936313321637897 }, { x: -0.27947704857143557, y: 0.8004456020397803 }, { x: -0.3186049196302664, y: 0.8049436403918587 }, { x: -0.35822225014656567, y: 0.8070572252942809 }, { x: -0.398143514039767, y: 0.8067313311007664 }, { x: -0.438177182680152, y: 0.8039242993502419 }, { x: -0.478126841210925, y: 0.7986084072202804 }, { x: -0.5177925726656645, y: 0.7907706714017452 }, { x: -0.5569723963185897, y: 0.7804134068929688 }, { x: -0.5954640748960385, y: 0.7675550146764192 }, { x: -0.6330671972405764, y: 0.7522306880298593 }, { x: -0.6695855487964426, y: 0.734492987733704 }, { x: -0.7048299443180804, y: 0.714412410733904 }, { x: -0.7386209319309059, y: 0.6920772477931056 }, { x: -0.7707921245520308, y: 0.6675935661866239 }, { x: -0.8011924150225685, y: 0.641083697347949 }, { x: -0.8296683466506882, y: 0.612669941116809 }, { x: -0.8560711521836232, y: 0.5824818706921402 }, { x: -0.8802586099360401, y: 0.550657644865542 }, { x: -0.9021016261853626, y: 0.5173474030319016 }, { x: -0.921488351217944, y: 0.48271361643050537 }, { x: -0.9383250626073236, y: 0.44692900756649523 }, { x: -0.9525363976829352, y: 0.4101742582574272 }, { x: -0.9640652637601566, y: 0.37263580242597466 }, { x: -0.9728702117174652, y: 0.3345029815392968 }, { x: -0.9789264673905609, y: 0.2959671170672982 }, { x: -0.9822255348467005, y: 0.25722000690078245 }, { x: -0.982774894246464, y: 0.21845258628445002 }, { x: -0.9805967489497907, y: 0.17985349925722946 }, { x: -0.9757258679433654, y: 0.1416078138454962 }, { x: -0.9682107746348935, y: 0.1038965717106635 }, { x: -0.9581143826889033, y: 0.06689596974801386 }, { x: -0.9455146116784895, y: 0.03077634172969411 }, { x: -0.9305051553319804, y: -0.004299067407576291 }, { x: -0.9131952327192244, y: -0.038175545674491246 }, { x: -0.8937019647378253, y: -0.07070785611844921 }, { x: -0.8721591451869681, y: -0.10176130887451734 }, { x: -0.8487362913086253, y: -0.1312168064224554 }, { x: -0.8236207468105732, y: -0.15897343836917888 }, { x: -0.7970979502287641, y: -0.18497038865757742 }, { x: -0.7710541733734617, y: -0.2096139557882936 }, { x: -0.7461193861529073, y: -0.23320814197562353 }, { x: -0.7221519248227056, y: -0.2558870618710858 }, { x: -0.6990265515010246, y: -0.27776911859221876 }, { x: -0.6766318459161248, y: -0.29895980890191903 }, { x: -0.6548676461286994, y: -0.31955389248594185 }, { x: -0.6336431338424889, y: -0.3396372581810514 }, { x: -0.6128753135059731, y: -0.359288557412959 }, { x: -0.5924873537443393, y: -0.3785803988633805 }, { x: -0.5724075923763201, y: -0.3975806113171165 }, { x: -0.5525683653066091, y: -0.4163531831687479 }, { x: -0.5329051623123328, y: -0.43495923867716463 }, { x: -0.5133556323648999, y: -0.45345775659418885 }, { x: -0.49385881021048816, y: -0.47190633957419137 }, { x: -0.4743544952965227, y: -0.4903620705111528 }, { x: -0.4547822689301765, y: -0.5088820023697915 }, { x: -0.43508096787875605, y: -0.5275240823754965 }, { x: -0.41518776564532156, y: -0.5463477370262614 }, { x: -0.39503744073179237, y: -0.565414738403984 }, { x: -0.37456138068841166, y: -0.584789881188713 }, { x: -0.3536868090571391, y: -0.6045421927475639 }, { x: -0.33233545822868515, y: -0.6247456276706727 }, { x: -0.31042247776931897, y: -0.6454805113116225 }, { x: -0.28785488995869934, y: -0.6668347728530055 }, { x: -0.26452992996104363, y: -0.6889057008744045 }, { x: -0.24032737271767535, y: -0.7117848186103969 }, { x: -0.21465925160321186, y: -0.7340046463187382 }, { x: -0.18703495679704094, y: -0.7534714425430167 }, { x: -0.15772553428835867, y: -0.7700652053068575 }, { x: -0.1270070450444056, y: -0.7836711911119708 }, { x: -0.0951684130469074, y: -0.7942311382405959 }, { x: -0.062495032850901626, y: -0.8016579582061256 }, { x: -0.02928242470209217, y: -0.8059763869703366 }, { x: 0.00418250025635626, y: -0.8071603933705995 }, { x: 0.03761179305139532, y: -0.8051997052887491 }, { x: 0.07071763099568142, y: -0.8001090083866196 }, { x: 0.10320959245128111, y: -0.7918885098432591 }, { x: 0.134798677354145, y: -0.7805799374564395 }, { x: 0.16519657722647352, y: -0.7662371932046725 }, { x: 0.1941137081486192, y: -0.748919054724023 }, { x: 0.22126182274327255, y: -0.7287044591356419 }, { x: 0.24646172395988103, y: -0.705992917688509 }, { x: 0.27042811605651085, y: -0.6833113574191189 }, { x: 0.2935522498121435, y: -0.6614269249128338 }, { x: 0.31594558408750634, y: -0.6402340573221494 }, { x: 0.33770831010282365, y: -0.6196380408622824 }, { x: 0.3589311734375708, y: -0.5995528607013482 }, { x: 0.3796973337781967, y: -0.579900027393222 }, { x: 0.40008347985475634, y: -0.5606067493570983 }, { x: 0.4201613352275292, y: -0.5416052696177914 }, { x: 0.4399985323371352, y: -0.5228315569692281 }, { x: 0.4596595725296922, y: -0.504224454308306 }, { x: 0.47920690986264164, y: -0.4857251046289992 }, { x: 0.4987013585100146, y: -0.46727574968264535 }, { x: 0.5182031792984406, y: -0.44881937116377135 }, { x: 0.5377727619439542, y: -0.4302988919363394 }, { x: 0.5574712942997964, y: -0.41165639717445024 }, { x: 0.5773615598171413, y: -0.39283243400856016 }, { x: 0.5975088031531646, y: -0.3737652763272414 }, { x: 0.6179815681468954, y: -0.3543900575947271 }, { x: 0.6388526754619042, y: -0.3346378544777047 }, { x: 0.6602003073706015, y: -0.3144346462096216 }, { x: 0.6821093031111911, y: -0.2937001458611249 }, { x: 0.7046726622334125, y: -0.2723464324690267 }, { x: 0.7279930725720649, y: -0.25027624068777876 }, { x: 0.752199978996238, y: -0.22738555814564856 }, { x: 0.7774207173704459, y: -0.20355017023582161 }, { x: 0.8037647094696927, y: -0.17862206250636986 }, { x: 0.8300422031017065, y: -0.15219910918500412 }, { x: 0.8547554784773178, y: -0.1240094996536292 }, { x: 0.8777124848745345, y: -0.09414272665900433 }, { x: 0.8987592287763329, y: -0.06270816362882596 }, { x: 0.9177264967761565, y: -0.029827205842901418 }];
var ss = Math.PI * 2;
var R = (e) => Math.round(e * 100) / 100;
var cs = (e, t, n) => e < t ? t : e > n ? n : e;
var ls = class {
  d = ``;
  move(e, t) {
    return this.d += `M${R(e)} ${R(t)}`, this;
  }
  line(e, t) {
    return this.d += `L${R(e)} ${R(t)}`, this;
  }
  curve(e, t, n, r, i, a) {
    return this.d += `C${R(e)} ${R(t)} ${R(n)} ${R(r)} ${R(i)} ${R(a)}`, this;
  }
  corner(e, t, n, r) {
    let i = (e2, t2) => {
      let n2 = e2[0] - t2[0], r2 = e2[1] - t2[1], i2 = Math.hypot(n2, r2) || 1;
      return [n2 / i2, r2 / i2];
    }, a = i(e, t), o = i(n, t), s2 = [t[0] + a[0] * r, t[1] + a[1] * r], c = [t[0] + o[0] * r, t[1] + o[1] * r];
    return this.d ? this.line(s2[0], s2[1]) : this.move(s2[0], s2[1]), this.d += `Q${R(t[0])} ${R(t[1])} ${R(c[0])} ${R(c[1])}`, this;
  }
  arc(e, t, n, r, i, a) {
    let o = Math.max(1, Math.ceil(Math.abs(a - i) / (Math.PI / 2))), s2 = (a - i) / o, c = 4 / 3 * Math.tan(s2 / 4), l = i;
    for (let i2 = 0; i2 < o; i2++) {
      let i3 = l + s2, a2 = [e + n * Math.cos(l), t + r * Math.sin(l)], o2 = [e + n * Math.cos(i3), t + r * Math.sin(i3)];
      this.curve(a2[0] - c * n * Math.sin(l), a2[1] + c * r * Math.cos(l), o2[0] + c * n * Math.sin(i3), o2[1] - c * r * Math.cos(i3), o2[0], o2[1]), l = i3;
    }
    return this;
  }
  close() {
    return this.d + `Z`;
  }
};
var us = (e) => {
  let t = e.length, n = `M${R(e[0][0])} ${R(e[0][1])}`;
  for (let r = 0; r < t; r++) {
    let i = e[(r - 1 + t) % t], a = e[r], o = e[(r + 1) % t], s2 = e[(r + 2) % t];
    n += `C${R(a[0] + (o[0] - i[0]) / 6)} ${R(a[1] + (o[1] - i[1]) / 6)} ${R(o[0] - (s2[0] - a[0]) / 6)} ${R(o[1] - (s2[1] - a[1]) / 6)} ${R(o[0])} ${R(o[1])}`;
  }
  return n + `Z`;
};
var ds = (e, t = 128) => {
  let n = [];
  for (let r = 0; r < t; r++) n.push(e(r / t * ss));
  return us(n);
};
var fs = (e, t) => {
  let n = new ls(), r = e.length;
  for (let i = 0; i < r; i++) {
    let a = typeof t == `number` ? t : t[i % t.length];
    n.corner(e[(i - 1 + r) % r], e[i], e[(i + 1) % r], a);
  }
  return n.close();
};
var ps = (e, t, n, r = 0) => fs(Array.from({ length: t }, (n2, i) => {
  let a = r + i / t * ss;
  return [L + Math.cos(a) * e, L + Math.sin(a) * e];
}), n);
var ms = (e, t = 160) => ds((t2) => {
  let n = Math.cos(t2), r = Math.sin(t2), i = 0;
  for (let [t3, a, o] of e) {
    let e2 = t3 - L, s2 = a - L, c = n * e2 + r * s2, l = c * c - (e2 * e2 + s2 * s2) + o * o;
    if (l <= 0) continue;
    let u = c + Math.sqrt(l);
    u > i && (i = u);
  }
  return [L + n * i, L + r * i];
}, t);
var hs = (e, t, n) => ds((r) => {
  let i = Math.cos(r), a = Math.sin(r);
  return [L + Math.sign(i) * Math.abs(i) ** (2 / n) * e, L + Math.sign(a) * Math.abs(a) ** (2 / n) * t];
});
var gs = (e, t) => new ls().move(L - e + t, L - t).line(L + e - t, L - t).arc(L + e - t, L, t, t, -Math.PI / 2, Math.PI / 2).line(L - e + t, L + t).arc(L - e + t, L, t, t, Math.PI / 2, Math.PI * 3 / 2).close();
var _s = (e, t) => new ls().move(L - e, L + t - e).line(L - e, L - t + e).arc(L, L - t + e, e, e, Math.PI, ss).line(L + e, L + t - e).arc(L, L + t - e, e, e, 0, Math.PI).close();
var vs = (e, t, n) => new ls().move(L - e, L - t + n).arc(L, L - t + n, e, n, Math.PI, ss).line(L + e, L + t - n).arc(L, L + t - n, e, n, 0, Math.PI).close();
var ys = (e, t, n) => {
  let r = L + t;
  return new ls().move(L - e, r - n).arc(L, r - n, e, 2 * t - n, Math.PI, ss).line(L + e, r - n).curve(L + e, r, L + e, r, L + e - n, r).line(L - e + n, r).curve(L - e, r, L - e, r, L - e, r - n).close();
};
var bs = (e, t, n) => {
  let r = L + t, i = L - t + e;
  return new ls().move(L - e, i).arc(L, i, e, e, Math.PI, ss).line(L + e, r - n).curve(L + e, r, L + e, r, L + e - n, r).line(L - e + n, r).curve(L - e, r, L - e, r, L - e, r - n).close();
};
var xs = (e, t, n) => {
  let r = L - t, i = L + t;
  return new ls().move(L - e, r + n).curve(L - e, r - 2, L - e * 0.5, r - 10, L, r - 10).curve(L + e * 0.5, r - 10, L + e, r - 2, L + e, r + n).curve(L + e, L + t * 0.42, L + e * 0.62, i, L, i).curve(L - e * 0.62, i, L - e, L + t * 0.42, L - e, r + n).close();
};
var Ss = (e, t, n) => ds((r) => {
  let i = Math.cos(r), a = Math.sin(r), o = (1 - a) / 2;
  return [L + i * e * (1 - n * o * o), L + a * t];
});
var Cs = (e, t, n, r) => {
  let i = cs(e / (n - t), -1, 1), a = Math.sqrt(1 - i * i), o = [L + e * a, n - e * i], s2 = [L - e * a, n - e * i], c = Math.atan2(o[1] - n, o[0] - L);
  return new ls().corner(o, [L, t], s2, r).line(s2[0], s2[1]).arc(L, n, e, e, Math.PI - c, c).close();
};
var ws = (e, t) => fs([[L - e, L - e], [L + e, L - e], [L + e, L + e], [L - e, L + e]], t);
var Ts = (e, t, n, r) => fs([[L - e, L + t], [L + e, L + t], [L + e, L - t + n], [L, L - t], [L - e, L - t + n]], r);
var Es = `M79.4511 11.5693C94.8767 -3.85636 119.887 -3.85622 135.312 11.5693C150.738 26.995 150.738 52.0049 135.312 67.4306L129.302 73.4404L129.303 73.4414L83.7724 118.972C81.8111 120.933 79.4309 122.22 76.9199 122.833C76.463 122.944 76.0018 123.034 75.538 123.101C74.1477 123.301 72.734 123.301 71.3437 123.101C70.8802 123.034 70.4194 122.944 69.9628 122.833C69.8486 122.805 69.7347 122.776 69.621 122.745C69.3938 122.684 69.1679 122.616 68.9433 122.544C67.4837 122.073 66.0831 121.367 64.8017 120.426C64.6047 120.281 64.4108 120.13 64.2197 119.975C63.837 119.662 63.466 119.328 63.1093 118.972L11.5693 67.4306C-3.85643 52.0049 -3.85642 26.995 11.5693 11.5693C26.995 -3.85643 52.0049 -3.85643 67.4306 11.5693L73.4404 17.579L79.4511 11.5693Z`;
var Ds = `M58.9438 9.25323C63.2492 -3.08441 80.6974 -3.08441 85.0027 9.25322L91.7612 28.6207C94.0136 35.0751 100.652 38.9078 107.368 37.6311L127.52 33.8004C140.357 31.3602 149.081 46.4708 140.549 56.3681L127.156 71.9049C122.692 77.0827 122.692 84.748 127.156 89.9258L140.549 105.463C149.081 115.36 140.357 130.471 127.52 128.03L107.368 124.2C100.652 122.923 94.0136 126.756 91.7612 133.21L85.0027 152.577C80.6974 164.915 63.2492 164.915 58.9438 152.577L52.1853 133.21C49.933 126.756 43.2946 122.923 36.5788 124.2L16.4268 128.03C3.58942 130.471 -5.1347 115.36 3.39733 105.463L16.7908 89.9258C21.2543 84.748 21.2543 77.0827 16.7908 71.9049L3.39734 56.3681C-5.13469 46.4708 3.58941 31.3602 16.4268 33.8004L36.5787 37.6311C43.2946 38.9078 49.933 35.0751 52.1853 28.6207L58.9438 9.25323Z`;
var Os = `M93.9365 0.100586C98.4439 -0.387322 102.691 0.897134 106.341 4.03418C111.502 8.47087 114.842 16.0545 116.636 25.2725C118.36 34.1341 118.716 44.8177 117.701 56.4346L117.707 56.4375L117.706 56.4443C122.25 58.5638 126.519 60.8171 130.449 63.168C130.485 63.1891 130.52 63.2103 130.556 63.2314C131.25 63.6478 131.934 64.067 132.607 64.4893C132.68 64.5349 132.753 64.5813 132.825 64.627C133.074 64.7838 133.322 64.941 133.567 65.0986C133.692 65.1787 133.816 65.2596 133.94 65.3398C134.138 65.4676 134.335 65.5954 134.53 65.7236C134.653 65.8039 134.775 65.8844 134.896 65.9648C135.112 66.1073 135.325 66.2506 135.538 66.3936C135.625 66.4522 135.713 66.5106 135.8 66.5693C138.866 68.645 141.667 70.7792 144.163 72.9502C149.754 77.8126 153.981 83.0002 156.136 88.2578C156.159 88.3133 156.181 88.3693 156.203 88.4248C156.268 88.5868 156.332 88.749 156.393 88.9111C156.435 89.0226 156.475 89.1346 156.516 89.2461C156.541 89.3175 156.566 89.3895 156.591 89.4609C157.443 91.8917 157.839 94.3199 157.696 96.7109C157.522 99.7997 156.469 102.655 154.613 105.192C154.236 105.709 153.826 106.208 153.388 106.692C153.365 106.717 153.343 106.742 153.32 106.767C153.171 106.93 153.019 107.091 152.863 107.25C152.844 107.27 152.824 107.29 152.804 107.311C152.3 107.822 151.762 108.316 151.191 108.79C151.168 108.81 151.144 108.83 151.12 108.85C150.952 108.988 150.781 109.125 150.607 109.261C150.558 109.299 150.509 109.337 150.46 109.375C150.282 109.512 150.101 109.648 149.917 109.781C149.903 109.792 149.888 109.801 149.874 109.812C149.255 110.26 148.605 110.689 147.926 111.1C147.795 111.179 147.662 111.256 147.528 111.334C147.41 111.403 147.292 111.473 147.173 111.541C146.915 111.687 146.653 111.832 146.388 111.974C146.316 112.012 146.243 112.047 146.171 112.085C145.978 112.186 145.783 112.287 145.586 112.386C145.459 112.449 145.331 112.511 145.203 112.573C145.048 112.649 144.891 112.723 144.733 112.797C144.614 112.853 144.494 112.909 144.373 112.964C144.198 113.044 144.021 113.122 143.843 113.2C143.722 113.253 143.6 113.306 143.478 113.358C143.288 113.439 143.096 113.519 142.903 113.598C142.836 113.625 142.769 113.655 142.701 113.683C142.662 113.698 142.622 113.712 142.583 113.728C142.371 113.812 142.156 113.895 141.94 113.978C141.847 114.013 141.753 114.051 141.658 114.086C140.71 114.441 139.731 114.771 138.725 115.078C138.613 115.112 138.502 115.145 138.39 115.179C138.257 115.218 138.123 115.26 137.989 115.299C137.911 115.322 137.831 115.343 137.752 115.365C137.61 115.406 137.467 115.446 137.324 115.485C137.095 115.549 136.863 115.611 136.63 115.672C136.52 115.701 136.41 115.73 136.3 115.759C136.064 115.819 135.827 115.879 135.588 115.938C135.451 115.971 135.314 116.004 135.177 116.037C134.975 116.085 134.772 116.131 134.568 116.178C134.312 116.236 134.054 116.294 133.795 116.35C133.535 116.406 133.274 116.461 133.011 116.515C132.85 116.547 132.688 116.578 132.525 116.61C132.333 116.648 132.14 116.686 131.946 116.723C131.689 116.771 131.43 116.818 131.17 116.864C131.075 116.881 130.979 116.898 130.884 116.914C130.595 116.964 130.304 117.012 130.012 117.06C129.932 117.073 129.851 117.085 129.771 117.098C129.484 117.143 129.196 117.188 128.906 117.23C128.818 117.243 128.729 117.256 128.641 117.269C127.33 117.457 125.983 117.62 124.601 117.755C124.468 117.768 124.336 117.782 124.203 117.794C123.92 117.82 123.636 117.845 123.351 117.869C123.24 117.878 123.13 117.888 123.02 117.897C122.701 117.923 122.381 117.948 122.059 117.971C121.967 117.977 121.874 117.984 121.782 117.99C121.463 118.012 121.143 118.033 120.82 118.053C120.73 118.058 120.639 118.063 120.549 118.068C119.546 118.126 118.527 118.171 117.492 118.202C117.322 118.207 117.151 118.213 116.979 118.218C116.785 118.223 116.59 118.225 116.395 118.229C116.147 118.235 115.899 118.24 115.65 118.244C115.415 118.248 115.178 118.25 114.94 118.252C114.688 118.254 114.435 118.256 114.181 118.257C114.008 118.257 113.835 118.257 113.662 118.257C113.32 118.256 112.976 118.255 112.631 118.252C112.503 118.251 112.375 118.25 112.247 118.248C111.858 118.243 111.466 118.237 111.073 118.229C110.984 118.227 110.894 118.226 110.804 118.224C107.734 118.154 104.558 117.977 101.289 117.69C96.3593 128.261 90.7082 137.338 84.7832 144.151C78.6204 151.238 71.9357 156.137 65.2471 157.399C60.5179 158.292 56.1975 157.281 52.5381 154.604C48.9431 151.975 46.1246 147.845 44.0479 142.691C40.0321 132.725 38.5457 118.333 40.043 101.281C40.0382 101.279 40.0331 101.277 40.0283 101.274C39.6986 101.121 39.3711 100.965 39.0449 100.811C38.8351 100.711 38.6254 100.612 38.417 100.512C38.0794 100.35 37.7438 100.186 37.4102 100.023C37.2392 99.9399 37.0684 99.8563 36.8984 99.7725C36.5886 99.6196 36.2801 99.4663 35.9736 99.3125C35.7564 99.2034 35.5398 99.0939 35.3242 98.9844C34.9817 98.8104 34.6409 98.636 34.3027 98.4609C34.2424 98.4297 34.1823 98.3975 34.1221 98.3662C19.2858 90.6566 8.70839 81.8767 3.56055 73.3232C3.50461 73.2303 3.44926 73.137 3.39453 73.0439C3.37308 73.0075 3.35134 72.971 3.33008 72.9346C3.19352 72.7003 3.06142 72.4652 2.93262 72.2305C2.19429 70.8865 1.58552 69.5375 1.11816 68.1895C1.10444 68.1499 1.09161 68.1099 1.07813 68.0703C1.04009 67.9586 1.00191 67.847 0.96582 67.7354C0.954674 67.7009 0.943578 67.6663 0.932617 67.6318C0.823298 67.2877 0.723275 66.9435 0.632813 66.5996C-0.103732 63.8123 -0.218301 61.0433 0.402344 58.3643C1.34437 54.2986 3.89972 50.7745 7.875 47.9023C7.90661 47.8794 7.93796 47.8559 7.96973 47.833C8.12646 47.7208 8.2852 47.6092 8.44629 47.499C8.57825 47.4084 8.71216 47.3194 8.84668 47.2305C8.87052 47.2148 8.89404 47.1983 8.91797 47.1826C10.608 46.0723 12.497 45.0908 14.5547 44.2324C14.6355 44.1986 14.7165 44.1643 14.7979 44.1309C14.8508 44.1092 14.9038 44.087 14.957 44.0654L15.25 43.9482C15.3501 43.9084 15.4509 43.8694 15.5518 43.8301C15.6093 43.8078 15.6668 43.7848 15.7246 43.7627C23.7646 40.6682 34.1765 39.3165 45.6846 39.4756C45.8574 39.4779 46.0307 39.4814 46.2041 39.4844C46.4305 39.4884 46.6576 39.4909 46.8848 39.4961C47.3568 39.5065 47.8313 39.5207 48.3076 39.5361C48.4142 39.5397 48.5212 39.5441 48.6279 39.5479C51.1795 39.6366 53.791 39.7967 56.4512 40.0293C63.6811 24.5137 72.1655 12.7934 80.627 6.1709C85.0025 2.74635 89.5085 0.57999 93.9365 0.100586Z`;
var ks = (e, t) => ms([[L - e, L - e, t], [L + e, L - e, t], [L + e, L + e, t], [L - e, L + e, t]]);
var As = (e, t, n) => ds((r) => {
  let i = Math.cos(r), a = Math.sin(r);
  return [L + i * e * Math.max(1 - a * a, 0) ** (n / 2 - 0.5) * 1, L + a * t];
});
var js = (e, t, n, r) => ds((i) => {
  let a = (e2) => {
    let t2 = Math.abs(((i - e2 + Math.PI) % ss + ss) % ss - Math.PI);
    return Math.exp(-(t2 * t2) / 0.4232);
  }, o = 1 - n * a(r) + n * 0.34 * a(r + Math.PI);
  return [L + Math.cos(i) * e * o, L + Math.sin(i) * t * o];
});
var Ms = (e, t, n) => ds((r) => {
  let i = e * (1 + t * (Math.sin(r * 2 + n) * 0.6 + Math.sin(r * 3 - n) * 0.4));
  return [L + Math.cos(r) * i, L + Math.sin(r) * i * 0.98];
});
var Ns = (e, t = 4) => {
  let n = e.match(/[MLCQZmlcqz]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) ?? [], r = [], i = 0, a = ``, o = 0, s2 = 0, c = 0, l = 0, u = () => parseFloat(n[i++]), d = (e2, n2) => {
    let i2 = Math.max(2, Math.ceil(n2 / t));
    for (let t2 = 1; t2 <= i2; t2++) r.push(e2(t2 / i2));
  };
  for (; i < n.length; ) if (/[a-z]/i.test(n[i]) && (a = n[i++].toUpperCase()), a === `Z`) Math.hypot(c - o, l - s2) > 0.01 && d((e2) => [o + (c - o) * e2, s2 + (l - s2) * e2], Math.hypot(c - o, l - s2)), o = c, s2 = l;
  else {
    if (i >= n.length) break;
    if (a === `M`) o = u(), s2 = u(), c = o, l = s2, r.push([o, s2]), a = `L`;
    else if (a === `L`) {
      let e2 = u(), t2 = u();
      d((n2) => [o + (e2 - o) * n2, s2 + (t2 - s2) * n2], Math.hypot(e2 - o, t2 - s2)), o = e2, s2 = t2;
    } else if (a === `Q`) {
      let e2 = u(), t2 = u(), n2 = u(), r2 = u(), i2 = o, a2 = s2;
      d((o2) => {
        let s3 = 1 - o2;
        return [s3 * s3 * i2 + 2 * s3 * o2 * e2 + o2 * o2 * n2, s3 * s3 * a2 + 2 * s3 * o2 * t2 + o2 * o2 * r2];
      }, Math.hypot(e2 - o, t2 - s2) + Math.hypot(n2 - e2, r2 - t2)), o = n2, s2 = r2;
    } else {
      let e2 = u(), t2 = u(), n2 = u(), r2 = u(), i2 = u(), a2 = u(), c2 = o, l2 = s2;
      d((o2) => {
        let s3 = 1 - o2;
        return [s3 * s3 * s3 * c2 + 3 * s3 * s3 * o2 * e2 + 3 * s3 * o2 * o2 * n2 + o2 * o2 * o2 * i2, s3 * s3 * s3 * l2 + 3 * s3 * s3 * o2 * t2 + 3 * s3 * o2 * o2 * r2 + o2 * o2 * o2 * a2];
      }, Math.hypot(e2 - o, t2 - s2) + Math.hypot(n2 - e2, r2 - t2) + Math.hypot(i2 - n2, a2 - r2)), o = i2, s2 = a2;
    }
  }
  return r;
};
var Ps = (e, t = 160) => {
  let n = 1 / 0, r = -1 / 0;
  for (let t2 of e) t2[1] < n && (n = t2[1]), t2[1] > r && (r = t2[1]);
  let i = r - n, a = (e2) => n + i * (e2 + 0.5) / t, o = new Float64Array(t), s2 = new Float64Array(t), c = new Float64Array(t), l = new Float64Array(t);
  for (let n2 = 0; n2 < t; n2++) {
    let t2 = a(n2), r2 = -1 / 0, i2 = 1 / 0, u2 = 1 / 0, d = -1 / 0;
    for (let n3 = 0; n3 < e.length; n3++) {
      let a2 = e[n3], o2 = e[(n3 + 1) % e.length];
      if (a2[1] <= t2 == o2[1] <= t2) continue;
      let s3 = a2[0] + (o2[0] - a2[0]) * (t2 - a2[1]) / (o2[1] - a2[1]);
      s3 <= 114.2705 ? s3 > r2 && (r2 = s3) : s3 < i2 && (i2 = s3), s3 < u2 && (u2 = s3), s3 > d && (d = s3);
    }
    o[n2] = Number.isFinite(r2) ? r2 : L, s2[n2] = Number.isFinite(i2) ? i2 : L, c[n2] = Number.isFinite(u2) ? u2 : L, l[n2] = Number.isFinite(d) ? d : L;
  }
  let u = (e2, r2) => (a2) => {
    let o2 = cs((a2 - n) / i * t - 0.5, 0, t - 1), s3 = Math.floor(o2), c2 = o2 - s3, l2 = Math.min(s3 + 1, t - 1);
    return [e2[s3] + (e2[l2] - e2[s3]) * c2, r2[s3] + (r2[l2] - r2[s3]) * c2];
  };
  return { top: n, bottom: r, spanAt: u(o, s2), outerAt: u(c, l) };
};
var Fs = 96;
var Is = (e) => Array.from({ length: Fs }, (t, n) => {
  let r = n / Fs * ss, i = Math.cos(r), a = Math.sin(r), o = 0;
  for (let t2 = 0; t2 < e.length; t2++) {
    let n2 = e[t2], r2 = e[(t2 + 1) % e.length], s2 = n2[0] - L, c = n2[1] - L, l = r2[0] - L, u = r2[1] - L, d = (l - s2) * a - (u - c) * i;
    if (Math.abs(d) < 1e-9) continue;
    let f2 = (s2 * a - c * i) / -d;
    if (f2 < 0 || f2 > 1) continue;
    let p = (s2 + (l - s2) * f2) * i + (c + (u - c) * f2) * a;
    p > o && (o = p);
  }
  return [L + i * o, L + a * o];
});
var Ls = (e, t, n, r) => {
  let i = 0;
  return e.replace(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi, (e2) => {
    i ^= 1;
    let a = parseFloat(e2) + (i ? n : r);
    return String(R(L + (a - L) * t));
  });
};
var Rs = 228.44;
var zs = (e) => {
  let t = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0;
  for (let a2 of e) a2[0] < t && (t = a2[0]), a2[0] > n && (n = a2[0]), a2[1] < r && (r = a2[1]), a2[1] > i && (i = a2[1]);
  let a = L - (t + n) / 2, o = L - (r + i) / 2;
  return { k: cs(Rs / Math.max(n - t, i - r), 0.9, 1.35), dx: a, dy: o };
};
var Bs = (e, t) => {
  let { k: n, dx: r, dy: i } = zs(t);
  return Math.abs(n - 1) < 5e-3 && Math.abs(r) < 0.5 && Math.abs(i) < 0.5 ? e : Ls(e, n, r, i);
};
var Vs = (e) => {
  let t = Bs(e, Ns(e)), n = Ns(t), { top: r, bottom: i, spanAt: a, outerAt: o } = Ps(n), s2 = 0;
  for (let e2 = r; e2 <= i; e2 += 2) {
    let [t2, n2] = o(e2);
    s2 = Math.max(s2, (n2 - t2) / 2);
  }
  return { path: t, ring: Is(n), top: R(r), bottom: R(i), spanAt: a, beltRadius: R(s2) };
};
var Hs = { pebble: () => Ms(108, 0.075, 1.1), bean: () => js(94, 112, 0.34, Math.PI), egg: () => Ss(98, 113, 0.22), squircle: () => hs(107, 107, 3.2), square: () => ws(107, 28), tablet: () => gs(114, 74), capsule: () => _s(72, 113), cylinder: () => vs(94, 110, 48), hex: () => ps(114, 6, 20, Math.PI / 6), gem: () => hs(112, 113, 1.5), shield: () => xs(98, 108, 30), dome: () => ys(114, 82, 26), arch: () => bs(76, 113, 42), cloud: () => ms([[L - 62, L + 26, 56], [L + 62, L + 26, 54], [L, L + 34, 62], [L - 24, L - 30, 62], [L + 38, L - 26, 54]]), leaf: () => As(88, 113, 1.5), clover: () => ks(38, 58), house: () => Ts(100, 110, 78, 29), heart: () => Es, sparkle: () => Os, star6: () => Ds };
var Us = /* @__PURE__ */ new Map();
function Ws(e) {
  let t = Us.get(e);
  if (t != null) return t;
  let n = Vs(Hs[e]());
  return Us.set(e, n), n;
}
var z = (e, t = 4) => Ns(Ws(e).path, t);
var Gs = (e) => Ns(e);
var Ks = (e, t) => Vs(Cs(e, L - 114, L + 26, t));
var qs = (e, t) => Vs(ps(130, 3, [t, e, e], -Math.PI / 2));
var Js = Math.PI * 2;
var Ys = 0.36;
var Xs = 0.22;
var Zs = 4;
var Qs = 1e-12;
var $s = 64;
var ec = 33;
var tc = 40;
var nc = 0.72;
var rc = 16;
var ic = 160;
var ac = 180;
var oc = 64;
var sc = 1e-5;
var cc = { pebble: () => hc(1.2167999999999999, `pebble`), bean: () => {
  let e = Fc(`bean`);
  return { size: 1.17, silhouette: { kind: `solid`, samples: [], balls: e, isLoop: false, yawPeriod: null }, seat: xc(`bean`, e) };
}, egg: () => hc(1.17, `egg`), squircle: () => ({ size: 1.17, silhouette: pc(Tc(`squircle`, 0.28, 0.11)), seat: { kind: `front`, faceZ: 0.28 } }), tablet: () => {
  let { x0: e, x1: t, y0: n, y1: r } = wc(`tablet`), i = (t - e) / 2 / L, a = (r - n) / 2 / L, o = Math.max(0, i - a);
  return { size: 1.3922999999999999, silhouette: { kind: `solid`, samples: [], balls: Nc(`tablet`, `x`), isLoop: false, yawPeriod: null }, seat: { kind: `wrapX`, wrapR: a, wrapX0: -i + 0.02, wrapX1: i - 0.02, radiusAtX: (e2) => {
    let t2 = Math.abs(e2) - o;
    return t2 <= 0 ? a : Math.sqrt(Math.max(0, a * a - t2 * t2));
  } } };
}, capsule: () => {
  let e = Nc(`capsule`, `y`), { y0: t, y1: n } = wc(`capsule`), r = -(n - L) / L, i = -(t - L) / L, { hx: a, hz: o } = Pc(e);
  return { size: 1.17, silhouette: { kind: `solid`, samples: [], balls: e, isLoop: false, yawPeriod: null }, seat: { kind: `wrap`, wrapR: Math.max(0.35, (a + o) * 0.5), wrapY0: r, wrapY1: i, eyeY: (r + i) * 0.5 } };
}, cylinder: () => gc(`cylinder`, (e, t) => (t + e) * 0.5), hex: () => _c(1.2519, Cc(z(`hex`))), gem: () => hc(1.17, `gem`), crystal: () => ({ size: 1.3805999999999998, silhouette: pc(Ec()), seat: { kind: `front`, faceZ: Math.sqrt(3) / 2 * 0.64 } }), wedge: () => {
  let e = qs(60, 80), t = Gs(e.path), [n, r] = e.spanAt(e.top + (e.bottom - e.top) * 0.5), i = -(e.top - L) / L, a = -(e.bottom - L) / L;
  return { size: 1.3590719999999998, silhouette: mc(kc(t)), seat: { kind: `wrap`, wrapR: Math.max(0.2, (r - n) / 2 / L), wrapY0: a, wrapY1: i, eyeY: i + (a - i) * 0.5, radiusAt: Mc(t) } };
}, shield: () => hc(1.17, `shield`), dome: () => hc(1.17, `dome`), arch: () => gc(`arch`, (e, t) => e + (t - e) * 0.42), cloud: () => bc(1.3455, Cc(z(`cloud`, 1)), 0.72), teardrop: () => {
  let e = Ks(88, 48), t = Gs(e.path), [n, r] = e.spanAt(e.top + (e.bottom - e.top) * 0.62), i = -(e.bottom - L) / L, a = -(e.top - L) / L;
  return { size: 1.318122, silhouette: mc(kc(t)), seat: { kind: `wrap`, wrapR: Math.max(0.2, (r - n) / 2 / L), wrapY0: i, wrapY1: a, eyeY: (i + a) * 0.5, radiusAt: Mc(t) } };
}, leaf: () => hc(1.17, `leaf`), square: () => _c(1.0413, Cc(z(`square`))), starFlower: () => _c(1.3922999999999999, Lc()), sparkle: () => _c(1.521, Cc(z(`sparkle`))), clover: () => _c(1.0881, Cc(z(`clover`))), heartChubby: () => bc(1.3571999999999997, os, 0.62), house: () => _c(1.17, Cc(z(`house`))), star6: () => vc(1.4976, Cc(z(`star6`)), 0.3, 0.18) };
var lc = /* @__PURE__ */ new Map();
var uc = null;
function dc(e) {
  let t = lc.get(e);
  if (t != null) return t;
  let n = cc[e]();
  return lc.set(e, n), n;
}
function fc() {
  return uc ??= { size: 1.17, silhouette: { kind: `solid`, samples: Cc(z(`bean`)), balls: [], isLoop: true, yawPeriod: null }, seat: null }, uc;
}
function pc(e) {
  return { kind: `solid`, samples: e, balls: [], isLoop: false, yawPeriod: null };
}
function mc(e) {
  return { kind: `solid`, samples: e, balls: [], isLoop: false, yawPeriod: 360 / $s };
}
function hc(e, t) {
  return { size: e, silhouette: mc(Oc(t)), seat: xc(t, []) };
}
function gc(e, t) {
  let n = Ws(e), r = -(n.top - L) / L, i = -(n.bottom - L) / L;
  return { size: 1.17, silhouette: mc(Oc(e)), seat: { kind: `wrap`, wrapR: n.beltRadius / L, wrapY0: i, wrapY1: r, eyeY: t(r, i), radiusAt: jc(e) } };
}
function _c(e, t) {
  return vc(e, t, Ys, Xs);
}
function vc(e, t, n, r) {
  return { size: e, silhouette: { kind: `extrusion`, rings: Ic(t, n, r), isConvex: yc(t) }, seat: { kind: `front`, faceZ: n } };
}
function yc(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let r = e[n], i = e[(n + 1) % e.length], a = e[(n + 2) % e.length], o = (i.x - r.x) * (a.y - i.y) - (i.y - r.y) * (a.x - i.x);
    if (!(Math.abs(o) < Qs)) {
      if (t === 0) t = Math.sign(o);
      else if (Math.sign(o) !== t) return false;
    }
  }
  return true;
}
function bc(e, t, n) {
  let r = Rc(t, n);
  return { size: e, silhouette: { kind: `loft`, rings: r.rings }, seat: { kind: `loft`, surfaceZ: zc(r) } };
}
function xc(e, t) {
  let n = Ws(e), r = -(n.bottom - L) / L, i = -(n.top - L) / L, a = jc(e), o = Math.min(i - 0.02, Math.max(r + 0.02, 0));
  return { kind: `wrap`, wrapR: a(o), wrapY0: r, wrapY1: i, eyeY: o, radiusAt: a, puffAt: t.length > 0 ? (e2, n2) => Sc(t, e2, n2) : void 0 };
}
function Sc(e, t, n) {
  let r = e[0], i = -1 / 0, a = 1 / 0, o = false;
  for (let s2 of e) {
    let e2 = Math.hypot(t - s2[0], n - s2[1]);
    if (e2 < s2[3]) {
      let t2 = s2[2] + Math.sqrt(s2[3] * s2[3] - e2 * e2);
      (!o || t2 > i) && (o = true, i = t2, r = s2);
    } else !o && e2 - s2[3] < a && (a = e2 - s2[3], r = s2);
  }
  return { x: r[0], y: r[1], z: r[2], r: r[3] };
}
function Cc(e) {
  return e.map(([e2, t]) => ({ x: (e2 - L) / L, y: -(t - L) / L, z: 0 }));
}
function wc(e) {
  let t = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0;
  for (let [a, o] of Ws(e).ring) a < t && (t = a), a > n && (n = a), o < r && (r = o), o > i && (i = o);
  return { x0: t, x1: n, y0: r, y1: i };
}
function Tc(e, t, n) {
  let r = Ws(e).ring.map(([e2, t2]) => ({ x: (e2 - L) / L, y: -(t2 - L) / L })), i = r.length, a = [];
  for (let e2 = 0; e2 < i; e2++) {
    let o = r[e2], s2 = r[(e2 - 1 + i) % i], c = r[(e2 + 1) % i], l = c.y - s2.y, u = -(c.x - s2.x), d = Math.hypot(l, u) || 1;
    l /= d, u /= d, l * o.x + u * o.y < 0 && (l = -l, u = -u);
    for (let e3 = 0; e3 <= Zs; e3++) {
      let r2 = e3 / Zs * (Math.PI / 2), i2 = n * (1 - Math.cos(r2)), s3 = t - n + n * Math.sin(r2);
      a.push({ x: o.x - l * i2, y: o.y - u * i2, z: s3 }), a.push({ x: o.x - l * i2, y: o.y - u * i2, z: -s3 });
    }
  }
  return a;
}
function Ec() {
  let e = 0.12, t = [{ x: 0, y: 1.04, z: 0 }, { x: 0, y: -1.04, z: 0 }], n = 0.52;
  for (let e2 of [-1, 1]) for (let r2 = 0; r2 < 6; r2++) {
    let i = r2 / 6 * Js;
    t.push({ x: n * Math.cos(i), y: e2 * 0.51, z: n * Math.sin(i) });
  }
  let r = [];
  for (let n2 of t) for (let t2 = 0; t2 <= 8; t2++) {
    let i = t2 / 8 * Math.PI, a = Math.sin(i), o = t2 === 0 || t2 === 8 ? 1 : 14;
    for (let t3 = 0; t3 < o; t3++) {
      let s2 = t3 / o * Js;
      r.push({ x: n2.x + e * a * Math.sin(s2), y: n2.y + e * Math.cos(i), z: n2.z + e * a * Math.cos(s2) });
    }
  }
  return r;
}
function Dc(e) {
  let t = e.length, n = 1 / 0, r = -1 / 0;
  for (let [, t2] of e) t2 < n && (n = t2), t2 > r && (r = t2);
  n -= sc, r += sc;
  let i = (e2) => Math.min(63, Math.floor((e2 - n) / (r - n) * oc)), a = Array.from({ length: oc }, () => []);
  for (let n2 = 0; n2 < t; n2++) {
    let r2 = e[n2][1], o = e[(n2 + 1) % t][1], s2 = i(Math.max(r2, o) + sc);
    for (let e2 = i(Math.min(r2, o) - sc); e2 <= s2; e2++) a[e2].push(n2);
  }
  return (o) => {
    let s2 = 1 / 0, c = -1 / 0;
    if (!(o >= n && o <= r)) return c - s2;
    for (let n2 of a[i(o)]) {
      let [r2, i2] = e[n2], [a2, l] = e[(n2 + 1) % t];
      if (Math.abs(l - i2) < 1e-9) Math.abs(i2 - o) < 1e-6 && (s2 = Math.min(s2, r2, a2), c = Math.max(c, r2, a2));
      else if (i2 <= o && l >= o || l <= o && i2 >= o) {
        let e2 = r2 + (a2 - r2) * (o - i2) / (l - i2);
        e2 < s2 && (s2 = e2), e2 > c && (c = e2);
      }
    }
    return c - s2;
  };
}
function Oc(e) {
  return kc(z(e));
}
function kc(e) {
  let t = 1 / 0, n = -1 / 0;
  for (let [, r2] of e) r2 < t && (t = r2), r2 > n && (n = r2);
  let r = [], i = -(t - L) / L, a = -(n - L) / L, o = Dc(e), s2 = (e2) => {
    let t2 = o(e2);
    return t2 < 0 ? 0 : t2 / 2 / L;
  }, c = n - t, l = (e2, t2) => {
    if (s2(e2) >= 0.06) return null;
    let n2 = s2(e2), r2 = c * 0.02;
    for (let i2 = c / 512; i2 <= c * 0.05; i2 += c / 512) if (Math.abs(s2(e2 + t2 * i2) - n2) > 1e-4) {
      r2 = i2;
      break;
    }
    return { yEdge: e2, sign: t2, dJoin: r2, rJoin: s2(e2 + t2 * r2) };
  }, u = [l(t, 1), l(n, -1)].filter((e2) => e2 !== null), d = (e2) => {
    let t2 = s2(e2);
    for (let n2 of u) {
      let r2 = (e2 - n2.yEdge) * n2.sign;
      r2 >= 0 && r2 < n2.dJoin && (t2 = Math.min(t2, n2.rJoin * Math.sqrt(r2 / n2.dJoin)));
    }
    return t2;
  }, f2 = (e2, t2) => {
    let n2 = d(t2);
    n2 < 0.06 ? r.push({ x: 0, y: e2, z: 0 }) : r.push(...Ac(e2, n2));
  };
  f2(i, t);
  for (let e2 = 1; e2 < 95; e2++) {
    let i2 = (1 - Math.cos(e2 / 95 * Math.PI)) / 2, a2 = t + (n - t) * i2, o2 = d(a2), s3 = -(a2 - L) / L;
    o2 < 1e-4 ? r.push({ x: 0, y: s3, z: 0 }) : r.push(...Ac(s3, o2));
  }
  return f2(a, n), r;
}
function Ac(e, t) {
  let n = [];
  for (let r = 0; r < $s; r++) {
    let i = r / $s * Js;
    n.push({ x: t * Math.sin(i), y: e, z: t * Math.cos(i) });
  }
  return n;
}
function jc(e) {
  return Mc(z(e));
}
function Mc(e) {
  let t = Dc(e), n = 1 / 0, r = -1 / 0;
  for (let [, t2] of e) t2 < n && (n = t2), t2 > r && (r = t2);
  return (e2) => {
    let i = Math.max(n, Math.min(r, L - e2 * L));
    return Math.max(0.02, t(i) / 2 / L);
  };
}
function Nc(e, t) {
  let { x0: n, x1: r, y0: i, y1: a } = wc(e), o = (r - n) / 2 / L, s2 = (a - i) / 2 / L, c = t === `x` ? s2 : o, l = Math.max(0, (t === `x` ? o : s2) - c), u = -l, d = [];
  for (let e2 = 0; e2 < ec; e2++) {
    let n2 = u + (l - u) * (e2 / 32);
    d.push(t === `x` ? [n2, 0, 0, c] : [0, n2, 0, c]);
  }
  return d;
}
function Pc(e) {
  let t = 0.55, n = 0.35;
  for (let [r, , i, a] of e) t = Math.max(t, Math.abs(r) + a), n = Math.max(n, Math.abs(i) + a);
  return { hx: t, hz: n };
}
function Fc(e) {
  let t = z(e), n = 1 / 0, r = -1 / 0, i = 1 / 0, a = -1 / 0;
  for (let [e2, o2] of t) n = Math.min(n, e2), r = Math.max(r, e2), i = Math.min(i, o2), a = Math.max(a, o2);
  let o = (e2, n2) => {
    let r2 = false, i2 = t.length;
    for (let a2 = 0, o2 = i2 - 1; a2 < i2; o2 = a2++) {
      let [i3, s3] = t[a2], [c2, l2] = t[o2];
      s3 > n2 != l2 > n2 && e2 < i3 + (c2 - i3) * (n2 - s3) / (l2 - s3) && (r2 = !r2);
    }
    return r2;
  }, s2 = Math.max(r - n, a - i) / tc, c = [];
  for (let e2 = i + s2 / 2; e2 < a; e2 += s2) for (let i2 = n + s2 / 2; i2 < r; i2 += s2) {
    if (!o(i2, e2)) continue;
    let n2 = 1 / 0;
    for (let [r3, a2] of t) n2 = Math.min(n2, (r3 - i2) ** 2 + (a2 - e2) ** 2);
    let r2 = Math.sqrt(n2);
    r2 > s2 && c.push({ x: i2, y: e2, r: r2 });
  }
  c.sort((e2, t2) => t2.r - e2.r);
  let l = [];
  for (let e2 of c) l.some((t2) => Math.hypot(e2.x - t2.x, e2.y - t2.y) + e2.r <= t2.r + s2 * 0.25) || l.push(e2);
  return l.map((e2) => [(e2.x - L) / L, -(e2.y - L) / L, 0, e2.r / L]);
}
function Ic(e, t, n) {
  let r = 1 / 0, i = -1 / 0, a = 1 / 0, o = -1 / 0;
  for (let t2 of e) r = Math.min(r, t2.x), i = Math.max(i, t2.x), a = Math.min(a, t2.y), o = Math.max(o, t2.y);
  let s2 = (r + i) / 2, c = (a + o) / 2, l = Math.max(1e-4, Math.min((i - r) / 2, (o - a) / 2)), u = (e2, r2) => {
    let i2 = e2 / Zs * (Math.PI / 2), a2 = t - n + n * Math.sin(i2);
    return { z: r2 < 0 ? -a2 : a2, scale: 1 - n / l * (1 - Math.cos(i2)) };
  }, d = [];
  for (let e2 = Zs; e2 >= 0; e2--) d.push(u(e2, -1));
  for (let e2 = 0; e2 <= Zs; e2++) d.push(u(e2, 1));
  return d.map(({ z: t2, scale: n2 }) => e.map((e2) => ({ x: s2 + (e2.x - s2) * n2, y: c + (e2.y - c) * n2, z: t2 })));
}
function Lc() {
  let e = 0.58, t = [{ x: 0, y: 0, r: 0.36 }];
  for (let n2 = 0; n2 < 6; n2++) {
    let r = -Math.PI / 2 + n2 * Js / 6;
    t.push({ x: e * Math.cos(r), y: e * Math.sin(r), r: 0.33 });
  }
  let n = [];
  for (let e2 = 0; e2 < 240; e2++) {
    let r = e2 / 240 * Js, i = Math.cos(r), a = Math.sin(r), o = 0, s2 = 0.9099999999999999;
    for (let e3 = 0; e3 < 22; e3++) {
      let e4 = (o + s2) / 2, n2 = e4 * i, r2 = e4 * a;
      t.some((e5) => (n2 - e5.x) * (n2 - e5.x) + (r2 - e5.y) * (r2 - e5.y) <= e5.r * e5.r) ? o = e4 : s2 = e4;
    }
    n.push({ x: o * i, y: o * a, z: 0 });
  }
  return n;
}
function Rc(e, t) {
  let n = e.length / ic, r = n > 1 ? Array.from({ length: ic }, (t2, r2) => e[Math.floor(r2 * n)]) : e, i = 1 / 0, a = -1 / 0, o = 1 / 0, s2 = -1 / 0;
  for (let e2 of r) i = Math.min(i, e2.x), a = Math.max(a, e2.x), o = Math.min(o, e2.y), s2 = Math.max(s2, e2.y);
  let c = { x: (i + a) / 2, y: (o + s2) / 2 }, l = [];
  for (let e2 = 0; e2 <= rc; e2++) {
    let n2 = -Math.PI / 2 + Math.PI * e2 / rc, i2 = Math.max(0, Math.cos(n2)) ** +nc, a2 = t * Math.sin(n2);
    l.push(r.map((e3) => ({ x: c.x + (e3.x - c.x) * i2, y: c.y + (e3.y - c.y) * i2, z: a2 })));
  }
  return { rings: l, center: c, depth: t };
}
function zc({ rings: e, center: t, depth: n }) {
  let r = e[Math.floor(e.length / 2)], i = new Float64Array(ac);
  for (let e2 = 0; e2 < ac; e2++) {
    let n2 = (e2 + 0.5) / ac * Math.PI * 2, a2 = Math.cos(n2), o = Math.sin(n2), s2 = 0;
    for (let e3 = 0; e3 < r.length; e3++) {
      let n3 = r[e3], i2 = r[(e3 + 1) % r.length], c = i2.x - n3.x, l = i2.y - n3.y, u = a2 * l - o * c;
      if (Math.abs(u) < 1e-9) continue;
      let d = n3.x - t.x, f2 = n3.y - t.y, p = (d * l - f2 * c) / u, m = (d * o - f2 * a2) / u;
      p > s2 && m >= 0 && m <= 1 && (s2 = p);
    }
    i[e2] = s2;
  }
  let a = (e2, n2) => {
    let r2 = e2 - t.x, a2 = n2 - t.y, o = Math.hypot(r2, a2);
    if (o < 1e-8) return 0;
    let s2 = (Math.atan2(a2, r2) + Math.PI * 2) % (Math.PI * 2) / (Math.PI * 2) * ac, c = Math.floor(s2) % ac, l = s2 - Math.floor(s2), u = i[c], d = i[(c + 1) % ac];
    return Math.min(1, o / Math.max(1e-8, u * (1 - l) + d * l));
  };
  return (e2, t2) => n * Math.sqrt(Math.max(0, 1 - a(e2, t2) ** (2 / nc)));
}
var Bc = Math.PI * 2;
var Vc = 0.2;
var Hc = 0.36;
var Uc = 1.18;
var Wc = 160;
var B = 480;
var Gc = /* @__PURE__ */ Zc(Wc);
var Kc = /* @__PURE__ */ Zc(B);
var qc = 1.01;
var Jc = 1e-5;
var Yc = 0.01;
var Xc = 8;
function Zc(e) {
  return Array.from({ length: e }, (t, n) => {
    let r = n / e * Bc;
    return { x: Math.cos(r), y: Math.sin(r) };
  });
}
function Qc(e, t) {
  return Math.max(Vc, e.size) * (Hc * t / Uc);
}
function $c(e, t, n) {
  return ol(e.silhouette, nl(e, t, n)).flatMap(al);
}
function el(e, t, n) {
  let r = e.silhouette;
  if (r.kind !== `extrusion` || !r.isConvex) return $c(e, t, n);
  let { project: i } = nl(e, t, n);
  return al(cl(r.rings.flat().map(i)));
}
function tl(e, t, n, r) {
  return e.seat == null ? [] : dl(e.seat, r, nl(e, t, n)).flatMap(al);
}
function nl(e, t, n) {
  let r = n / 2, i = Qc(e, n), a = rl(t.yaw * Math.PI / 180, t.pitch * Math.PI / 180, t.roll * Math.PI / 180);
  return { rotate: a, project: (e2) => {
    let t2 = a(e2);
    return { x: r + i * t2.x, y: r - i * t2.y };
  }, origin: { x: r, y: r }, radius: i };
}
function rl(e, t, n) {
  let [r, i, a] = il(e), [o, s2, c] = il(t), [l, u, d] = il(n);
  return ({ x: e2, y: t2, z: n2 }) => {
    let f2 = e2 * r + n2 * i, p = t2 * r + t2 * a, m = n2 * r - e2 * i, h = f2 * o + f2 * c, g = p * o - m * s2, _ = m * o + p * s2;
    return { x: h * l - g * u, y: g * l + h * u, z: _ * l + _ * d };
  };
}
function il(e) {
  let t = Math.cos(e);
  return [t, Math.sin(e), 1 - t];
}
function al(e) {
  let [t] = e;
  if (e.length < 2 || !Number.isFinite(t.x) || !Number.isFinite(t.y)) return [];
  let n = [];
  for (let t2 of e) Number.isFinite(t2.x) && Number.isFinite(t2.y) && n.push(t2.x, t2.y);
  return n.length >= 6 ? [n] : [];
}
function ol(e, t) {
  if (e.kind === `loft`) return [ul(e.rings, t)];
  if (e.kind === `solid`) return [sl(e, t)];
  let n = e.rings.map((e2) => e2.map(t.project)), r = n[0], i = n[n.length - 1], a = [i, r];
  for (let e2 = 1; e2 < n.length; e2++) {
    let t2 = n[e2 - 1], r2 = n[e2];
    for (let e3 = 0; e3 < r2.length; e3++) {
      let n2 = (e3 + 1) % i.length;
      a.push([t2[e3], t2[n2], r2[n2], r2[e3]]);
    }
  }
  return a;
}
function sl(e, { project: t, origin: n, radius: r }) {
  let i = [];
  for (let n2 of e.samples) {
    let e2 = t(n2);
    Number.isFinite(e2.x) && Number.isFinite(e2.y) && i.push(e2);
  }
  if (e.isLoop) return i;
  if (e.balls.length === 0) return cl(i);
  let a = e.balls.map(([e2, n2, i2, a2]) => ({ ...t({ x: e2, y: n2, z: i2 }), r: a2 * r })).filter((e2) => Number.isFinite(e2.x) && Number.isFinite(e2.y) && e2.r > 1e-6), o = n.x, s2 = n.y;
  if (a.length > 0) {
    o = 0, s2 = 0;
    for (let e2 of a) o += e2.x, s2 += e2.y;
    o /= a.length, s2 /= a.length;
  }
  for (let { x: e2, y: t2 } of Gc) {
    let n2 = 0;
    for (let r2 of a) {
      let i2 = r2.x - o, a2 = r2.y - s2, c = e2 * i2 + t2 * a2, l = c * c - (i2 * i2 + a2 * a2) + r2.r * r2.r;
      if (l <= 0) continue;
      let u = c + Math.sqrt(l);
      u > n2 && (n2 = u);
    }
    n2 > 0 && i.push({ x: o + e2 * n2, y: s2 + t2 * n2 });
  }
  if (e.samples.length > 0) return cl(i);
  if (i.length >= 3) return i;
  for (let e2 of a) for (let t2 = 0; t2 < 48; t2++) {
    let n2 = t2 / 48 * Bc;
    i.push({ x: e2.x + e2.r * Math.cos(n2), y: e2.y + e2.r * Math.sin(n2) });
  }
  return i.length >= 3 ? cl(i) : i;
}
function cl(e) {
  let t = ll(e.filter((e2) => Number.isFinite(e2.x) && Number.isFinite(e2.y)));
  if (t.length < 3) return t;
  let n = (e2, t2, n2) => (t2.x - e2.x) * (n2.y - e2.y) - (t2.y - e2.y) * (n2.x - e2.x), r = [];
  for (let e2 of t) {
    for (; r.length >= 2 && n(r[r.length - 2], r[r.length - 1], e2) <= 0; ) r.pop();
    r.push(e2);
  }
  let i = [];
  for (let e2 = t.length - 1; e2 >= 0; e2--) {
    let r2 = t[e2];
    for (; i.length >= 2 && n(i[i.length - 2], i[i.length - 1], r2) <= 0; ) i.pop();
    i.push(r2);
  }
  return r.pop(), i.pop(), [...r, ...i];
}
function ll(e) {
  let t = 1 / 0, n = -1 / 0;
  for (let { x: r2 } of e) r2 < t && (t = r2), r2 > n && (n = r2);
  let r = Math.ceil(e.length / Xc), i = n > t ? r / (n - t) : 0, a = (e2) => Math.min(r - 1, Math.floor((e2 - t) * i)), o = new Int32Array(r + 1);
  for (let { x: t2 } of e) o[a(t2) + 1]++;
  for (let e2 = 0; e2 < r; e2++) o[e2 + 1] += o[e2];
  let s2 = o.slice(0, r), c = Array(e.length);
  for (let t2 of e) c[s2[a(t2.x)]++] = t2;
  for (let e2 = 0; e2 < r; e2++) for (let t2 = o[e2] + 1; t2 < o[e2 + 1]; t2++) {
    let n2 = c[t2], r2 = t2 - 1;
    for (; r2 >= o[e2] && (c[r2].x > n2.x || c[r2].x === n2.x && c[r2].y > n2.y); r2--) c[r2 + 1] = c[r2];
    c[r2 + 1] = n2;
  }
  return c;
}
function ul(e, { project: t, origin: n }) {
  let r = e.map((e2) => e2.map(t)), i = (e2) => {
    let t2 = 0, n2 = 0;
    for (let r2 of e2) t2 += r2.x, n2 += r2.y;
    return { x: t2 / e2.length, y: n2 / e2.length };
  }, a = i(r[0]), o = i(r[r.length - 1]);
  if (Math.hypot(o.x - a.x, o.y - a.y) < 1e-4) {
    let e2 = r[0], t2 = 0;
    for (let n2 of r) {
      let r2 = 0;
      for (let e3 = 0; e3 < n2.length; e3++) {
        let t3 = n2[e3], i2 = n2[(e3 + 1) % n2.length];
        r2 += t3.x * i2.y - i2.x * t3.y;
      }
      Math.abs(r2) > t2 && (e2 = n2, t2 = Math.abs(r2));
    }
    return e2;
  }
  let s2 = r.map((e2) => e2.map(({ x: e3, y: t2 }) => (e3 - n.x) * (e3 - n.x) + (t2 - n.y) * (t2 - n.y))), c = s2.map((e2) => Math.max(...e2)), l = Jc * Math.max(...c) + Yc, u = (e2, t2) => {
    let n2 = (t2 - l) / qc;
    return n2 > 0 && e2 < n2 * n2;
  }, d = r.map((e2) => e2.map((e3) => {
    let t2 = (Math.atan2(e3.y - n.y, e3.x - n.x) + Bc) % Bc;
    return Math.floor(t2 / Bc * B) % B;
  })), f2 = new Float64Array(B), p = 0, m = (e2, t2, r2, i2, a2) => {
    if (u(a2, p)) return;
    let o2 = i2 - r2;
    o2 > B / 2 ? o2 -= B : o2 < -240 && (o2 += B);
    let s3 = o2 < 0 ? -1 : 1, c2 = Math.abs(o2), l2 = 1 / 0;
    for (let e3 = -1; e3 <= c2 + 1; e3++) {
      let t3 = (r2 + s3 * e3 + B) % B;
      f2[t3] < l2 && (l2 = f2[t3]);
    }
    if (u(a2, l2)) return;
    let d2 = t2.x - e2.x, m2 = t2.y - e2.y, h2 = e2.x - n.x, g = e2.y - n.y;
    for (let e3 = -1; e3 <= c2 + 1; e3++) {
      let t3 = (r2 + s3 * e3 + B) % B, { x: n2, y: i3 } = Kc[t3], a3 = n2 * m2 - i3 * d2;
      if (Math.abs(a3) < 1e-9) continue;
      let o3 = (h2 * m2 - g * d2) / a3, c3 = (h2 * i3 - g * n2) / a3;
      o3 > f2[t3] && c3 >= 0 && c3 <= 1 && (f2[t3] = o3);
    }
  }, h = c.map((e2, t2) => t2).sort((e2, t2) => c[t2] - c[e2]);
  for (let e2 of h) {
    let t2 = r[e2];
    for (let n2 = 0; n2 < t2.length; n2++) {
      let r2 = (n2 + 1) % t2.length;
      m(t2[n2], t2[r2], d[e2][n2], d[e2][r2], Math.max(s2[e2][n2], s2[e2][r2]));
    }
    p = Math.min(...f2);
  }
  for (let e2 = 0; e2 < r.length - 1; e2++) {
    let t2 = r[e2], n2 = r[e2 + 1];
    for (let r2 = 0; r2 < Math.min(t2.length, n2.length); r2++) m(t2[r2], n2[r2], d[e2][r2], d[e2 + 1][r2], Math.max(s2[e2][r2], s2[e2 + 1][r2]));
  }
  return Kc.flatMap(({ x: e2, y: t2 }, r2) => f2[r2] > 0 ? [{ x: n.x + e2 * f2[r2], y: n.y + t2 * f2[r2] }] : []);
}
function dl(e, t, n) {
  switch (e.kind) {
    case `front`:
      return fl(e.faceZ, t, n);
    case `loft`:
      return pl(e.surfaceZ, t, n);
    case `wrap`:
      return ml(e, t, n);
    case `wrapX`:
      return hl(e, t, n);
    default:
      throw Error(`Unhandled case`);
  }
}
function fl(e, { loops: t, shiftY: n }, r) {
  if (!(r.rotate({ x: 0, y: 0, z: 1 }).z > 0.03)) return [];
  let i = Math.sin(n);
  return t.filter((e2) => e2.length >= 3).map((t2) => t2.map((t3) => r.project({ x: t3.x, y: t3.y - i, z: e })));
}
function pl(e, { loops: t, shiftY: n }, { rotate: r, project: i }) {
  if (!(r({ x: 0, y: 0, z: 1 }).z >= 0.05)) return [];
  let a = Math.sin(n), o = [];
  for (let n2 of t) {
    if (n2.length < 3) continue;
    let t2 = n2.map((e2) => ({ x: e2.x, y: e2.y - a })), s2 = 0, c = 0;
    for (let e2 of t2) s2 += e2.x, c += e2.y;
    s2 /= t2.length, c /= t2.length;
    let l = 4e-3, u = (e(s2 + l, c) - e(s2 - l, c)) / (2 * l), d = (e(s2, c + l) - e(s2, c - l)) / (2 * l), f2 = Math.hypot(u, d, 1);
    if (r({ x: -u / f2, y: -d / f2, z: 1 / f2 }).z < 0.12) continue;
    let p = e(s2, c);
    o.push(t2.map((e2) => i({ x: e2.x, y: e2.y, z: p + (e2.x - s2) * u + (e2.y - c) * d })));
  }
  return o;
}
function ml(e, { loops: t, shiftY: n }, { rotate: r, project: i }) {
  let { wrapR: a, wrapY0: o, wrapY1: s2, radiusAt: c, puffAt: l } = e, u = c ? 0.02 : 0.06, d = Math.min(s2 - u, Math.max(o + u, e.eyeY - n)), f2 = (e2) => Math.min(s2, Math.max(o, e2)), p = (e2) => {
    let t2 = [];
    for (let n2 of e2) {
      let e3 = f2(d + n2.y), l2 = c ? c(e3) : a, u2 = Math.max(-2.6, Math.min(2.6, n2.x / Math.max(0.12, l2))), p2 = 0;
      if (c) {
        let t3 = 0.012;
        p2 = -(c(Math.min(s2, e3 + t3)) - c(Math.max(o, e3 - t3))) / (2 * t3);
      }
      r({ x: Math.sin(u2), y: p2, z: Math.cos(u2) }).z >= 0.05 && t2.push(i({ x: l2 * Math.sin(u2), y: e3, z: l2 * Math.cos(u2) }));
    }
    return t2;
  }, m = (e2) => {
    if (!l || e2.length === 0) return [];
    let t2 = 0, n2 = 0;
    for (let r2 of e2) t2 += r2.x, n2 += r2.y;
    let a2 = l(t2 / e2.length, f2(d + n2 / e2.length)), o2 = r({ x: 0, y: 0, z: 1 }).z, s3 = [];
    for (let t3 of e2) {
      let e3 = t3.x - a2.x, n3 = f2(d + t3.y) - a2.y, c2 = Math.hypot(e3, n3), l2 = Math.min(c2 / a2.r, Math.PI - 0.02), u2 = c2 > 1e-9 ? e3 / c2 : 1, p2 = c2 > 1e-9 ? n3 / c2 : 0, m2 = r({ x: u2, y: p2, z: 0 }).z, h2 = (e4) => m2 * Math.sin(e4) + o2 * Math.cos(e4);
      if (h2(l2) < 0.06 && o2 > 0.06) {
        let e4 = 0, t4 = l2;
        for (let n4 = 0; n4 < 20; n4++) {
          let n5 = (e4 + t4) / 2;
          h2(n5) >= 0.06 ? e4 = n5 : t4 = n5;
        }
        l2 = e4;
      }
      let g2 = a2.r * Math.sin(l2);
      r({ x: u2 * Math.sin(l2), y: p2 * Math.sin(l2), z: Math.cos(l2) }).z >= 0.05 && s3.push(i({ x: a2.x + u2 * g2, y: a2.y + p2 * g2, z: a2.z + a2.r * Math.cos(l2) }));
    }
    return s3;
  }, h = 1 / 0, g = -1 / 0;
  for (let e2 of t) for (let t2 of e2) t2.y < h && (h = t2.y), t2.y > g && (g = t2.y);
  let _ = 0;
  g - h <= s2 - o && (d + h < o ? _ = o - (d + h) : d + g > s2 && (_ = s2 - (d + g)));
  let v = _ === 0 ? t : t.map((e2) => e2.map((e3) => ({ x: e3.x, y: e3.y + _ }))), y = l ? m : p;
  return v.map(y).filter((e2) => e2.length > 2);
}
function hl(e, { loops: t, shiftY: n }, { rotate: r, project: i }) {
  let { wrapR: a, wrapX0: o, wrapX1: s2, radiusAtX: c } = e, l = Math.max(-2.4, Math.min(2.4, -n / a)), u = 1 / 0, d = -1 / 0;
  for (let e2 of t) for (let t2 of e2) t2.x < u && (u = t2.x), t2.x > d && (d = t2.x);
  let f2 = 0;
  return d - u <= s2 - o && (u < o ? f2 = o - u : d > s2 && (f2 = s2 - d)), (f2 === 0 ? t : t.map((e2) => e2.map((e3) => ({ x: e3.x + f2, y: e3.y })))).map((e2) => {
    let t2 = [];
    for (let n2 of e2) {
      let e3 = Math.min(s2, Math.max(o, n2.x)), u2 = c(e3), d2 = l + Math.max(-2.6, Math.min(2.6, n2.y / Math.max(0.12, a))), f3 = 0.012;
      r({ x: -(c(Math.min(s2, e3 + f3)) - c(Math.max(o, e3 - f3))) / (2 * f3), y: Math.sin(d2), z: Math.cos(d2) }).z >= 0.05 && t2.push(i({ x: e3, y: u2 * Math.sin(d2), z: u2 * Math.cos(d2) }));
    }
    return t2;
  }).filter((e2) => e2.length > 2);
}
var gl = { kind: `extrusion`, halfDepth: 0.36, bevel: 0.22 };
var _l = { cloud: { kind: `loft`, depth: 0.72 }, square: gl, sparkle: gl, clover: gl, heartChubby: { kind: `loft`, depth: 0.62 }, starFlower: gl, teardrop: { kind: `revolve` }, tablet: { kind: `pill`, axis: 0 }, wedge: { kind: `revolve` }, house: gl, star6: { kind: `extrusion`, halfDepth: 0.3, bevel: 0.18 }, pebble: { kind: `revolve` }, bean: { kind: `inscribedBalls` }, egg: { kind: `revolve` }, squircle: { kind: `roundedSlab`, halfDepth: 0.28, edge: 0.11 }, capsule: { kind: `pill`, axis: 1 }, cylinder: { kind: `revolve` }, hex: gl, gem: { kind: `revolve` }, crystal: { kind: `crystal` }, shield: { kind: `revolve` }, dome: { kind: `revolve` }, arch: { kind: `revolve` }, leaf: { kind: `revolve` } };
var vl = Math.PI * 2;
var yl = 1024;
var bl = { yaw: 0, pitch: 0, roll: 0 };
var xl = 4;
var Sl = 64;
var Cl = 96;
var wl = 4;
var Tl = 0.72;
var El = 16;
var Dl = 33;
var Ol = 40;
var kl = 1e-9;
var Al = 1e-15;
var jl = /* @__PURE__ */ new Map();
function Ml(e) {
  let t = jl.get(e);
  if (t != null) return t;
  let n = Nl(e, _l[e]);
  return jl.set(e, n), n;
}
function Nl(e, t) {
  if (t.kind === `inscribedBalls`) return { kind: `balls`, balls: Vl(Pl(fc())[0]) };
  let n = Pl(dc(e));
  switch (t.kind) {
    case `extrusion`:
      return Fl(n, t.halfDepth, t.bevel);
    case `revolve`:
      return Il(Xl(n[0]));
    case `roundedSlab`:
      return Ll(Hl(Xl(n[0])), t.halfDepth, t.edge);
    case `pill`:
      return { kind: `balls`, balls: Rl(Xl(n[0]), t.axis) };
    case `crystal`:
      return zl();
    case `loft`:
      return Bl(Xl(n[0]), t.depth);
    default:
      throw Error(`Unhandled case`);
  }
}
function Pl(e) {
  let t = Qc(e, yl), n = yl / 2;
  return $c(e, bl, yl).map((e2) => e2.map((e3, r) => r % 2 == 0 ? (e3 - n) / t : (n - e3) / t));
}
function Fl(e, t, n) {
  let r = e[0].length / 2, i = Jl(Array.from({ length: r }, (t2, n2) => {
    let i2 = e[2 + xl * r + n2];
    return [i2[0], i2[1]];
  })), { x0: a, x1: o, y0: s2, y1: c } = Yl(i), l = (a + o) / 2, u = (s2 + c) / 2, d = Math.max(1e-4, Math.min((o - a) / 2, (c - s2) / 2)), f2 = Math.min(t * 0.8, n), p = (e2) => {
    let n2 = e2 / xl * (Math.PI / 2);
    return { z: t - f2 + f2 * Math.sin(n2), scale: 1 - f2 / d * (1 - Math.cos(n2)) };
  }, m = Array.from({ length: 5 }, (e2, t2) => p(t2)), { vertices: h, faces: g } = Ul([...m.map(({ z: e2, scale: t2 }) => ({ z: -e2, scale: t2 })).reverse(), ...m].map(({ z: e2, scale: t2 }) => i.map(([n2, r2]) => [l + (n2 - l) * t2, u + (r2 - u) * t2, e2])), true), _ = g.length - 1;
  return { kind: `mesh`, vertices: h, faces: g.map((e2, t2) => ({ corners: e2, isBounding: t2 === 0 || t2 === _ })) };
}
function Il(e) {
  let t = /* @__PURE__ */ new Map();
  for (let [n2, r2] of e) n2 > -1e-9 && t.set(r2, Math.max(t.get(r2) ?? 0, n2));
  let n = [], r = (e2) => n.push(e2) - 1, i = [...t].sort((e2, t2) => t2[0] - e2[0]).map(([e2, t2]) => t2 <= kl ? [r([0, e2, 0])] : Array.from({ length: Sl }, (n2, i2) => {
    let a2 = i2 / Sl * vl;
    return r([t2 * Math.sin(a2), e2, t2 * Math.cos(a2)]);
  })), a = [i[0], i[i.length - 1]].filter((e2) => e2.length > 1), o = i.slice(1).flatMap((e2, t2) => Gl(i[t2], e2));
  return Kl(n, [...a, ...o]);
}
function Ll(e, t, n) {
  let r = e.length, i = e.map((t2, n2) => {
    let i2 = e[(n2 - 1 + r) % r], a2 = e[(n2 + 1) % r], o = a2[1] - i2[1], s2 = -(a2[0] - i2[0]), c = Math.hypot(o, s2) || 1;
    return o /= c, s2 /= c, o * t2[0] + s2 * t2[1] < 0 ? [-o, -s2] : [o, s2];
  }), a = [];
  return e.forEach(([e2, r2], o) => {
    for (let s2 = 0; s2 <= wl; s2++) {
      let c = s2 / wl * (Math.PI / 2), l = n * (1 - Math.cos(c)), u = t - n + n * Math.sin(c), d = e2 - i[o][0] * l, f2 = r2 - i[o][1] * l;
      a.push([d, f2, u], [d, f2, -u]);
    }
  }), Wl(a);
}
function Rl(e, t) {
  let n = Math.max(...e.map((e2) => Math.abs(e2[1 - t]))), r = Math.max(...e.map((e2) => Math.abs(e2[t]))) - n;
  return Array.from({ length: Dl }, (e2, i) => {
    let a = -r + 2 * r * (i / 32);
    return { center: t === 0 ? [a, 0, 0] : [0, a, 0], radius: n };
  });
}
function zl() {
  let e = 0.12, t = [[0, 1.04, 0], [0, -1.04, 0]], n = 0.52;
  for (let e2 of [-1, 1]) for (let r2 = 0; r2 < 6; r2++) {
    let i = r2 / 6 * vl;
    t.push([n * Math.cos(i), e2 * 0.51, n * Math.sin(i)]);
  }
  let r = [];
  for (let [n2, i, a] of t) for (let t2 = 0; t2 <= 8; t2++) {
    let o = t2 / 8 * Math.PI, s2 = Math.sin(o), c = t2 === 0 || t2 === 8 ? 1 : 14;
    for (let t3 = 0; t3 < c; t3++) {
      let l = t3 / c * vl;
      r.push([n2 + e * s2 * Math.sin(l), i + e * Math.cos(o), a + e * s2 * Math.cos(l)]);
    }
  }
  return Wl(r);
}
function Bl(e, t) {
  let n = Jl(e), { x0: r, x1: i, y0: a, y1: o } = Yl(n), s2 = (r + i) / 2, c = (a + o) / 2, { vertices: l, faces: u } = Ul(Array.from({ length: 17 }, (e2, r2) => {
    let i2 = -Math.PI / 2 + Math.PI * r2 / El, a2 = Math.max(0, Math.cos(i2)) ** +Tl, o2 = t * Math.sin(i2);
    return n.map(([e3, t2]) => [s2 + (e3 - s2) * a2, c + (t2 - c) * a2, o2]);
  }), false);
  return { kind: `mesh`, vertices: l, faces: u.map((e2) => ({ corners: e2, isBounding: false })) };
}
function Vl(e) {
  let t = Xl(e).map(([e2, t2]) => [L + L * e2, L - L * t2]), { x0: n, x1: r, y0: i, y1: a } = Yl(t), o = (e2, n2) => {
    let r2 = false;
    for (let i2 = 0, a2 = t.length - 1; i2 < t.length; a2 = i2++) {
      let [o2, s3] = t[i2], [c2, l2] = t[a2];
      s3 > n2 != l2 > n2 && e2 < o2 + (c2 - o2) * (n2 - s3) / (l2 - s3) && (r2 = !r2);
    }
    return r2;
  }, s2 = Math.max(r - n, a - i) / Ol, c = [];
  for (let e2 = i + s2 / 2; e2 < a; e2 += s2) for (let i2 = n + s2 / 2; i2 < r; i2 += s2) {
    if (!o(i2, e2)) continue;
    let n2 = 1 / 0;
    for (let [r3, a2] of t) n2 = Math.min(n2, (r3 - i2) ** 2 + (a2 - e2) ** 2);
    let r2 = Math.sqrt(n2);
    r2 > s2 && c.push({ x: i2, y: e2, r: r2 });
  }
  c.sort((e2, t2) => t2.r - e2.r);
  let l = [];
  for (let e2 of c) l.some((t2) => Math.hypot(e2.x - t2.x, e2.y - t2.y) + e2.r <= t2.r + s2 * 0.25) || l.push(e2);
  return l.map((e2) => ({ center: [(e2.x - L) / L, -(e2.y - L) / L, 0], radius: e2.r / L }));
}
function Hl(e) {
  return Array.from({ length: Cl }, (t, n) => {
    let r = n / Cl * vl, i = Math.cos(r), a = -Math.sin(r), o = 0;
    return e.forEach((t2, n2) => {
      let r2 = e[(n2 + 1) % e.length], s2 = r2[0] - t2[0], c = r2[1] - t2[1], l = i * c - a * s2;
      if (Math.abs(l) < Al) return;
      let u = (t2[0] * c - t2[1] * s2) / l, d = (t2[0] * a - t2[1] * i) / l;
      u > o && d >= -1e-9 && d <= 1.000000001 && (o = u);
    }), [i * o, a * o];
  });
}
function Ul(e, t) {
  let n = e[0].length, r = e.flat(), i = [], a = (e2, t2) => e2 * n + t2 % n;
  t && i.push(Array.from({ length: n }, (e2, t2) => a(0, n - 1 - t2)));
  for (let t2 = 1; t2 < e.length; t2++) for (let e2 = 0; e2 < n; e2++) i.push([a(t2 - 1, e2), a(t2 - 1, e2 + 1), a(t2, e2 + 1), a(t2, e2)]);
  return t && i.push(Array.from({ length: n }, (t2, n2) => a(e.length - 1, n2))), { vertices: r, faces: i };
}
function Wl(e) {
  return { kind: `mesh`, vertices: e, faces: Yo(e).map((e2) => ({ corners: e2, isBounding: true })) };
}
function Gl(e, t) {
  return e.length === 1 && t.length === 1 ? [] : e.length === 1 ? t.map((n, r) => [e[0], n, t[(r + 1) % t.length]]) : t.length === 1 ? e.map((n, r) => [n, t[0], e[(r + 1) % e.length]]) : e.map((n, r) => [n, t[r], t[(r + 1) % t.length], e[(r + 1) % e.length]]);
}
function Kl(e, t) {
  let n = e.length, r = [e.reduce((e2, t2) => e2 + t2[0], 0) / n, e.reduce((e2, t2) => e2 + t2[1], 0) / n, e.reduce((e2, t2) => e2 + t2[2], 0) / n];
  return { kind: `mesh`, vertices: e, faces: t.map((t2) => {
    let [n2, i, a] = ql(e, t2), o = t2.reduce((t3, n3) => [t3[0] + e[n3][0], t3[1] + e[n3][1], t3[2] + e[n3][2]], [0, 0, 0]), s2 = t2.length;
    return { corners: n2 * (o[0] / s2 - r[0]) + i * (o[1] / s2 - r[1]) + a * (o[2] / s2 - r[2]) < 0 ? [...t2].reverse() : t2, isBounding: true };
  }) };
}
function ql(e, t) {
  let n = 0, r = 0, i = 0;
  for (let a = 0; a < t.length; a++) {
    let o = e[t[a]], s2 = e[t[(a + 1) % t.length]];
    n += (o[1] - s2[1]) * (o[2] + s2[2]), r += (o[2] - s2[2]) * (o[0] + s2[0]), i += (o[0] - s2[0]) * (o[1] + s2[1]);
  }
  return [n, r, i];
}
function Jl(e) {
  let t = 0;
  return e.forEach((n, r) => {
    let i = e[(r + 1) % e.length];
    t += n[0] * i[1] - i[0] * n[1];
  }), t < 0 ? [...e].reverse() : e;
}
function Yl(e) {
  let t = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0;
  for (let [a, o] of e) t = Math.min(t, a), n = Math.max(n, a), r = Math.min(r, o), i = Math.max(i, o);
  return { x0: t, x1: n, y0: r, y1: i };
}
function Xl(e) {
  return Array.from({ length: e.length / 2 }, (t, n) => [e[2 * n], e[2 * n + 1]]);
}
var Zl = 1024;
var Ql = 2 ** 23;
var $l = 2 ** 25;
var eu = 2 ** 26;
var tu = class {
  xs = [];
  ys = [];
  #e = /* @__PURE__ */ new Map();
  id(e, t) {
    let n = (e + Ql) * $l + (t + Ql), r = this.#e.get(n);
    return r ?? (r = this.xs.length, this.xs.push(e), this.ys.push(t), this.#e.set(n, r)), r;
  }
};
function nu(e) {
  let t = ``;
  for (let n of e) {
    t += `M${gu(n[0])} ${gu(n[1])}`;
    for (let e2 = 2; e2 < n.length; e2 += 2) t += ` ${gu(n[e2])} ${gu(n[e2 + 1])}`;
    t += `Z`;
  }
  return t;
}
function ru(e) {
  let t = iu(e), n = au(t);
  return uu(lu(cu(t.flatMap((e2) => ou(e2, n)))));
}
function iu(e) {
  let t = new tu(), n = /* @__PURE__ */ new Map(), r = [], i = [], a = (e2) => {
    let r2 = mu(e2);
    if (r2 === 0) return;
    let a2 = e2.length / 2;
    i.length = 0;
    for (let n2 = 0; n2 < a2; n2++) {
      let o2 = r2 > 0 ? n2 : a2 - 1 - n2;
      i.push(t.id(e2[2 * o2], e2[2 * o2 + 1]));
    }
    for (let e3 = 0; e3 < a2; e3++) {
      let t2 = i[e3], r3 = i[(e3 + 1) % a2];
      if (t2 === r3) continue;
      let o2 = r3 * eu + t2, s3 = n.get(o2) ?? 0;
      s3 > 1 ? n.set(o2, s3 - 1) : s3 === 1 ? n.delete(o2) : n.set(t2 * eu + r3, (n.get(t2 * eu + r3) ?? 0) + 1);
    }
  };
  for (let t2 of e) {
    r.length = t2.length;
    for (let e3 = 0; e3 < t2.length; e3++) r[e3] = Math.round(t2[e3] * Zl);
    let e2 = r.length === 8 ? du(r) : null;
    if (e2 == null) a(r);
    else for (let t3 of e2) a(t3);
  }
  let { xs: o, ys: s2 } = t;
  return [...n].map(([e2, t2]) => {
    let n2 = Math.floor(e2 / eu), r2 = e2 - n2 * eu;
    return { ax: o[n2], ay: s2[n2], bx: o[r2], by: s2[r2], count: t2 };
  });
}
function au(e) {
  let t = new tu();
  for (let n2 of e) t.id(n2.ax, n2.ay), t.id(n2.bx, n2.by);
  let n = e.map((e2, t2) => t2).sort((t2, n2) => hu(e[t2]) - hu(e[n2]));
  n.forEach((r2, i2) => {
    let a = e[r2], o = Math.max(a.ax, a.bx);
    for (let r3 = i2 + 1; r3 < n.length; r3++) {
      let i3 = e[n[r3]];
      if (hu(i3) > o) break;
      if (Math.min(i3.ay, i3.by) > Math.max(a.ay, a.by) || Math.max(i3.ay, i3.by) < Math.min(a.ay, a.by)) continue;
      let s2 = Math.sign(pu(a.ax, a.ay, a.bx, a.by, i3.ax, i3.ay)), c = Math.sign(pu(a.ax, a.ay, a.bx, a.by, i3.bx, i3.by)), l = pu(i3.ax, i3.ay, i3.bx, i3.by, a.ax, a.ay), u = pu(i3.ax, i3.ay, i3.bx, i3.by, a.bx, a.by);
      if (s2 * c >= 0 || Math.sign(l) * Math.sign(u) >= 0) continue;
      let d = l / (l - u);
      t.id(Math.round(a.ax + (a.bx - a.ax) * d), Math.round(a.ay + (a.by - a.ay) * d));
    }
  });
  let { xs: r, ys: i } = t;
  return r.map((e2, t2) => ({ x: e2, y: i[t2] })).sort((e2, t2) => e2.x - t2.x);
}
function ou(e, t) {
  let n = e.bx - e.ax, r = e.by - e.ay, i = Math.abs(n) + Math.abs(r), a = Math.min(e.ay, e.by) - 0.5, o = Math.max(e.ay, e.by) + 0.5, s2 = Math.max(e.ax, e.bx) + 0.5, c = [];
  for (let l2 = su(t, Math.min(e.ax, e.bx) - 0.5); l2 < t.length && t[l2].x <= s2; l2++) {
    let { x: s3, y: u } = t[l2];
    u < a || u > o || 2 * Math.abs(pu(e.ax, e.ay, e.bx, e.by, s3, u)) > i || c.push({ t: ((s3 - e.ax) * n + (u - e.ay) * r) / (n * n + r * r), x: s3, y: u });
  }
  c.sort((e2, t2) => e2.t - t2.t);
  let l = [];
  for (let t2 = 1; t2 < c.length; t2++) {
    let n2 = c[t2 - 1], r2 = c[t2];
    (n2.x !== r2.x || n2.y !== r2.y) && l.push({ ax: n2.x, ay: n2.y, bx: r2.x, by: r2.y, count: e.count });
  }
  return l;
}
function su(e, t) {
  let n = 0, r = e.length;
  for (; n < r; ) {
    let i = n + r >> 1;
    e[i].x < t ? n = i + 1 : r = i;
  }
  return n;
}
function cu(e) {
  let t = new tu(), n = /* @__PURE__ */ new Map();
  for (let r2 of e) {
    let e2 = t.id(r2.ax, r2.ay), i2 = t.id(r2.bx, r2.by), a2 = Math.min(e2, i2) * eu + Math.max(e2, i2);
    n.set(a2, (n.get(a2) ?? 0) + (e2 < i2 ? r2.count : -r2.count));
  }
  let { xs: r, ys: i } = t, a = [];
  for (let [e2, t2] of n) {
    if (t2 === 0) continue;
    let n2 = Math.floor(e2 / eu), o = e2 - n2 * eu;
    a.push({ ax: r[n2], ay: i[n2], bx: r[o], by: i[o], count: t2 });
  }
  return a;
}
function lu(e) {
  let t = [];
  for (let n of e) {
    let r = n.ax + n.bx, i = n.ay + n.by, a = 0;
    for (let t2 of e) {
      if (t2 === n) continue;
      let e2 = 2 * t2.ay, o2 = 2 * t2.by;
      e2 <= i ? o2 > i && pu(2 * t2.ax, e2, 2 * t2.bx, o2, r, i) > 0 && (a += t2.count) : o2 <= i && pu(2 * t2.ax, e2, 2 * t2.bx, o2, r, i) < 0 && (a -= t2.count);
    }
    let o = n.ay < n.by || n.ay === n.by && n.ax > n.bx ? a + n.count : a, s2 = o - n.count;
    o !== 0 != (s2 !== 0) && t.push(o === 0 ? { ax: n.bx, ay: n.by, bx: n.ax, by: n.ay, count: 1 } : { ...n, count: 1 });
  }
  return t;
}
function uu(e) {
  let t = new tu(), n = [];
  for (let r2 of e) {
    let e2 = t.id(r2.ax, r2.ay), i2 = t.id(r2.bx, r2.by);
    for (; n.length <= Math.max(e2, i2); ) n.push([]);
    for (let t2 = 0; t2 < Math.abs(r2.count); t2++) r2.count > 0 ? n[e2].push(i2) : n[i2].push(e2);
  }
  let { xs: r, ys: i } = t, a = ``;
  return n.forEach((e2, t2) => {
    for (; e2.length > 0; ) {
      a += `M${gu(r[t2] / Zl)} ${gu(i[t2] / Zl)}`;
      let o = e2.pop();
      for (; o != null && o !== t2; ) a += ` ${gu(r[o] / Zl)} ${gu(i[o] / Zl)}`, o = n[o].pop();
      a += `Z`;
    }
  }), a;
}
function du(e) {
  let [t, n, r, i, a, o, s2, c] = e, l = fu(t, n, r, i, a, o, s2, c);
  if (l != null) return [[t, n, l[0], l[1], s2, c], [l[0], l[1], r, i, a, o]];
  let u = fu(r, i, a, o, s2, c, t, n);
  return u == null ? null : [[r, i, u[0], u[1], t, n], [u[0], u[1], a, o, s2, c]];
}
function fu(e, t, n, r, i, a, o, s2) {
  let c = Math.sign(pu(e, t, n, r, i, a)), l = Math.sign(pu(e, t, n, r, o, s2)), u = pu(i, a, o, s2, e, t), d = pu(i, a, o, s2, n, r);
  if (!(c * l < 0 && Math.sign(u) * Math.sign(d) < 0)) return null;
  let f2 = u / (u - d);
  return [Math.round(e + (n - e) * f2), Math.round(t + (r - t) * f2)];
}
function pu(e, t, n, r, i, a) {
  return (n - e) * (a - t) - (r - t) * (i - e);
}
function mu(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 2) {
    let r = (n + 2) % e.length;
    t += e[n] * e[r + 1] - e[r] * e[n + 1];
  }
  return t;
}
function hu(e) {
  return Math.min(e.ax, e.bx);
}
function gu(e) {
  return String(Math.round(e * 100) / 100);
}
var _u = Math.PI / 6;
var vu = -1.24;
var yu = 0.79;
var bu = 3.24;
var xu = 48;
var Su = 160;
var Cu = 1e-3;
var wu = 0.18;
var V = /* @__PURE__ */ Nu([-0.5, 0.6, 0.62]);
var Tu = [...[0, 1, 2, 3, 4, 5].map((e) => {
  let t = e * _u;
  return { center: [0, 0, 0], a: [Math.sin(t), 0, Math.cos(t)], b: [0, 1, 0], isEquator: false };
}), ...[-2, -1, 0, 1, 2].map((e) => {
  let t = e * _u, n = Math.cos(t);
  return { center: [0, Math.sin(t), 0], a: [0, 0, n], b: [n, 0, 0], isEquator: e === 0 };
})];
var Eu = null;
function Du(e, t) {
  let n = Gr(t, e.center), r = Gr(t, e.a), i = Gr(t, e.b), a = Math.hypot(r[2], i[2]), o = 0, s2 = 2 * Math.PI;
  if (a > Math.abs(n[2])) {
    let e2 = Math.atan2(i[2], r[2]), t2 = Math.acos(-n[2] / a);
    o = e2 - t2, s2 = e2 + t2;
  } else if (n[2] <= 0) return null;
  return { center: [n[0], n[1]], a: [r[0], r[1]], b: [i[0], i[1]], from: o, to: s2 };
}
function Ou(e, t) {
  let n = Math.sqrt(Math.max(0, 1 - e * e - t * t)), r = V[0] * e + V[1] * t + V[2] * n;
  return wu + 0.8200000000000001 * Math.max(0, r);
}
function ku() {
  if (Eu !== null) return Eu;
  let e = Math.hypot(V[0], V[1]), t = [V[0] / e, V[1] / e], n = { origin: [vu * V[0], vu * V[1]], axisX: [yu * bu * t[0], yu * bu * t[1]], axisY: [-3.24 * t[1], bu * t[0]], focus: 2.41 * e / (yu * bu) };
  return Eu = { ...n, stops: ju(n) }, Eu;
}
function Au(e, t, n) {
  let r = t - e.origin[0], i = n - e.origin[1], a = (r * e.axisX[0] + i * e.axisX[1]) / (e.axisX[0] ** 2 + e.axisX[1] ** 2), o = (r * e.axisY[0] + i * e.axisY[1]) / (e.axisY[0] ** 2 + e.axisY[1] ** 2), s2 = e.focus, c = s2 * s2 - 1, l = 2 * s2 * (a - s2), u = (a - s2) ** 2 + o * o;
  return (-l - Math.sqrt(l * l - 4 * c * u)) / (2 * c);
}
function ju(e) {
  let t = new Float64Array(49), n = new Float64Array(49), r = new Float64Array(49), i = 0;
  for (let a2 = 0; a2 < Su; a2++) for (let o2 = 0; o2 < Su; o2++) {
    let s2 = (a2 + 0.5) / Su * 2 - 1, c = (o2 + 0.5) / Su * 2 - 1;
    if (s2 * s2 + c * c >= 1) continue;
    let l = Math.min(1, Au(e, s2, c)) * xu, u = Math.min(47, Math.floor(l)), d = l - u, f2 = Ou(s2, c);
    t[u] += (1 - d) ** 2, t[u + 1] += d * d, n[u] += (1 - d) * d, r[u] += (1 - d) * f2, r[u + 1] += d * f2, i++;
  }
  let a = Cu * i / 49;
  for (let e2 = 0; e2 < xu; e2++) t[e2] += a, t[e2 + 1] += a, n[e2] -= a;
  let o = Mu(t, n, r);
  return Array.from(o, (e2, t2) => ({ offset: t2 / xu, shade: e2 }));
}
function Mu(e, t, n) {
  let r = e.length, i = new Float64Array(r), a = new Float64Array(r);
  i[0] = t[0] / e[0], a[0] = n[0] / e[0];
  for (let o2 = 1; o2 < r; o2++) {
    let r2 = e[o2] - t[o2 - 1] * i[o2 - 1];
    i[o2] = t[o2] / r2, a[o2] = (n[o2] - t[o2 - 1] * a[o2 - 1]) / r2;
  }
  let o = new Float64Array(r);
  o[r - 1] = a[r - 1];
  for (let e2 = r - 2; e2 >= 0; e2--) o[e2] = a[e2] - i[e2] * o[e2 + 1];
  return o;
}
function Nu(e) {
  let t = Math.hypot(e[0], e[1], e[2]);
  return [e[0] / t, e[1] / t, e[2] / t];
}
var Pu = 0.4;
var Fu = 1e-9;
var Iu = 6;
var Lu = 24;
var Ru = 4e-3;
var zu = Math.PI / 180;
function Bu(e, t, n, r) {
  let i = Ml(e), a = Vu(t), o = Qc(dc(e), n), s2 = n / 2, c = r.map((e2) => e2 + (1 - e2) * Pu), l = (e2) => {
    let t2 = e2[0] * V[0] + e2[1] * V[1] + e2[2] * V[2], n2 = wu + (1 - wu) * Math.max(0, t2);
    return Yu(c.map((e3) => e3 * n2));
  }, u = (e2) => [s2 + o * e2[0], s2 - o * e2[1]], d = i.kind === `mesh` ? Hu(i, a, u, l) : Uu(i.balls, a, u, o, l);
  return { baseFill: l([0, 0, 1]), faces: d };
}
function Vu(e) {
  let [t, n] = [Math.cos(e.yaw * zu), Math.sin(e.yaw * zu)], [r, i] = [Math.cos(e.pitch * zu), Math.sin(e.pitch * zu)], [a, o] = [Math.cos(e.roll * zu), Math.sin(e.roll * zu)];
  return ([e2, s2, c]) => {
    let l = e2 * t + c * n, u = c * t - e2 * n, d = s2 * r - u * i, f2 = s2 * i + u * r;
    return [l * a - d * o, l * o + d * a, f2];
  };
}
function Hu(e, t, n, r) {
  let i = e.vertices.map(t), a = [], o = /* @__PURE__ */ new Map();
  for (let t2 of e.faces) {
    let [e2, s2, c] = ql(i, t2.corners), l = Math.hypot(e2, s2, c);
    if (l === 0 || c <= Fu * l) continue;
    let u = r([e2 / l, s2 / l, c / l]), d = t2.corners.flatMap((e3) => n(i[e3]));
    if (t2.isBounding) {
      Gu(o, u, d);
      continue;
    }
    let f2 = t2.corners.reduce((e3, t3) => e3 + i[t3][2], 0) / t2.corners.length;
    a.push({ polygon: d, fill: u, depth: f2 });
  }
  return a.sort((e2, t2) => e2.depth - t2.depth), [...Wu(a), ...[...o].map(([e2, t2]) => Ku(t2, e2))];
}
function Uu(e, t, n, r, i) {
  let a = e.map((e2) => ({ center: t(e2.center), radius: e2.radius })), o = a.map((e2, t2) => t2).sort((e2, t2) => a[e2].center[2] + a[e2].radius - (a[t2].center[2] + a[t2].radius)), s2 = Ru / r;
  return o.flatMap((e2) => {
    let { center: t2, radius: o2 } = a[e2], c = a.filter((t3, n2) => n2 !== e2 && a[n2].radius > s2), l = (e3) => c.some((t3) => e3.every((e4) => Ju(e4, t3.center) < (t3.radius - s2) ** 2)), u = (e3, n2) => [t2[0] + o2 * Math.sin(e3) * Math.cos(n2), t2[1] + o2 * Math.sin(e3) * Math.sin(n2), t2[2] + o2 * Math.cos(e3)], d = qu(o2 * r), f2 = /* @__PURE__ */ new Map();
    for (let e3 = 0; e3 < Iu; e3++) {
      let t3 = e3 / Iu * (Math.PI / 2), r2 = (e3 + 1) / Iu * (Math.PI / 2), a2 = e3 === 5 ? d : 1;
      for (let o3 = 0; o3 < Lu; o3++) {
        let s3 = o3 / Lu * 2 * Math.PI, c2 = (o3 + 1) / Lu * 2 * Math.PI, d2 = [...e3 === 0 ? [u(0, 0)] : [u(t3, s3)], ...Array.from({ length: a2 + 1 }, (e4, t4) => u(r2, s3 + (c2 - s3) * t4 / a2)), ...e3 === 0 ? [] : [u(t3, c2)]];
        if (l(d2)) continue;
        let p = (t3 + r2) / 2, m = (s3 + c2) / 2;
        Gu(f2, i([Math.sin(p) * Math.cos(m), Math.sin(p) * Math.sin(m), Math.cos(p)]), d2.flatMap(n));
      }
    }
    return [...f2].map(([e3, t3]) => Ku(t3, e3));
  });
}
function Wu(e) {
  let t = [], n = 0;
  for (let r = 1; r <= e.length; r++) r < e.length && e[r].fill === e[n].fill || (t.push(Ku(e.slice(n, r).map((e2) => e2.polygon), e[n].fill)), n = r);
  return t;
}
function Gu(e, t, n) {
  let r = e.get(t);
  r == null ? e.set(t, [n]) : r.push(n);
}
function Ku(e, t) {
  return { d: nu(e), fill: t };
}
function qu(e) {
  if (e <= Ru) return 1;
  let t = 2 * Math.acos(1 - Ru / e);
  return Math.max(1, Math.ceil(2 * Math.PI / Lu / t));
}
function Ju(e, t) {
  return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
}
function Yu(e) {
  return `#${e.map((e2) => Math.round(Math.min(1, Math.max(0, e2)) * 255).toString(16).padStart(2, `0`)).join(``)}`;
}
var { abs: Xu, floor: Zu, hypot: Qu, max: $u, min: ed, sqrt: td } = Math;
var nd = 60;
var rd = 256;
var id = 24;
var ad = 2e4;
var od = 0.2;
function sd(e, t, n) {
  let r = { field: e, tolerance: n, root: n.deviation * 1e-3, reach: t.step * Qu(t.nx, t.ny) }, i = [];
  for (let e2 of cd(r, t)) {
    let t2 = md(ud(r, e2), n);
    t2.length >= 3 && i.push(t2);
  }
  return i;
}
function cd(e, t) {
  let { field: n } = e, { x0: r, y0: i, step: a, nx: o, ny: s2 } = t, c = o + 1, l = new Float64Array(c * (s2 + 1));
  for (let e2 = 0; e2 <= s2; e2++) for (let t2 = 0; t2 <= o; t2++) l[e2 * c + t2] = n(r + t2 * a, i + e2 * a);
  let u = 2 * c * (s2 + 1), d = new Int32Array(u).fill(-1), f2 = /* @__PURE__ */ new Map(), p = (t2) => {
    let n2 = f2.get(t2);
    if (n2 !== void 0) return n2;
    let o2 = t2 >> 1, s3 = t2 & 1 ? o2 + c : o2 + 1, u2 = r + o2 % c * a, d2 = i + Zu(o2 / c) * a, p2 = r + s3 % c * a, m2 = i + Zu(s3 / c) * a, h2 = ld(e, u2, d2, l[o2], p2, m2, l[s3]), g2 = [u2 + (p2 - u2) * h2, d2 + (m2 - d2) * h2];
    return f2.set(t2, g2), g2;
  }, m = [0, 0, 0, 0], h = [0, 0, 0, 0], g = [0, 0, 0, 0], _ = [false, false, false, false];
  for (let e2 = 0; e2 < s2; e2++) for (let t2 = 0; t2 < o; t2++) {
    let o2 = e2 * c + t2;
    if (l[o2] < 0 ? l[o2 + 1] < 0 && l[o2 + 1 + c] < 0 && l[o2 + c] < 0 : l[o2 + 1] >= 0 && l[o2 + 1 + c] >= 0 && l[o2 + c] >= 0) continue;
    m[0] = o2, m[1] = o2 + 1, m[2] = o2 + 1 + c, m[3] = o2 + c, h[0] = 2 * o2, h[1] = 2 * (o2 + 1) + 1, h[2] = 2 * (o2 + c), h[3] = 2 * o2 + 1;
    let s3 = 0;
    for (let e3 = 0; e3 < 4; e3++) {
      let t3 = l[m[e3]] < 0;
      t3 !== l[m[e3 + 1 & 3]] < 0 && (g[s3] = h[e3], _[s3] = t3, s3++);
    }
    if (s3 === 2) {
      let e3 = +!_[0];
      d[g[e3]] = g[1 - e3];
    } else if (s3 === 4) {
      let o3 = n(r + (t2 + 0.5) * a, i + (e2 + 0.5) * a) < 0;
      for (let e3 = 0; e3 < 4; e3++) _[e3] && (d[g[e3]] = g[e3 + (o3 ? 1 : 3) & 3]);
    }
  }
  let v = [], y = new Uint8Array(u);
  for (let e2 = 0; e2 < u; e2++) {
    if (d[e2] < 0 || y[e2]) continue;
    let t2 = [], n2 = e2;
    for (; n2 >= 0 && !y[n2]; ) y[n2] = 1, t2.push(p(n2)), n2 = d[n2];
    n2 === e2 && v.push(t2);
  }
  return v;
}
function ld(e, t, n, r, i, a, o) {
  let s2 = 0, c = r, l = 1, u = o, d = 0, f2 = 0;
  for (let r2 = 0; r2 < nd; r2++) {
    f2 = (s2 * u - l * c) / (u - c);
    let r3 = e.field(t + (i - t) * f2, n + (a - n) * f2);
    if (Xu(r3) <= e.root || l - s2 <= 1e-15) break;
    r3 < 0 == u < 0 ? (l = f2, u = r3, d === -1 && (c /= 2), d = -1) : (s2 = f2, c = r3, d === 1 && (u /= 2), d = 1);
  }
  return f2;
}
function ud(e, t) {
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r], a = t[(r + 1) % t.length];
    (i[0] !== a[0] || i[1] !== a[1]) && (n.push(i), dd(e, i, a, 0, n));
  }
  return n;
}
function dd(e, t, n, r, i) {
  let a = n[0] - t[0], o = n[1] - t[1], s2 = td(a * a + o * o);
  if (s2 === 0 || r >= id || i.length >= ad) return;
  let c = (t[0] + n[0]) / 2, l = (t[1] + n[1]) / 2, u = e.field(c, l);
  if (!Number.isFinite(u)) return;
  let d = u > 0 ? 1 : -1, f2 = -o / s2 * d, p = a / s2 * d, m = pd(e, c, l, u, f2, p);
  if (m === null || m <= e.tolerance.deviation / 2 && s2 <= e.tolerance.edge) return;
  let h = u > 0 ? fd(e, c, l, u, f2, p, m) : [c + f2 * m, l + p * m];
  dd(e, t, h, r + 1, i), i.push(h), dd(e, h, n, r + 1, i);
}
function fd(e, t, n, r, i, a, o) {
  let s2 = [t + i * o, n + a * o], c = o * 1e-3, l = e.field(t + c, n) - e.field(t - c, n), u = e.field(t, n + c) - e.field(t, n - c), d = td(l * l + u * u);
  if (d === 0) return s2;
  let f2 = l * a - u * i < 0 ? -1 : 1, p = -u / d * f2, m = l / d * f2;
  if (p * i + m * a < od) return s2;
  let h = pd(e, t, n, r, p, m);
  return h === null || h * (p * i + m * a) <= o ? s2 : [t + p * h, n + m * h];
}
function pd(e, t, n, r, i, a) {
  if (r === 0) return 0;
  let o = 0, s2 = r;
  for (let c = 0; c < rd; c++) {
    let c2 = o + $u(Xu(s2), e.root);
    if (c2 > e.reach) return null;
    let l = t + i * c2, u = n + a * c2, d = e.field(l, u);
    if (d < 0 != r < 0) return o + (c2 - o) * ld(e, t + i * o, n + a * o, s2, l, u, d);
    o = c2, s2 = d;
  }
  return null;
}
function md(e, t) {
  let n = e.length;
  if (n < 4) return e;
  let r = new Uint8Array(n), i = 0, a = -1;
  for (let t2 = 1; t2 < n; t2++) {
    let n2 = hd(e[0], e[t2]);
    n2 > a && (a = n2, i = t2);
  }
  r[0] = 1, r[i] = 1;
  let o = (i2, a2) => {
    if (a2 - i2 < 2) return;
    let s2 = e[i2], c = e[a2 % n], l = -1, u = i2;
    for (let t2 = i2 + 1; t2 < a2; t2++) {
      let n2 = gd(e[t2], s2, c);
      n2 > l && (l = n2, u = t2);
    }
    let d = l > t.deviation / 2;
    !d && td(hd(s2, c)) <= t.edge || (d || (u = i2 + a2 >> 1), r[u] = 1, o(i2, u), o(u, a2));
  };
  return o(0, i), o(i, n), e.filter((e2, t2) => r[t2] === 1);
}
function hd(e, t) {
  let n = t[0] - e[0], r = t[1] - e[1];
  return n * n + r * r;
}
function gd(e, t, n) {
  let r = n[0] - t[0], i = n[1] - t[1], a = e[0] - t[0], o = e[1] - t[1], s2 = r * r + i * i, c = s2 > 0 ? ed(1, $u(0, (a * r + o * i) / s2)) : 0, l = a - r * c, u = o - i * c;
  return td(l * l + u * u);
}
var { PI: H, abs: _d, acos: vd, asin: yd, atan2: bd, ceil: xd, cos: U, exp: Sd, floor: W, hypot: Cd, max: G, min: K, pow: wd, sin: q, sqrt: Td } = Math;
var Ed = [{ fill: `#3d3d3d`, paints: /* @__PURE__ */ new Set([1, 2]) }, { fill: `#525252`, paints: /* @__PURE__ */ new Set([2]) }];
var Dd = { deviation: 0.5, edge: 4 };
var Od = 2;
var kd = 4;
var Ad = 8;
var jd = 19 * H / 180;
var Md = 0.16;
var Nd = 2.2;
var Pd = 0.9;
var Fd = 1.08;
var Id = Fd * 0.84;
var Ld = -65 * H / 180;
var Rd = 1.17;
var zd = 0.36;
var Bd = 1.18;
var Vd = 160;
var Hd = 320;
var J = 256;
var Ud = 24;
var Wd = 1.25;
var Gd = 0.015;
var Kd = 1.002;
var qd = -0.35;
var Jd = 48;
var Yd = 2.2;
var Xd = 14;
var Zd = 0.03;
var Qd = 0.012;
var $d = 48;
var ef = 72;
var tf = 8;
var nf = 0.115;
var rf = 0.08;
var af = 0.06;
var of = 0.09;
var sf = 24;
var cf = 32;
var lf = 0.6;
var uf = 0.012;
var df = 0.02;
var ff = 128;
var pf = 4096;
var mf = 0.05;
var hf = 1.01;
var gf = { x: 0, y: 0, z: 1 };
var _f = { x: 0, y: 1, z: 0 };
var vf = { x: 1, y: 0, z: 0 };
var yf = /* @__PURE__ */ Array.from({ length: J }, (e, t) => {
  let n = 2 * H * t / J;
  return { x: U(n), y: q(n) };
});
var bf = /* @__PURE__ */ Array.from({ length: 49 }, (e, t) => {
  let n = (t - Ud) / Ud * Wd;
  return { lean: U(n), depth: q(n) };
}).sort((e, t) => t.lean - e.lean);
var xf = null;
var Sf = null;
var Cf = /* @__PURE__ */ new Map();
var wf = /* @__PURE__ */ new WeakMap();
function Tf(e, t, n) {
  let r = 1 / wd(wd(Cd(e, n) / Fd, Nd) + wd(_d(t) / Id, Nd), 1 / Nd), i = _d(U(Ad * (bd(n, e) - H / 2 - jd) / 2)), a = t < 0 ? wd(G(0, 1 - t * t), 0.2) : Td(G(0, 1 - t * t)) * (1 - 0.45 * t), o = 1 - Md * (1 - wd(i, 0.6)) * a, s2 = wd(_d(U(3 * yd(G(-1, K(1, t))))), 0.6), c = t < 0 ? 1 : G(0, 1 - 2.2 * t), l = 1 - Md * 0.55 * Pd * (1 - s2) * c, u = t > 0 ? 0.11 * Sd(-(1 - t) / 0.02) : 0.03 * Sd(-(1 + t) / 0.03);
  return r * o * l * (1 - u);
}
function Ef() {
  if (xf != null) return xf;
  let e = new Float32Array(51681), t = new Float64Array(161).fill(1 / 0), n = new Float64Array(161), r = 1 / 0, i = 0;
  for (let a2 = 0; a2 <= Vd; a2++) {
    let o2 = -H / 2 + a2 / Vd * H, s2 = U(o2), c = q(o2);
    for (let o3 = 0; o3 <= Hd; o3++) {
      let l = -H + o3 / Hd * 2 * H, u = Tf(s2 * U(l), c, s2 * q(l)), d = a2 * 321 + o3;
      e[d] = u, u < r && (r = u), u > i && (i = u), t[a2] = K(t[a2], e[d]), n[a2] = G(n[a2], e[d]);
    }
  }
  let a = new Float64Array(pf), o = new Float64Array(pf);
  for (let e2 = 0; e2 < pf; e2++) {
    let r2 = G(0, Df(e2) - 1), i2 = K(Vd, Df(e2 + 1) + 2);
    a[e2] = K(...t.subarray(r2, i2 + 1)) * 0.999999999, o[e2] = G(...n.subarray(r2, i2 + 1)) * 1.000000001;
  }
  return xf = { radii: e, least: r, most: i, inner: K(...a), outer: G(...o), innerBands: a, outerBands: o }, xf;
}
function Df(e) {
  return W((yd(G(-1, K(1, -1 + 2 * e / pf))) + H / 2) / H * Vd);
}
function Of(e) {
  return K(4095, G(0, W((e + 1) * (pf / 2))));
}
function kf(e, t, n) {
  let { radii: r } = Ef(), i = (yd(G(-1, K(1, t / (Cd(e, t, n) || 1)))) + H / 2) / H * Vd, a = (bd(n, e) + H) / (2 * H) * Hd, o = K(159, G(0, W(i))), s2 = K(319, G(0, W(a))), c = i - o, l = a - s2, u = o * 321 + s2, d = u + Hd + 1;
  return (r[u] * (1 - l) + r[u + 1] * l) * (1 - c) + (r[d] * (1 - l) + r[d + 1] * l) * c;
}
function Af(e) {
  let t = U(e);
  return { c: t, s: q(e), k: 1 - t };
}
function jf({ yaw: e, pitch: t, roll: n }) {
  let r = e * H / 180, i = t * H / 180, a = n * H / 180;
  return { toView: Mf(Af(r), Af(i), Af(a)), toBody: Nf(Af(-a), Af(-i), Af(-r)) };
}
function Mf(e, t, n) {
  return (r, i, a) => {
    let o = r * e.c + a * e.s, s2 = i * e.c + i * e.k, c = a * e.c - r * e.s, l = o * t.c + o * t.k, u = s2 * t.c - c * t.s, d = c * t.c + s2 * t.s;
    return { x: l * n.c - u * n.s, y: u * n.c + l * n.s, z: d * n.c + d * n.k };
  };
}
function Nf(e, t, n) {
  return (r, i, a) => {
    let o = r * e.c - i * e.s, s2 = i * e.c + r * e.s, c = a * e.c + a * e.k, l = o * t.c + o * t.k, u = s2 * t.c - c * t.s, d = c * t.c + s2 * t.s;
    return { x: l * n.c + d * n.s, y: u * n.c + u * n.k, z: d * n.c - l * n.s };
  };
}
function Pf(e) {
  return Rd * (zd * e / Bd);
}
function Ff(e, t) {
  let n = `${t} ${e.yaw} ${e.pitch} ${e.roll}`, r = Cf.get(n);
  if (r != null) return Cf.delete(n), Cf.set(n, r), r;
  let { toView: i, toBody: a } = jf(e), { outer: o, outerBands: s2 } = Ef(), c = t / 2, l = Pf(t), u = new Float64Array(J), d = [];
  for (let e2 = 0; e2 < J; e2++) {
    let t2 = yf[e2], n2 = 0;
    for (let { lean: e3, depth: r2 } of bf) {
      if (e3 * o < n2) break;
      let { x: i2, y: c2, z: l2 } = a(t2.x * e3, t2.y * e3, r2);
      e3 * s2[Of(c2)] < n2 || (n2 = G(n2, kf(i2, c2, l2) * e3));
    }
    u[e2] = n2, d.push(c + l * n2 * t2.x, c - l * n2 * t2.y);
  }
  let f2 = { reaches: u, body: d, stem: sp(i, a, t, u) };
  if (Cf.set(n, f2), Cf.size > ff) {
    let e2 = Cf.keys().next().value;
    e2 !== void 0 && Cf.delete(e2);
  }
  return f2;
}
function If(e, t, n, r) {
  let { toView: i, toBody: a } = jf(t), o = n / 2, s2 = Pf(n), c = (e2) => ({ x: o + s2 * e2.x, y: o - s2 * e2.y }), l = qf(i, gf), u = qf(i, _f), d = qf(i, vf), f2 = [];
  for (let t2 of r) {
    let n2 = Zf(t2.map(({ x: e2, y: t3 }) => qf(i, Kf(e2, t3))), (e2) => {
      let n3 = Jf(e2, l);
      if (n3 <= 0.02) return false;
      let r2 = vd(G(-1, K(1, n3))), i2 = q(r2);
      return i2 < 1e-8 ? ip(t2, { x: 0, y: 0 }) : ip(t2, { x: r2 * Jf(e2, d) / i2, y: r2 * Jf(e2, u) / i2 });
    }, e.reaches, a, o, s2, c);
    n2 != null && f2.push(n2);
  }
  return ep(f2, e.reaches, o, s2).map(ap);
}
function Lf(e) {
  if (e == null) return [];
  let t = wf.get(e);
  if (t != null) return t;
  let n = Vf(e), r = n.nx + 1, i = Rf(e, r, n.ny + 1), a = Hf(n, zf(i, (e2) => e2 !== 0)), o = Ed.flatMap(({ fill: e2, paints: t2 }) => {
    let o2 = zf(i, (e3) => t2.has(e3)), s2 = Bf(o2, r, n.ny + 1), c = o2.slice();
    for (let e3 = 0; e3 < c.length; e3++) i[e3] === 0 && (c[e3] |= s2[e3]);
    let l = sd(Uf(n, Hf(n, c), a), n, Dd).map((e3) => e3.flatMap(([e4, t3]) => [e4, t3]));
    return l.length > 0 ? [{ fill: e2, polygons: l }] : [];
  });
  return wf.set(e, o), o;
}
function Rf(e, t, n) {
  let r = new Uint8Array(t * n);
  for (let n2 = 0; n2 < e.height; n2++) r.set(e.paint.subarray(n2 * e.width, (n2 + 1) * e.width), (n2 + kd) * t + kd);
  return r;
}
function zf(e, t) {
  let n = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) t(e[r]) && (n[r] = 1);
  return n;
}
function Bf(e, t, n) {
  let r = new Uint8Array(e.length);
  for (let i2 = 0; i2 < n; i2++) for (let n2 = 0; n2 < t; n2++) for (let a = -2; a <= Od; a++) {
    let o = n2 + a;
    if (o >= 0 && o < t && e[i2 * t + o] === 1) {
      r[i2 * t + n2] = 1;
      break;
    }
  }
  let i = new Uint8Array(e.length);
  for (let e2 = 0; e2 < n; e2++) for (let a = 0; a < t; a++) for (let o = -2; o <= Od; o++) {
    let s2 = e2 + o;
    if (s2 >= 0 && s2 < n && r[s2 * t + a] === 1) {
      i[e2 * t + a] = 1;
      break;
    }
  }
  return i;
}
function Vf(e) {
  return { x0: e.left - kd + 0.5, y0: e.top - kd + 0.5, step: 1, nx: e.width + 8 - 1, ny: e.height + 8 - 1 };
}
function Hf(e, t) {
  let n = e.nx + 1, r = e.ny + 1;
  return Gf(Gf(Float32Array.from(t), n, r, 1), n, r, n);
}
function Uf(e, t, n) {
  let r = e.nx + 1;
  return (i, a) => {
    let o = K(e.nx, G(0, i - e.x0)), s2 = K(e.ny, G(0, a - e.y0)), c = K(e.nx - 1, W(o)), l = K(e.ny - 1, W(s2)), u = o - c, d = s2 - l, f2 = l * r + c;
    return G(Wf(t, f2, r, u, d), Wf(n, f2, r, u, d));
  };
}
function Wf(e, t, n, r, i) {
  let a = e[t] * (1 - r) + e[t + 1] * r, o = e[t + n] * (1 - r) + e[t + n + 1] * r;
  return 0.5 - (a * (1 - i) + o * i);
}
function Gf(e, t, n, r) {
  let i = new Float32Array(e.length);
  for (let a = 1; a < n - 1; a++) for (let n2 = 1; n2 < t - 1; n2++) {
    let o = a * t + n2;
    i[o] = (e[o - r] + 2 * e[o] + e[o + r]) / 4;
  }
  return i;
}
function Kf(e, t) {
  let n = Cd(e, t);
  if (n < 1e-8) return gf;
  let r = q(n);
  return { x: e / n * r, y: t / n * r, z: U(n) };
}
function qf(e, { x: t, y: n, z: r }) {
  return e(t, n, r);
}
function Jf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Yf(e, t) {
  let n = Cd(e.x, e.y, e.z) || 1, r = { x: e.x / n, y: e.y / n, z: e.z / n }, i = qf(t, r), a = kf(i.x, i.y, i.z) * Kd;
  return { x: r.x * a, y: r.y * a, z: r.z * a };
}
function Xf(e, t) {
  let n = Cd(e.x, e.y, e.z) || 1;
  if (e.z / n < qd) return false;
  let { inner: r, outer: i, innerBands: a, outerBands: o } = Ef(), s2 = Yf(e, t);
  for (let e2 = 1; e2 <= Jd; e2++) {
    let n2 = 0.01 + e2 / Jd * Yd, c = s2.x, l = s2.y, u = s2.z + n2, d = Cd(c, l, u);
    if (d > Yd) break;
    if (d > i) {
      if (u >= 0) break;
      continue;
    }
    if (d < r) return false;
    let f2 = t(c / d, l / d, u / d), p = Of(f2.y);
    if (!(d > o[p]) && (d < a[p] || d < kf(f2.x, f2.y, f2.z))) return false;
  }
  return true;
}
function Zf(e, t, n, r, i, a, o) {
  let s2 = e.map((e2) => Xf(e2, r));
  if (s2.every((e2) => !e2)) return null;
  if (s2.every((e2) => e2)) return e.map((e2) => o(Yf(e2, r)));
  let c = (e2, t2) => {
    let n2 = 0, i2 = 1;
    for (let a2 = 0; a2 < Xd; a2++) {
      let a3 = (n2 + i2) / 2;
      Xf(Qf(e2, t2, a3), r) ? n2 = a3 : i2 = a3;
    }
    return Yf(Qf(e2, t2, n2), r);
  }, l = (e2) => {
    let t2 = e2 / (2 * H) * J;
    t2 = (t2 % J + J) % J;
    let r2 = W(t2) % J, o2 = t2 - W(t2), s3 = (n[r2] * (1 - o2) + n[(r2 + 1) % J] * o2) * a;
    return { x: i + s3 * U(e2), y: i - s3 * q(e2) };
  }, u = e.length, d = s2.findIndex((e2) => !e2), f2 = [], p = null, m = 0;
  for (let n2 = 0; n2 < u; n2++) {
    let i2 = (d + n2) % u, a2 = (i2 + 1) % u;
    if (!s2[i2] && s2[a2]) {
      let t2 = c(e[a2], e[i2]);
      m = bd(t2.y, t2.x), p = [o(t2)];
    }
    if (s2[i2] && (p ??= [], p.push(o(Yf(e[i2], r)))), s2[i2] && !s2[a2] && p != null) {
      let n3 = c(e[i2], e[a2]);
      p.push(o(n3));
      let r2 = bd(n3.y, n3.x), s3 = m - r2;
      for (; s3 <= -H; ) s3 += 2 * H;
      for (; s3 > H; ) s3 -= 2 * H;
      let u2 = r2 + s3 / 2;
      if (t({ x: U(u2), y: q(u2), z: 0 })) {
        let e2 = G(2, xd(_d(s3) / Zd));
        for (let t2 = 1; t2 < e2; t2++) p.push(l(r2 + s3 * t2 / e2));
      }
      p.length > 2 && f2.push(p), p = null;
    }
  }
  return f2.length === 0 ? null : f2.reduce((e2, t2) => $f(t2) > $f(e2) ? t2 : e2);
}
function Qf(e, t, n) {
  return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n, z: e.z + (t.z - e.z) * n };
}
function $f(e) {
  return _d(e.reduce((t, n, r) => {
    let i = e[(r + 1) % e.length];
    return t + n.x * i.y - i.x * n.y;
  }, 0));
}
function ep(e, t, n, r) {
  if (e.length === 0) return [];
  let i = [];
  for (let e2 = 0; e2 < J; e2++) {
    let a2 = 2 * H * e2 / J, o2 = G(0.05, t[e2] - Gd) * r;
    i.push({ x: n + o2 * U(a2), y: n - o2 * q(a2) });
  }
  let a = tp(i), [o, s2] = a, c = (s2.x - o.x) * (n - o.y) - (s2.y - o.y) * (n - o.x) > 0 ? 1 : -1, l = [];
  for (let t2 of e) {
    if (t2.every((e3) => ip(a, e3))) {
      l.push(t2);
      continue;
    }
    let e2 = t2;
    for (let t3 = 0; t3 < a.length && e2.length > 2; t3++) {
      let n2 = a[t3], r2 = a[(t3 + 1) % a.length];
      e2 = np(e2, (e3) => c * ((r2.x - n2.x) * (e3.y - n2.y) - (r2.y - n2.y) * (e3.x - n2.x)));
    }
    (e2.length > 2 ? _d(rp(e2)) : 0) > Qd * r * r && l.push(e2);
  }
  return l;
}
function tp(e) {
  let t = e.slice().sort((e2, t2) => e2.x - t2.x || e2.y - t2.y), n = (e2, t2, n2) => (t2.x - e2.x) * (n2.y - e2.y) - (t2.y - e2.y) * (n2.x - e2.x), r = [];
  for (let e2 of t) {
    for (; r.length >= 2 && n(r[r.length - 2], r[r.length - 1], e2) <= 0; ) r.pop();
    r.push(e2);
  }
  let i = [];
  for (let e2 = t.length - 1; e2 >= 0; e2--) {
    let r2 = t[e2];
    for (; i.length >= 2 && n(i[i.length - 2], i[i.length - 1], r2) <= 0; ) i.pop();
    i.push(r2);
  }
  return r.pop(), i.pop(), r.concat(i);
}
function np(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], a = e[(r + 1) % e.length], o = t(i), s2 = t(a);
    if (o >= 0 && n.push(i), o >= 0 != s2 >= 0) {
      let e2 = o / (o - s2);
      n.push({ x: i.x + e2 * (a.x - i.x), y: i.y + e2 * (a.y - i.y) });
    }
  }
  return n;
}
function rp(e) {
  let t = 0;
  for (let n = 0, r = e.length - 1; n < e.length; r = n++) t += (e[r].x + e[n].x) * (e[r].y - e[n].y);
  return t / 2;
}
function ip(e, t) {
  let n = false;
  for (let r = 0, i = e.length - 1; r < e.length; i = r++) {
    let a = e[r], o = e[i];
    a.y > t.y != o.y > t.y && t.x < a.x + (t.y - a.y) * (o.x - a.x) / (o.y - a.y) && (n = !n);
  }
  return n;
}
function ap(e) {
  return e.flatMap((e2) => [e2.x, e2.y]);
}
function op() {
  if (Sf != null) return Sf;
  let e = Tf(0, 1, 0), t = 0.6799999999999999, n = (e2) => Ld * wd(e2, 2.2), r = [], i = 0, a = e - rf;
  for (let e2 = 0; e2 <= ef; e2++) {
    let o2 = e2 / ef;
    if (r.push({ x: i, y: a, angle: n(o2) }), e2 === ef) break;
    for (let e3 = 0; e3 < tf; e3++) {
      let r2 = n(o2 + (e3 + 0.5) / tf / ef);
      i += q(r2) * (t / ef / tf), a += U(r2) * (t / ef / tf);
    }
  }
  let o = e;
  for (let e2 = 1; e2 <= sf; e2++) {
    let t2 = e2 / sf * lf;
    for (let e3 = 0; e3 < cf; e3++) {
      let n2 = e3 * H / 16, r2 = Tf(q(t2) * U(n2), U(t2), q(t2) * q(n2)) * U(t2);
      r2 > o && (o = r2);
    }
  }
  let s2 = [];
  for (let e2 = 0; e2 <= ef; e2++) {
    let t2 = e2 / ef, { x: n2, y: i2, angle: a2 } = r[e2], c2 = G(0, K(1, 1 - (i2 - (o + 0.01)) / of)), l2 = nf + 0.05500000000000001 * (1 - t2) * (1 - t2) + af * c2 * c2, u2 = U(a2), d2 = -q(a2);
    for (let e3 = 0; e3 < $d; e3++) {
      let t3 = 2 * H * e3 / $d;
      s2.push({ x: n2 + l2 * U(t3) * u2, y: i2 + l2 * U(t3) * d2, z: l2 * q(t3) });
    }
  }
  let c = s2.length;
  s2.push({ x: r[ef].x, y: r[ef].y, z: 0 });
  let l = new Int32Array(27840), u = 0, d = (e2, t2, n2, r2) => {
    l.set([e2, t2, n2, r2], u), u += 4;
  };
  for (let e2 = 0; e2 < ef; e2++) for (let t2 = 0; t2 < $d; t2++) {
    let n2 = (t2 + 1) % $d, r2 = e2 * $d, i2 = (e2 + 1) * $d;
    d(r2 + t2, r2 + n2, i2 + n2, 1), d(r2 + t2, i2 + n2, i2 + t2, 1);
  }
  let f2 = 3456;
  for (let e2 = 0; e2 < $d; e2++) d(c, f2 + e2, f2 + (e2 + 1) % $d, 2);
  return Sf = { vertices: s2, triangles: l }, Sf;
}
function sp(e, t, n, r) {
  let { vertices: i, triangles: a } = op(), o = n / 2, s2 = Pf(n), c = i.map((t2) => qf(e, t2)), l = c.map((e2) => cp(o + s2 * e2.x, o - s2 * e2.y)), u = n, d = n, f2 = 0, p = 0;
  for (let e2 of l) u = K(u, e2.x - 1), d = K(d, e2.y - 1), f2 = G(f2, e2.x + 1), p = G(p, e2.y + 1);
  u = G(0, W(u)), d = G(0, W(d)), f2 = K(n, xd(f2)), p = K(n, xd(p));
  let m = G(1, f2 - u), h = G(1, p - d);
  if (m < 2 || h < 2) return null;
  let g = new Uint8Array(m * h), _ = new Float32Array(m * h).fill(-1e9), v = up(t, r);
  for (let e2 = 0; e2 < a.length; e2 += 4) {
    let t2 = l[a[e2]], n2 = l[a[e2 + 1]], r2 = l[a[e2 + 2]], i2 = G(d, K(t2.nearRow, n2.nearRow, r2.nearRow)), o2 = K(p - 1, G(t2.farRow, n2.farRow, r2.farRow));
    if (i2 > o2) continue;
    let s3 = K(t2.nearColumn, n2.nearColumn, r2.nearColumn), h2 = G(t2.farColumn, n2.farColumn, r2.farColumn);
    if (s3 > h2) continue;
    let y = (n2.y - r2.y) * (t2.x - r2.x) + (r2.x - n2.x) * (t2.y - r2.y);
    if (_d(y) < 1e-8) continue;
    let b = c[a[e2]], x = c[a[e2 + 1]], S = c[a[e2 + 2]], C = t2, w = n2, T = r2;
    if (C.y > w.y && (C = n2, w = t2), w.y > T.y && (T = w, w = r2), C.y > w.y) {
      let e3 = w;
      w = C, C = e3;
    }
    for (let c2 = i2; c2 <= o2; c2++) {
      let i3 = c2 + 0.5, o3 = G(C.y, K(T.y, i3)), l2 = lp(C, T, o3), p2 = o3 <= w.y ? lp(C, w, o3) : lp(w, T, o3), E = G(u, W(K(l2, p2)) - 1, s3), D = K(f2 - 1, xd(G(l2, p2)) + 1, h2);
      for (let o4 = E; o4 <= D; o4++) {
        let s4 = o4 + 0.5, l3 = ((n2.y - r2.y) * (s4 - r2.x) + (r2.x - n2.x) * (i3 - r2.y)) / y, f3 = ((r2.y - t2.y) * (s4 - r2.x) + (t2.x - r2.x) * (i3 - r2.y)) / y, p3 = 1 - l3 - f3;
        if (l3 < 0 || f3 < 0 || p3 < 0) continue;
        let h3 = l3 * b.z + f3 * x.z + p3 * S.z, C2 = (c2 - d) * m + (o4 - u);
        h3 <= _[C2] || v(l3 * b.x + f3 * x.x + p3 * S.x, l3 * b.y + f3 * x.y + p3 * S.y, h3) || (_[C2] = h3, g[C2] = a[e2 + 3]);
      }
    }
  }
  return { left: u, top: d, width: m, height: h, paint: g };
}
function cp(e, t) {
  return { x: e, y: t, nearRow: W(t - mf - 0.5) + 1, farRow: xd(t + mf - 0.5) - 1, nearColumn: W(e - mf - 0.5) + 1, farColumn: xd(e + mf - 0.5) - 1 };
}
function lp(e, t, n) {
  return t.y - e.y < 1e-9 ? t.x : e.x + (t.x - e.x) * (n - e.y) / (t.y - e.y);
}
function up(e, t) {
  let { least: n, most: r, innerBands: i, outerBands: a } = Ef(), o = qf(e, gf);
  return (s2, c, l) => {
    let u = s2 * s2 + c * c;
    if (u >= Fd * Fd) return false;
    let d = (W(bd(c, s2) / (2 * H) * J) + J) % J, f2 = G(t[d], t[(d + 1) % J]) * hf;
    if (u > f2 * f2) return false;
    let p = e(s2, c, 0);
    for (let e2 = l + uf; e2 <= Fd; e2 += df) {
      let t2 = Cd(s2, c, e2);
      if (t2 < n) return true;
      if (t2 > r) {
        if (e2 >= 0) return false;
        continue;
      }
      let l2 = p.y + e2 * o.y, u2 = Of(l2 / t2);
      if (!(t2 > a[u2]) && (t2 <= i[u2] || t2 <= kf(p.x + e2 * o.x, l2, p.z + e2 * o.z))) return true;
    }
    return false;
  };
}
var dp = /* @__PURE__ */ new Set([`path`, `use`, `rect`, `stop`, `circle`]);
var fp = /[&<>"]/g;
var pp = { "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` };
function Y(e, t, n = []) {
  return { tag: e, attrs: t, children: n };
}
function mp(e, t, n, r) {
  return Y(`svg`, { xmlns: `http://www.w3.org/2000/svg`, id: t, width: n, height: n, viewBox: `0 0 ${e} ${e}` }, r);
}
function hp(e) {
  let t = ``;
  for (let [n, r] of Object.entries(e.attrs)) t += ` ${n}="${String(r).replace(fp, (e2) => pp[e2])}"`;
  return dp.has(e.tag) ? `<${e.tag}${t}/>` : `<${e.tag}${t}>${e.children.map(hp).join(``)}</${e.tag}>`;
}
var gp = 144;
var _p = 184 / 256;
var vp = 180 / Math.PI;
var yp = 16e6;
var bp = 0.6;
var xp = 256;
var Sp = /* @__PURE__ */ new Set([`pumpkin`]);
var Cp = /* @__PURE__ */ new Map();
var wp = 0;
var Tp = /* @__PURE__ */ new Map();
var Ep = /* @__PURE__ */ new WeakMap();
function Dp(e, t, n, r = {}) {
  let i = Math.max(8, Math.round(n * e.zoom / _p)), a = Math.max(i, gp), o = jp(e, n), { body: s2, eyes: c, stem: l } = Fp(e.body, o, a, e.eyes), [u, d, f2, p] = Vp(e, n, i, a), m = `matrix(${Gp(u)} 0 0 ${Gp(d)} ${Gp(f2)} ${Gp(p)})`, h = r.isProof === true && e.body !== `pumpkin` ? Bu(e.body, o, a, t.ink) : null;
  if (e.glow != null) {
    let t2 = Up(e.glow, a);
    return { size: n, sprite: a, transform: m, body: [...s2, ...l.map((e2) => e2.d)], bodyFill: t2, eyes: [], eyeFill: null, proof: h, stem: [] };
  }
  let g = t.cutout ? null : ao(t), _ = e.eyes == null ? [] : c;
  return { size: n, sprite: a, transform: m, body: s2, bodyFill: io(t), eyes: _, eyeFill: g, proof: h, stem: l };
}
function Op(e, t) {
  let n = Math.max(8, Math.round(t * e.zoom / _p)), r = Math.max(n, gp), i = jp(e, t), { body: a, eyes: o, stem: s2 } = Fp(e.body, i, r, e.eyes), [c, l, u, d] = Vp(e, t, n, r), f2 = ([e2, t2]) => [c * e2 + u, l * t2 + d], p = (e2) => Hp(e2).map((e3) => e3.map(f2)), m = s2.map((e2) => ({ fill: e2.fill, loops: p(e2.d) }));
  return { center: [c * r / 2 + u, l * r / 2 + d], radius: e.zoom * t / 2, body: [...a.flatMap(p), ...m.flatMap(({ loops: e2 }) => e2)], eyes: e.eyes == null ? [] : o.flatMap(p), ...m.length === 0 ? {} : { painted: m } };
}
function kp(e, t, n = e.size) {
  let r = e.sprite, i = `${t}-body`, a = { maskUnits: `userSpaceOnUse`, x: 0, y: 0, width: r, height: r }, o = (t2) => e.eyes.map((e2) => Y(`path`, { d: e2, fill: t2 })), s2 = e.body.map((e2) => Y(`path`, { d: e2 })), c = [Y(`g`, { id: i }, s2)], l = {}, u = [];
  e.eyes.length > 0 && e.eyeFill == null ? (c.push(Y(`mask`, { id: `${t}-holes`, ...a }, [Y(`rect`, { width: r, height: r, fill: `#fff` }), ...o(`#000`)])), l = { mask: `url(#${t}-holes)` }) : e.eyes.length > 0 && e.eyeFill != null && (c.push(Y(`mask`, { id: `${t}-inside`, ...a }, [Y(`use`, { href: `#${i}`, fill: `#fff` })])), u.push(Y(`g`, { mask: `url(#${t}-inside)` }, o(e.eyeFill))));
  let d;
  if (e.proof != null) c.push(Y(`clipPath`, { id: `${t}-solid` }, s2)), d = Y(`g`, { "clip-path": `url(#${t}-solid)`, ...l }, [Y(`use`, { href: `#${i}`, fill: e.proof.baseFill }), ...e.proof.faces.map((e2) => Y(`path`, { d: e2.d, fill: e2.fill }))]);
  else if (typeof e.bodyFill == `string`) d = Y(`use`, { href: `#${i}`, fill: e.bodyFill, ...l });
  else {
    let { cx: n2, cy: r2, r: a2, stops: o2 } = e.bodyFill;
    c.push(Y(`radialGradient`, { id: `${t}-glow`, gradientUnits: `userSpaceOnUse`, cx: n2, cy: r2, r: a2 }, o2.map((e2) => Y(`stop`, { offset: e2.offset, "stop-color": e2.color })))), d = Y(`use`, { href: `#${i}`, fill: `url(#${t}-glow)`, ...l });
  }
  let f2 = e.stem.map(({ d: e2, fill: t2 }) => Y(`path`, { d: e2, fill: t2 }));
  return mp(e.size, t, n, [Y(`defs`, {}, c), Y(`g`, { transform: e.transform }, [d, ...u, ...f2])]);
}
function Ap(e, t = 0) {
  let n = Vr(e);
  return Mp(n[8] >= 0 ? n : [-n[0], n[1], -n[2], -n[3], n[4], -n[5], -n[6], n[7], -n[8]], t);
}
function jp(e, t) {
  let n = Np(t, e.zoom);
  return Sp.has(e.body) ? Mp(Vr(e.quat), n) : Ap(e.quat, n);
}
function Mp(e, t) {
  let [n, r, i] = Ur(e), a = (e2) => t > 0 ? Math.round(e2 / t) * t : e2;
  return { yaw: Pp(a(r * vp)), pitch: Pp(a(n * vp)), roll: a(i * vp) };
}
function Np(e, t) {
  let n = bp / Math.max(e * t / 2, 1) * vp;
  return 2 ** Math.floor(Math.log2(n));
}
function Pp(e) {
  let t = (e % 180 + 180) % 180;
  return Math.abs(t - 90) >= 0.5 ? e : e + (t <= 90 ? 89.5 - t : 90.5 - t);
}
function Fp(e, t, n, r) {
  let i = r == null ? [] : Lp(e, t, n, r);
  return e === `pumpkin` ? { ...Ip(Ff(t, n)), eyes: i } : { body: Rp(e, t, n), eyes: i, stem: [] };
}
function Ip(e) {
  let t = Ep.get(e);
  if (t != null) return t;
  let n = { body: [nu([e.body])], stem: Lf(e.stem).map(({ fill: e2, polygons: t2 }) => ({ d: nu(t2), fill: e2 })) };
  return Ep.set(e, n), n;
}
function Lp(e, t, n, r) {
  let i = `${e} ${n} ${t.yaw} ${t.pitch} ${t.roll} ${JSON.stringify(r)}`, a = Tp.get(i);
  if (a != null) return Tp.delete(i), Tp.set(i, a), a;
  let o = (e === `pumpkin` ? If(Ff(t, n), t, n, Ao(r)) : tl(dc(e), t, n, ko(e, r))).map((e2) => nu([e2]));
  if (Tp.set(i, o), Tp.size > xp) for (let e2 of Tp.keys()) {
    Tp.delete(e2);
    break;
  }
  return o;
}
function Rp(e, t, n) {
  let r = dc(e), i = r.silhouette.kind === `solid` ? r.silhouette.yawPeriod : null, { pitch: a, roll: o } = t, s2 = i == null ? t.yaw : t.yaw - i * Math.floor(t.yaw / i), c = `${e} ${n} ${s2} ${a} ${o}`, l = Cp.get(c);
  if (l != null) return Cp.delete(c), Cp.set(c, l), l;
  let u = Bp(el(r, { yaw: s2, pitch: a, roll: o }, n));
  Cp.set(c, u), wp += zp(u);
  for (let [e2, t2] of Cp) {
    if (wp <= yp) break;
    Cp.delete(e2), wp -= zp(t2);
  }
  return u;
}
function zp(e) {
  return e.reduce((e2, t) => e2 + t.length, 0);
}
function Bp(e) {
  if (e.length === 1) return [nu(e)];
  let t = ru(e);
  return t === `` ? [] : [t];
}
function Vp(e, t, n, r) {
  let i = t / 2, a = i + e.offset[0] * e.zoom * i, o = i - e.offset[1] * e.zoom * i, s2 = o - e.squashAnchor * e.zoom * i, [c, l] = e.squash, u = n / r;
  return [c * u, l * u, a - c * n / 2, s2 + l * (o - n / 2 - s2)];
}
function Hp(e) {
  let t = [];
  for (let n of e.split(`Z`)) {
    let e2 = n.replace(`M`, ` `).trim().split(/\s+/).filter((e3) => e3 !== ``).map(Number);
    if (e2.length < 6) continue;
    let r = [];
    for (let t2 = 0; t2 + 1 < e2.length; t2 += 2) r.push([e2[t2], e2[t2 + 1]]);
    t.push(r);
  }
  return t;
}
function Up(e, t) {
  let n = t / 2;
  return { cx: n, cy: n, r: n, stops: [{ offset: 0, color: Wp(e.inner) }, { offset: 0.42 + e.midT * 0.16, color: Wp(e.mid) }, { offset: 0.93, color: Wp(e.rim) }, { offset: 1, color: Wp(e.rim) }] };
}
function Wp(e) {
  return `rgb(${Math.round(e[0] * 255)}, ${Math.round(e[1] * 255)}, ${Math.round(e[2] * 255)})`;
}
function Gp(e) {
  return Math.round(e * 1e6) / 1e6;
}
var X = Math.PI * 2;
var Kp = 1e-7;
var qp = 1e-7;
var Jp = 720;
function Yp({ body: e, painted: t }) {
  if (t == null) return e;
  let n = new Set(t.flatMap(({ loops: e2 }) => e2));
  return e.filter((e2) => !n.has(e2));
}
function Xp(e) {
  return Array.from({ length: e }, (t, n) => n / e * X);
}
function Zp(e, t) {
  return e.flatMap((e2) => e2.map(([e3, n]) => mm(t, e3, n)));
}
function Qp(e) {
  let t = e.flat().sort((e2, t2) => e2 - t2);
  return t.filter((e2, n) => n === 0 || e2 - t[n - 1] > Kp);
}
function $p(e, t, n) {
  let r = fm(e, t), i = hm(n.map((e2) => pm(r, t, e2)));
  return n.map((e2, n2) => [t[0] + Math.cos(e2) * i[n2], t[1] + Math.sin(e2) * i[n2]]);
}
function em(e, t, n) {
  let [r, i] = t;
  return Array.from({ length: n }, (t2, a) => {
    let o = a / n * X, s2 = Math.cos(o), c = Math.sin(o), l = r === 0 || i === 0 ? 0 : 1 / Math.hypot(s2 / r, c / i);
    return [e[0] + s2 * l, e[1] + c * l];
  });
}
function tm(e, t, n) {
  let r = e.map(([e2, n2]) => ({ angle: mm(t, e2, n2), reach: Math.hypot(e2 - t[0], n2 - t[1]) })).sort((e2, t2) => e2.angle - t2.angle);
  return n.map((e2) => {
    let n2 = gm(r, e2);
    return [t[0] + Math.cos(e2) * n2, t[1] + Math.sin(e2) * n2];
  });
}
function nm(e) {
  let t = dm(e) < 0 ? [...e].reverse() : e, n = _m(t, lm(t)), r = n == null ? t : [n.point, ...t.slice(n.edge + 1), ...t.slice(0, n.edge + 1)], i = [0];
  for (let e2 = 0; e2 < r.length; e2++) {
    let [t2, n2] = r[e2], [a2, o] = r[(e2 + 1) % r.length];
    i.push(i[e2] + Math.hypot(a2 - t2, o - n2));
  }
  let a = i[r.length] ?? 0;
  return { points: r, stations: i.map((e2) => a === 0 ? 0 : e2 / a) };
}
function rm({ points: e, stations: t }, n) {
  if (e.length === 0) return [];
  let r = 0;
  return n.map((n2) => {
    for (; r < e.length - 1 && t[r + 1] < n2; ) r++;
    let [i, a] = e[r], [o, s2] = e[(r + 1) % e.length], c = t[r + 1] - t[r], l = c === 0 ? 0 : (n2 - t[r]) / c;
    return [i + (o - i) * l, a + (s2 - a) * l];
  });
}
function im(e) {
  return Array.from({ length: e }, (t, n) => n / e);
}
function am(e) {
  let t = e.flat().filter((e2) => e2 < 1).sort((e2, t2) => e2 - t2);
  return t.filter((e2, n) => n === 0 || e2 - t[n - 1] > qp);
}
function om(e) {
  let t = e.reduce((e2, t2) => e2 + t2.weight, 0), [n] = e;
  return n == null || t === 0 ? [] : n.outline.map((n2, r) => {
    let i = 0, a = 0;
    for (let { outline: t2, weight: n3 } of e) i += t2[r][0] * n3, a += t2[r][1] * n3;
    return [i / t, a / t];
  });
}
function sm(e, t, n) {
  return e.map(([e2, r], i) => [e2 + (t[i][0] - e2) * n, r + (t[i][1] - r) * n]);
}
function cm(e, t) {
  return Array.from({ length: t }, () => [e[0], e[1]]);
}
function lm(e) {
  if (e.length === 0) return [0, 0];
  let t = 0, n = 0;
  for (let [r, i] of e) t += r, n += i;
  return [t / e.length, n / e.length];
}
function um(e) {
  return e.length === 0 ? `` : `M${e.map(([e2, t]) => `${vm(e2)} ${vm(t)}`).join(`L`)}Z`;
}
function dm(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let [r, i] = e[n], [a, o] = e[(n + 1) % e.length];
    t += r * o - a * i;
  }
  return t / 2;
}
function fm(e, t) {
  let n = Array.from({ length: Jp }, () => []);
  for (let r of e) for (let e2 = 0; e2 < r.length; e2++) {
    let i = r[e2], a = r[(e2 + 1) % r.length], o = mm(t, i[0], i[1]), s2 = mm(t, a[0], a[1]) - o;
    s2 > Math.PI && (s2 -= X), s2 < -Math.PI && (s2 += X);
    let c = Math.floor((s2 < 0 ? o + s2 : o) / X * Jp) - 1, l = Math.floor((s2 < 0 ? o : o + s2) / X * Jp) + 1;
    for (let e3 = c; e3 <= l; e3++) n[(e3 % Jp + Jp) % Jp].push([i, a]);
  }
  return n;
}
function pm(e, [t, n], r) {
  let i = Math.cos(r), a = Math.sin(r), o = NaN;
  for (let [[s2, c], [l, u]] of e[Math.floor(r / X * Jp) % Jp]) {
    let e2 = l - s2, r2 = u - c, d = i * r2 - a * e2;
    if (Math.abs(d) < 1e-12) continue;
    let f2 = s2 - t, p = c - n, m = (f2 * r2 - p * e2) / d, h = (f2 * a - p * i) / d;
    m >= 0 && h >= -1e-9 && h <= 1.000000001 && !(m <= o) && (o = m);
  }
  return o;
}
function mm(e, t, n) {
  let r = Math.atan2(n - e[1], t - e[0]);
  return r < 0 ? r + X : r;
}
function hm(e) {
  let t = e.length, n = e.flatMap((e2, t2) => Number.isNaN(e2) ? [] : [t2]);
  return n.length === 0 ? e.map(() => 0) : e.map((r, i) => {
    if (!Number.isNaN(r)) return r;
    let a = n.find((e2) => e2 > i) ?? n[0] + t, o = [...n].reverse().find((e2) => e2 < i) ?? (n.at(-1) ?? 0) - t, s2 = (i - o) / (a - o);
    return e[(o + t) % t] * (1 - s2) + e[a % t] * s2;
  });
}
function gm(e, t) {
  let n = e.length;
  if (n === 0) return 0;
  let r = e.findIndex((e2) => e2.angle >= t);
  r < 0 && (r = 0);
  let i = e[r], a = e[(r - 1 + n) % n], o = (i.angle - a.angle + X) % X;
  if (o === 0) return i.reach;
  let s2 = (t - a.angle + X) % X / o;
  return a.reach + (i.reach - a.reach) * s2;
}
function _m(e, [t, n]) {
  let r = null;
  for (let i = 0; i < e.length; i++) {
    let [a, o] = e[i], [s2, c] = e[(i + 1) % e.length];
    if (o === c || (o - n) * (c - n) > 0) continue;
    let l = a + (n - o) / (c - o) * (s2 - a);
    l >= t && (r == null || l > r.point[0]) && (r = { edge: i, point: [l, n] });
  }
  return r;
}
function vm(e) {
  return String(Math.round(e * 100) / 100);
}
var ym = [1, 1];
function bm(e, t) {
  let n = e.length, r = -1;
  for (let t2 = 0; t2 < n && r < 0; t2++) e[t2][2] <= 0 && e[(t2 + 1) % n][2] > 0 && (r = t2);
  if (r < 0) return n === 0 || e[0][2] <= 0 ? null : e.map(([e2, t2]) => ({ kind: `line`, to: [e2, t2] }));
  let i = [], a = [1, 0], o = null;
  for (let s2 = 0; s2 < n; s2++) {
    let c = e[(r + s2) % n], l = e[(r + s2 + 1) % n], u = c[2] > 0, d = l[2] > 0;
    if (u && d) i.push({ kind: `line`, to: [l[0], l[1]] });
    else if (u) o = Tm(c, l), i.push({ kind: `line`, to: o });
    else if (d) {
      let e2 = Tm(c, l);
      o === null ? a = e2 : i.push(Em(o, e2, t)), i.push({ kind: `line`, to: [l[0], l[1]] });
    }
  }
  return o !== null && i.push(Em(o, a, t)), i;
}
function xm(e, t) {
  let n = Dm(e, t), r = n.length;
  if (n.every((e2) => e2.isInside)) return e;
  let i = -1;
  for (let e2 = 0; e2 < r && i < 0; e2++) n[e2].isInside && !n[(e2 + r - 1) % r].isInside && (i = e2);
  if (i < 0) {
    let e2 = n.reduce((e3, t2) => e3 + t2.sweep, 0);
    return Math.abs(e2) > Math.PI ? Cm(t, Math.sign(e2)) : null;
  }
  let a = [], o = null, s2 = 0;
  for (let e2 = 0; e2 < r; e2++) {
    let c = n[(i + e2) % r];
    c.isInside ? (o !== null && a.push({ kind: `arc`, to: c.from, radii: t, sweep: s2 }), o = null, a.push(c.segment)) : (o === null && (o = c.from, s2 = 0), s2 += c.sweep);
  }
  return o !== null && a.push({ kind: `arc`, to: n[i].from, radii: t, sweep: s2 }), a;
}
function Sm(e, t) {
  let n = (t2) => t2.kind === `arc` && t2.radii[0] === e[0] && t2.radii[1] === e[1], r = [], i = [], a = [], o = [];
  for (let e2 of t) {
    let t2 = e2.findIndex(n);
    if (t2 < 0) {
      r.push(e2);
      continue;
    }
    let s2 = e2[t2].to, c = [], l = s2;
    for (let r2 = 1; r2 <= e2.length; r2++) {
      let u = e2[(t2 + r2) % e2.length];
      n(u) ? (a.push({ from: l, sweep: u.sweep }), o.push(l, u.to), c.length > 0 && i.push(Am(s2, c)), c = [], s2 = u.to) : c.push(u), l = u.to;
    }
  }
  return a.length === 0 ? [Cm(e, 1), ...r] : [...Nm([...i, ...jm(e, a, o)]), ...r];
}
function Cm(e, t) {
  return [{ kind: `arc`, to: [-e[0], 0], radii: e, sweep: t * Math.PI }, { kind: `arc`, to: [e[0], 0], radii: e, sweep: t * Math.PI }];
}
function wm(e, t) {
  let n = Math.cos(t), r = Math.sin(t), i = 1 / Math.sqrt(n * n / (e[0] * e[0]) + r * r / (e[1] * e[1]));
  return [i * n, i * r];
}
function Tm(e, t) {
  let n = e[2] / (e[2] - t[2]), r = e[0] + (t[0] - e[0]) * n, i = e[1] + (t[1] - e[1]) * n, a = Math.sqrt(r * r + i * i);
  return [r / a, i / a];
}
function Em(e, t, n) {
  return { kind: `arc`, to: t, radii: ym, sweep: Fm(Math.atan2(t[1], t[0]) - n) - Fm(Math.atan2(e[1], e[0]) - n) };
}
function Dm(e, t) {
  let n = 1 / (t[0] * t[0]), r = 1 / (t[1] * t[1]), i = (e2) => n * e2[0] * e2[0] + r * e2[1] * e2[1] - 1, a = [], o = e[e.length - 1].to;
  for (let t2 of e) {
    if (t2.kind === `line`) {
      let e2 = Om(o, t2.to, n, r), s2 = o;
      for (let n2 = 0; n2 <= e2.length; n2++) {
        let r2 = n2 === 0 ? 0 : e2[n2 - 1], c = n2 === e2.length ? 1 : e2[n2], l = n2 === e2.length ? t2.to : Pm(o, t2.to, c);
        a.push({ from: s2, segment: { kind: `line`, to: l }, sweep: Math.atan2(s2[0] * l[1] - s2[1] * l[0], s2[0] * l[0] + s2[1] * l[1]), isInside: i(Pm(o, t2.to, (r2 + c) / 2)) < 0 }), s2 = l;
      }
    } else {
      let e2 = t2.radii[0], s2 = Math.atan2(o[1], o[0]), c = km(e2, s2, t2.sweep, n, r), l = o;
      for (let n2 = 0; n2 <= c.length; n2++) {
        let r2 = n2 === 0 ? 0 : c[n2 - 1], o2 = n2 === c.length ? 1 : c[n2], u = s2 + t2.sweep * o2, d = n2 === c.length ? t2.to : [e2 * Math.cos(u), e2 * Math.sin(u)], f2 = s2 + t2.sweep * (r2 + o2) / 2, p = t2.sweep * (o2 - r2);
        a.push({ from: l, segment: { kind: `arc`, to: d, radii: t2.radii, sweep: p }, sweep: p, isInside: i([e2 * Math.cos(f2), e2 * Math.sin(f2)]) < 0 }), l = d;
      }
    }
    o = t2.to;
  }
  return a;
}
function Om(e, t, n, r) {
  let i = t[0] - e[0], a = t[1] - e[1], o = n * i * i + r * a * a, s2 = n * e[0] * i + r * e[1] * a, c = n * e[0] * e[0] + r * e[1] * e[1] - 1, l = s2 * s2 - o * c;
  if (o === 0 || l <= 0) return [];
  let u = Math.sqrt(l), d = -(s2 + (s2 < 0 ? -u : u));
  return [d / o, c / d].filter((e2) => e2 > 0 && e2 < 1).sort((e2, t2) => e2 - t2);
}
function km(e, t, n, r, i) {
  if (r === i || n === 0) return [];
  let a = (1 / (e * e) - i) / (r - i);
  if (!(a > 0 && a < 1)) return [];
  let o = Math.acos(Math.sqrt(a)), s2 = [];
  for (let e2 of [o, -o, Math.PI - o, Math.PI + o]) {
    let r2 = Im(n > 0 ? e2 - t : t - e2) / Math.abs(n);
    r2 > 0 && r2 < 1 && s2.push(r2);
  }
  return s2.sort((e2, t2) => e2 - t2);
}
function Am(e, t) {
  let n = [e, ...t.map((e2) => e2.to)], r = t.map((e2, t2) => e2.kind === `line` ? { kind: `line`, to: n[t2] } : { ...e2, to: n[t2], sweep: -e2.sweep }).reverse();
  return { from: n[n.length - 1], to: e, segments: r };
}
function jm(e, t, n) {
  let r = n.map((e2) => ({ point: e2, angle: Im(Math.atan2(e2[1], e2[0])) })).sort((e2, t2) => e2.angle - t2.angle), i = [];
  for (let n2 = 0; n2 < r.length; n2++) {
    let a = r[n2], o = r[(n2 + 1) % r.length], s2 = n2 + 1 < r.length ? o.angle - a.angle : o.angle + 2 * Math.PI - a.angle;
    if (s2 <= 0) continue;
    let c = a.angle + s2 / 2;
    t.reduce((e2, t2) => e2 + Mm(t2, c), 0) === 0 && i.push({ from: a.point, to: o.point, segments: [{ kind: `arc`, to: o.point, radii: e, sweep: s2 }] });
  }
  return i;
}
function Mm(e, t) {
  let n = Math.atan2(e.from[1], e.from[0]);
  return (e.sweep > 0 ? Im(t - n) : Im(n - t)) < Math.abs(e.sweep) ? Math.sign(e.sweep) : 0;
}
function Nm(e) {
  let t = (e2) => `${e2[0]} ${e2[1]}`, n = /* @__PURE__ */ new Map();
  for (let r2 of e) {
    let e2 = n.get(t(r2.from));
    e2 === void 0 ? n.set(t(r2.from), [r2]) : e2.push(r2);
  }
  let r = /* @__PURE__ */ new Set(), i = [];
  for (let a of e) {
    let e2 = [], o = a;
    for (; o !== void 0 && !r.has(o); ) r.add(o), e2.push(...o.segments), o = n.get(t(o.to))?.find((e3) => !r.has(e3));
    e2.length > 0 && i.push(e2);
  }
  return i;
}
function Pm(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
}
function Fm(e) {
  return e - 2 * Math.PI * Math.round(e / (2 * Math.PI));
}
function Im(e) {
  let t = e % (2 * Math.PI);
  return t < 0 ? t + 2 * Math.PI : t;
}
var Lm = 0.02;
var Rm = 16;
var zm = 0.015;
var Bm = 400;
var Vm = 512;
var Hm = 5;
var Um = /* @__PURE__ */ new Map();
function Wm(e, t) {
  let n = Math.min(Rm, Math.max(0, Math.ceil(Math.log2(Math.max(t, 1))))), r = `${n}|${e.wid}|${e.oval.join()}|${e.ovalMix}|${e.pts.join()}`, i = Um.get(r);
  if (i !== void 0) return Um.delete(r), Um.set(r, i), i;
  let a = Jm(Gm(e), Lm / 2 ** n);
  if (Um.set(r, a), Um.size > Vm) {
    let e2 = Um.keys().next();
    e2.done !== true && Um.delete(e2.value);
  }
  return a;
}
function Gm(e) {
  let [t, n] = e.oval, r = t > 1e-5 && n > 1e-5 ? e.ovalMix > 1e-4 ? Math.min(1, e.ovalMix) : Ym(0, 0.08, Math.min(t, n)) : 0, i = Math.max(0, e.pts.length - 1), a = new Float64Array(i * Hm);
  for (let t2 = 0; t2 < i; t2++) {
    let [n2, r2] = e.pts[t2], i2 = e.pts[t2 + 1][0] - n2, o = e.pts[t2 + 1][1] - r2, s2 = i2 * i2 + o * o;
    a.set([n2, r2, i2, o, s2 > 0 ? 1 / s2 : 0], t2 * Hm);
  }
  return { segments: a, halfWidth: e.wid > 0 ? e.wid : -1, rx: t, ry: n, ellipseMix: r };
}
function Km(e, t, n) {
  let r = qm(e.segments, t, n) - e.halfWidth;
  if (e.ellipseMix === 0) return r;
  let i = t / e.rx, a = n / e.ry, o = (Math.sqrt(i * i + a * a) - 1) * Math.min(e.rx, e.ry);
  return r * (1 - e.ellipseMix) + o * e.ellipseMix;
}
function qm(e, t, n) {
  let r = 1e6;
  for (let i = 0; i < e.length; i += Hm) {
    let a = t - e[i], o = n - e[i + 1], s2 = e[i + 2], c = e[i + 3], l = (a * s2 + o * c) * e[i + 4], u = l < 0 ? 0 : l > 1 ? 1 : l, d = a - s2 * u, f2 = o - c * u, p = d * d + f2 * f2;
    p < r && (r = p);
  }
  return Math.sqrt(r);
}
function Jm(e, t) {
  let n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = 1 / 0, { segments: s2, halfWidth: c } = e;
  if (c > 0 && e.ellipseMix < 1 && s2.length > 0) {
    for (let e2 = 0; e2 < s2.length; e2 += Hm) for (let [t2, o2] of [[s2[e2], s2[e2 + 1]], [s2[e2] + s2[e2 + 2], s2[e2 + 1] + s2[e2 + 3]]]) n = Math.min(n, t2 - c), r = Math.min(r, o2 - c), i = Math.max(i, t2 + c), a = Math.max(a, o2 + c);
    o = c;
  }
  if (e.ellipseMix > 0 && (n = Math.min(n, -e.rx), r = Math.min(r, -e.ry), i = Math.max(i, e.rx), a = Math.max(a, e.ry), o = Math.min(o, e.rx, e.ry)), !(i > n && a > r)) return [];
  let l = Math.max(Math.min(zm, o / 3), Math.max(i - n, a - r) / Bm);
  return sd((t2, n2) => Km(e, t2, n2), { x0: n - 2 * l, y0: r - 2 * l, step: l, nx: Math.ceil((i - n) / l) + 4, ny: Math.ceil((a - r) / l) + 4 }, { deviation: t, edge: Math.sqrt(4 * t) });
}
function Ym(e, t, n) {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
}
var Xm = 48;
var Zm = 11;
var Qm = 0.055;
var $m = Math.PI * 0.999;
var eh = 0.4;
var th = 35e-4;
var nh = 0.75;
var rh = 0.45;
var ih = 1.8;
var ah = 0.8;
var oh = /* @__PURE__ */ $r.map(hh);
var sh = 192;
var ch = Math.PI / 48;
function lh(e, t, n, r = {}) {
  let i = e.zoom * n / 2, [a, o] = e.squash;
  if (i === 0 || a === 0 || o === 0) return { size: n, body: ``, eyes: ``, glow: null, proof: null };
  let s2 = [Math.abs(a), Math.abs(o)], c = n / 2 + i * e.offset[0], l = n / 2 - i * (e.squashAnchor * (1 - o) + e.offset[1]), u = (e2) => `${Oh(c + e2[0] * i)} ${Oh(l - e2[1] * i)}`, d = (e2) => e2.map((e3) => gh(e3, u, Math.abs(i))).join(``), f2 = uh(e, Math.abs(i));
  return { size: n, body: d(t.cutout ? Sm(s2, f2) : [Cm(s2, 1)]), eyes: t.cutout ? `` : d(f2), glow: e.glow === null ? null : vh(e.glow, s2, u, Math.abs(i)), proof: r.isProof === true ? yh(e, t, s2, u, i, n) : null };
}
function uh(e, t) {
  if (e.eyes === null) return [];
  let n = Vr(e.quat), r = [Math.abs(e.squash[0]), Math.abs(e.squash[1])], i = r[0] < 1 || r[1] < 1, a = [];
  return e.eyes.forEach((e2, o) => {
    for (let s2 of mh(e2, $r[o], oh[o], n, t)) {
      let e3 = i ? xm(s2, r) : s2;
      e3 !== null && a.push(e3);
    }
  }), a;
}
function dh(e, t) {
  let n = e.zoom * t / 2, [r, i] = e.squash, a = [t / 2 + n * e.offset[0], t / 2 - n * (e.squashAnchor * (1 - i) + e.offset[1])], o = Math.abs(n), s2 = ([e2, t2]) => [a[0] + e2 * n, a[1] - t2 * n];
  return { center: a, radius: o, body: [em(a, [Math.abs(r) * o, Math.abs(i) * o], sh)], eyes: uh(e, o).map((e2) => fh(e2).map(s2)) };
}
function fh(e) {
  let t = [], n = e[e.length - 1]?.to ?? [0, 0];
  for (let r of e) {
    if (r.kind === `arc`) {
      let e2 = Math.atan2(n[1], n[0]), i = Math.max(1, Math.ceil(Math.abs(r.sweep) / ch));
      for (let n2 = 1; n2 < i; n2++) t.push(wm(r.radii, e2 + r.sweep * n2 / i));
    }
    t.push(r.to), n = r.to;
  }
  return t;
}
function ph(e, t, n = `grok-sphere`, r = e.size) {
  let i = [], a = [], o = io(t);
  if (e.glow?.halo != null && (i.push(Eh(`${n}-halo`, e.glow.halo.gradient)), a.push(Y(`path`, { d: e.glow.halo.d, fill: `url(#${n}-halo)`, "fill-rule": `evenodd` }))), e.proof === null ? e.glow !== null && (o = `url(#${n}-body)`, i.push(Eh(`${n}-body`, e.glow.body))) : (o = `url(#${n}-light)`, i.push(Eh(`${n}-light`, e.proof.light), Y(`clipPath`, { id: `${n}-proof` }, [Y(`path`, { d: e.body, "clip-rule": `evenodd` })]))), a.push(Y(`path`, { d: e.body, fill: o, "fill-rule": `evenodd` })), e.eyes !== `` && a.push(Y(`path`, { d: e.eyes, fill: ao(t) })), e.proof !== null) {
    let t2 = e.proof.lines.filter((e2) => e2.d !== ``).map((e2) => Y(`path`, { d: e2.d, fill: `none`, stroke: e2.color, "stroke-width": Oh(e2.width), "stroke-opacity": e2.opacity }));
    a.push(Y(`g`, { "clip-path": `url(#${n}-proof)` }, t2));
  }
  return mp(e.size, n, r, [...i.length > 0 ? [Y(`defs`, {}, i)] : [], ...a]);
}
function mh(e, t, n, r, i) {
  let a = Wm(e, i * Math.max(1, e.lidY));
  if (a.length === 0) return [];
  let o = Gr(r, t.M), s2 = Gr(r, t.C), c = Gr(r, t.T), l = Math.atan2(o[1], o[0]), u = Math.cos(e.tilt), d = Math.sin(e.tilt), [f2, p] = e.off, m = ([t2, n2]) => {
    let r2 = n2 * e.lidY, i2 = f2 + u * t2 + d * r2, a2 = p - d * t2 + u * r2, l2 = Math.sqrt(i2 * i2 + a2 * a2), m2 = l2 > 1e-12 ? Math.sin(l2) / l2 : 1, h2 = Math.cos(l2);
    return [h2 * o[0] + m2 * (i2 * s2[0] + a2 * c[0]), h2 * o[1] + m2 * (i2 * s2[1] + a2 * c[1]), h2 * o[2] + m2 * (i2 * s2[2] + a2 * c[2])];
  }, h = [];
  for (let e2 of a) {
    let t2 = e2.map(m);
    n && t2.reverse();
    let r2 = bm(t2, l);
    r2 !== null && h.push(r2);
  }
  return h;
}
function hh({ M: e, T: t, C: n }) {
  let r = [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]];
  return r[0] * e[0] + r[1] * e[1] + r[2] * e[2] < 0;
}
function gh(e, t, n) {
  let r = e[e.length - 1].to, i = `M${t(r)}`;
  for (let a of e) i += a.kind === `line` ? `L${t(a.to)}` : _h(r, a, t, n), r = a.to;
  return `${i}Z`;
}
function _h(e, t, n, r) {
  if (t.sweep === 0) return ``;
  if (Math.abs(t.sweep) > $m) {
    let i = t.sweep / 2, a = wm(t.radii, Math.atan2(e[1], e[0]) + i);
    return _h(e, { ...t, to: a, sweep: i }, n, r) + _h(a, { ...t, sweep: i }, n, r);
  }
  return `A${`${Oh(t.radii[0] * r)} ${Oh(t.radii[1] * r)}`} 0 0 ${t.sweep > 0 ? 0 : 1} ${n(t.to)}`;
}
function vh(e, t, n, r) {
  let i = 0.42 + 0.16 * e.midT, a = [];
  for (let t2 = 0; t2 <= Xm; t2++) {
    let n2 = 1 - (1 - t2 / Xm) ** 2;
    a.push({ offset: n2, color: ro(wh(e, i, n2)), opacity: 1 });
  }
  let o = { transform: Th(t, n, r), focus: 0, stops: a };
  if (!(e.halo > 0)) return { body: o, halo: null };
  let s2 = [];
  for (let t2 = 0; t2 <= Zm; t2++) {
    let n2 = Qm * t2 / Zm, r2 = Math.min(1, e.halo * (1 - Dh(0, Qm, n2)));
    s2.push({ offset: (1 + n2) / 1.055, color: ro(e.rim), opacity: r2 });
  }
  let c = [t[0] * 1.055, t[1] * 1.055];
  return { body: o, halo: { d: gh(Cm(c, 1), n, r) + gh(Cm(t, 1), n, r), gradient: { transform: Th(c, n, r), focus: 0, stops: s2 } } };
}
function yh(e, t, n, r, i, a) {
  let o = Vr(e.quat), s2 = ``, c = ``;
  for (let e2 of Tu) {
    let t2 = Du(e2, o);
    t2 !== null && (e2.isEquator ? c += bh(t2, r, i) : s2 += bh(t2, r, i));
  }
  let l = Sh(t.ink, [1, 1, 1], eh), u = ku(), d = 0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2] > 0.6 ? `#000000` : `#ffffff`, f2 = Math.max(nh, a * th);
  return { light: { transform: xh(u, n, r, i), focus: u.focus, stops: u.stops.map((e2) => ({ offset: e2.offset, color: ro(Sh([0, 0, 0], l, e2.shade)), opacity: 1 })) }, lines: [{ d: s2, color: d, width: f2, opacity: rh }, { d: c, color: d, width: f2 * ih, opacity: ah }] };
}
function bh(e, t, n) {
  let r = (t2) => [e.center[0] + e.a[0] * Math.cos(t2) + e.b[0] * Math.sin(t2), e.center[1] + e.a[1] * Math.cos(t2) + e.b[1] * Math.sin(t2)], i = 0.5 * Math.atan2(2 * Ch(e.a, e.b), Ch(e.a, e.a) - Ch(e.b, e.b)), [a, o] = [Math.cos(i), Math.sin(i)], s2 = [e.a[0] * a + e.b[0] * o, e.a[1] * a + e.b[1] * o], c = [e.b[0] * a - e.a[0] * o, e.b[1] * a - e.a[1] * o], l = `${Oh(Math.hypot(s2[0], s2[1]) * Math.abs(n))} ${Oh(Math.hypot(c[0], c[1]) * Math.abs(n))}`, u = Math.round(Math.atan2(-s2[1] * n, s2[0] * n) * (180 / Math.PI) * 1e3) / 1e3, d = e.a[0] * e.b[1] - e.a[1] * e.b[0] > 0 ? 0 : 1, f2 = Math.ceil((e.to - e.from) / $m), p = `M${t(r(e.from))}`;
  for (let n2 = 1; n2 <= f2; n2++) p += `A${l} ${u} 0 ${d} ${t(r(e.from + (e.to - e.from) * n2 / f2))}`;
  return p;
}
function xh(e, t, n, r) {
  let [i, a] = e.axisX, [o, s2] = e.axisY, c = [i * t[0] * r, -a * t[1] * r, o * t[0] * r, -s2 * t[1] * r], l = n([e.origin[0] * t[0], e.origin[1] * t[1]]);
  return `matrix(${c.map((e2) => Math.round(e2 * 1e4) / 1e4).join(` `)} ${l})`;
}
function Sh(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n];
}
function Ch(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function wh(e, t, n) {
  let r = Dh(0.12, t, n), i = Dh(t, 0.93, n), a = 0.9 + 0.1 * Math.max(0, 1 - n * n) ** 0.225, o = (t2) => {
    let n2 = e.inner[t2] + (e.mid[t2] - e.inner[t2]) * r;
    return (n2 + (e.rim[t2] - n2) * i) * a;
  };
  return [o(0), o(1), o(2)];
}
function Th(e, t, n) {
  return `matrix(${Oh(e[0] * n)} 0 0 ${Oh(e[1] * n)} ${t([0, 0])})`;
}
function Eh(e, t) {
  return Y(`radialGradient`, { id: e, gradientUnits: `userSpaceOnUse`, cx: 0, cy: 0, r: 1, fx: t.focus, fy: 0, gradientTransform: t.transform }, t.stops.map((e2) => Y(`stop`, { offset: e2.offset, "stop-color": e2.color, "stop-opacity": e2.opacity })));
}
function Dh(e, t, n) {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
}
function Oh(e) {
  return String(Math.round(e * 100) / 100);
}
var kh = 114.5;
var Ah = 0.62;
var jh = 96;
var Mh = Math.PI * 2;
var Nh = { dots: 22, orbit: 19, radar: 19, progress: 19, gather: 19, wave: 16, send: 20, receive: 20, dock: 20, ball: 18, pencil: 17, bang: 13, standby: 13 };
var Ph = { dots: 1.5, orbit: 1.14, radar: 1.14, progress: 1.32, gather: 1.15, wave: 1.42, send: 1.12, receive: 1.12, dock: 1.3, ball: 1.22, pencil: 1.18, bang: 1.28, standby: 1.75 };
var Fh = 22;
var Ih = 62;
var Lh = 0.84;
var Rh = 0.22;
var zh = 1.02;
var Bh = 9;
var Vh = 1400;
var Hh = 1500;
var Uh = 1700;
var Wh = 2500;
var Gh = 0.68;
var Kh = Wh * Gh;
var qh = 2.4;
var Jh = 120;
var Yh = xa(`progress`) * 1e3;
var Xh = xa(`spawning`) * 1e3;
var Zh = [-2, -1, 1, 2];
var Qh = (e) => (e % 1 + 1) % 1;
var $h = (e, t) => {
  let n = e.length, r = t / n * Math.PI * 2, i = Math.cos(r), a = Math.sin(r);
  return Array.from({ length: n }, (r2, o) => {
    let [s2, c] = e[((o - t) % n + n) % n], l = s2 - L, u = c - L;
    return [L + l * i - u * a, L + l * a + u * i];
  });
};
var eg = /* @__PURE__ */ Array.from({ length: jh }, (e, t) => {
  let n = t / jh * Mh;
  return [L + Math.cos(n) * L, L + Math.sin(n) * L];
});
var tg = Ks(88, 18).ring;
var ng = /* @__PURE__ */ $h(tg, tg.length / 2);
var rg = (e) => e === `pencil` ? ng : eg;
var ig = (e, t) => {
  let n = e / 2, r = L - t / 2 + n, i = L + t / 2 - n;
  return `M${L - n} ${r}A${n} ${n} 0 0 1 ${L + n} ${r}L${L + n} ${i}A${n} ${n} 0 0 1 ${L - n} ${i}Z`;
};
var ag = (e, t, n) => {
  let r = e / 2, i = t / 2, a = L - n / 2, o = L + n / 2;
  return `M${L - r} ${a + r}A${r} ${r} 0 0 1 ${L + r} ${a + r}L${L + i} ${o - i}A${i} ${i} 0 0 1 ${L - i} ${o - i}Z`;
};
var og = /* @__PURE__ */ ig(30, 88);
var sg = /* @__PURE__ */ ag(30, 17, 96);
var cg = (e, t, n, r, i) => ({ type: `disc`, key: e, cx: t, cy: n, r, opacity: i });
var lg = (e, t, n, r) => ({ type: `ring`, key: e, cx: L, cy: L, r: t, width: n, opacity: r });
var ug = (e, t, n, r) => ({ type: `shape`, key: e, d: t, transform: n, opacity: r });
var dg = (e, t, n, r) => ({ type: `stroke`, key: e, d: t, width: n, opacity: r });
var fg = { lift: 0, pop: 1, tone: 1 };
var pg = (e, t, n, r) => {
  let i = Qh(e.stateTime * 1e3 / Vh + 0.119), a = Math.abs(i - t / 3), o = Math.min(a, 1 - a), s2 = r ? 1 : Math.exp(-(o * o) / 0.045), c = +!r;
  return { lift: s2 * Bh * n * c, pop: 1 + c * (Lh + Rh * s2 - 1), tone: 1 - c * 0.5 * (1 - s2) };
};
var mg = (e) => 0.42 + 0.29 * Math.sin(e * 21e-4) * Math.sin(e * 34e-4) + 0.29 * Math.sin(e * 13e-4 + 1.7);
var hg = (e, t) => mg(e) * (0.55 + 0.45 * Math.sin(e * 0.012 - Math.abs(t) * 1.05));
var gg = (e) => -Math.PI * 1.25 + ba(e)() * Math.PI * 1.5;
var _g = (e) => {
  let t = 0.62, n = 416 / (t * t), r = Math.sqrt(80 / n);
  if (e < r) return 0.5 * n * e * e;
  let i = Qh((e - r) / t);
  return 40 - 208 * i * (1 - i);
};
var vg = (e) => {
  let t = Qh(e / Wh);
  if (t < Gh) {
    let n2 = t / Gh, r = n2 * n2 * (3 - 2 * n2), i = N(n2 / 0.08, 0, 1) * N((1 - n2) / 0.08, 0, 1);
    return { x: -54 + 118 * r, y: 26, wig: Math.sin(n2 * 24) * 3.2 * i, rot: 17 + Math.sin(e * 6e-4) * 1 };
  }
  let n = vr((t - Gh) / 0.31999999999999995);
  return { x: 64 - 118 * n, y: 26 - 20 * Math.sin(n * Math.PI), wig: 0, rot: 17 - 2 * Math.sin(n * Math.PI) + Math.sin(e * 6e-4) * 1 };
};
var yg = (e) => {
  let t = vg(e);
  return [L + t.x, L + t.y + t.wig + 19];
};
var bg = /* @__PURE__ */ (() => {
  let e = [];
  for (let t = 0; t < Kh; t++) {
    let n = yg(t), r = e[e.length - 1];
    (r === void 0 || Math.hypot(n[0] - r.point[0], n[1] - r.point[1]) > qh) && e.push({ at: t, point: n });
  }
  return e;
})();
var xg = (e) => {
  let t = Qh(e / Wh) * Wh, n = Math.min(t, Kh), r = bg.filter((e2) => e2.at <= n), i = n > (r.length > 0 ? r[r.length - 1].at : n) ? [yg(n)] : [], a = [...r.map((e2) => e2.point), ...i].slice(-64);
  return t < Kh ? a : a.slice(Math.floor((t - Kh) / 1e3 * Jh));
};
var Sg = (e) => {
  let t = e.length, n = `M${e[0][0].toFixed(1)} ${e[0][1].toFixed(1)}`;
  if (t === 2) return n + `L${e[1][0].toFixed(1)} ${e[1][1].toFixed(1)}`;
  for (let r = 0; r < t - 1; r++) {
    let i = e[Math.max(r - 1, 0)], a = e[r], o = e[r + 1], s2 = e[Math.min(r + 2, t - 1)], c = a[0] + (o[0] - i[0]) / 6, l = a[1] + (o[1] - i[1]) / 6, u = o[0] - (s2[0] - a[0]) / 6, d = o[1] - (s2[1] - a[1]) / 6;
    n += `C${c.toFixed(1)} ${l.toFixed(1)} ${u.toFixed(1)} ${d.toFixed(1)} ${o[0].toFixed(1)} ${o[1].toFixed(1)}`;
  }
  return n;
};
var Cg = (e, t, n) => {
  let r = [L - Ih, L + Ih], i = [];
  for (let a = 0; a < 2; a++) {
    let o = N((e - a * 0.12) / (1 - a * 0.12), 0, 1);
    if (o <= 4e-3) continue;
    let s2 = P(o), c = yr(o), l = pg(t, a === 0 ? 0 : 2, e, n);
    i.push(cg(`dots.${a}`, L + (r[a] - L) * c, L - l.lift, Fh * s2 * l.pop * zh, s2 * l.tone));
  }
  return i;
};
var wg = (e, t) => {
  let n = P(e), r = 52 * yr(e), i = t.stateTime * 1e3 * 17e-4;
  return Array.from({ length: 5 }, (e2, t2) => {
    let a = i + t2 * Math.PI * 2 / 5, o = Math.cos(a), s2 = 0.5 + 0.5 * N(o, 0, 1);
    return cg(`orbit.${t2}`, L + r * Math.sin(a), L - r * 0.42 * Math.cos(a), Math.max(12 * s2 * n, 0.3), N((o + 0.4) / 0.6, 0.18, 1) * n);
  });
};
var Tg = (e, t, n) => {
  let r = P(e);
  return Array.from({ length: 3 }, (e2, i) => {
    let a = Qh(t.stateTime * 1e3 / 1300 + i / 3);
    return lg(`radar.${i}`, n + (104 - n) * a, 3.4 * (1 - a * 0.55), r * (1 - a) * 0.9);
  });
};
var Eg = (e, t) => {
  let n = P(e), r = 62 * yr(e), i = N(N(t.shotTime * 1e3 / Yh, 0, 1) / 0.85, 0, 1), a = lg(`progress.track`, r, 5, n * 0.16);
  return i <= 0 ? [a] : [a, { type: `ring`, key: `progress.arc`, cx: L, cy: L, r, width: 5, opacity: n, arc: { fraction: i, startDeg: -90 } }];
};
var Dg = (e, t) => {
  let n = P(e), r = [];
  for (let e2 = 0; e2 < 5; e2++) {
    let i = N((t.shotTime * 1e3 / Xh - e2 * 0.09) / 0.62, 0, 1);
    if (i >= 1) continue;
    let a = 1 - (1 - i) ** 3, o = e2 * 2.4 + i * 2.2, s2 = 96 * (1 - a);
    r.push(cg(`gather.${e2}`, L + s2 * Math.cos(o), L + s2 * Math.sin(o) * 0.8, 9 * (0.5 + 0.5 * a) * n, n * N(i * 5, 0, 1) * (1 - a * 0.25)));
  }
  return r;
};
var Og = (e, t) => {
  let n = t.stateTime * 1e3, r = [];
  for (let t2 of Zh) {
    let i = N((e - Math.abs(t2) * 0.1) / (1 - Math.abs(t2) * 0.1), 0, 1);
    if (i <= 4e-3) continue;
    let a = yr(i), o = hg(n, t2), s2 = (7 + 9 * N(o, 0.08, 1)) * P(i), c = 6 * N(o, 0, 1) * i;
    r.push(cg(`wave.${t2}`, L + t2 * 44 * a, L - c, s2, i));
  }
  return r;
};
var kg = (e, t) => {
  let n = P(e), r = Qh(t.stateTime * 1e3 / Hh), i = N((r - 0.18) / 0.55, 0, 1), a = i * i * (0.4 + 0.6 * i), o = 0.74, s2 = -0.62, c = [];
  if (i > 0 && i < 1) {
    let e2 = 108 * a;
    c.push(cg(`send.packet`, L + o * e2, L + s2 * e2, 10 * (1 - a * 0.55) * n, n * (1 - a * a)));
  }
  let l = N((r - 0.26) / 0.55, 0, 1), u = l * l * (0.4 + 0.6 * l);
  if (i > 0 && l > 0 && l < 1) {
    let e2 = 108 * u;
    c.push(cg(`send.streak`, L + o * e2, L + s2 * e2, 5 * (1 - u * 0.6) * n, n * 0.3 * (1 - u)));
  }
  let d = N((r - 0.18) / 0.3, 0, 1);
  return d > 0 && d < 1 && c.push(lg(`send.launch`, 20 + 34 * P(d), 2.8 * (1 - d), n * (1 - d) * 0.8)), c;
};
var Ag = (e, t) => {
  let n = P(e), r = t.stateTime * 1e3, i = gg(Math.floor(r / Uh)), a = Qh(r / Uh), o = N(a / 0.6, 0, 1), s2 = 1 - (1 - o) ** 3, c = Math.cos(i), l = Math.sin(i), u = 108 * (1 - s2), d = [];
  if (o < 1) {
    let e2 = 18 * Math.sin(o * Math.PI) * (1 - s2 * 0.7);
    d.push(cg(`receive.packet`, L + c * u - l * e2, L + l * u + c * e2, 3.5 + 6.5 * s2, n * N(o * 3.5, 0, 1) * (0.3 + 0.7 * s2)));
  }
  let f2 = N((a - 0.58) / 0.32, 0, 1);
  return f2 > 0 && f2 < 1 && d.push(lg(`receive.absorb`, 20 + 26 * P(f2), 2.8 * (1 - f2), n * (1 - f2) * 0.8)), d;
};
var jg = (e, t) => {
  let n = P(e), r = t.stateTime * 1e3, i = [];
  for (let e2 = 0; e2 < 2; e2++) {
    let a = N((t.stateTime - (0.2 + e2 * 1.3)) / 0.9, 0, 1);
    if (a <= 0) continue;
    let o = 1 - (1 - a) ** 3, s2 = r * 1e-3 * 1.1 + e2 * Math.PI, c = L + 42 * Math.sin(s2), l = L + 21 * Math.cos(s2) + Math.sin(r * 3e-3 + e2) * 2, u = L - 120 + e2 * 30, d = L + 95;
    i.push(cg(`dock.${e2}`, u + (c - u) * o, d + (l - d) * o, (7 + 3 * o) * n, n * N(a * 4, 0, 1)));
  }
  return i;
};
var Mg = (e, t) => {
  let n = t.stateTime * 1e3, r = vg(n), i = (r.rot - 90) * Math.PI / 180, a = Math.cos(i) * 68, o = Math.sin(i) * 68, s2 = L + (r.x + a) * e, c = L + (r.y + r.wig * 0.15 + o) * e, l = [ug(`pencil.shaft`, og, `translate(${s2.toFixed(1)} ${c.toFixed(1)}) rotate(${(r.rot * e).toFixed(1)}) scale(${P(e).toFixed(3)}) translate(${-L} ${-L})`, N(e * 1.6 - 0.3, 0, 1))], u = xg(n);
  return u.length >= 2 && l.push(dg(`pencil.ink`, Sg(u), 6, N(e * 1.2, 0, 1))), l;
};
var Ng = (e, t) => {
  let n = t.stateTime, r = P(N(e * 1.1, 0, 1)), i = Math.exp(-(n % 2.2) * 5.5), a = Math.sin(n * 42) * 2.2 * i;
  return [ug(`bang.bar`, sg, `translate(0 ${(-26 - (1 - r) * 70).toFixed(1)}) rotate(${a.toFixed(2)} ${L} ${(L - 74).toFixed(1)}) translate(${L} ${L}) scale(${N(e * 1.2, 0, 1).toFixed(3)}) translate(${-L} ${-L})`, N(e * 1.5 - 0.2, 0, 1))];
};
var Pg = (e, t) => {
  let n = 0.5 + 0.5 * Math.sin(t.stateTime * 1e3 * 16e-4);
  return [cg(`standby.halo`, L, L, 26 + 7 * n, P(e) * (0.06 + 0.1 * n))];
};
var Fg = (e, t, n, r, i) => {
  switch (e) {
    case `dots`:
      return Cg(t, n, i);
    case `orbit`:
      return wg(t, n);
    case `radar`:
      return Tg(t, n, r);
    case `progress`:
      return Eg(t, n);
    case `gather`:
      return Dg(t, n);
    case `wave`:
      return Og(t, n);
    case `send`:
      return kg(t, n);
    case `receive`:
      return Ag(t, n);
    case `dock`:
      return jg(t, n);
    case `ball`:
      return [];
    case `pencil`:
      return Mg(t, n);
    case `bang`:
      return Ng(t, n);
    case `standby`:
      return Pg(t, n);
    default:
      throw Error(`Unhandled case: ${String(e)}`);
  }
};
function Ig(e, t) {
  let { kind: n, isReducedMotion: r } = e, i = N(e.amount, 0, 1), a = N(e.swap, 0, 1), o = a < 0.999 ? e.outgoing : null, s2 = (e2) => e2 === n ? i * a : e2 === o ? i * (1 - a) : 0, c = (t2) => t2 === n ? e.clock : e.outgoingClock, l = N(i / Ah, 0, 1), u = n !== `pencil` && o !== `pencil` ? eg : a >= 0.999 ? rg(n) : Ko(rg(o), rg(n), vr(a)), d = n ? Nh[n] * a + (o ? Nh[o] : Nh[n]) * (1 - a) : 19, f2 = s2(`dots`), p = n === `dots` || o === `dots`, m = p ? pg(c(`dots`), 1, i, r) : fg, h = p ? 1 + (m.pop - 1) * (f2 / Math.max(i, 1e-3)) : 1, g = s2(`receive`);
  if (g > 4e-3) {
    let e2 = N((Qh(c(`receive`).stateTime * 1e3 / Uh) - 0.58) / 0.34, 0, 1);
    h *= 1 + 0.11 * Math.sin(e2 * Math.PI) * g;
  }
  let _ = s2(`send`);
  if (_ > 4e-3) {
    let e2 = Qh(c(`send`).stateTime * 1e3 / Hh), t2 = e2 < 0.18 ? -0.06 * Math.sin(e2 / 0.18 * Math.PI) : 0, n2 = e2 >= 0.18 && e2 < 0.42 ? 0.05 * Math.sin((e2 - 0.18) / 0.24 * Math.PI) : 0;
    h *= 1 + (t2 + n2) * _;
  }
  let v = s2(`bang`);
  v > 4e-3 && (h *= 1 + 0.04 * Math.exp(-(c(`bang`).stateTime % 2.2) * 5.5) * v);
  let y = 0, b = 0, x = 0, S = s2(`pencil`);
  if (S > 4e-3) {
    let e2 = vg(c(`pencil`).stateTime * 1e3);
    y += e2.x * S, b += (e2.y + e2.wig * 0.5) * S, x += e2.rot * S;
  }
  v > 4e-3 && (b += 58 * v);
  let C = s2(`ball`);
  C > 4e-3 && (b += _g(c(`ball`).stateTime) * C);
  let w = d / L * h, T = s2(`standby`), E = T > 0 ? (0.28 + 0.2 * Math.sin(c(`standby`).stateTime * 1e3 * 16e-4)) * T : 0, D = { scale: 1 - i + w * i, dx: y * i, dy: -m.lift * f2 + b * i, rotation: x * i, opacity: (1 - (1 - m.tone) * f2) * (1 - E), round: vr(l), ring: u }, O2 = 1 - br(N((t - 44) / 90, 0, 1)), ee = n == null ? 1 : Ph[n], te = o ? Ph[o] : ee, ne = 1 + (ee * a + te * (1 - a) - 1) * i * O2, k = [];
  for (let e2 of [o, n]) {
    if (e2 == null) continue;
    let t2 = s2(e2);
    t2 > 4e-3 && k.push(...Fg(e2, t2, c(e2), d, r));
  }
  return { core: D, isFaceVisible: i < 0.5, zoom: ne, parts: k.filter((e2) => e2.opacity > 0) };
}
var Lg = /* @__PURE__ */ Xp(192);
var Rg = /* @__PURE__ */ im(96);
var zg = 0.6;
function Bg(e, t, n) {
  return t === `sphere` ? dh({ ...e, body: t }, n) : Op({ ...e, body: t }, n);
}
function Vg(e, t, n = t) {
  let r = e.bodies.map(({ body: n2, weight: r2 }) => ({ shape: Bg(e, n2, t), weight: r2 })).sort((e2, t2) => t2.weight - e2.weight), i = r[0]?.shape.center ?? [t / 2, t / 2], a = r[0]?.shape.radius ?? 0, o = Qp([Lg, ...r.map(({ shape: e2 }) => Zp(Yp(e2), e2.center))]), s2 = om(r.map(({ shape: e2, weight: t2 }) => ({ outline: $p(Yp(e2), e2.center, o), weight: t2 }))), c = e.morph == null ? null : Ig(e.morph, n), l = Ea * t / 2 / L, u = c?.core.round ?? 0;
  return { size: t, center: i, body: c == null || u === 0 ? s2 : sm(s2, Wg(c, i, a, o), u), eyes: r.length === 1 ? r[0]?.shape.eyes ?? [] : qg(r), painted: r.length === 1 ? r[0]?.shape.painted ?? [] : [], paintedOpacity: 1 - u, head: c == null || e.morph == null ? null : Gg(c, e.morph.amount, e.zoom, l), parts: c?.parts ?? [], markScale: l, zoom: c?.zoom ?? 1 };
}
function Hg(e, t, n, r, i = n, a = n) {
  return Ug(Vg(e, n, i), t, r, a);
}
function Ug(e, t, n, r = e.size) {
  let { size: i, center: a } = e, o = io(t), s2 = um(e.body), c = e.eyes.map(um).join(``), l = [], u = [Y(`path`, { d: s2, fill: o })];
  if (c !== `` && t.cutout ? (l.push(Y(`mask`, { id: `${n}-holes`, maskUnits: `userSpaceOnUse`, x: 0, y: 0, width: i, height: i }, [Y(`rect`, { width: i, height: i, fill: `#fff` }), Y(`path`, { d: c, fill: `#000` })])), u[0] = Y(`path`, { d: s2, fill: o, mask: `url(#${n}-holes)` })) : c !== `` && (l.push(Y(`clipPath`, { id: `${n}-body` }, [Y(`path`, { d: s2 })])), u.push(Y(`path`, { d: c, fill: ao(t), "clip-path": `url(#${n}-body)` }))), e.paintedOpacity > 0) {
    let t2 = e.paintedOpacity < 1 ? { opacity: Z(e.paintedOpacity, 3) } : {};
    for (let { fill: n2, loops: r2 } of e.painted) u.push(Y(`path`, { d: r2.map(um).join(``), fill: n2, ...t2 }));
  }
  let d = e.head, f2 = d == null ? u : [Y(`g`, { transform: `translate(${Z(a[0] + d.translate[0])} ${Z(a[1] + d.translate[1])}) rotate(${Z(d.rotation)}) scale(${Z(d.scale, 5)}) translate(${Z(-a[0])} ${Z(-a[1])})`, ...d.opacity < 1 ? { opacity: Z(d.opacity, 3) } : {} }, u)], p = e.parts.length === 0 ? [] : [Y(`g`, { transform: `translate(${i / 2} ${i / 2}) scale(${Z(e.markScale, 5)}) translate(${-L} ${-L})` }, e.parts.map((e2) => Kg(e2, o)))], m = i / 2 + (kh - L) * e.markScale, h = e.zoom === 1 ? [...p, ...f2] : [Y(`g`, { transform: `translate(${Z(m)} ${Z(m)}) scale(${Z(e.zoom, 5)}) translate(${Z(-m)} ${Z(-m)})` }, [...p, ...f2])];
  return mp(i, n, r, [...l.length === 0 ? [] : [Y(`defs`, {}, l)], ...h]);
}
function Wg(e, t, n, r) {
  let i = n / L;
  return tm(e.core.ring.map(([e2, n2]) => [t[0] + (e2 - L) * i, t[1] + (n2 - L) * i]), t, r);
}
function Gg(e, t, n, r) {
  let { core: i } = e, a = 1 - t, o = t > 0 ? (i.scale - a) / t : 0;
  return { translate: [i.dx * r, i.dy * r], rotation: i.rotation, scale: a + Ea / n * o * t, opacity: i.opacity };
}
function Kg(e, t) {
  let n = e.opacity < 1 ? { opacity: Z(e.opacity, 3) } : {};
  switch (e.type) {
    case `disc`:
      return Y(`circle`, { cx: Z(e.cx), cy: Z(e.cy), r: Z(e.r), fill: t, ...n });
    case `ring`: {
      let r = 2 * Math.PI * e.r, i = e.arc == null ? {} : { "stroke-dasharray": `${Z(r * e.arc.fraction)} ${Z(r)}`, transform: `rotate(${Z(e.arc.startDeg)} ${Z(e.cx)} ${Z(e.cy)})` };
      return Y(`circle`, { cx: Z(e.cx), cy: Z(e.cy), r: Z(e.r), fill: `none`, stroke: t, "stroke-width": Z(e.width), ...i, ...n });
    }
    case `shape`:
      return Y(`path`, { d: e.d, transform: e.transform, fill: t, ...n });
    case `stroke`:
      return Y(`path`, { d: e.d, fill: `none`, stroke: t, "stroke-width": Z(e.width), "stroke-linecap": `round`, "stroke-linejoin": `round`, ...n });
    default:
      throw Error(`Unhandled case`);
  }
}
function qg(e) {
  let t = (e[0]?.shape.radius ?? 0) * zg, n = [];
  return e.forEach(({ shape: r }, i) => {
    for (let a of r.eyes) {
      let r2 = lm(a), o = Jg(n, i, r2, t);
      if (o != null) {
        o.loops[i] = a;
        continue;
      }
      let s2 = e.map(() => null);
      s2[i] = a, n.push({ anchor: r2, loops: s2 });
    }
  }), n.map((t2) => {
    let n2 = t2.loops.map((e2) => e2 == null ? null : nm(e2)), r = am([Rg, ...n2.map((e2) => e2?.stations ?? [])]);
    return om(e.map(({ weight: e2 }, i) => {
      let a = n2[i];
      return { outline: a == null ? cm(t2.anchor, r.length) : rm(a, r), weight: e2 };
    }));
  });
}
function Jg(e, t, n, r) {
  let i = null, a = r;
  for (let r2 of e) {
    if (r2.loops[t] != null) continue;
    let e2 = Math.hypot(r2.anchor[0] - n[0], r2.anchor[1] - n[1]);
    e2 < a && (i = r2, a = e2);
  }
  return i;
}
function Z(e, t = 2) {
  let n = 10 ** t;
  return String(Math.round(e * n) / n);
}
function Yg(e, t, n, r, i = {}) {
  return hp(Xg(e, t, n, r, i));
}
function Xg(e, t, n, r, i = {}) {
  let [a, ...o] = e.bodies;
  return a == null || o.length > 0 || e.morph != null ? Hg(e, t, n, r, i.displaySize ?? n, i.extent) : a.body === `sphere` ? ph(lh({ ...e, body: a.body }, t, n, i), t, r, i.extent) : kp(Dp({ ...e, body: a.body }, t, n, i), r, i.extent);
}
var Zg = /* @__PURE__ */ new WeakMap();
var Qg = `http://www.w3.org/2000/svg`;
var $g = `/`;
function e_(e, t) {
  let n = [], r = [];
  t_(t, n, r);
  let i = Zg.get(e);
  if (i != null && e.firstChild === i.root && r_(i.names, n)) {
    for (let e2 = 0; e2 < r.length; e2++) r[e2] !== i.values[e2] && (i.slots[e2].value = r[e2]);
    i.values = r;
    return;
  }
  let a = n_(e.ownerDocument, t);
  e.replaceChildren(a);
  let o = [a, ...a.querySelectorAll(`*`)].flatMap((e2) => [...e2.attributes]);
  Zg.set(e, { root: a, names: n, slots: o, values: r });
}
function t_(e, t, n) {
  t.push(e.tag);
  for (let [r, i] of Object.entries(e.attrs)) t.push(r), n.push(String(i));
  for (let r of e.children) t_(r, t, n);
  t.push($g);
}
function n_(e, t) {
  let n = e.createElementNS(Qg, t.tag);
  for (let [e2, r] of Object.entries(t.attrs)) n.setAttribute(e2, String(r));
  for (let r of t.children) n.append(n_(e, r));
  return n;
}
function r_(e, t) {
  return e.length === t.length && e.every((e2, n) => e2 === t[n]);
}
function i_(e) {
  switch (e) {
    case `blob`:
      return `sphere`;
    case `flower`:
      return `starFlower`;
    case `heart`:
      return `heartChubby`;
    case `star`:
      return `star6`;
    default:
      return e;
  }
}
var a_ = [0, 0, 0];
function o_(e, t) {
  return t == null ? { ink: a_, spot: a_, cutout: true, inkPaint: e } : { ink: a_, spot: a_, cutout: false, inkPaint: e, spotPaint: t };
}
function m_(e) {
  return v_[e.appearance];
}
var h_ = { "bg/scrim": 50, "bg/scrim-heavy": 89.7, "bg/hover": 6, "bg/active": 8, "bg/primary-disabled": 15, "bg/secondary": 6, "bg/secondary-hover": 10, "bg/secondary-active": 18, "bg/secondary-disabled": 4, "bg/tertiary": 6, "bg/quaternary": 4, "fill/bubble-agent": 6, "fill/bubble-user": 100, "fill/attachment-card": 0, "fill/attachment-paper": 0, "fill/attachment-ink": 18, "text/secondary": 68, "text/tertiary": 56, "text/quaternary": 40, "icon/primary": 92, "icon/secondary": 66, "icon/tertiary": 52, "icon/quaternary": 32, "border/primary-translucent": 24, "border/secondary-translucent": 12, "border/tertiary-translucent": 8, "border/quaternary-translucent": 6, "border/attachment-card": 8, "border/attachment-paper": 12, "shadow/control": 12, "shadow/card": 3.5, "shadow/secondary": 7, "shadow/inline/ambient": 8, "shadow/inline/key": 6, "shadow/popover/ambient": 10, "shadow/popover/key": 10, "shadow/modal/ambient": 10, "shadow/modal/key": 10, "shadow/window/ambient": 56, "shadow/window/edge": 10, "shadow/ring": 0.4, "specular/primary": 56, "specular/secondary": 16, "specular/tertiary": 12, "specular/quaternary": 6, "bg/{role}-primary-disabled": 17, "bg/{role}-secondary": 9, "bg/{role}-secondary-hover": 17, "bg/{role}-secondary-disabled": 6.1, "text/{role}-quaternary": 13, "text/accent-quaternary": 17, "text/danger-quaternary": 17, "border/{role}-quaternary": 17 };
var g_ = { "bg/scrim": 69.7, "bg/scrim-heavy": 95, "bg/hover": 6, "bg/active": 8, "bg/primary-disabled": 13, "bg/secondary": 4, "bg/secondary-hover": 8, "bg/secondary-active": 20, "bg/secondary-disabled": 2, "bg/tertiary": 4, "bg/quaternary": 2, "fill/bubble-agent": 4, "fill/bubble-user": 18, "fill/attachment-card": 3, "fill/attachment-paper": 10, "fill/attachment-ink": 24, "text/secondary": 66, "text/tertiary": 54, "text/quaternary": 38, "icon/primary": 90, "icon/secondary": 64, "icon/tertiary": 50, "icon/quaternary": 30, "border/primary-translucent": 22, "border/secondary-translucent": 10, "border/tertiary-translucent": 6, "border/quaternary-translucent": 4, "border/attachment-card": 12, "border/attachment-paper": 16, "shadow/control": 0, "shadow/card": 0, "shadow/secondary": 0, "shadow/inline/ambient": 0, "shadow/inline/key": 0, "shadow/popover/ambient": 0, "shadow/popover/key": 0, "shadow/modal/ambient": 0, "shadow/modal/key": 0, "shadow/window/ambient": 0, "shadow/window/edge": 0, "shadow/ring": 0, "specular/primary": 12, "specular/secondary": 3, "specular/tertiary": 2, "specular/quaternary": 1, "bg/{role}-primary-disabled": 15, "bg/{role}-secondary": 7, "bg/{role}-secondary-hover": 15, "bg/{role}-secondary-disabled": 4.1, "text/{role}-quaternary": 11, "text/accent-quaternary": 15, "text/danger-quaternary": 15, "border/{role}-quaternary": 15 };
var __ = /* @__PURE__ */ Object.keys(h_).filter((e) => Object.hasOwn(h_, e));
var v_ = { light: h_, dark: g_ };
var y_ = { light: { "neutral/0": `#ffffff`, "neutral/1": `#ffffff`, "neutral/2": `#fcfcfc`, "neutral/3": `#f5f5f5`, "neutral/4": `#363636`, "neutral/5": `#1c1c1c`, "neutral/6": `#525252`, "red/0": `#fb2b3e`, "red/1": `#e72e3b`, "red/2": `#c82532`, "red/3": `#cd2834`, "red/4": `#ad1f2a`, "red/5": `#8e1921`, "red/6": `#6f1017`, "red/7": `#ab1e29`, "orange/0": `#fd690f`, "orange/1": `#ee620d`, "orange/2": `#d2550a`, "orange/3": `#c14c00`, "orange/4": `#a23f00`, "orange/5": `#843200`, "orange/6": `#682600`, "orange/7": `#b64907`, "yellow/0": `#f59312`, "yellow/1": `#da830e`, "yellow/2": `#c2730b`, "yellow/3": `#aa6300`, "yellow/4": `#905300`, "yellow/5": `#774400`, "yellow/6": `#5f3500`, "yellow/7": `#aa6409`, "green/0": `#14c16f`, "green/1": `#10ab61`, "green/2": `#0d9655`, "green/3": `#00854a`, "green/4": `#00723e`, "green/5": `#005f33`, "green/6": `#004b27`, "green/7": `#098249`, "cyan/0": `#13b7a2`, "cyan/1": `#10a693`, "cyan/2": `#0d9381`, "cyan/3": `#008273`, "cyan/4": `#007062`, "cyan/5": `#005d51`, "cyan/6": `#004c42`, "cyan/7": `#0a7f70`, "blue/0": `#1e86fc`, "blue/1": `#1680f3`, "blue/2": `#126fd4`, "blue/3": `#0b6dd3`, "blue/4": `#085ab2`, "blue/5": `#054991`, "blue/6": `#033872`, "blue/7": `#0d5eb6`, "purple/0": `#8f59f9`, "purple/1": `#8351e4`, "purple/2": `#7442d1`, "purple/3": `#7547d0`, "purple/4": `#623aae`, "purple/5": `#4f2e8e`, "purple/6": `#3d2270`, "purple/7": `#6539b7`, "magenta/0": `#f93498`, "magenta/1": `#e52f8b`, "magenta/2": `#c82779`, "magenta/3": `#c62378`, "magenta/4": `#a71c63`, "magenta/5": `#881551`, "magenta/6": `#6c0e3e`, "magenta/7": `#ab2067`, "brown/0": `#a06b39`, "brown/1": `#9d6937`, "brown/2": `#86592e`, "brown/3": `#996b42`, "brown/4": `#835a34`, "brown/5": `#6f4b2b`, "brown/6": `#5a3c21`, "brown/7": `#714a25` }, dark: { "neutral/0": `#1f1f1f`, "neutral/1": `#161616`, "neutral/2": `#121212`, "neutral/3": `#0e0e0e`, "neutral/4": `#dbdbdb`, "neutral/5": `#f5f5f5`, "neutral/6": `#c1c1c1`, "red/0": `#fc2c3e`, "red/1": `#cf2b35`, "red/2": `#f73643`, "red/3": `#ff6463`, "red/4": `#ff908b`, "red/5": `#ffb3ae`, "red/6": `#ffd2cf`, "red/7": `#a8222a`, "orange/0": `#f9670e`, "orange/1": `#cd5309`, "orange/2": `#f4650e`, "orange/3": `#fe6600`, "orange/4": `#ff9464`, "orange/5": `#ffb696`, "orange/6": `#ffd3c1`, "orange/7": `#a84306`, "yellow/0": `#f69412`, "yellow/1": `#c8770c`, "yellow/2": `#ea8c10`, "yellow/3": `#e28600`, "yellow/4": `#fb9500`, "yellow/5": `#ffb670`, "yellow/6": `#ffd6b0`, "yellow/7": `#a76308`, "green/0": `#14c370`, "green/1": `#0e9f5a`, "green/2": `#13bb6b`, "green/3": `#00ba69`, "green/4": `#29cb78`, "green/5": `#7fdca1`, "green/6": `#b8eac7`, "green/7": `#0a844a`, "cyan/0": `#13b8a3`, "cyan/1": `#0e9886`, "cyan/2": `#12b39f`, "cyan/3": `#00b7a2`, "cyan/4": `#59c8b5`, "cyan/5": `#8dd8c9`, "cyan/6": `#bce8de`, "cyan/7": `#097d6e`, "blue/0": `#1884fc`, "blue/1": `#116dd2`, "blue/2": `#1784fb`, "blue/3": `#4d9bff`, "blue/4": `#7cb5ff`, "blue/5": `#a3caff`, "blue/6": `#c8dfff`, "blue/7": `#0c58aa`, "purple/0": `#905afb`, "purple/1": `#7845d7`, "purple/2": `#8e59f8`, "purple/3": `#a582ff`, "purple/4": `#bba5ff`, "purple/5": `#cdbfff`, "purple/6": `#e0d8ff`, "purple/7": `#6036af`, "magenta/0": `#fb3499`, "magenta/1": `#cf297e`, "magenta/2": `#f63397`, "magenta/3": `#ff55a4`, "magenta/4": `#ff8ab9`, "magenta/5": `#ffafcd`, "magenta/6": `#ffcfe0`, "magenta/7": `#aa2066`, "brown/0": `#a16b39`, "brown/1": `#8c5d31`, "brown/2": `#aa723d`, "brown/3": `#c59e7d`, "brown/4": `#ccb39d`, "brown/5": `#dac7b7`, "brown/6": `#e8ddd3`, "brown/7": `#704925` } };
var b_ = [`base`, `baseHover`, `pane`, `chrome`, `sidebar`, `elevated`, `onPrimary`, `focus`];
var x_ = [`accent`, `danger`, `success`, `warn`];
var S_ = [`red`, `orange`, `yellow`, `green`, `cyan`, `blue`, `purple`, `magenta`, `brown`];
var C_ = [...x_, ...S_];
var w_ = [`Fill`, `FillHover`, `FillPressed`, `FillBright`, `Foreground`, `ForegroundHover`, `ForegroundBright`];
var T_ = [`Fill`, `FillHover`, `FillBright`, `Foreground`, `ForegroundBright`];
function E_(e) {
  return e === `accent` ? T_ : w_;
}
var D_ = /* @__PURE__ */ new Set([...b_, ...C_.flatMap((e) => E_(e).map((t) => `${e}${t}`))]);
function O_(e) {
  return e !== void 0 && D_.has(e);
}
var k_ = { Fill: 1, FillHover: 2, FillPressed: 7, FillBright: 0, Foreground: 3, ForegroundHover: 4, ForegroundBright: 1 };
function A_(e, t) {
  return t.every((t2) => E_(t2).every((n) => Object.hasOwn(e, `${t2}${n}`)));
}
function j_(e, t) {
  let n = Object.fromEntries(e.flatMap((e2) => E_(e2).map((n2) => [`${e2}${n2}`, t(n2, e2)])));
  return Ge(A_(n, e), () => `Missing variants for ${e.join(`, `)}`), n;
}
function M_() {
  return j_(S_, (e, t) => `{primitive/${t}/${k_[e]}}`);
}
function N_(e, t) {
  return j_([e], (e2) => `{${t}${e2}}`);
}
var P_ = /^#[0-9a-f]{6}$/;
var F_ = /^\{([a-zA-Z]+)\}$/;
var I_ = /^\{primitive\/([a-z]+\/\d+)\}$/;
function L_({ value: e, theme: t }) {
  let n = I_.exec(e)?.[1];
  if (n === void 0) return;
  let r = t.primitives;
  Ge(r !== void 0, () => `${t.id}: ${e} needs a primitives set`);
  let i = y_[r][n];
  return Ge(i !== void 0, () => `${t.id}: unknown primitive ${e}`), i;
}
function R_({ value: e, theme: t, seen: n }) {
  if (P_.test(e)) return e;
  let r = L_({ value: e, theme: t });
  if (r !== void 0) return r;
  let i = F_.exec(e)?.[1];
  return Ge(O_(i), () => `${t.id}: ${e} is not #rrggbb, a primitive, or a theme color`), Ge(!n.includes(i), () => `${t.id}: reference cycle through ${i}`), R_({ value: t.colors[i], theme: t, seen: [...n, i] });
}
function z_({ theme: e, key: t }) {
  return R_({ value: e.colors[t], theme: e, seen: [t] });
}
var B_ = { base: `{primitive/neutral/5}`, baseHover: `{primitive/neutral/4}`, pane: `{primitive/neutral/1}`, chrome: `{primitive/neutral/2}`, sidebar: `{primitive/neutral/3}`, elevated: `{primitive/neutral/0}`, focus: `{accentFillBright}`, ...N_(`accent`, `blue`), ...N_(`danger`, `red`), ...N_(`success`, `green`), ...N_(`warn`, `yellow`), ...M_() };
var V_ = { id: `sand-light`, name: `Sand Light`, appearance: `light`, highContrast: false, primitives: `light`, userBubbleFill: `FillHover`, colors: { ...B_, onPrimary: `{primitive/neutral/1}` } };
var H_ = { id: `sand-dark`, name: `Sand Dark`, appearance: `dark`, highContrast: false, primitives: `dark`, userBubbleFill: `Fill`, colors: { ...B_, onPrimary: `{primitive/neutral/5}` } };
var U_ = [V_, H_];
var Q = (e) => ({ kind: `color`, color: e });
var G_ = (e) => ({ kind: `themed`, color: e });
var $ = (e, t) => ({ kind: `mix`, color: e, opacity: t });
var K_ = (e, t, n) => ({ kind: `over`, color: e, opacity: t, backdrop: n });
var q_ = { "bg/pane": Q(`pane`), "bg/chrome": Q(`chrome`), "bg/sidebar": Q(`sidebar`), "bg/elevated": Q(`elevated`), "bg/elevated-hover": K_(`base`, `bg/hover`, `elevated`), "bg/luminous": Q(`onPrimary`), "bg/scrim": $(`universal/black`, `bg/scrim`), "bg/scrim-heavy": $(`universal/black`, `bg/scrim-heavy`), "bg/hover": $(`base`, `bg/hover`), "bg/active": $(`base`, `bg/active`), "bg/primary": Q(`base`), "bg/primary-hover": Q(`baseHover`), "bg/primary-disabled": $(`base`, `bg/primary-disabled`), "bg/secondary": $(`base`, `bg/secondary`), "bg/secondary-hover": $(`base`, `bg/secondary-hover`), "bg/secondary-active": $(`base`, `bg/secondary-active`), "bg/secondary-disabled": $(`base`, `bg/secondary-disabled`), "bg/tertiary": $(`base`, `bg/tertiary`), "bg/quaternary": $(`base`, `bg/quaternary`), "fill/bubble-agent": $(`base`, `fill/bubble-agent`), "fill/bubble-user": $(`base`, `fill/bubble-user`), "fill/attachment-card": K_(`base`, `fill/attachment-card`, `elevated`), "fill/attachment-paper": K_(`base`, `fill/attachment-paper`, `elevated`), "fill/attachment-ink": $(`base`, `fill/attachment-ink`), "text/primary": Q(`base`), "text/secondary": $(`base`, `text/secondary`), "text/tertiary": $(`base`, `text/tertiary`), "text/quaternary": $(`base`, `text/quaternary`), "text/on-primary": Q(`onPrimary`), "text/inverted": Q(`chrome`), "icon/primary": $(`base`, `icon/primary`), "icon/secondary": $(`base`, `icon/secondary`), "icon/tertiary": $(`base`, `icon/tertiary`), "icon/quaternary": $(`base`, `icon/quaternary`), "icon/official": G_((e) => e.appearance === `dark` ? `blueForeground` : `blueForegroundBright`), "border/primary-translucent": $(`base`, `border/primary-translucent`), "border/secondary-translucent": $(`base`, `border/secondary-translucent`), "border/tertiary-translucent": $(`base`, `border/tertiary-translucent`), "border/quaternary-translucent": $(`base`, `border/quaternary-translucent`), "border/attachment-card": $(`base`, `border/attachment-card`), "border/attachment-paper": $(`base`, `border/attachment-paper`), "border/focus-primary": Q(`focus`), "border/pane": Q(`pane`), "border/chrome": Q(`chrome`), "border/elevated": Q(`elevated`), "shadow/control": $(`base`, `shadow/control`), "shadow/card": $(`base`, `shadow/card`), "shadow/secondary": $(`base`, `shadow/secondary`), "shadow/inline/ambient": $(`base`, `shadow/inline/ambient`), "shadow/inline/key": $(`base`, `shadow/inline/key`), "shadow/popover/ambient": $(`base`, `shadow/popover/ambient`), "shadow/popover/key": $(`base`, `shadow/popover/key`), "shadow/modal/ambient": $(`base`, `shadow/modal/ambient`), "shadow/modal/key": $(`base`, `shadow/modal/key`), "shadow/window/ambient": $(`base`, `shadow/window/ambient`), "shadow/window/edge": $(`base`, `shadow/window/edge`), "shadow/ring": $(`base`, `shadow/ring`), "specular/primary": $(`universal/white`, `specular/primary`), "specular/secondary": $(`universal/white`, `specular/secondary`), "specular/tertiary": $(`universal/white`, `specular/tertiary`), "specular/quaternary": $(`universal/white`, `specular/quaternary`) };
function J_(e, t) {
  let n = t.replace(`{role}`, e);
  return __.find((e2) => e2 === n) ?? t;
}
function Y_(e) {
  let t = `${e}Fill`, n = (t2) => $(`${e}FillBright`, J_(e, t2));
  return { [`bg/${e}-primary`]: Q(t), [`bg/${e}-primary-hover`]: Q(`${e}FillHover`), [`bg/${e}-primary-disabled`]: $(t, J_(e, `bg/{role}-primary-disabled`)), [`bg/${e}-secondary`]: n(`bg/{role}-secondary`), [`bg/${e}-secondary-hover`]: n(`bg/{role}-secondary-hover`), [`bg/${e}-secondary-disabled`]: n(`bg/{role}-secondary-disabled`), [`bg/${e}-bright`]: Q(`${e}FillBright`), [`fill/${e}-bubble-user`]: G_((t2) => `${e}${t2.userBubbleFill}`), [`text/${e}-primary`]: Q(`${e}Foreground`), [`text/${e}-quaternary`]: n(`text/{role}-quaternary`), [`icon/${e}-primary`]: Q(`${e}ForegroundBright`), [`border/${e}-primary`]: Q(t), [`border/${e}-quaternary`]: n(`border/{role}-quaternary`) };
}
var X_ = { ...q_, ...Object.fromEntries(C_.flatMap((e) => Object.entries(Y_(e)))) };
function Z_(e, t) {
  switch (e) {
    case `universal/black`:
      return `#000000`;
    case `universal/white`:
      return `#ffffff`;
    default:
      return z_({ theme: t, key: e });
  }
}
function Q_(e, t) {
  return `${e}${Math.round(t * 255 / 100).toString(16).padStart(2, `0`)}`;
}
function $_(e, t, n) {
  let r = (e2, t2) => Number.parseInt(e2.slice(1 + t2 * 2, 3 + t2 * 2), 16), i = t / 100;
  return `#${[0, 1, 2].map((t2) => Math.round(r(e, t2) * i + r(n, t2) * (1 - i))).map((e2) => e2.toString(16).padStart(2, `0`)).join(``)}`;
}
function ev(e, t, n) {
  if (e.kind === `themed`) return Z_(e.color(t), t);
  let r = Z_(e.color, t);
  switch (e.kind) {
    case `color`:
      return r;
    case `mix`:
      return Q_(r, n[e.opacity]);
    case `over`:
      return $_(r, n[e.opacity], Z_(e.backdrop, t));
    default:
      return e;
  }
}
function tv(e) {
  return Ge(Object.hasOwn(X_, e), () => `Unknown sand semantic token: ${e}`), `--sand-${e.replaceAll(`/`, `-`)}`;
}
function rv(e) {
  let t = m_(e);
  return Object.fromEntries(Object.entries(X_).map(([n, r]) => [tv(n), ev(r, e, t)]));
}
var iv = /* @__PURE__ */ new Map(U_.map((e) => [e, rv(e)]));
function paintSvg(element, frame, appearance, size, id2) {
  e_(element, Xg(frame, appearance, size, id2));
}
export {
  o_ as appearance,
  i_ as body,
  eo as createActor,
  go as createDriver,
  ni as expressions,
  paintSvg,
  Yg as renderSvg
};
