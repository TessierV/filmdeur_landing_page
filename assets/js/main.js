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

/*** CLOSE MODAL ***/
function openModal() {
    var modal = document.getElementById("video_modal");
    modal.style.display = "block";
    var video = document.getElementById("modalVideo");
    video.play();
}

function closeModal() {
    var modal = document.getElementById("video_modal");
    modal.style.display = "none";
    var video = document.getElementById("modalVideo");
    video.pause();
    video.currentTime = 0;
}

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

setInterval(nextTestimonial, 5000);
showTestimonial(currentItem);
setupTestimonials();
