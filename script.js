function addBorderEffectListeners(selector) {
    if (window.innerWidth > 749) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.addEventListener('mouseover', delayedBorderReveal);
        });   
    }
}


function delayedBorderReveal(e) {
    const element = e.target;

    setTimeout(() => {
        element.style.color = getRandomColor();
        element.style.border = '0.5px solid ' + getRandomColor();
        
        setTimeout(() => {
            element.style.color = '';
            element.style.border = '';
        }, 400);

    }, 100);
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

addBorderEffectListeners('header *');


function renderNav() {

    // render nav elements:
    const header = document.querySelector('header');
    const nav = document.createElement('nav');
    header.appendChild(nav);

        const navItems = document.createElement('ul');
        navItems.className = 'nav-items';
        nav.appendChild(navItems);

            const close = document.createElement('li');
            close.classList.add('nav-item', 'close');
            navItems.appendChild(close);

                const closeIcon = document.createElement('img');
                closeIcon.classList.add('close-icon');
                closeIcon.src = 'img/svg/close.svg';
                closeIcon.setAttribute('alt', 'close menu');
                close.appendChild(closeIcon);

            const photography = document.createElement('li');
            photography.textContent = 'photography';
            photography.classList.add('nav-item', 'photography');
            navItems.appendChild(photography);

            const architecture = document.createElement('li');
            architecture.textContent = 'architecture';
            architecture.classList.add('nav-item', 'architecture');
            navItems.appendChild(architecture);

            const sculpture = document.createElement('li');
            sculpture.textContent = 'sculpture';
            sculpture.classList.add('nav-item', 'sculpture');
            navItems.appendChild(sculpture);

            const furniture = document.createElement('li');
            furniture.textContent = 'furniture';
            furniture.classList.add('nav-item', 'furniture');
            navItems.appendChild(furniture);

            const drawing = document.createElement('li');
            drawing.textContent = 'drawing';
            drawing.classList.add('nav-item', 'drawing');
            navItems.appendChild(drawing);

            const logoContainer = document.createElement('li');
            logoContainer.className = 'logo-container';
            navItems.appendChild(logoContainer);

                const logoImg = document.createElement('img');
                logoImg.classList.add('nav-logo');
                logoImg.src = 'img/logo/round.png';
                logoContainer.appendChild(logoImg);

    // add click listener to close icon and JW icon:
    closeIcon.addEventListener('click', closeNav);
    logoImg.addEventListener('click', closeNav);

    addBorderEffectListeners('.close-icon');
    addBorderEffectListeners('.nav-logo');

    const html = document.querySelector('html');
    html.style.overflowY = 'hidden';
    const body = document.querySelector('body');
    body.style.overflowY = 'hidden';

}

function closeNav() {
    const nav = document.querySelector('nav');
    nav.remove();

    const html = document.querySelector('html');
    html.style.overflowY = 'initial';
    const body = document.querySelector('body');
    body.style.overflowY = 'initial';
}

(function addInitialListeners() {
    // add click listener to header logo:
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', renderNav);
})();