import bev01 from "../Assest/bev-01-011.webp";
import bev02 from "../Assest/bev-01-02.webp";
import bev03 from "../Assest/bev-01-03.webp";
import bev04 from "../Assest/bev-01-04.webp";
import bev05 from "../Assest/bev-01-05.webp";
import bev06 from "../Assest/bev-01-06.webp";
import bev07 from "../Assest/bev-01-07.webp";
import bev08 from "../Assest/bev-01-08.webp";

import bev21 from "../Assest/bev-02-01.webp";
import bev22 from "../Assest/bev-02-02.webp";
import bev23 from "../Assest/bev-02-03.webp";
import bev24 from "../Assest/bev-02-04.webp";
import bev25 from "../Assest/bev-02-05.webp";
import bev26 from "../Assest/bev-02-06.webp";
import bev27 from "../Assest/bev-02-07.webp";
import bev28 from "../Assest/bev-02-08.webp";

import bev31 from "../Assest/bev-03-01.webp";
import bev32 from "../Assest/bev-03-02.webp";
import bev33 from "../Assest/bev-03-03.webp";
import bev34 from "../Assest/bev-03-04.webp";
import bev35 from "../Assest/bev-03-05.webp";
import bev36 from "../Assest/bev-03-06.webp";
import bev37 from "../Assest/bev-03-07.webp";
import bev38 from "../Assest/bev-03-08.webp";

import bev41 from "../Assest/bev-04-01.webp";
import bev42 from "../Assest/bev-04-02.webp";
import bev43 from "../Assest/bev-04-03.webp";
import bev44 from "../Assest/bev-04-04.webp";
import bev45 from "../Assest/bev-04-05.webp";
import bev46 from "../Assest/bev-04-06.webp";
import bev47 from "../Assest/bev-04-07.webp";
import bev48 from "../Assest/bev-04-08.webp";

