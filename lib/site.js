// Single source of truth for business details and page content.
// Contact details are taken verbatim from
// https://www.landinsightkashmirtour.com/kashmir-tour-package/

export const SITE = {
  name: "Land Insight Kashmir Tour",
  url: "https://www.landinsightkashmirtour.in",
  pagePath: "/kashmir-tour-package/",
  tagline: "Local Kashmir Travel Experts",
  phones: [
    { display: "+91 70515 10460", tel: "+917051510460" },
    { display: "+91 70064 29957", tel: "+917006429957" },
  ],
  email: "reservationslandsinsight@gmail.com",
  whatsapp: {
    number: "917051510460",
    display: "+91 70515 10460",
    defaultText: "Hello! I'm contacting you from your Kashmir tour packages page.",
  },
  address: {
    lines: ["Kunzar Batpora, on the way Gulmarg Road", "Jammu & Kashmir – 193404"],
    street: "Kunzar Batpora, on the way Gulmarg Road",
    locality: "Kunzar",
    region: "Jammu and Kashmir",
    postalCode: "193404",
    country: "IN",
  },
};

// Image files live in public/images and keep their original names.
export function img(file) {
  return `/images/${encodeURIComponent(file)}`;
}

export const PAGE_URL = `${SITE.url}${SITE.pagePath}`;
export const PRIMARY_PHONE = SITE.phones[0];

