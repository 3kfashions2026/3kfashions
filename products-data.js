/* ==========================================================================
   3K FASHIONS - PRODUCTS DATA
   
   HOW TO ADD NEW PRODUCTS:
   1. Copy a product object below
   2. Update id, title, currentPrice, originalPrice, discount
   3. Add image URL (use free sources like Unsplash, Pexels, or Pixabay)
   4. Add your affiliate link to the store (Amazon, Myntra, Meesho, or Flipkart)
   5. Make sure rel="sponsored" is added to links (already in code)
   6. Test the link before deploying
   
   HOW TO ADD NEW CATEGORIES:
   1. Add a new category entry in the categories array
   2. Add products with matching category ID
   3. Update the HTML section id to match category id
   4. The JavaScript will automatically load products into the grid
   
   AFFILIATE LINK FORMAT (EXAMPLES):
   - Amazon: https://www.amazon.in/s?k=product+name&ref=your_affiliate_id
   - Myntra: https://www.myntra.com/product-name?utm_source=3kfashions
   - Meesho: https://www.meesho.com/search/product-name
   - Flipkart: https://www.flipkart.com/search?q=product+name&as=on
   
   COPYRIGHT & LEGAL:
   - NEVER use brand logos or copyrighted product images directly from retailers
   - Use stock photos from Unsplash, Pexels, Pixabay (free & safe)
   - Add affiliate disclosure in HTML footer (already added)
   - Never claim to be an official store of any brand
   - Clearly state: "This is a curated affiliate platform"
   ========================================================================== */

const productsData = {
  categories: [
    { id: 'men', name: 'MEN\'S APPAREL' },
    { id: 'women', name: 'WOMEN\'S APPAREL' },
    { id: 'accessories', name: 'ACCESSORIES' },
    { id: 'shoes', name: 'SHOES' }
  ],

  products: [
    // ==================== MEN'S PRODUCTS ====================
    {
      id: 'men-1',
      category: 'men',
      title: 'Men Comfort Casual Shirt',
      currentPrice: '₹490',
      originalPrice: '₹1749',
      discount: '72%',
      image: 'https://images.unsplash.com/photo-1596215877223-85ba647ed4d0?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.amazon.in/s?k=mens+casual+shirt'
    },
    {
      id: 'men-2',
      category: 'men',
      title: 'Premium Cotton Blue Denim Jeans',
      currentPrice: '₹899',
      originalPrice: '₹1,799',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.myntra.com/search?rawQuery=blue+denim+jeans&utm_source=3kfashions'
    },
    {
      id: 'men-3',
      category: 'men',
      title: 'Formal White Oxford Shirt',
      currentPrice: '₹649',
      originalPrice: '₹1,399',
      discount: '53%',
      image: 'https://images.unsplash.com/photo-1596215877223-85ba647ed4d0?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.flipkart.com/search?q=formal+white+oxford+shirt'
    },
    {
      id: 'men-4',
      category: 'men',
      title: 'Lightweight Casual T-Shirt',
      currentPrice: '₹299',
      originalPrice: '₹799',
      discount: '62%',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.amazon.in/s?k=casual+tshirt+men'
    },

    // ==================== WOMEN'S PRODUCTS ====================
    {
      id: 'women-1',
      category: 'women',
      title: 'Floral Print A-Line Skater Dress',
      currentPrice: '₹899',
      originalPrice: '₹1,499',
      discount: '40%',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.myntra.com/search?rawQuery=floral+skater+dress&utm_source=3kfashions'
    },
    {
      id: 'women-2',
      category: 'women',
      title: 'Black Elegant Casual Blazer',
      currentPrice: '₹1,199',
      originalPrice: '₹2,299',
      discount: '47%',
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.flipkart.com/search?q=womens+black+blazer'
    },
    {
      id: 'women-3',
      category: 'women',
      title: 'Navy Blue Palazzo Pants',
      currentPrice: '₹749',
      originalPrice: '₹1,499',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1506629082632-11c75b20e0db?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.amazon.in/s?k=palazzo+pants+women'
    },
    {
      id: 'women-4',
      category: 'women',
      title: 'Comfortable Cotton Kurti',
      currentPrice: '₹399',
      originalPrice: '₹899',
      discount: '55%',
      image: 'https://images.unsplash.com/photo-1617126212335-c452533ba252?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.meesho.com/search/kurti+cotton'
    },

    // ==================== ACCESSORIES ====================
    {
      id: 'acc-1',
      category: 'accessories',
      title: 'Minimalist Classic Quartz Watch',
      currentPrice: '₹1,199',
      originalPrice: '₹1,849',
      discount: '35%',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.amazon.in/s?k=minimalist+quartz+watch'
    },
    {
      id: 'acc-2',
      category: 'accessories',
      title: 'Premium Leather Wallet',
      currentPrice: '₹499',
      originalPrice: '₹999',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1556821552-5b3b7a6dcb9b?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.flipkart.com/search?q=leather+wallet'
    },
    {
      id: 'acc-3',
      category: 'accessories',
      title: 'Stylish UV Protection Sunglasses',
      currentPrice: '₹799',
      originalPrice: '₹1,599',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.myntra.com/sunglasses?utm_source=3kfashions'
    },
    {
      id: 'acc-4',
      category: 'accessories',
      title: 'Trendy Crossbody Sling Bag',
      currentPrice: '₹649',
      originalPrice: '₹1,299',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.amazon.in/s?k=crossbody+sling+bag'
    },

    // ==================== SHOES ====================
    {
      id: 'shoes-1',
      category: 'shoes',
      title: 'Lightweight Breathable Running Shoes',
      currentPrice: '₹799',
      originalPrice: '₹1,599',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.flipkart.com/search?q=running+shoes'
    },
    {
      id: 'shoes-2',
      category: 'shoes',
      title: 'Classic White Canvas Sneakers',
      currentPrice: '₹599',
      originalPrice: '₹1,199',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.myntra.com/shoes?utm_source=3kfashions'
    },
    {
      id: 'shoes-3',
      category: 'shoes',
      title: 'Comfortable Slip-On Loafers',
      currentPrice: '₹899',
      originalPrice: '₹1,799',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1559453028-56a92dd7d840?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.amazon.in/s?k=loafers'
    },
    {
      id: 'shoes-4',
      category: 'shoes',
      title: 'Casual Brown Ankle Boots',
      currentPrice: '₹1,099',
      originalPrice: '₹2,199',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500',
      affiliateLink: 'https://www.flipkart.com/search?q=ankle+boots'
    }
  ]
};
