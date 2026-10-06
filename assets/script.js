const menu = document.querySelector('#mobile-menu');
const openMenu = document.querySelector('[data-menu-open]');
const closeMenu = document.querySelector('[data-menu-close]');
function setMenu(open) {
  if (!menu) return;
  menu.classList.toggle('is-open', open);
  menu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
}
openMenu?.addEventListener('click', () => setMenu(true));
closeMenu?.addEventListener('click', () => setMenu(false));
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
