const menuButton = document.getElementById('menu-button');
const navigationUL = document.querySelector('nav ul');
menuButton.addEventListener('click', () => {
    navigationUL.classList.toggle('open');
    if (navigationUL.classList.contains('open')) {
        menuButton.textContent = '\u2715'; 
    } else {
        menuButton.textContent = '\u2630'; 
    }
});