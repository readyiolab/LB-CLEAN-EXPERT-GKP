export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  heroImage?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  collection: string;
  price: number;
  description: string;
  longDescription: string;
  materials: string;
  dimensions?: string;
  images: string[];
  featured?: boolean;
  new?: boolean;
}

export const collections: Collection[] = [
  {
    id: "lighting",
    name: "Lighting",
    slug: "lighting",
    description: "Sculptural forms that cast warmth and shadow",
    image: "/images/hero-cleaning-indian.jpg",
    heroImage: "/images/team-cleaning-indian.jpg",
  },
  {
    id: "ceramics",
    name: "Ceramics",
    slug: "ceramics",
    description: "Handcrafted vessels shaped by patient hands",
    image: "/images/kitchen-cleaning-indian.jpg",
    heroImage: "/images/family-clean-home-indian.jpg",
  },
  {
    id: "furniture",
    name: "Furniture",
    slug: "furniture",
    description: "Timeless pieces built for generations",
    image: "/images/sofa-cleaning-indian.jpg",
    heroImage: "/images/bathroom-cleaning-indian.jpg",
  },
  {
    id: "textiles",
    name: "Textiles",
    slug: "textiles",
    description: "Natural fibers woven with intention",
    image: "/images/hero-cleaning-indian.jpg",
    heroImage: "/images/team-cleaning-indian.jpg",
  },
  {
    id: "objects",
    name: "Objects & Vases",
    slug: "objects",
    description: "Curated details that complete a space",
    image: "/images/kitchen-cleaning-indian.jpg",
    heroImage: "/images/family-clean-home-indian.jpg",
  },
  {
    id: "seasonal",
    name: "Seasonal Collection",
    slug: "seasonal",
    description: "Limited pieces inspired by the changing light",
    image: "/images/sofa-cleaning-indian.jpg",
    heroImage: "/images/bathroom-cleaning-indian.jpg",
  },
  {
    id: "new",
    name: "New Arrivals",
    slug: "new-arrivals",
    description: "The latest additions to our collection",
    image: "/images/hero-cleaning-indian.jpg",
    heroImage: "/images/team-cleaning-indian.jpg",
  },
  {
    id: "gifts",
    name: "Curated Gifts",
    slug: "gifts",
    description: "Thoughtfully selected pieces for giving",
    image: "/images/kitchen-cleaning-indian.jpg",
    heroImage: "/images/family-clean-home-indian.jpg",
  },
];

