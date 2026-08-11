export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Design Themes", href: "/design-themes" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type GalleryImage = {
  type: "full" | "half" | "medium";
  images: string[];
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  area: string;
  story: string;
  description: string;
  cover: string;
  gallery: GalleryImage[];
};

export const projects: Project[] = [
  {
    slug: "the-windsor",
    title: "Windsor",
    location: "Oshiwara, Mumbai",
    category: "Modern Luxury Style",
    year: "2023",
    area: "2,300 sq. ft.",
    cover: "/windsorphotos/05.jpg",
    story:
      "A family home built around a single, unhurried question — where does the light fall at four in the afternoon?",
    description:
      "Step into a space where every detail is designed to elevate everyday living. Warm lighting, luxurious textures, and timeless craftsmanship come together to create an atmosphere of comfort, sophistication, and serenity. More than an interior—it's an experience that welcomes, inspires, and stays with you. ",
    gallery: [
      {
        type: "full",
        images: ["/windsorphotos/04.jpg"],
      },
      {
        type: "full",
        images: ["/windsorphotos/05.jpg"],
      },
      {
        type: "full",
        images: ["/windsorphotos/12.jpg"],
      },
      {
        type: "full",
        images: ["/windsorphotos/20.jpg"],
      },

      {
        type: "half",
        images: ["/windsorphotos/08.jpg", "/windsorphotos/10.jpg"],
      },
    ],
  },
  {
    slug: "the-imperial-heights",
    title: "Imperial Heights",
    location: "Goregaon, Mumbai",
    category: "Minimalistic Style",
    year: "2023",
    area: "1,350 sq. ft.",
    cover: "/imperialheights/A_04.jpg",
    story:
      "A young couple asked for a home with nothing to explain — every object present on purpose.",
    description:
      "Where simplicity meets sophistication, every corner is designed with purpose and warmth. Soft palettes, handcrafted finishes, and seamless functionality come together to create a home that feels as peaceful as it is beautiful. ",

    gallery: [
      {
        type: "full",
        images: ["/imperialheights/A_02.jpg"],
      },
      {
        type: "full",
        images: ["/imperialheights/A_05.jpg"],
      },
      {
        type: "full",
        images: ["/imperialheights/A_22.jpg"],
      },
      {
        type: "full",
        images: ["/imperialheights/A_31.jpg"],
      },
    ],
  },
  {
    slug: "the-desai-villa",
    title: "Desai Villa ",
    location: "Mira road, Mumbai ",
    category: "Minimalistic and Mid Century  Style ",
    year: "2022",
    area: "2,600 sq. ft.",
    cover: "/desai villa/428A5624_Edited.jpg",
    story:
      "A hill-country weekend home designed to be experienced barefoot, in silence.",
    description:
      "More than an entrance, it's a journey into refined living. The harmonious blend of rich materials, soft illumination, and lush greenery creates a welcoming retreat that instantly calms the mind and elevates the senses.",
    gallery: [
      {
        type: "full",
        images: ["/desai villa/428A5270_Edited.jpg"],
      },
      {
        type: "full",
        images: ["/desai villa/428A5288_Edited.jpg"],
      },
      {
        type: "full",
        images: ["/desai villa/428A5545_Edited.jpg"],
      },
    ],
  },
  {
    slug: "the-lodha-marquise",
    title: "Lodha Marquise",
    location: "Worli, Mumbai",
    category: "Minimalistic Style",
    year: "2024",
    area: "2,900 sq. ft.",
    cover: "/lodha marquee/bedroom.jpg",
    story:
      "A three-generation family home, planned around an open courtyard at its heart, following vastu.",
    description:
      "Wake up to a space designed to soothe the senses and restore the soul. Bathed in natural light, enriched with warm textures, and crafted with understated elegance, this bedroom becomes a private sanctuary where every day begins and ends in complete comfort.",

    gallery: [
      {
        type: "half",
        images: ["/lodha marquee/bedroom.jpg", "/lodha marquee/bedroom2.jpg"],
      },
      {
        type: "medium",
        images: ["/lodha marquee/bedroom3.jpg"],
      },
    ],
  },
  {
    slug: "the-alsalim",
    title: "Al Salim",
    location: "Jogeshwari, Mumbai",
    category: "Minimalistic Style",
    year: "2023",
    area: "1,100 sq. ft.",
    cover: "/al salim/Untitled design.png",
    story:
      "A three-generation family home, planned around an open courtyard at its heart, following vastu.",
    description:
      "We design workspaces that do more than look exceptional—they shape experiences. By combining timeless aesthetics with intelligent functionality, we create offices that energize teams, impress clients, and reflect the vision of every business they represent.",
    gallery: [
      {
        type: "half",
        images: [
          "/al salim/Untitled design (3).png",
          "/al salim/Untitled design (2).png",
        ],
      },
      {
        type: "medium",
        images: ["/al salim/Untitled design (1).png"],
      },
    ],
  },
  {
    slug: "the-infinity-gym",
    title: "Infinity Gym",
    location: "Lower Parel, Mumbai",
    category: "Minimalistic Style",
    year: "2024",
    area: "700 sq. ft.",
    cover: "/infinity gym render/fv1.jpg",
    story:
      "A three-generation family home, planned around an open courtyard at its heart, following vastu.",
    description:
      "Designed to energize both body and mind, this fitness space blends contemporary aesthetics with a calming ambience. Bathed in natural light and crafted with premium finishes, it transforms every workout into an experience of motivation, balance, and well-being. ",
    gallery: [
      {
        type: "full",
        images: ["/infinity gym render/fv2.jpg"],
      },
      {
        type: "full",
        images: ["/infinity gym render/fv4.jpg"],
      },
      {
        type: "full",
        images: ["/infinity gym render/fv5.jpg"],
      },
    ],
  },
  {
    slug: "the-infinity-community-hall",
    title: "Infinity Community hall",
    location: "Lower Parel, Mumbai",
    category: "Modern Contemporary Style",
    year: "2025",
    area: "2,200 sq. ft.",
    cover: "/infinitycommunityhallcenter/fv2.jpg",
    story:
      "A three-generation family home, planned around an open courtyard at its heart, following vastu.",
    description:
      "We design shared spaces that enrich everyday living. This beautifully curated community hall combines modern sophistication with inviting warmth, creating the perfect setting for celebrations, conversations, and meaningful experiences that bring communities closer together. ",
    gallery: [
      {
        type: "full",
        images: ["/infinitycommunityhallcenter/fv1 a.jpg"],
      },
      {
        type: "full",
        images: ["/infinitycommunityhallcenter/fv3.jpg"],
      },
      {
        type: "full",
        images: ["/infinitycommunityhallcenter/fv5.jpg"],
      },
    ],
  },
];

