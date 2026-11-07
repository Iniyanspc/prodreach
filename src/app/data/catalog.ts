/**
 * All site content, transcribed from "ProdReach Corporate Catalogue — 2026 Edition".
 * Edit text, specs or image paths here; pages read from this file.
 * Images live in /public/images and can be swapped for high-res originals using the same file names.
 */

export const company = {
  name: 'ProdReach',
  tagline: 'Driving Demand. Building Brands.',
  website: 'www.prodreach.co.in',
  email: 'info@prodreach.co.in',
  phone: '9791836130',
  phoneIntl: '+919791836130',
  whatsapp: 'https://wa.me/919791836130',
};

export type IconName =
  | 'polo' | 'pants' | 'shoe' | 'sock' | 'bag' | 'badge' | 'box'
  | 'feather' | 'cushion' | 'mesh' | 'shield' | 'sole' | 'shock' | 'pen'
  | 'shirt-frame' | 'document' | 'ruler' | 'gear' | 'package' | 'truck'
  | 'cap' | 'search' | 'factory' | 'chart' | 'support' | 'layers';

export const categories: { label: string; icon: IconName; link: string }[] = [
  { label: 'Corporate Polos', icon: 'polo', link: '/apparel' },
  { label: 'Track Pants', icon: 'pants', link: '/customization' },
  { label: 'Corporate Shoes', icon: 'shoe', link: '/strideon' },
  { label: 'Corporate Socks', icon: 'sock', link: '/accessories' },
  { label: 'Backpacks', icon: 'bag', link: '/accessories' },
  { label: 'Custom Branding', icon: 'badge', link: '/customization' },
  { label: 'Bulk Manufacturing', icon: 'box', link: '/contact' },
];

export const about = {
  lead: 'At ProdReach, we bridge demand and supply with purpose, precision, and performance.',
  paragraphs: [
    "We're not just a sourcing partner — we're a trusted ally driven by real connections, working directly with manufacturers to ensure every demand meets the right supply with uncompromised quality. Born from the vision to simplify industrial connections, ProdReach operates as a strategic bridge between brands and makers.",
    "Our process begins with in-depth market research to identify demand within each sector. That insight transforms into opportunity — matched to the most capable private and public sector manufacturers across India, who already power some of the nation's biggest brands. From customized design, color, and style to visual CAD support, every product we deliver is backed by experts who blend creativity with precision engineering.",
    "We tailor every solution to fit the industry's needs — because for us, customer satisfaction isn't a goal. It's a standard.",
  ],
  enterprise:
    'Beyond product supply, ProdReach extends its expertise into enterprise solutions — from ERP systems and sales tracking to manual-to-digital upgrades and end-to-end service pipelines.',
  ecosystem:
    "We ensure businesses don't just get products — they gain a seamless, scalable, and tech-enabled supply ecosystem. At ProdReach, we take responsibility beyond delivery. From extra stock management to after-supply support, we make sure every partnership stays flexible, reliable, and built to last.",
  promise:
    'Our promise is simple — Quality with no compromise, service with purpose, and a commitment that every demand finds its perfect match.',
};

export const pillars: { title: string; text: string; icon: IconName }[] = [
  { title: 'Market Research', text: 'In-depth research identifies real demand within each sector before a single product is made.', icon: 'search' },
  { title: 'Direct Manufacturing', text: "Matched to capable private and public sector manufacturers across India who already power the nation's biggest brands.", icon: 'factory' },
  { title: 'Custom Design & CAD', text: 'Customized design, colour and style with visual CAD support from experts in precision engineering.', icon: 'pen' },
  { title: 'Enterprise Solutions', text: 'ERP systems, sales tracking, manual-to-digital upgrades and end-to-end service pipelines.', icon: 'chart' },
  { title: 'After-Supply Support', text: 'Extra stock management and after-supply support keep every partnership flexible and reliable.', icon: 'support' },
];

/* ---------------- Product lines ---------------- */

