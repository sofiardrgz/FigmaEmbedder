# Latest Dashboard Embedding Guide (2025)

Your dashboards now feature **ambient gradient effects** and the latest **dark grey color scheme** (#2E2E2E). Here are the updated embed codes.

## 🚀 What's New (Latest Version)
- ✨ **Ambient Background Gradients**: Subtle animated effects for premium feel
- 🎨 **Dark Grey Theme**: Professional #2E2E2E with #383838 accents
- ⚡ **Faster Animations**: 4-second intervals, 0.6s transitions
- 🚫 **Non-Interactive**: All clickable elements removed for safe embedding
- 📱 **Scroll Fade Effects**: Automatic blur fade on scroll

## 📊 Sales Dashboard Embeds

### Basic Sales Dashboard (Recommended)
```html
<iframe 
  src="https://your-replit-url.replit.app/dashboard?showSafariFrame=false&showSidebar=true&v=2025" 
  width="100%" 
  height="800" 
  frameborder="0"
  style="border-radius: 10px; box-shadow: 0 8px 32px rgba(46,46,46,0.3); background: #2E2E2E;">
</iframe>
```

### Clean Sales Dashboard (No Sidebar)
```html
<iframe 
  src="https://your-replit-url.replit.app/dashboard?showSafariFrame=false&showSidebar=false&v=2025" 
  width="100%" 
  height="800" 
  frameborder="0"
  style="border-radius: 10px; box-shadow: 0 8px 32px rgba(46,46,46,0.3); background: #2E2E2E;">
</iframe>
```

### Sales Dashboard with Safari Frame
```html
<iframe 
  src="https://your-replit-url.replit.app/dashboard?showSafariFrame=true&showSidebar=true&v=2025" 
  width="1200" 
  height="900" 
  frameborder="0"
  style="border-radius: 10px; box-shadow: 0 12px 48px rgba(46,46,46,0.4); background: #2E2E2E;">
</iframe>
```

## 💬 Conversations Dashboard Embeds

### Basic Conversations Dashboard (Recommended)
```html
<iframe 
  src="https://your-replit-url.replit.app/messages?showSafariFrame=false&showSidebar=false&v=2025" 
  width="100%" 
  height="800" 
  frameborder="0"
  style="border-radius: 10px; box-shadow: 0 8px 32px rgba(46,46,46,0.3); background: #2E2E2E;">
</iframe>
```

### Conversations Dashboard with Safari Frame
```html
<iframe 
  src="https://your-replit-url.replit.app/messages?showSafariFrame=true&showSidebar=false&v=2025" 
  width="1200" 
  height="900" 
  frameborder="0"
  style="border-radius: 10px; box-shadow: 0 12px 48px rgba(46,46,46,0.4); background: #2E2E2E;">
</iframe>
```

## 🎨 Premium Dark Containers

### Elegant Container with Ambient Effects
```html
<div style="
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 24px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2E2E2E 50%, #1a1a1a 100%);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
">
  <iframe 
    src="https://your-replit-url.replit.app/dashboard?showSafariFrame=false&showSidebar=true&v=2025" 
    width="100%" 
    height="800" 
    frameborder="0"
    style="border-radius: 12px; box-shadow: inset 0 2px 8px rgba(46,46,46,0.2);">
  </iframe>
</div>
```

### Professional Dark Wrapper
```html
<div style="
  background: #1a1a1a;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #383838;
  box-shadow: 0 16px 64px rgba(0,0,0,0.5);
">
  <iframe 
    src="https://your-replit-url.replit.app/messages?showSafariFrame=false&showSidebar=false&v=2025" 
    width="100%" 
    height="800" 
    frameborder="0"
    style="border-radius: 10px; border: 1px solid #2E2E2E;">
  </iframe>
</div>
```

## 📱 Mobile-First Responsive

### Responsive Dark Theme
```html
<div style="
  position: relative; 
  width: 100%; 
  height: 0; 
  padding-bottom: 56.25%;
  background: #2E2E2E;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(46,46,46,0.3);
">
  <iframe 
    src="https://your-replit-url.replit.app/dashboard?showSafariFrame=false&showSidebar=false&v=2025" 
    style="
      position: absolute; 
      top: 0; 
      left: 0; 
      width: 100%; 
      height: 100%; 
      border: none;
    "
    frameborder="0">
  </iframe>
</div>
```

## ⚙️ URL Parameters

### Available Options
- `showSafariFrame=true/false` - Safari browser chrome
- `showSidebar=true/false` - Sidebar navigation (sales only)
- `v=2025` - **IMPORTANT**: Cache-busting for latest version

### Most Popular Configurations
- **Sales Dashboard**: `?showSafariFrame=false&showSidebar=true&v=2025`
- **Conversations**: `?showSafariFrame=false&showSidebar=false&v=2025`
- **Demo Mode**: `?showSafariFrame=true&showSidebar=true&v=2025`

## 🎯 Quick Copy (Most Used)

**Sales Dashboard (Most Popular):**
```html
<iframe src="https://your-replit-url.replit.app/dashboard?showSafariFrame=false&showSidebar=true&v=2025" width="100%" height="800" frameborder="0" style="border-radius: 10px; box-shadow: 0 8px 32px rgba(46,46,46,0.3);"></iframe>
```

**Conversations Dashboard:**
```html
<iframe src="https://your-replit-url.replit.app/messages?showSafariFrame=false&showSidebar=false&v=2025" width="100%" height="800" frameborder="0" style="border-radius: 10px; box-shadow: 0 8px 32px rgba(46,46,46,0.3);"></iframe>
```

## 🔧 Integration Notes

### For Best Results
1. **Always include `&v=2025`** to load the latest ambient version
2. Clear browser cache when testing updates
3. Use dark container backgrounds for seamless integration
4. Test on mobile devices for responsive behavior

### What's Different from Previous Versions
- Ambient gradient animations (15-20 second cycles)
- Dark grey (#2E2E2E) instead of standard greys
- Faster data refresh (4 seconds vs 10 seconds)
- Completely non-interactive for safer embedding
- Enhanced shadow effects matching the dark theme

### Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive across devices
- Graceful degradation on older browsers
- Hardware-accelerated CSS animations

**Need the actual URL?** Replace `your-replit-url.replit.app` with your actual deployment URL.