const mobileMenuBtn = document.querySelector('.mobile-menu');
const mobileMenu = document.querySelector('.top-header .content');
const btnImage = document.getElementById('button');
const menu = document.getElementById('menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

btnImage.addEventListener('click', function () {
  const isMenuOpen = btnImage.classList.toggle('show');
  btnImage.src = isMenuOpen ? 'assets/img/close_menu_icon.png' : 'assets/img/burger_menu_icon.png';
});

function menuToggle() {
  menu.classList.toggle('show');
}
