const currentLocation = document.location.href.slice(22);

if (currentLocation === 'catalog.html' || currentLocation === 'form.html') {
  const headerLinks = document.querySelectorAll('.nav-list__item a');
  headerLinks.forEach((link) => link.style.color = 'black');
}
