const image_1 =
  "url('https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQhTDyc7W-A5aQVSKqLfp6rL8LSOGi_fQGkWSmnh7C1Qs0VWw7lmcnbbhmFTXuVaL9g22FCiYN_z3D9uF8zIgUhS8-h7GAyBkrMj6-nKX4')";
const image_2 =
  "url('https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT-Iz_bZOducLNnqNF3T2-evxUSne7PaWPBlYZ9XVihpSPAn40hiS-2h05iii1w6YN3saUY28DY7l-TMPruQ5u7ec8wKQzyoCMfT9d9u48')";
const image_3 =
  "url('https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT-Iz_bZOducLNnqNF3T2-evxUSne7PaWPBlYZ9XVihpSPAn40hiS-2h05iii1w6YN3saUY28DY7l-TMPruQ5u7ec8wKQzyoCMfT9d9u48')";
const image_4 =
  "url('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ_L--wIQ77YTahf0Bg8Z7HPcufrqkQXw3EOG-1GAgMEkt0EkHrpAZlOkQc_a0BBYXChD755AifhV--BcAyrLLgGSfzkKzng2bKvgaAZg')";
const image_5 =
  "url('https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQnt0iwh_s6CLbL1auzGW14tS_VSsnNbCM-upWg5dDuZZyg-IZ3WyRaCJ7EFC71m4KcKGE5pUb13e0iIRWaQfcjw9dtWNqFVDkmCEXwGaU')";

export const Routes = [
  { path: "/home", name: "Home", pageHeader: "", backgroundImage: image_1 },
  {
    path: "/gallery",
    name: "Gallery",
    pageHeader: "",
    backgroundImage: image_2,
  },
  {
    path: "/bookings",
    name: "Bookings",
    pageHeader: "",
    backgroundImage: image_3,
  },
  {
    path: "/contact",
    name: "Contact",
    pageHeader: "",
    backgroundImage: image_4,
  },
  {
    path: "/letshavefun",
    name: "Fun",
    pageHeader: "Fun things to do",
    backgroundImage: image_5,
  },
];
