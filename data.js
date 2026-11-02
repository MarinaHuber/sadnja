/* =========================================================
   PROTIV SJEČE — podaci o projektima
   Ovdje ručno upisujete stabla nakon svake akcije sadnje.
   Karta i brojači na stranici se sami ažuriraju.
   =========================================================

   TREE_TYPES: vrste koje sadimo (simbol se crta na karti i u mreži zone)
   ZONES: portfelj projekata — "goal" je cilj (broj stabala), "planted" po vrsti,
          "tag" je vrsta projekta (pošumljavanje, urbana permakultura, edukacija…).
   Koordinate su približne (WGS84, lat/lng) — zamijenite točnijima po želji.
*/

const TREE_TYPES = {
  cesmina: { label: "Hrast crnika (česmina)", latin: "Quercus ilex",      symbol: "🌳", color: "#2f6b3a" },
  bor:     { label: "Alepski bor",            latin: "Pinus halepensis",  symbol: "🌲", color: "#1f4d33" },
  lovor:   { label: "Lovor",                  latin: "Laurus nobilis",    symbol: "🌿", color: "#4a7c3f" },
  maslina: { label: "Maslina",                latin: "Olea europaea",     symbol: "🫒", color: "#6b7c3a" },
  planika: { label: "Planika",                latin: "Arbutus unedo",     symbol: "🍃", color: "#3f7c5a" }
};

/* Brojke u hero sekciji — argumenti, ne sadnja (tu još nema brojki).
   Uredite vrijednosti i oznake po stvarnim podacima. */
const HERO_STATS = [
  { value: 1240, label: "stabala posječeno od 2024." },
  { value: 1550, label: "potpisa za zaštitu Pragrande" },
  { value: 6,    label: "permakulturnih lokacija" }
];

const ZONES = [
  {
    id: "velivrh",
    name: "Veli Vrh",
    tag: "pošumljavanje",
    desc: "Sjeverna četvrt Pule — zapuštene parcele i posječeni pojasevi koje vraćamo zelenilu.",
    goal: 400,
    planted: { cesmina: 0, bor: 0, lovor: 0, maslina: 0, planika: 0 },
    center: [44.8885, 13.8565],
    polygon: [
      [44.8930, 13.8520], [44.8925, 13.8615], [44.8870, 13.8640],
      [44.8838, 13.8565], [44.8870, 13.8500]
    ]
  },
  {
    id: "padulj",
    name: "Padulj",
    tag: "park-šuma",
    desc: "Brdo iznad Velog Vrha — zemljište za koje se borimo da postane park-šuma, ne gradilište.",
    goal: 300,
    planted: { cesmina: 0, bor: 0, lovor: 0, maslina: 0, planika: 0 },
    center: [44.8960, 13.8500],
    polygon: [
      [44.9000, 13.8460], [44.8995, 13.8560], [44.8945, 13.8580],
      [44.8920, 13.8490], [44.8955, 13.8430]
    ]
  },
  {
    id: "pragrande",
    name: "Pragrande",
    tag: "urbana permakultura",
    desc: "Zelena dolina u srcu grada — 1.550 građana potpisalo je peticiju za njezinu zaštitu.",
    goal: 150,
    planted: { cesmina: 0, bor: 0, lovor: 0, maslina: 0, planika: 0 },
    center: [44.8695, 13.8440],
    polygon: [
      [44.8715, 13.8415], [44.8712, 13.8468], [44.8682, 13.8472],
      [44.8672, 13.8428], [44.8695, 13.8405]
    ]
  },
  {
    id: "citymall",
    name: "Šijana — kod City Malla",
    tag: "urbano zelenilo",
    desc: "Mali pojas uz trgovački centar — pretvaramo rub parkirališta u sjenu i zelenilo.",
    goal: 80,
    planted: { cesmina: 0, bor: 0, lovor: 0, maslina: 0, planika: 0 },
    center: [44.8715, 13.8600],
    polygon: [
      [44.8730, 13.8580], [44.8728, 13.8622], [44.8702, 13.8625],
      [44.8698, 13.8585], [44.8714, 13.8570]
    ]
  },
  {
    id: "valdebek",
    name: "Valdebek",
    tag: "permakultura",
    desc: "Rubni dio grada s plodnim parcelama — ogledna permakulturna polja i voćnjak.",
    goal: 200,
    planted: { cesmina: 0, bor: 0, lovor: 0, maslina: 0, planika: 0 },
    center: [44.8525, 13.8695],
    polygon: [
      [44.8545, 13.8665], [44.8542, 13.8725], [44.8508, 13.8730],
      [44.8500, 13.8675], [44.8522, 13.8650]
    ]
  },
  {
    id: "marsovo",
    name: "Marsovo polje — Mandrač",
    tag: "edukacija",
    desc: "Prostor uz mandrač — edukativni vrt gdje s građanima i školama učimo saditi autohtono.",
    goal: 100,
    planted: { cesmina: 0, bor: 0, lovor: 0, maslina: 0, planika: 0 },
    center: [44.8660, 13.8370],
    polygon: [
      [44.8678, 13.8348], [44.8675, 13.8395], [44.8648, 13.8398],
      [44.8642, 13.8352], [44.8660, 13.8335]
    ]
  }
];

