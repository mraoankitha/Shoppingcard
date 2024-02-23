let cartItems = [];
let total = 0;

function addToCart(productName, productPrice) {
  cartItems.push({ name: productName, price: productPrice });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalSpan = document.getElementById('total');
  
  cartList.innerHTML = '';
  total = 0;
  
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price.toFixed(3)}`;
    cartList.appendChild(li);
    total += item.price;
  });
  
  totalSpan.textContent = total.toFixed(3);
}