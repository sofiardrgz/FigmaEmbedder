# Smart Squatch Netlify Deployment Guide - Updated

## Ready-to-Deploy Build
✅ **Build Status**: Successfully compiled with all 14 dashboard routes
✅ **File Size**: 850.93 kB (gzipped: 239.43 kB)
✅ **Components**: All individual embeddable dashboards included

## Quick Deploy Steps

### 1. GitHub Setup
1. Add Git tool to your Replit workspace
2. Initialize repository and connect to GitHub
3. Push all code to your GitHub repository

### 2. Netlify Configuration
1. Connect GitHub repository to Netlify
2. Use these exact build settings:
   - **Build command**: `vite build`
   - **Publish directory**: `dist/public`
   - **Node version**: `20.x`

### 3. Available Embed Routes

#### Animated Demo (Auto-cycling through all features)
- `https://yoursite.netlify.app/embed/demo`
- `https://yoursite.netlify.app/embed/demo/no-frame`

#### Individual Static Dashboards
- **Sales**: `/embed/sales` | `/embed/sales/no-frame`
- **Messages**: `/embed/messages-only` | `/embed/messages-only/no-frame`
- **Contacts**: `/embed/contacts` | `/embed/contacts/no-frame`
- **Calendar**: `/embed/calendar` | `/embed/calendar/no-frame`
- **AI Copilot**: `/embed/copilot` | `/embed/copilot/no-frame`
- **Marketing**: `/embed/marketing` | `/embed/marketing/no-frame`
- **Payments**: `/embed/payments` | `/embed/payments/no-frame`

### Compact Card Components (220px × 300px)
- **Sales Card**: `/card/sales`
- **Messages Card**: `/card/messages`
- **Contacts Card**: `/card/contacts`
- **Calendar Card**: `/card/calendar`
- **AI Copilot Card**: `/card/copilot`
- **Marketing Card**: `/card/marketing`
- **Payments Card**: `/card/payments`

## Embedding Instructions

### For Website Integration
```html
<!-- Animated Demo with Safari Frame -->
<iframe src="https://yoursite.netlify.app/embed/demo" 
        width="900" height="600" 
        frameborder="0">
</iframe>

<!-- Individual Dashboard (Frameless) -->
<iframe src="https://yoursite.netlify.app/embed/sales/no-frame" 
        width="900" height="600" 
        frameborder="0">
</iframe>
```

### Responsive Embedding
```html
<div style="position: relative; width: 100%; max-width: 900px; height: 600px;">
  <iframe src="https://yoursite.netlify.app/embed/demo/no-frame" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0">
  </iframe>
</div>
```

## Build Optimizations Applied
- ✅ All components tree-shaken and optimized
- ✅ CSS bundled and minified (70.65 kB → 12.49 kB gzipped)
- ✅ JavaScript optimized (850.93 kB → 239.43 kB gzipped)
- ✅ SPA routing configured for all embed routes
- ✅ Smart Squatch branding and green theme preserved

## Deploy Now
Your Smart Squatch dashboard is ready for immediate Netlify deployment with all 7 individual embeddable components plus the animated demo.