/* =========================================================
   PROTIV SJEČE — podaci o sadnji
   Ovdje ručno upisujete stabla nakon svake akcije sadnje.
   Karta i brojači na stranici se sami ažuriraju.
   =========================================================

   TREE_TYPES: vrste koje sadimo (simbol se crta na karti i u mreži zone)
   ZONES: zone sadnje — "goal" je cilj (broj stabala), "planted" po vrsti.
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
  { value: 700,  label: "sadnica — naš cilj" }
];

const ZONES = [
  {
    id: "velivrh",
    name: "Veli Vrh",
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
    desc: "Brdo iznad Velog Vrha — zemljište za koje se borimo da postane park-šuma, ne gradilište.",
    goal: 300,
    planted: { cesmina: 0, bor: 0, lovor: 0, maslina: 0, planika: 0 },
    center: [44.8960, 13.8500],
    polygon: [
      [44.9000, 13.8460], [44.8995, 13.8560], [44.8945, 13.8580],
      [44.8920, 13.8490], [44.8955, 13.8430]
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
  holder: "Udruga Protiv sječe — Pula",
  iban: "HR12 2340 0091 0000 0000 0",   // TODO: upišite pravi IBAN
  model: "HR00",
  desc: "Donacija za sadnju — Pula"
};

/* Pravni dokumenti — status: "dobiveno" | "u-tijeku" | "predano" */
const LEGAL_DOCS = [
  {
    title: "Zahtjev za uvid u katastarske čestice — Veli Vrh",
    date: "2026-03-14", status: "dobiveno",
    desc: "Izvodi iz katastra i zemljišnih knjiga za k.č. na Velom Vrhu; dokazuju da je zemljište javno dobro.",
    file: "docs/katastar-veli-vrh.pdf"
  },
  {
    title: "Primjedbe na prijedlog UPU Padulj",
    date: "2026-05-02", status: "predano",
    desc: "Formalne primjedbe u javnoj raspravi protiv prenamjene zelene zone u gradnju.",
    file: "docs/primjedbe-upu-padulj.pdf"
  },
  {
    title: "Upravna tužba — ukidanje lokacijske dozvole",
    date: "2026-06-19", status: "u-tijeku",
    desc: "Tužba Upravnom sudu u Rijeci protiv lokacijske dozvole izdane bez studije utjecaja na okoliš.",
    file: "docs/tuzba-lokacijska.pdf"
  },
  {
    title: "Peticija građana za zaštitu Pragrande — 1.550 potpisa",
    date: "2026-07-30", status: "predano",
    desc: "Peticija Gradskom vijeću Pule za zaštitu Pragrande, predana na sjednici Vijeća.",
    file: "docs/peticija-potpisi.pdf"
  },
  {
    title: "Rješenje o pravu na pristup informacijama",
    date: "2026-09-08", status: "dobiveno",
    desc: "Povjerenik za informiranje naložio Gradu da objavi ugovore o raspolaganju gradskim zemljištem.",
    file: "docs/rjesenje-ppi.pdf"
  }
];