export function whatsappLink(text = SITE.whatsapp.defaultText) {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

// The six packages listed on the reference page. Names, durations, discount
// badges and inclusions (Transfers, Hotels, Meals, Sightseeing) come from the
// source. `price` is the "Starting from" per-person rate (from the business rate
// sheet); `mrp` is an optional struck-through price.
// If `price` is null the card shows "On request".
// Day-wise plans are indicative routes and are labelled as such on the page.
export const PACKAGES = [
  {
    slug: "kashmir-paradise",
    name: "Kashmir Paradise",
    fullName: "Kashmir Paradise Tour Package",
    nights: 4,
    days: 5,
    discount: 65,
    price: 9925, // ₹ per person – business rate sheet (4 Pax, Standard)
    mrp: null, // optional original price shown struck through
    tag: "Most popular",
    route: ["Srinagar", "Gulmarg", "Pahalgam"],
    idealFor: "First-time visitors",
    summary:
      "Our signature Kashmir tour package covering the valley's classic trio — Dal Lake in Srinagar, the meadows of Gulmarg and the Lidder valley in Pahalgam.",
    image: img("KashmirParadise.png"),
    alt: "Traveller in a wildflower meadow with snow peaks on the Kashmir Paradise tour package",
    itinerary: [
      ["Arrive in Srinagar", "Airport pick-up, hotel check-in and an evening shikara ride on Dal Lake."],
      ["Gulmarg day trip", "Drive to Gulmarg for its meadows and the optional Gulmarg Gondola ride."],
      ["Srinagar to Pahalgam", "Scenic drive past saffron fields and Avantipora ruins to Pahalgam."],
      ["Pahalgam & Mughal Gardens", "Morning in Pahalgam, return to Srinagar to visit the Mughal Gardens."],
      ["Departure", "Transfer to Srinagar airport with memories of your Kashmir trip."],
    ],
  },
  {
    slug: "kashmir-honeymoon",
    name: "Kashmir Honeymoon",
    fullName: "Kashmir Honeymoon Tour Package",
    nights: 5,
    days: 6,
    discount: 50,
    price: 13700, // ₹ per person – business rate sheet (2 Pax, Standard)
    mrp: null, // optional original price shown struck through
    tag: "For couples",
    route: ["Srinagar", "Sonamarg", "Gulmarg", "Pahalgam"],
    idealFor: "Couples & newlyweds",
    summary:
      "A relaxed Kashmir honeymoon package with a houseboat evening on Dal Lake, snow at Gulmarg and Sonamarg, and quiet riverside time in Pahalgam.",
    image: img("honeymoonpackage.png"),
    alt: "Couple enjoying the snow by Dal Lake on a Kashmir honeymoon package",
    itinerary: [
      ["Arrive in Srinagar", "Check in to your hotel or houseboat and enjoy a sunset shikara ride."],
      ["Sonamarg excursion", "Day trip to the 'Meadow of Gold' and the Thajiwas glacier viewpoint."],
      ["Gulmarg excursion", "Gondola ride, snow activities and pine-forest walks in Gulmarg."],
      ["Srinagar to Pahalgam", "Drive along the Lidder river to Pahalgam for an overnight stay."],
      ["Pahalgam sightseeing", "Betaab Valley, Aru and Chandanwari by local transport."],
      ["Departure", "Return to Srinagar for your onward flight."],
    ],
  },
  {
    slug: "mata-vaishno-devi",
    name: "Mata Vaishno Devi",
    fullName: "Mata Vaishno Devi Tour Package",
    nights: 2,
    days: 3,
    discount: 35,
    price: 8700, // ₹ per person – business rate sheet (10 Pax, Standard)
    mrp: null, // optional original price shown struck through
    tag: "Pilgrimage",
    route: ["Jammu", "Katra", "Bhawan"],
    idealFor: "Pilgrims & families",
    summary:
      "A short, well-organised Mata Vaishno Devi yatra package with stays in Katra and transfers from Jammu, so you can focus on the darshan.",
    image: img("Mata Vaishno Devi at Dusk.png"),
    alt: "Mata Vaishno Devi Bhawan lit up at dusk on the Trikuta hills",
    itinerary: [
      ["Jammu to Katra", "Pick-up from Jammu airport or railway station, transfer to your Katra hotel."],
      ["Yatra to Bhawan", "Trek to the holy shrine for darshan (pony, palki or helicopter on request, subject to availability)."],
      ["Departure", "Return from Katra to Jammu for your onward journey."],
    ],
  },
  {
    slug: "kashmir-family",
    name: "Kashmir Family",
    fullName: "Kashmir Family Tour Package",
    nights: 3,
    days: 4,
    discount: 45,
    price: 8966, // ₹ per person – business rate sheet (6 Pax, Standard)
    mrp: null, // optional original price shown struck through
    tag: "For families",
    route: ["Srinagar", "Gulmarg", "Sonamarg"],
    idealFor: "Families with kids & elders",
    summary:
      "A comfortable Kashmir family tour package with easy drives, family-friendly hotels and sightseeing that suits children and senior travellers.",
    image: img("Family Adventure in Kashmir Valley.png"),
    alt: "Family enjoying a lakeside view in the Kashmir valley on a family tour package",
    itinerary: [
      ["Arrive in Srinagar", "Hotel check-in, Mughal Gardens and a gentle shikara ride on Dal Lake."],
      ["Gulmarg day trip", "Snow play, pony rides and the Gulmarg Gondola for the whole family."],
      ["Sonamarg day trip", "Drive along the Sindh river to the meadows of Sonamarg."],
      ["Departure", "Transfer to Srinagar airport."],
    ],
  },
  {
    slug: "kashmir-group",
    name: "Kashmir Group",
    fullName: "Kashmir Group Tour Package",
    nights: 3,
    days: 4,
    discount: 35,
    price: 9300, // ₹ per person – business rate sheet (8 Pax, Standard)
    mrp: null, // optional original price shown struck through
    tag: "For groups",
    route: ["Srinagar", "Gulmarg", "Pahalgam"],
    idealFor: "Friends, offices & large groups",
    summary:
      "A Kashmir group tour package with group-friendly vehicles, coordinated hotel blocks and one point of contact for the whole trip.",
    image: img("grouptorpackage.png"),
    alt: "Group of friends playing in the snow on a Kashmir group tour package",
    itinerary: [
      ["Arrive in Srinagar", "Group pick-up, check-in and a shikara ride on Dal Lake."],
      ["Gulmarg day trip", "Gondola, snow activities and group photos in Gulmarg."],
      ["Pahalgam day trip", "Betaab Valley, the Lidder river and Pahalgam market."],
      ["Departure", "Group transfer to Srinagar airport."],
    ],
  },
  {
    slug: "kashmir-leh-ladakh",
    name: "Kashmir / Leh Ladakh",
    fullName: "Kashmir / Leh Ladakh Tour Package",
    nights: 6,
    days: 7,
    discount: 25,
    price: 17050, // ₹ per person – business rate sheet (2 Pax, Superior)
    mrp: null, // optional original price shown struck through
    tag: "Road trip",
    route: ["Srinagar", "Sonamarg", "Kargil", "Leh", "Nubra"],
    idealFor: "Adventure & road-trip lovers",
    summary:
      "A Kashmir and Leh Ladakh tour package crossing Zoji La from Srinagar to Leh, with Nubra Valley and the monasteries of Ladakh along the way.",
    image: img("Alpine Winter River Valley.png"),
    alt: "Snowy Himalayan river valley on the Kashmir and Leh Ladakh road trip",
    itinerary: [
      ["Arrive in Srinagar", "Check in and evening at leisure on the Dal Lake boulevard."],
      ["Srinagar to Kargil", "Via Sonamarg and the Zoji La pass to Kargil."],
      ["Kargil to Leh", "Lamayuru moonland and Magnetic Hill on the way to Leh."],
      ["Leh sightseeing", "Shanti Stupa, Leh Palace and nearby monasteries."],
      ["Leh to Nubra Valley", "Over Khardung La to the sand dunes of Hunder."],
      ["Nubra to Leh", "Diskit Monastery, then return to Leh."],
      ["Departure", "Transfer to Leh airport."],
    ],
    note: "The Srinagar–Leh highway is seasonal. We confirm the route for your travel dates.",
  },
];

export const INCLUSIONS = ["Hotels", "Meals", "Transfers", "Sightseeing"];

export const DESTINATIONS = [
  {
    slug: "srinagar",
    name: "Srinagar",
    text: "Dal Lake shikaras, heritage houseboats, Mughal gardens and the tulip garden in spring.",
    image: img("Snowy Mountain Lake Village at Golden Hour.png"),
    alt: "Houseboats and shikara on Dal Lake in Srinagar at golden hour",
  },
  {
    slug: "gulmarg",
    name: "Gulmarg",
    text: "The 'Meadow of Flowers' — Gulmarg Gondola, skiing and snow adventures in winter.",
    image: img("Gulmarg Alpine Gondola Panorama.png"),
    alt: "Gulmarg Gondola above snow-covered slopes on a Kashmir tour package",
  },
  {
    slug: "pahalgam",
    name: "Pahalgam",
    text: "Pine forests and the Lidder river, with Betaab Valley, Aru and Chandanwari nearby.",
    image: img("Pahalgam Valley River and Horses.png"),
    alt: "Horses grazing by the Lidder river in Pahalgam, Kashmir holiday package",
  },
  {
    slug: "sonamarg",
    name: "Sonamarg",
    text: "The 'Meadow of Gold', gateway to Thajiwas glacier and the road to Ladakh.",
    image: img("Sonmarg Alpine Valley Adventure.png"),
    alt: "Pony ride along the river in the Sonamarg valley, Kashmir sightseeing",
  },
  {
    slug: "doodhpathri",
    name: "Doodhpathri",
    text: "Quiet, open meadows and milky streams — a peaceful day trip from Srinagar.",
    image: img("Snowy Mountain Meadow with River Rapids.png"),
    alt: "Meadows and a rushing stream at Doodhpathri, Kashmir",
  },
  {
    slug: "yusmarg",
    name: "Yusmarg",
    text: "Untouched pastures and pine forests, ideal for slow walks and picnics.",
    image: img("Yusmarg Alpine Meadow Retreat.png"),
    alt: "Alpine meadow and lake at Yusmarg, Kashmir",
  },
];

// Genuine reviews published on the reference page. The source shows no
// names or star ratings, so none are displayed.
export const TESTIMONIALS = [
  {
    quote:
      "I had an absolutely amazing memories with Lands Insight Kashmir Tour. Everything was great — the location, the hospitality, the food, the rooms, the staff...",
    trip: "Kashmir trip",
  },
  {
    quote:
      "Hiked Great-Lakes this June with them. The smooth booking and the services provided after that were just amazing. We didn't know that we will be given a VIP treat. Thanks, team for making our trip a memorable one. We certainly will return your favors one day.",
    trip: "Kashmir Great Lakes trek",
  },
  {
    quote:
      "Did an unforgettable, real adventure trip, The Great Lakes organized by Lands Insight Kashmir Tour... Thank you",
    trip: "Kashmir Great Lakes trek",
  },
];

export const FAQS = [
  {
    q: "What is the best Kashmir tour package?",
    a: "For most first-time visitors, a 4 nights / 5 days package covering Srinagar, Gulmarg and Pahalgam — like our Kashmir Paradise package — gives the best balance of time and sightseeing. Couples often prefer the 5 nights / 6 days Kashmir Honeymoon package, which adds Sonamarg.",
  },
  {
    q: "How many days are enough for a Kashmir trip?",
    a: "Five to six days is ideal to see Srinagar, Gulmarg, Pahalgam and Sonamarg without rushing. With 3–4 days you can comfortably cover Srinagar plus two day trips. Add 3–4 more days if you want to continue to Leh Ladakh.",
  },
  {
    q: "Which places are included in a Kashmir tour package?",
    a: "Most Kashmir tour packages include Srinagar (Dal Lake, Mughal Gardens), Gulmarg, Pahalgam and Sonamarg. Doodhpathri, Yusmarg and Leh Ladakh can be added depending on your days and interests.",
  },
  {
    q: "What is included in a Kashmir tour package?",
    a: "Our Kashmir packages include hotel stays, meals, private transfers and sightseeing as per the itinerary. Activities such as the Gulmarg Gondola, pony rides and local union cabs in Pahalgam are usually paid locally — we will explain this clearly in your quote.",
  },
  {
    q: "Is Kashmir suitable for family holidays?",
    a: "Yes. Kashmir is very popular with families. We plan shorter drives, family rooms and relaxed sightseeing so children and senior travellers stay comfortable throughout the trip.",
  },
  {
    q: "Is Kashmir good for honeymoon trips?",
    a: "Kashmir is one of India's favourite honeymoon destinations — think houseboat stays on Dal Lake, snow in Gulmarg and quiet riverside evenings in Pahalgam. Our honeymoon packages can include special touches on request.",
  },
  {
    q: "What is the best time to visit Kashmir?",
    a: "March to June is ideal for pleasant weather, blooming gardens and the tulip festival. July to October is great for green meadows and Ladakh road trips, while December to February is best for snow and skiing in Gulmarg.",
  },
  {
    q: "Can I customize my Kashmir tour package?",
    a: "Absolutely. Every package can be customised — change the number of days, hotels, destinations or vehicle. Share your dates, group size and budget, and our local team will build a personalised Kashmir itinerary.",
  },
  {
    q: "Do Kashmir tour packages include hotels and transfers?",
    a: "Yes. Our Kashmir tour packages include hotel accommodation and private transfers, including airport pick-up and drop in Srinagar, as well as sightseeing transport as per the itinerary.",
  },
  {
    q: "How can I book a Kashmir tour package?",
    a: "Fill in the free quote form on this page, message us on WhatsApp or call +91 70515 10460. We will share a detailed itinerary and quote, and confirm your booking once you are happy with the plan.",
  },
];
