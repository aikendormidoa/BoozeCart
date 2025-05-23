const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const signInForm = document.getElementById('signInForm');

if (registerLink && wrapper) {
  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  });
}
if (loginLink && wrapper) {
  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  });
}

// Redirect to index.html after login
if (signInForm) {
  signInForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // You can add authentication logic here if needed
    window.location.href = '../index.html';
  });
}