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











document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartIcon = document.querySelector('img[alt="Icon 3"]');
  
  let cartCountSpan = document.createElement('span');
  cartCountSpan.style.position = 'absolute';
  cartCountSpan.style.top = '0';
  cartCountSpan.style.right = '0';
  cartCountSpan.style.backgroundColor = 'red';
  cartCountSpan.style.color = 'white';
  cartCountSpan.style.borderRadius = '50%';
  cartCountSpan.style.padding = '0 5px';
  cartCountSpan.style.fontSize = '12px';
  cartCountSpan.style.display = 'none';  
  
  cartIcon.parentElement.style.position = 'relative';  
  cartIcon.parentElement.appendChild(cartCountSpan);

  let cartCount = 0;

  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          cartCount++;
          cartCountSpan.textContent = cartCount;
          cartCountSpan.style.display = 'inline';
      });
  });
});