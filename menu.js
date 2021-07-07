const nav = document.querySelector('.nav-bar');
const menuIcon = document.querySelector('.menu i');
const navList = document.querySelector('.nav-bar-list');

function openMenu() {
  nav.classList.add('.nav-bar');
  nav.style.background = '#272a31';
  menuIcon.classList.replace('fa-bars', 'fa-times');
  menuIcon.style.float = 'right';
  menuIcon.style.color = '#fff';
  navList.style.display = 'flex';
}

function closeMenu() {
  nav.classList.remove('.nav-bar');
  nav.style.background = 'transparent';
  menuIcon.classList.replace('fa-times', 'fa-bars');
  menuIcon.style.float = 'left';
  menuIcon.style.color = '#272a31';
  navList.style.display = 'none';
}

function menu() {
  if (navList.style.display === 'none') {
    openMenu();
  } else {
    closeMenu();
  }
}

menu();