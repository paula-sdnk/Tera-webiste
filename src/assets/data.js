export const BASE_URL = "";
export const CONTACTS = {
  name: "Sergejus Vasilievas",
  statusInClub: "Direktorius",
  email: "tera.vilnius@gmail.com",
  phoneNumber: "+37068710033",
  location: "P. Vileišio g. 18-140, LT-10306 Vilnius",
};

export const ROUTES = [
  {
    path: `${BASE_URL}/`,
    text: "Pagrindinis",
    isSelected: false,
  },

  {
    path: `${BASE_URL}/parama`,
    text: "1.2% Parama",
    isSelected: false,
  },
  {
    path: `${BASE_URL}/komanda`,
    text: "Komanda",
    isSelected: false,
  },
  {
    path: `${BASE_URL}/klubas`,
    text: "Apie klubą",
    isSelected: false,
  },
  {
    path: `${BASE_URL}/kontaktai`,
    text: "Kontaktai",
    isSelected: false,
  },
];

export const CALLS_FOR_ACTIONS = [
  {
    path: "/",
    componentId: "promo",
    text: "Paremti Komanda",
  },
  {
    path: "/",
    componentId: "next-match",
    text: "Sekančios Rungtynės",
  },
];
