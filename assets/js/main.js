//******** CLOSE MOBILE MENU **********/
const openMenu = document.querySelector('.burguer__menu');
const mobileMenu = document.querySelector('.mobile__menu');

openMenu.addEventListener('click', () => {
  mobileMenu.style.top = '0';
});

const closeMenu = document.querySelector('.close__menu');
const mobileMenuClose = document.querySelector('.mobile__menu');

closeMenu.addEventListener('click', () => {
  mobileMenuClose.style.top = '-100%';
});

//*********** PREVENT DEAFAULT BEHAVIOUR ****************/

const submitForm = document.querySelector('btn__submit');
submitForm.addEventListener('click', (e) => {
  e.preventDefault();
});
