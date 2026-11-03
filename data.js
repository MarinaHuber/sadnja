/* =========================================================
   POSADI STABLO!, podaci o projektima
   Ovdje ručno upisujete stabla nakon svake akcije sadnje.
   Karta i brojači na stranici se sami ažuriraju.
   Polja koja završavaju na _en su engleski prijevod;
   ako nedostaju, prikazuje se hrvatski tekst.
   =========================================================
*/

const TREE_TYPES = {
  cesmina: { label: "Hrast crnika (česmina)", label_en: "Holm oak",        latin: "Quercus ilex",     symbol: "🌳", color: "#2f6b3a" },
  bor:     { label: "Alepski bor",            label_en: "Aleppo pine",     latin: "Pinus halepensis", symbol: "🌲", color: "#1f4d33" },
  lovor:   { label: "Lovor",                  label_en: "Bay laurel",      latin: "Laurus nobilis",   symbol: "🌿", color: "#4a7c3f" },
  maslina: { label: "Maslina",                label_en: "Olive",           latin: "Olea europaea",    symbol: "🫒", color: "#6b7c3a" },
  planika: { label: "Planika",                label_en: "Strawberry tree", latin: "Arbutus unedo",    symbol: "🍃", color: "#3f7c5a" }
};

/* Brojke u hero sekciji, argumenti, ne sadnja.
   Uredite vrijednosti i oznake po stvarnim podacima. */
const HERO_STATS = [
  { value: 1240, label: "stabala posječeno od 2024.",     label_en: "trees cut down since 2024" },
  { value: 1550, label: "potpisa za zaštitu Pragrande",   label_en: "signatures to protect Pragrande" },
  { value: 6,    label: "permakulturnih lokacija",        label_en: "permaculture sites" }
];

const ZONES = [
  {
    id: "velivrh",
    name: "Veli Vrh",
    tag: "pošumljavanje", tag_en: "reforestation",
    desc: "Sjeverna gradska četvrt: zapuštene parcele i posječeni pojasevi koje vraćamo zelenilu.",
    desc_en: "Pula's northern district, neglected plots and clear-cut strips we are bringing back to green.",
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
    tag: "park-šuma", tag_en: "forest park",
    desc: "Brdo iznad Velog Vrha: zemljište za koje se borimo da postane park-šuma, a ne gradilište.",
    desc_en: "The hill above Veli Vrh, land we are fighting to turn into a forest park, not a construction site.",
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
    tag: "urbana permakultura", tag_en: "urban permaculture",
    desc: "Zelena dolina u srcu grada: 1.550 građana potpisalo je peticiju za njezinu zaštitu.",
    desc_en: "A green valley in the heart of the city, 1,550 citizens signed the petition for its protection.",
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
    name: "Šijana, kod City Malla",
    name_en: "Šijana, by City Mall",
    tag: "urbano zelenilo", tag_en: "urban greenery",
    desc: "Zeleni pojas uz trgovački centar: rub parkirališta pretvaramo u sjenu i zelenilo.",
    desc_en: "A small strip by the shopping centre, turning the parking lot's edge into shade and greenery.",
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
    tag: "permakultura", tag_en: "permaculture",
    desc: "Rubni dio grada s plodnim parcelama: ogledna permakulturna polja i voćnjak.",
    desc_en: "The city's edge with fertile plots, demonstration permaculture fields and an orchard.",
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
    name: "Marsovo polje, Mandrač",
    name_en: "Marsovo polje, Mandrač harbour",
    tag: "edukacija", tag_en: "education",
    desc: "Prostor uz mandrač: edukativni vrt u kojem s građanima i školama učimo saditi autohtone vrste.",
    desc_en: "The space by the small harbour, an educational garden where citizens and schools learn to plant native species.",
    goal: 100,
    planted: { cesmina: 0, bor: 0, lovor: 0, maslina: 0, planika: 0 },
    center: [44.8660, 13.8370],
    polygon: [
      [44.8678, 13.8348], [44.8675, 13.8395], [44.8648, 13.8398],
      [44.8642, 13.8352], [44.8660, 13.8335]
    ]
  }
];

/* Donacijski razredi, iznos u EUR i što pokriva */
const DONATION_TIERS = [
  { amount: 6,   label: "1 sadnica",  label_en: "1 sapling",
    desc: "jedna autohtona sadnica s kolcem i zaštitom",
    desc_en: "one native sapling + stake and protection" },
  { amount: 30,  label: "5 sadnica",  label_en: "5 saplings",
    desc: "niz stabala uz stazu na Velom Vrhu",
    desc_en: "a row of trees along the Veli Vrh path" },
  { amount: 72,  label: "12 sadnica", label_en: "12 saplings",
    desc: "mali šumarak sa zalijevanjem prve godine",
    desc_en: "a micro-grove with first-year irrigation" },
  { amount: 150, label: "25 sadnica", label_en: "25 saplings",
    desc: "obnova jedne posječene parcele",
    desc_en: "restoring one clear-cut plot" }
];

