export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}

export interface CampaignPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  gallery: string[];
  description: string;
}

// GLOBAL BRAND DETAILS
export const BRAND = {
  name: "Praaroop Media",
  phone: "+91-86969 40199",
  whatsappNumber: "918696940199",
  whatsappLink: "https://api.whatsapp.com/send?phone=918696940199&text=Hello",
  email: "contact@praaroop.com",
  address: "414, 4th Floor, City Centre Building, Ashok Nagar, Udaipur.",
  openingHours: "Mon - Sun: 9:00 AM - 7:00 PM",
  googleMapsLink: "https://g.co/kgs/fpcAL9V",
  socials: {
    facebook: "https://www.facebook.com/praaroopmedia",
    linkedin: "https://www.linkedin.com/company/praaroopmedia",
    instagram: "https://www.instagram.com/praaroopmedia/",
  },
  copyright: "Praaroop Media © All rights reserved",
  tagline: "Shaping relevance in a connected world From perception to participation Across business, culture and governance",
};

// GLOBAL NAV LINKS
export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us/" },
  { name: "Our clients", href: "/#client" },
  { name: "Campaigns", href: "/campaigns/" },
  { name: "Contact us", href: "/contact-us/" },
];

// HOMEPAGE: DIGITAL MARKETING (6 cards, exact order)
export const DIGITAL_MARKETING_ITEMS = [
  "Brand strategy / Performance marketing",
  "Digital marketing / Social media marketing",
  "Website Development",
  "Political Campaign/ Narrative Building",
  "Content Marketing / Content Creation",
  "Influencer Marketing",
];

// HOMEPAGE: SECTION INTRO
export const SECTION_INTRO = {
  eyebrow: "360° MARKETING AGENCY",
  heading: "We partner with brands to create powerful strategies that inspire, impact and lasting growth.",
  h1: "We Are The Best 360° Marketing Agency in Udaipur",
  body: "Indoor and outdoor marketing are essential for strengthening the brand presence and audience engagement, and Praaroop Media excels in delivering strategic, high-impact solutions. Our expertise lies in delivering innovative marketing solutions that captivate, engage, and elevate brands across diverse spaces and platforms.",
};

// HOMEPAGE: OUTDOOR MARKETING (12 cards, exact order)
export const OUTDOOR_MARKETING_ITEMS = [
  "Airport Advertising",
  "Hoarding Advertising",
  "Theater Advertising",
  "Bus Advertising",
  "Auto Hood Advertising",
  "Newspaper Advertising",
  "Tri-Cycle Advertising",
  "No Parking Board Advertising",
  "Pole Advertising",
  "Radio Advertising",
  "Mobile Van Advertising",
  "Newspaper Pamphlet Insert Advertising",
];

// HOMEPAGE: ACTIVATIONS (4 cards, exact order)
export const ACTIVATIONS_ITEMS = [
  "Mall",
  "Retail",
  "Corporate",
  "SCHOOL/COLLEGE",
];

// HOMEPAGE: CTA BANNER
export const CTA_BANNER = {
  title: "Confused?",
  subhead: "We can help you plan the perfect campaign!",
  body: "Hire our expert media planners to find, plan and place your next promotion.",
  buttonText: "Contact us",
};

// STATS (exact order)
export const STATS = [
  { value: 200, label: "Successful Campaigns", suffix: "+" },
  { value: 100, label: "Satisfied Clients", suffix: "+" },
  { value: 1000, label: "Cup Of Coffee", suffix: "+" },
];

