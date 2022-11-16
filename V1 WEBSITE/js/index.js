//this code is to creat the navigator opener//


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open');
});

//This code is to make the navigator dissapear after reaching the link//

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