export const initialState = {
  get: [],
  increment: false,
  cart: [],
  cartdetails: [],
  qty2: [],
  search: [],
  teams: [
    {
      id: 1,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000069_20-fresho-capsicum-green.jpg",
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Fresho",
      details: "Capsicum - Green(Loose)",
      strike: "RS.52.63",
      rupees: 40,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: "GET 30% OFF",
    },
    {
      id: 2,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000071_14-fresho-carrot-orange.jpg",
      heading: "Fresho",
      details: "Carrot-Orange(Loose)",
      strike: "RS.13.16",
      rupees: 10,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: "GET 25% OFF",
    },
    {
      id: 3,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000102_17-fresho-cucumber.jpg",
      heading: "Fresho",
      details: "Cucumber(Loose)",
      strike: "RS.18.63",
      rupees: 14,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 5.00",
        "1kg-RS 50.00",
        "250g-RS 10.00",
        "500g-Rs 15.00",
      ],
      offer: "GET 58% OFF",
    },
    {
      id: 4,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000097_19-fresho-coriander-leaves.jpg",
      heading: "Fresho",
      details: "Coriander Leaves",
      strike: "RS.25",
      rupees: 19,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 80.00",
        "500g-Rs 60.00",
      ],
      qty: 1,
      offer: "GET 40% OFF",
    },
    {
      id: 5,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000159_27-fresho-potato.jpg",
      heading: "Fresho",
      details: "Potato",
      strike: "RS.35",
      rupees: 27,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 40.00", "1kg-RS 20.00", "250g-RS 20.00"],
      offer: "GET 40% OFF",
      qty: 1,
    },
    {
      id: 6,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg",
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Fresho",
      details: "Onion(Loose)",
      strike: "RS.151.32",
      rupees: 15,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 46.00", "1kg-RS 80.00", "5kg-RS 500.00"],
      offer: "GET 80% OFF",
    },
    {
      id: 7,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000063_20-fresho-broccoli.jpg",
      heading: "Fresho",
      details: "Borccoli",
      strike: "RS.28.03",
      rupees: 22,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 90.00",
        "250g-RS 15.00",
        "500g-Rs 40.00",
      ],
      offer: "GET 80% OFF",
    },
    {
      id: 8,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000047_21-fresho-beetroot.jpg",
      heading: "Fresho",
      details: "Beet -root (Loose)",
      strike: "RS.12.50",
      rupees: 9.0,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 100.00",
        "250g-RS 30.00",
        "500g-Rs 50.00",
      ],
      offer: "GET 30% OFF",
    },
  ],

  vegetables: [
    {
      id: 9,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg",
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Fresho",
      details: "Onion(Loose)",
      strike: "RS.151.32",
      rupees: 55,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 46.00", "1kg-RS 80.00", "5kg-RS 500.00"],
      offer: 20,
    },
    {
      id: 10,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000159_27-fresho-potato.jpg",
      heading: "Fresho",
      details: "Potato",
      strike: "RS.35",
      rupees: 82,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 40.00", "1kg-RS 20.00", "250g-RS 20.00"],
      offer: 5,
    },
    {
      id: 11,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000069_20-fresho-capsicum-green.jpg",
      heading: "Fresho",
      details: "Capsicum - Green(Loose)",
      strike: "RS.52.63",
      rupees: 114,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: 60,
    },
    {
      id: 12,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000071_14-fresho-carrot-orange.jpg",
      heading: "Fresho",
      details: "Carrot-Orange(Loose)",
      strike: "RS.13.16",
      rupees: 160,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: 15,
    },
    {
      id: 13,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000102_17-fresho-cucumber.jpg",
      heading: "Fresho",
      details: "Cucumber(Loose)",
      strike: "RS.18.63",
      rupees: 200,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 5.00",
        "1kg-RS 50.00",
        "250g-RS 10.00",
        "500g-Rs 15.00",
      ],
      offer: 70,
    },
    {
      id: 14,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000097_19-fresho-coriander-leaves.jpg",
      heading: "Fresho",
      details: "Coriander Leaves",
      strike: "RS.25",
      rupees: 15,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 80.00",
        "500g-Rs 60.00",
      ],
      offer: 40,
    },

    {
      id: 15,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000063_20-fresho-broccoli.jpg",
      heading: "Fresho",
      details: "Borccoli",
      strike: "RS.28.03",
      rupees: 250,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 90.00",
        "250g-RS 15.00",
        "500g-Rs 40.00",
      ],
      offer: 50,
    },
    {
      id: 16,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000047_21-fresho-beetroot.jpg",
      heading: "Fresho",
      details: "Beet -root (Loose)",
      strike: "RS.12.50",
      rupees: 300,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 100.00",
        "250g-RS 30.00",
        "500g-Rs 50.00",
      ],
      offer: 90,
    },
  ],
  vegetables2: [
    {
      id: 13,
      img: "https://www.bigbasket.com/media/uploads/p/s/40222670_1-thums-up-soft-drink.jpg",
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Thums Up",
      details: "Soft Drink",
      strike: "RS.99",
      rupees: 70,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 46.00", "1kg-RS 80.00", "5kg-RS 500.00"],
      offer: 20,
    },
    {
      id: 14,
      img: "https://www.bigbasket.com/media/uploads/p/s/100401162_19-coca-cola-diet-coke-soft-drink.jpg",
      heading: "Coca Cola",
      details: "Diet Coke Soft Drink",
      strike: "RS.50",
      rupees: 40,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 40.00", "1kg-RS 20.00", "250g-RS 20.00"],
      offer: 15,
    },
    {
      id: 15,

      img: "https://www.bigbasket.com/media/uploads/p/s/40018072_26-coca-cola-coke-zero-soft-drink-no-sugar.jpg",
      heading: "Coca Cola",
      details: "Zero Sugar Soft Drink",
      strike: "RS.60",
      rupees: 35,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: 5,
    },
    {
      id: 16,
      img: "https://www.bigbasket.com/media/uploads/p/s/40222671_1-sprite-soft-drink-lime-flavoured.jpg",
      heading: "Sprite",
      details: "Soft Drink",
      strike: "RS.99",
      rupees: 105,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: 40,
    },
    {
      id: 17,
      img: "https://www.bigbasket.com/media/uploads/p/s/251023_11-coca-cola-soft-drink-original-taste.jpg",
      heading: "Coca Cola",
      details: "Soft Drink",
      strike: "RS.40",
      rupees: 55,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 5.00",
        "1kg-RS 50.00",
        "250g-RS 10.00",
        "500g-Rs 15.00",
      ],
      offer: 35,
    },
    {
      id: 18,
      img: "https://www.bigbasket.com/media/uploads/p/s/265680_11-kinley-sparkling-water-club-soda.jpg",
      heading: "Kinley",
      details: "Sparkling Water - Club Soda",
      strike: "RS.50",
      rupees: 45,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 80.00",
        "500g-Rs 60.00",
      ],
      offer: 50,
    },
    {
      id: 19,
      img: "https://www.bigbasket.com/media/uploads/p/s/40104245_6-pepsi-black-soft-drink-max-taste-zero-caldiet.jpg",
      heading: "Pepsi",
      details: "Black Soft Drink - Max Taste",
      strike: "RS.35",
      rupees: 75,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 90.00",
        "250g-RS 15.00",
        "500g-Rs 40.00",
      ],
      offer: 100,
    },
    {
      id: 20,
      img: "https://www.bigbasket.com/media/uploads/p/s/100012281_10-red-bull-energy-drink.jpg",
      heading: "RED BULL",
      details: "Energy Drink",
      rating: "4.3",
      personrating: "900",
      strike: "RS.12.50",
      rupees: 195,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 100.00",
        "250g-RS 30.00",
        "500g-Rs 50.00",
      ],
      offer: 18,
    },
  ],

  vegetables3: [
    {
      id: 29,
      img: "https://www.bigbasket.com/media/uploads/p/l/1221868_1-fresho-tender-coconut.jpg",
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Fresho",
      details: "Tender Coconut",
      strike: "RS.200.20",
      rupees: 200,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 46.00", "1kg-RS 80.00", "5kg-RS 500.00"],
      offer: 25,
    },
    {
      id: 30,
      img: "https://www.bigbasket.com/media/uploads/p/l/40120006_5-fresho-pomegranate-small.jpg",
      heading: "Fresho",
      details: "Fresho Pomegranate Regular",
      strike: "RS.210",
      rupees: 160,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 40.00", "1kg-RS 20.00", "250g-RS 20.00"],
      offer: 32,
    },
    {
      id: 31,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000207_24-fresho-watermelon-small.jpg",
      heading: "Fresho",
      details: "Watermelon - Small",
      strike: "RS.94",
      rupees: 54,
      stock: "20",
      qty: 1,
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: 75,
    },
    {
      id: 32,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000267_24-fresho-orange-nagpur-regular.jpg",
      heading: "Fresho",
      details: "Apple - Shimla",
      strike: "RS.172.38",
      rupees: 132,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: 5,
    },
    {
      id: 33,
      img: "https://www.bigbasket.com/media/uploads/p/l/40033819_29-fresho-apple-shimla.jpg",
      heading: "Fresho",
      details: "Cucumber(Loose)",
      strike: "RS.18.63",
      rupees: 14,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 5.00",
        "1kg-RS 50.00",
        "250g-RS 10.00",
        "500g-Rs 15.00",
      ],
      offer: 35,
    },
    {
      id: 34,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000298_10-fresho-banganapalli-mango.jpg",
      heading: "Fresho",
      details: "Banganapalli Mango",
      strike: "RS.90",
      rupees: 64,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 80.00",
        "500g-Rs 60.00",
      ],
      offer: 40,
    },
    {
      id: 35,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000031_21-fresho-banana-yelakki.jpg",
      heading: "Fresho",
      details: "Banana - Yelakki",
      strike: "RS.110",
      rupees: 84,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 90.00",
        "250g-RS 15.00",
        "500g-Rs 40.00",
      ],
      offer: 15,
    },
    {
      id: 36,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000013_24-fresho-avocado.jpg",
      heading: "Fresho",
      details: "Avocado (Loose)",
      strike: "RS.207",
      rupees: 150,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 100.00",
        "250g-RS 30.00",
        "500g-Rs 50.00",
      ],
      offer: 8,
    },
  ],

  vegetables4: [
    {
      id: 21,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000126_16-fresho-lemon.jpg",
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Fresho",
      details: "Lemon (Loose)",
      strike: "RS.26.32",
      rupees: 15,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 46.00", "1kg-RS 80.00", "5kg-RS 500.00"],
      offer: 55,
    },
    {
      id: 22,
      img: "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
      heading: "Fresho",
      details: "Coriander Leaves",
      strike: "RS.25",
      rupees: 19,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 40.00", "1kg-RS 20.00", "250g-RS 20.00"],
      offer: 15,
    },
    {
      id: 23,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000338_13-fresho-ginger.jpg",
      heading: "Fresho",
      details: "Ginger (Loose)",
      strike: "RS.28",
      rupees: 21,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: 5,
    },
    {
      id: 24,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000330_14-fresho-garlic.jpg",
      heading: "Fresho",
      details: "Garlic (Loose)",
      strike: "RS.67.11",
      qty: 1,
      rupees: 30,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: 10,
    },
    {
      id: 25,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000104_17-fresho-curry-leaves.jpg",
      heading: "Fresho",
      details: "Curry Leaves",
      strike: "RS.50.21",
      rupees: 30,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 5.00",
        "1kg-RS 50.00",
        "250g-RS 10.00",
        "500g-Rs 15.00",
      ],
      offer: 28,
    },
    {
      id: 26,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000081_19-fresho-chilli-green-long-medium.jpg",
      heading: "Fresho",
      details: "Chilli - Green Long, Medium (Loose)",
      strike: "RS.10",
      rupees: 8,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 80.00",
        "500g-Rs 60.00",
      ],
      offer: 21,
    },
    {
      id: 27,
      img: "https://www.bigbasket.com/media/uploads/p/l/40010687_4-fresho-garlic-peeled.jpg",
      heading: "Fresho",
      details: "Garlic - Peeled",
      strike: "RS.55.26",
      rupees: 40,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 90.00",
        "250g-RS 15.00",
        "500g-Rs 40.00",
      ],
      offer: 26,
    },
    {
      id: 28,
      img: "https://www.bigbasket.com/media/uploads/p/l/10000079_16-fresho-chilli-bajji-mild.jpg",
      heading: "Fresho",
      details: "Chilli - Bajji, Mild (Loose)",
      strike: "RS.24",
      rupees: 10,
      qty: 1,
      stock: "20",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 100.00",
        "250g-RS 30.00",
        "500g-Rs 50.00",
      ],
      offer: 3,
    },
  ],

  beverage01: [
    {
      id: 29,
      img: bev01,
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Cadbury Bournvita",
      details: "Chocolate Health Drink",
      strike: "RS.151.32",
      rupees: 289,
      qty: 1,
      stock: "20",
      rating: "21 ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 46.00", "1kg-RS"],
      offer: 30,
    },
    {
      id: 30,
      img: bev02,
      heading: "Boost",
      details: "Energy & Nutrition Drink",
      strike: "RS.35",
      rupees: 250,
      stock: "20",
      qty: 1,
      rating: "2071 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 40.00", "1kg-RS"],
      offer: 30,
    },
    {
      id: 31,
      img: bev03,
      heading: "Glucon-D",
      details: "Instant Energy Health Drink - Tangy Orange",
      strike: "RS.52.63",
      rupees: 179.4,
      stock: "20",
      qty: 1,
      rating: "410 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["50g-Rs 40.00"],
      offer: 15,
    },
    {
      id: 32,
      img: bev04,
      heading: "Horlicks",
      details: "Health & Nutrition Drink - Classic Malt",
      strike: "RS.13.16",
      rupees: 10,
      qty: 1,
      stock: "20",
      rating: "21 ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2 kg"],
      offer: 20,
    },
    {
      id: 33,
      img: bev05,
      heading: "Cadbury Bournvita",
      details: "Chocolate Health Drink",
      strike: "RS.18.63",
      rupees: 391,
      qty: 1,
      stock: "20",
      rating: "1652 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["1kg"],
      offer: 30,
    },
    {
      id: 34,
      img: bev06,
      heading: "Cadbury",
      details: "Powder Mix - Hot Chocolate Drink",
      strike: "RS.25",
      rupees: 190,
      stock: "20",
      qty: 1,
      rating: "3146 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 20,
    },
    {
      id: 35,
      img: bev07,
      heading: "Pediasure",
      details: "Nutritional Powder",
      strike: "RS.28.03",
      qty: 1,
      rupees: 690,
      stock: "20",
      rating: "73 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["50kg"],
      offer: 25,
    },
    {
      id: 36,
      img: bev08,
      heading: "Cadbury Bournvita",
      details: "Chocolate Health Drink",
      strike: "RS.12.50",
      rupees: 720,
      stock: "20",
      qty: 1,
      rating: "873 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 30,
    },
  ],

  beverage02: [
    {
      id: 37,
      img: bev21,
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Tata Tea Gold",
      details:
        "Assam Teas With Gently Rolled Aromatic Long Leaves, Rich & Aromatic Chai, Black Tea ",
      strike: "RS.151.32",
      rupees: 226,
      qty: 1,
      stock: "20",
      rating: "388 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 46.00", "1kg-RS"],
      offer: 25,
    },
    {
      id: 38,
      img: bev22,
      heading: "Taj Mahal",
      details: "Tea ",
      strike: "RS.35",
      rupees: 376,
      qty: 1,
      stock: "20",
      rating: "2071 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 35,
    },
    {
      id: 39,
      img: bev23,
      heading: "Red Label",
      details: "Tea",
      strike: "RS.52.63",
      rupees: 500,
      stock: "20",
      rating: "1187 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["50g-Rs 40.00"],
      offer: 20,
    },
    {
      id: 40,
      img: bev24,
      heading: "Wagh Bakri",
      details: "Premium Leaf Tea - Strong & Refreshing",
      strike: "RS.13.16",
      rupees: 490,
      qty: 1,
      stock: "20",
      rating: "2221 ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2 kg"],
      offer: 25,
    },
    {
      id: 41,
      img: bev25,
      heading: "Red Label",
      details: "Tea - Natural Care ",
      strike: "RS.18.63",
      rupees: 390,
      qty: 1,
      stock: "20",
      rating: "1652 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["1kg"],
      offer: 30,
    },
    {
      id: 42,
      img: bev26,
      heading: "Tata Tea Premium",
      details: "Tea",
      strike: "RS.25",
      rupees: 530,
      qty: 1,
      stock: "20",
      rating: "3146 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 20,
    },
    {
      id: 43,
      img: bev27,
      heading: "Tata Tea Gold",
      details: "Tea",
      strike: "RS.28.03",
      rupees: 670,
      stock: "20",
      qty: 1,
      rating: "1300 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["50kg"],
      offer: 20,
    },
    {
      id: 44,
      img: bev28,
      heading: "BRU",
      details: "Instant Coffee",
      strike: "RS.12.50",
      rupees: 330,
      qty: 1,
      stock: "20",
      rating: "873 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 20,
    },
  ],
  beverage03: [
    {
      id: 45,
      img: bev31,
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Epigamia",
      details: "Almond Drink - Unsweetened, Dairy Free ",
      strike: "RS.151.32",
      rupees: 226,
      qty: 1,
      stock: "20",
      rating: "1331 ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 46.00", "1kg-RS"],
      offer: 20,
    },
    {
      id: 46,
      img: bev32,
      heading: " Hersheys",
      details: "Milkshake - Almond Flavour",
      strike: "RS.35",
      rupees: 130,
      qty: 1,
      stock: "20",
      rating: "830 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 20,
    },
    {
      id: 47,
      img: bev33,
      heading: "Heritage ",
      details: "Premium Badam Milk - With Real Nuts, Rich In Nutrients,",
      strike: "RS.52.63",
      rupees: 31,
      qty: 1,
      stock: "20",
      rating: "87 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["50g-Rs 40.00"],
      offer: 30,
    },
    {
      id: 48,
      img: bev34,
      heading: "Urban Platter",
      details: "OatWOW Classic - Oat Beverage, Dairy Alternative",
      strike: "RS.13.16",
      rupees: 225,
      qty: 1,
      stock: "20",
      rating: "21 ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2 kg"],
      offer: 25,
    },
    {
      id: 49,
      img: bev35,
      heading: "Cavins",
      details: "Chocolate Milkshake - With Zinc, ",
      strike: "RS.18.63",
      rupees: 168,
      qty: 1,
      stock: "20",
      rating: "1880 ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["1kg"],
      offer: 20,
    },
    {
      id: 50,
      img: bev36,
      heading: "Britannia ",
      details: "Winkin Cow Chocolicious Thick Milkshake - Rich In Calcium ",
      strike: "RS.25",
      qty: 1,
      rupees: 50,
      stock: "20",
      rating: "31 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 10,
    },
    {
      id: 51,
      img: bev37,
      heading: "Milky Mist",
      details: "Payasam ",
      strike: "RS.28.03",
      rupees: 70,
      stock: "20",
      qty: 1,
      rating: "32 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["50kg"],
      offer: 10,
    },
    {
      id: 52,
      img: bev38,
      heading: "Plantaway",
      details: "Plant Based Almond Drink - Free From Dairy, Lactose, Transfat,",
      strike: "RS.12.50",
      rupees: 400,
      qty: 1,
      stock: "20",
      rating: "42 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 20,
    },
  ],

  beverage04: [
    {
      id: 53,
      img: bev41,
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Thums Up",
      details: "Soft Drink ",
      strike: "RS.151.32",
      rupees: 220,
      qty: 1,
      stock: "20",
      rating: "31 ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg-Rs 46.00", "1kg-RS"],
      offer: 25,
    },
    {
      id: 54,
      img: bev42,
      heading: " Coca Cola",
      details: "Diet Coke Soft Drink",
      strike: "RS.35",
      rupees: 400,
      qty: 1,
      stock: "20",
      rating: "830 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 30,
    },
    {
      id: 55,
      img: bev43,
      heading: "Coca Cola ",
      details: "Zero Sugar Soft Drink",
      strike: "RS.52.63",
      rupees: 40,
      qty: 1,
      stock: "20",
      rating: "201 ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["50g-Rs 40.00"],
      offer: 20,
    },
    {
      id: 56,
      img: bev44,
      heading: "Sprite ",
      details: "Soft Drink",
      strike: "RS.13.16",
      rupees: 80,
      qty: 1,
      stock: "20",
      rating: "291 ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2 kg"],
      offer: 10,
    },
    {
      id: 57,
      img: bev45,
      heading: "Coca Cola",
      details: "Soft Drink",
      strike: "RS.18.63",
      rupees: 40,
      qty: 1,
      stock: "20",
      rating: "188 ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["1kg"],
      offer: 10,
    },
    {
      id: 58,
      img: bev46,
      heading: "Sprite",
      details: "Soft Drink - Refreshing ",
      strike: "RS.25",
      rupees: 38,
      qty: 1,
      stock: "20",
      rating: "3881 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 10,
    },
    {
      id: 59,
      img: bev47,
      heading: "Kinley",
      details: "Sparkling Water - Club Soda  ",
      strike: "RS.28.03",
      rupees: 80,
      qty: 1,
      stock: "20",
      rating: "9000 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["50kg"],
      offer: 20,
    },
    {
      id: 60,
      img: bev48,
      heading: " Pepsi",
      details: " Black Soft Drink - Max Taste, Zero Sugar(Diet)",
      strike: "RS.12.50",
      rupees: 30,
      qty: 1,
      stock: "20",
      rating: "9880 Ratings",
      delievery: "Standard Delivery: Tomorrow 9:00AM - 1:30PM",
      quantity: ["2kg"],
      offer: 10,
    },
  ],
};