/* Donacijski razredi — iznos u EUR i što pokriva */
const DONATION_TIERS = [
  { amount: 6,   label: "1 sadnica", desc: "jedna autohtona sadnica + kolac i zaštita" },
  { amount: 30,  label: "5 sadnica", desc: "red stabala uz stazu na Velom Vrhu" },
  { amount: 72,  label: "12 sadnica", desc: "mikro-šumarak s navodnjavanjem prve godine" },
  { amount: 150, label: "25 sadnica", desc: "obnova jedne posječene parcele" }
];

const BANK = {
  holder: "Građanska inicijativa Protiv sječe — Pula",
  iban: "HR12 2340 0091 0000 0000 0",   // TODO: upišite pravi IBAN
  model: "HR00",
  desc: "Donacija za sadnju — Pula"
};

/* Suradnja i edukacija — partneri koji sade autohtono bilje i obnavljaju šume.
   status: "aktivno" | "u-pripremi" | "otvoreno" */
/* Pravni dokumenti i postignuća — status: "dobiveno" | "predano" | "u-tijeku" */
const LEGAL_DOCS = [
  {
    title: "Peticija građana za zaštitu Pragrande — 1.550 potpisa",
    date: "2026-07-30", status: "predano",
    desc: "Naše najveće postignuće dosad: 1.550 građana potpisalo je zahtjev za zaštitu Pragrande, predan Gradskom vijeću Pule na sjednici Vijeća.",
    file: "docs/peticija-pragrande.pdf"
  },
  {
    title: "Elaborat o gradskim česticama — poslan Gradu Puli",
    date: "2026-06-19", status: "u-tijeku",
    desc: "Detaljan elaborat o gradskim česticama pogodnima za sadnju i zaštitu, poslan Gradu Puli. Na odgovor čekamo već 4 mjeseca.",
    file: "docs/elaborat-gradske-cestice.pdf"
  },
  {
    title: "Zahtjev za uvid u katastarske čestice — Veli Vrh",
    date: "2026-03-14", status: "dobiveno",
    desc: "Izvodi iz katastra i zemljišnih knjiga za k.č. na Velom Vrhu; dokazuju da je zemljište javno dobro.",
    file: "docs/katastar-veli-vrh.pdf"
  },
  {
    title: "Rješenje o pravu na pristup informacijama",
    date: "2026-09-08", status: "dobiveno",
    desc: "Povjerenik za informiranje naložio Gradu da objavi ugovore o raspolaganju gradskim zemljištem.",
    file: "docs/rjesenje-ppi.pdf"
  }
];

const PARTNERS = [
  {
    name: "Permakultura Hrvatska (PerForum)",
    status: "aktivno",
    desc: "Nacionalna permakulturna mreža — s njima razvijamo edukacije, radionice dizajna i tečajeve za građane Pule.",
    url: "https://www.perforum.info/hrvatska-permakultura/"
  },
  {
    name: "Školski vrtovi Pula",
    status: "u-pripremi",
    desc: "Program edukativnih vrtova s osnovnim školama — djeca sade i prate svoje stablo kroz godine. (Dopišite stvarne partnere u data.js.)",
    url: ""
  },
  {
    name: "Vaša udruga, škola ili rasadnik?",
    status: "otvoreno",
    desc: "Sadite autohtono bilje, obnavljate šume ili vodite edukacije u Istri? Javite se na protivsjece.pula@gmail.com — gradimo zajednički kalendar sadnje.",
    url: ""
  }
];
