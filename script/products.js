// Product list with 30 Philippine alcohol & beers
const products = [
  { id: 1, name: "San Miguel Pale Pilsen", category: "Beer", price: 55.00, image: "https://www.cebooze.com/app/uploads/2020/09/bt-sanmig-palepilsen_e6e7beea-5e80-420d-8769-0b2caaf2bc7c_1024x1024.png" },
  { id: 2, name: "Red Horse Beer", category: "Beer", price: 65.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fdPEuHlNiNUPUcVleX1I5r_xatQdFZp5Zg&s.png" },
  { id: 3, name: "San Mig Light", category: "Beer", price: 50.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgU0m2ETws4OVrkncwsLsGprtcW-S1g2-CA&s.png" },
  { id: 4, name: "Tanduay Rhum Gold", category: "Rum", price: 200.00, image: "https://shots.ph/cdn/shop/products/tanduay-web-rumgold.png?v=1569420334.png" },
  { id: 5, name: "Tanduay Rhum Black Label", category: "Rum", price: 180.00, image: "https://therumhowlerblog.com/wp-content/uploads/2019/05/tanduay-superior.png?w=584.png" },
  { id: 6, name: "Ginebra San Miguel GSM Blue", category: "Gin", price: 140.00, image: "https://marilenminimart.com/cdn/shop/products/image_2021-03-31_031822.png?v=1617131906.png" },
  { id: 7, name: "Ginebra San Miguel GSM Red", category: "Gin", price: 130.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmp8WlXQg7-IF6t5tLCdVr9bLh0_itJ3TQg&s.png" },
  { id: 8, name: "Don Papa Rum", category: "Rum", price: 1200.00, image: "https://ralphs.com.ph/cdn/shop/products/Don-Papa-Rhum-700ml.png?v=1663124983.png" },
  { id: 9, name: "Emperador Light Brandy", category: "Brandy", price: 150.00, image: "https://liquorlib.com/cdn/shop/files/EmperadorLights.png?v=1720417498.png" },
  { id: 10, name: "Emperador Deluxe", category: "Brandy", price: 500.00, image: "https://cdn.shopify.com/s/files/1/2141/9909/products/Emperador_Deluxe_Special_Reserve_large.png?v=1733290784.png" },
  { id: 11, name: "Santa Rita 111 Brandy", category: "Brandy", price: 300.00, image: "https://assets.thirst.com.ph/products/santa-rita-120-cabernet-sauvignon-reserva-1l/1_1726891608625.png" },
  { id: 12, name: "Fundador Brandy", category: "Brandy", price: 350.00, image: "https://ever.ph/cdn/shop/files/100000085676-Fundador-Brandy-Light-1L-200912_288b2a42-c60a-4328-b6e9-250592648c98.jpg?v=1747103096.png" },
  { id: 13, name: "Barcelo Imperial", category: "Rum", price: 900.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPQXuYXbVUZHn6SD1gk_hzFWcji2JE0I5kQ&s.png" },
  { id: 14, name: "Ginebra San Miguel GSM Premium", category: "Gin", price: 160.00, image: "https://www.monde-selection.com/wp-content/uploads/2024/05/1040753.png" },
  { id: 15, name: "Captain Morgan Original Spiced Rum", category: "Rum", price: 750.00, image: "https://boozy.ph/cdn/shop/files/CaptainMorganOriginalSpicedGold750ml.png?v=1746427554.png" },
  { id: 16, name: "Red Horse Strong Beer", category: "Beer", price: 70.00, image: "https://asiangroceryuk.com/cdn/shop/products/image_18c1ac7c-bf2e-42d0-9014-265c5e2da836.jpg?v=1629818123.png" },
  { id: 17, name: "San Miguel Super Dry", category: "Beer", price: 60.00, image: "https://images.freshop.ncrcloud.com/1564405684702543279/b2e4a3d0d8004548b5c6760eeecbeae0_large.png" },
  { id: 18, name: "Tanduay Ice", category: "Rum", price: 90.00, image: "https://asiabrewery.com/cdn/shop/products/TanduayIceOriginal330mLBottle_5359bd54-8b20-4eac-bbdd-516e403b8bf2.jpg?v=1654570991.png" },
  { id: 19, name: "Ginebra San Miguel GSM Black", category: "Gin", price: 140.00, image: "https://cdn.localexpress.io/img/pJyeOicWbWavIiEzLn10cjN0LwEjN2TGR1Ezd3h2UTWyav4WY2Zh1WBnauUiwiInOi02dWavIil2Ln1z52bjYlVzLTY1EmFDN0cuYjMjIn5Gc2ciwiISZ6l3Jye6M1ojImIsADQjOig91HMw.png" },
  { id: 20, name: "Johnnie Walker Red Label", category: "Whiskey", price: 1500.00, image: "https://cdn.shopify.com/s/files/1/2141/9909/products/JW_Red_Label_1L_310x.png?v=1746427780.png" },
  { id: 21, name: "Jack Daniel's Old No.7", category: "Whiskey", price: 1800.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsV7CAc24DbLm1grhghGxbLPZXsSE9H4gU0w&s.png" },
  { id: 22, name: "Jameson Irish Whiskey", category: "Whiskey", price: 1700.00, image: "https://ralphs.com.ph/cdn/shop/products/Jameson-Irish-Whiskey-1l.png?v=1662531698.png" },
  { id: 23, name: "Hennessy V.S Cognac", category: "Whiskey", price: 3000.00, image: "https://clink.ph/cdn/shop/files/brown_brothers_sku_awardlifestylesize_9_800x.png?v=1732081449.png" },
  { id: 24, name: "Smirnoff Vodka", category: "Others", price: 900.00, image: "https://happyhour.ph/cdn/shop/products/smirnoff-red-label-vodka-700ml-794691.jpg?v=1708591567.png" },
  { id: 25, name: "Absolut Vodka", category: "Others", price: 950.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvwyyozWa_-OnePP5UeKsUgsTNLhMBAeOAg&s.png" },
  { id: 26, name: "Bacardi Superior Rum", category: "Rum", price: 800.00, image: "https://happyhour.ph/cdn/shop/products/bacardi-superior-white-rum-750ml-176838.jpg?v=1708590460.png" },
  { id: 27, name: "Corona Extra Beer", category: "Beer", price: 90.00, image: "https://www.coronausa.com/cdn/shop/files/corona-extra-menu_300x.png?v=1614355250.png" },
  { id: 28, name: "Heineken Beer", category: "Beer", price: 95.00, image: "https://asiabrewery.com/cdn/shop/products/Heineken_330mL_Bottle_Pure_Malt_Lager_New_1429265a-9d86-4ecc-ba84-7d10efc1ee33_1200x.png?v=1653537366.png" },
  { id: 29, name: "Tiger Beer", category: "Beer", price: 85.00, image: "https://asiabrewery.com/cdn/shop/products/TigerBeerBlack330mLRGB_f13db25e-d77d-4746-b93c-5d19f9f17888.png?v=1654590130.png" },
  { id: 30, name: "Red Horse Lite Beer", category: "Beer", price: 55.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHOZbzOsHkVO-gupE2EPmmfJjhpBBD-jTEA&s.png" }
];

// Elements
const productsContainer = document.getElementById('productsContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartCountElement = document.getElementById('cart-count'); // This element exists in index.html and will be updated from here

let filteredCategory = 'All';
let searchTerm = '';
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage

// Update cart count for header (used on both index.html and cart.html)
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountElement) { // Check if the element exists before updating (it won't on cart.html)
    cartCountElement.textContent = totalItems;
  }
}

// Render products on page (only used by index.html)
function renderProducts(list) {
  if (!productsContainer) return; // Exit if not on index.html

  productsContainer.innerHTML = '';

  if (list.length === 0) {
    productsContainer.innerHTML = '<p style="text-align:center; color:#999;">No products found.</p>';
    return;
  }

  list.forEach(product => {
    const productHTML = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" data-id="${product.id}" />
        <h3>${product.name}</h3>
        <p>₱${product.price.toFixed(2)}</p>
        <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
      </div>
    `;
    productsContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  // Add click event to images for product details page navigation
  document.querySelectorAll('.product-card img').forEach(img => {
    img.addEventListener('click', e => {
      const id = e.target.getAttribute('data-id');
      // Redirect to product.html with product id as query param
      window.location.href = `product.html?id=${id}`;
    });
  });

  // Add event listener to Add to Cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = parseInt(e.target.getAttribute('data-id'));
      addToCart(id);
    });
  });
}

// Filter products based on category and search term (only used by index.html)
function filterProducts() {
  if (!productsContainer) return; // Exit if not on index.html

  let filtered = products;

  if (filteredCategory !== 'All') {
    filtered = filtered.filter(p => p.category === filteredCategory);
  }

  if (searchTerm.trim() !== '') {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  renderProducts(filtered);
}

// Add to Cart functionality
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    // Ensure all necessary details are stored for cart.html
    cart.push({ id: productId, name: product.name, image: product.image, price: product.price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
  updateCartCount(); // Update the count in the header
  alert(`${product.name} added to cart!`);
}

// Event listeners (only for index.html specific elements)
if (filterButtons.length > 0) { // Check if elements exist (i.e., we are on index.html)
    filterButtons.forEach(btn => {
      btn.addEventListener('click', e => {
        filterButtons.forEach(button => button.classList.remove('active'));
        e.target.classList.add('active');
        filteredCategory = e.target.getAttribute('data-category');
        filterProducts();
      });
    });
}

if (searchInput) { // Check if element exists
    searchInput.addEventListener('input', e => {
      searchTerm = e.target.value;
      filterProducts();
    });
}

// Initial renders/updates
// Only run renderProducts and filterProducts if on index.html
if (productsContainer) {
    renderProducts(products);
    filterProducts();
}
updateCartCount(); // Always update cart count in header if element exists

// Navigation button functionality
// These event listeners should be robust enough to work if the elements exist

document.querySelectorAll('.cart-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'cart.html'; // Now redirects to cart.html
  });
});