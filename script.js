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






