/* Science and Proof pages */
window.HM_INFO = function (pages, src, endCta) {
  pages.samajh = function () {
    return '<section><div class="wrap"><span class="kicker">40 Din ki Samajh</span>' +
      '<p class="pain">Aapke paas research karne ka time nahi hai. Toh humne kar li.</p>' +
      '<h1>Nani ko pata tha. <em>Ab aapko bhi pata ho.</em></h1>' +
      '<p class="lede">Yeh page darane ke liye nahi hai. Yeh sirf yeh batane ke liye hai ki jo thakaan, jo bhookh, jo ajeeb-sa lag raha hai — woh sab normal hai, aur uski wajah hai. Har number ke saath uska source likha hai.</p></div></section>' +

      '<section class="alt"><div class="wrap split"><div><span class="kicker">Pehla sach</span><h2>Delivery ke baad sharir mein <em>kya hota hai</em></h2><p class="lede">Nau mahine mein jo bana, woh nau din mein wapas nahi aata. Aur aana bhi nahi chahiye.</p></div>' +
      '<div class="body-tl">' +
      bt('Hafta 1–2', 'Khoon gaya hai, ghaav bhar rahe hain', 'Delivery mein khoon jaata hai aur sharir marammat mein laga hai. Thakaan aalas nahi hai.', 'Aap kamzor nahi ho. Aap theek ho rahi ho.') +
      bt('Hafta 2–6', 'Hormones utar-chadh rahe hain', 'Raat ko paseena, bina baat rona, achanak chidh — yeh hormones ka settle hona hai. Agar udaasi do hafte se zyada rahe, doctor se baat zaroor karein.', 'Rona aaye toh ro lo. Phir kuch garam kha lo.') +
      bt('Har din', 'Feeding ka kaam', 'Doodh banana sharir ke liye asli mehnat hai — isliye bhookh aur pyaas dono zyada lagti hain.', 'Bhookh lagna sahi hai. Khao.') +
      bt('Mahina 3 ke aas-paas', 'Baal jhadte hain', 'Bahut si maaon ke saath hota hai, aur zyadatar apne aap theek ho jaata hai. Hum iska ilaaj nahi bechte — bas achha khana, jo har cheez ka sahara hai.', 'Darna mat. Yeh aksar waqt ke saath theek ho jaata hai.') +
      bt('C-section', 'Yeh ek badi surgery hai', 'India mein kareeb 5 mein se 1 delivery C-section se hoti hai ' + src('NFHS-5: 21.5%') + '. Recovery mein hafte lagte hain, aur shuru mein naram, garam khana aasaan padta hai.', 'Operation hua hai. Khud ko utna hi time do.') +
      '</div></div></section>' +

      '<section><div class="wrap"><span class="kicker">Doosra sach</span><h2>Feeding maa ki <em>thali ka hisaab</em></h2>' +
      '<p class="lede">Yeh aam dietary norms hain — ek feeding maa ko kya chahiye. Yeh nahi ki humara khana kya "theek" karega.</p>' +
      '<div class="stats s4" style="margin-top:24px">' +
      '<div class="stat"><div class="num">+530–600 kcal</div><p>roz extra energy, pehle 6 mahine. Do roti aur ek laddoo jitna "aur".</p>' + src('ICMR-NIN 2020', true) + '</div>' +
      '<div class="stat"><div class="num">~+19 g</div><p>protein roz extra — daal, doodh, nuts se. Sharir ki marammat ka saamaan.</p>' + src('ICMR-NIN 2020', true) + '</div>' +
      '<div class="stat"><div class="num">1,200 mg</div><p>calcium roz. Doodh ke saath roz kareeb 210 mg calcium maa ke sharir se jaata hai.</p>' + src('ICMR-NIN 2020') + ' ' + src('Kovacs review') + '</div>' +
      '<div class="stat"><div class="num">57%</div><p>Indian mahilaon (15–49) mein khoon ki kami; pregnant mahilaon mein 52.2%.</p>' + src('NFHS-5, 2019–21') + '</div>' +
      '</div>' +
      '<div class="card warm" style="margin-top:18px"><h3>Haddiyon waali baat, bina darr ke</h3><p>Research kehti hai ki 3–6 mahine sirf-breastfeeding ke dauraan reedh ki haddi ki density kareeb 5–10% tak ghat sakti hai — aur doodh chhudaane ke 6–12 mahine mein wapas aa jaati hai. Yeh sharir ka apna tareeka hai; khana ise rok nahi sakta. Isliye hum "haddi bachao" jaisa koi vaada nahi karte. Hum bas itna kehte hain: is waqt aapki thali mein calcium waala khana hona chahiye — aapke apne liye. ' + src('Frontiers in Physiology, 2023') + '</p></div>' +
      '<div class="card warm" style="margin-top:14px"><h3>Aur woh baat jo koi nahi karta — kabz</h3><p>Delivery ke baad kabz aam hai: alag-alag studies mein kareeb 4 mein se 1 se lekar 10 mein se 4 maaon tak. Dard ki dawaiyan, iron ki goliyan, taankon ka darr — sab milke. Fibre waala khana aur din bhar garam paani ke ghoont, yahi nani ka purana tareeka tha. Takleef zyada ho toh doctor se poochhein. ' + src('Cochrane review & cited studies') + '</p></div>' +
      '</div></section>' +

      '<section class="alt"><div class="wrap"><span class="kicker">Teesra sach</span><h2>Nani <em>sahi thi</em></h2><p class="lede">Unhone lab report nahi padhi thi. Par unki rasoi ka har niyam aaj ke nutrition ke hisaab se samajh aata hai.</p>' +
      '<div class="tbl-wrap" style="margin-top:22px"><table><thead><tr><th>Nani ka niyam</th><th>Aaj ki samajh</th><th>Himmaika mein</th></tr></thead><tbody>' +
      '<tr><td>"Gond aur ghee ka laddoo roz ek"</td><td>Kam matra mein zyada calories — jab bhookh zyada aur time kam ho</td><td>Badri Ghee Gond Laddoo</td></tr>' +
      '<tr><td>"Til aur mandua khao"</td><td>Dono calcium-rich ingredients hain</td><td>Mandua–Til Laddoo</td></tr>' +
      '<tr><td>"Panjiri ke bina jaapa nahi"</td><td>Bhuna anaaj, nuts, beej — iron-containing ingredients</td><td>Pahadi Panjiri</td></tr>' +
      '<tr><td>"Pehle das din halka khana"</td><td>Naram, garam, fibre waala khana — aaram se pachta hai</td><td>Jhangora Kheer · Khichdi Kit</td></tr>' +
      '<tr><td>"Thanda paani nahi, ajwain ka paani"</td><td>Asli fayda: din bhar paani peene ki aadat</td><td>Ajwain–Saunf–Jeera Sachets</td></tr>' +
      '<tr><td>"Daal ka paani piyo"</td><td>Halka protein, namkeen garmahat</td><td>Gahat Soup Mix</td></tr>' +
      '</tbody></table></div></div></section>' +

      '<section><div class="wrap split"><div><span class="kicker">Baby ka kya?</span><h2>6 mahine tak baby ki poori thali = <em>maa ka doodh</em></h2>' +
      '<p>Isliye hum baby ko nahi, <strong>maa ko khilate hain</strong>. "Maa ka khana hi baby ki thali hai" — yeh humare dil ki baat hai, koi medical claim nahi.</p>' +
      '<p>Research kya kehti hai: doodh mein kuch poshak tatva — jaise DHA, iodine, vitamin B12 — maa ke khaan-paan ke saath badalte hain. Calcium aur iron ke liye aisa saaf saboot nahi hai. ' + src('British Journal of Nutrition, 2024') + '</p></div>' +
      '<div class="honest"><div class="ic">🙏</div><p><strong>Jo hum nahi kehte:</strong> humara khana doodh ki matra nahi badhata, doodh ke poshan ko nahi badalta, aur baby ke wazan ya sehat ka koi vaada nahi karta. Feeding mein dikkat ho toh lactation consultant ya doctor se milein. Hum sirf maa ka pet aur mann bharte hain.</p></div></div></section>' +

      '<section class="alt"><div class="wrap"><span class="kicker">Isliye clean, isliye pahadi</span>' +
      '<p class="pain">Label padhne, brand compare karne, reviews dekhne ka time kiske paas hai?</p>' +
      '<h2>Jab har niwala baby tak pahunchta hai, <em>shortcut nahi chalta</em></h2>' +
      '<p class="lede">Is waqt aapko sabse zyada darr milaavat aur chemicals ka hai. Toh research ki jagah proof rakh do: certificate aur lab report. 30 second mein bharosa.</p>' +
      '<div class="grid g4" style="margin-top:22px">' +
      mini('🧈', 'Organic Badri cow ghee', 'Pahadi Badri gaay ka ghee, humari apni supply chain se. Organic certificate yahan lagega.', 'certificate pending') +
      mini('🏔️', 'GI-registered naam', '"Uttarakhand Badri Cow Ghee" GI registry mein registered hai (application 1390).', 'humari eligibility confirm honi baaki') +
      mini('🧪', 'Har batch ki lab report', 'Pack ke QR se us batch ki report. NABL-accredited lab ke saath.', 'lab partner pending') +
      mini('🌴', 'No refined sugar', 'Meetha sirf dates ya gud se. Isliye hum "no added sugar" kabhi nahi likhte.', '') +
      '</div><div style="margin-top:22px"><a class="btn btn-g" href="#/proof">Saara proof dekho</a></div></div></section>' +

      '<section><div class="wrap"><h3>Sources</h3><ul class="sources">' +
      '<li>ICMR-NIN, <a href="https://www.nin.res.in/rdabook/brief_note.pdf" target="_blank" rel="noopener">Nutrient Requirements for Indians (RDA/EAR 2020), brief note</a> — calcium 1,200 mg/din (lactation). Energy aur protein ke exact figures primary table se confirm hone baaki.</li>' +
      '<li>NFHS-5 (2019–21) — mahilaon (15–49) mein anaemia 57.0%, pregnant 52.2% (<a href="https://eparlib.nic.in/bitstream/123456789/1932251/1/AU5023.pdf" target="_blank" rel="noopener">Sansad mein Health Ministry ka jawab</a>); C-section 21.5% (<a href="https://www.downtoearth.org.in/health/cesarean-births-on-the-rise-in-india-but-mizoram-nagaland-defy-trend-nfhs-5-80374" target="_blank" rel="noopener">Down to Earth</a>).</li>' +
      '<li><a href="https://www.frontiersin.org/articles/10.3389/fphys.2023.1121579" target="_blank" rel="noopener">Frontiers in Physiology (2023) review</a>, Kovacs ke kaam par aadharit — lactation mein bone density aur calcium (~210 mg/din).</li>' +
      '<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10918524" target="_blank" rel="noopener">British Journal of Nutrition (2024) systematic review</a> — maa ka khaan-paan aur doodh ke poshak tatva.</li>' +
      '<li><a href="https://www.cochrane.org/evidence/CD011625_interventions-preventing-postpartum-constipation" target="_blank" rel="noopener">Cochrane review CD011625</a> — delivery ke baad kabz.</li>' +
      '<li><a href="https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/1390" target="_blank" rel="noopener">GI Registry, application 1390</a> — Uttarakhand Badri Cow Ghee.</li>' +
      '</ul><p class="note">Yeh jaankari aam shiksha ke liye hai, medical salah nahi.</p></div></section>' + endCta;
  };
  function bt(when, h, p, soft) {
    return '<div class="card bt"><div class="when">' + when + '</div><h3>' + h + '</h3><p>' + p + '</p><p class="soft">' + soft + '</p></div>';
  }
  function mini(ic, h, p, pend) {
    return '<div class="card"><div style="font-size:1.8rem">' + ic + '</div><h3>' + h + '</h3><p class="note">' + p + '</p>' + (pend ? '<span class="tag-pend">' + pend + '</span>' : '') + '</div>';
  }

  pages.proof = function () {
    return '<section><div class="wrap"><span class="kicker">Our Proof</span>' +
      '<p class="pain">"Organic" toh sab likhte hain. Kaagaz kaun dikhata hai?</p>' +
      '<h1>Vaade nahi. <em>Kaagaz.</em></h1>' +
      '<p class="lede">Aapko brand pe research na karni pade, isliye humara saara proof ek jagah. Jo kaagaz abhi humare haath mein nahi hai, wahan saaf "pending" likha hai — nakli muhar hum nahi lagate.</p>' +
      '<div class="grid g4" style="margin-top:28px">' +
      cert('🌿', 'Organic certification', 'Badri cow ghee ke liye (NPOP / Jaivik Bharat).', '[Certificate no. — to be added]') +
      cert('🏔️', 'GI: Uttarakhand Badri Cow Ghee', 'GI registry mein registered naam, application 1390. Humari authorised-user eligibility confirm honi baaki.', '[Authorised user no. — to confirm]') +
      cert('🛡️', 'FSSAI licence', 'Har pack par licence number chhapa hoga.', '[FSSAI licence no. — to be added]') +
      cert('🧪', 'NABL-accredited lab', 'Har batch ki jaanch ek accredited lab mein.', '[Lab partner — to be added]') +
      '</div></div></section>' +

      '<section class="alt"><div class="wrap"><span class="kicker">Batch reports</span><h2>Har dabbe ki <em>apni report</em></h2><p class="lede">Pack ka QR scan karo, usi batch ki report khulegi. Neeche report ka namoona hai — yeh asli results nahi hain.</p>' +
      '<div class="grid g3" style="margin-top:22px">' +
      report('HM-GL-SAMPLE-01', 'Badri Ghee Gond Laddoo') + report('HM-PJ-SAMPLE-02', 'Pahadi Panjiri') + report('HM-GH-SAMPLE-03', 'Badri Cow Ghee') +
      '</div></div></section>' +

      '<section><div class="wrap split"><div><span class="kicker">Kahan se aata hai</span><h2>Pahad ka anaaj, <em>pahad ka ghee</em></h2>' +
      '<div class="stack">' +
      '<div class="card"><h3>🧈 Badri cow ghee</h3><p class="note">Uttarakhand ki pahadi Badri gaay. Humari parent brand Barsana Magic ki supply chain se.</p></div>' +
      '<div class="card"><h3>🌾 Mandua aur jhangora</h3><p class="note">Garhwal aur Kumaon ke pahadi kheton se — finger millet aur barnyard millet.</p></div>' +
      '<div class="card"><h3>🫘 Gahat (horse gram)</h3><p class="note">Pahad ki sardiyon ki daal.</p></div>' +
      '<div class="card"><h3>🧂 Pahadi namak</h3><p class="note">Sil-batte pe pisa masaaledaar namak — pisyun loon ki parampara.</p></div></div></div>' +
      '<div class="map"><svg viewBox="0 0 400 300" role="img" aria-label="Uttarakhand ka illustrative naksha: Dehradun, Garhwal aur Kumaon"><path d="M60 170 L95 110 L150 70 L215 45 L270 60 L330 95 L360 150 L340 205 L290 245 L225 255 L170 235 L120 240 L80 215Z" fill="#F3E7D3" stroke="#B85C38" stroke-width="2.5" stroke-linejoin="round" stroke-dasharray="6 5"/><path d="M150 70 L172 96 L196 62 L222 92 L248 58 L270 60" fill="none" stroke="#7D8450" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><g font-family="Mulish,sans-serif" font-size="12" font-weight="700" fill="#3A2A1E"><circle cx="108" cy="178" r="7" fill="#B85C38"/><text x="120" y="182">Dehradun · Himmaika</text><circle cx="200" cy="130" r="6" fill="#7D8450"/><text x="212" y="134">Garhwal · mandua, gahat</text><circle cx="285" cy="195" r="6" fill="#D9A441"/><text x="222" y="222">Kumaon · jhangora</text></g></svg><p class="note" style="margin:8px 0 0;text-align:center">Illustrative naksha — paimane ke hisaab se nahi. Sourcing ke gaon confirm hone par yahan aayenge.</p></div></div></section>' +

      '<section class="alt"><div class="wrap"><span class="kicker">Dadi panel</span><h2>Asli QA team: <em>pahad ki dadiyan</em></h2><p class="lede">Lab report milaavat pakadti hai. Dadi swaad pakadti hai. Har recipe pehle unse pass hogi. Panel abhi ban raha hai — unke naam aur unki baatein, unki ijaazat ke baad hi yahan aayengi.</p>' +
      '<div class="grid g3" style="margin-top:22px">' + [1, 2, 3].map(function () {
        return '<div class="card dadi"><div class="ava">👵</div><h3>[Naam, gaon — pending consent]</h3><blockquote>[Dadi ki baat — pending]</blockquote></div>';
      }).join('') + '</div></div></section>' +

      '<section><div class="wrap"><div class="honest"><div class="ic">🏷️</div><p><strong>Har pack par, hamesha:</strong> nutrition table, ingredients ki poori list, allergens (nuts, til, doodh), batch number, banne ki aur best-before date, aur FSSAI licence number. Dates ya gud se meethe products par hum "no added sugar" kabhi nahi likhenge — kyunki woh sach nahi hoga.</p></div></div></section>' + endCta;
  };
  function cert(ic, h, p, no) {
    return '<div class="cert"><div class="seal">' + ic + '</div><h3>' + h + '</h3><p>' + p + '</p><span class="tag-pend">pending</span><span class="no">' + no + '</span></div>';
  }
  function report(b, name) {
    return '<div class="card report"><span class="illus">Namoona · asli report nahi</span><div class="top"><div><h3>' + name + '</h3><div class="mono">Batch ' + b + '</div><div class="mono">Date: [DD-MM-YYYY]</div></div><div class="qr" aria-label="QR placeholder"></div></div><ul class="tick"><li>Pesticide residue — [result]</li><li>Heavy metals — [result]</li><li>Microbiology — [result]</li><li>Milaavat (adulterants) — [result]</li></ul></div>';
  }

};
