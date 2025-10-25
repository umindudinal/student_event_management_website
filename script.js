const formContainer = document.querySelector('.form_container');
const registerBtn = document.querySelector('.register_btn');
const loginBtn = document.querySelector('.login_btn');

registerBtn.addEventListener('click', () => {
   formContainer.classList.add('active');
});
loginBtn.addEventListener('click', () => {
   formContainer.classList.remove('active');
});
