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
  { value: 1550, label: "potpisa za zaštitu Pragrande",   label_en: "signatures to protect Pragrande" },
  { value: 4,    label: "permakulturnih lokacija",        label_en: "permaculture sites" },
  { value: "?",  label: "stabala posječeno",              label_en: "trees cut down" }
];

const ZONES = [
  {
    id: "paganor-padulj",
    name: "Paganor-Padulj",
    tag: "park-šuma", tag_en: "forest park",
    desc: "Dio četvrti Veli Vrh, uz Sponzinu: zapuštene i posječene površine za koje se borimo da postanu park-šuma, a ne gradilište.",
    desc_en: "Part of the Veli Vrh district, by Sponzina street: neglected and clear-cut land we are fighting to turn into a forest park, not a construction site.",
    goal: 300,
    planted: { cesmina: 0, bor: 0, lovor: 0, maslina: 0, planika: 0 },
    /* šumarak između Fažanske ceste, Paduljskog puta (uz Sponzinu) i D75 */
    center: [44.8917, 13.8435],
    polygon: [
      [44.89315, 13.84259], [44.89298, 13.84333], [44.89281, 13.84395],
      [44.89259, 13.84450], [44.89228, 13.84480], [44.89159, 13.84485],
      [44.89098, 13.84510], [44.89047, 13.84535], [44.89024, 13.84510],
      [44.89020, 13.84430], [44.89029, 13.84358], [44.89063, 13.84271],
      [44.89098, 13.84211], [44.89137, 13.84149], [44.89155, 13.84124],
      [44.89176, 13.84131], [44.89246, 13.84174], [44.89289, 13.84222]
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
    id: "veruda",
    name: "Veruda, pilot-parcela",
    name_en: "Veruda pilot plot",
    tag: "pilot-projekt", tag_en: "pilot project",
    desc: "Parcela uz Valsaline na Verudi (k.č. 5160/25, k.o. Pula): naša prva Miyawaki šumica, pilot-projekt za koji smo dobili sponzorstvo.",
    desc_en: "A plot by Valsaline street in Veruda (cadastral parcel 5160/25, c.m. Pula): our first Miyawaki grove, a pilot project for which we received sponsorship.",
    goal: 120,
    planted: { cesmina: 0, bor: 0, lovor: 0, maslina: 0, planika: 0 },
    center: [44.8555, 13.8360],
    polygon: [
      [44.8559, 13.8358], [44.8557, 13.8364], [44.8552, 13.8365],
      [44.8549, 13.8359], [44.8552, 13.8353], [44.8557, 13.8354]
    ]
  }
];

/* Sljedeće lokacije: uz vodu i izvore, uskoro.
   Na karti su isprekidani plavi krugovi. Položaji su približni:
   center = [lat, lon], radius = polumjer kruga u metrima. */
const WISHLIST = [
  {
    id: "paganorsko-jezero",
    name: "Paganorsko jezero",
    name_en: "Paganor lake",
    desc: "Jezerce uz ulicu Fojba, u šumarku između Paganorske ulice i Fažanske ceste.",
    desc_en: "A small lake by Fojba street, in the wood between Paganorska street and Fažanska cesta.",
    center: [44.8942, 13.8440], radius: 70
  },
  {
    id: "velovrski-potok",
    name: "Velovrški potok",
    name_en: "Veli Vrh stream",
    desc: "Izvorište potoka na Mandraču, na dnu uvale Vela draga.",
    desc_en: "The stream's spring at Mandrač, at the head of Vela draga bay.",
    center: [44.8852, 13.8484], radius: 70
  },
  {
    id: "mandracko-priobalje",
    name: "Mandračko priobalje",
    name_en: "Mandrač shore",
    desc: "Obala Mandrača kod lučice i mosta Valelunga.",
    desc_en: "The Mandrač shore by the small harbour and the Valelunga bridge.",
    center: [44.8839, 13.8472], radius: 90
  }
];

/* Donacijski razredi, iznos u EUR i što pokriva */
const DONATION_TIERS = [
  { amount: 6,   label: "1 sadnica",  label_en: "1 sapling",
    desc: "jedna autohtona sadnica s kolcem i zaštitom",
    desc_en: "one native sapling with stake and protection" },
  { amount: 30,  label: "5 sadnica",  label_en: "5 saplings",
    desc: "niz stabala uz stazu na Velom Vrhu",
    desc_en: "a row of trees along the Veli Vrh path" },
  { amount: 72,  label: "12 sadnica", label_en: "12 saplings",
    desc: "mali šumarak sa zalijevanjem prve godine",
    desc_en: "a small grove with first-year watering" },
  { amount: 150, label: "25 sadnica", label_en: "25 saplings",
    desc: "obnova jedne posječene parcele",
    desc_en: "restoring one clear-cut plot" }
];

const BANK = {
  holder: "Građanska inicijativa Posadi stablo! Pula",
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
