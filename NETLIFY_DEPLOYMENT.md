# Netlify Deployment Guide

## Setup Steps

### 1. Push Code to GitHub
First, you need to get your code on GitHub:

1. **Add Git to your workspace** (if not already added):
   - Look for Tools panel on the left
   - Click "+" to add a new tool
   - Select "Git"

2. **Initialize and connect to GitHub**:
   - In the Git pane, click "Initialize repository"
   - Create a new repository on GitHub.com
   - Connect your Replit project to the GitHub repository
   - Commit and push your code

### 2. Connect to Netlify

1. **Go to Netlify.com** and sign up/login
2. **Click "Add new site"** > "Import an existing project"
3. **Choose GitHub** as your Git provider
4. **Select your repository** from the list
5. **Configure build settings**:
   - Build command: `vite build`
   - Publish directory: `dist/public`
   - Node version: `20.x`

### 3. Deploy

- Click "Deploy site"
- Netlify will automatically build and deploy your React dashboard
- You'll get a live URL like `https://amazing-site-name.netlify.app`

### 4. Custom Domain (Optional)

- In your Netlify dashboard, go to "Domain settings"
- Add your custom domain
- Netlify provides free SSL certificates

## Configuration Files

- `netlify.toml` - Contains deployment configuration
- The build outputs to `dist/public` which Netlify will serve

## Features Included

- ✅ Automatic deployments on Git push
- ✅ SPA routing support (all routes redirect to index.html)
- ✅ Asset caching optimization
- ✅ HTTPS enabled by default

## Note

This deployment is frontend-only. Your React dashboard will work perfectly, but any backend functionality (if used) would need separate hosting or serverless functions.