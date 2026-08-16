# 3K Fashions - Curated Fashion & Accessories Affiliate Platform

Welcome to 3K Fashions! A modern, responsive affiliate fashion website hosted on GitHub Pages.

## 🎯 About 3K Fashions

3K Fashions is a curated fashion & accessories affiliate platform featuring:

### 👕 Men's Apparel
- Casual & formal shirts
- Premium jeans & denim
- T-shirts & casual wear

### 👗 Women's Apparel
- Dresses & skirts
- Tops & blazers
- Palazzo pants & kurti

### 💍 Accessories
- Minimalist watches
- Premium wallets
- Sunglasses & bags

### 👟 Shoes
- Running shoes
- Canvas sneakers
- Loafers & boots

## 🚀 Features

✅ **Responsive Design** - Perfect on all devices (desktop, tablet, mobile)
✅ **Fast Search** - Instantly find products
✅ **Multiple Categories** - Browse by type
✅ **Affiliate Links** - Shop from trusted retailers
✅ **Mobile Navigation** - Easy menu on small screens
✅ **Clean Code** - No tracking or personal data collection

## 🛒 Retailers

Products are linked to trusted Indian retailers:
- 🔗 Amazon India
- 🔗 Myntra
- 🔗 Flipkart
- 🔗 Meesho

## ⚖️ Legal Disclaimer

**This is a curated affiliate platform.** We provide product recommendations and earn affiliate commissions when you purchase through our links at no extra cost to you.

## 🛠️ How to Add Products

All products are stored in `products-data.js`. Example:

```javascript
{
  id: 'men-1',
  category: 'men',
  title: 'Men Comfort Casual Shirt',
  currentPrice: '₹490',
  originalPrice: '₹1749',
  discount: '72%',
  image: 'https://images.unsplash.com/...',
  affiliateLink: 'https://www.amazon.in/...'
}
```

### Adding Images
Use FREE stock photos (no copyright issues):
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

**Never use product images directly from retailers.**

## 📁 File Structure

```
3kfashions/
├── index.html           # Main homepage
├── mens.html           # Men's category page
├── womens.html         # Women's category page
├── accessories.html    # Accessories page
├── shoes.html          # Shoes page
├── about.html          # About us page
├── contact.html        # Contact page
├── style.css           # Main stylesheet
├── script.js           # Interactive features
├── products-data.js    # All products & categories
├── search.css          # Search functionality styling
└── README.md           # This file
```

## 🎨 Customization

### Change Colors
Edit `style.css` and modify the `:root` section:

```css
:root {
  --primary-gold: #c69c3a;    /* Main color */
  --gold-hover: #a8822d;      /* Hover color */
  --dark-text: #1a1a1a;       /* Text color */
  --light-bg: #f9f9f9;        /* Background */
}
```

### Change Images
Category images use Unsplash URLs. Update in `index.html`:

```html
<div class="card-bg" style="background-image: url('NEW_URL_HERE');"></div>
```

## 🚀 Deploy on GitHub Pages

1. **Upload to GitHub**: Push all files to repository
2. **Enable Pages**: Settings → Pages → Select main branch
3. **Live Site**: https://yourusername.github.io/3kfashions/

## ✅ Security & Privacy

✓ **No tracking cookies** - GDPR compliant
✓ **No data storage** - Form messages only alert shown
✓ **No API keys exposed** - All requests are client-side
✓ **Safe links** - All external links use `rel="noopener noreferrer"`

## 📞 Contact

- **Instagram**: [@3kfashions2026](https://www.instagram.com/3kfashions2026/)
- **Website**: Hosted on GitHub Pages

## 🐛 Troubleshooting

**Products not showing?**
- Check `products-data.js` is loaded
- Open browser console (F12) for errors
- Verify category IDs match

**Images not loading?**
- Verify image URL is valid
- Try a different Unsplash image
- Check file format (jpg, png)

**Links not working?**
- Ensure URL starts with `http://` or `https://`
- Test link in new tab
- Check affiliate parameters

## 📄 License

Free to use and modify for personal projects.

---

**3K Fashions - Wear Your Style**

*Curated fashion recommendations with exclusive deals from top retailers.*

Last Updated: August 2026
