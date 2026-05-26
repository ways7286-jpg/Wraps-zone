import { MenuItem, Review, GalleryItem } from './types';

export const MENU_CATEGORIES = [
  { id: 'all', name: 'Full Menu' },
  { id: 'wraps', name: 'Signature Wraps' },
  { id: 'broast', name: 'Crispy Broast' },
  { id: 'burgers', name: 'Gourmet Burgers' },
  { id: 'chinese', name: 'Chinese Specials' },
  { id: 'rice', name: 'Fried Rice' },
  { id: 'mojitos', name: 'Mocktails & Mojitos' }
];

export const MENU_ITEMS: MenuItem[] = [
  // WRAPS
  {
    id: 'w-1',
    name: 'Crispy Chicken Wrap',
    description: 'Golden fried chicken tenders, shredded crisp lettuce, vine-ripened tomatoes, and house-made premium garlic mayonnaise wrapped inside a warm, thin toasted tortilla.',
    price: 180,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    isVeg: false,
    tags: ['Best Seller', 'Extra Crispy'],
    rating: 4.9,
    prepTime: '12 mins'
  },
  {
    id: 'w-2',
    name: 'Hot & Spicy Chicken Wrap',
    description: 'Tender chicken strips tossed in our signature fiery sriracha glazed sauce, coupled with jalapenos, onions, and spicy chipotle remoulade.',
    price: 190,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: false,
    tags: ['Zesty', 'Hot'],
    rating: 4.7,
    prepTime: '10 mins'
  },
  {
    id: 'w-3',
    name: 'BBQ Chicken Wrap',
    description: 'Slow-smoked chicken thigh glazed in sweet hickory barbecue, grilled red onions, and melted sharp cheddar cheese.',
    price: 190,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    isVeg: false,
    tags: ['Smoky BBQ'],
    rating: 4.8,
    prepTime: '11 mins'
  },
  {
    id: 'w-4',
    name: 'Cheese Chicken Wrap',
    description: 'A luxurious combination of juicy pulled chicken, double layers of melted mozzarella, cheddar cheese-sauce, and standard Italian herbs.',
    price: 210,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    isVeg: false,
    tags: ['Cheesy Delight'],
    rating: 4.9,
    prepTime: '12 mins'
  },
  {
    id: 'w-5',
    name: 'Chicken Nuggets Wrap',
    description: 'Fluffy whole-wheat wrap folded over crunchy bites of traditional white-meat chicken nuggets, creamy honey mustard dressing, and cabbage slaw.',
    price: 170,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: false,
    tags: ['Kids Choice'],
    rating: 4.6,
    prepTime: '8 mins'
  },
  {
    id: 'w-6',
    name: 'Crispy Paneer Wrap',
    description: 'Panko-crusted fresh cottage cheese cubes, sweet bell peppers, baby gems, infused mint yogurt drizzle, and toasted artisanal whole-wheat wrap.',
    price: 175,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: true,
    tags: ['Vegetarian', 'Crispy'],
    rating: 4.7,
    prepTime: '12 mins'
  },
  {
    id: 'w-7',
    name: 'Grill Paneer Wrap',
    description: 'Herb-marinated grilled paneer steak, charred sweet corn, avocado crema, crisp romaine, and slow-roasted bell peppers.',
    price: 180,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: true,
    tags: ['Light & Healthy'],
    rating: 4.8,
    prepTime: '10 mins'
  },

  // BROAST
  {
    id: 'b-1',
    name: '3 Pcs Spicy Broast Chicken',
    description: 'Three large cuts of fresh farm-raised chicken, double hand-breaded in traditional secret spices and pressure-fried to locks in its natural juices till extraordinarily crispy.',
    price: 240,
    category: 'broast',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    isVeg: false,
    tags: ['Crunchy Extra', 'Signature'],
    rating: 4.9,
    prepTime: '15 mins'
  },
  {
    id: 'b-2',
    name: '6 Pcs Family Broast Chicken',
    description: 'Six premium portions of crispy gold broast bone-in chicken. Served with choice dipping cup of luxury garlic whip and peri-peri sprinkler.',
    price: 450,
    category: 'broast',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: false,
    tags: ['Sharing Box'],
    rating: 4.8,
    prepTime: '18 mins'
  },
  {
    id: 'b-3',
    name: '12 Pcs Mega Feast Broast',
    description: 'Twelves massive golden-brown crispy pressure-cooked broast chicken joints - enough to supply a party. Includes standard seasoned potato wedges and three garlic emulsions.',
    price: 850,
    category: 'broast',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    isVeg: false,
    tags: ['Mega Value', 'Party size'],
    rating: 4.9,
    prepTime: '22 mins'
  },

  // BURGERS
  {
    id: 'bu-1',
    name: 'Premium Veg Burger',
    description: 'Thick hand-pressed vegetable root & legumes patty, dynamic herb-infused butter, crisp green leaf, premium layered pickles, and artisanal buttered bun.',
    price: 140,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: true,
    tags: ['Classic Veg'],
    rating: 4.6,
    prepTime: '10 mins'
  },
  {
    id: 'bu-2',
    name: 'Signature Cheese Burger',
    description: 'Tender chicken breast filet seasoned in buttermilk breading, loaded with thick slices of melted cheddar, premium burger sauce, and micro-greens inside glazed brioche.',
    price: 140,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    isVeg: false,
    tags: ['Cheesy Special', 'Double Layer'],
    rating: 4.9,
    prepTime: '12 mins'
  },

  // CHINESE SPECIALS
  {
    id: 'c-1',
    name: 'Chicken Manchurian Special',
    description: 'Lightly battered crisp chicken nuggets slow-simmered in a dark, sticky, caramelized garlic soy glaze with garden scallions and fresh ginger root.',
    price: 180,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: false,
    tags: ['Indo-Chinese'],
    rating: 4.7,
    prepTime: '12 mins'
  },
  {
    id: 'c-2',
    name: 'Authentic Dragon Chicken',
    description: 'Wok-tossed chicken tenders in highly premium fiery red chilis, raw-honey, cashew nuts, and slivered organic spring leeks.',
    price: 190,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    isVeg: false,
    tags: ['Cashew Crunch', 'Sweet & Spicy'],
    rating: 4.9,
    prepTime: '14 mins'
  },
  {
    id: 'c-3',
    name: 'Classic Chili Chicken',
    description: 'Stir-fried strips of marinated chicken with premium local bell peppers, hot green chilis, sweet onions, and deep dark soy vinaigrette infusion.',
    price: 180,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: false,
    tags: ['Classic Hot'],
    rating: 4.7,
    prepTime: '12 mins'
  },
  {
    id: 'c-4',
    name: 'Hakka Chicken Noodles',
    description: 'Fine high-altitude authentic egg noodles wok-fried with finely sliced garden vegetables, fresh chicken strips, and a dash of seasoned sesame wine sauce.',
    price: 180,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: false,
    tags: ['Wok Hei'],
    rating: 4.8,
    prepTime: '11 mins'
  },
  {
    id: 'c-5',
    name: 'Fiery Schezwan Noodles',
    description: 'Premium noodles wok-tossed with spicy premium Schezwan peppercorn paste, juicy standard chicken chunks, crushed garlic, and white sesame topping.',
    price: 190,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: false,
    tags: ['Extra Hot'],
    rating: 4.7,
    prepTime: '12 mins'
  },

  // FRIED RICE
  {
    id: 'fr-1',
    name: 'Premium Chicken Fried Rice',
    description: 'Fragrant basmati rice tossed with slow-grilled chicken slices, scrambled organic egg ribbons, green garden peas, and premium light soy.',
    price: 180,
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1603133872878-68550a5e2f64?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: false,
    tags: ['Wok Tossed'],
    rating: 4.8,
    prepTime: '11 mins'
  },
  {
    id: 'fr-2',
    name: 'Butter Garlic Chicken Fried Rice',
    description: 'Basmati rice wok-seared with slow-roasted golden garlic slivers, salted dairy butter, pulled chicken, and signature local fresh parsley.',
    price: 210,
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    isVeg: false,
    tags: ['Rich Butter', 'Highly Recommended'],
    rating: 4.9,
    prepTime: '13 mins'
  },
  {
    id: 'fr-3',
    name: 'Wok Paneer Fried Rice',
    description: 'Premium long-grain basmati rice tossed in an intense hot wok with crisp cottage cheese cubes, sweet young corn, carrot batons, and spring onions.',
    price: 200,
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: true,
    tags: ['Vegetarian Choice'],
    rating: 4.7,
    prepTime: '12 mins'
  },

  // MOJITOS
  {
    id: 'm-1',
    name: 'Classic Virgin Mojito',
    description: 'Perfect blend of organic sweet Cuban mint leaves, heavy lime wedges muddled by hand, standard sugar cane syrup, and carbonated sparkling mineral water.',
    price: 150,
    category: 'mojitos',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: true,
    tags: ['Refreshing', 'Eco Friendly'],
    rating: 4.7,
    prepTime: '6 mins'
  },
  {
    id: 'm-2',
    name: 'Blue Lagoon Mojito',
    description: 'A glowing azure cocktail combining sweet Blue Curaçao botanical extract, freshly squeezed sweet lemons, fresh crushed ice, and classic soda.',
    price: 150,
    category: 'mojitos',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    isVeg: true,
    tags: ['Luxe Visual', 'Fan Favorite'],
    rating: 4.9,
    prepTime: '5 mins'
  },
  {
    id: 'm-3',
    name: 'Rainbow Sunset Mojito',
    description: 'A beautiful multi-layered visual sensory mojito. Infused with natural wild berry syrups, fresh pineapple zest, garden mint, and layered citrus purees.',
    price: 150,
    category: 'mojitos',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isBestSeller: false,
    isVeg: true,
    tags: ['Instagrammable'],
    rating: 4.8,
    prepTime: '7 mins'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rv-1',
    name: 'Anirudh Sastry',
    role: 'Food Blogger, Hyderabad',
    comment: 'Absolutely amazing wraps and crispy broast! Literally the best place in Hyderabad for wraps. The garlic mayo is pure perfection, and the crunch of their broast chicken is out of this world. Highly recommend checking them out!',
    rating: 5,
    date: 'May 2026'
  },
  {
    id: 'rv-2',
    name: 'Neha Kapoor',
    role: 'Local Guide',
    comment: 'Fresh, piping-hot food, luxurious visual delivery experience, and affordable premium pricing. The packing is extremely clean, and their customer service sets standard hospitality benchmarks in the Erragadda region.',
    rating: 5,
    date: 'May 2026'
  },
  {
    id: 'rv-3',
    name: 'Suhail Mohammed',
    role: 'Gourmet Enthusiast',
    comment: 'Their Cheese Chicken Wrap and the Blue Lagoon Mojito are must-tries of the century! Every bite feels incredibly satisfying. Cleanliness and visual presentation are exactly what you expect of a gourmet cafe.',
    rating: 5,
    date: 'April 2026'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Artisanal Fresh Wraps',
    category: 'wrap',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-2',
    title: 'Signature Crispy Broast',
    category: 'broast',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-3',
    title: 'Supreme Cheese Burger',
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-4',
    title: 'Glowing Blue Lagoon Mojito',
    category: 'mojito',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-5',
    title: 'Authentic Wok Dragon Chicken',
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-6',
    title: 'Premium Ambience & Dining',
    category: 'ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  }
];
