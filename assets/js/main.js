//******** CLOSE MOBILE MENU **********/

const openMenu = document.querySelector('.burguer__menu');
const mobileMenu = document.querySelector('.nav__mobile');

openMenu.addEventListener('click', () => {
  mobileMenu.style.top = '50%';
});

const closeMenu = document.querySelector('.close__menu');
const mobileMenuClose = document.querySelector('.nav__mobile');

closeMenu.addEventListener('click', () => {
  mobileMenuClose.style.top = '150%';
});

//*********** PREVENT DEAFAULT BEHAVIOUR ****************/

const submitForm = document.querySelector('btn__submit');
submitForm.addEventListener('click', (e) => {
  e.preventDefault();
});
