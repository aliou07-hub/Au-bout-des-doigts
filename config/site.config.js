/**
 * Au Bout Des Doigts — single source of truth for editable business info.
 * Edit this file to update hours, contact details, or social links across the whole site.
 */
window.SITE_CONFIG = {
  name: "Au Bout Des Doigts",
  city: "N'Djamena",
  country: "Chad",
  addressLine: "Avenue Idriss Miskine, N'Djamena, Chad",
  addressNote: "Rue du Havre, Portail Blanc, à gauche du restaurant Côté Jardin",
  phoneDisplay: "+235 63 10 75 92",
  phoneHref: "tel:+23563107592",
  whatsappHref: "https://wa.me/23563107592",
  mapsQuery: "Au Bout Des Doigts, Rue du Havre, N'Djamena, Chad",
  facebook: "https://www.facebook.com/p/Au-Bout-Des-Doigts-NDjamena-100082974925041/",

  // Hours: 7 days, split lunch/evening service. Edit here to change site-wide.
  hours: [
    { day: "Monday", open: "10:00", close2: null, spans: ["10:00 – 16:00", "18:00 – 00:00"] },
    { day: "Tuesday", spans: ["10:00 – 16:00", "18:00 – 00:00"] },
    { day: "Wednesday", spans: ["10:00 – 16:00", "18:00 – 00:00"] },
    { day: "Thursday", spans: ["10:00 – 16:00", "18:00 – 00:00"] },
    { day: "Friday", spans: ["10:00 – 16:00", "18:00 – 00:00"] },
    { day: "Saturday", spans: ["10:00 – 16:00", "18:00 – 00:00"] },
    { day: "Sunday", spans: ["10:00 – 16:00", "18:00 – 00:00"] },
  ],

  rating: {
    value: 4.4,
    count: 59,
    rank: "#3 of 17 restaurants in N'Djamena",
    source: "Tripadvisor",
    sourceUrl: "https://www.tripadvisor.com/Restaurant_Review-g293779-d8059624-Reviews-Au_Bout_Des_Doigts-N_Djamena.html"
  },

  cuisine: ["Italian", "French", "European", "Pizza"],
  features: [
    "Wood-fired pizza oven",
    "Outdoor garden terrace",
    "Reservations",
    "Table service",
    "Takeaway",
    "Full bar & wine list",
    "Vegetarian & vegan options",
    "Wheelchair accessible",
    "Dinner & late-night service"
  ],

  menuCategories: [
    { key: "pizza", label: "Wood-Fired Pizza", desc: "Thin, hand-stretched dough baked in a real wood-fired oven." },
    { key: "italian", label: "Italian & Pasta", desc: "Classic Italian plates made with quality imported ingredients." },
    { key: "grilled", label: "Grilled Meats", desc: "Char-grilled meats, a house specialty alongside the pizza." },
    { key: "local", label: "Local Dishes", desc: "Chadian favorites served alongside the European menu." },
    { key: "drinks", label: "Cocktails", desc: "A full bar program crafted for the lounge terrace." },
    { key: "wine", label: "Wine", desc: "A curated wine list to pair with dinner." },
  ]
};
