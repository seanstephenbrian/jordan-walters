// module for page rendering functions:
const Render = (function() {

    // home:
    function home() {
        const main = document.querySelector('main');
        main.innerHTML = `
            <div class="home-projects">
                <div class="project third-derivative">third derivative</div>
                <div class="project remainder">remainder</div>
                <div class="project one-by-one">one by one</div>
                <div class="project druids">druids</div>
                <div class="project offroad">OFFROAD</div>
                <div class="project greenwood">greenwood</div>
                <div class="project dirty-delta">dirty delta</div>
            </div>
        `;
    }

    // nav:
    function nav() {

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

        assignColorsToNavElements();

        // add click listener to close icon and JW icon:
        closeIcon.addEventListener('click', closeNav);
        logoImg.addEventListener('click', closeNav);

        Effects.addBorderEffectListeners('.close-icon');
        Effects.addBorderEffectListeners('.nav-logo');

        const html = document.querySelector('html');
        html.style.overflowY = 'hidden';
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden';
    }

    function assignColorsToNavElements() {
        const root = document.documentElement;
    
        root.style.setProperty('--photography-hover', Effects.getRandomColor());
        root.style.setProperty('--architecture-hover', Effects.getRandomColor());
        root.style.setProperty('--sculpture-hover', Effects.getRandomColor());
        root.style.setProperty('--furniture-hover', Effects.getRandomColor());
        root.style.setProperty('--drawing-hover', Effects.getRandomColor());
    
        root.style.setProperty('--photography-hover-border', Effects.getRandomColor());
        root.style.setProperty('--architecture-hover-border', Effects.getRandomColor());
        root.style.setProperty('--sculpture-hover-border', Effects.getRandomColor());
        root.style.setProperty('--furniture-hover-border', Effects.getRandomColor());
        root.style.setProperty('--drawing-hover-border', Effects.getRandomColor());
    }

    function closeNav() {
        const nav = document.querySelector('nav');
        nav.remove();
    
        const html = document.querySelector('html');
        html.style.overflowY = 'initial';
        const body = document.querySelector('body');
        body.style.overflowY = 'initial';
    }

    return {
        home,
        nav
    }

})();

// module for special effects:
const Effects = (function() {

    function applyBorderEffect(e) {
        const element = e.target;

        element.style.color = getRandomColor();
        element.style.border = '0.5px solid ' + getRandomColor();

        setTimeout(() => {
            element.style.color = '';
            element.style.border = '';
        }, 105);

    }

    function addBorderEffectListeners(selector) {
        if (window.innerWidth > 749) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.addEventListener('mouseover', applyBorderEffect);
            });   
        }
    }

    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    addBorderEffectListeners('header *');

    return {
        getRandomColor,
        addBorderEffectListeners
    }

})();

// on page load:
(function() {
        // render homepage:
        Render.home();

        // add click listener to header elements:
        const logo = document.querySelector('.logo-container');
        logo.addEventListener('click', Render.nav);
        const jordan = document.querySelector('.jordan');
        jordan.addEventListener('click', Render.nav);
        const walters = document.querySelector('.walters');
        walters.addEventListener('click', Render.nav);
})();