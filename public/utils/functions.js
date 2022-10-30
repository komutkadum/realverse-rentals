const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuButton = document.getElementById(
  'close-mobile-menu-button'
);
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.style.width = '100%';
});
closeMobileMenuButton.addEventListener('click', () => {
  mobileMenu.style.width = '0';
});

// const userMenuButton = document.getElementById('user-menu-button');
// const userMenuDropdown = document.getElementById('user-menu-dropdown');

// userMenuButton.addEventListener('click', () => {
//   userMenuDropdown.classList.toggle('hidden');
// });

const map = document.getElementById('gmap');
function myFunction() {
  map.style.height = `${window.innerHeight - 119}px`;
}
if (map) myFunction();

// window.onclick = function (event) {
//   userMenuDropdown.classList.add('hidden');
// };
