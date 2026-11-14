/* Himmaika D2C storefront prototype — no backend. Cart and checkout are mocked. */
(function () {
  'use strict';

  /* ---------- catalogue ---------- */
  var CATS = [
    { id: 'laddoo', name: 'Laddoo', e: '🟤', line: 'Roz ka ek, nani ke haath jaisa' },
    { id: 'meals', name: 'Meals & Mixes', e: '🥣', line: 'Kheer, khichdi, soup, panjiri' },
    { id: 'sips', name: 'Drinks & Snacks', e: '🫖', line: 'Garam ghoont aur ek haath ka snack' },
    { id: 'combo', name: 'Combos', e: '📦', line: '10 din ya poore 40 din ka dabba' }
  ];
  var P = [
    { id: 'gond', cat: 'laddoo', e: '🟤', tag: 'Best seller', name: 'Badri Ghee Gond Laddoo', price: 649, unit: '12 pcs · 300g', low: true, best: true,
      moment: 'Subah se kuch nahi khaya, aur baby abhi-abhi soya hai.',
      line: 'Gond, nuts aur Badri ghee — wahi taaqat waala laddoo jo nani zabardasti khilati thi.',
      sci: 'Energy-dense khana, un extra calories ke liye jo feeding maa ko roz chahiye.',
      ing: 'Gond (edible gum), gehun ka atta, Badri cow ghee, badam, kaju, khajoor (dates), sonth, elaichi.',
      how: 'Roz 1 laddoo, garam doodh ya ajwain paani ke saath. C-section ke baad kab shuru karein, doctor se poochh lein.' },
    { id: 'mandua', cat: 'laddoo', e: '🌾', tag: 'Calcium waali parampara', name: 'Mandua–Til Laddoo', price: 499, unit: '12 pcs', low: true, best: true,
      moment: 'Kamar mein dard hai, aur doodh ka glass roz thanda ho jaata hai.',
      line: 'Finger millet aur til — calcium ke liye pahad ki purani jodi.',
      sci: 'Calcium-rich ingredients, uske 1,200 mg/din ke hisaab ki taraf.',
      ing: 'Mandua (finger millet) atta, safed til, Badri cow ghee, khajoor (dates), gud, elaichi.',
      how: 'Din mein 1–2 laddoo, jab bhi haath khaali ho.' },
    { id: 'methi', cat: 'laddoo', e: '🟠', tag: 'Kadwahat ke bina', name: 'Mild Methi–Date Laddoo', price: 549, unit: '12 pcs', low: true,
      moment: 'Mummy kehti hain methi ka laddoo zaroori hai. Aapko uski kadwahat yaad hai.',
      line: 'Methi ki parampara, kadwahat ke bina — dates se meetha.',
      sci: 'Peedhiyon se nayi maa ko diya jaane waala laddoo. Hum is se koi doodh waala vaada nahi karte.',
      ing: 'Gehun ka atta, methi dana (halka bhuna), Badri cow ghee, khajoor (dates), badam, saunf.',
      how: 'Roz 1 laddoo. Methi kuch logon ko suit nahi karti — pehle aadha kha kar dekhein.' },
    { id: 'panjiri', cat: 'meals', e: '🥣', tag: 'Purani parampara', name: 'Pahadi Panjiri', price: 549, unit: '400g jar', low: true, best: true,
      moment: 'Raat ke 3 baje feeding ke baad pet mein choohe daud rahe hain.',
      line: 'Bhuna anaaj, makhana, nuts, Badri ghee — chammach bhar ke, ek haath se.',
      sci: 'Iron-containing ingredients — kyunki 57% Indian mahilaon mein khoon ki kami hai (NFHS-5).',
      ing: 'Gehun ka atta, mandua atta, makhana, badam, kaju, magaz, Badri cow ghee, gud, sonth.',
      how: '2 bade chammach, seedha jar se ya garam doodh mein ghol kar.' },
    { id: 'kheer', cat: 'meals', e: '🍚', tag: 'Week 1 · C-section friendly', name: 'Jhangora Kheer Mix', price: 299, unit: '4 servings', low: true, best: true,
      moment: 'Pehla hafta hai. Kuch bhaari khane ka mann nahi, aur pet bhi saaf nahi ho raha.',
      line: 'Pehle hafte ka naram khana — halka, garam, easy-digest.',
      sci: 'High-fibre barnyard millet — us kabz ke liye jiski baat koi nahi karta.',
      ing: 'Jhangora (barnyard millet), khajoor powder, makhana, elaichi, kesar.',
      how: 'Ek sachet + 1 cup doodh ya paani, 10 minute dheemi aanch par.' },
    { id: 'khichdi', cat: 'meals', e: '🥘', tag: '15 minute', name: 'Moong–Jhangora Khichdi Kit', price: 399, unit: '4 meals',
      moment: 'Dopahar ke 3 baj gaye. Aapne abhi tak khana nahi khaya.',
      line: '15 minute mein poora khana, Badri ghee sachet ke saath.',
      sci: 'Ek asli meal, un dinon ke liye jab khade hone ki bhi himmat nahi.',
      ing: 'Moong dal, jhangora, jeera, haldi, hing, pahadi namak; alag se Badri cow ghee sachet.',
      how: 'Cooker mein kit + 3 cup paani, 2 seeti. Upar se ghee sachet.' },
    { id: 'gahat', cat: 'meals', e: '🍲', tag: 'Sirf Himmaika', name: 'Gahat Soup Mix', price: 349, unit: '6 servings',
      moment: 'Meetha kha-kha ke mann bhar gaya hai. Kuch namkeen, kuch garam chahiye.',
      line: 'Pahadi horse gram ka garam namkeen soup — meethe se break, protein waali raahat.',
      sci: 'Protein-containing daal — sharir ki marammat ke dinon ka khana.',
      ing: 'Gahat (horse gram) powder, jeera, lehsun, kali mirch, pahadi namak, jakhiya.',
      how: '2 chammach mix + 1 cup garam paani, 5 minute ubaal lo. Mug mein piyo.' },
    { id: 'paani', cat: 'sips', e: '🫖', tag: 'Roz ki aadat', name: 'Ajwain–Saunf–Jeera Water Sachets', price: 249, unit: '30 sachets',
      moment: 'Feeding ke waqt gala sookhta hai, aur paani ka glass hamesha doosre kamre mein hota hai.',
      line: 'Nani waala garam paani, sachet mein. Thermos bharo, din bhar ghoont lo.',
      sci: 'Feeding ke dinon mein paani peete rehne ki aasaan aadat.',
      ing: 'Ajwain, saunf, jeera — bas.',
      how: '1 sachet, 1 litre ubalta paani, thermos mein. Din bhar ghoont-ghoont.' },
    { id: 'doodh', cat: 'sips', e: '🥛', tag: 'Raat ke liye', name: 'Haldi–Saunth Doodh Mix', price: 399, unit: '200g', low: true,
      moment: 'Raat ke 11 baje. Baby so gaya, par aapki neend nahi aa rahi.',
      line: 'Raat ka doodh: haldi, sonth, makhana, nuts.',
      sci: 'Hormones ke utaar-chadhaav waale hafton mein ek garam, shaant rasam.',
      ing: 'Haldi, sonth, makhana powder, badam, khajoor powder, kali mirch, elaichi.',
      how: '1 chammach, 1 cup garam doodh mein. Sone se pehle.' },
    { id: 'makhana', cat: 'sips', e: '🍿', tag: 'Ek haath ka snack', name: 'Pahadi Namak Makhana', price: 299, unit: '100g',
      moment: 'Baby god mein so gaya hai. Hilna mana hai, aur bhookh lagi hai.',
      line: 'Ghee-roasted makhana, pahadi namak ke saath — ek haath se, baby pakde-pakde.',
      sci: 'Raat ke 3 baje ki bhookh ke liye, bina rasoi jaaye.',
      ing: 'Makhana, Badri cow ghee, pahadi pisyun loon (masaaledaar namak).',
      how: 'Jar bistar ke paas rakho. Bas.' },
    { id: 'p10', cat: 'combo', e: '📦', tag: 'Combo', name: 'Pehle 10 Din Box', price: 1499, unit: 'Week 1 ka poora khana',
      moment: 'Hospital se ghar aaye ho, aur rasoi mein kya banega kisi ko nahi pata.',
      line: 'Sabse naazuk din, sabse naram khana — ek hi dabbe mein.',
      sci: 'Pehle 10 din halka aur garam: sharir abhi sambhal raha hai.',
      ing: 'Jhangora Kheer Mix, Moong–Jhangora Khichdi Kit, Ajwain–Saunf–Jeera Sachets, Haldi–Saunth Doodh Mix, din-ba-din guide card.',
      how: 'Dabbe ke andar ke card par likha hai kis din kya khana hai.' },
    { id: 'p40', cat: 'combo', e: '🎁', tag: 'Combo · poora jaapa', name: 'Poore 40 Din Box', price: 4999, unit: 'Saare 10 products + ghee',
      moment: 'Nani aa nahi sakti. Par unki poori rasoi aa sakti hai.',
      line: 'Jaise nani 40 din rasoi sambhalti thi — saare 10 products, teen taaza shipments mein.',
      sci: 'Pehle halka, phir taaqat, phir nayi routine — teen phase, sahi waqt par.',
      ing: 'Saare 10 products, 250ml Badri cow ghee jar, din-ba-din guide. Shipment din 1, 11 aur 26 ke aas-paas.',
      how: 'Due date bata do; pehla dabba delivery ke aas-paas niklega.' },
    { id: 'pn', cat: 'combo', e: '💛', tag: 'Combo · expert ke saath', name: 'Nani+ Box', price: 8999, unit: '40 Din Box + 3 expert calls',
      moment: 'Aap chahte ho koi poori zimmedari le le.',
      line: 'Poora 40 din ka dabba, saath mein dietitian aur lactation consultant ki calls.',
      sci: 'Khana humara, salah expert ki — aapki haalat ke hisaab se.',
      ing: 'Poore 40 Din Box, 2 dietitian calls, 1 lactation-consultant call, Jain / kam-meetha customisation.',
      how: 'Order ke baad WhatsApp par call ka time tay hoga.' }
  ];
  var cart = {}, gift = false;
  var byId = function (id) { return P.filter(function (p) { return p.id === id; })[0]; };

  /* ---------- helpers ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var rupee = function (n) { return '₹' + n.toLocaleString('en-IN'); };
  function hills(top, a, b, c) {
    return '<svg viewBox="0 0 1440 150" preserveAspectRatio="none" aria-hidden="true">' +
      '<rect width="1440" height="150" fill="' + top + '"/>' +
      '<path d="M0 150 L0 96 L120 52 L210 88 L330 30 L420 70 L470 48 L600 100 L720 42 L800 76 L900 22 L1010 82 L1110 50 L1230 96 L1330 58 L1440 92 L1440 150Z" fill="' + a + '"/>' +
      '<path d="M900 22 L925 46 L905 42 L893 54 L880 38Z M330 30 L352 52 L334 48 L322 58 L310 44Z M720 42 L738 60 L722 57 L712 66 L702 54Z" fill="#fff" opacity=".85"/>' +
      '<path d="M0 150 L0 118 Q180 78 360 112 T720 108 T1080 114 T1440 104 L1440 150Z" fill="' + b + '"/>' +
      '<path d="M0 150 L0 136 Q240 108 480 132 T960 130 T1440 128 L1440 150Z" fill="' + c + '"/></svg>';
  }
  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    var box = $('#toasts');
    while (box.children.length >= 2) box.firstChild.remove();
    box.appendChild(t);
    setTimeout(function () { t.classList.add('out'); setTimeout(function () { t.remove(); }, 320); }, 3200);
  }
  function src(label, check) {
    return '<span class="src' + (check ? ' chk' : '') + '">' + label + (check ? ' · figure confirm hona baaki' : '') + '</span>';
  }
  function chips(p) {
    return '<div class="tags"><span class="chip' + (p.best ? ' hero-t' : '') + '">' + p.tag + '</span>' +
      (p.low ? '<span class="chip low" title="Sirf dates ya gud se meetha. Sugar-free nahi.">Kam meetha · no refined sugar</span>' : '') + '</div>';
  }
  function card(p) {
    return '<article class="card prod lift"><a class="pic" href="#/p/' + p.id + '" aria-label="' + p.name + ' dekho">' + p.e + '</a><div class="body">' + chips(p) +
      '<h3><a href="#/p/' + p.id + '">' + p.name + '</a></h3><p>' + p.line + '</p>' +
      '<div class="buy"><div class="price">' + rupee(p.price) + '<small>' + p.unit + '</small></div>' +
      '<div class="acts"><a class="btn btn-g btn-sm" href="#/p/' + p.id + '">Details</a><button class="btn btn-p btn-sm" data-add="' + p.id + '">+ Thaila</button></div></div></div></article>';
  }
  function grid(list, n) { return '<div class="grid g' + (n || 3) + '">' + list.map(card).join('') + '</div>'; }
  function acc(h, body, open) { return '<details class="acc"' + (open ? ' open' : '') + '><summary>' + h + '</summary><div>' + body + '</div></details>'; }
  var endCta = '<section class="center"><div class="wrap"><p class="pain">Padh liya? Ab kuch kha lo.</p><h2>Nani ki rasoi, <em>ek click door</em></h2><div class="row"><a class="btn btn-p" href="#/shop">Shop karo</a><a class="btn btn-g" href="#/shop/combo">Combos dekho</a></div></div></section>';

  /* ---------- pages ---------- */
  var pages = {};

  pages.home = function () {
    return '<section class="hero"><div class="wrap hero-grid"><div>' +
      '<span class="kicker">हिम + मायका · Himalaya se, maike jaisa</span>' +
      '<h1>Delivery ke baad ka khana, <em>jaise nani ke ghar mein</em></h1>' +
      '<p class="lede">Shehar mein baby aayi, par nani nahi aa payi. Toh unke laddoo, panjiri, kheer aur soup hum bhej dete hain — pahadi anaaj aur Badri cow ghee se bane, ek haath se khane laayak.</p>' +
      '<div class="row"><a class="btn btn-p" href="#/shop">Abhi shop karo</a><a class="btn btn-g" href="#/quiz">2-minute quiz</a></div></div>' +
      '<div class="hero-art" aria-hidden="true"><div class="plate"><div class="big">🥣</div><small>maa ki thali</small></div>' +
      '<div class="float">🌾 Mandua · Jhangora</div><div class="float">🧈 Badri cow ghee</div><div class="float">🤱 Ek haath se</div></div>' +
      '</div><div class="hills-wrap">' + hills('transparent', '#E8D5BC', '#7D8450', '#3A2A1E') + '</div></section>' +

      '<div class="dark trust"><div class="wrap"><ul><li>Pahadi anaaj</li><li>Organic Badri cow ghee <span class="tag-pend">certificate pending</span></li><li>Lab report har batch <span class="tag-pend">pending</span></li><li>No refined sugar</li><li>Ek haath se khane laayak</li></ul></div></div>' +

      '<section><div class="wrap"><span class="kicker">Shop by category</span><h2>Aaj kya chahiye?</h2>' +
      '<div class="grid g4 cats" style="margin-top:20px">' + CATS.map(function (c) {
        return '<a class="cat lift" href="#/shop/' + c.id + '"><span class="ce">' + c.e + '</span><strong>' + c.name + '</strong><small>' + c.line + '</small></a>';
      }).join('') + '</div></div></section>' +

      '<section class="alt"><div class="wrap"><div class="head"><div><span class="kicker">Best sellers</span><h2>Nani ki rasoi ke <em>chaar sitaare</em></h2></div><a class="btn btn-g btn-sm" href="#/shop">Sab dekho</a></div>' +
      grid(P.filter(function (p) { return p.best; }), 4) + '</div></section>' +

      '<section><div class="wrap split"><div><span class="kicker">Humari kahani</span>' +
      '<h2>Sab baby ka poochhte hain. <em>Maa ka koi nahi poochhta.</em></h2>' +
      '<p class="lede">"Baby ne doodh piya? Baby soya?" — aur aapne subah se kya khaya, yeh kisi ne nahi poochha. Pehle nani poochhti thi, aur poochh ke rukti nahi thi — khila ke hi maanti thi. Himmaika wahi nani hai, ek dabbe mein.</p>' +
      '<a class="btn btn-g" href="#/story">Poori kahani padho</a></div>' +
      '<div class="card warm storycard"><div style="font-size:3rem">👵🏔️</div><p class="quote" style="font-size:1.5rem;max-width:none">"Har nayi maa ko uske 40 din ka haq mile, chahe ghar mein koi bada ho ya na ho."<span>Humara mission</span></p></div></div></section>' +

      '<section class="alt"><div class="wrap"><div class="head"><div><span class="kicker">Combos</span><p class="pain">Roz sochna ki aaj kya khaun? Mat socho.</p><h2>Poora dabba, <em>ek baar mein</em></h2></div><a class="btn btn-g btn-sm" href="#/plan">40-Day Plan samjho</a></div>' +
      grid(P.filter(function (p) { return p.cat === 'combo'; }), 3) + '</div></section>' +

      '<div class="band"><div class="wrap"><div class="hand">🤱</div><h2>Sab kuch ek haath se khane laayak.</h2><p>Kyunki doosre haath mein baby hai. Har laddoo, har jar, har sachet isi niyam pe pass hota hai.</p></div></div>' +

      '<section><div class="wrap"><div class="center"><span class="kicker">Yeh khana kyun?</span>' +
      '<p class="pain">"Itna kyun khilati thi nani?" — kyunki unhe hisaab pata tha.</p>' +
      '<h2>Aapka sharir abhi <em>do logon ka kaam</em> kar raha hai</h2></div>' +
      '<div class="stats" style="margin-top:26px">' +
      '<div class="stat"><div class="num">~530–600 kcal</div><p>roz extra chahiye feeding maa ko, pehle 6 mahine.</p>' + src('ICMR-NIN 2020', true) + '</div>' +
      '<div class="stat"><div class="num">1,200 mg</div><p>calcium roz — feeding maa ki zaroorat.</p>' + src('ICMR-NIN 2020') + '</div>' +
      '<div class="stat"><div class="num">57%</div><p>Indian mahilaon (15–49) mein khoon ki kami hai.</p>' + src('NFHS-5, 2019–21') + '</div>' +
      '</div><div class="center" style="margin-top:26px"><a class="btn btn-g" href="#/samajh">40 din ki poori samajh</a></div></div></section>' +

      '<section class="alt"><div class="wrap"><div class="head"><div><span class="kicker">Our proof</span><p class="pain">Label padhne ka time kiske paas hai?</p><h2>30 second mein <em>bharosa</em></h2></div><a class="btn btn-g btn-sm" href="#/proof">Saara proof</a></div>' +
      '<div class="grid g4">' +
      pf('🧈', 'Organic Badri cow ghee', 'certificate pending') + pf('🏔️', 'GI-registered naam: Uttarakhand Badri Cow Ghee', 'eligibility confirm honi baaki') +
      pf('🧪', 'Har batch ki lab report, QR se', 'lab partner pending') + pf('🌴', 'Meetha sirf dates ya gud se', '') + '</div></div></section>' +

      '<section><div class="wrap"><div class="center"><span class="kicker">Hum saath hain</span><h2>Khareedna hi nahi, <em>saath bhi</em></h2></div><div class="grid g3" style="margin-top:26px">' +
      '<a class="cat lift" href="#/gift"><span class="ce">🎁</span><strong>Gift a 40</strong><small>Aap wahan nahi ho sakte? Aapka khana aur chitthi pahunch sakti hai.</small></a>' +
      '<a class="cat lift" href="#/quiz"><span class="ce">🍽️</span><strong>Meri Thali Banao</strong><small>Samajh nahi aa raha kya lein? 4 sawaal, 2 minute.</small></a>' +
      '<a class="cat lift" href="#/nutritionist"><span class="ce">👩‍⚕️</span><strong>Nutritionist se baat</strong><small>Ek insaan jo sirf aapki thali dekhe, aapki bhasha mein.</small></a>' +
      '</div></div></section>' +

      '<section class="alt"><div class="wrap center"><span class="kicker">Maaon ki baat</span><h2>Reviews yahan aayenge</h2><p class="lede">Abhi hum launch nahi hue hain, isliye yahan koi review nahi hai. Nakli sitaare hum nahi lagate — pehli asli maaon ki baatein launch ke baad yahan dikhengi.</p></div></section>';
  };
  function pf(ic, h, pend) { return '<div class="card"><div style="font-size:1.8rem">' + ic + '</div><h3>' + h + '</h3>' + (pend ? '<span class="tag-pend">' + pend + '</span>' : '') + '</div>'; }

  pages.shop = function (cat) {
    var c = CATS.filter(function (x) { return x.id === cat; })[0];
    var list = c ? P.filter(function (p) { return p.cat === cat; }) : P;
    return '<section><div class="wrap"><span class="kicker">' + (c ? 'Shop · ' + c.name : 'Shop all') + '</span>' +
      '<p class="pain">"Kya khau, kab khau?" — Google pe 50 jawab hain, aur aapke paas 5 minute bhi nahi.</p>' +
      '<h1>' + (c ? c.name + ' <em>' + c.line.toLowerCase() + '</em>' : 'Das cheezein, teen dabbe. <em>Bas.</em>') + '</h1>' +
      '<div class="filters">' + [{ id: '', name: 'Sab' }].concat(CATS).map(function (x) {
        return '<a href="#/shop' + (x.id ? '/' + x.id : '') + '"' + ((x.id || '') === (cat || '') ? ' class="on" aria-current="true"' : '') + '>' + x.name + '</a>';
      }).join('') + '</div>' + grid(list, 3) +
      '<div class="honest" style="margin-top:30px"><div class="ic">🤝</div><p><strong>Imaandaari ki baat:</strong> Hum "doodh badhega" ya "kamzori door hogi" jaise vaade nahi karte. Yeh paramparik khana hai, dawai nahi. Meetha sirf dates ya gud se, refined sugar bilkul nahi. "Kam meetha" ka matlab sugar-free nahi hai.</p></div>' +
      '</div></section>';
  };

  pages.p = function (id) {
    var p = byId(id); if (!p) return pages.shop();
    var c = CATS.filter(function (x) { return x.id === p.cat; })[0];
    var rel = P.filter(function (x) { return x.id !== p.id && (p.cat === 'combo' ? x.best : x.cat === p.cat || x.best); }).slice(0, 3);
    var combo = p.cat === 'combo';
    return '<section class="pdp"><div class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <a href="#/shop/' + c.id + '">' + c.name + '</a> / <span>' + p.name + '</span></nav>' +
      '<div class="pdp-grid"><div class="gal"><div class="main" aria-hidden="true">' + p.e + '<small>product photo aani baaki</small></div>' +
      '<div class="thumbs" aria-hidden="true"><span>' + p.e + '</span><span>🧈</span><span>🏔️</span><span>🧪</span></div></div>' +
      '<div class="info">' + chips(p) + '<h1>' + p.name + '</h1><p class="pain">' + p.moment + '</p><p class="lede">' + p.line + '</p>' +
      '<div class="price big">' + rupee(p.price) + '<small>' + p.unit + ' · saare tax shaamil · prototype keemat</small></div>' +
      '<div class="buyrow"><div class="qty lg"><button data-q="-1" aria-label="Kam karo">−</button><b id="pq">1</b><button data-q="1" aria-label="Badhao">+</button></div>' +
      '<button class="btn btn-p" data-addq="' + p.id + '">Thaile mein daalo</button><button class="btn btn-g" data-buy="' + p.id + '">Abhi kharido</button></div>' +
      '<ul class="badges"><li>🤱 Ek haath se</li><li>🧈 Badri cow ghee</li><li>🌴 No refined sugar</li><li>🧪 Batch lab report <span class="tag-pend">pending</span></li></ul>' +
      acc(combo ? 'Dabbe mein kya hai' : 'Andar kya hai', '<p>' + p.ing + '</p><p class="note">Yeh ingredients ki shuruaati list hai; final recipe aur poori list pack par chhapegi. Allergens: nuts, til, doodh se bani cheezein ho sakti hain.</p>', true) +
      acc('Kaise khayein', '<p>' + p.how + '</p>') +
      acc('Yeh kyun', '<p>' + p.sci + '</p><p class="note">Yeh aam poshan ki jaankari hai, koi ilaaj ka daava nahi. <a href="#/samajh">Poori samajh padho</a>.</p>') +
      acc('Nutrition aur shelf life', '<p>Nutrition table (energy, protein, fat, sugar, per 100g aur per serving), best-before aur storage — lab testing ke baad yahan aur pack par aayenge.</p><span class="tag-pend">lab values pending</span>') +
      acc('Delivery aur wapsi', '<p>Dehradun se taaza bana kar bheja jaata hai. Shipping time, charges aur return policy launch par final hongi.</p><span class="tag-pend">prototype</span>') +
      '</div></div></div></section>' +

      '<section class="alt"><div class="wrap"><h2>Log yeh bhi poochhte hain</h2><div class="faq">' +
      acc('Kya isse doodh badhega?', '<p>Hum aisa koi vaada nahi karte. Yeh paramparik khana hai jo nayi maa ka pet bharta hai. Feeding mein dikkat ho toh lactation consultant ya doctor se milein.</p>') +
      acc('C-section ke baad kha sakti hoon?', '<p>Pehle 10 din halka aur naram khana aasaan padta hai — kheer, khichdi, soup. Bhaari laddoo kab shuru karein, yeh apne doctor se poochh lein.</p>') +
      acc('Diabetes ya BP hai, toh?', '<p>Humare kai products mein dates ya gud ka meetha aur ghee hai. Inhe lene se pehle apne doctor se zaroor poochhein.</p>') +
      acc('Kya main kisi aur ke liye bhej sakti / sakta hoon?', '<p>Haan. Thaile mein "Yeh gift hai" chuno aur apni chitthi likh do — dabbe ke saath jaayegi.</p>') +
      '</div></div></section>' +

      '<section><div class="wrap"><h2>Saath mein <em>achha lagta hai</em></h2>' + grid(rel, 3) + '</div></section>';
  };

  pages.story = function () {
    return '<section><div class="wrap"><span class="kicker">Our Story</span>' +
      '<p class="pain">Shehar mein baby aayi, par nani nahi aa payi.</p>' +
      '<h1>हिम + मायका. <em>Pahad se aaya maika.</em></h1>' +
      '<p class="lede">Maika — woh ghar jahan delivery ke baad ek ladki ko sirf do kaam karne hote the: baby ko dekhna, aur khana. Baaki sab nani, maa, mausi sambhal leti thi. Himmaika usi maike ko ek dabbe mein rakhne ki koshish hai.</p></div></section>' +

      '<section class="alt"><div class="wrap split"><div><span class="kicker">Shuruaat</span><h2>Ghee humare paas tha. <em>Sawaal tha — kiske liye?</em></h2>' +
      '<p>Hum Dehradun se Barsana Magic chalate hain — pahadi Badri gaay ka ghee, shahad, tel, pahadi namak. Ghee ke dabbe bechte-bechte ek baat samajh aayi: ghee apne aap mein ek ingredient hai. Uski asli jagah kisi ki thali mein hai.</p>' +
      '<p>Aur India mein ghee ki sabse purani, sabse zaroori thali ek hi hai — <strong>jaape ki thali</strong>. Gond ka laddoo, panjiri, methi — in sabki jaan ghee hai. Toh humne ghee ko wahan pahunchaya jahan uski sabse zyada zaroorat hai.</p>' +
      '<span class="tag-pend">Founders ki kahani aur photo — add hona baaki</span></div>' +
      '<div class="card warm"><h3>Jo humne dekha</h3><ul class="tick"><li>Nayi maa shehar mein akeli hai; nani hazaar kilometre door.</li><li>Pati madad karna chahta hai, par use pata nahi kya banana hai.</li><li>Maa door se sirf phone par poochh sakti hai: "Kuch khaya?"</li><li>Aur nayi maa ke paas research karne ka time bilkul nahi.</li></ul></div></div></section>' +

      '<section><div class="wrap"><div class="center"><span class="kicker">Humare teen niyam</span><h2>Jo har dabbe par <em>laagu hote hain</em></h2></div>' +
      '<div class="grid g3" style="margin-top:26px">' +
      '<div class="card lift"><div style="font-size:2rem">🤱</div><h3>Ek haath se</h3><p>Sab kuch ek haath se khane laayak — kyunki doosre haath mein baby hai.</p></div>' +
      '<div class="card lift"><div style="font-size:2rem">🧾</div><h3>Vaada nahi, kaagaz</h3><p>Certificate aur lab report dikhayenge. Jo abhi nahi hai, wahan "pending" likhenge.</p><a href="#/proof">Our Proof dekho</a></div>' +
      '<div class="card lift"><div style="font-size:2rem">🙏</div><h3>Khilayenge, sudhaarenge nahi</h3><p>Koi jhootha daava nahi, koi taana nahi. Maa ko bas achha khana aur thoda aaram chahiye.</p></div>' +
      '</div></div></section>' +

      '<section class="alt"><div class="wrap split"><div><span class="kicker">Pahad se</span><h2>Mandua, jhangora, gahat — <em>aur Badri gaay</em></h2><p>Uttarakhand ke pahadon mein jaapa hamesha in hi cheezon se hua hai. Mandua ki roti, jhangore ki kheer, gahat ka soup, aur chhoti-si pahadi Badri gaay ka ghee. Hum kuch naya nahi bana rahe. Hum bas woh pahuncha rahe hain jo pahad ki nani pehle se jaanti thi.</p><a class="btn btn-g" href="#/samajh">Iske peeche ki samajh</a></div>' +
      '<div><p class="quote" style="text-align:left;margin:0">"India ka sabse bharosemand pehle-40-din ka brand, Himalaya se."<span>Humara sapna</span></p></div></div></section>' + endCta;
  };

  window.HM_INFO(pages, src, endCta);
  window.HM_MORE(pages, { $: $, rupee: rupee, toast: toast, byId: byId, endCta: endCta });

  /* ---------- cart ---------- */
  function cartCount() { var n = 0; for (var k in cart) n += cart[k]; return n; }
  function drawCart() {
    $('#cartCount').textContent = cartCount();
    var ids = Object.keys(cart), tot = 0;
    if (!ids.length) { $('#cartBody').innerHTML = '<p>Thaila khaali hai. Nani kehti: "Pehle ek laddoo toh rakh lo."</p><a class="btn btn-p" href="#/shop" data-close>Shop dekho</a>'; return; }
    var note = gift && $('#giftNote') ? $('#giftNote').value : '';
    var h = ids.map(function (id) {
      var p = byId(id); tot += p.price * cart[id];
      return '<div class="ci"><div class="e">' + p.e + '</div><div class="n">' + p.name + '<small>' + rupee(p.price) + ' · ' + p.unit + '</small></div><div class="qty"><button data-dec="' + id + '" aria-label="Kam karo">−</button><b>' + cart[id] + '</b><button data-inc="' + id + '" aria-label="Badhao">+</button></div></div>';
    }).join('');
    $('#cartBody').innerHTML = h +
      '<label class="toggle" style="margin-top:14px"><input type="checkbox" id="giftChk"' + (gift ? ' checked' : '') + '><span>🎁 Yeh gift hai — chitthi saath bhejo</span></label>' +
      (gift ? '<textarea id="giftNote" style="margin-top:10px" placeholder="Beta, main aa nahi payi, par yeh laddoo meri taraf se roz ek khana..."></textarea>' : '') +
      '<div class="tot"><span>Kul</span><span>' + rupee(tot) + '</span></div><button class="btn btn-p" style="width:100%" data-checkout>Checkout karo</button><p class="note" style="margin-top:10px">Prototype: koi asli payment nahi hoga.</p>';
    if (gift) $('#giftNote').value = note;
  }
  function add(id, n) { cart[id] = (cart[id] || 0) + (n || 1); drawCart(); toast('🧺 ' + byId(id).name + ' thaile mein aa gaya'); }
  function openCart() { drawCart(); $('#cartModal').hidden = false; $('#cartModal .x').focus(); }

  /* ---------- router ---------- */
  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    var r = parts[0] || 'home';
    if (!pages[r]) r = 'home';
    $('#app').innerHTML = '<div class="page">' + pages[r](parts[1]) + '</div>';
    var key = r === 'p' ? 'shop' : r;
    document.querySelectorAll('.links a').forEach(function (a) { var on = a.dataset.r === key; a.classList.toggle('active', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    $('#links').classList.remove('open'); $('#burger').setAttribute('aria-expanded', 'false');
    if (pages[r].after) pages[r].after();
    window.scrollTo(0, 0);
  }

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    if (e.target.id === 'cartModal') { $('#cartModal').hidden = true; return; }
    var t = e.target.closest('[data-add],[data-addq],[data-buy],[data-q],[data-toast],[data-close],[data-inc],[data-dec],[data-checkout],#burger,#cartBtn');
    if (!t) return;
    var d = t.dataset;
    if (t.id === 'burger') { var o = $('#links').classList.toggle('open'); t.setAttribute('aria-expanded', o); return; }
    if (t.id === 'cartBtn') { openCart(); return; }
    if (d.add) { add(d.add); return; }
    if (d.q) { var q = $('#pq'); q.textContent = Math.max(1, Math.min(10, +q.textContent + +d.q)); return; }
    if (d.addq) { add(d.addq, +$('#pq').textContent); return; }
    if (d.buy) { add(d.buy, +$('#pq').textContent); openCart(); return; }
    if (d.inc) { cart[d.inc]++; drawCart(); return; }
    if (d.dec) { if (--cart[d.dec] <= 0) delete cart[d.dec]; drawCart(); return; }
    if ('checkout' in d) { var g = gift; cart = {}; gift = false; drawCart(); $('#cartModal').hidden = true; toast('🙏 Shukriya!' + (g ? ' Chitthi dabbe ke saath jaayegi.' : '') + ' Yeh prototype hai — koi order ya payment nahi hua.'); return; }
    if ('close' in d) { $('#cartModal').hidden = true; return; }
    if (d.toast) { e.preventDefault(); toast(d.toast); }
  });
  document.addEventListener('change', function (e) { if (e.target.id === 'giftChk') { gift = e.target.checked; drawCart(); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') $('#cartModal').hidden = true; });
  window.addEventListener('hashchange', route);

  $('#footHills').innerHTML = hills('transparent', '#E8D5BC', '#7D8450', '#3A2A1E');
  drawCart(); route();
})();
