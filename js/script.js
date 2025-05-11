// Slider untuk Home Page
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  slider.innerHTML = `
    <img src="assets/slide1.jpg" alt="Promo 1">
    <img src="assets/slide2.jpg" alt="Promo 2">
  `;

  // Best Seller Products
  const products = [
    { name: 'V-Phone X', price: '$299', image: 'assets/phone1.jpg' },
    { name: 'V-Phone Pro', price: '$399', image: 'assets/phone2.jpg' }
  ];

  const productsContainer = document.querySelector('.products');
  products.forEach(product => {
    productsContainer.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Buy Now</button>
      </div>
    `;
  });
});