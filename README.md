# Wells Fargo Clone - Vercel Deployment Guide

This project is a high-fidelity React replica of the Wells Fargo homepage, optimized for deployment on Vercel.

## 🚀 Quick Deployment

1. **Push to GitHub**: Push this code to a new GitHub repository.
2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/new).
   - Import your repository.
   - Vercel will automatically detect the Vite configuration.
3. **Configure Environment Variables** (Optional):
   - If you plan to use the Gemini API, add `GEMINI_API_KEY` in the Vercel project settings.
4. **Deploy**: Click "Deploy".

## 🛠 Project Configuration

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Routing**: Handled by `vercel.json` to support Single Page Application (SPA) behavior.

## 🔗 Redirection
All links and buttons are currently configured to redirect to:
`https://wellsfargopremiumchecking.vercel.app/`
