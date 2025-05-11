// Data Produk
const products = [
  { id: 1, name: "V-Phone X", price: "$299", category: "gaming", image: "assets/phone1.jpg" },
  { id: 2, name: "V-Phone Pro", price: "$399", category: "camera", image: "assets/phone2.jpg" },
  { id: 3, name: "V-Phone Lite", price: "$199", category: "budget", image: "assets/phone3.jpg" }
];

// Filter Produk
function filterProducts(category) {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";

  const filteredProducts = category === "all" 
    ? products 
    : products.filter(product => product.category === category);

  filteredProducts.forEach(product => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Buy Now</button>
      </div>
    `;
  });
}

// Muat produk saat halaman dibuka
document.addEventListener("DOMContentLoaded", () => filterProducts("all"));