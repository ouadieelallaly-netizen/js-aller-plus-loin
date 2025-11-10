const API_URL = 'https://fakestoreapi.com/products';
let allProducts = [];

async function fetchProducts() {
  const res = await fetch(API_URL);
  allProducts = await res.json();
  displayProducts(allProducts);
  setupFilters(allProducts);
}

function displayProducts(products) {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';

  if (products.length === 0) {
    container.innerHTML = '<p>Aucun produit trouvé.</p>';
    return;
  }

  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p><em>${p.category}</em></p>
      <p><strong>${p.price.toFixed(2)} €</strong></p>
    `;
    container.appendChild(div);
  });
}

function setupFilters(products) {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const minPriceInput = document.getElementById('minPrice');
  const maxPriceInput = document.getElementById('maxPrice');

  // Populate categories
  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });

  // Add event listeners for filtering
  [searchInput, categoryFilter, minPriceInput, maxPriceInput].forEach(el => {
    el.addEventListener('input', applyFilters);
  });
}

function applyFilters() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
  const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;

  const filtered = allProducts.filter(p => {
    const matchName = p.title.toLowerCase().includes(search);
    const matchCategory = !category || p.category === category;
    const matchPrice = p.price >= minPrice && p.price <= maxPrice;
    return matchName && matchCategory && matchPrice;
  });

  displayProducts(filtered);
}

fetchProducts();