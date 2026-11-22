const intro = document.getElementById('intro');
const about = document.getElementById('about');

document.addEventListener('click', () => {
    intro.classList.add('hide');
    about.classList.remove('hide');
});