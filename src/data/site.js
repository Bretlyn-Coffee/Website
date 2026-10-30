// Company details shown in the footer and legal pages.
export const COMPANY = {
  legalName: 'Bretlyn Global Private Limited',
  email: 'contact@bretlyn.com',
  address: [
    '235, 2nd Floor, 13th Cross Road, 3rd Stage,',
    'Indiranagar, Bengaluru – 560038',
    'Karnataka, India',
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

// >>> Edit menu items and prices here (₹, placeholders) <<<
export const MENU = [
  { id: 'hot', name: 'Hot Coffee', sub: 'Espresso based', items: [
    ['Espresso', 'A concentrated double shot of our house single origin.', 120],
    ['Americano', 'Espresso lengthened with hot water. Smooth and bold.', 140],
    ['Cappuccino', 'Equal parts espresso, steamed milk and silky foam.', 170],
    ['Classic Latte', 'Espresso with steamed milk and a thin layer of microfoam.', 180],
    ['Flat White', 'Double ristretto with velvety milk. Strong and smooth.', 190],
    ['Mocha', 'Espresso, dark chocolate and steamed milk.', 210],
  ] },
  { id: 'iced', name: 'Iced Coffee', sub: 'Served over ice', items: [
    ['Iced Americano', 'Double shot over ice and chilled water.', 160],
    ['Iced Latte', 'Cold milk layered with fresh espresso.', 190],
    ['Iced Spanish Latte', 'Espresso, condensed milk and cold milk.', 220],
    ['Cold Brew', 'Steeped for 18 hours for a naturally sweet cup.', 200],
    ['Vietnamese Iced Coffee', 'Strong coffee with sweetened condensed milk.', 210],
    ['Espresso Tonic', 'Espresso poured over tonic water and citrus.', 220],
  ] },
  { id: 'frappe', name: 'Frappés', sub: 'Blended & indulgent', items: [
    ['Caramel Frappé', 'Blended coffee, whipped cream, caramel drizzle.', 240],
    ['Mocha Frappé', 'Coffee blended with chocolate and topped with cream.', 240],
    ['Hazelnut Frappé', 'Nutty, creamy and perfectly chilled.', 250],
    ['Classic Coffee Frappé', 'Just coffee, milk and ice, blended smooth.', 220],
  ] },
  { id: 'brew', name: 'Manual Brews', sub: 'Single origin, by hand', items: [
    ['Pour Over', "Choose today's single origin, brewed by hand.", 220],
    ['AeroPress', 'Full-bodied and clean, brewed to order.', 210],
    ['French Press', 'Rich and textured. Serves one or two.', 230],
    ['South Indian Filter Kaapi', 'Our tribute to the classic — decoction and frothy milk.', 120],
  ] },
];
