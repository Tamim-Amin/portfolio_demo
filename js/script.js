// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');   // change icon on click
    navbar.classList.toggle('active');   // show/hide navbar
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document
                    .querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
            });
        }
    });

    // ===== Sticky header =====
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ===== Remove toggle icon and navbar when scrolling =====
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // sticky header


    // remove toggle icon and navbar when click navbar links (scroll)


    // animation footer on scroll
};

// window.onscroll = () => {


//     // sticky header


//     // remove toggle icon and navbar when click navbar links (scroll)


//     // animation footer on scroll

// }
// === Scroll Reveal Animation ===
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
});
