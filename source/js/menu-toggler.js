const menuToggler = document.querySelector('.header__toggler');
const navigation = document.querySelector('.nav');
const navClose = 'nav--closed';
const openClass = 'header__toggler--open';
const closeClass = 'header__toggler--close';
navigation.classList.add(navClose);
menuToggler.classList.remove(closeClass);
menuToggler.classList.add(openClass);

menuToggler.addEventListener('click', () => {
  navigation.classList.toggle(navClose);
  if (menuToggler.classList.contains(openClass)) {
    menuToggler.classList.remove(openClass);
    menuToggler.classList.add(closeClass);
  } else {
    menuToggler.classList.remove(closeClass);
    menuToggler.classList.add(openClass);
  }
});
