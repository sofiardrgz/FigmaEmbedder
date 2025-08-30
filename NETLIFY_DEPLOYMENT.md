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
- ✅ All individual dashboard routes fully supported

## Available Routes After Deployment

### Animated Demo Dashboard
- `/embed/demo` - Full animated demo with Safari frame
- `/embed/demo/no-frame` - Frameless animated demo

### Individual Dashboard Components
- `/embed/sales` - Sales dashboard with charts and pipeline
- `/embed/sales/no-frame` - Frameless sales dashboard
- `/embed/messages-only` - Messages dashboard with conversations
- `/embed/messages-only/no-frame` - Frameless messages dashboard
- `/embed/contacts` - Contacts with new contact notifications
- `/embed/contacts/no-frame` - Frameless contacts dashboard
- `/embed/calendar` - Calendar with appointment notifications
- `/embed/calendar/no-frame` - Frameless calendar dashboard
- `/embed/copilot` - AI Copilot with email creation preview
- `/embed/copilot/no-frame` - Frameless copilot dashboard
- `/embed/marketing` - Marketing analytics with social metrics
- `/embed/marketing/no-frame` - Frameless marketing dashboard
- `/embed/payments` - Payments & invoices dashboard
- `/embed/payments/no-frame` - Frameless payments dashboard

All routes are optimized for website embedding with 900px width and 100vh height.

## Note

This deployment is frontend-only. Your React dashboard will work perfectly, but any backend functionality (if used) would need separate hosting or serverless functions.