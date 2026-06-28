# China–Africa Business & Investment Summit 2026

**MEEI Program** | Bridging the Gap, Creating Success

> Official conference website for the China–Africa Business & Investment Summit 2026

---

## Quick Start

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
# Open http://localhost:3000

# Production build
npm run build

# Type check
npm run type-check

# Lint
npm run lint
```

---

## Project Structure

```
MEEI conference/
├── public/
│   ├── brand/
│   │   └── logo.svg          ← SVG placeholder logo (replace with logo.png)
│   └── images/               ← Place real images here
├── src/
│   ├── app/
│   │   ├── page.tsx          ← Homepage
│   │   ├── register/
│   │   │   └── page.tsx      ← Registration page
│   │   ├── privacy/
│   │   │   └── page.tsx      ← Privacy policy (placeholder)
│   │   ├── terms/
│   │   │   └── page.tsx      ← Terms and conditions (placeholder)
│   │   ├── layout.tsx        ← Root layout, fonts, metadata, JSON-LD
│   │   └── globals.css       ← CSS variables, base styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ValueStrip.tsx
│   │   │   ├── ImpactStrip.tsx
│   │   │   ├── HighlightsSection.tsx
│   │   │   ├── WhyAttendSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SpeakersSection.tsx
│   │   │   ├── RegistrationSection.tsx
│   │   │   ├── VenueSection.tsx
│   │   │   ├── WhoShouldAttendSection.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── CtaSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── registration/
│   │   │   └── RegistrationForm.tsx
│   │   └── ui/
│   │       ├── Container.tsx
│   │       ├── PrimaryButton.tsx
│   │       ├── SecondaryButton.tsx
│   │       ├── SectionEyebrow.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── MediaPlaceholder.tsx
│   │       ├── VideoPlaceholder.tsx
│   │       └── Toast.tsx
│   ├── data/
│   │   └── site-content.ts   ← ALL website content and configuration
│   └── types/
│       └── index.ts          ← TypeScript interfaces
├── .env.example
└── package.json
```

---

## Where to Update Content

**Everything is centralized in `src/data/site-content.ts`.**

### Update event information

Edit `siteConfig` in `src/data/site-content.ts`:
- `eventName`, `dates`, `venue`, `venueAddress`
- `theme`, `themeDescription`
- `metaTitle`, `metaDescription`

### Update ticket prices

Edit `ticketPackages` in `src/data/site-content.ts`:
```ts
{
  name: "Delegate Pass",
  priceLabel: "USD 1,200",  // ← change this
  ...
}
```

### Add confirmed speakers

Edit `speakerPlaceholders` in `src/data/site-content.ts`:
```ts
{
  id: "speaker-1",
  name: "Speaker Full Name",           // ← add name
  role: "Minister of Trade",           // ← add role
  organization: "Republic of Nigeria", // ← add org
  country: "Nigeria",
  image: "/images/speakers/name.jpg",  // ← add image path
  featured: true,
}
```
Place speaker images in `public/images/speakers/`.

### Replace image placeholders

All images use `MediaPlaceholder` components that render inline placeholders until real images are available.

| Placeholder | Replace file at |
|-------------|----------------|
| Hero image | `public/images/hero.jpg` |
| Summit trailer poster | `public/images/trailer-poster.jpg` |
| About / experience image | `public/images/about.jpg` |
| Venue photograph | `public/images/venue.jpg` |
| Speaker portraits | `public/images/speakers/[name].jpg` |
| Factory visit | `public/images/factory-visit.jpg` |
| Matchmaking | `public/images/matchmaking.jpg` |

After placing images, replace `<MediaPlaceholder>` with Next.js `<Image>` in the relevant component. Example:
```tsx
// Before
<MediaPlaceholder label="Venue photograph" aspectRatio="16/9" icon="building" />

// After
<Image src="/images/venue.jpg" alt="Vienna International Hotel, Guangzhou" ... />
```

**Note:** The logo is currently served as `public/brand/logo.svg`. To use the real PNG logo:
1. Copy `logo.png` to `public/brand/logo.png`
2. In `Header.tsx` and `Footer.tsx`, change `src="/brand/logo.svg"` to `src="/brand/logo.png"`

### Add the summit video

1. Set `NEXT_PUBLIC_SUMMIT_VIDEO_URL` in `.env.local`:
   ```env
   NEXT_PUBLIC_SUMMIT_VIDEO_URL=https://www.youtube.com/watch?v=YOUR_VIDEO_ID
   ```
2. The trailer in the hero section automatically switches from the placeholder to the embedded video.

### Connect the registration form

1. Set up your form endpoint (Google Sheets webhook, Formspree, Typeform, etc.)
2. Set `NEXT_PUBLIC_REGISTRATION_FORM_URL` in `.env.local`:
   ```env
   NEXT_PUBLIC_REGISTRATION_FORM_URL=https://your-form-endpoint.example.com
   ```
3. The form will POST JSON to that URL on submission.

### Add partner logos

Edit `partnerPlaceholders` in `src/data/site-content.ts`:
```ts
{ id: "partner-1", label: "African Development Bank", image: "/images/partners/adb.png" }
```
Place logos in `public/images/partners/`.
Then update `PartnersSection.tsx` to render `<Image>` when `partner.image` is not null.

### Add FAQ entries

Edit `faqs` in `src/data/site-content.ts`.

### Update social links

Social links are not yet configured. Add a `socialLinks` array to `siteConfig` in `site-content.ts` and wire them into `Footer.tsx`.

### Update contact information

Edit `contactDetails` in `src/data/site-content.ts`.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```env
NEXT_PUBLIC_REGISTRATION_FORM_URL=   # Form submission endpoint
NEXT_PUBLIC_SUMMIT_VIDEO_URL=        # YouTube or Vimeo URL
```

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [vercel.com](https://vercel.com).
3. Set environment variables in Vercel project settings.
4. Deploy. Vercel auto-detects Next.js.

---

## Brand Colors

| Variable | Value | Use |
|----------|-------|-----|
| `--green-primary` | `#2ca640` | Brand identity, icons |
| `--green-bright` | `#47c34f` | Labels, accents |
| `--red-primary` | `#d9232e` | CTA buttons |
| `--gold` | `#d2a74f` | Premium details |
| `--ivory` | `#f4f1e8` | High-emphasis text |
| `--text-primary` | `#f6f5ef` | Body text |
| `--text-secondary` | `#aeb9b0` | Secondary text |
