// Company details shown in the footer and legal pages.
export const COMPANY = {
  legalName: 'Bretlyn Global Private Limited',
  email: 'support@bretlyn.com',
  address: [
    'No.235, 2nd Floor, 13th Cross, 2nd Stage,',
    'Indiranagar, Bengaluru,',
    'Karnataka - 560038',
  ],
};

// >>> Replace with your real social profile URLs <<<
export const SOCIAL = [
  { name: 'Instagram', url: 'https://www.instagram.com/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { name: 'Facebook', url: 'https://www.facebook.com/' },
  { name: 'Youtube', url: 'https://www.youtube.com/' },
];

export const REGIONS = ['Chikmagalur', 'Coorg', 'Araku Valley', 'Wayanad', 'Nilgiris', 'Baba Budangiri'];

// >>> Edit the menu here <<<
// Each category: id, name, optional eyebrow/sub, items. An item has a name, up to 3 description
// lines and a photo (file name in public/assets/img/menu/, without extension). Items in a category
// with `hotIced: true` can have an `iced` version with its own name, photo and lines.
export const MENU = [
  {
    "id": "signature",
    "name": "Signature Lattes",
    "sub": "Your favourites, hot or iced.",
    "hotIced": true,
    "items": [
      {
        "name": "Coconut Latte",
        "photo": "coconut-latte",
        "lines": [
          "A little tropical escape in your everyday cup.",
          "Espresso, creamy steamed milk and mellow coconut come together in an easy balance.",
          "Coffee at heart, coconut in every sip."
        ],
        "iced": {
          "name": "Iced Coconut Latte",
          "photo": "iced-coconut-latte",
          "lines": [
            "A tropical pause in the middle of your day.",
            "Espresso, chilled milk and mellow coconut flavour come together over ice.",
            "Creamy, gently sweet and refreshingly different."
          ]
        }
      },
      {
        "name": "Spanish Latte",
        "photo": "spanish-latte",
        "lines": [
          "For those who enjoy coffee with a sweeter side.",
          "Bold espresso meets sweet, creamy milk without losing its distinctive coffee character.",
          "Rich, comforting and gently indulgent."
        ],
        "iced": {
          "name": "Iced Spanish Latte",
          "photo": "iced-spanish-latte",
          "lines": [
            "A sweeter coffee moment, served cool.",
            "Bold espresso blends with sweet, creamy milk over ice.",
            "Rich coffee character with a smooth, indulgent finish."
          ]
        }
      },
      {
        "name": "Ube Latte",
        "photo": "ube-latte",
        "lines": [
          "Distinctive colour. A flavour worth discovering.",
          "Ube brings mellow sweetness and gentle nutty notes to espresso and creamy milk.",
          "An unexpected twist on your everyday latte."
        ],
        "iced": {
          "name": "Iced Ube Latte",
          "photo": "iced-ube-latte",
          "lines": [
            "Purple draws you in. Flavour makes you linger.",
            "Ube brings mellow sweetness and nutty notes to espresso and chilled milk over ice.",
            "Colourful, creamy and a little unexpected."
          ]
        }
      },
      {
        "name": "Caramel Velvet Latte",
        "photo": "caramel-velvet-latte",
        "lines": [
          "Your daily coffee, dressed in caramel.",
          "Espresso and buttery caramel meet beneath a velvety cream layer and caramel drizzle.",
          "Rich, rounded and worth taking a moment for."
        ],
        "iced": {
          "name": "Iced Caramel Velvet Latte",
          "photo": "iced-caramel-velvet-latte",
          "lines": [
            "A golden drizzle. A little everyday indulgence.",
            "Espresso, chilled milk and buttery caramel meet beneath a soft cream layer.",
            "Cool coffee richness with a sweet caramel finish."
          ]
        }
      },
      {
        "name": "Vanilla Velvet Latte",
        "photo": "vanilla-velvet-latte",
        "lines": [
          "Familiar comfort with a little velvet on top.",
          "Espresso, milk and delicate vanilla meet beneath a soft cream layer.",
          "Gently sweet, with a smooth vanilla finish."
        ],
        "iced": {
          "name": "Iced Vanilla Velvet Latte",
          "photo": "iced-vanilla-velvet-latte",
          "lines": [
            "A cool coffee moment with a softer finish.",
            "Espresso, chilled milk and vanilla meet beneath a velvety cream layer.",
            "Delicate sweetness, from the first sip to the last."
          ]
        }
      }
    ]
  },
  {
    "id": "hot",
    "name": "Hot Beverages",
    "eyebrow": "Bretlyn Coffee",
    "items": [
      {
        "name": "Espresso",
        "photo": "espresso",
        "lines": [
          "Small in size. Bold in character.",
          "A concentrated shot of coffee with a rich aroma and golden crema.",
          "A moment to savour, one sip at a time."
        ]
      },
      {
        "name": "Cappuccino",
        "photo": "cappuccino",
        "lines": [
          "A familiar favourite with a lighter touch.",
          "Rich espresso and steamed milk meet beneath a generous layer of airy foam.",
          "A comforting balance of bold coffee and creamy texture."
        ]
      },
      {
        "name": "Americano",
        "photo": "americano",
        "lines": [
          "More room for the coffee to express itself.",
          "Espresso meets hot water for a lighter-bodied cup with a distinctive aroma.",
          "Clean, bold and made for those who enjoy their coffee black."
        ]
      },
      {
        "name": "Latte",
        "photo": "latte",
        "lines": [
          "Everyday comfort, beautifully balanced.",
          "Rich espresso blends with silky steamed milk beneath a delicate layer of foam.",
          "Mellow and creamy, with coffee at its heart."
        ]
      },
      {
        "name": "Flat White",
        "photo": "flat-white",
        "lines": [
          "Silky milk. Distinctive coffee character.",
          "Espresso blends with finely textured milk and a thin layer of microfoam.",
          "A smooth, rich cup that keeps the coffee in focus."
        ]
      },
      {
        "name": "Vanilla Latte",
        "photo": "vanilla-latte",
        "lines": [
          "A familiar comfort with a fragrant twist.",
          "Espresso and steamed milk blend with delicate vanilla sweetness.",
          "Warm, mellow and easy to make your favourite."
        ]
      },
      {
        "name": "Hazelnut Latte",
        "photo": "hazelnut-latte",
        "lines": [
          "A little toasted warmth in your daily cup.",
          "Espresso meets creamy steamed milk and rounded hazelnut flavour.",
          "Gently sweet, with a lingering nutty finish."
        ]
      },
      {
        "name": "Caramel Latte",
        "photo": "caramel-latte",
        "lines": [
          "A golden touch for your coffee moment.",
          "Buttery caramel blends with espresso and silky steamed milk.",
          "Rich coffee flavour, softened by a little sweetness."
        ]
      },
      {
        "name": "Mocha",
        "photo": "mocha",
        "lines": [
          "Coffee and chocolate, together in good company.",
          "Espresso blends with chocolate and steamed milk for a rich, rounded flavour.",
          "A comforting cup with a softly sweet finish."
        ]
      },
      {
        "name": "Hot Chocolate",
        "photo": "hot-chocolate",
        "lines": [
          "Chocolate comfort, simply done.",
          "Rich chocolate blends with warm milk for a smooth, creamy texture.",
          "A little sweetness to settle into your day."
        ]
      }
    ]
  },
  {
    "id": "cold",
    "name": "Cold Beverages",
    "eyebrow": "Bretlyn Coffee",
    "items": [
      {
        "name": "Iced Cappuccino",
        "photo": "iced-cappuccino",
        "lines": [
          "A familiar favourite with a cooler side.",
          "Espresso and chilled milk meet over ice beneath a light foam layer.",
          "Refreshing coffee flavour with an airy finish."
        ]
      },
      {
        "name": "Iced Americano",
        "photo": "iced-americano",
        "lines": [
          "Bold coffee. A refreshing change of pace.",
          "Espresso meets chilled water and ice for a clean, light-bodied drink.",
          "Cool, crisp and full of coffee character."
        ]
      },
      {
        "name": "Iced Latte",
        "photo": "iced-latte",
        "lines": [
          "Everyday comfort, served over ice.",
          "Rich espresso blends with chilled milk for a mellow, creamy balance.",
          "An easy coffee companion, wherever the day takes you."
        ]
      },
      {
        "name": "Iced Vanilla Latte",
        "photo": "iced-vanilla-latte",
        "lines": [
          "A cool cup with a fragrant little twist.",
          "Espresso, chilled milk and delicate vanilla sweetness come together over ice.",
          "Smooth, mellow and gently refreshing."
        ]
      },
      {
        "name": "Iced Hazelnut Latte",
        "photo": "iced-hazelnut-latte",
        "lines": [
          "Toasty flavour with a refreshing outlook.",
          "Espresso and chilled milk blend with rounded hazelnut sweetness over ice.",
          "A creamy sip with a lingering nutty finish."
        ]
      },
      {
        "name": "Iced Caramel Latte",
        "photo": "iced-caramel-latte",
        "lines": [
          "A golden touch to brighten your coffee break.",
          "Buttery caramel meets espresso, chilled milk and ice in a smooth blend.",
          "Cool and creamy, with just a little indulgence."
        ]
      },
      {
        "name": "Iced Mocha",
        "photo": "iced-mocha",
        "lines": [
          "Chocolate comfort, served cool.",
          "Espresso and chocolate blend with chilled milk over ice.",
          "Rich coffee depth with a rounded, chocolate finish."
        ]
      },
      {
        "name": "Cold Chocolate",
        "photo": "cold-chocolate",
        "lines": [
          "All the chocolate comfort, with a cooler touch.",
          "Rich chocolate blends with chilled milk for a smooth, creamy drink.",
          "Sweet, refreshing and made without coffee."
        ]
      },
      {
        "name": "Classic Cold Coffee",
        "photo": "classic-cold-coffee",
        "lines": [
          "A familiar favourite that always feels welcome.",
          "Coffee and chilled milk are blended into a creamy drink with a frothy finish.",
          "A little everyday nostalgia, served cold."
        ]
      }
    ]
  },
  {
    "id": "matcha",
    "name": "Matcha & Ube Series",
    "sub": "Your favourites, hot or iced.",
    "hotIced": true,
    "items": [
      {
        "name": "Matcha Latte",
        "photo": "matcha-latte",
        "lines": [
          "A moment of green in your daily routine.",
          "Earthy matcha blends with steamed milk for a creamy, mellow balance.",
          "Distinctive flavour with a gently lingering finish."
        ],
        "iced": {
          "name": "Iced Matcha Latte",
          "photo": "iced-matcha-latte",
          "lines": [
            "Your daily green, with a refreshing twist.",
            "Earthy matcha blends with chilled milk over ice for a creamy, mellow balance.",
            "Cool and smooth, with matcha at its heart."
          ]
        }
      },
      {
        "name": "Strawberry Matcha Latte",
        "photo": "strawberry-matcha-latte",
        "lines": [
          "A berry-bright twist on your matcha moment.",
          "Sweet strawberry meets earthy matcha and warm milk in a distinctive blend.",
          "Fruity sweetness, balanced by green tea character."
        ],
        "iced": {
          "name": "Iced Strawberry Matcha Latte",
          "photo": "iced-strawberry-matcha-latte",
          "lines": [
            "Bright berry sweetness meets a greener side.",
            "Strawberry, earthy matcha and chilled milk come together over ice.",
            "Fruity, creamy and full of contrast."
          ]
        }
      },
      {
        "name": "Ube Matcha Latte",
        "photo": "ube-matcha-latte",
        "lines": [
          "Two distinctive flavours, beautifully brought together.",
          "Mellow ube sweetness meets earthy matcha and creamy steamed milk.",
          "Rich in colour, gently nutty and full of character."
        ],
        "iced": {
          "name": "Iced Ube Matcha Latte",
          "photo": "iced-ube-matcha-latte",
          "lines": [
            "A colourful meeting of mellow and earthy.",
            "Ube sweetness blends with matcha and chilled milk over ice.",
            "Gently nutty, creamy and refreshingly distinctive."
          ]
        }
      },
      {
        "name": "Coconut Matcha Latte",
        "photo": "coconut-matcha-latte",
        "lines": [
          "A tropical note in a comforting green cup.",
          "Earthy matcha blends with mellow coconut flavour and creamy steamed milk.",
          "Soft sweetness with a distinctive matcha finish."
        ],
        "iced": {
          "name": "Iced Coconut Matcha Latte",
          "photo": "iced-coconut-matcha-latte",
          "lines": [
            "A tropical breeze through your matcha break.",
            "Mellow coconut flavour meets earthy matcha and chilled milk over ice.",
            "Softly sweet, creamy and refreshing."
          ]
        }
      }
    ]
  },
  {
    "id": "frappes",
    "name": "Frappes",
    "items": [
      {
        "name": "Matcha Frappe",
        "photo": "matcha-frappe",
        "lines": [
          "A greener way to treat yourself.",
          "Earthy matcha and milk blend with ice into a thick, creamy drink.",
          "Frosty refreshment with distinctive matcha character."
        ]
      },
      {
        "name": "Caramel Frappe",
        "photo": "caramel-frappe",
        "lines": [
          "A golden getaway in your everyday routine.",
          "Coffee, milk and buttery caramel blend with ice into a thick, creamy drink.",
          "Cool, sweet and made to savour."
        ]
      },
      {
        "name": "Mocha Choco Chip Frappe",
        "photo": "mocha-choco-chip-frappe",
        "lines": [
          "A little more chocolate in your coffee moment.",
          "Coffee, chocolate and milk blend with ice and chocolate chips for a rich, textured drink.",
          "Frosty, creamy and full of chocolate in every sip."
        ]
      }
    ]
  },
  {
    "id": "treats",
    "name": "Bretlyn Treats",
    "sub": "Little bites to go with your cup.",
    "items": []
  }
];