// CLIENT LOGOS (~24 logos)
export const CLIENT_LOGOS: ClientLogo[] = [
  { id: "c1", name: "Volkswagen", logo: "/logos/VolksWagon.webp" },
  { id: "c2", name: "PIMS Hospital", logo: "/logos/PIMS-logo-rectangle.webp" },
  { id: "c3", name: "Client Partner 1", logo: "/logos/Group-28.webp" },
  { id: "c4", name: "Client Partner 2", logo: "/logos/Group-29-1.webp" },
  { id: "c5", name: "Client Partner 3", logo: "/logos/Group-30-1.webp" },
  { id: "c6", name: "Client Partner 4", logo: "/logos/Group-31-1.webp" },
  { id: "c7", name: "Client Partner 5", logo: "/logos/Group-36.webp" },
  { id: "c8", name: "Client Partner 6", logo: "/logos/Group-23-1.webp" },
  { id: "c9", name: "Client Partner 7", logo: "/logos/Group-33.webp" },
  { id: "c10", name: "Client Partner 8", logo: "/logos/Group-37.webp" },
  { id: "c11", name: "Client Partner 9", logo: "/logos/Group-38.webp" },
  { id: "c12", name: "Client Partner 10", logo: "/logos/Group-39.webp" },
  { id: "c13", name: "Client Partner 11", logo: "/logos/Group-61.webp" },
  { id: "c14", name: "Client Partner 12", logo: "/logos/Group-41.webp" },
  { id: "c15", name: "Client Partner 13", logo: "/logos/Group-51.webp" },
  { id: "c16", name: "Client Partner 14", logo: "/logos/Group-50.webp" },
  { id: "c17", name: "Client Partner 15", logo: "/logos/Group-49.webp" },
  { id: "c18", name: "Client Partner 16", logo: "/logos/Group-34.webp" },
  { id: "c19", name: "Client Partner 17", logo: "/logos/Group-44.webp" },
  { id: "c20", name: "Client Partner 18", logo: "/logos/Group-43.webp" },
  { id: "c21", name: "Client Partner 19", logo: "/logos/Group-42.webp" },
  { id: "c22", name: "Client Partner 20", logo: "/logos/Group-52.webp" },
  { id: "c23", name: "Client Partner 21", logo: "/logos/Untitled-design-3-1.png" },
];

// WHY CHOOSE US
export const WHY_CHOOSE_US = {
  label: "Praaroop Media",
  h2: "Why Choose Praaroop Media in Udaipur?",
  body: "What sets Praaroop Media apart is our unwavering commitment to quality and our personalised approach to every project. We understand that every client is unique and that every story deserves to be told in the most authentic way possible. Our client-focused philosophy ensures that we listen to your needs, embrace your vision, and deliver results that exceed your expectations.",
  subheading: "What Sets Us Apart",
  pillars: [
    {
      title: "Strategic Excellence",
      description: "We take a tailored approach to every project, ensuring our strategies align with your goals and resonate with your audience.",
    },
    {
      title: "Creative Brilliance",
      description: "Our team of designers, storytellers, and strategists push the boundaries of creativity to make your brand unforgettable.",
    },
    {
      title: "Technology-Driven Solutions",
      description: "Leveraging the latest tools and trends, we deliver innovative solutions that stay ahead of the curve.",
    },
    {
      title: "Client-Centric Focus",
      description: "Your success is our priority. We work closely with you, building relationships based on trust, transparency, and shared vision.",
    },
  ],
  aboutCard: {
    label: "About Us",
    body: "Welcome to Praaroop Media, your trusted partner in transforming ideas into impactful stories. We are a forward-thinking media and marketing agency committed to helping brands thrive in a world of ever-evolving possibilities",
    image: "/IMG_1116.jpg",
  },
};

export const WHY_US_PILLARS = WHY_CHOOSE_US.pillars;

// TESTIMONIALS (4 exact items)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sunita Rao",
    content: "Thanks to Praaroop Media, our theater ads have driven a huge increase in ticket sales. Their creativity and professionalism make them our top advertising partner.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "Anjali Patel",
    content: "Praaroop transformed our outdoor advertising on a modest budget. Their creative solutions and dedication boosted our brand presence significantly. Fantastic team!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "Vikram Mehta",
    content: "Praaroop Media LED van branding at the airport has greatly enhanced our visibility. Their personalized service and attention to detail are outstanding. Thrilled with the results!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "t4",
    name: "Rajesh Kumar",
    content: "Praaroop's bus and auto-rickshaw ads gave our brand incredible visibility. Their innovative approach and attention to detail are unmatched. Highly recommend!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  },
];

