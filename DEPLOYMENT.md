# Deploy Dashboard to GitHub Pages

This dashboard is now ready to be deployed to GitHub Pages for free hosting!

## Quick Setup Instructions

### 1. Push to GitHub
1. Create a new repository on GitHub
2. Push this code to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"

### 3. Automatic Deployment
The GitHub Actions workflow is already configured! Every time you push to the main branch:
- It will automatically build your dashboard
- Deploy it to GitHub Pages
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Dashboard URLs

Once deployed, you can access different versions:

- **Full Dashboard**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- **Embeddable (with Safari frame)**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/embed`
- **Embeddable (no frame)**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/embed/no-frame`
- **Embeddable (no sidebar)**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/embed/no-sidebar`

## Embed in Other Sites

To embed the dashboard in another website, use an iframe:

```html
<iframe 
  src="https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/embed/no-frame" 
  width="800" 
  height="600" 
  frameborder="0">
</iframe>
```

The dashboard is configured to be exactly 800px wide and uses 100% height without scrolling, perfect for embedding!

## Features

✅ **Static hosting** - No backend required  
✅ **Responsive design** - Works on all devices  
✅ **Animated charts** - Beautiful data visualization  
✅ **Multiple embed options** - Choose the layout that fits your needs  
✅ **Free hosting** - No costs with GitHub Pages  

Your dashboard is ready to go live! 🚀