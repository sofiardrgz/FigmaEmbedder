# Dashboard Embedding Guide

Your dashboard is now live at: https://68b0b7c4c14caf000867fff9--dazzling-parfait-e94c2f.netlify.app/

## Available Embed URLs

### 1. Full Dashboard with Safari Frame
```
https://68b0b7c4c14caf000867fff9--dazzling-parfait-e94c2f.netlify.app/embed
```
- Includes the Safari browser frame styling
- Perfect for presentations and demos

### 2. Clean Dashboard (No Browser Frame)
```
https://68b0b7c4c14caf000867fff9--dazzling-parfait-e94c2f.netlify.app/embed/no-frame
```
- Clean dashboard without browser styling
- Better for direct embedding

### 3. Dashboard without Sidebar
```
https://68b0b7c4c14caf000867fff9--dazzling-parfait-e94c2f.netlify.app/embed/no-sidebar
```
- Safari frame but no sidebar
- More compact view

## How to Embed

### In HTML/Website
```html
<iframe 
  src="https://68b0b7c4c14caf000867fff9--dazzling-parfait-e94c2f.netlify.app/embed/no-frame"
  width="100%" 
  height="600px"
  frameborder="0">
</iframe>
```

### In WordPress
1. Add HTML block
2. Paste the iframe code above
3. Adjust width/height as needed

### In Notion
1. Add "Embed" block
2. Paste: `https://68b0b7c4c14caf000867fff9--dazzling-parfait-e94c2f.netlify.app/embed/no-frame`

### In Google Sites
1. Insert → Embed URL
2. Paste the embed URL

### Responsive Embedding
```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe 
    src="https://68b0b7c4c14caf000867fff9--dazzling-parfait-e94c2f.netlify.app/embed/no-frame"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0">
  </iframe>
</div>
```

## Best Practices

- Use `/embed/no-frame` for clean integration
- Use `/embed` when you want the Safari browser aesthetic
- Adjust iframe dimensions based on your content area
- Test on mobile devices for responsiveness

## Custom Domain (Optional)
You can set up a custom domain in Netlify settings to make the URLs more professional:
- `dashboard.yourdomain.com/embed`