const menuToggler = document.querySelector('.header__toggler');
const navigation = document.querySelector('.nav');
const navClose = 'nav--closed';
const hamburgerClass = 'header__toggler--hamburger';
const closeClass = 'header__toggler--close';
navigation.classList.add(navClose);
menuToggler.classList.remove(closeClass);
menuToggler.classList.add(hamburgerClass);

menuToggler.addEventListener('click', () => {
  navigation.classList.toggle(navClose);
  if (menuToggler.classList.contains(hamburgerClass)) {
    menuToggler.classList.remove(hamburgerClass);
    menuToggler.classList.add(closeClass);
  } else {
    menuToggler.classList.remove(closeClass);
    menuToggler.classList.add(hamburgerClass);
  }
});
