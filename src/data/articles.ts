export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
  date: string;
  intro: string;
  sections: ArticleSection[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export const articles: Article[] = [
  {
    slug: "how-often-deep-clean-house-gorakhpur",
    title: "How Often Should You Deep Clean Your House in Gorakhpur?",
    excerpt:
      "Gorakhpur's seasonal climate transitions bring heavy dust and monsoon moisture. Discover why quarterly deep cleaning prevents dust mite accumulation, protects furniture, and improves indoor air quality.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80",
    readTime: "6 min read",
    category: "Home Care",
    date: "2026-01-12",
    metaTitle: "How Often to Deep Clean a House in Gorakhpur | Guide",
    metaDescription:
      "A season-by-season deep cleaning schedule for Gorakhpur homes. Learn how often to clean sofas, kitchens, bathrooms and water tanks for healthier indoor air.",
    keywords: [
      "home deep cleaning tips and tricks gorakhpur",
      "how often should i deep clean my house gorakhpur",
      "quarterly deep cleaning schedule gorakhpur",
    ],
    intro:
      "Homes in Gorakhpur face three very different cleaning challenges across a single year: fine winter dust from the Deoria bypass corridor, summer heat that bakes grease into kitchen surfaces, and monsoon humidity that invites mould into upholstery. A fixed calendar beats guesswork.",
    sections: [
      {
        heading: "The short answer: once a quarter",
        paragraphs: [
          "For an average 2–3 BHK household in Gorakhpur, a full-house deep clean every three months keeps dust mite populations, kitchen grease films and bathroom hard-water scaling from ever reaching a difficult stage. Weekly household mopping handles the surface; the quarterly deep clean handles what mopping never reaches — ceiling fan blades, chimney interiors, grout lines, mattress cores and curtain folds.",
        ],
      },
      {
        heading: "A season-by-season schedule",
        paragraphs: [
          "Rather than an arbitrary date, tie each deep clean to the weather shift that causes the damage.",
        ],
        bullets: [
          "February – March (post-winter): heavy dust removal, curtain and carpet extraction, ceiling and fan cleaning before the summer wind picks up.",
          "May – June (pre-monsoon): water tank cleaning, bathroom descaling, terrace and drainage clearance so the first rains do not carry silt indoors.",
          "August – September (mid-monsoon): anti-fungal treatment for sofas and mattresses, wardrobe interiors and any north-facing wall showing damp patches.",
          "October – November (festive): full-house shine, kitchen degreasing and chimney cleaning ahead of Diwali cooking and guests.",
        ],
      },
      {
        heading: "Which surfaces need more than four visits a year",
        paragraphs: [
          "Some areas simply accumulate faster. Kitchens in households that cook twice daily with mustard or refined oil build a sticky film within six to eight weeks — a degreasing visit every two months pays for itself in cabinet life. Bathrooms in Gorakhpur's hard-water zones scale visibly within ten weeks. Overhead water tanks should be cleaned twice a year at minimum, and a household with young children or an asthmatic member benefits from mattress and sofa extraction every four months.",
        ],
      },
      {
        heading: "What quarterly cleaning actually protects",
        paragraphs: [
          "Deep cleaning is preventive maintenance, not cosmetics. Fabric fibres abraded by embedded grit wear out years early. Grease left on modular cabinet shutters degrades the laminate adhesive. Grout that stays damp turns porous and stains permanently. And the invisible benefit — indoor air with fewer mite allergens and mould spores — is the one families notice most in the first monsoon after they start.",
        ],
      },
    ],
  },
  {
    slug: "post-construction-cleaning-checklist",
    title: "The Ultimate Post-Construction Cleaning Checklist for New Homes",
    excerpt:
      "Just finished building or renovating your house opposite Zoo or near Deoria Bypass? Here is a step-by-step checklist to safely strip away concrete dust, paint smears, and chemical fumes before moving in.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
    readTime: "7 min read",
    category: "New Homes",
    date: "2026-02-04",
    metaTitle: "Post-Construction Cleaning Checklist Gorakhpur | Step by Step",
    metaDescription:
      "A complete post-construction cleaning checklist for new and renovated homes in Gorakhpur — dust clearance, paint and grout removal, and safe move-in preparation.",
    keywords: [
      "post construction house cleaning services in gorakhpur",
      "new home cleaning checklist gorakhpur",
      "paint and grout removal after renovation gorakhpur",
    ],
    intro:
      "Construction dust is not ordinary dust. It is a fine mix of cement, silica, gypsum and sanded paint that settles into every joint and stays airborne for weeks. Cleaning it in the wrong order simply moves it around. This checklist works top-down, dry before wet.",
    sections: [
      {
        heading: "Stage 1 — Debris and coarse clearance",
        paragraphs: [
          "Before any water touches a surface, remove every physical remnant: tile offcuts, wire ends, packaging, sealant tubes and masking tape. Tape adhesive hardens in Gorakhpur's summer heat, so peel it while it is still pliable, ideally in the morning.",
        ],
        bullets: [
          "Clear debris room by room, starting at the top floor",
          "Peel all masking tape, stickers and protective films from windows, taps and switch plates",
          "Bag and remove waste before any dust suppression begins",
        ],
      },
      {
        heading: "Stage 2 — Dry dust removal, ceiling to floor",
        paragraphs: [
          "Use an industrial HEPA vacuum, never a broom. Sweeping re-suspends silica for hours. Work ceiling, then walls, then fixtures, then floor — repeating the sequence twice, because settled dust falls back once during the first pass.",
        ],
        bullets: [
          "Ceilings, cornices, fan blades and light fittings",
          "Wall surfaces, switchboards, door frames and window channels",
          "Wardrobe and cabinet interiors, including the top of every unit",
          "Full floor vacuum, corners and skirting last",
        ],
      },
      {
        heading: "Stage 3 — Paint, grout and cement residue",
        paragraphs: [
          "Paint speckles on vitrified tiles lift with a plastic blade and a mild solvent — never a metal scraper, which leaves permanent micro-scratches. Cement haze on tiles needs a diluted acidic cleaner applied briefly and neutralised immediately; left too long it etches the glaze. Glass usually carries both paint and sealant and should be done after the walls, never before.",
        ],
      },
      {
        heading: "Stage 4 — Wet clean and air quality",
        paragraphs: [
          "Only now does mopping make sense. Two passes with clean water each time, changing the solution per room, followed by a full day of cross-ventilation. Newly painted interiors continue releasing solvent vapour for several days, so run fans with windows open before moving furniture in.",
        ],
        bullets: [
          "Two-pass mopping with fresh water per room",
          "Sanitise bathrooms and the kitchen last",
          "Clean water tanks before the first use — construction silt almost always enters them",
          "Ventilate for 48 hours before move-in",
        ],
      },
    ],
  },
  {
    slug: "solar-panel-cleaning-power-output",
    title: "Why Solar Panel Cleaning Increases Power Output by Up to 25%",
    excerpt:
      "Dust, bird droppings, and industrial smog accumulate fast on solar panels across Eastern UP. Learn how regular chemical-free washing restores solar efficiency and boosts energy savings.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80",
    readTime: "5 min read",
    category: "Specialised",
    date: "2026-03-18",
    metaTitle: "Solar Panel Cleaning in Gorakhpur | Restore Up to 25% Output",
    metaDescription:
      "How dust and soiling cut solar output in Eastern UP, how often panels should be washed in Gorakhpur, and why soft-wash chemical-free cleaning protects the panel coating.",
    keywords: [
      "solar panel maintenance and cleaning frequency gorakhpur",
      "best solar panel cleaning gorakhpur",
      "increase solar power output cleaning gorakhpur",
    ],
    intro:
      "A rooftop array in Gorakhpur can lose a quarter of its generation to a layer of grime thin enough that you would not notice it from the ground. Soiling loss is the most under-measured cost in Indian residential solar.",
    sections: [
      {
        heading: "How soiling actually reduces output",
        paragraphs: [
          "Photovoltaic cells convert the light that reaches them. A uniform dust film scatters incoming light and typically costs 8–15% output. The bigger damage is uneven soiling: a single bird dropping or a leaf shadowing one cell forces the whole series string to throttle down to that cell's current. That is how a visually clean-looking panel ends up losing 20–25%.",
        ],
      },
      {
        heading: "Why Eastern UP is a high-soiling zone",
        paragraphs: [
          "Gorakhpur sits in an agricultural belt with seasonal crop-burning particulates, road dust from ongoing construction corridors, and brick-kiln smog in the dry months. Between October and June there is very little rain to self-clean the glass, which is exactly the window in which panels get the most sun.",
        ],
      },
      {
        heading: "How often to clean",
        paragraphs: [
          "For most Gorakhpur rooftops, once every six to eight weeks in the dry season and once after the monsoon settles is the practical rhythm. Homes near a main road, a construction site or farmland should shorten that to monthly.",
        ],
        bullets: [
          "Dry season (October – June): every 6–8 weeks",
          "Roadside or construction-adjacent sites: monthly",
          "Post-monsoon: one thorough wash to remove settled silt and algae",
        ],
      },
      {
        heading: "Why chemical-free soft washing matters",
        paragraphs: [
          "Panels carry an anti-reflective coating that detergents and hard-bristle brushes strip away, permanently reducing output and voiding most manufacturer warranties. Correct practice is deionised or filtered water with a soft-bristle rotary brush, done early morning or after sunset when the glass is cool — cold water on hot glass can cause micro-cracking. No pressure jets, no household cleaners, no metal edges.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