export const products: Product[] = [
  // Lighting
  {
    id: "arc-pendant",
    name: "Arc Pendant Light",
    slug: "arc-pendant-light",
    collection: "lighting",
    price: 485,
    description: "A graceful arc of hand-bent brass and linen",
    longDescription: "The Arc Pendant embodies the quiet elegance of Scandinavian design. Each piece is hand-bent by our workshop artisans, creating subtle variations that make every light unique. The natural linen shade diffuses light softly, casting a warm glow that transforms any space into a sanctuary.",
    materials: "Solid brass, natural Belgian linen",
    dimensions: "45cm diameter × 30cm height",
    images: [
      "/images/sofa-cleaning-indian.jpg",
      "/images/bathroom-cleaning-indian.jpg",
    ],
    featured: true,
  },
  {
    id: "orb-table-lamp",
    name: "Orb Table Lamp",
    slug: "orb-table-lamp",
    collection: "lighting",
    price: 295,
    description: "Mouth-blown glass meets sculptural bronze",
    longDescription: "Our Orb Table Lamp pairs the organic beauty of mouth-blown glass with a solid bronze base. The glass sphere captures and refracts light, while the weighted base provides perfect balance. A statement piece that works as beautifully switched off as it does illuminated.",
    materials: "Mouth-blown glass, solid bronze",
    dimensions: "25cm diameter × 40cm height",
    images: [
      "/images/hero-cleaning-indian.jpg",
      "/images/team-cleaning-indian.jpg",
    ],
    new: true,
  },
  // Ceramics
  {
    id: "vessel-collection",
    name: "Large Sculptural Vessel",
    slug: "large-sculptural-vessel",
    collection: "ceramics",
    price: 320,
    description: "Hand-thrown stoneware with natural ash glaze",
    longDescription: "Each vessel in this collection is hand-thrown on the wheel and fired in our wood-burning kiln. The natural ash glaze creates unrepeatable patterns—from soft dove grey to deep iron brown. These vessels are meant to be touched, to show the maker's hand in every curve.",
    materials: "High-fire stoneware, natural ash glaze",
    dimensions: "35cm height × 22cm diameter",
    images: [
      "/images/kitchen-cleaning-indian.jpg",
      "/images/family-clean-home-indian.jpg",
    ],
    featured: true,
  },
  {
    id: "serving-bowl",
    name: "Everyday Serving Bowl",
    slug: "everyday-serving-bowl",
    collection: "ceramics",
    price: 145,
    description: "Simple forms for daily rituals",
    longDescription: "The Everyday Bowl is designed for the rituals that anchor our days—morning fruit, evening salads, gathered bread. Its generous proportions and gentle curve invite gathering around the table. Each bowl is glazed in our signature cream, revealing flecks of iron from the clay body.",
    materials: "Stoneware, food-safe glaze",
    dimensions: "28cm diameter × 10cm height",
    images: [
      "/images/sofa-cleaning-indian.jpg",
      "/images/bathroom-cleaning-indian.jpg",
    ],
  },
  // Furniture
  {
    id: "oak-dining-table",
    name: "Harvest Dining Table",
    slug: "harvest-dining-table",
    collection: "furniture",
    price: 2850,
    description: "Solid oak crafted for generations of gathering",
    longDescription: "The Harvest Table is built to become the heart of your home. Crafted from single-slab white oak, its live edges preserve the natural character of the wood. Traditional mortise-and-tenon joinery ensures this table will be passed down through generations. Each table is unique, bearing the grain patterns and subtle color variations that only solid wood can offer.",
    materials: "Solid white oak, natural oil finish",
    dimensions: "220cm length × 95cm width × 76cm height",
    images: [
      "/images/hero-cleaning-indian.jpg",
      "/images/team-cleaning-indian.jpg",
    ],
    featured: true,
  },
  {
    id: "woven-lounge-chair",
    name: "Woven Lounge Chair",
    slug: "woven-lounge-chair",
    collection: "furniture",
    price: 1450,
    description: "Danish paper cord meets sculptural walnut",
    longDescription: "Our Lounge Chair reimagines the classic Danish cord technique for contemporary comfort. The seat and back are hand-woven with natural paper cord over a sculptural walnut frame. The result is a chair that's as beautiful from behind as from the front—a piece that commands attention from every angle.",
    materials: "Solid walnut, natural paper cord",
    dimensions: "75cm width × 80cm depth × 85cm height",
    images: [
      "/images/kitchen-cleaning-indian.jpg",
      "/images/family-clean-home-indian.jpg",
    ],
    new: true,
  },
  // Textiles
  {
    id: "linen-throw",
    name: "Heritage Linen Throw",
    slug: "heritage-linen-throw",
    collection: "textiles",
    price: 195,
    description: "Stonewashed Belgian linen in natural tones",
    longDescription: "Woven from Belgian flax and stonewashed for softness, our Heritage Throw brings effortless warmth to any room. The natural fiber breathes with the seasons—cool in summer, warming in winter. With each wash, the linen grows softer, developing a gentle drape that improves with time.",
    materials: "100% Belgian linen",
    dimensions: "180cm × 140cm",
    images: [
      "/images/sofa-cleaning-indian.jpg",
      "/images/bathroom-cleaning-indian.jpg",
    ],
  },
  {
    id: "wool-cushion",
    name: "Hand-Felted Wool Cushion",
    slug: "hand-felted-wool-cushion",
    collection: "textiles",
    price: 165,
    description: "Artisan-made using traditional felting techniques",
    longDescription: "Each cushion begins as raw wool, carefully felted by hand using techniques passed down through generations. The resulting textile is dense yet soft, with a depth of texture that cannot be replicated by machine. Available in a palette of natural earth tones.",
    materials: "100% New Zealand wool, linen back",
    dimensions: "50cm × 50cm",
    images: [
      "/images/hero-cleaning-indian.jpg",
      "/images/team-cleaning-indian.jpg",
    ],
  },
  // Objects & Vases
  {
    id: "sculptural-vase",
    name: "Sculptural Bud Vase",
    slug: "sculptural-bud-vase",
    collection: "objects",
    price: 85,
    description: "Minimalist form for a single stem",
    longDescription: "The Bud Vase celebrates restraint—one stem, one bloom, one moment of beauty. Hand-thrown from local clay and finished with our matte white glaze, its gentle curves create elegant shadows that shift with the day's light. Perfect alone or grouped in threes.",
    materials: "Stoneware, matte white glaze",
    dimensions: "15cm height × 6cm diameter",
    images: [
      "/images/kitchen-cleaning-indian.jpg",
      "/images/family-clean-home-indian.jpg",
    ],
  },
  {
    id: "brass-candleholder",
    name: "Forge Candleholder Set",
    slug: "forge-candleholder-set",
    collection: "objects",
    price: 245,
    description: "Hand-forged brass in three graduating heights",
    longDescription: "Our Forge Candleholders are shaped by fire, each one hand-forged from solid brass rod. The set of three graduating heights creates a sculptural tableau, their surfaces bearing the subtle marks of the blacksmith's hammer. Over time, the brass develops a rich patina that deepens their beauty.",
    materials: "Solid forged brass",
    dimensions: "15cm, 20cm, 25cm heights",
    images: [
      "/images/sofa-cleaning-indian.jpg",
      "/images/bathroom-cleaning-indian.jpg",
    ],
    featured: true,
  },
  // Seasonal
  {
    id: "winter-candle",
    name: "Winter Hearth Candle",
    slug: "winter-hearth-candle",
    collection: "seasonal",
    price: 65,
    description: "Notes of cedar, smoke, and dried herbs",
    longDescription: "Our Winter Hearth Candle captures the essence of the coldest months—the quiet of snow-covered mornings and the warmth of a well-tended fire. Hand-poured from natural soy wax and housed in our signature reusable stoneware vessel.",
    materials: "Natural soy wax, cotton wick, stoneware vessel",
    dimensions: "80 hour burn time",
    images: [
      "/images/hero-cleaning-indian.jpg",
      "/images/team-cleaning-indian.jpg",
    ],
  },
  // New Arrivals
  {
    id: "marble-tray",
    name: "Honed Marble Tray",
    slug: "honed-marble-tray",
    collection: "new",
    price: 175,
    description: "Natural stone for everyday beauty",
    longDescription: "Cut from a single block of Carrara marble and honed to a soft matte finish, this tray elevates everyday objects into a curated vignette. Its natural veining ensures each tray is one of a kind. Use it to corral bathroom essentials, display treasured objects, or serve aperitifs.",
    materials: "Carrara marble",
    dimensions: "30cm × 20cm × 2cm",
    images: [
      "/images/kitchen-cleaning-indian.jpg",
      "/images/family-clean-home-indian.jpg",
    ],
    new: true,
  },
  // Gifts
  {
    id: "gift-box",
    name: "Curated Gift Box",
    slug: "curated-gift-box",
    collection: "gifts",
    price: 225,
    description: "A thoughtful selection of our favorite pieces",
    longDescription: "Our Curated Gift Box brings together a selection of our most-loved small pieces: a bud vase, a hand-poured candle, and a set of linen napkins. Presented in a reusable wooden box lined with tissue paper, it's a gift that speaks of intention and care.",
    materials: "Stoneware, soy candle, linen, wooden box",
    images: [
      "/images/sofa-cleaning-indian.jpg",
      "/images/bathroom-cleaning-indian.jpg",
    ],
  },
];

export const getProductsByCollection = (collectionSlug: string): Product[] => {
  return products.filter((product) => product.collection === collectionSlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.new);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find((collection) => collection.slug === slug);
};

export const getRelatedProducts = (productId: string, limit = 4): Product[] => {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];
  
  return products
    .filter((p) => p.collection === product.collection && p.id !== productId)
    .slice(0, limit);
};