const BANK = {
  holder: "Građanska inicijativa Posadi stablo!, Pula",
  iban: "HR12 2340 0091 0000 0000 0",   // TODO: upišite pravi IBAN
  model: "HR00",
  desc: "Donacija za sadnju, Pula",
  desc_en: "Donation for planting, Pula"
};

/* Pravni dokumenti, status: "dobiveno" | "predano" | "u-tijeku" */
const LEGAL_DOCS = [
  {
    title: "Peticija građana za zaštitu Pragrande, 1.550 potpisa",
    title_en: "Citizens' petition to protect Pragrande, 1,550 signatures",
    date: "2026-07-30", status: "predano",
    desc: "1.550 građana potpisalo je zahtjev za zaštitu Pragrande, predan Gradskom vijeću Pule na sjednici Vijeća.",
    desc_en: "1,550 citizens signed the demand to protect Pragrande, submitted to Pula City Council at a Council session.",
    file: "docs/peticija-pragrande.pdf"
  },
  {
    title: "Elaborat o gradskim česticama, poslan Gradu Puli",
    title_en: "Study of city-owned parcels, sent to the City of Pula",
    date: "2026-06-19", status: "u-tijeku",
    desc: "Detaljan elaborat o gradskim česticama pogodnima za sadnju i zaštitu, poslan Gradu Puli. Na odgovor čekamo već četiri mjeseca.",
    desc_en: "A detailed study of city-owned parcels suitable for planting and protection, sent to the City of Pula. We have been waiting 4 months for an answer.",
    file: "docs/elaborat-gradske-cestice.pdf"
  },
  {
    title: "Zahtjev za uvid u katastarske čestice, Veli Vrh",
    title_en: "Request for access to cadastral parcels, Veli Vrh",
    date: "2026-03-14", status: "dobiveno",
    desc: "Izvodi iz katastra i zemljišnih knjiga za k.č. na Velom Vrhu; dokazuju da je zemljište javno dobro.",
    desc_en: "Extracts from the cadastre and land registry for Veli Vrh parcels; they prove the land is a public good.",
    file: "docs/katastar-veli-vrh.pdf"
  },
  {
    title: "Upravna tužba, ukidanje lokacijske dozvole",
    title_en: "Administrative lawsuit, annulment of the location permit",
    date: "2026-06-19", status: "u-tijeku",
    desc: "Tužba Upravnom sudu u Rijeci protiv lokacijske dozvole izdane bez studije utjecaja na okoliš.",
    desc_en: "Lawsuit before the Administrative Court in Rijeka against a location permit issued without an environmental impact study.",
    file: "docs/tuzba-lokacijska.pdf"
  },
  {
    title: "Rješenje o pravu na pristup informacijama",
    title_en: "Ruling on the right of access to information",
    date: "2026-09-08", status: "dobiveno",
    desc: "Povjerenik za informiranje naložio Gradu da objavi ugovore o raspolaganju gradskim zemljištem.",
    desc_en: "The Information Commissioner ordered the City to publish contracts on the disposal of city land.",
    file: "docs/rjesenje-ppi.pdf"
  }
];

/* Suradnja i edukacija, status: "aktivno" | "u-pripremi" | "otvoreno" */
const PARTNERS = [
  {
    name: "Permakultura Hrvatska (PerForum)",
    status: "aktivno",
    desc: "Nacionalna permakulturna mreža s kojom razvijamo edukacije, radionice dizajna i tečajeve za građane Pule.",
    desc_en: "The national permaculture network, together we develop education, design workshops and courses for the citizens of Pula.",
    url: "https://www.perforum.info/hrvatska-permakultura/"
  },
  {
    name: "Pčelarske udruge Istre",
    name_en: "Istrian beekeeping associations",
    status: "u-pripremi",
    desc: "Dogovaramo suradnju oko medonosnog bilja: rubove zona sadnje zasijavamo autohtonim cvjetnim vrstama kao pašu za pčele i druge oprašivače. (Upišite konkretnu udrugu kad suradnja bude potvrđena.)",
    desc_en: "We are arranging a collaboration on honey plants: the edges of planting zones sown with native flowering species as pasture for bees and other pollinators. (Add the specific association once confirmed.)",
    url: ""
  },
  {
    name: "Školski vrtovi Pula",
    name_en: "School gardens Pula",
    status: "u-pripremi",
    desc: "Program edukativnih vrtova s osnovnim školama: djeca posade i godinama prate svoje stablo. (Dopišite stvarne partnere u data.js.)",
    desc_en: "A programme of educational gardens with primary schools, children plant a tree and follow it through the years. (Add real partners in data.js.)",
    url: ""
  },
  {
    name: "Vaša udruga, škola ili rasadnik?",
    name_en: "Your organisation, school or nursery?",
    status: "otvoreno",
    desc: "Sadite autohtono bilje, obnavljate šume ili vodite edukacije u Istri? Javite nam se na protivsjece.pula@gmail.com; gradimo zajednički kalendar sadnje.",
    desc_en: "Do you plant native species, restore forests or run education programmes in Istria? Write to protivsjece.pula@gmail.com, we are building a shared planting calendar.",
    url: ""
  }
];