// Compact design-theme list, feeds the homepage teaser section only —
// mirrors `services` below, both in shape and in how it's consumed.
export const designThemes = [
  {
    title: "Modern Luxury ",
    description:
      "Sharp lines, honest materials, and a palette that never overreaches.",
  },
  {
    title: "Mid Century ",
    description:
      "Fluid, of-the-moment interiors that borrow freely and settle in comfortably.",
  },
  {
    title: "Modern Minimal ",
    description: "Every object earns its place. Nothing more, nothing less.",
  },
  {
    title: "Japandi",
    description:
      "Sculptural forms, rich materials, and considered detail throughout.",
  },
];

// Design themes, each with its own dedicated page at /design-themes/[slug].
// This is intentionally separate from `designThemes` above, which only
// feeds the compact homepage teaser — same pattern as services / serviceOfferings.
export type DesignThemeOffering = {
  slug: string;
  title: string;
  shortDescription: string;
  gallery: GalleryImage[];
};

export const designThemeOfferings: DesignThemeOffering[] = [
  {
    slug: "modernluxury",
    title: "Modern Luxury",
    shortDescription:
      "Sharp lines, honest materials, and a palette that never overreaches.",
    gallery: [
      {
        type: "half",
        images: [
          "/designthemes/modernluxurystyle/modern1.png",
          "/designthemes/modernluxurystyle/modern3.png",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/modernluxurystyle/modern2.png",
          "/designthemes/modernluxurystyle/modern4.png",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/modernluxurystyle/modern5.png",
          "/designthemes/modernluxurystyle/modern6.png",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/modernluxurystyle/modern7.png",
          "/designthemes/modernluxurystyle/modern8.png",
        ],
      },
     
      {
        type: "medium",
        images: ["/designthemes/modernluxurystyle/modern9.png"],
      },
    ],
  },
  {
    slug: "midcenturystyle",
    title: "Mid Century Style",
    shortDescription:
      "Fluid, of-the-moment interiors that borrow freely and settle in comfortably.",
    gallery: [
      {
        type: "half",
        images: [
          "/designthemes/midcenturystyle/midcentury1.jpg",
          "/designthemes/midcenturystyle/midcentury3.png",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/midcenturystyle/midcentury2.jpg",
          "/designthemes/midcenturystyle/midcentury4.png",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/midcenturystyle/midcentury5.jpg",
          "/designthemes/midcenturystyle/midcentury7.jpg",
        ],
      },
      {
        type: "medium",
        images: ["/designthemes/midcenturystyle/midcentury6.jpg"],
      },
    ],
  },
  {
    slug: "modernminimal",
    title: "Modern Minimalist",
    shortDescription:
      "Every object earns its place. Nothing more, nothing less.",
    gallery: [
      {
        type: "half",
        images: [
          "/designthemes/modernminimalstyle/modern_minimal_1.png",
          "/designthemes/modernminimalstyle/modern_minimal_2.png",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/modernminimalstyle/modern_minimal_3.png",
          "/designthemes/modernminimalstyle/modern_minimal_4.png",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/modernminimalstyle/modern_minimal_5.png",
          "/designthemes/modernminimalstyle/modern_minimal_6.png",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/modernminimalstyle/modern_minimal_7.png",
          "/designthemes/modernminimalstyle/modern_minimal_8.png",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/modernminimalstyle/modern_minimal_9.png",
          "/designthemes/modernminimalstyle/modern_minimal_10.png",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/modernminimalstyle/modern_minimal_11.png",
          "/designthemes/modernminimalstyle/modern_minimal_12.png",
        ],
      },
    ],
  },
  {
    slug: "japandi",
    title: "Japandi",
    shortDescription:
      "Sculptural forms, rich materials, and considered detail throughout.",
    gallery: [
      {
        type: "half",
        images: [
          "/designthemes/japandi/japandi1.jpeg",
          "/designthemes/japandi/japandi2.jpeg",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/japandi/japandi3.jpeg",
          "/designthemes/japandi/japandi4.jpeg",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/japandi/japandi5.jpeg",
          "/designthemes/japandi/japandi6.jpeg",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/japandi/japandi7.jpeg",
          "/designthemes/japandi/japandi8.jpeg",
        ],
      },
      {
        type: "half",
        images: [
          "/designthemes/japandi/japandi9.jpeg",
          "/designthemes/japandi/japandi10.jpeg",
        ],
      },
     
    ],
  },
];

