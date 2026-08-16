/* search.js - live product search using Fuse.js */
(function(){
  const input = document.getElementById('site-search');
  const resultsEl = document.getElementById('search-results');
  const clearBtn = document.getElementById('clear-search');
  if (!input || !resultsEl) return;

  // Prepare Fuse - use productsData from products-data.js
  const list = (window.productsData && productsData.products) ? productsData.products : [];
  const fuse = new Fuse(list, {
    keys: [ 'title', 'category' ],
    threshold: 0.35,
    ignoreLocation: true,
    minMatchCharLength: 1
  });

  let timer = null;

  function renderResults(items) {
    resultsEl.innerHTML = '';
    if (!items || items.length === 0) {
      const no = document.createElement('div');
      no.className = 'search-item';
      no.textContent = 'No products found';
      resultsEl.appendChild(no);
      resultsEl.classList.add('visible');
      return;
    }

    items.forEach(it => {
      const product = it.item ? it.item : it; // fuse returns {item}
      const div = document.createElement('div');
      div.className = 'search-item';

      const img = document.createElement('img');
      img.src = product.image || '';
      img.alt = product.title || '';

      const info = document.createElement('div');
      info.style.minWidth = '0';

      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = product.title;

      const meta = document.createElement('div');
      meta.className = 'meta';
      meta.textContent = (product.category || '').toUpperCase();

      const price = document.createElement('div');
      price.className = 'price';
      price.textContent = product.currentPrice || product.price || '';

      info.appendChild(title);
      info.appendChild(meta);
      info.appendChild(price);

      const link = document.createElement('a');
      link.href = product.affiliateLink || product.link || '#';
      link.target = '_blank';
      link.rel = 'sponsored noopener noreferrer';
      link.className = 'buy btn-buy-now';
      link.textContent = 'BUY';

      div.appendChild(img);
      div.appendChild(info);
      div.appendChild(link);

      // clicking item opens the affiliate link
      div.addEventListener('click', (e) => {
        // if click on the buy link itself, let it act
        if (e.target === link) return;
        window.open(link.href, '_blank', 'noopener');
      });

      resultsEl.appendChild(div);
    });

    resultsEl.classList.add('visible');
  }

  function doSearch(q) {
    const trimmed = q.trim();
    if (!trimmed) {
      resultsEl.classList.remove('visible');
      resultsEl.innerHTML = '';
      clearBtn.classList.remove('visible');
      return;
    }

    clearBtn.classList.add('visible');
    const results = fuse.search(trimmed);
    renderResults(results);
  }

  input.addEventListener('input', (e) => {
    clearTimeout(timer);
    const q = e.target.value || '';
    timer = setTimeout(() => doSearch(q), 180);
  });

  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    input.value = '';
    input.focus();
    resultsEl.classList.remove('visible');
    resultsEl.innerHTML = '';
    clearBtn.classList.remove('visible');
  });

  // close on outside click
  document.addEventListener('click', (e) => {
    if (!resultsEl.contains(e.target) && e.target !== input && e.target !== clearBtn) {
      resultsEl.classList.remove('visible');
    }
  });

  // keyboard: Esc to clear
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      resultsEl.classList.remove('visible');
      clearBtn.classList.remove('visible');
    }
  });

})();
