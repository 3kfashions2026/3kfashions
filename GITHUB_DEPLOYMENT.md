# GitHub Pages Deployment Guide for 3K Fashions

## 🚀 Complete Step-by-Step Deployment

---

## STEP 1: Create GitHub Account (If You Don't Have One)

1. Go to https://github.com
2. Click "Sign up"
3. Enter email, create password, choose username
4. Verify email
5. Done! ✓

---

## STEP 2: Create New Repository

1. Log in to GitHub
2. Click **+** icon (top right) → **New repository**
3. Fill in:
   - **Repository name**: `3k-fashions-website`
   - **Description**: "Curated Fashion & Accessories Affiliate Website"
   - **Public** (so it's visible)
   - ✓ Check "Add a README file"
4. Click **Create repository**

---

## STEP 3A: Upload Files (EASIEST METHOD - Web Browser)

1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `products-data.js`
   - `README.md`
3. Click **Commit changes**
4. Done! All files uploaded ✓

---

## STEP 3B: Upload Files (ADVANCED METHOD - Command Line)

If you're comfortable with terminal:

```bash
# 1. Navigate to your project folder
cd path/to/3k_fashions_website

# 2. Initialize Git
git init

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit - 3K Fashions website"

# 5. Rename branch to main (GitHub default)
git branch -M main

# 6. Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/3k-fashions-website.git

# 7. Push to GitHub
git push -u origin main
```

---

## STEP 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Left sidebar → **Pages**
4. Under "Source":
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**

**Your website is now LIVE! 🎉**

After 1-5 minutes, it will be available at:
```
https://USERNAME.github.io/3k-fashions-website/
```

(Replace USERNAME with your actual GitHub username)

---

## STEP 5: Verify Your Website Works

1. Copy your URL: `https://USERNAME.github.io/3k-fashions-website/`
2. Paste in browser
3. Check:
   - ✓ Homepage loads
   - ✓ Categories visible
   - ✓ Products showing
   - ✓ "BUY NOW" buttons work
   - ✓ Mobile responsive
   - ✓ No broken images

---

## 📝 How to Update Your Website

Every time you make changes:

### Method A: Through GitHub Web Browser

1. Go to repository
2. Click on file you want to edit (e.g., `products-data.js`)
3. Click ✏️ **Edit this file**
4. Make changes
5. Click **Commit changes**
6. Website updates automatically (1-5 min)

### Method B: Through Command Line

```bash
# Make changes to files locally

# Add changes
git add .

# Commit with message
git commit -m "Updated products"

# Push to GitHub
git push
```

Website updates automatically!

---

## 🔄 Quick Update Examples

### Add New Product

1. Go to GitHub repo
2. Click `products-data.js`
3. Click ✏️ (Edit)
4. Find the category section
5. Copy a product template
6. Paste and update details
7. Commit changes
8. Check website (wait 1-5 min)

### Change Prices

1. Edit `products-data.js`
2. Update `currentPrice` and `originalPrice`
3. Commit
4. Website updates

### Add New Category Link

1. Edit `index.html`
2. Add link in navbar
3. Commit
4. Done

---

## 🎯 Custom Domain (Optional)

Want `fashions.com` instead of `username.github.io`?

### Option 1: Godaddy Domain

1. Buy domain at https://www.godaddy.com
2. Go domain settings
3. DNS → A Record
4. Add GitHub Pages IP: `185.199.108.153`
5. Add CNAME: `username.github.io`
6. GitHub repo Settings → Pages → Custom domain
7. Enter your domain

### Option 2: Namecheap Domain

1. Buy domain at https://www.namecheap.com
2. Manage domain → DNS
3. Add A record: `185.199.108.153`
4. GitHub repo Settings → Pages → Custom domain
5. Enter your domain

---

## 🔒 Keep Your Repository Private (Optional)

If you want to hide code before launch:

1. Settings → General → Danger Zone
2. Change to **Private**
3. Make changes
4. When ready, change back to **Public**

---

## 📊 Monitor Your Site

### Check Traffic
- GitHub Settings → Pages → Visit analytics

### Check Status
- GitHub Pages Status: https://www.githubstatus.com/

### Test Site Speed
- https://pagespeed.web.dev/
- Enter your site URL

---

## ⚠️ Common Issues & Fixes

### "404 Page Not Found"
- **Fix**: Check if index.html is in root folder
- Files should NOT be in a subfolder

### Products Don't Show
- **Fix**: Make sure `products-data.js` loads before `script.js`
- Refresh browser (Ctrl+Shift+R)

### Images Not Loading
- **Fix**: Check image URLs are correct
- Use https:// not http://

### Site Very Slow
- **Fix**: Compress images at https://tinypng.com/
- Use smaller image files

### Changes Not Showing
- **Fix**: Hard refresh (Ctrl+Shift+R)
- GitHub Pages caches - wait 5 minutes
- Clear browser cache

---

## 🔐 Keep Your Repository Secure

1. ✓ Don't share your password
2. ✓ Don't commit API keys (none needed here)
3. ✓ Use **Public** only for website files
4. ✓ Use **Private** if developing

---

## 📤 Backup Your Work

Always have local copies:

1. Keep files on your computer
2. Backup to USB or cloud (Google Drive, OneDrive)
3. Create new commit before big changes
4. You can always see history on GitHub

To see your history:
- GitHub repo → Commits → View all changes

---

## 🚀 Going Live Checklist

Before sharing your website:

- [ ] All products added
- [ ] Affiliate links tested
- [ ] Images loading correctly
- [ ] No broken links
- [ ] Mobile responsive
- [ ] Disclaimer visible
- [ ] Contact form works
- [ ] No console errors (F12)
- [ ] GitHub Pages enabled
- [ ] Custom domain working (if used)

---

## 📝 Share Your Website

Once live, share your URL:
- Twitter: `Check out my fashion website: https://username.github.io/3k-fashions-website/`
- Instagram: Link in bio
- Facebook: Post link
- Email: Send to friends

---

## 💰 Next Steps: Make Money

1. Join affiliate networks:
   - Amazon Associates: https://associates.amazon.com/
   - Myntra: https://www.myntra.com/partners
   - Flipkart: https://affiliate.flipkart.com/

2. Get your unique affiliate links
3. Add to `products-data.js`
4. Earn commission on every purchase!

---

## 📞 Need Help?

- GitHub Help: https://help.github.com/
- GitHub Community: https://github.community/
- Stack Overflow: Tag your question with `github-pages`

---

## ✅ COMPLETE! You're Done!

Your 3K Fashions website is now live on GitHub Pages! 🎉

**Your website URL:**
```
https://USERNAME.github.io/3k-fashions-website/
```

---

**Next:** Follow README.md for adding products and managing your website!
