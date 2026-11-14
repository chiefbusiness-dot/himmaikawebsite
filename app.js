/* Himmaika D2C storefront prototype — no backend. Cart, subscription, checkout and chat are mocked. */
(function () {
  'use strict';
  var art = window.HM_ART;

  /* ---------- catalogue ---------- */
  var CATS = [
    { id: 'laddoo', name: 'Laddoo', art: 'laddoo', line: 'Roz ka ek, nani ke haath jaisa' },
    { id: 'meals', name: 'Meals & Mixes', art: 'bowl', line: 'Kheer, khichdi, soup, panjiri' },
    { id: 'sips', name: 'Drinks & Snacks', art: 'cup', line: 'Garam ghoont aur ek haath ka snack' },
    { id: 'combo', name: 'Bundles', art: 'gift', line: 'Week 1 se 40 din tak ke dabbe' }
  ];
  var NEEDS = [
    { id: 'taaqat', name: 'Taaqat aur energy', art: 'sun' },
    { id: 'calcium', name: 'Calcium-rich', art: 'millet' },
    { id: 'pet', name: 'Pet ke liye halka', art: 'leaf' },
    { id: 'iron', name: 'Iron-rich ingredients', art: 'seeds' },
    { id: 'raat', name: 'Raat ki rasam', art: 'moon' },
    { id: 'snack', name: 'Ek haath ka snack', art: 'hand' }
  ];
  var GHEE = ['pot', 'Organic Badri cow ghee', 'Pahadi Badri gaay ka ghee — humare parivaar ki supply chain se. Swaad aur bharose ke liye.', true];
  var P = [
    { id: 'gond', cat: 'laddoo', art: 'laddoo', badge: "Nani's Pick", name: 'Gond Laddoo', price: 649, unit: '12 pcs · 300g', low: true, best: true, needs: ['taaqat', 'snack'],
      short: 'Ek laddoo, poori subah ki taaqat — jab khana banane ka time hi na mile.',
      moment: 'Subah se kuch nahi khaya, aur baby abhi-abhi soya hai.',
      ben: [['sun', 'Chhota laddoo, bharpoor energy', 'Feeding maa ko roz ~530–600 kcal extra chahiye. Do bite mein kaafi kuch.'], ['nut', 'Nuts waala protein', 'Badam aur kaju — marammat ke dinon ka saamaan.'], ['hand', 'Ek haath se', 'Na chammach, na plate. Baby god mein ho tab bhi.'], ['heart', 'Peedhiyon ki recipe', 'Jaape mein gond ka laddoo — har ghar ki parampara.']],
      ing: [['drop', 'Gond (edible gum)', 'Jaape ka sabse paramparik ingredient, ghee mein phula kar.'], ['nut', 'Badam aur kaju', 'Protein aur achhi chiknai.'], ['seeds', 'Khajoor (dates)', 'Meetha sirf dates se — refined sugar nahi.'], ['spoon', 'Sonth aur elaichi', 'Garam taaseer, nani ke hisaab se.'], GHEE],
      list: 'Gond, gehun ka atta, organic Badri cow ghee, badam, kaju, khajoor (dates), sonth, elaichi.',
      when: [['sun', 'Subah', 'Garam doodh ke saath 1 laddoo'], ['clock', 'Feeding ke beech', 'Jab achanak bhookh lage']],
      how: 'Roz 1 laddoo. C-section ke baad bhaari cheezein kab shuru karein, doctor se poochh lein (zyadatar din 12 ke baad).',
      note: 'Gond laddoo mein kanjoosi nahi chalti — na ghee mein, na pyaar mein. Roz ek, subah-subah. Baaki main dekh loongi.' },
    { id: 'mandua', cat: 'laddoo', art: 'millet', badge: 'Calcium-rich', name: 'Mandua–Til Laddoo', price: 499, unit: '12 pcs', low: true, best: true, needs: ['calcium', 'snack'],
      short: 'Finger millet aur til — feeding ke dinon ke calcium hisaab ka meetha saathi.',
      moment: 'Kamar mein dard hai, aur doodh ka glass roz thanda ho jaata hai.',
      ben: [['millet', 'Calcium-rich mandua', 'Feeding maa ki zaroorat 1,200 mg calcium/din (ICMR-NIN). Mandua anaajon mein calcium ke liye jaana jaata hai.'], ['seeds', 'Til ki taaqat', 'Safed til — calcium aur iron waala purana beej.'], ['leaf', 'Fibre waala anaaj', 'Millet ka laddoo, maida nahi.'], ['hand', 'Ek haath se', 'Doodh ka glass thanda ho jaaye, laddoo nahi.']],
      ing: [['millet', 'Mandua (finger millet)', 'Pahad ka calcium-rich anaaj, Garhwal-Kumaon se.'], ['seeds', 'Safed til', 'Calcium aur iron waale beej.'], ['seeds', 'Khajoor aur gud', 'Meetha bina refined sugar.'], ['spoon', 'Elaichi', 'Bas khushboo ke liye.'], GHEE],
      list: 'Mandua (finger millet) atta, safed til, organic Badri cow ghee, khajoor (dates), gud, elaichi.',
      when: [['clock', 'Din mein kabhi bhi', '1–2 laddoo, jab haath khaali ho'], ['moon', 'Raat ki feeding', 'Bistar ke paas ka dabba']],
      how: 'Din mein 1–2 laddoo.',
      note: 'Hamare pahad mein mandua ki roti khaakar hi aurtein kheton mein jaati thi. Ab tum laddoo kha lo — wahi taaqat, kam mehnat.' },
    { id: 'methi', cat: 'laddoo', art: 'laddoo', badge: 'Kadwahat ke bina', name: 'Mild Methi–Date Laddoo', price: 549, unit: '12 pcs', low: true, needs: ['taaqat'],
      short: 'Methi ki parampara, bina kadwahat ke — dates se halka meetha.',
      moment: 'Mummy kehti hain methi ka laddoo zaroori hai. Aapko uski kadwahat yaad hai.',
      ben: [['heart', 'Parampara, naye swaad mein', 'Jaape ka methi laddoo — itna halka ki roz kha sako.'], ['seeds', 'Dates se meetha', 'Refined sugar nahi.'], ['nut', 'Badam ke saath', 'Thoda protein, thodi chiknai.'], ['hand', 'Ek haath se', 'Chhota size, aasaan bite.']],
      ing: [['seeds', 'Methi dana (halka bhuna)', 'Bhun kar kadwahat kam ki gayi.'], ['seeds', 'Khajoor (dates)', 'Sirf yahi meetha.'], ['nut', 'Badam', 'Crunch aur protein.'], ['leaf', 'Saunf', 'Taazgi ke liye.'], GHEE],
      list: 'Gehun ka atta, methi dana (bhuna), organic Badri cow ghee, khajoor (dates), badam, saunf.',
      when: [['sun', 'Subah', '1 laddoo, garam paani ke saath']],
      how: 'Roz 1 laddoo. Methi kuch logon ko suit nahi karti — pehle aadha kha kar dekhein. Hum is laddoo se doodh ka koi vaada nahi karte.',
      note: 'Methi ka naam sunte hi muh bana leti thi na? Isme kadwahat maine nikaal di hai. Ab koi bahana nahi.' },
    { id: 'panjiri', cat: 'meals', art: 'jar', badge: 'Iron-rich ingredients', name: 'Pahadi Panjiri', price: 549, unit: '400g jar', low: true, best: true, needs: ['iron', 'taaqat', 'snack'],
      short: 'Bhuna anaaj, makhana aur nuts — raat 3 baje ki bhookh ka chammach-bhar jawab.',
      moment: 'Raat ke 3 baje feeding ke baad pet mein choohe daud rahe hain.',
      ben: [['seeds', 'Iron-containing ingredients', '57% Indian mahilaon mein khoon ki kami hai (NFHS-5). Nani ki panjiri isi liye thi.'], ['millet', 'Bhuna anaaj', 'Gehun aur mandua, dheemi aanch par.'], ['nut', 'Makhana aur magaz', 'Halka, crunchy, bharpoor.'], ['spoon', 'Do tarah se', 'Seedha jar se, ya garam doodh mein.']],
      ing: [['millet', 'Gehun aur mandua atta', 'Dheere-dheere bhuna hua.'], ['nut', 'Makhana, badam, kaju, magaz', 'Nuts aur beej ka mel.'], ['seeds', 'Gud', 'Paramparik meetha, refined sugar nahi.'], ['spoon', 'Sonth', 'Garam taaseer.'], GHEE],
      list: 'Gehun ka atta, mandua atta, makhana, badam, kaju, magaz, organic Badri cow ghee, gud, sonth.',
      when: [['moon', 'Raat ki feeding ke baad', '2 bade chammach, seedha jar se'], ['sun', 'Subah', 'Garam doodh mein ghol kar']],
      how: '2 bade chammach, seedha jar se ya garam doodh mein ghol kar.',
      note: 'Panjiri ke bina jaapa kaisa? Jar bistar ke paas rakho. Raat ko jab bhookh lage, kisi ko uthaane ki zaroorat nahi.' },
    { id: 'kheer', cat: 'meals', art: 'bowl', badge: 'Week 1 · C-section friendly', name: 'Jhangora Kheer Mix', price: 299, unit: '4 servings', low: true, best: true, needs: ['pet'],
      short: 'Pehle hafte ka naram, garam khana — halka, pachne mein aasaan, fibre waala.',
      moment: 'Pehla hafta hai. Kuch bhaari khane ka mann nahi, aur pet bhi saaf nahi ho raha.',
      ben: [['leaf', 'High-fibre jhangora', 'Delivery ke baad kabz aam hai. Fibre waala anaaj nani ka purana tareeka hai.'], ['bowl', 'Naram aur garam', 'Pehle 10 din ke liye — C-section ho ya normal.'], ['clock', '10 minute', 'Ek sachet, ek cup doodh, bas.'], ['seeds', 'Dates se meetha', 'Refined sugar nahi.']],
      ing: [['millet', 'Jhangora (barnyard millet)', 'Pahad ka high-fibre, halka anaaj.'], ['seeds', 'Khajoor powder', 'Halka meetha.'], ['nut', 'Makhana', 'Naram crunch.'], ['spoon', 'Elaichi, kesar', 'Khushboo.']],
      list: 'Jhangora (barnyard millet), khajoor powder, makhana, elaichi, kesar.',
      when: [['sun', 'Dopahar', 'Halka lunch'], ['moon', 'Raat', 'Garam kheer, sone se pehle']],
      how: 'Ek sachet + 1 cup doodh ya paani, 10 minute dheemi aanch par.',
      note: 'Pehle das din pet ko aaram do. Jhangore ki kheer khaao, garam paani piyo. Bhaari cheezein baad mein.' },
    { id: 'khichdi', cat: 'meals', art: 'bowl', badge: '15-minute meal', name: 'Moong–Jhangora Khichdi Kit', price: 399, unit: '4 meals', needs: ['pet', 'taaqat'],
      short: '15 minute mein poora, garam khana — un dinon ke liye jab khade hone ki himmat na ho.',
      moment: 'Dopahar ke 3 baj gaye. Aapne abhi tak khana nahi khaya.',
      ben: [['clock', '15 minute, 2 seeti', 'Pati bhi bana le.'], ['leaf', 'Pet ke liye halka', 'Moong aur millet — paramparik halka khana.'], ['nut', 'Daal waala protein', 'Moong dal se.'], ['pot', 'Ghee sachet saath', 'Upar se ek chammach.']],
      ing: [['seeds', 'Moong dal', 'Halki, pachne mein aasaan daal.'], ['millet', 'Jhangora', 'Chawal ki jagah fibre waala millet.'], ['spoon', 'Jeera, haldi, hing', 'Ghar jaisa tadka.'], ['mountain', 'Pahadi namak', 'Pahad ka swaad.'], GHEE],
      list: 'Moong dal, jhangora, jeera, haldi, hing, pahadi namak; alag se organic Badri cow ghee sachet.',
      when: [['sun', 'Lunch ya dinner', 'Ek poora meal']],
      how: 'Cooker mein kit + 3 cup paani, 2 seeti. Upar se ghee sachet.',
      note: 'Khana chhodna nahi hai, bas. Khichdi ka packet rakha hai — damaad ji se bolo, do seeti laga dein.' },
    { id: 'gahat', cat: 'meals', art: 'cup', badge: 'Sirf Himmaika', name: 'Gahat Soup Mix', price: 349, unit: '6 servings', needs: ['taaqat', 'pet'],
      short: 'Pahadi horse gram ka garam namkeen soup — meethe se break, protein waali raahat.',
      moment: 'Meetha kha-kha ke mann bhar gaya hai. Kuch namkeen, kuch garam chahiye.',
      ben: [['nut', 'Protein waali daal', 'Gahat — pahad ki sardiyon ki daal.'], ['cup', 'Mug mein, 5 minute', 'Chammach ki zaroorat nahi.'], ['leaf', 'Namkeen break', 'Har cheez meethi nahi honi chahiye.'], ['mountain', 'Sirf pahad mein milta', 'Shehar mein gahat dhoondhna mushkil hai.']],
      ing: [['seeds', 'Gahat (horse gram)', 'Uttarakhand ki paramparik daal.'], ['spoon', 'Jeera, lehsun, kali mirch', 'Garam masala.'], ['leaf', 'Jakhiya', 'Pahadi tadke ka beej.'], ['mountain', 'Pahadi namak', 'Pisyun loon.']],
      list: 'Gahat (horse gram) powder, jeera, lehsun, kali mirch, pahadi namak, jakhiya.',
      when: [['clock', 'Shaam', '1 mug, garam-garam']],
      how: '2 chammach mix + 1 cup garam paani, 5 minute ubaal lo.',
      note: 'Gahat ki daal hamare yahan sardiyon mein banti hai. Garam-garam piyo, haath mein mug pakad ke.' },
    { id: 'paani', cat: 'sips', art: 'sachet', badge: 'Roz ki aadat', name: 'Ajwain–Saunf–Jeera Water', price: 249, unit: '30 sachets', needs: ['pet'],
      short: 'Nani waala garam paani, sachet mein — thermos bharo, din bhar ghoont lo.',
      moment: 'Feeding ke waqt gala sookhta hai, aur paani ka glass hamesha doosre kamre mein hota hai.',
      ben: [['drop', 'Paani peene ki aadat', 'Feeding ke dinon mein pyaas zyada lagti hai.'], ['leaf', 'Teen beej, bas', 'Ajwain, saunf, jeera — kuch aur nahi.'], ['clock', '1 sachet = 1 litre', 'Subah ek baar, din bhar ka.'], ['heart', 'Nani ka niyam', '"Thanda paani nahi, ajwain ka paani."']],
      ing: [['seeds', 'Ajwain', 'Jaape ka sabse purana saathi.'], ['leaf', 'Saunf', 'Halki meethi khushboo.'], ['seeds', 'Jeera', 'Rasoi ka roz ka beej.']],
      list: 'Ajwain, saunf, jeera — bas.',
      when: [['sun', 'Subah', '1 sachet, thermos mein'], ['clock', 'Din bhar', 'Ghoont-ghoont']],
      how: '1 sachet, 1 litre ubalta paani, thermos mein. Din bhar ghoont-ghoont.',
      note: 'Paani kam piyogi toh main naraaz ho jaungi. Thermos bhar ke paas rakho.' },
    { id: 'doodh', cat: 'sips', art: 'cup', badge: 'Raat ke liye', name: 'Haldi–Saunth Doodh Mix', price: 399, unit: '200g', low: true, needs: ['raat'],
      short: 'Raat ka garam doodh — haldi, sonth, makhana aur nuts, din khatam karne ki rasam.',
      moment: 'Raat ke 11 baje. Baby so gaya, par aapki neend nahi aa rahi.',
      ben: [['moon', 'Raat ki rasam', 'Hormones ke utaar-chadhaav waale hafton mein ek garam, shaant aadat.'], ['spoon', 'Haldi aur sonth', 'Paramparik garam masale.'], ['nut', 'Makhana aur badam', 'Thoda bharpoor.'], ['clock', '1 chammach, 1 minute', 'Doodh garam karo, ghol do.']],
      ing: [['spoon', 'Haldi', 'Rasoi ki sabse jaani-pehchaani jadi.'], ['spoon', 'Sonth', 'Sookhi adrak.'], ['nut', 'Makhana, badam', 'Powder mein.'], ['seeds', 'Khajoor powder', 'Halka meetha.']],
      list: 'Haldi, sonth, makhana powder, badam, khajoor powder, kali mirch, elaichi.',
      when: [['moon', 'Sone se pehle', '1 cup garam doodh']],
      how: '1 chammach, 1 cup garam doodh mein. Sone se pehle.',
      note: 'Din kaisa bhi gaya ho, raat ko ek cup garam doodh. Phone rakh do, baby ko dekho, aur so jao.' },
    { id: 'makhana', cat: 'sips', art: 'jar', badge: 'Ek haath ka snack', name: 'Pahadi Namak Makhana', price: 299, unit: '100g', needs: ['snack'],
      short: 'Ghee-roasted makhana, pahadi namak ke saath — baby pakde-pakde, ek haath se.',
      moment: 'Baby god mein so gaya hai. Hilna mana hai, aur bhookh lagi hai.',
      ben: [['hand', 'Ek haath se', 'Jar khola, muthhi bhari.'], ['leaf', 'Halka snack', 'Bhuna, tala nahi.'], ['mountain', 'Pahadi namak', 'Pisyun loon ka swaad.'], ['moon', '3 baje ki bhookh', 'Bina rasoi jaaye.']],
      ing: [['nut', 'Makhana', 'Halka, crunchy.'], ['mountain', 'Pahadi pisyun loon', 'Sil-batte pe pisa masaaledaar namak.'], GHEE],
      list: 'Makhana, organic Badri cow ghee, pahadi pisyun loon.',
      when: [['clock', 'Kabhi bhi', 'Bistar ke paas ka jar']],
      how: 'Jar bistar ke paas rakho. Bas.',
      note: 'Chips nahi, makhana. Ek muthhi abhi, ek baad mein.' },
    { id: 'p10', cat: 'combo', art: 'gift', badge: 'Bundle · Week 1', name: 'Pehle 10 Din Box', price: 1499, mrp: 1596, unit: '4 products + guide card', needs: ['pet'],
      short: 'Hospital se ghar aate hi — pehle 10 din ka naram, garam khana ek dabbe mein.',
      moment: 'Hospital se ghar aaye ho, aur rasoi mein kya banega kisi ko nahi pata.',
      line: 'Sabse naazuk din, sabse naram khana — ek hi dabbe mein.',
      ben: [['bowl', 'Pehle 10 din ka menu', 'Kheer, khichdi, garam paani, raat ka doodh.'], ['calendar', 'Din-ba-din card', 'Sochna nahi padega.'], ['leaf', 'Pet ke liye halka', 'C-section ho ya normal.'], ['chat', 'WhatsApp Nani', 'Khane ke sawaalon ke liye.']],
      ing: [['bowl', 'Jhangora Kheer Mix', ''], ['bowl', 'Moong–Jhangora Khichdi Kit', ''], ['sachet', 'Ajwain–Saunf–Jeera Water', ''], ['cup', 'Haldi–Saunth Doodh Mix', '']],
      list: 'Jhangora Kheer Mix, Moong–Jhangora Khichdi Kit, Ajwain–Saunf–Jeera Water (30), Haldi–Saunth Doodh Mix, din-ba-din guide card.',
      when: [['calendar', 'Din 1–10', 'Card par likha hai kis din kya']],
      how: 'Dabbe ke andar ke card par likha hai kis din kya khana hai.',
      note: 'Pehle das din sirf do kaam: baby ko dekhna aur khana. Baaki is dabbe pe chhod do.' },
    { id: 'p40', cat: 'combo', art: 'calendar', badge: 'Bundle · 40 din', name: 'Poore 40 Din Box', price: 4999, mrp: 5594, unit: 'Saare 10 products + ghee jar', needs: ['taaqat'],
      short: 'Jaise nani 40 din rasoi sambhalti thi — saare 10 products, teen taaza shipments mein.',
      moment: 'Nani aa nahi sakti. Par unki poori rasoi aa sakti hai.',
      line: 'Jaise nani 40 din rasoi sambhalti thi — saare 10 products, teen taaza shipments mein.',
      ben: [['calendar', 'Teen phase', 'Pehle halka, phir taaqat, phir nayi routine.'], ['truck', 'Teen taaza shipments', 'Din 1, 11 aur 26 ke aas-paas.'], ['pot', '250ml ghee jar', 'Roti, khichdi, sab ke liye.'], ['chat', 'WhatsApp Nani', 'Poore 40 din saath.']],
      ing: [['bowl', 'Din 1–10: Halka aur garam', 'Kheer, khichdi, garam paani, doodh mix'], ['laddoo', 'Din 11–25: Taaqat', 'Gond laddoo, panjiri, gahat soup, mandua-til'], ['jar', 'Din 26–40: Nayi routine', 'Methi-date laddoo, makhana, refills']],
      list: 'Saare 10 products, 250ml organic Badri cow ghee jar, din-ba-din guide. Shipment din 1, 11 aur 26 ke aas-paas.',
      when: [['calendar', '7th month mein book karo', 'Shipping baby aane pe shuru']],
      how: 'Due date bata do; pehla dabba delivery ke aas-paas niklega.',
      note: 'Main wahan nahi aa sakti, par meri rasoi aa sakti hai. 40 din, teen dabbe, ek bhi din bhookhi mat rehna.' },
    { id: 'pn', cat: 'combo', art: 'heart', badge: 'Bundle · expert ke saath', name: 'Nani+ Box', price: 8999, unit: '40 Din Box + 3 expert calls', needs: [],
      short: 'Poora 40 din ka dabba, saath mein dietitian aur lactation consultant ki calls.',
      moment: 'Aap chahte ho koi poori zimmedari le le.',
      line: 'Poora 40 din ka dabba, saath mein dietitian aur lactation consultant ki calls.',
      ben: [['calendar', 'Poora 40 Din Box', 'Saare products, teen shipments.'], ['chat', '2 dietitian calls', 'Aapki thali, aapki bhasha mein.'], ['heart', '1 lactation call', 'Feeding ke sawaalon ke liye expert.'], ['leaf', 'Jain / kam meetha', 'Aapke hisaab se badlaav.']],
      ing: [['calendar', 'Poore 40 Din Box', ''], ['chat', '2 dietitian calls', ''], ['heart', '1 lactation-consultant call', ''], ['leaf', 'Jain / kam-meetha customisation', '']],
      list: 'Poore 40 Din Box, 2 dietitian calls, 1 lactation-consultant call, Jain / kam-meetha customisation, priority support.',
      when: [['calendar', 'Order ke baad', 'WhatsApp par call ka time tay hoga']],
      how: 'Order ke baad WhatsApp par call ka time tay hoga.',
      note: 'Khana main bhejungi, salah doctor-didi dengi. Tum bas aaram karo.' }
  ];
  P.forEach(function (p) { if (!p.line) p.line = p.short; p.e = ''; });
  var byId = function (id) { return P.filter(function (p) { return p.id === id; })[0]; };
  var PACKS = [{ n: 1, off: 0, l: '1 pack' }, { n: 2, off: 8, l: '2 packs' }, { n: 3, off: 12, l: '3 packs', tag: 'Best value' }];
  var SUB_OFF = 10, FREE_SHIP = 999;
  var cart = [], gift = false;

  /* ---------- helpers ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var rupee = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };
  function hills(top, a, b, c) {
    return '<svg viewBox="0 0 1440 150" preserveAspectRatio="none" aria-hidden="true"><rect width="1440" height="150" fill="' + top + '"/>' +
      '<path d="M0 150 L0 96 L120 52 L210 88 L330 30 L420 70 L470 48 L600 100 L720 42 L800 76 L900 22 L1010 82 L1110 50 L1230 96 L1330 58 L1440 92 L1440 150Z" fill="' + a + '"/>' +
      '<path d="M0 150 L0 118 Q180 78 360 112 T720 108 T1080 114 T1440 104 L1440 150Z" fill="' + b + '"/>' +
      '<path d="M0 150 L0 136 Q240 108 480 132 T960 130 T1440 128 L1440 150Z" fill="' + c + '"/></svg>';
  }
  function toast(msg) {
    var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
    var box = $('#toasts'); while (box.children.length >= 2) box.firstChild.remove(); box.appendChild(t);
    setTimeout(function () { t.classList.add('out'); setTimeout(function () { t.remove(); }, 320); }, 3200);
  }
  function src(label, check) { return '<span class="src' + (check ? ' chk' : '') + '">' + label + (check ? ' · figure confirm hona baaki' : '') + '</span>'; }
  function feats(p) {
    var f = [];
    if (p.low) f.push('No refined sugar');
    if (p.cat !== 'combo') f.push('Lab-tested batch'); else f.push('Save up to ' + Math.round((1 - p.price / (p.mrp || p.price)) * 100 || 0) + '%');
    f.push('Ek haath se');
    return '<ul class="feat">' + f.filter(function (x) { return x.indexOf('0%') < 0; }).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  }
  function card(p) {
    return '<article class="pc lift"><a class="pc-img tone-' + p.cat + '" href="#/p/' + p.id + '" aria-label="' + p.name + '">' + art(p.art, 'big') +
      '<span class="pc-badge">' + p.badge + '</span></a><div class="pc-body">' +
      '<h3><a href="#/p/' + p.id + '">' + p.name + '</a></h3><p class="pc-short">' + p.short + '</p>' + feats(p) +
      '<div class="pc-foot"><div class="price">' + rupee(p.price) + (p.mrp ? ' <s>' + rupee(p.mrp) + '</s>' : '') + '<small>' + p.unit + '</small></div>' +
      '<button class="btn btn-p btn-sm" data-add="' + p.id + '">Add</button></div>' +
      (p.cat !== 'combo' ? '<p class="pc-sub">' + art('repeat') + 'Subscribe karo, ' + SUB_OFF + '% bachao</p>' : '') + '</div></article>';
  }
  function grid(list, n) { return '<div class="grid g' + (n || 4) + ' pgrid">' + list.map(card).join('') + '</div>'; }
  function acc(h, body, open) { return '<details class="acc"' + (open ? ' open' : '') + '><summary>' + h + '</summary><div>' + body + '</div></details>'; }
  function head(kicker, h, link, label, pain) {
    return '<div class="head"><div><span class="kicker">' + kicker + '</span>' + (pain ? '<p class="pain">' + pain + '</p>' : '') + '<h2>' + h + '</h2></div>' + (link ? '<a class="btn btn-g btn-sm" href="' + link + '">' + label + ' →</a>' : '') + '</div>';
  }
  var endCta = '<section class="center"><div class="wrap"><p class="pain">Padh liya? Ab kuch kha lo.</p><h2>Nani ki rasoi, <em>ek click door</em></h2><div class="row"><a class="btn btn-p" href="#/shop">Shop karo</a><a class="btn btn-g" href="#/quiz">2-minute quiz</a></div></div></section>';
  var proofBand = '<div class="proofband"><div class="pb-item">' + art('shield') + '<div><strong>Certified organic ghee</strong><small>Organic certificate <span class="tag-pend">pending</span></small></div></div>' +
    '<div class="pb-item">' + art('flask') + '<div><strong>Har batch lab-tested</strong><small>Pesticides, heavy metals, milaavat</small></div></div>' +
    '<div class="pb-item">' + art('qr') + '<div><strong>QR scan karo, report dekho</strong><small>Har pack par <span class="tag-pend">pending</span></small></div></div>' +
    '<a class="btn btn-w btn-sm" href="#/proof">Lab reports dekho</a></div>';

  /* ---------- pages ---------- */
  var pages = {};
  var SLIDES = [
    { tone: 'ink', hook: true, k: 'Nayi maa ke liye · delivery ke baad', h: 'Baby ko doodh pilaate-pilaate, <em>maa khud khaali ho jaati hai.</em>', p: 'Delivery mein khoon jaata hai. Har din doodh ke saath maa ke sharir se calcium jaata hai. Aur khane ka time? Bilkul nahi. Himmaika nayi maa ke liye bana khana hai — nani ki jaape ki rasoi, saaf ingredients se.', stats: [['~210 mg', 'calcium roz doodh ke saath maa ke sharir se', 'Kovacs review'], ['57%', 'Indian mahilayein anaemic', 'NFHS-5'], ['+530–600', 'kcal roz extra chahiye', 'ICMR-NIN']], c: ['#/shop', 'Maa ke liye shop karo'], swipe: true },
    { tone: 'laddoo', n: '01 · Calcium', k: 'Jo doodh mein jaata hai', h: 'Har din <em>~210 mg calcium</em> doodh ke saath maa ke sharir se jaata hai.', p: 'Feeding maa ko roz 1,200 mg calcium chahiye. Mandua aur til — pahad ke do calcium-rich ingredients — ek laddoo mein.', src: 'ICMR-NIN 2020 · Kovacs review', prod: 'mandua', art: 'millet' },
    { tone: 'meals', n: '02 · Iron', k: 'Jo delivery mein gaya', h: '<em>57%</em> Indian mahilaon mein pehle se khoon ki kami hai.', p: 'Upar se delivery mein khoon jaata hai. Isliye nani ki panjiri mein bhuna anaaj, nuts aur beej hote the — iron-containing ingredients.', src: 'NFHS-5, 2019–21', prod: 'panjiri', art: 'seeds' },
    { tone: 'sips', n: '03 · Energy', k: 'Jo raaton mein jaata hai', h: 'Feeding maa ko roz <em>530–600 kcal extra</em> chahiye.', p: 'Ek aur insaan ka khana ban raha hai — aur raat ki neend bhi gayi. Gond laddoo: chhota, bharpoor, ek haath se.', src: 'ICMR-NIN 2020 · figure confirm hona baaki', prod: 'gond', art: 'sun' }
  ];
  function slideHtml(s, i) {
    var body;
    if (s.hook) {
      body = '<div class="slide-copy"><span class="kicker">' + s.k + '</span><h1>' + s.h + '</h1><p>' + s.p + '</p><div class="row"><a class="btn btn-p" href="' + s.c[0] + '">' + s.c[1] + '</a><button class="btn btn-ghost-w" data-slide="1">Swipe karke samjho →</button></div></div>' +
        '<div class="hook-stats">' + s.stats.map(function (x) { return '<div class="hs"><strong>' + x[0] + '</strong><span>' + x[1] + '</span><small>' + x[2] + '</small></div>'; }).join('') + '</div>';
    } else {
      var p = byId(s.prod);
      body = '<div class="slide-copy"><span class="kicker">' + s.n + ' · ' + s.k + '</span><h2 class="h1">' + s.h + '</h2><p>' + s.p + '</p><span class="src">' + s.src + '</span></div>' +
        '<a class="slide-prod" href="#/p/' + p.id + '"><span class="sp-art tone-' + p.cat + '">' + art(p.art, 'big') + '</span><span class="sp-k">Himmaika ka jawab</span><strong>' + p.name + '</strong><small>' + p.short + '</small><span class="sp-foot"><b>' + rupee(p.price) + '</b><span class="btn btn-p btn-sm">Dekho →</span></span></a>';
    }
    return '<div class="slide tone-' + s.tone + (s.hook ? ' hook' : '') + (i ? '' : ' on') + '" role="group" aria-roledescription="slide" aria-label="' + (i + 1) + ' of ' + SLIDES.length + '"' + (i ? ' aria-hidden="true"' : '') + '><div class="wrap slide-in">' + body + '</div></div>';
  }
  pages.home = function () {
    return '<section class="hero2" aria-roledescription="carousel" aria-label="Nayi maa ka poshan"><div class="slides" id="slides">' + SLIDES.map(slideHtml).join('') + '</div>' +
      '<button class="sl-arrow prev" data-slide="prev" aria-label="Pichhla">‹</button><button class="sl-arrow next" data-slide="next" aria-label="Agla">›</button>' +
      '<div class="dots2">' + SLIDES.map(function (_, i) { return '<button data-slide="' + i + '" aria-label="Slide ' + (i + 1) + '"' + (i ? '' : ' class="on"') + '></button>'; }).join('') + '</div></section>' +

      '<div class="usp"><div class="wrap usp-in">' +
      [['shield', 'Certified organic ghee', 'pending'], ['flask', 'Har batch lab-tested', ''], ['seeds', 'No refined sugar', ''], ['hand', 'Ek haath se khane laayak', ''], ['leaf', 'Taaza, chhote batch', '']].map(function (u) { return '<div class="u">' + art(u[0]) + '<span>' + u[1] + (u[2] ? ' <span class="tag-pend">' + u[2] + '</span>' : '') + '</span></div>'; }).join('') + '</div></div>' +

      '<section class="brand"><div class="wrap"><div class="center"><span class="kicker">Himmaika kya hai</span><h2>Postpartum maa ke liye <em>khana. Bas yahi banate hain.</em></h2>' +
      '<p class="lede">Laddoo, panjiri, kheer, khichdi, soup aur garam ghoont — har cheez delivery ke baad ke dinon ke liye, nani ki jaape ki recipe se, saaf pahadi ingredients ke saath.</p></div>' +
      '<div class="cats2">' + CATS.map(function (c) { var n = P.filter(function (p) { return p.cat === c.id; }).length; return '<a class="cat2 lift tone-' + c.id + '" href="#/shop/' + c.id + '">' + art(c.art, 'big') + '<strong>' + c.name + '</strong><small>' + c.line + '</small><span class="cnt">' + n + ' products →</span></a>'; }).join('') + '</div></div></section>' +

      '<section class="story-band"><div class="wrap split"><div class="ab-art">' + art('mother', 'huge') + art('heart', 'a2') + '</div><div><span class="kicker">Humari kahani</span><h2>Sab baby ka poochhte hain. <em>Maa ka koi nahi poochhta.</em></h2>' +
      '<p class="lede">Pehle jaapa maike mein hota tha. Nani 40 din rasoi sambhalti thi — gond ke laddoo, panjiri, ajwain ka paani — aur maa ka kaam sirf baby ko dekhna aur khana tha.</p><p class="lede">Aaj shehar mein na nani hai, na rasoi mein koi, na research ka time. Isliye humne nani ki rasoi ko dabbe mein band kiya: हिम + मायका — <strong>Himmaika</strong>.</p>' +
      '<a class="btn btn-g" href="#/story">Poori kahani</a></div></div></section>' +

      '<section><div class="wrap">' + head("Nani's picks", 'Nayi maayein <em>sabse pehle yeh leti hain</em>', '#/shop', 'Sab dekho') + grid(P.filter(function (p) { return p.best; }), 4) + '</div></section>' +

      '<section class="problem"><div class="wrap"><div class="center"><span class="kicker">Asli mushkil</span><h2>Delivery ke baad ke din <em>koi nahi batata</em></h2><p class="lede">Sab badhaai dete hain, baby ki photo maangte hain. Par maa ke saath jo ho raha hai, uski baat koi nahi karta.</p></div>' +
      '<div class="probs">' + [['moon', 'Raat ke 3 baje bhookh', 'Feeding ke baad pet khaali, aur rasoi mein koi nahi.', 'makhana'], ['sun', 'Thakaan jo jaati nahi', 'Delivery, khoon ki kami, aur raaton ki neend gayi.', 'gond'], ['leaf', 'Pet saaf nahi hota', 'Dawaiyaan, iron ki goliyan, taankon ka darr — sabse aam, sabse chhupi takleef.', 'kheer'], ['chat', '"Kya khaun, kab khaun?"', 'Google par 50 jawab, bharosa kisi par nahi, research ka time bilkul nahi.', 'p10'], ['moon', 'Raat ko neend nahi', 'Baby so gaya, par aap nahi. Din bhar ka thakaa mann.', 'doodh']].map(function (x) { var p = byId(x[3]); return '<a class="prob" href="#/p/' + p.id + '">' + art(x[0], 'big') + '<h3>' + x[1] + '</h3><p>' + x[2] + '</p><span class="fix">' + p.name + ' →</span></a>'; }).join('') + '</div></div></section>' +

      '<section class="alt"><div class="wrap">' + head('Shop by need', 'Aapko abhi <em>kis cheez ki zaroorat hai?</em>', '', '', 'Har maa ka din alag hai. Apni zaroorat chuno.') +
      '<div class="needs" role="tablist">' + NEEDS.map(function (n, i) { return '<button role="tab" data-need="' + n.id + '" aria-selected="' + !i + '">' + art(n.art) + n.name + '</button>'; }).join('') + '</div>' +
      '<div id="needGrid">' + needGrid(NEEDS[0].id) + '</div></div></section>' +

      '<section><div class="wrap"><div class="center"><span class="kicker">Maa ki thali mein kya jaata hai</span><h2>Pahad ke anaaj, <em>jaape ki parampara</em></h2><p class="lede">Har ingredient jo hum postpartum maa ke khane mein daalte hain — aur kyun.</p></div>' +
      '<div class="ingr">' + [['millet', 'Mandua', 'Calcium-rich finger millet', 'mandua'], ['millet', 'Jhangora', 'High-fibre, pehle hafte ke liye', 'kheer'], ['seeds', 'Gahat', 'Pahadi protein daal', 'gahat'], ['nut', 'Makhana', 'Halka, raat ka snack', 'makhana'], ['seeds', 'Til', 'Calcium aur iron waala beej', 'mandua'], ['drop', 'Gond', 'Jaape ka sabse purana laddoo', 'gond']].map(function (x) { return '<a class="ing" href="#/p/' + x[3] + '">' + art(x[0], 'big') + '<strong>' + x[1] + '</strong><small>' + x[2] + '</small></a>'; }).join('') + '</div>' +
      '<p class="center note" style="margin-top:18px">Meetha sirf dates ya gud se · Ghee: organic Badri cow ghee · Poori list har pack par</p></div></section>' +

      '<section class="alt"><div class="wrap"><div class="center"><span class="kicker">Subscribe & Save</span><h2>Laddoo khatam hone se <em>pehle naya dabba</em></h2></div>' +
      '<div class="steps">' + [['laddoo', 'Product chuno', 'Laddoo, panjiri, sachets — jo roz chahiye.'], ['repeat', 'Har 2, 3 ya 4 hafte', 'Jitni jaldi khatam hota hai, utni baar.'], ['truck', SUB_OFF + '% bachao, har baar', 'Skip, roko ya cancel — ek WhatsApp se.']].map(function (s, i) { return '<div class="step"><span class="sn">' + (i + 1) + '</span>' + art(s[0], 'big') + '<h3>' + s[1] + '</h3><p>' + s[2] + '</p></div>'; }).join('') + '</div>' +
      '<div class="center" style="margin-top:22px"><a class="btn btn-p" href="#/p/gond">Subscribe karke dekho</a></div></div></section>' +

      '<section class="planband"><div class="wrap split"><div><span class="kicker">Ek option yeh bhi</span><h2>Poore 40 din ka <em>dabba</em></h2><p>Agar aap sochna hi nahi chahte: teen phase, teen taaza shipments, din-ba-din card. Pati, maa ya behen bhi gift kar sakte hain.</p><div class="row"><a class="btn btn-w" href="#/p/p40">40 Din Box · ' + rupee(4999) + '</a><a class="btn btn-ghost-w" href="#/gift">Gift karo</a></div></div><div class="ab-art">' + art('calendar', 'huge') + '</div></div></section>' +

      '<section><div class="wrap narrow">' + naniNote('Beta, baby ke saath tum bhi nayi paida hui ho. Pehle 40 din apne aap ko utna hi pyaar do jitna use de rahi ho. Khana main bhej rahi hoon — tum bas samay pe kha lena.') + '</div></section>' +

      '<section class="alt"><div class="wrap">' + head('Our proof', 'Vaade nahi, <em>lab report</em>', '', '', 'Label padhne ka time kiske paas hai?') + proofBand + '</div></section>' +

      '<section><div class="wrap center"><span class="kicker">Maaon ki baat</span><h2>Reviews launch ke baad</h2><p class="lede">Hum abhi launch nahi hue, isliye yahan koi review nahi hai. Nakli sitaare hum nahi lagate.</p></div></section>' +

      '<section class="news"><div class="wrap news-in"><div><h2>Nani ki chitthi, <em>har hafte</em></h2><p>Har hafte ek chhoti si baat — kya khaayein, kaise aaram karein. Spam nahi.</p></div>' +
      '<form id="newsForm" class="news-form"><label for="newsIn" class="sr">Email ya WhatsApp</label><input id="newsIn" type="text" placeholder="Email ya WhatsApp number" autocomplete="off"><button class="btn btn-p">Judo</button></form></div></section>';
  };
  function needGrid(id) { return grid(P.filter(function (p) { return p.needs.indexOf(id) >= 0; }).slice(0, 4), 4); }
  function compareTable() {
    var rows = [['Time', '3–4 ghante, har baar', '5 minute', '0 — dabba kholo'], ['Meetha', 'Aapke haath mein', 'Aksar refined sugar', 'Sirf dates ya gud'], ['Ingredients', 'Dhoondhne padte hain', 'Label padhna padta hai', 'Pahadi anaaj, poori list pack par'], ['Lab report', '—', 'Aksar nahi', 'Har batch, QR se'], ['Jaape ke hisaab se', 'Agar koi bada ho', 'Nahi', 'Haan — din-ba-din']];
    return '<div class="tbl-wrap"><table class="cmp"><thead><tr><th></th><th>Ghar pe banana</th><th>Aam dukaan ka laddoo</th><th class="us">Himmaika</th></tr></thead><tbody>' +
      rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td><td class="us">' + r[3] + '</td></tr>'; }).join('') + '</tbody></table></div><p class="note">Yeh aam tulna hai, kisi khaas brand ke baare mein nahi.</p>';
  }
  function naniNote(t) { return '<div class="nani">' + art('heart', 'big') + '<div><span class="kicker">Nani ka note</span><p>' + t + '</p><span class="sig">— Nani</span></div></div>'; }

  pages.shop = function (cat) {
    var c = CATS.filter(function (x) { return x.id === cat; })[0];
    var list = c ? P.filter(function (p) { return p.cat === cat; }) : P;
    return '<section class="shop-hero tone-' + (c ? c.id : 'all') + '"><div class="wrap split"><div><nav class="crumb"><a href="#/">Home</a> / <span>' + (c ? c.name : 'Shop all') + '</span></nav>' +
      '<h1>' + (c ? c.name : 'Nayi maa ki <em>poori rasoi</em>') + '</h1><p class="lede">' + (c ? c.line + '. ' : '') + (cat === 'combo' ? 'Bundles mein sabse zyada bachat — aur sochna nahi padta.' : 'Har cheez saaf, taaza ingredients se, ek haath se khane laayak. Meetha sirf dates ya gud se.') + '</p></div><div class="ab-art">' + art(c ? c.art : 'laddoo', 'huge') + '</div></div></section>' +
      '<section style="padding-top:28px"><div class="wrap"><div class="toolbar"><div class="filters">' + [{ id: '', name: 'Sab' }].concat(CATS).map(function (x) {
        return '<a href="#/shop' + (x.id ? '/' + x.id : '') + '"' + ((x.id || '') === (cat || '') ? ' class="on" aria-current="true"' : '') + '>' + x.name + '</a>';
      }).join('') + '</div><label class="sort">Sort <select id="sortSel"><option value="pop">Nani\'s picks pehle</option><option value="lo">Keemat: kam se zyada</option><option value="hi">Keemat: zyada se kam</option></select></label></div>' +
      '<div id="shopGrid" data-cat="' + (cat || '') + '">' + grid(list, 3) + '</div>' +
      (cat === 'combo' ? '<div class="honest" style="margin-top:26px">' + art('calendar') + '<p><strong>40 din ka plan kaise kaam karta hai?</strong> Teen phase, teen shipments. <a href="#/plan">Poora plan samjho</a> · <a href="#/gift">Kisi ko gift karna hai?</a></p></div>' : '') +
      '<div class="honest" style="margin-top:20px">' + art('heart') + '<p><strong>Imaandaari ki baat:</strong> Hum "doodh badhega" ya "kamzori door hogi" jaise vaade nahi karte. Yeh paramparik khana hai, dawai nahi. "Kam meetha" ka matlab sugar-free nahi hai.</p></div>' +
      '</div></section>';
  };

  pages.p = function (id) {
    var p = byId(id); if (!p) return pages.shop();
    var c = CATS.filter(function (x) { return x.id === p.cat; })[0], combo = p.cat === 'combo';
    var addons = P.filter(function (x) { return x.id !== p.id && x.cat !== 'combo'; }).sort(function (a, b) { return (b.best ? 1 : 0) - (a.best ? 1 : 0); }).slice(0, 3);
    var rel = P.filter(function (x) { return x.id !== p.id && x.cat === p.cat; }).concat(P.filter(function (x) { return x.best && x.cat !== p.cat; })).slice(0, 4);
    return '<section class="pdp"><div class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="#/">Home</a> / <a href="#/shop/' + c.id + '">' + c.name + '</a> / <span>' + p.name + '</span></nav>' +
      '<div class="pdp-grid"><div class="gal"><div class="main tone-' + p.cat + '">' + art(p.art, 'huge') + '<span class="pc-badge">' + p.badge + '</span><span class="photo-note">photo shoot ke baad asli tasveer</span></div>' +
      '<div class="thumbs">' + [p.art, p.ing[0][0], 'hand', 'flask'].map(function (a, i) { return '<span class="tone-' + p.cat + (i ? '' : ' on') + '">' + art(a) + '</span>'; }).join('') + '</div></div>' +
      '<div class="info"><h1>' + p.name + '</h1><p class="lede">' + p.short + '</p>' +
      '<div class="rating">' + art('heart') + ' Naya launch · reviews jald</div>' + feats(p) +
      '<div class="price big" id="pPrice"></div>' +
      (combo ? '' : '<div class="lab">Pack chuno</div><div class="packs" id="packs">' + PACKS.map(function (k, i) {
        return '<button type="button" data-pack="' + i + '" aria-pressed="' + !i + '">' + (k.tag ? '<em>' + k.tag + '</em>' : '') + '<strong>' + k.l + '</strong><small>' + rupee(p.price * k.n * (1 - k.off / 100)) + (k.off ? ' · ' + k.off + '% off' : '') + '</small></button>';
      }).join('') + '</div>' +
      '<div class="lab">Kaise lena hai?</div><div class="ptype" id="ptype"><label class="opt"><input type="radio" name="pt" value="once" checked><span><strong>Ek baar</strong><small>Abhi ke liye</small></span></label>' +
      '<label class="opt sub"><input type="radio" name="pt" value="sub"><span><strong>Subscribe & Save ' + SUB_OFF + '%</strong><small>Har <select id="every" aria-label="Kitne hafte mein"><option>2</option><option selected>3</option><option>4</option></select> hafte taaza dabba · kabhi bhi skip ya cancel</small></span></label></div>') +
      '<div class="buyrow" id="buyrow"><button class="btn btn-p btn-lg" data-addp="' + p.id + '">Thaile mein daalo</button><button class="btn btn-g btn-lg" data-buyp="' + p.id + '">Abhi kharido</button></div>' +
      '<div class="pin"><input id="pinIn" type="text" inputmode="numeric" maxlength="6" placeholder="Pincode daalo"><button class="btn btn-g btn-sm" data-pin>Delivery check</button></div>' +
      '<div class="offers"><strong>Offers</strong> <span class="tag-pend">prototype</span><ul><li>' + art('repeat') + 'Subscribe karo, har order par ' + SUB_OFF + '% off</li><li>' + art('truck') + rupee(FREE_SHIP) + ' se upar free delivery</li><li>' + art('gift') + 'Gift note muft — thaile mein tick karo</li></ul></div>' +
      '<div class="iconrow">' + [['flask', 'Lab-tested batch'], ['shield', 'Certified organic ghee'], ['seeds', 'No refined sugar'], ['hand', 'Ek haath se']].map(function (x) { return '<div>' + art(x[0]) + '<span>' + x[1] + '</span></div>'; }).join('') + '</div>' +
      (combo ? '' : '<div class="addons"><strong>⭐ Zyadatar maayein saath mein lete hain</strong>' + addons.map(function (a) { return '<div class="ao"><span class="ao-art tone-' + a.cat + '">' + art(a.art) + '</span><a href="#/p/' + a.id + '">' + a.name + '<small>' + rupee(a.price) + '</small></a><button class="btn btn-g btn-sm" data-add="' + a.id + '">+ Add</button></div>'; }).join('') + '</div>') +
      '</div></div></div></section>' +

      /* A+ content */
      '<section class="aplus1 tone-' + p.cat + '"><div class="wrap split"><div><span class="kicker">Aapka yeh pal</span><p class="pain big">"' + p.moment + '"</p><h2>' + p.name + ' — <em>isi pal ke liye bana</em></h2><p class="lede">' + p.short + '</p></div><div class="ab-art">' + art(p.art, 'huge') + art('mother', 'a2') + '</div></div></section>' +
      '<section><div class="wrap"><div class="center"><span class="kicker">Kya milega</span><h2>' + (combo ? 'Is dabbe mein <em>kya khaas hai</em>' : 'Kyun khaayein <em>' + p.name + '</em>') + '</h2></div>' +
      '<div class="bens">' + p.ben.map(function (b) { return '<div class="ben">' + art(b[0], 'big') + '<h3>' + b[1] + '</h3><p>' + b[2] + '</p></div>'; }).join('') + '</div>' +
      '<p class="note center">Yeh ingredients aur aam poshan ki jaankari hai, koi ilaaj ka daava nahi. Numbers: ICMR-NIN 2020, NFHS-5. <a href="#/samajh">Poori samajh</a></p></div></section>' +
      '<section class="alt"><div class="wrap"><div class="center"><span class="kicker">' + (combo ? 'Dabbe mein' : 'Andar kya hai') + '</span><h2>' + (combo ? 'Kya-kya <em>aata hai</em>' : 'Har ingredient, <em>ek wajah se</em>') + '</h2></div>' +
      '<div class="ings">' + p.ing.map(function (g) { return '<div class="ing2' + (g[3] ? ' support' : '') + '">' + art(g[0], 'big') + '<div><strong>' + g[1] + '</strong>' + (g[3] ? ' <span class="chip">sahayak</span>' : '') + (g[2] ? '<p>' + g[2] + '</p>' : '') + '</div></div>'; }).join('') + '</div></div></section>' +
      '<section><div class="wrap split"><div><span class="kicker">Kab aur kaise</span><h2>Din mein <em>kahan fit hota hai</em></h2><div class="when">' + p.when.map(function (w) { return '<div class="w">' + art(w[0], 'big') + '<div><strong>' + w[1] + '</strong><p>' + w[2] + '</p></div></div>'; }).join('') + '</div><p class="note">' + p.how + '</p></div>' +
      '<div><span class="kicker">Kiske liye</span><h2>Yeh aapke liye hai <em>agar...</em></h2><ul class="tick big"><li>Aapki delivery haal hi mein hui hai, ya hone waali hai</li><li>Rasoi mein madad nahi, ya time nahi</li><li>Aap label padhe bina bharosa karna chahti hain</li><li>Aapko ghar jaisa, paramparik swaad chahiye</li></ul></div></div></section>' +
      '<section><div class="wrap">' + proofBand + '</div></section>' +
      '<section class="alt"><div class="wrap narrow">' + naniNote(p.note) + '</div></section>' +
      '<section><div class="wrap narrow"><h2>Poori jaankari</h2><div class="faq">' +
      acc('Ingredients', '<p>' + p.list + '</p><p class="note">Shuruaati list; final recipe pack par chhapegi. Allergens: nuts, til, doodh se bani cheezein ho sakti hain.</p>', true) +
      acc('Kaise khayein', '<p>' + p.how + '</p>') +
      acc('Nutrition aur shelf life', '<p>Nutrition table (per 100g aur per serving), best-before aur storage — lab testing ke baad.</p><span class="tag-pend">lab values pending</span>') +
      acc('Delivery, subscription aur wapsi', '<p>Dehradun se taaza bana kar bheja jaata hai. Subscription kabhi bhi skip, roko ya cancel. Shipping time aur return policy launch par final.</p><span class="tag-pend">prototype</span>') +
      acc('Kya isse doodh badhega?', '<p>Hum aisa koi vaada nahi karte. Feeding mein dikkat ho toh lactation consultant ya doctor se milein.</p>') +
      acc('C-section ke baad kha sakti hoon?', '<p>Pehle 10 din halka aur naram khana aasaan padta hai. Bhaari laddoo kab shuru karein, doctor se poochhein.</p>') +
      acc('Diabetes ya BP hai, toh?', '<p>Kai products mein dates ya gud aur ghee hai. Pehle apne doctor se poochhein.</p>') +
      '</div></div></section>' +
      '<section class="alt"><div class="wrap center"><span class="kicker">Reviews</span><h2>Pehle review ka intezaar</h2><p class="lede">Launch ke baad asli maaon ke reviews yahan aayenge.</p></div></section>' +
      '<section><div class="wrap">' + head('Aur bhi', 'Saath mein <em>achha lagta hai</em>') + grid(rel, 4) + '</div></section>' +
      '<div class="stickybuy" id="stickybuy"><div><strong>' + p.name + '</strong><small id="sbPrice"></small></div><button class="btn btn-p btn-sm" data-addp="' + p.id + '">Thaile mein daalo</button></div>';
  };
  pages.p.after = function (id) { var p = byId(id); if (p) { pdp.p = p; pdp.pack = 0; pdp.sub = false; drawPrice(); } };
  var pdp = { p: null, pack: 0, sub: false };
  function unitPrice(p, pack, sub) { var k = PACKS[pack] || PACKS[0]; return p.price * k.n * (1 - k.off / 100) * (sub ? 1 - SUB_OFF / 100 : 1); }
  function drawPrice() {
    var p = pdp.p; if (!p || !$('#pPrice')) return;
    var k = PACKS[pdp.pack], full = (p.mrp || p.price) * k.n, now = unitPrice(p, pdp.pack, pdp.sub);
    $('#pPrice').innerHTML = rupee(now) + (now < full ? ' <s>' + rupee(full) + '</s> <span class="save">' + Math.round((1 - now / full) * 100) + '% bachat</span>' : '') + '<small>' + (p.cat === 'combo' ? p.unit : k.l + ' · ' + p.unit) + (pdp.sub ? ' · har ' + $('#every').value + ' hafte' : '') + ' · saare tax shaamil · prototype keemat</small>';
    $('#sbPrice').textContent = rupee(now) + (pdp.sub ? ' · subscription' : '');
  }

  pages.story = function () {
    return '<section class="shop-hero tone-laddoo"><div class="wrap split"><div><span class="kicker">Our Story</span><p class="pain">Shehar mein baby aayi, par nani nahi aa payi.</p><h1>हिम + मायका. <em>Pahad se aaya maika.</em></h1>' +
      '<p class="lede">Maika — woh ghar jahan delivery ke baad ek ladki ko sirf do kaam karne hote the: baby ko dekhna, aur khana. Himmaika usi maike ki rasoi hai — taaza, saaf ingredients se bana nayi maa ka khana.</p></div><div class="ab-art">' + art('mother', 'huge') + '</div></div></section>' +
      '<section><div class="wrap split"><div><span class="kicker">Jo humne dekha</span><h2>Nayi maa ke paas <em>sab kuch hai, siwaye time ke</em></h2><ul class="tick big"><li>Nani hazaar kilometre door.</li><li>Pati madad karna chahta hai, par use pata nahi kya banana hai.</li><li>Dukaan ke laddoo mein kya hai, koi nahi jaanta.</li><li>Google par 50 jawab, bharosa kisi par nahi.</li></ul></div>' +
      '<div class="card warm"><h3>Toh humne kya kiya</h3><p>Humne nani ki jaape ki rasoi ko chhote, taaza batch mein banana shuru kiya: pahad ke anaaj, asli nuts aur beej, dates ya gud ka meetha, aur har batch ki lab report. Ghee chahiye toh humare parivaar ki organic Badri gaay ka ghee — Barsana Magic se.</p><span class="tag-pend">Founders ki kahani aur photo — add hona baaki</span></div></div></section>' +
      '<section class="alt"><div class="wrap"><div class="center"><span class="kicker">Humare niyam</span><h2>Jo har dabbe par <em>laagu hote hain</em></h2></div><div class="bens">' +
      [['leaf', 'Saaf ingredients', 'Label par wahi, jo dabbe mein. Refined sugar nahi.'], ['flask', 'Har batch ki lab report', 'QR scan karo, report dekho.'], ['hand', 'Ek haath se', 'Kyunki doosre haath mein baby hai.'], ['heart', 'Khilayenge, sudhaarenge nahi', 'Koi jhootha daava nahi, koi taana nahi.']].map(function (b) { return '<div class="ben">' + art(b[0], 'big') + '<h3>' + b[1] + '</h3><p>' + b[2] + '</p></div>'; }).join('') + '</div></div></section>' +
      '<section><div class="wrap center"><p class="quote">"Har nayi maa ko uske 40 din ka haq mile, chahe ghar mein koi bada ho ya na ho."<span>Humara mission</span></p></div></section>' + endCta;
  };

  window.HM_INFO(pages, src, endCta);
  window.HM_MORE(pages, { $: $, rupee: rupee, toast: toast, byId: byId, endCta: endCta });

  /* ---------- cart (drawer) ---------- */
  function cartKey(id, pack, sub, every) { return id + '|' + pack + '|' + (sub ? every : 0); }
  function addItem(id, pack, sub, every, silent) {
    var k = cartKey(id, pack || 0, sub, every), it = cart.filter(function (x) { return x.k === k; })[0];
    if (it) it.q++; else cart.push({ k: k, id: id, pack: pack || 0, sub: !!sub, every: every, q: 1 });
    drawCart(); if (!silent) toast('🧺 ' + byId(id).name + (sub ? ' (subscription)' : '') + ' thaile mein');
  }
  function drawCart() {
    var n = 0, tot = 0; cart.forEach(function (x) { n += x.q; tot += unitPrice(byId(x.id), x.pack, x.sub) * x.q; });
    $('#cartCount').textContent = n;
    var body = $('#cartBody');
    if (!cart.length) { body.innerHTML = '<div class="empty">' + art('laddoo', 'big') + '<p>Thaila khaali hai. Nani kehti: "Pehle ek laddoo toh rakh lo."</p><a class="btn btn-p" href="#/shop" data-close>Shop dekho</a></div>'; return; }
    var left = FREE_SHIP - tot, note = gift && $('#giftNote') ? $('#giftNote').value : '';
    body.innerHTML = '<div class="ship"><p>' + (left > 0 ? rupee(left) + ' aur, phir delivery free' : '🎉 Free delivery mil gayi') + '</p><div class="bar"><i style="width:' + Math.min(100, tot / FREE_SHIP * 100) + '%"></i></div></div>' +
      cart.map(function (x, i) { var p = byId(x.id); return '<div class="ci"><span class="ci-art tone-' + p.cat + '">' + art(p.art) + '</span><div class="n">' + p.name + '<small>' + (p.cat === 'combo' ? p.unit : PACKS[x.pack].l) + (x.sub ? ' · har ' + x.every + ' hafte · ' + SUB_OFF + '% off' : '') + '</small><small>' + rupee(unitPrice(p, x.pack, x.sub)) + '</small></div><div class="qty"><button data-dec="' + i + '" aria-label="Kam karo">−</button><b>' + x.q + '</b><button data-inc="' + i + '" aria-label="Badhao">+</button></div></div>'; }).join('') +
      '<label class="toggle" style="margin-top:14px"><input type="checkbox" id="giftChk"' + (gift ? ' checked' : '') + '><span>🎁 Yeh gift hai — chitthi saath bhejo</span></label>' +
      (gift ? '<textarea id="giftNote" style="margin-top:10px" placeholder="Beta, main aa nahi payi, par yeh laddoo meri taraf se roz ek khana..."></textarea>' : '') +
      '<div class="tot"><span>Kul</span><span>' + rupee(tot) + '</span></div><button class="btn btn-p" style="width:100%" data-checkout>Checkout karo</button><p class="note" style="margin-top:10px">Prototype: koi asli payment nahi hoga.</p>';
    if (gift) $('#giftNote').value = note;
  }
  function openCart() { drawCart(); $('#cartModal').hidden = false; document.body.classList.add('lock'); $('#cartModal .x').focus(); }
  function closeCart() { $('#cartModal').hidden = true; document.body.classList.remove('lock'); }

  /* ---------- Nani chat (mock) ---------- */
  var QA = [
    ['C-section ke baad kya khaun?', 'Pehle 10 din halka aur garam: Jhangora Kheer, Khichdi Kit, ajwain ka paani. Bhaari laddoo kab shuru karein, apne doctor se zaroor poochhna. 💛', 'kheer'],
    ['Kaunsa laddoo pehle lun?', 'Roz ki taaqat ke liye Gond Laddoo, aur calcium-rich anaaj ke liye Mandua–Til. Dono ek haath se kha sakti ho.', 'gond'],
    ['Subscription kaise kaam karta hai?', 'Product page par "Subscribe & Save" chuno: har 2, 3 ya 4 hafte naya dabba, ' + SUB_OFF + '% kam mein. Kabhi bhi skip ya cancel.', ''],
    ['Delivery kab tak aayegi?', 'Hum Dehradun se taaza bana kar bhejte hain. Asli delivery time launch par batayenge — abhi yeh prototype hai.', '']
  ];
  function chatMsg(who, html) { var b = $('#chatLog'); b.insertAdjacentHTML('beforeend', '<div class="msg ' + who + '">' + html + '</div>'); b.scrollTop = b.scrollHeight; }
  function chatOpen() {
    var c = $('#chat'); c.hidden = false;
    if (!$('#chatLog').children.length) {
      chatMsg('bot', 'Namaste beta! Main Nani hoon. 😊 Khane ke baare mein kuch bhi poochho.');
      chatMsg('bot', '<span class="note">Main doctor nahi hoon — dawai ya bimari ke sawaal apne doctor se poochhna.</span>');
    }
    $('#chatIn').focus();
  }
  function chatAsk(i) {
    var q = QA[i]; chatMsg('me', q[0]);
    setTimeout(function () { chatMsg('bot', q[1] + (q[2] ? '<br><a href="#/p/' + q[2] + '">' + byId(q[2]).name + ' dekho →</a>' : '')); }, 450);
  }

  /* ---------- router ---------- */
  var slideTimer;
  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/'), r = parts[0] || 'home';
    if (!pages[r]) r = 'home';
    $('#app').innerHTML = '<div class="page">' + pages[r](parts[1]) + '</div>';
    var key = r === 'p' ? 'shop/' + ((byId(parts[1]) || {}).cat || '') : (r === 'shop' && parts[1] ? 'shop/' + parts[1] : r);
    document.querySelectorAll('.links a').forEach(function (a) { var on = a.dataset.r === key || (r === 'shop' && !parts[1] && a.dataset.r === 'shop'); a.classList.toggle('active', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    $('#links').classList.remove('open'); $('#burger').setAttribute('aria-expanded', 'false');
    if (pages[r].after) pages[r].after(parts[1]);
    clearInterval(slideTimer); if (r === 'home') slideTimer = setInterval(function () { slide(-1); }, 8000);
    window.scrollTo(0, 0);
  }
  function slide(i) {
    var s = document.querySelectorAll('.slide'); if (!s.length) return;
    var cur = [].findIndex.call(s, function (x) { return x.classList.contains('on'); });
    if (i === -1) i = (cur + 1) % s.length; else if (i === -2) i = (cur - 1 + s.length) % s.length;
    s.forEach(function (x, j) { x.classList.toggle('on', j === i); if (j === i) x.removeAttribute('aria-hidden'); else x.setAttribute('aria-hidden', 'true'); });
    document.querySelectorAll('.dots2 button').forEach(function (b, j) { b.classList.toggle('on', j === i); });
  }

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    if (e.target.id === 'cartModal') { closeCart(); return; }
    var t = e.target.closest('[data-add],[data-addp],[data-buyp],[data-pack],[data-need],[data-slide],[data-pin],[data-toast],[data-close],[data-inc],[data-dec],[data-checkout],[data-qa],[data-chatx],#burger,#cartBtn,#chatBtn,#searchBtn');
    if (!t) return;
    var d = t.dataset;
    if (t.id === 'burger') { var o = $('#links').classList.toggle('open'); t.setAttribute('aria-expanded', o); return; }
    if (t.id === 'cartBtn') { openCart(); return; }
    if (t.id === 'chatBtn') { var c = $('#chat'); if (c.hidden) chatOpen(); else c.hidden = true; return; }
    if (t.id === 'searchBtn') { toast('🔍 Search jald aayega — abhi categories se dhoondho'); return; }
    if ('chatx' in d) { $('#chat').hidden = true; return; }
    if (d.qa) { chatAsk(+d.qa); return; }
    if (d.add) { addItem(d.add, 0, false); return; }
    if (d.addp || d.buyp) { var id = d.addp || d.buyp; addItem(id, pdp.pack, pdp.sub, pdp.sub ? $('#every').value : 0); if (d.buyp) openCart(); return; }
    if (d.pack) { pdp.pack = +d.pack; document.querySelectorAll('#packs button').forEach(function (b) { b.setAttribute('aria-pressed', b === t); }); drawPrice(); return; }
    if (d.need) { document.querySelectorAll('[data-need]').forEach(function (b) { b.setAttribute('aria-selected', b === t); }); $('#needGrid').innerHTML = needGrid(d.need); return; }
    if (d.slide) { slide(d.slide === 'next' ? -1 : d.slide === 'prev' ? -2 : +d.slide); clearInterval(slideTimer); return; }
    if ('pin' in d) { var v = $('#pinIn').value.replace(/\D/g, ''); toast(v.length === 6 ? '📦 ' + v + ' — delivery ho jaayegi (prototype estimate: 3–5 din)' : '6 ank ka pincode daalo'); return; }
    if (d.inc) { cart[+d.inc].q++; drawCart(); return; }
    if (d.dec) { if (--cart[+d.dec].q <= 0) cart.splice(+d.dec, 1); drawCart(); return; }
    if ('checkout' in d) { var g = gift, s = cart.some(function (x) { return x.sub; }); cart = []; gift = false; drawCart(); closeCart(); toast('🙏 Shukriya!' + (s ? ' Subscription shuru.' : '') + (g ? ' Chitthi dabbe ke saath jaayegi.' : '') + ' (Prototype — koi order ya payment nahi hua)'); return; }
    if ('close' in d) { closeCart(); return; }
    if (d.toast) { e.preventDefault(); toast(d.toast); }
  });
  document.addEventListener('change', function (e) {
    if (e.target.id === 'giftChk') { gift = e.target.checked; drawCart(); }
    if (e.target.name === 'pt') { pdp.sub = e.target.value === 'sub'; drawPrice(); }
    if (e.target.id === 'every') { if (!pdp.sub) { pdp.sub = true; $('input[name=pt][value=sub]').checked = true; } drawPrice(); }
    if (e.target.id === 'sortSel') {
      var g = $('#shopGrid'), cat = g.dataset.cat, list = cat ? P.filter(function (p) { return p.cat === cat; }) : P.slice(), v = e.target.value;
      if (v === 'lo') list.sort(function (a, b) { return a.price - b.price; }); else if (v === 'hi') list.sort(function (a, b) { return b.price - a.price; }); else list.sort(function (a, b) { return (b.best ? 1 : 0) - (a.best ? 1 : 0); });
      g.innerHTML = grid(list, 3);
    }
  });
  document.addEventListener('submit', function (e) {
    if (e.target.id === 'newsForm') { e.preventDefault(); toast($('#newsIn').value.trim() ? '💌 Judne ka shukriya! (Prototype — kuch save nahi hua)' : 'Email ya WhatsApp number daalo'); }
    if (e.target.id === 'chatForm') {
      e.preventDefault(); var v = $('#chatIn').value.trim(); if (!v) return; $('#chatIn').value = ''; chatMsg('me', v.replace(/</g, '&lt;'));
      setTimeout(function () { chatMsg('bot', 'Achha sawaal! Asli Nani (humari team) jald WhatsApp par jawab degi. Abhi yeh prototype hai — neeche ke sawaal try karo.'); }, 450);
    }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeCart(); $('#chat').hidden = true; } });
  window.addEventListener('scroll', function () { var s = $('#stickybuy'), b = $('#buyrow'); if (s && b) s.classList.toggle('show', b.getBoundingClientRect().bottom < 0); }, { passive: true });
  var tx = null;
  document.addEventListener('touchstart', function (e) { if (e.target.closest('#slides')) tx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', function (e) { if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; tx = null; if (Math.abs(dx) > 40) { slide(dx < 0 ? -1 : -2); clearInterval(slideTimer); } }, { passive: true });
  window.addEventListener('hashchange', route);

  $('#footHills').innerHTML = hills('transparent', '#E8D5BC', '#7D8450', '#3A2A1E');
  $('#chatQuick').innerHTML = QA.map(function (q, i) { return '<button data-qa="' + i + '">' + q[0] + '</button>'; }).join('');
  (function ribbon() { var r = $('#ribbonMsgs'); if (!r) return; var i = 0, m = r.children; setInterval(function () { m[i].classList.remove('on'); i = (i + 1) % m.length; m[i].classList.add('on'); }, 4000); })();
  drawCart(); route();
})();
