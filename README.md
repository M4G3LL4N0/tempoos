# TempoOS

The AI operating system for time allocation, focus protection, and adaptive weekly planning.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and fill in the values
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

TempoOS is optimized for Vercel deployment:

1. Push your changes to GitHub
2. Create a new Vercel project
3. Connect your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy!

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: (Optional) For analytics

## Tech Stack

- Next.js 14
- Tailwind CSS
- Supabase (coming soon)
- TypeScript
