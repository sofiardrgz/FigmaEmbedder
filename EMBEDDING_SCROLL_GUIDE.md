# Messaging Dashboard Scroll Fade Effect

## Updated Embed URLs with Scroll Effects

Your messaging dashboard now has blur fade-in/fade-out effects based on scroll position:

### Safari Frame with Scroll Effects
```
/embed/messages
```
- Safari browser frame styling
- Blur fade effects on scroll
- No background, just the component
- 1000px width, centered

### Clean Dashboard with Scroll Effects  
```
/embed/messages/no-frame
```
- Pure dashboard without Safari frame
- Blur fade effects on scroll
- No background, transparent
- Full width responsive

### Compact Dashboard with Scroll Effects
```
/embed/messages/no-sidebar
```
- Safari frame without sidebar
- Blur fade effects on scroll
- More compact layout

## Scroll Effect Behavior

**Fade In:** Component gradually appears with reduced blur when scrolling into view
**Fade Out:** Component gradually disappears with increased blur when scrolling out of view

**Fade Zones:**
- 200px from top/bottom of viewport
- Smooth opacity transition (1.0 → 0.0)
- Blur transition (0px → 10px)
- 0.3s smooth transitions

## Perfect for Embedding

- **No backgrounds** - only the component content
- **Smooth scroll interactions** - elegant fade effects
- **Optimized performance** - passive scroll listeners
- **Cross-browser compatible** - works in all modern browsers

## Example Embed Code

```html
<iframe 
  src="your-domain.com/embed/messages/no-frame"
  width="100%" 
  height="600px"
  frameborder="0"
  style="background: transparent;">
</iframe>
```

The messaging dashboard will now blur fade in/out as users scroll, creating a smooth and professional embedding experience.