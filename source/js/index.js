const currentLocation = document.location.href.slice(22);

if (currentLocation === 'catalog.html' || currentLocation === 'form.html') {
  const headerLinks = document.querySelectorAll('.nav-list__item a');
  headerLinks.forEach((link) => link.style.color = 'black');
}

const declineBtn = document.querySelector('.header__toggler');
const navigation = document.querySelector('.nav');
navigation.classList.add('nav--closed');

declineBtn.addEventListener('click', () => {
  navigation.classList.toggle('nav--closed');
  if (declineBtn.classList.contains('active')) {
    declineBtn.classList.remove('active');
    declineBtn.classList.add('passive');
  } else {
    declineBtn.classList.remove('passive');
    declineBtn.classList.add('active');
  }

});



