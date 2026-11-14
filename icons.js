/* Line-art illustrations (placeholder until the photo shoot). Single-stroke, uses currentColor. */
window.HM_ART = (function () {
  var S = function (body, vb) { return '<svg viewBox="' + (vb || '0 0 64 64') + '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>'; };
  var A = {
    laddoo: S('<circle cx="32" cy="34" r="16"/><path d="M22 28c2-1 3 1 5 0M33 24c2 0 3 2 5 1M26 40c2 1 4-1 6 0M37 36c1 2 3 2 4 1M30 31h.01M40 30h.01M24 35h.01M34 43h.01"/><path d="M12 52c6 3 34 3 40 0"/>'),
    bowl: S('<path d="M10 32h44c0 12-10 20-22 20S10 44 10 32Z"/><path d="M24 52h16"/><path d="M24 24c0-3 3-3 3-6M32 24c0-3 3-3 3-6M40 24c0-3 3-3 3-6"/>'),
    jar: S('<rect x="18" y="20" width="28" height="34" rx="6"/><path d="M20 14h24v6H20z"/><path d="M18 32h28M24 40h16M26 46h12"/>'),
    cup: S('<path d="M14 24h30v14a12 12 0 0 1-12 12h-6a12 12 0 0 1-12-12V24Z"/><path d="M44 28h3a6 6 0 0 1 0 12h-4"/><path d="M22 18c0-3 3-3 3-6M30 18c0-3 3-3 3-6"/><path d="M10 54h38"/>'),
    sachet: S('<path d="M18 12h28v40H18z"/><path d="M18 18h28M18 46h28"/><path d="M26 30c4-6 8 0 12-4M28 36c3 2 6 2 8 0"/>'),
    pot: S('<path d="M20 22h24"/><path d="M22 22c-6 4-8 10-8 16 0 9 8 14 18 14s18-5 18-14c0-6-2-12-8-16"/><path d="M26 16h12v6H26z"/><path d="M20 38c4 2 20 2 24 0"/>'),
    millet: S('<path d="M32 56V20"/><path d="M32 22c-5-2-7-7-6-12 5 1 7 6 6 12ZM32 22c5-2 7-7 6-12-5 1-7 6-6 12Z"/><path d="M32 34c-5-2-8-6-8-10 5 0 8 4 8 10ZM32 34c5-2 8-6 8-10-5 0-8 4-8 10ZM32 46c-5-2-8-6-8-10 5 0 8 4 8 10ZM32 46c5-2 8-6 8-10-5 0-8 4-8 10Z"/>'),
    leaf: S('<path d="M14 50C14 26 30 14 52 12c0 24-14 38-36 38Z"/><path d="M14 50 40 24"/>'),
    mountain: S('<path d="M4 50 22 20l8 12 8-16 22 34Z"/><path d="M38 16l5 8-4-1-3 3-3-4M22 20l3 5-3-1-2 2-2-3"/>'),
    mother: S('<circle cx="26" cy="14" r="6"/><path d="M14 54V36c0-8 5-14 12-14s12 6 12 14"/><path d="M20 36c4 6 14 8 20 4"/><circle cx="40" cy="34" r="5"/><path d="M36 40c2 2 6 2 8 0"/>'),
    hand: S('<path d="M20 54V30a4 4 0 0 1 8 0v-8a4 4 0 0 1 8 0v4a4 4 0 0 1 8 0v4a4 4 0 0 1 8 0v12c0 6-4 12-12 12H28c-4 0-8-2-8-0"/><circle cx="34" cy="10" r="5"/>'),
    flask: S('<path d="M26 10h12M28 10v14L14 48a4 4 0 0 0 4 6h28a4 4 0 0 0 4-6L36 24V10"/><path d="M20 40h24"/><circle cx="28" cy="46" r="1.5"/><circle cx="36" cy="44" r="1.5"/>'),
    shield: S('<path d="M32 8 12 16v14c0 12 9 22 20 26 11-4 20-14 20-26V16Z"/><path d="m24 32 6 6 11-12"/>'),
    qr: S('<rect x="10" y="10" width="16" height="16" rx="2"/><rect x="38" y="10" width="16" height="16" rx="2"/><rect x="10" y="38" width="16" height="16" rx="2"/><path d="M38 38h6v6h-6zM48 38h6M38 50h6M48 46v8"/><path d="M16 16h4v4h-4zM44 16h4v4h-4zM16 44h4v4h-4z"/>'),
    calendar: S('<rect x="10" y="14" width="44" height="40" rx="5"/><path d="M10 24h44M22 8v10M42 8v10"/><path d="M20 34h4M30 34h4M40 34h4M20 44h4M30 44h4"/>'),
    moon: S('<path d="M42 44A18 18 0 0 1 28 12a18 18 0 1 0 22 26 18 18 0 0 1-8 6Z"/><path d="M46 14h.01M50 22h.01"/>'),
    sun: S('<circle cx="32" cy="32" r="10"/><path d="M32 8v6M32 50v6M8 32h6M50 32h6M15 15l4 4M45 45l4 4M15 49l4-4M45 19l4-4"/>'),
    heart: S('<path d="M32 52S10 40 10 24a11 11 0 0 1 22-4 11 11 0 0 1 22 4c0 16-22 28-22 28Z"/>'),
    truck: S('<path d="M6 18h30v24H6zM36 26h12l8 8v8H36z"/><circle cx="16" cy="46" r="5"/><circle cx="46" cy="46" r="5"/>'),
    repeat: S('<path d="M14 26a18 18 0 0 1 32-6l4 4M50 38a18 18 0 0 1-32 6l-4-4"/><path d="M50 14v10H40M14 50V40h10"/>'),
    chat: S('<path d="M10 14h44v28H26l-12 10V42h-4Z"/><path d="M20 26h24M20 33h16"/>'),
    gift: S('<rect x="10" y="24" width="44" height="12" rx="2"/><path d="M14 36v18h36V36M32 24v30"/><path d="M32 24c-4-8-14-10-14-4s10 4 14 4Zm0 0c4-8 14-10 14-4s-10 4-14 4Z"/>'),
    seeds: S('<ellipse cx="22" cy="24" rx="5" ry="3" transform="rotate(-30 22 24)"/><ellipse cx="40" cy="20" rx="5" ry="3" transform="rotate(20 40 20)"/><ellipse cx="30" cy="36" rx="5" ry="3" transform="rotate(-10 30 36)"/><ellipse cx="44" cy="40" rx="5" ry="3" transform="rotate(35 44 40)"/><ellipse cx="20" cy="46" rx="5" ry="3" transform="rotate(10 20 46)"/>'),
    nut: S('<path d="M32 10c10 0 16 10 16 22S40 54 32 54 16 44 16 32s6-22 16-22Z"/><path d="M32 14c-3 10-3 26 0 36"/>'),
    spoon: S('<ellipse cx="22" cy="20" rx="8" ry="11" transform="rotate(-40 22 20)"/><path d="m28 27 24 24"/>'),
    clock: S('<circle cx="32" cy="32" r="22"/><path d="M32 18v14l9 6"/>'),
    drop: S('<path d="M32 8s-16 18-16 30a16 16 0 0 0 32 0C48 26 32 8 32 8Z"/><path d="M24 40a8 8 0 0 0 8 8"/>')
  };
  return function (name, cls) { return '<span class="art' + (cls ? ' ' + cls : '') + '">' + (A[name] || A.leaf) + '</span>'; };
})();
