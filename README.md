# ProdReach

Website for **ProdReach** (Driving Demand. Building Brands.) and its product lines: corporate apparel, **StrideOn** school and corporate footwear, and accessories. The design follows the *ProdReach Corporate Apparel Catalogue, 2026 Edition*: same fonts, colour palette, page layouts and content.

Built with Angular 22: standalone components, signals, lazy-loaded routes.

## Run locally

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build → dist/prodreach/browser
```

## Pages

| Route            | Content (catalogue pages)                                  |
| ---------------- | ---------------------------------------------------------- |
| `/`              | Cover, categories, about, product lines, collection, process |
| `/about`         | About Us (p2–3), what we do, process                       |
| `/apparel`       | Mars 200, Mars 220, Polo 180, Cotton, Polycotton (p4–13)   |
| `/strideon`      | Bolt, Aero, Prime, Core (p14–17)                           |
| `/accessories`   | Bags, socks, caps with material codes (p18)                |
| `/customization` | Colourways, technical drawing, process (p19–22)            |
| `/contact`       | Enquiry form (opens email) + WhatsApp                      |

## Editing content

All text, specs, codes and image paths are in **`src/app/data/catalog.ts`**.

Design tokens (colours, fonts) are at the top of **`src/styles.scss`**.

## Replacing images

The current images are cropped from the catalogue PDF, so they are lower resolution than the original photos. To upgrade, drop a high-res file into `public/images/…` **with the same file name** and nothing else needs to change.

- `public/images/apparel/`: shirt photo pages on a black background
- `public/images/strideon/`: `*-hero` lifestyle photos, plus `*-1..4` variant cut-outs on a transparent background
- `public/images/accessories/`: `bag-0101` … `cap-0314`, transparent cut-outs
- `public/images/brand/`: showroom, collection, cover, customization board, technical drawing, StrideOn logo

## Contact form

There's no backend yet. Submitting opens the visitor's email app, pre-filled to `info@prodreach.co.in`. To collect submissions directly, replace `send()` in `src/app/pages/contact/contact.ts` with a form service such as Formspree, or with your own API.
