/*=============== Toggle icon Navbar ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=============== Sroll action active link ===============*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => { 
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}; 

/*=============== Sticky Navbar ===============*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*========= Remove toggle icon and navbar when click navbar link (scroll) =========*/
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Initialize ScrollReveal
    const sr = ScrollReveal({ 
        distance: '20px', 
        duration: 2000,   
        delay: 200,       
        easing: 'ease',   
        reset: true       
    });

// Animations to elements
    sr.reveal('.home-content h3', {origin:'right'});
    sr.reveal('.home-content h1', { origin:'left'});
    sr.reveal('.home-content h3 span', { origin:'right' });
    sr.reveal('.home-content p', { origin:'left' });
    sr.reveal('.home-content .btn', { delay: 1000 });
    sr.reveal('.home-img img', { delay: 1200 });
 
    sr.reveal('.about h2.heading', {origin:'top'});
    sr.reveal('.about .projects-button', {origin:'left'});
    sr.reveal('.contact h2.heading', {origin:'top'});
    sr.reveal('.contact .btn', {origin:'left'});
    sr.reveal('.projects h2.heading', {origin:'top'});

// Get the typed-text element
const typedText = document.querySelector('.typed-text');

// The text you want to type
const targetText = "Frontend Developer";

// Current index of the character being typed
let charIndex = 0;

// Function to start typing animation
function type() {
    if (charIndex < targetText.length) {
        typedText.textContent += targetText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust the typing speed here (milliseconds)
    }
}

// Function to reset typing animation
function resetType() {
    typedText.textContent = '';
    charIndex = 0;
}

// Event listener for triggering typing animation
function startTypingAnimation() {
    resetType();
    type();
}

// Start the typing animation when the page loads
window.onload = startTypingAnimation;

// Add event listeners to trigger typing animation
document.querySelector('header nav a.logo').addEventListener('click', startTypingAnimation);

document.querySelector('header nav a[href="#home"]').addEventListener('click', startTypingAnimation);

document.querySelector('#menu-icon').addEventListener('click', startTypingAnimation);

window.addEventListener('scroll', () => {
    const homeSection = document.querySelector('.home');
    const scrolledPosition = window.scrollY;
    const homeSectionOffset = homeSection.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrolledPosition >= homeSectionOffset - windowHeight / 2) {
        startTypingAnimation();
    }
});