export const stateReducer = (state, action) => {
  console.log("state", state, "action", action);
  switch (action.type) {
    case "DETAILS":
      return {
        ...state,
        get: action.payload,
      };
    case "CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((e) => e.qty !== action.payload.qty),
      };
    case "QTY":
      return {
        ...state,
        qty2: action.payload,
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "INC":
      return {
        ...state,
        teams: action.payload,
        vegetables: action.payload,
        vegetables2: action.payload,
        vegetables3: action.payload,
        vegetables4: action.payload,
    
      };
    case "DEC":
      return {
        ...state,
        teams: action.payload,
        vegetables: action.payload,
        vegetables2: action.payload,
        vegetables3: action.payload,
        vegetables4: action.payload,

      };

    default: {
      return state;
    }
  }
};

export const stateFilter = {
  priceSort_below20: false,
  discountSort_below5: false,
};

export const filterReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "BELOW_20":
      return {
        ...state,
        priceSort_below20: !state.priceSort_below20,
      };
    case "BETWEEN20TO50":
      return {
        ...state,
        priceSort_BETWEEN20TO50: !state.priceSort_BETWEEN20TO50,
      };
    case "BETWEEN50TO100":
      return {
        ...state,
        priceSort_BETWEEN50TO100: !state.priceSort_BETWEEN50TO100,
      };
    case "BETWEEN100TO200":
      return {
        ...state,
        priceSort_BETWEEN100TO200: !state.priceSort_BETWEEN100TO200,
      };
    case "BETWEEN200TO300":
      return {
        ...state,
        priceSort_BETWEEN200TO300: !state.priceSort_BETWEEN200TO300,
      };
    case "BETWEEN500":
      return {
        ...state,
        priceSort_BETWEEN500: !state.priceSort_BETWEEN500,
      };

    case "BELOW5%":
      return {
        ...state,
        discountSort_below5: !state.discountSort_below5,
      };
    case "BETWEEN5TO10":
      return {
        ...state,
        discountSort_BETWEEN5TO10: !state.discountSort_BETWEEN5TO10,
      };
    case "BETWEEN10TO15":
      return {
        ...state,
        discountSort_BETWEEN10TO15: !state.discountSort_BETWEEN10TO15,
      };
    case "BETWEEN15TO25":
      return {
        ...state,
        discountSort_BETWEEN15TO25: !state.discountSort_BETWEEN15TO25,
      };
    case "MORE25":
      return {
        ...state,
        discountSort_MORE25: !state.discountSort_MORE25,
      };
    default:
      return state;
  }
};
