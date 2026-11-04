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

// >>> Edit the menu here <<<
// Each category: id, name, subtitle, items. An item has a name, up to 3 description lines,
// an optional photo (file name in public/assets/img/menu/, without extension) and an
// illustration type used when there is no photo: 'hot' | 'latte' | 'americano' | 'frappe'.
// Categories with `hotIced: true` show the HOT / ICED switch.
export const MENU = [
  { id: 'signature', name: 'Signature Lattes', sub: 'Your favourites, hot or iced.', hotIced: true, items: [
    { name: 'Coconut Latte', photo: 'coconut-latte', lines: ['Rich espresso meets mellow coconut flavour.', 'Creamy milk brings everything together.', 'Smooth and gently sweet with a tropical finish.'] },
    { name: 'Spanish Latte', photo: 'spanish-latte', lines: ['Bold espresso meets sweet, creamy milk.', 'Rich coffee flavour balances the sweetness.', 'Smooth and comforting from the first sip.'] },
    { name: 'Ube Latte', photo: 'ube-latte', lines: ['Earthy ube meets the depth of espresso.', 'Creamy milk softens its gently nutty flavour.', 'Mellow sweetness with a smooth, rich finish.'] },
    { name: 'Caramel Velvet Latte', photo: 'caramel-velvet-latte', lines: ['Rich espresso blends with buttery caramel.', 'A velvety cream layer adds a soft finish.', 'Caramel drizzle brings a little extra sweetness.'] },
    { name: 'Vanilla Velvet Latte', photo: 'vanilla-velvet-latte', lines: ['Smooth espresso meets delicate vanilla flavour.', 'A velvety cream layer adds a creamy finish.', 'Gently sweet with warm vanilla in every sip.'] },
  ] },
  { id: 'hot', name: 'Hot Beverages', sub: 'Espresso classics, made fresh.', items: [
    { name: 'Espresso', art: 'hot', lines: ['A concentrated double shot of our house coffee.'] },
    { name: 'Americano', art: 'hot', lines: ['Espresso lengthened with hot water.', 'Smooth and bold.'] },
    { name: 'Cappuccino', art: 'hot', lines: ['Equal parts espresso, steamed milk and silky foam.'] },
    { name: 'Classic Latte', art: 'hot', lines: ['Espresso with steamed milk and a thin layer of microfoam.'] },
    { name: 'Flat White', art: 'hot', lines: ['Double ristretto with velvety milk.', 'Strong and smooth.'] },
    { name: 'Mocha', art: 'hot', lines: ['Espresso, dark chocolate and steamed milk.'] },
  ] },
  { id: 'cold', name: 'Cold Beverages', sub: 'Chilled, bright and refreshing.', items: [
    { name: 'Iced Americano', art: 'americano', lines: ['Double shot over ice and chilled water.'] },
    { name: 'Iced Latte', art: 'latte', lines: ['Cold milk layered with fresh espresso.'] },
    { name: 'Cold Brew', art: 'americano', lines: ['Slow-steeped for a naturally sweet cup.'] },
    { name: 'Espresso Tonic', art: 'americano', lines: ['Espresso poured over tonic water and citrus.'] },
  ] },
  { id: 'matcha', name: 'Matcha & Ube Series', sub: 'Vibrant, creamy and full of character.', items: [
    { name: 'Ube Latte', photo: 'ube-latte', lines: ['Earthy ube meets the depth of espresso.', 'Creamy milk softens its gently nutty flavour.', 'Mellow sweetness with a smooth, rich finish.'] },
  ] },
  { id: 'frappes', name: 'Frappes', sub: 'Blended, creamy and indulgent.', items: [
    { name: 'Caramel Frappe', art: 'frappe', lines: ['Blended coffee, whipped cream and caramel drizzle.'] },
    { name: 'Mocha Frappe', art: 'frappe', lines: ['Coffee blended with chocolate, topped with cream.'] },
    { name: 'Classic Coffee Frappe', art: 'frappe', lines: ['Just coffee, milk and ice, blended smooth.'] },
  ] },
  { id: 'treats', name: 'Bretlyn Treats', sub: 'Little bites to go with your cup.', items: [] },
];
