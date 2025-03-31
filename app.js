const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scralling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;

  // To check for page number to know the px to put as used below (> 960...), we use the console below
  console.log(scrollPos);

  // Adds 'highlight' class to my menu items
  if(window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if(window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if(window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu)

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBar = document.querySelector('.is-active');
  if(window.innerWidth <= 760 && menuBar) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

gsap.from('.animate-about', {
  ScrollTrigger: 'animate-about',
  duration: 0.5,
  opacity: 1,
  x: -150,
  stagger: 0.12
});

gsap.from('.animate-about', {
  ScrollTrigger: 'animate-about',
  duration: 1.2,
  opacity: 0,
  y: -200,
});

gsap.from('.animate-services', {
  ScrollTrigger: 'animate-services',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5
});

gsap.from('.animate-features', {
  ScrollTrigger: 'animate-features',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.1,
  delay: 0.2
});

gsap.from('.animate-email', {
  ScrollTrigger: 'animate-email',
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 1
});