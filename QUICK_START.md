# QUICK START GUIDE - 3K Fashions Website

## 🚀 Test Your Website Locally First

Before uploading to GitHub, test your website on your computer:

### Step 1: Open in Browser

1. Go to: `c:\Users\LENOVO\Downloads\3k_fashions_website`
2. Right-click `index.html`
3. Select "Open with" → "Chrome" (or your browser)
4. Your website opens! ✓

### Step 2: Test All Features

Check these things:

- [ ] **Hero Section**: Shows banner with "SHOP NOW" button
- [ ] **Categories**: 4 category cards visible (MEN, WOMEN, ACCESSORIES, SHOES)
- [ ] **Products**: Products show with images, prices, and "BUY NOW" buttons
- [ ] **Responsive**: Resize browser window - works on mobile view
- [ ] **Links**: Click "BUY NOW" - opens new tab ✓
- [ ] **Navigation**: Click menu items - smooth scroll works
- [ ] **Footer**: Disclaimer visible with affiliate disclosure
- [ ] **Contact**: Fill form and submit - shows thank you message

---

## 📝 Common First-Time Edits

### Add Your First Product

1. Open `products-data.js` in text editor
2. Find the `products` array
3. Copy this template:

```javascript
{
  id: 'men-5',
  category: 'men',
  title: 'Your Product Name Here',
  currentPrice: '₹500',
  originalPrice: '₹1000',
  discount: '50%',
  image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=500',
  affiliateLink: 'https://www.amazon.in/search?k=your+product'
}
```

4. Replace with your details
5. Save file
6. Refresh browser - your product appears! ✓

### Change a Product Image

In `products-data.js`, update image URL:

**Before:**
```javascript
image: 'https://images.unsplash.com/photo-1602810318383-...'
```

**After:**
```javascript
image: 'https://images.unsplash.com/photo-1234567890...' // Your new image
```

Get free images from:
- https://unsplash.com/
- https://pexels.com/
- https://pixabay.com/

---

## 🔧 File Editing Tips

### Use Notepad++
- Download: https://notepad-plus-plus.org/
- Supports syntax highlighting
- Makes editing easier

### Use VS Code (BEST)
- Download: https://code.visualstudio.com/
- Free, powerful, perfect for web dev
- Has preview feature

### How to Edit Files

1. Right-click file
2. "Open with" → Notepad++ or VS Code
3. Make changes
4. Ctrl+S to save
5. Refresh browser to see changes

---

## 🎯 5-Minute Setup

If you want to launch TODAY:

### 1. Add 10 Products (2 min)
- Edit `products-data.js`
- Add your affiliate links
- Save

### 2. Add Contact Info (1 min)
- Edit `index.html`
- Find contact form
- This is ready to use

### 3. Add Social Links (1 min)
- Edit `index.html`
- Find footer social icons
- Update links to your social media

### 4. Test (1 min)
- Open `index.html` in browser
- Click around
- Make sure nothing is broken

### 5. Deploy to GitHub (1 min)
- Follow GITHUB_DEPLOYMENT.md
- Upload files
- Enable Pages
- Done! ✓

---

## 📁 File Reference Guide

| File | Purpose | Edit? |
|------|---------|-------|
| `index.html` | Main page structure | Edit to add sections/links |
| `style.css` | Styling & colors | Edit to customize design |
| `script.js` | Interactivity & products | Normally don't edit |
| `products-data.js` | **YOUR PRODUCTS HERE** | **Edit to add products** |
| `README.md` | Documentation | Reference only |
| `COPYRIGHT_AND_LEGAL.md` | Legal info | Reference only |
| `GITHUB_DEPLOYMENT.md` | Deploy instructions | Reference only |

---

## 🆘 Troubleshooting

### Products Don't Show?
1. Check `products-data.js` syntax
2. Make sure no typos in category names
3. Refresh browser (Ctrl+Shift+R)

### Images Broken?
1. Check image URL is valid
2. Try a different image from Unsplash
3. Make sure URL starts with https://

### "BUY NOW" Links Not Working?
1. Check affiliate link is valid
2. Make sure it starts with http:// or https://
3. Try the link in new tab

### CSS Not Loading?
1. Make sure `style.css` is in same folder
2. Refresh browser hard (Ctrl+Shift+R)
3. Check file is named exactly `style.css`

---

## 🎨 Quick Customization

### Change Gold Color

In `style.css`, line ~7:
```css
--primary-gold: #c69c3a;  /* Change this hex code */
```

Try colors:
- Rose Gold: `#b76e79`
- Silver: `#c0c0c0`
- Teal: `#008080`
- Navy: `#001f3f`

### Change Logo Text

In `index.html`, around line 23:
```html
<span class="logo-number">3K</span>
<span class="logo-text">Fashions</span>
```

### Change Tagline

In `index.html`, around line 26:
```html
<span class="logo-sub">WEAR YOUR STYLE</span>
```

---

## ✅ Pre-Launch Checklist

Before going live on GitHub:

- [ ] Tested all products show
- [ ] All "BUY NOW" links work
- [ ] Images load correctly
- [ ] Mobile view looks good
- [ ] No console errors (F12)
- [ ] Disclaimer visible
- [ ] Navigation works
- [ ] Contact form works
- [ ] No broken links
- [ ] Ready to launch! 🚀

---

## 🌐 Next: Deploy to GitHub

Once happy with local version:

1. Follow `GITHUB_DEPLOYMENT.md`
2. Upload all files to GitHub
3. Enable GitHub Pages
4. Website goes LIVE! 🎉

**Your live URL will be:**
```
https://YOUR_USERNAME.github.io/3k-fashions-website/
```

---

## 📱 Mobile Testing

Check on phone/tablet:

### View on Phone
1. Get your computer IP: 
   - Windows: Open PowerShell → `ipconfig` → IPv4 Address
2. On phone, browser: `http://192.168.x.x:8000/`
3. Run server: `python -m http.server 8000`
4. Test on phone

### Mobile Checklist
- [ ] Menu works on small screen
- [ ] Buttons are clickable (not tiny)
- [ ] Images resize properly
- [ ] Text readable
- [ ] No horizontal scroll

---

## 💡 Pro Tips

1. **Test Links**: Click every "BUY NOW" button
2. **Check Spelling**: Proofread product titles
3. **Update Prices**: Keep prices current
4. **Add Seasonally**: Update products for seasons
5. **Monitor Analytics**: Check GitHub Pages analytics

---

## 🎯 What's Next?

After launching:

1. **Get Affiliate Links**: Join Amazon Associates, Myntra Partners, etc.
2. **Add More Products**: Build inventory
3. **Promote**: Share on social media
4. **Monitor**: Check which products sell
5. **Earn**: Receive affiliate commission!

---

## 📞 Still Have Questions?

### File Not Opening?
- Make sure file extension is correct (.html, .js, .css)
- Right-click → Open with → Choose program

### Syntax Error in products-data.js?
- Check all curly braces { } match
- Check all quotes " " are paired
- Check comma after each product object

### Link Not Working?
- Test link directly in browser first
- Make sure you copied entire URL
- Check no spaces in URL

---

## ✨ YOU'RE READY!

Your 3K Fashions website is ready to go:

✅ Professional design  
✅ Responsive & mobile-friendly  
✅ Secure affiliate links  
✅ Easy to update  
✅ Legal compliance included  
✅ Free hosting on GitHub  

**Happy selling! 🎉**

---

**Questions?** Check these files:
- Setup: `README.md`
- Deployment: `GITHUB_DEPLOYMENT.md`
- Legal: `COPYRIGHT_AND_LEGAL.md`
