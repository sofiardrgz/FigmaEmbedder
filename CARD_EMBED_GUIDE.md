# Smart Squatch Dashboard Cards - Embed Guide

## 🎯 Updated Live Cards (260px × 300px)

**New Deployment URL**: https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/

All cards feature **5-second looping animations** with enhanced readability and meaningful interactions.

## 📋 Complete Card Collection

### 1. Sales Dashboard Card
**URL**: `/card/sales`
**Animation**: Chart bars grow/shrink smoothly, KPI numbers pulse
```html
<iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/sales" 
        width="260" height="300" frameborder="0" 
        style="border-radius: 8px; border: 1px solid #374151;">
</iframe>
```

### 2. Messages Card
**URL**: `/card/messages`
**Animation**: New message slides in, gets highlighted, then opens
```html
<iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/messages" 
        width="260" height="300" frameborder="0" 
        style="border-radius: 8px; border: 1px solid #374151;">
</iframe>
```

### 3. Contacts Card
**URL**: `/card/contacts`
**Animation**: "New Lead - Robert Miller" pulsing notification banner
```html
<iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/contacts" 
        width="260" height="300" frameborder="0" 
        style="border-radius: 8px; border: 1px solid #374151;">
</iframe>
```

### 4. Calendar Card
**URL**: `/card/calendar`
**Animation**: "Appointment Booked" notifications, clean interface
```html
<iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/calendar" 
        width="260" height="300" frameborder="0" 
        style="border-radius: 8px; border: 1px solid #374151;">
</iframe>
```

### 5. AI Copilot Card
**URL**: `/card/copilot`
**Animation**: Full chat interface - prompt → AI response → calling animation
```html
<iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/copilot" 
        width="260" height="300" frameborder="0" 
        style="border-radius: 8px; border: 1px solid #374151;">
</iframe>
```

### 6. Marketing Card
**URL**: `/card/marketing`
**Animation**: Growing engagement numbers, animated thumbs up icons
```html
<iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/marketing" 
        width="260" height="300" frameborder="0" 
        style="border-radius: 8px; border: 1px solid #374151;">
</iframe>
```

### 7. Payments Card
**URL**: `/card/payments`
**Animation**: "Invoice Paid" notifications, clean layout (no yellow)
```html
<iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/payments" 
        width="260" height="300" frameborder="0" 
        style="border-radius: 8px; border: 1px solid #374151;">
</iframe>
```

## 🎨 Design Features

### Enhanced Readability
- **Main Numbers**: `text-lg` (18px) for key metrics
- **Labels**: `text-xs` to `text-sm` (12-14px) for descriptions  
- **No More Tiny Text**: Removed all unreadable small elements
- **Clean Layout**: Removed card titles for focused content

### Animation System
- **5-Second Loops**: All animations repeat every 5 seconds
- **Meaningful Interactions**: Each animation tells a story
- **Green Color Scheme**: Consistent Apple Safari dark theme
- **Smooth Transitions**: Powered by Framer Motion

### Technical Specs
- **Dimensions**: 260px × 300px (optimized for website integration)
- **Non-Interactive**: Safe for embedding, no clickable elements
- **Dark Theme**: #0d0d0d background with gray accents
- **Performance**: Optimized animations, minimal resource usage

## 💡 Usage Examples

### Single Card Integration
```html
<!-- Perfect for feature showcases -->
<div class="dashboard-preview">
  <h3>Sales Dashboard Preview</h3>
  <iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/sales" 
          width="260" height="300" frameborder="0" 
          style="border-radius: 8px; border: 1px solid #374151;">
  </iframe>
</div>
```

### Card Grid Layout
```html
<!-- Showcase multiple features -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto;">
  <iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/sales" 
          width="260" height="300" frameborder="0" style="border-radius: 8px;">
  </iframe>
  <iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/messages" 
          width="260" height="300" frameborder="0" style="border-radius: 8px;">
  </iframe>
  <iframe src="https://68b2700c16e24b00087a7111--dazzling-parfait-e94c2f.netlify.app/card/copilot" 
          width="260" height="300" frameborder="0" style="border-radius: 8px;">
  </iframe>
</div>
```

### Responsive Implementation
```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.dashboard-card {
  width: 260px;
  height: 300px;
  border-radius: 8px;
  border: 1px solid #374151;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .dashboard-card {
    width: 100%;
    max-width: 260px;
  }
}
```

## ✨ Ready for Production

All 7 cards are live and optimized for immediate embedding in any website or application. Each card showcases a specific dashboard feature with engaging animations that demonstrate the functionality without requiring user interaction.