export const productLines = [
  {
    slug: 'apparel',
    name: 'Corporate Apparel',
    title: 'Apparel',
    blurb: 'Performance polos and t-shirts in 180–220 GSM fabrics, engineered for uniforms that stay sharp wash after wash.',
    image: 'images/apparel/mars-220.webp',
    count: '5 styles',
  },
  {
    slug: 'strideon',
    name: 'StrideOn Footwear',
    title: 'StrideOn',
    blurb: 'Our footwear brand built exclusively for schools and corporates — four engineered sole platforms, fully customizable colours.',
    image: 'images/strideon/aero-hero.webp',
    count: '4 models',
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    title: 'Accessories',
    blurb: 'Backpacks, socks and caps in nylon, polyester, PU, cotton, lycra and twill — completing the uniform set.',
    image: 'images/accessories/bag-0106.webp',
    count: '36 codes',
  },
];

/* ---------------- Apparel ---------------- */

export interface Garment {
  slug: string;
  name: string;
  image: string;
  paragraphs: string[];
  fabric: string;
  features: string[];
  fit: string;
  idealFor: string[];
}

export const garments: Garment[] = [
  {
    slug: 'mars-200',
    name: 'Mars 200',
    image: 'images/apparel/mars-200.webp',
    paragraphs: [
      "Mars 200 T-Shirt is crafted from high-performance 200 GSM fabric, offering the perfect balance of durability, breathability, and comfort. Designed for professional and corporate environments, the fabric retains its shape and color even after repeated washing, ensuring a long-lasting and polished appearance.",
      "The soft-touch polyester or cotton-poly blend provides superior moisture management, keeping the wearer cool, dry, and comfortable throughout active work hours. Its reinforced seams, ribbed collar, and fade-resistant dye quality ensure lasting performance and consistent presentation, making the Mars 200 a dependable uniform essential for both professionals and teams.",
    ],
    fabric: '200 GSM Performance Fabric',
    features: ['Moisture Management', 'Fade-Resistant', 'Reinforced Seams'],
    fit: 'Regular Fit',
    idealFor: ['Corporate', 'Professionals', 'Teams'],
  },
  {
    slug: 'mars-220',
    name: 'Mars 220',
    image: 'images/apparel/mars-220.webp',
    paragraphs: [
      'Mars 220 T-Shirt represents the next level in uniform apparel, built from reinforced 220 GSM performance fabric that offers unmatched strength, structure, and comfort. Its dense yet breathable knit resists pilling and stretching, ensuring a crisp look even after extended wear.',
      "Engineered for active school environments, the Mars 220 combines moisture-responsive fibers with a smooth interior weave to deliver lasting freshness throughout the day. The collar and sleeves are reinforced to maintain shape and alignment, while the fabric's high color retention keeps every shade vibrant and uniform-ready. Designed for durability, neat appearance, and all-day comfort, Mars 220 is the perfect choice where premium quality meets daily reliability.",
    ],
    fabric: '220 GSM Performance Knit',
    features: ['Moisture-Responsive', 'Durable', 'Color Retention'],
    fit: 'Regular Fit',
    idealFor: ['Schools', 'Institutions', 'Uniform Programs'],
  },
  {
    slug: 'polo-180',
    name: 'Polo 180',
    image: 'images/apparel/polo-180.webp',
    paragraphs: [
      'Polo 180 T-Shirt delivers a smart, professional look in a lightweight 180 GSM cotton-rich fabric, crafted for comfort and style in warm climates. The fine pique knit ensures enhanced breathability while maintaining a polished finish ideal for both indoor wear and field use.',
      'Its flat knit collar and reinforced placket ensure the collar retains structure even after repeated washing, while the soft-hand feel fabric provides lasting comfort through long school hours. The Polo 180 offers a versatile uniform solution that merges style and refined uniform appearance, making it a reliable option for institutions seeking a breathable yet durable polo shirt.',
    ],
    fabric: '180 GSM Cotton Rich Pique',
    features: ['Breathable', 'Soft Hand Feel', 'Durable'],
    fit: 'Regular Fit',
    idealFor: ['Schools', 'Colleges', 'Daily Uniforms'],
  },
  {
    slug: 'cotton',
    name: 'Cotton',
    image: 'images/apparel/cotton.webp',
    paragraphs: [
      'Cotton T-Shirt is crafted from pure combed cotton yarn, offering exceptional softness, breathability, and skin comfort for both casual and active wear. Its natural fiber composition promotes superior air flow and moisture absorption, keeping the wearer cool and dry even in warm weather.',
      'Each garment undergoes bio-washing and pre-shrinking processes, ensuring a smooth finish, minimal shrinkage, and consistent sizing even after multiple washes. The cotton fabric retains its color vibrancy and structure while being gentle on skin, making it perfect for prolonged wear. With its blend of comfort, durability, and visual appeal, the Cotton T-Shirt stands out as a dependable choice for daily wear, corporate uniforms and retail branding needs.',
    ],
    fabric: '100% Combed Cotton',
    features: ['Soft & Breathable', 'Bio-Washed', 'Pre-Shrunk'],
    fit: 'Regular Fit',
    idealFor: ['Corporate Wear', 'Events', 'Daily Wear', 'Branding'],
  },
  {
    slug: 'polycotton',
    name: 'Polycotton',
    image: 'images/apparel/polycotton.webp',
    paragraphs: [
      "Polycotton T-Shirt blends the softness of natural cotton with the resilience of polyester, delivering a garment that's both comfortable to wear and easy to maintain. This hybrid fabric construction provides excellent shape retention, reduced wrinkling, and superior wash durability, making it ideal for daily uniform use.",
      'Its outer polyester layer enhances color brightness and quick drying, while the inner cotton yarns provide a gentle touch against the skin. The result is a t-shirt that stays fresh, breathable, and presentable even after long hours of wear. Designed to combine comfort, performance, and longevity, the Polycotton T-Shirt is a smart institutional choice for schools and organizations seeking durable, low-maintenance, and professional-grade uniform solutions.',
    ],
    fabric: 'Polycotton Blend',
    features: ['Soft & Comfortable', 'Durable', 'Easy Care'],
    fit: 'Regular Fit',
    idealFor: ['Schools', 'Institutions', 'Corporate', 'Events'],
  },
];