// PAGE 2: ABOUT US VERBATIM CONTENT
export const ABOUT_US_PAGE = {
  h1: "About Us",
  body1: "At Praaroop Media, we don't just tell stories — we create experiences that inspire, engage, and leave a lasting mark. As a forward-thinking media and marketing agency, our passion lies in transforming ideas into powerful narratives that resonate with audiences and help brands thrive in an ever-changing world.",
  body2: "We believe every brand carries a unique story waiting to be told, and it is our mission to bring that story to life with precision, creativity, and strategy. From cutting-edge digital campaigns and compelling visual content to data-driven marketing solutions, we merge innovation with insight to deliver results that truly matter.",
  body3: "With a dedicated team of creators, strategists, and visionaries, Praaroop Media is more than just an agency — we are your growth partner, helping you navigate the dynamic landscape of media and marketing with confidence.",
  visionH2: "Our Vision",
  visionBody: "To be a pioneer in the media and marketing world — redefining the way brands connect with people. We envision a future where creativity sparks transformation, where bold ideas inspire growth, and where every brand dares to dream bigger, achieve greater, and leave a legacy.",
  missionH2: "Our Mission",
  missionIntro: "Our mission is to empower businesses with impactful, creative, and strategic solutions that go beyond expectations. We aim to:",
  missionPoints: [
    "Drive measurable growth through innovative marketing strategies.",
    "Craft content that inspires action and builds meaningful connections.",
    "Amplify brand presence across platforms with storytelling that resonates.",
    "Deliver excellence with every campaign, leaving behind a lasting impression.",
  ],
  closing: "At Praaroop Media, your success is our story — and we are here to make it unforgettable.",
  image: "/IMG_1116.jpg",
};

