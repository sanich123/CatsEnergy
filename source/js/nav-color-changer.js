const currentLocation = document.location.href.slice(22);

if (currentLocation === 'catalog.html' || currentLocation === 'form.html') {
  const headerLinks = document.querySelectorAll('.nav-list__item');

  headerLinks.forEach((link) => {
    if (link.classList.contains('nav-list__item--active')) {
      link.firstChild.classList.add('green-stroke');
    }
    link.firstChild.style.color = 'black';
  });

}