export const services = [
  {
    title: "Space Planning",
    description:
      "Layouts drawn around how a family actually moves through a day.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Interior Design",
    description:
      "Considered, complete interiors — from first sketch to final styling.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Lighting",
    description:
      "Layered lighting design that changes character from morning to night.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Furniture",
    description:
      "Bespoke and curated pieces, scaled and finished for each room.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Material Selection",
    description:
      "Wood, stone and textile chosen by hand for grain, tone and touch.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Execution",
    description:
      "Dedicated site supervision, so nothing is lost between drawing and build.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
  },
];

// Service offerings, each with its own dedicated page at /services/[slug].
// This is intentionally separate from `services` above, which only feeds
// the compact homepage teaser and is left untouched by design.
export type ServiceSubcategory = {
  name?: string;
  alt?: string;
  image: string;
  description?: string;
};

export type ServiceOffering = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  description: string;
  subcategories?: ServiceSubcategory[];
};

export const serviceOfferings: ServiceOffering[] = [
  {
    slug: "bespoke-residential-interiors",
    title: "Bespoke Residential Interiors",
    shortDescription:
      "Homes designed around how a family actually lives — considered, personal, and built to last.",
    heroImage: "/services/beSpoke/beSpokeApartment.jpeg",
    description:
      "Every residential project begins the same way — not with a moodboard, but with a conversation about how a family moves through their day. From apartments to independent homes, we design interiors that hold daily life comfortably, using materials and proportions chosen to age well rather than photograph well. The result is a home that feels inevitable, not decorated.",
    subcategories: [
      {
        name: "Apartments",
        image: "/services/beSpoke/beSpokeApartment.jpeg",
        description:
          "Workspaces planned around focus, collaboration and the everyday rhythm of a team.",
      },
      {
        name: "Penthouses",
        image: "/services/beSpoke/beSpokePenthouse.jpeg",
        description:
          "Flexible environments designed to feel welcoming to many different people, every day.",
      },
      {
        name: "Villas",
        image: "/services/beSpoke/beSpokeVilla.jpeg",
        description:
          "Layouts that guide movement and attention, built around how customers actually browse.",
      },
      {
        name: "Studio & Compact Homes",
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop",
        description:
          "Restaurants, cafés and guest spaces designed for atmosphere as much as function.",
      },
      {
        name: "Modular kitchens & wardrobes",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
        description:
          "Adaptable spaces for teams whose work changes shape from one week to the next.",
      },
    ],
  },
  {
    slug: "modern-commercial-interiors",
    title: "Modern Commercial Interiors",
    shortDescription:
      "Workspaces and commercial environments designed to perform as well as they look.",
    heroImage: "/services/modernCommercialInterior/coworkingInterior.jpeg",
    description:
      "Commercial interiors carry a different brief — they need to work for many people, all day, and still say something about the business behind them. We design offices, retail spaces and hospitality environments that balance function with atmosphere, so a space energises without exhausting the people inside it.",
    subcategories: [
      {
        name: "Corporate Offices",
        image: "/services/modernCommercialInterior/corporateInterior.jpeg",
        description:
          "Workspaces planned around focus, collaboration and the everyday rhythm of a team.",
      },
      {
        name: "Co-working Spaces",
        image: "/services/modernCommercialInterior/coworkingInterior.jpeg",
        description:
          "Flexible environments designed to feel welcoming to many different people, every day.",
      },
      {
        name: "Retail Stores",
        image: "/services/modernCommercialInterior/retail1.jpeg",
        description:
          "Layouts that guide movement and attention, built around how customers actually browse.",
      },
      {
        name: "Hospitality Spaces",
        image: "/services/modernCommercialInterior/hospitality1.jpeg",
        description:
          "Restaurants, cafés and guest spaces designed for atmosphere as much as function.",
      },
      {
        name: "Studios & Creative Environments",
        image: "/services/modernCommercialInterior/retail2.jpeg",
        description:
          "Adaptable spaces for teams whose work changes shape from one week to the next.",
      },
    ],
  },
  {
    slug: "architecture-planning",
    title: "Architecture Planning",
    shortDescription:
      "Structural and spatial planning that gives every later design decision somewhere solid to stand.",
    heroImage:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1800&auto=format&fit=crop",
    description:
      "Before any interior decision is made, the architecture has to be right — orientation, structure, and how a building meets its site. We work closely with architects and structural engineers from the earliest stage, so the building itself supports the way it will eventually be lived in, rather than working against it.",
    subcategories: [
      {
        name: "Zoning & Site Planning",
        image: "/services/architectPlanning/architectPlanning1.jpeg",
        description:
          "Strategic zoning that optimizes land use,ensures smooth circulation and enhances the overall potentail of the site.",
      },
      {
        name: "Planning & Layout Design",
        image: "/services/architectPlanning/architectPlanning2.jpeg",
        description:
          "Thoughtfully planned layouts that maximize space efficiency,natural light, ventilation and user experience.",
      },
      {
        name: "3D Modelling Process Concept",
        image: "/services/architectPlanning/architectPlanning3.jpeg",
        description:
          "Conceptual 3D models to explore form, massing, materials and design possiblities.",
      },
      {
        name: "3D Modelling Process",
        image: "/services/architectPlanning/architectPlanning4.jpeg",
        description:
          "Detailed 3D models with materials, textures and accurate design coordination.",
      },
      {
        name: "GFC Drawings & Documentation",
        image: "/services/architectPlanning/architectPlanning5.jpeg",
        description:
          "Accurate, code-compliant drawings and documentation that ensure clarity, approvals and seamless execution on site.",
      },
      {
        name: "BIM Coordination",
        image: "/services/architectPlanning/architectPlanning6.jpeg",
        description:
          "Integrated coordination of architectural, structural and MEP systems for clash-free execution.",
      },
      {
        name: "Consultant Coordination",
        image: "/services/architectPlanning/architectPlanning7.jpeg",
        description:
          "Seamless coordination with all consultants to integrate expertise, resolve challenges and deliver holistic design solutions.",
      },
      {
        name: "3D Visualization & Renders",
        image: "/services/architectPlanning/architectPlanning8.jpeg",
        description:
          "Realistic 3D renders that bring the design to life, helping you visualize every detail before it's built.",
      },
      {
        name: "3D Walkthrough",
        image: "/services/architectPlanning/architectPlanning9.jpeg",
        description:
          "Immersive walkthrough that allow you to experience the space, flow and ambiance in real scale.",
      },
      {
        name: "Project Execution",
        image: "/services/architectPlanning/architectPlanning10.jpeg",
        description:
          "From design to delivery-ensuring quality, precision and timely execution at every step.",
      },
      {
        name: "Site Monitoring & Quality Check",
        image: "/services/architectPlanning/architectPlanning11.jpeg",
        description:
          "Regular site visits and quality checks to ensure design intent and superior craftsmanship.",
      },
      {
        name: "Completed Project",
        image: "/services/architectPlanning/architectPlanning12.jpeg",
        description:
          "Delivering exceptional spaces that are functional, aesthetic and built to last.",
      },
    ],
  },
  {
    slug: "space-planning",
    title: "Space Planning",
    shortDescription:
      "Layouts drawn around how people actually move through a day, not just how a floor plan looks on paper.",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop",
    description:
      "Good space planning is invisible — you only notice it when it's missing. We study circulation, sightlines and daily routines before drawing a single wall, so every room earns its place and nothing feels like an afterthought.",
    subcategories: [
      {
        name: "Consultation & Space Planning",
        image: "/services/spacePlanning/spacePlanning1.jpeg",
        description:
          "Understanding your needs, lifestyle and vision to plan the perfect space.",
      },
      {
        name: "Concept & Design Development",
        image: "/services/spacePlanning/spacePlanning2.jpeg",
        description:
          "Mood boards, layouts and 3D concepts that bring your ideas to life.",
      },
      {
        name: "3D Modelling & Design Process",
        image: "/services/spacePlanning/spacePlanning3.jpeg",
        description:
          "Detailed 3D modelling and realistic visualizaions to refine every detail before execution.",
      },
      {
        name: "Material & Finish Selection",
        image: "/services/spacePlanning/spacePlanning4.jpeg",
        description:
          "Curated selection of premium materials, finishes and textures.",
      },
    ],
  },
  {
    slug: "material-selection",
    title: "Material Selection",
    shortDescription:
      "Wood, stone, metal and textile, chosen by hand for grain, tone, and how they'll age.",
    heroImage:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1800&auto=format&fit=crop",
    description:
      "Materials do most of the emotional work in a space, long before furniture arrives. We source and hand-check every material for grain, tone and touch, favouring things that soften and deepen with age over finishes that only look their best on day one.",
    subcategories: [
      {
        name: "Lighting Selection",
        image: "/services/materialSection/materialSection1.jpeg",
        description:
          "Understanding your needs, lifestyle and vision to plan the perfect space.",
      },
      {
        name: "Carpet & Rug Selection",
        image: "/services/materialSection/materialSection2.jpeg",
        description:
          "Detailed 3D modelling and realistic visualizaions to refine every detail before execution.",
      },
      {
        name: "Wall Decor Selection",
        image: "/services/materialSection/materialSection3.jpeg",
        description:
          "Curated selection of premium materials, finishes and textures.",
      },
      {
        name: "Curtain & Fabric Selection",
        image: "/services/materialSection/materialSection4.jpeg",
        description:
          "Mood boards, layouts and 3D concepts that bring your ideas to life.",
      },
      {
        name: "Chandelier Selection",
        image: "/services/materialSection/materialSection5.jpeg",
        description:
          "Mood boards, layouts and 3D concepts that bring your ideas to life.",
      },
      {
        name: "Accessories & Decor Selection",
        image: "/services/materialSection/materialSection6.jpeg",
        description:
          "Mood boards, layouts and 3D concepts that bring your ideas to life.",
      },
    ],
  },
  {
    slug: "detail-drawings",
    title: "Detail Drawings",
    shortDescription:
      "Technical drawings precise enough that craftsmen can execute a design exactly as intended.",
    heroImage:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1800&auto=format&fit=crop",
    description:
      "Our detailed drawings transform design concepts into clear, accurate, and execution-ready documentation. Every element of the interior is carefully planned and documented to ensure that the design is executed exactly as envisioned.From furniture layouts and modular details to electrical, plumbing, ceiling, flooring, and material specifications, our drawings provide contractors and craftsmen with the technical clarity required for seamless execution.",
    subcategories: [
      {
        alt: "detailDrawing1",
        image: "/services/detailDrawing/detailDrawing1.jpeg",
      },
      {
        alt: "detailDrawing2",
        image: "/services/detailDrawing/detailDrawing2.jpeg",
      },
      {
        alt: "detailDrawing3",
        image: "/services/detailDrawing/detailDrawing3.jpeg",
      },
      {
        alt: "detailDrawing4",
        image: "/services/detailDrawing/detailDrawing4.jpeg",
      },
      {
        alt: "detailDrawing5",
        image: "/services/detailDrawing/detailDrawing5.jpeg",
      },
    ],
  },
  {
    slug: "furniture-design",
    title: "Furniture Design",
    shortDescription:
      "Bespoke and curated furniture, scaled and finished to fit each room exactly.",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop",
    description:
      "Off-the-shelf furniture rarely fits a considered interior. We design bespoke pieces where scale and proportion matter most, and curate the rest from makers whose craft matches the rest of the home — so every piece belongs, rather than merely fits.",
    subcategories: [
      {
        alt: "furnitureDesign1",
        image: "/services/furniturePlanning/furniturePlanning1.jpeg",
      },
      {
        alt: "furnitureDesign2",
        image: "/services/furniturePlanning/furniturePlanning2.jpeg",
      },
      {
        alt: "furnitureDesign3",
        image: "/services/furniturePlanning/furniturePlanning3.jpeg",
      },
      {
        alt: "furnitureDesign4",
        image: "/services/furniturePlanning/furniturePlanning4.jpeg",
      },
      {
        alt: "furnitureDesign5",
        image: "/services/furniturePlanning/furniturePlanning5.jpeg",
      },
      {
        alt: "furnitureDesign6",
        image: "/services/furniturePlanning/furniturePlanning6.jpeg",
      },
    ],
  },
  {
    slug: "project-execution",
    title: "Project Execution",
    shortDescription:
      "Dedicated on-site supervision, so the drawing survives contact with the build.",
    heroImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1800&auto=format&fit=crop",
    description:
      "A design is only as good as its execution. We supervise every site personally, from the first structural change to the final coat of finish, so nothing is lost in translation between the drawing and the built result.",
    subcategories: [
      {
        name: "Interior Designer & Client Discussion on Site",
        image: "/services/projectExecution/projectExecution1.jpeg",
        description:
          "Understanding your needs, lifestyle and vision to plan the perfect space.",
      },
      {
        name: "Design Briefing Team",
        image: "/services/projectExecution/projectExecution2.jpeg",
        description:
          "Detailed 3D modelling and realistic visualizaions to refine every detail before execution.",
      },
      {
        name: "Carpentry Work",
        image: "/services/projectExecution/projectExecution3.jpeg",
        description:
          "Curated selection of premium materials, finishes and textures.",
      },
      {
        name: "Electrical Work",
        image: "/services/projectExecution/projectExecution4.jpeg",
        description:
          "Mood boards, layouts and 3D concepts that bring your ideas to life.",
      },
      {
        name: "Plumbing Work",
        image: "/services/projectExecution/projectExecution5.jpeg",
        description:
          "Mood boards, layouts and 3D concepts that bring your ideas to life.",
      },
      {
        name: "P.O.P & Ceiling Work",
        image: "/services/projectExecution/projectExecution6.jpeg",
        description:
          "Mood boards, layouts and 3D concepts that bring your ideas to life.",
      },
      {
        name: "Painting Work",
        image: "/services/projectExecution/projectExecution7.jpeg",
        description:
          "Mood boards, layouts and 3D concepts that bring your ideas to life.",
      },
      {
        name: "Joinery & Installation",
        image: "/services/projectExecution/projectExecution8.jpeg",
        description:
          "Mood boards, layouts and 3D concepts that bring your ideas to life.",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Trust was the foundation of our journey. Every commitment was honored, every detail was thoughtfully executed, and the level of coordination made the entire process effortless. The finishing quality is simply outstanding—our home reflects elegance, precision, and timeless luxury. Choosing this team was one of the best decisions we made.",
    name: "Sanaullah",
    location: "Windsor, Oshiwara",
  },
  {
    quote:
      "Stepping into our home feels like stepping into a world of calm and comfort. The soothing color palette, warm lighting, and thoughtful design create a beautiful balance of elegance and relaxation . We couldnt be more happier with the experience and outcome.",
    name: "Deepal Lulla",
    location: "Imperial Heights, Goreagaon",
  },
  {
    quote:
      "Our new office has truly elevated the way we work and connect as a team. The space is designed thoughtfully, with a perfect balance of openness and privacy. The movement throughout the office feels seamless—every area flows naturally into the next, making day-to-day operations smooth and efficient.",
    name: "Salim Bawa",
    location: "Al Salim, Jogeshwari",
  },
  {
    quote:
      "We are absolutely in love with our new bedroom! Every design element has been thoughtfully planned—from the elegant wall panelling and soft curves to the warm ambient lighting that creates such a soothing atmosphere. Most importantly, they delivered everything on time, exactly as promised. It was a seamless experience from start to finish.",
    location: "Lodha Marquise, Worli",
  },
];

export const whyChoose = [
  {
    title: "Luxury Execution",
    description:
      "Every finish supervised in person, to the standard first promised at the moodboard stage.",
  },
  {
    title: "Personalised Approach",
    description:
      "No signature look repeated on every project — each home designed from its own site and story.",
  },
  {
    title: "End-to-End Service",
    description:
      "From the first consultation to the final styled photograph, one studio, one accountable team.",
  },
  {
    title: "Timeless Design",
    description:
      "We design against trend cycles, for homes that will still feel right in twenty years.",
  },
];

export const faqs = [
  {
    question: "Which areas do you work in?",
    answer:
      "We're based in Jogeshwari West, Mumbai, and take on residential and commercial projects across Mumbai and the wider Mumbai Metropolitan Region.",
  },
  {
    question: "Do you design according to Vastu Shastra?",
    answer:
      "Yes. Where a family wants it, we plan the layout to honour vastu principles from the outset, so it shapes the design rather than being retrofitted at the end.",
  },
  {
    question: "Do you handle both design and execution?",
    answer:
      "Every project stays with one team from the first floor plan to the last cushion — space planning, material selection, detail drawings and on-site execution, all under one roof.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope and site conditions, but most homes move from first consultation to handover in four to nine months. We'll give you a realistic timeline once we understand your space.",
  },
  {
    question: "Do you take on commercial projects too?",
    answer:
      "Yes — alongside residential interiors, we design offices, retail stores, co-working spaces and hospitality projects.",
  },
  {
    question: "How do I start a project with you?",
    answer:
      "Share a little about your home or space using the consultation form below. We personally read every enquiry and reply within two working days with an available slot.",
  },
];