// PAGE 3: 8 REAL CAMPAIGN POSTS WITH FULL HIGH-RES GALLERY IMAGES
export const CAMPAIGN_POSTS: CampaignPost[] = [
  {
    slug: "field-club-dandiya-2023-2025",
    title: "Field Club DANDIYA",
    category: "Event",
    date: "Jan 27, 2026",
    image: "/campaigns/field-club-dandiya-2023-2025_0.jpg",
    gallery: [
      "/campaigns/field-club-dandiya-2023-2025_0.jpg",
      "/campaigns/field-club-dandiya-2023-2025_3.jpg",
      "/campaigns/field-club-dandiya-2023-2025_4.jpg",
      "/campaigns/field-club-dandiya-2023-2025_10_Praaroop-Media-Profile-2_page-0044-300x169.jpg",
      "/campaigns/field-club-dandiya-2023-2025_16_Praaroop-Media-Profile-2_page-0045.jpg",
    ],
    description: "Field Club Dandiya 2023-2025 event branding, outdoor hoardings, and stage design executed by Praaroop Media in Udaipur.",
  },
  {
    slug: "makingudaipurproud",
    title: "#MakingUdaipurProud",
    category: "Event",
    date: "Jan 27, 2026",
    image: "/campaigns/makingudaipurproud_0.jpg",
    gallery: [
      "/campaigns/makingudaipurproud_0.jpg",
      "/campaigns/makingudaipurproud_3.jpg",
      "/campaigns/makingudaipurproud_4.jpg",
      "/campaigns/makingudaipurproud_5.jpg",
      "/campaigns/makingudaipurproud_6.jpg",
    ],
    description: "#MakingUdaipurProud civic pride movement and transit media campaign across major avenues in Rajasthan.",
  },
  {
    slug: "the-greatestest-denim-fest",
    title: "THE Greatest DENIM Fest",
    category: "Event",
    date: "Jan 27, 2026",
    image: "/campaigns/the-greatestest-denim-fest_0.jpg",
    gallery: [
      "/campaigns/the-greatestest-denim-fest_0.jpg",
      "/campaigns/the-greatestest-denim-fest_3.jpg",
      "/campaigns/the-greatestest-denim-fest_4.jpg",
      "/campaigns/the-greatestest-denim-fest_5.jpg",
    ],
    description: "The Greatest Denim Fest retail pop-up activation, mall kiosks, and promotional campaign in Udaipur.",
  },
  {
    slug: "mewar-tourism-cup",
    title: "Mewar Tourism Cup",
    category: "Event",
    date: "Jan 27, 2026",
    image: "/campaigns/mewar-tourism-cup_0.jpg",
    gallery: [
      "/campaigns/mewar-tourism-cup_0.jpg",
      "/campaigns/mewar-tourism-cup_3.jpg",
      "/campaigns/mewar-tourism-cup_4.jpg",
      "/campaigns/mewar-tourism-cup_5.jpg",
    ],
    description: "Mewar Tourism Cup cricket tournament branding, trophy unveil, and airport display advertising.",
  },
  {
    slug: "hbf",
    title: "HBF",
    category: "Event",
    date: "Jan 27, 2026",
    image: "/campaigns/hbf_0.jpg",
    gallery: [
      "/campaigns/hbf_0.jpg",
      "/campaigns/hbf_3.jpg",
      "/campaigns/hbf_4.jpg",
      "/campaigns/hbf_5.jpg",
      "/campaigns/hbf_6.jpg",
    ],
    description: "Heritage Business Forum executive conference branding, media coverage, and B2B engagement.",
  },
  {
    slug: "tiecon-2023-and-2025",
    title: "TIEcon 2023 and 2025",
    category: "Event",
    date: "Sep 15, 2025",
    image: "/campaigns/tiecon-2023-and-2025_0.jpg",
    gallery: [
      "/campaigns/tiecon-2023-and-2025_0.jpg",
      "/campaigns/tiecon-2023-and-2025_3.jpg",
      "/campaigns/tiecon-2023-and-2025_4.jpg",
      "/campaigns/tiecon-2023-and-2025_5.jpg",
      "/campaigns/tiecon-2023-and-2025_6.jpg",
    ],
    description: "TiEcon entrepreneurship summit stage design, digital registration campaign, and media coverage.",
  },
  {
    slug: "udaipur-tea-fest",
    title: "Udaipur Tea Fest",
    category: "Event",
    date: "Sep 5, 2025",
    image: "/campaigns/udaipur-tea-fest_0.jpg",
    gallery: [
      "/campaigns/udaipur-tea-fest_0.jpg",
      "/campaigns/udaipur-tea-fest_3.jpg",
      "/campaigns/udaipur-tea-fest_4.jpg",
      "/campaigns/udaipur-tea-fest_5.jpg",
    ],
    description: "Udaipur Tea Fest tasting stalls, influencer creator network tie-ups, and audio jingle broadcasts.",
  },
  {
    slug: "udaipur-winter-carnival",
    title: "Udaipur Winter Carnival",
    category: "Event",
    date: "Sep 5, 2025",
    image: "/campaigns/udaipur-winter-carnival_0.jpg",
    gallery: [
      "/campaigns/udaipur-winter-carnival_0.jpg",
      "/campaigns/udaipur-winter-carnival_3.jpg",
      "/campaigns/udaipur-winter-carnival_4.jpg",
      "/campaigns/udaipur-winter-carnival_5.jpg",
      "/campaigns/udaipur-winter-carnival_6.jpg",
    ],
    description: "Udaipur Winter Carnival arterial road hoardings, bus wraps, and mobile LED van marketing.",
  },
];

// FOOTER CTA CARDS (3 cards, exact order)
export const FOOTER_CTA_CARDS = [
  {
    title: "Get in touch with us",
    link: "/contact-us/",
  },
  {
    title: "Check our services",
    link: "/#services",
  },
  {
    title: "Visit our office",
    link: "https://g.co/kgs/fpcAL9V",
  },
];