/* ---------------- StrideOn ---------------- */

export interface ShoeVariant {
  image: string;
  lines: [string, string][];
}

export interface ShoeModel {
  slug: string;
  name: string;
  tagline: string;
  titleTone: 'steel' | 'prime';
  hero: string;
  variants: ShoeVariant[];
  specs: [string, string][];
  material: string;
  features: { title: string; text: string; icon: IconName }[];
}

const v = (image: string, ...lines: [string, string][]): ShoeVariant => ({ image: `images/strideon/${image}.webp`, lines });

export const strideOn = {
  intro:
    'StrideOn is the ProdReach footwear brand created exclusively for schools and corporate businesses. Every model is engineered around a purpose-built sole platform — from high-density PVC to triple-compound Phylon + TPU + IPR — and every colour can be customized to your uniform standards.',
  highlights: ['Non-marking soles', 'Junior & senior size ranges', 'Velcro options for juniors', 'Colours matched to your uniform'],
};

export const shoes: ShoeModel[] = [
  {
    slug: 'bolt',
    name: 'Bolt',
    tagline: '', // the catalogue gives Bolt no tagline
    titleTone: 'steel',
    hero: 'images/strideon/bolt-hero.webp',
    variants: [
      v('bolt-1', ['Model Name', 'Bolt 101'], ['Size', '6–11']),
      v('bolt-2', ['Model Name', 'Bolt 201 – Dynamic'], ['Size', '6–11']),
      v('bolt-3', ['Model Name', 'Bolt 301 – Urban'], ['Size', '6–11']),
    ],
    specs: [
      ['Outsole', 'High-Density PVC (Polyvinyl Chloride)'],
      ['Upper', 'Mesh / Knitted / Synthetic / Full Synthetic'],
      ['Construction', 'Cemented + Side-Stitched / Full Strobel'],
      ['Lining', 'Soft Padded Mesh with Breathable Inner Layer'],
      ['Insole', 'Cushion Foam with Ergonomic Arch Support'],
      ['Closure', 'Standard Lace-up'],
      ['Sole Type', 'Non-Marking, Slip-Resistant, Flexible'],
      ['Sizes', 'Junior / Senior / School Range'],
      ['Color Options', 'Customizable as per school requirements'],
    ],
    material:
      'Crafted with premium engineered PVC outsole and versatile upper materials, the shoe ensures exceptional durability, flexibility, and comfort. Designed for everyday school wear, it delivers long-lasting performance with minimal maintenance.',
    features: [],
  },
  {
    slug: 'aero',
    name: 'Aero',
    tagline: 'Light. Fast. Built for Every Step.',
    titleTone: 'steel',
    hero: 'images/strideon/aero-hero.webp',
    variants: [1, 2, 3, 4].map((i) => v(`aero-${i}`, ['Material Type', 'Mesh + Synthetic'], ['Sole', 'Phylon + IPR'])),
    specs: [
      ['Outsole', 'Phylon + IPR Dual Compound Sole – Lightweight & Shock Absorbent'],
      ['Midsole', 'Compression-Molded Phylon for Enhanced Cushioning & Energy Return'],
      ['Upper', 'Mesh / Mesh + Synthetic (Customizable Configurations Available)'],
      ['Construction', 'Cemented / Strobel – Ultra-Light and Flexible'],
      ['Lining', 'Soft Padded Mesh with Moisture Wicking Inner Layer'],
      ['Insole', 'High-Rebound Cushion Foam with Anatomical Arch Support'],
      ['Closure', 'Standard Lace-Up'],
      ['Sole Type', 'Non-Marking, Anti-Slip, Dual Grip Zones for Multi-Surface Use'],
      ['Sizes', 'Junior / Senior School Range'],
      ['Color Options', 'Customizable as per School / Institutional Requirements'],
    ],
    material:
      'Developed with a dual compound Phylon + IPR sole, the Aero model delivers enhanced comfort, superior grip, and impact absorption. The mesh upper ensures breathability and flexibility, while the cushioned insole and anatomical arch support provide all-day comfort. Designed for active students, Aero is the perfect blend of performance, durability, and style.',
    features: [
      { title: 'Lightweight', text: 'Ultra-light construction for effortless movement.', icon: 'feather' },
      { title: 'Cushioned Comfort', text: 'High-rebound foam insole reduces impact and foot fatigue.', icon: 'cushion' },
      { title: 'Breathable Mesh', text: 'Advanced mesh upper enhances airflow and keeps feet cool.', icon: 'mesh' },
      { title: 'Durable & Flexible', text: 'Strong build with flexibility for active performance.', icon: 'shield' },
      { title: 'Anti-Slip Outsole', text: 'Dual grip sole ensures excellent traction on multiple surfaces.', icon: 'sole' },
    ],
  },
  {
    slug: 'prime',
    name: 'Prime',
    tagline: 'Light. Durable. Built to Perform.',
    titleTone: 'prime',
    hero: 'images/strideon/prime-hero.webp',
    variants: [
      v('prime-1', ['Material Type', 'Mesh + Synthetic'], ['Sole', 'Polyurethane']),
      v('prime-2', ['Material Type', 'Full Synthetic'], ['Sole', 'Polyurethane']),
      v('prime-3', ['Material Type', 'Full Synthetic'], ['Sole', 'Polyurethane']),
      v('prime-4', ['Material Type', 'Mesh + Synthetic'], ['Sole', 'Polyurethane']),
    ],
    specs: [
      ['Outsole', '100% PU Sole – Lightweight, Shock Absorbent & High Traction'],
      ['Midsole', 'PU Cushion Base with Integrated Stability Support'],
      ['Upper', 'Mesh / Mesh + Synthetic / Full Synthetic (Custom Configurations Available)'],
      ['Construction', 'Cemented – Lightweight, Flexible & Long-Lasting'],
      ['Lining', 'Soft Padded Breathable Mesh with Antibacterial Inner Fabric'],
      ['Insole', 'Memory Foam + Arch Support for Enhanced Comfort'],
      ['Closure', 'Standard Lace-Up (Velcro Options Available for Juniors)'],
      ['Sole Type', 'Non-Marking, Slip-Resistant, Single-Density PU Sole for Maximum Grip'],
      ['Sizes', 'Junior / Senior School Range'],
      ['Color Options', 'Fully Customizable to Institutional and School Uniform Standards'],
    ],
    material:
      'The ProdReach PU Sole School Shoe is engineered with a premium single-density Polyurethane (PU) sole designed for everyday school wear. PU provides exceptional shock absorption, lightweight comfort, and superior flexibility, ensuring smooth movement throughout the day. Its breathable mesh or synthetic upper enhances ventilation to keep feet cool and dry, while reinforced lining and foam padding offer lasting comfort. The non-marking, slip-resistant surface ensures reliable traction across various indoor and outdoor surfaces, making it a dependable choice for long-lasting school footwear.',
    features: [
      { title: 'Lightweight', text: 'Lightweight design reduces fatigue for all-day comfort.', icon: 'feather' },
      { title: 'Cushioned Comfort', text: 'Memory foam insole & PU cushion base for superior comfort.', icon: 'cushion' },
      { title: 'Breathable Mesh', text: 'Breathable upper enhances airflow and keeps feet fresh.', icon: 'mesh' },
      { title: 'Durable & Flexible', text: 'Strong build with flexible materials for active performance.', icon: 'shield' },
      { title: 'Non-Marking Sole', text: 'PU sole provides high traction without marking any surface.', icon: 'sole' },
    ],
  },
  {
    slug: 'core',
    name: 'Core',
    tagline: 'Built for Performance. Made for Every Step.',
    titleTone: 'prime',
    hero: 'images/strideon/core-hero.webp',
    variants: [
      v('core-1', ['Material Type', 'Full Mesh'], ['Sole', 'Phylon + IPR + TPU']),
      v('core-2', ['Material Type', 'Full Mesh'], ['Sole', 'Phylon + IPR + TPU']),
      v('core-3', ['Material Type', 'Mesh + Synthetic'], ['Sole', 'Phylon + IPR + TPU']),
      v('core-4', ['Material Type', 'Full Mesh'], ['Insole', 'Phylon'], ['Outsole', 'TPU + IPR']),
    ],
    specs: [
      ['Outsole', 'Triple Compound Sole – Phylon + TPU + IPR'],
      ['Midsole', 'Phylon Cushion Layer for Lightweight Shock Absorption'],
      ['Stability Plate', 'TPU Shank for Enhanced Motion Support'],
      ['Outsole Base', 'IPR Grip Layer for Traction and Durability'],
      ['Upper', 'Upgraded Air-Mesh / Mesh + Synthetic Overlay'],
      ['Construction', 'Cemented / Strobel – Flexible and Strong Build'],
      ['Lining', 'Soft Padded Mesh with Moisture-Wicking Inner Fabric'],
      ['Insole', 'Memory Foam with Anatomical Arch Support'],
      ['Closure', 'Standard Lace-Up System (Velcro Option for Junior Range)'],
      ['Sole Type', 'Non-Marking, Anti-Slip, Multi-Layer Sole for Superior Stability'],
      ['Sizes', 'Junior / Senior School Range'],
      ['Color Options', 'Fully Customizable as per School and Institutional Standards'],
    ],
    material:
      'The ProdReach Phylon + TPU + IPR School Shoe is the pinnacle of comfort and performance engineering in school footwear. Its Phylon midsole delivers feather-light cushioning and flexibility, while the TPU stability layer reinforces the arch and midfoot for balance during movement. The IPR outsole ensures superior traction, durability, and slip resistance. Combined with a breathable mesh upper and memory foam insole, this shoe is crafted for long-lasting comfort and active school environments.',
    features: [
      { title: 'Lightweight', text: 'Phylon midsole reduces weight for effortless movement.', icon: 'feather' },
      { title: 'Cushioned Comfort', text: 'Memory foam insole & soft padding provide all-day comfort.', icon: 'cushion' },
      { title: 'Shock Absorption', text: 'Cushion layer absorbs impact and protects joints.', icon: 'shock' },
      { title: 'Durable & Stable', text: 'TPU shank and IPR sole ensure stability and long life.', icon: 'shield' },
      { title: 'Anti-Slip Grip', text: 'Multi-layer outsole offers excellent grip on all surfaces.', icon: 'sole' },
      { title: 'Customizable', text: 'Colors and features customizable as per school requirements.', icon: 'pen' },
    ],
  },
];

