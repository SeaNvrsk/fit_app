# BBH — The House of Champions

Premium marketing site for BBH. Spanish only in this phase. Content lives in `content/*.ts` so a later Payload CMS can map 1:1.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4

## Run

Requires Node 20.9+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replace before launch

Edit `content/site.ts`:

- city, address, email, phone
- WhatsApp and Instagram URLs
- coach names in `content/coaches.ts`
- events in `content/events.ts`

Drop real photos into `public/media/` and set the `image` fields. Empty paths keep cinematic frames.

## Analytics

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

Tracked events: `train_with_us`, `reservar`, `whatsapp`, `contact_submit`, `nav_horario`, `nav_coaches`.

## Out of scope (next phase)

- Payload CMS
- EN / RU
- AWS deploy
