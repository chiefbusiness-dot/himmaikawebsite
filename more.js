/* 40-Day Plan, Gift a 40, Nutritionist and Quiz pages */
window.HM_MORE = function (pages, x) {
  var $ = x.$, rupee = x.rupee, toast = x.toast, byId = x.byId, endCta = x.endCta;
  var PLANS = [
    { p: byId('p10'), name: 'Pehle 10 Din', items: ['Phase 1 ka poora khana (kheer, khichdi, sachets, doodh mix)', 'Din-ba-din guide card', 'WhatsApp Nani (khane ke sawaal)'] },
    { p: byId('p40'), name: 'Poore 40 Din', pop: true, items: ['Teeno phase, saare 10 products', '250ml Badri cow ghee jar', 'Due-date se auto-scheduling, 3 taaza shipments', 'Har batch ki lab-report QR (pending)', 'WhatsApp Nani'] },
    { p: byId('pn'), name: 'Nani+', items: ['Poora 40-din plan', '2 dietitian calls + 1 lactation-consultant call', 'Jain / kam-meetha customisation', 'Priority support'] }
  ];
  function ph(days, name, why, items) {
    return '<article class="card ph"><div class="days">' + days + '</div><h3>' + name + '</h3><p class="note">' + why + '</p><ul>' + items.map(function (i) { return '<li><a href="#/p/' + i + '">' + byId(i).name + '</a></li>'; }).join('') + '</ul></article>';
  }

  pages.plan = function () {
    return '<section><div class="wrap"><span class="kicker">40-Day Plan</span>' +
      '<p class="pain">Aaj kya banega, kal kya — yeh sochne ki taaqat abhi kisi mein nahi.</p>' +
      '<h1>Aap aaram karo. <em>40 din ka menu tay hai.</em></h1>' +
      '<p class="lede">Teen phase, teen shipment — taaki har cheez taaza pahunche aur sahi waqt pe. Pehle halka, phir taaqat, phir nayi routine.</p>' +
      '<div class="tl" style="margin-top:28px">' +
      ph('Din 1–10', 'Halka aur garam', 'Sharir abhi sambhal raha hai. C-section ho ya normal, pet ko aaram chahiye.', ['kheer', 'khichdi', 'paani', 'doodh']) +
      ph('Din 11–25', 'Taaqat', 'Bhookh laut aayi hai, raatein lambi hain. Ab bhaari, bharpoor khana.', ['gond', 'panjiri', 'gahat', 'mandua']) +
      ph('Din 26–40', 'Nayi routine', 'Mehmaan chale gaye, ab aap aur baby. Jo haath badhao, wahi mil jaaye.', ['methi', 'makhana']) +
      '</div></div></section>' +
      '<section class="alt"><div class="wrap"><div class="center"><h2>Apna plan chuno</h2><p class="lede">Teeno mein WhatsApp Nani saath hai — khane ke har sawaal ke liye.</p></div>' +
      '<div class="grid g3" style="margin-top:34px">' + PLANS.map(function (pl) {
        return '<article class="card plan' + (pl.pop ? ' pop' : '') + '">' + (pl.pop ? '<span class="badge">Sabse zyada liya jaata hai <span style="opacity:.8">· prototype label</span></span>' : '') +
          '<h3>' + pl.name + '</h3><div class="amt">' + rupee(pl.p.price) + '</div><p class="note">' + pl.p.line + '</p><ul>' + pl.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>' +
          '<button class="btn ' + (pl.pop ? 'btn-p' : 'btn-g') + '" data-add="' + pl.p.id + '">Yeh plan lo</button></article>';
      }).join('') + '</div>' +
      '<div class="honest" style="margin-top:26px"><div class="ic">📅</div><p><strong>7th month mein book karo, shipping baby aane pe shuru.</strong> Due date bata do — pehla dabba delivery ke aas-paas niklega. Baby jaldi ya der se aaye toh ek WhatsApp se date badal jaayegi.</p></div>' +
      '</div></section>' + endCta;
  };

  pages.gift = function () {
    return '<section><div class="wrap"><span class="kicker">Gift a 40</span>' +
      '<p class="pain">Aap wahan nahi ho sakte. Par aapka khana pahunch sakta hai.</p>' +
      '<h1>Door se bhi <em>maika bhejo</em></h1>' +
      '<p class="lede">Beti, behen, bhabhi, dost, ya team ki colleague — uske 40 din aapke naam se. Aapki chitthi har dabbe mein.</p>' +
      '<div class="two" style="margin-top:28px"><form class="card form" id="giftForm" novalidate>' +
      '<div><label for="gName">Kiske liye?</label><input id="gName" type="text" placeholder="Jaise: Meri beti Ananya" autocomplete="off"></div>' +
      '<div><label for="gCity">Kaun sa shehar?</label><input id="gCity" type="text" placeholder="Jaise: Bengaluru" autocomplete="off"></div>' +
      '<div><label for="gDate">Due date (ya delivery ki date)</label><input id="gDate" type="date"></div>' +
      '<div><span class="lab">Kaun sa plan?</span><div class="chips" data-chips="gPlan">' + PLANS.map(function (pl, i) { return '<button type="button" aria-pressed="' + (i === 1) + '" data-v="' + pl.name + '">' + pl.name + ' · ' + rupee(pl.p.price) + '</button>'; }).join('') + '</div></div>' +
      '<div><label for="gMsg">Chitthi mein kya likhein?</label><textarea id="gMsg" placeholder="Beta, main aa nahi payi, par yeh laddoo meri taraf se roz ek khana..."></textarea></div>' +
      '<label class="toggle"><input type="checkbox" id="gChip"><span>Chip-in: family ya office mil ke pay kare<br><small class="note">Ek link banega, sab apna hissa daal denge.</small></span></label>' +
      '<button class="btn btn-p" type="submit">Gift schedule karo</button><p class="note">Prototype: koi payment nahi hoga, koi jaankari kahin save nahi hoti.</p></form>' +
      '<div class="stack">' +
      '<div class="card warm"><h3>📦 Teen dabbe, teen baar</h3><p>Din 1, din 11 aur din 26 ke aas-paas — taaki sab taaza pahunche aur sahi phase ka khana sahi waqt pe mile.</p></div>' +
      '<div class="card"><h3>🏢 HR aur office teams</h3><p>Maternity gift jo sach mein kaam aaye. GST invoice, bulk orders, aur company ki taraf se card.</p><button class="btn btn-g btn-sm" data-toast="Corporate enquiry note kar li — prototype mein asli email nahi jaata 💼">Corporate enquiry</button></div>' +
      '<div class="card"><h3>✈️ Toronto se Dehradun tak</h3><p>NRI bhai, mausi, saheli — aap bahar se order karo, delivery India mein. Card aapke naam ka.</p><span class="tag-pend">international payment — prototype</span></div>' +
      '</div></div></div></section>';
  };

  pages.nutritionist = function () {
    return '<section><div class="wrap"><span class="kicker">Nutritionist</span>' +
      '<p class="pain">Saas kuch kehti hain, mummy kuch, aur Instagram kuch aur.</p>' +
      '<h1>Ek insaan, jo sirf <em>aapki thali</em> dekhe</h1>' +
      '<p class="lede">20 minute ki call, aapki bhasha mein. Aapka khana, aapki rasoi, aapki haalat ke hisaab se.</p>' +
      '<div class="two" style="margin-top:28px"><form class="card form" id="nutForm" novalidate>' +
      '<div><span class="lab">Kis se baat karni hai?</span><div class="chips" data-chips="nExp"><button type="button" aria-pressed="true" data-v="Dietitian">Dietitian</button><button type="button" aria-pressed="false" data-v="Lactation consultant">Lactation consultant</button></div></div>' +
      '<div><label for="nSit">Abhi aap kahan ho?</label><select id="nSit"><option>Pregnant hoon — 7th month ya aage</option><option>Delivery ke din 1–10</option><option>Delivery ke din 11–40</option><option>40 din ke baad</option></select></div>' +
      '<div><span class="lab">Kis bhasha mein?</span><div class="chips" data-chips="nLang"><button type="button" aria-pressed="true" data-v="Hindi">Hindi</button><button type="button" aria-pressed="false" data-v="English">English</button><button type="button" aria-pressed="false" data-v="Garhwali-Kumaoni">Garhwali / Kumaoni</button></div></div>' +
      '<div><label for="nWa">WhatsApp number</label><input id="nWa" type="tel" inputmode="numeric" placeholder="10 ank ka number" autocomplete="off"></div>' +
      '<button class="btn btn-p" type="submit">Slot book karo — ₹499</button><p class="note">Nani+ plan mein yeh calls shaamil hain. Prototype: koi payment ya booking asli nahi hai.</p></form>' +
      '<div class="stack">' +
      '<div class="card warm"><h3>💬 WhatsApp Nani kya hai?</h3><p>Khane ke chhote sawaalon ke liye: "Aaj kaun sa laddoo?", "Kheer mein doodh ya paani?", "Khichdi kit kaise banegi?" Sirf khane ki baatein.</p></div>' +
      '<div class="card" style="border:1.5px dashed var(--terra)"><h3>Jo hum NAHI karte</h3><ul class="tick"><li>Koi diagnosis nahi</li><li>Koi medical salah ya dawai nahi</li><li>Doodh badhane ka koi vaada nahi</li></ul><p class="note">Bukhaar, zyada bleeding, taankon mein dard, ya mann bahut bhaari ho — seedha apne doctor ko call karein.</p></div>' +
      '<div class="card"><h3>🎁 Har Nani+ mein</h3><p>2 dietitian calls aur 1 lactation-consultant call pehle se shaamil. Alag se book karne ki zaroorat nahi.</p><a class="btn btn-g btn-sm" href="#/p/pn">Nani+ dekho</a></div>' +
      '</div></div></div></section>';
  };

  /* quiz */
  var QZ = [
    { k: 'del', q: 'Delivery kaisi hui?', sub: 'Koi galat jawab nahi hai.', o: [['normal', '🌼', 'Normal'], ['csec', '🩹', 'C-section'], ['preg', '🤰', 'Abhi pregnant hoon']] },
    { k: 'diet', q: 'Khaan-paan kaisa hai?', sub: 'Humare saare products shakahari hain.', o: [['veg', '🥗', 'Sab chalta hai (veg)'], ['jain', '🙏', 'Jain'], ['low', '🍃', 'Kam meetha chahiye']] },
    { k: 'ghar', q: 'Ghar ka khana kaisa hai?', sub: 'Taaki swaad apna-sa lage.', o: [['pahadi', '🏔️', 'Pahadi'], ['north', '🫓', 'Punjabi / UP / North'], ['other', '🍛', 'Koi aur']] },
    { k: 'rasoi', q: 'Rasoi mein kaun hai?', sub: 'Sach batao, hum judge nahi karte.', o: [['none', '🫥', 'Koi nahi'], ['maid', '🧹', 'Maid hai, par guidance nahi'], ['saas', '👵', 'Saas / maa hain, par aasani chahiye']] }
  ];
  var qs = { step: 0, a: {} };
  pages.quiz = function () {
    qs = { step: 0, a: {} };
    return '<section><div class="wrap"><div class="center"><span class="kicker">Meri Thali Banao</span><p class="pain">Chaar sawaal. Ek haath se bhi ho jaayega.</p><h1>2 minute mein <em>aapki thali</em></h1></div><div class="quiz card" id="quiz" style="margin-top:26px"></div></div></section>';
  };
  pages.quiz.after = drawQuiz;
  function drawQuiz() {
    var el = $('#quiz'); if (!el) return;
    var dots = '<div class="dots" aria-label="Sawaal ' + Math.min(qs.step + 1, 4) + ' of 4">' + QZ.map(function (_, i) { return '<i class="' + (i <= qs.step ? 'on' : '') + '"></i>'; }).join('') + '</div>';
    if (qs.step < QZ.length) {
      var q = QZ[qs.step];
      el.innerHTML = dots + '<div class="q"><span class="kicker">Sawaal ' + (qs.step + 1) + ' / 4</span><h2>' + q.q + '</h2><p class="note">' + q.sub + '</p><div class="opts">' +
        q.o.map(function (o) { return '<button data-qz="' + o[0] + '"><span>' + o[1] + '</span>' + o[2] + '</button>'; }).join('') + '</div>' +
        (qs.step ? '<button class="btn btn-g btn-sm" data-qback style="margin-top:18px">← Peeche</button>' : '') + '</div>';
      return;
    }
    var a = qs.a, tips = [], plan, picks;
    if (a.del === 'csec') tips.push('C-section hua hai: pehle 10 din sirf naram aur garam — kheer, khichdi, soup. Gond laddoo din 12 ke baad, aur doctor ki salah ke hisaab se.');
    if (a.del === 'normal') tips.push('Pehle 10 din halka aur garam; din 11 se gond laddoo aur panjiri shuru.');
    if (a.del === 'preg') tips.push('Abhi book kar lo, shipping due date ke aas-paas shuru hogi. Baby jaldi aaye toh ek WhatsApp se date badal jaayegi.');
    if (a.diet === 'low') tips.push('Kam meetha: dates waale laddoo aadhi matra mein, aur namkeen zyada — gahat soup, khichdi, makhana. Diabetes ho toh pehle doctor se poochhein.');
    if (a.diet === 'jain') tips.push('Jain: aapke dabbe ki ingredient list aapke hisaab se adjust hogi — yeh Nani+ customisation ka hissa hai.');
    if (a.ghar === 'pahadi') tips.push('Pahadi swaad: mandua, jhangora aur gahat aapko ghar ki yaad dilayenge.');
    if (a.ghar === 'north') tips.push('North ka swaad: panjiri aur gond laddoo bilkul apne lagenge; jhangora kheer chawal ki kheer jaisi hi banti hai.');
    if (a.ghar === 'other') tips.push('Naya swaad: khichdi kit aur makhana se shuru karo — sabko pasand aate hain.');
    if (a.rasoi === 'none') tips.push('Rasoi mein koi nahi: sab kuch ready-to-eat ya 15 minute waala. WhatsApp Nani har sawaal ke liye saath hai.');
    if (a.rasoi === 'maid') tips.push('Maid ke liye: har kit ke saath Hindi mein step-by-step card, taaki unhe samjhana na pade.');
    if (a.rasoi === 'saas') tips.push('Saas / maa ke liye: mehnat waale laddoo aur panjiri hum bhej denge; woh bas garam roti-sabzi dekh lein.');
    plan = a.diet === 'jain' ? 'pn' : (a.rasoi === 'saas' && a.del === 'normal') ? 'p10' : 'p40';
    picks = a.del === 'csec' ? ['kheer', 'khichdi', 'gahat'] : a.diet === 'low' ? ['gahat', 'khichdi', 'makhana'] : ['gond', 'panjiri', 'kheer'];
    var p = byId(plan);
    el.innerHTML = dots + '<div class="q result"><span class="kicker">Nani ka faisla</span><h2>' + (a.del === 'preg' ? 'Aapki thali taiyaar hai — baby ke aane se pehle hi' : 'Yeh rahi aapki thali') + '</h2><ul class="tick">' + tips.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' +
      '<div class="card warm"><span class="chip hero-t">Aapke liye</span><h3 style="margin-top:8px">' + p.name + ' · ' + rupee(p.price) + '</h3><p class="note">' + p.line + '</p><button class="btn btn-p btn-sm" data-add="' + p.id + '">Thaile mein daalo</button></div>' +
      '<p style="margin:16px 0 8px"><strong>Ya inse shuru karo:</strong> ' + picks.map(function (i) { return '<a href="#/p/' + i + '">' + byId(i).name + '</a>'; }).join(' · ') + '</p>' +
      '<div class="row" style="margin-top:14px"><a class="btn btn-g" href="#/plan">Plan dekho</a><button class="btn btn-g" data-qre>Dobara karo</button></div>' +
      '<p class="note" style="margin-top:14px">Yeh khane ka sujhaav hai, medical salah nahi.</p></div>';
  }

  function chipVal(name) { var b = $('[data-chips="' + name + '"] [aria-pressed="true"]'); return b ? b.dataset.v : ''; }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-qz],[data-qback],[data-qre],.chips button');
    if (!t) return;
    if (t.dataset.qz) { qs.a[QZ[qs.step].k] = t.dataset.qz; qs.step++; drawQuiz(); }
    else if ('qback' in t.dataset) { qs.step--; drawQuiz(); }
    else if ('qre' in t.dataset) { qs = { step: 0, a: {} }; drawQuiz(); }
    else t.parentElement.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b === t); });
  });
  document.addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.target.id === 'giftForm') {
      var name = $('#gName').value.trim(), d = $('#gDate').value;
      if (!name) { toast('Pehle batao, gift kiske liye hai? 💛'); $('#gName').focus(); return; }
      if (!d) { toast('Due date chun lo — usi ke hisaab se dabbe niklenge 📅'); $('#gDate').focus(); return; }
      var nice = new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
      toast('🎁 ' + name + ' ke liye ' + chipVal('gPlan') + ' schedule ho gaya — pehla dabba ' + nice + ' ke aas-paas.' + ($('#gChip').checked ? ' Chip-in link ban gaya.' : '') + ' (Prototype)');
    }
    if (e.target.id === 'nutForm') {
      var w = $('#nWa').value.replace(/\D/g, '');
      if (w.length !== 10) { toast('10 ank ka WhatsApp number daalo 📱'); $('#nWa').focus(); return; }
      toast('✅ ' + chipVal('nExp') + ' ke saath ' + chipVal('nLang') + ' mein slot note ho gaya. (Prototype — koi booking ya payment nahi hua)');
    }
  });
};