/* ---------------- Accessories ---------------- */

export interface Accessory { code: string; material: string; image: string }

const acc = (prefix: string, start: number, materials: string[]): Accessory[] =>
  materials.map((material, i) => {
    const code = String(start + i).padStart(4, '0');
    return { code, material, image: `images/accessories/${prefix}-${code}.webp` };
  });

export const accessoryGroups = [
  {
    slug: 'bags',
    title: 'Bags',
    items: acc('bag', 101, ['Nylon', 'Polyester', 'Nylon', 'Nylon', 'Polyester', 'PU', 'PU', 'Nylon', 'PU', 'PU']),
  },
  {
    slug: 'socks',
    title: 'Socks',
    items: acc('sock', 201, ['Cotton', 'Cotton', 'Cotton', 'Cotton', 'Polycotton', 'Polycotton', 'Polyester', 'Polyester', 'Lycra', 'Lycra', 'Nylon', 'Nylon']),
  },
  {
    slug: 'caps',
    title: 'Caps',
    items: acc('cap', 301, ['Cotton', 'Cotton', 'Twill', 'Cotton', 'Polyester', 'Cotton', 'Cotton', 'Twill', 'Mesh', 'Cotton', 'Mesh', 'Twill', 'Polyester', 'Nylon']),
  },
];

