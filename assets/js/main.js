/*** SHOW MENU ***/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*** REMOVE MENU MOBILE ***/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*** CHANGE BACKGROUND HEADER ***/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*** SCROLL UP ***/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*** SCROLL SECTIONS ACTIVE LINK ***/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*** SCROLLER ANIMATION ***/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__title, .section__title`, { delay: 600 })
sr.reveal(`.home__footer, .testimonial__img, .teams__subtitle`, { delay: 700, origin: 'left' })
sr.reveal(`.home__img`, { delay: 900, origin: 'top' })
sr.reveal(`#start h1,.categories__card, .footer__copy`, { origin: 'top', interval: 100 })
sr.reveal(`.features__data, .teams__data, .testimonial__animate, .features__row`, { origin: 'left', interval: 100 })
sr.reveal(`.features__img, .testimonial__img`, { origin: 'right' })
sr.reveal(`.about__img, .teams__text`, { origin: 'top' })
sr.reveal(`#start button, .home__subtitle, .teams__image-container`, { origin: 'bottom' })
sr.reveal(`.teams__name, .teams__sub, .button`, { delay: 500, origin: 'bottom', interval: 200 })


sr.reveal(`.about__data`)


/*** SWITCH ANIMATION ***/

const featuresImages = ['Design.png', 'Design2.png', 'Design3.png'];
const featuresImgElement = document.querySelector('.features__img');

let currentIndex = 0;

function changeFeatureImage() {
  featuresImgElement.style.transform = 'translateX(-100%)';
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % featuresImages.length;
    featuresImgElement.src = `assets/img/${featuresImages[currentIndex]}`;
    featuresImgElement.style.transform = 'translateX(0)';
  }, 300);
}

changeFeatureImage();
setInterval(changeFeatureImage, 5000);



const aboutImages = ['about.png'];
const aboutImgElement = document.querySelector('.about__img');

let currentIndex2 = 0;

function changeaboutImage() {
    aboutImgElement.classList.add('hide');
    setTimeout(() => {
        currentIndex2 = (currentIndex2 + 1) % aboutImages.length;
        aboutImgElement.src = `assets/img/${aboutImages[currentIndex2]}`;
        aboutImgElement.classList.remove('hide');
    }, 2000);
}

changeaboutImage();
setInterval(changeaboutImage, 6000);

/*** SLIDER ANIMATION AND RANDOM PICTURE ***/
const testimonialItems = document.querySelectorAll('.testimonial-item');
let currentItem = 0;

function showTestimonial(index) {
    testimonialItems.forEach(item => item.classList.remove('active'));
    testimonialItems[index].classList.add('active');
}

function generateRandomAvatarUrl() {
    const avatarId = Math.floor(Math.random() * 70) + 1; // Génère un nombre aléatoire entre 1 et 70
    return `https://i.pravatar.cc/150?img=${avatarId}`;
}

function setupTestimonials() {
    testimonialItems.forEach(item => {
        const avatarImg = item.querySelector('.testimonial-avatar');
        const avatarUrl = generateRandomAvatarUrl();
        avatarImg.src = avatarUrl;
    });
}

function nextTestimonial() {
    currentItem++;
    if (currentItem >= testimonialItems.length) {
        currentItem = 0;
    }
    showTestimonial(currentItem);
}

setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
showTestimonial(currentItem); // Show initial testimonial
setupTestimonials(); // Set up testimonials with random avatars
