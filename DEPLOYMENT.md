# Deployment Guide

## GitHub
1. Create a GitHub repository named buildflow-ai.
2. Run:
   ```bash
   git remote set-url origin https://github.com/<your-username>/buildflow-ai.git
   git push -u origin main
   ```

## Vercel
1. Install Vercel CLI if needed.
2. Run:
   ```bash
   vercel
   ```
3. Follow the prompts to link the repository.

## Firebase Hosting
1. Install Firebase CLI if needed.
2. Run:
   ```bash
   firebase login
   firebase init hosting
   firebase deploy
   ```

## Notes
- The app is a Next.js project and is compatible with Vercel deployment.
- Firebase hosting is scaffolded with the static export approach in this repository.
