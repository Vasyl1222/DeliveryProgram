const signupForm = document.querySelector('.signup form');
const loginForm = document.querySelector('.login form');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const fullName = this.querySelector('input[name="fullname"]').value;
  const email = this.querySelector('input[name="email"]').value;
  const password = this.querySelector('input[name="password"]').value;

  if (localStorage.getItem(email)) {
    alert('Користувач з таким email вже існує!');
    return;
  }

  localStorage.setItem(email, JSON.stringify({ fullName, password }));

  alert('Реєстрація успішна!');
});

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = this.querySelector('input[name="email"]').value;
  const password = this.querySelector('input[name="password"]').value;

  const userData = JSON.parse(localStorage.getItem(email));
  if (!userData || userData.password !== password) {
    alert('Неправильний email або пароль!');
    return;
  }

  document.querySelector('.login').classList.remove('active');
  window.location.href = 'products.html';
});











// Ensure this script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select all add-to-cart buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  // Select the cart icon
  const cartIcon = document.querySelector('img[alt="Icon 3"]');
  
  // Create a span element to hold the cart count
  let cartCountSpan = document.createElement('span');
  cartCountSpan.style.position = 'absolute';
  cartCountSpan.style.top = '0';
  cartCountSpan.style.right = '0';
  cartCountSpan.style.backgroundColor = 'red';
  cartCountSpan.style.color = 'white';
  cartCountSpan.style.borderRadius = '50%';
  cartCountSpan.style.padding = '0 5px';
  cartCountSpan.style.fontSize = '12px';
  cartCountSpan.style.display = 'none';  // Hide initially
  
  // Append the cart count span to the cart icon's parent element
  cartIcon.parentElement.style.position = 'relative';  // Ensure the parent is positioned relatively
  cartIcon.parentElement.appendChild(cartCountSpan);

  // Initialize the cart count
  let cartCount = 0;

  // Add event listeners to all add-to-cart buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Increment the cart count
          cartCount++;
          // Update the span's text
          cartCountSpan.textContent = cartCount;
          // Make the span visible
          cartCountSpan.style.display = 'inline';
      });
  });
});