/* ---------------- Customization ---------------- */

export const customizationIntro =
  'Choose from a wide range of premium color combinations and customize your corporate uniforms to match your brand identity. Our apparel can be tailored with custom logos, embroidery, printing, trims, and accessories for a professional and consistent look across your workforce.';

export const colourways = [
  { name: 'Navy Blue', code: 'NB-01', hex: '#213246' },
  { name: 'Deep Navy', code: 'DN-02', hex: '#172e46' },
  { name: 'Royal Navy', code: 'RN-03', hex: '#3a444f' },
  { name: 'Black', code: 'BK-05', hex: '#242424' },
  { name: 'Charcoal', code: 'CH-06', hex: '#323232' },
  { name: 'Burgundy', code: 'BG-07', hex: '#561d2e' },
  { name: 'Maroon', code: 'MN-08', hex: '#4d1e2a' },
];

export const uniformSet = ['Cap', 'Shirt', 'Pant', 'Socks', 'Shoes'];

/* ---------------- Process ---------------- */

export const processSteps: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Product Designation & Selection',
    text: "Products come in a wide selection of specifications, styles, models, and material choices to match your brand's purpose. Submit a sample for us to develop, or choose from the designs in our showcase.",
    icon: 'shirt-frame',
  },
  {
    title: 'Enlistment Confirmation & Purchasing Order',
    text: 'The works order is raised once the sample, quantity and mechanisms are confirmed. An approved PO is issued with product and price details, standards, timeline and key terms.',
    icon: 'document',
  },
  {
    title: 'Measurement & Size Mapping',
    text: 'Individuals are measured using standard or client-specific size charts for a total fit and consistency. This step is critical to delivering uniformity across all distribution.',
    icon: 'ruler',
  },
  {
    title: 'Manufacturing & Quality Control',
    text: 'Premium components and top-quality materials are taken from design to manufacturing at international scale, with multi-level QC after each stage and at the final stage of production.',
    icon: 'gear',
  },
  {
    title: 'Packaging & Branding',
    text: 'Products are branded to your confirmed brand guidelines and packed in durable, sustainable packaging that ensures protection, presentation, and easy handling and distribution.',
    icon: 'package',
  },
  {
    title: 'Delivery & Supply Coordination',
    text: 'Orders are prepared on schedule and delivered with proper routing and real-time updates — smooth, reliable, on-time delivery that meets your operational needs or rollout timelines.',
    icon: 'truck',
  },
];
