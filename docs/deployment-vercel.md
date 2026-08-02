# Vercel Deployment Plan

## Prerequisites
- Push the repository to GitHub
- Create a Vercel project from that repo
- Set environment variables:
  - NEXT_PUBLIC_APP_NAME=BuildFlow AI
  - GEMINI_API_KEY=your-key

## Deploy steps
1. Connect GitHub repository to Vercel
2. Import the project
3. Set the build command to `npm run build`
4. Deploy

## Notes
- The app is already structured as a Next.js 15 app for Vercel deployment.
- For production, move demo data to a real database and auth provider.
