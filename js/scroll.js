const about = document.querySelector('.about__text');
const skills = document.querySelector('.skills');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');

const aboutBtn = document.querySelector('.aboutBtn');
const skillsBtn = document.querySelector('.skillsBtn');
const projectsBtn = document.querySelector('.projectsBtn');
const contactBtn = document.querySelector('.contactBtn');
const readMoreBtn = document.querySelector('.readMoreBtn');
const contactMeBtn = document.querySelector('.contactMeBtn');
const scrollBtn = document.querySelector('.header__icon');

// Scrollers
const scrollToAbout = () => {
    about.scrollIntoView({ behavior: 'smooth' });
};

const scrollToSkills = () => {
    skills.scrollIntoView({ behavior: 'smooth' });
};

const scrollToProjects = () => {
    projects.scrollIntoView({ behavior: 'smooth' });
};

const scrollToContact = () => {
    contact.scrollIntoView({ behavior: 'smooth' });
};

// Event listeners
scrollBtn.addEventListener('click', scrollToAbout);
aboutBtn.addEventListener('click', scrollToAbout);
skillsBtn.addEventListener('click', scrollToSkills);
projectsBtn.addEventListener('click', scrollToProjects);
contactBtn.addEventListener('click', scrollToContact);
readMoreBtn.addEventListener('click', scrollToAbout);
contactMeBtn.addEventListener('click', scrollToContact);

// TYPEIT
new TypeIt('#typeIt', {
    strings: ['developer', 'student', 'norwegian', 'creator'],
    breakLines: false,
    loop: true,
    speed: 125,
    startDelay: 400,
    nextStringDelay: 1000
}).go();
