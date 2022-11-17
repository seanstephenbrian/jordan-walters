// module for page rendering functions:
const Render = (function() {

    // home:
    function home() {
        const main = document.querySelector('main');
        main.innerHTML = `
            <div class="home-projects">
                <div class="project project-1 left-column third-derivative">
                    <div class="bg">
                        <span class="project-title">
                            third derivative
                        </span>
                    </div>
                </div>
                <div class="x-divider x-divider-1"></div>
                <div class="project project-2 left-column remainder">
                    <div class="bg">
                        <span class="project-title">
                            remainder
                        </span>
                    </div>
                </div>
                <div class="x-divider x-divider-2"></div>
                <div class="project project-3 left-column one-by-one">
                    <div class="bg">
                        <span class="project-title">
                            one by one
                        </span>
                    </div>
                </div>
                <div class="x-divider x-divider-3"></div>
                <div class="project project-4 left-column druids">
                    <div class="bg">
                        <span class="project-title">
                            druids
                        </span>
                    </div>
                </div>
                <div class="y-divider"></div>
                <div class="project project-5 right-column offroad">
                    <div class="bg">
                        <span class="project-title">
                            OFFROAD
                        </span>
                    </div>
                </div>
                <div class="x-divider x-divider-5"></div>
                <div class="project project-6 right-column greenwood">
                    <div class="bg">
                        <span class="project-title">
                            greenwood
                        </span>
                    </div>
                </div>
                <div class="x-divider x-divider-6"></div>
                <div class="project project-7 right-column dirty-delta">
                    <div class="bg">
                        <span class="project-title">
                            dirty delta
                        </span>
                    </div>
                </div>
            </div>
        `;

        Effects.randomizeMargins('.project');

    }

    // nav:
    function nav() {

        // hide content in <main> section:
        const main = document.querySelector('main');
        main.style.display = 'none';

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
        if (window.innerWidth > 749) {
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
    }

    // not strictly necessary, but . . .
    function removeNavColorAssignments() {
        const root = document.documentElement;

        root.style.setProperty('--photography-hover', '');
        root.style.setProperty('--architecture-hover', '');
        root.style.setProperty('--sculpture-hover', '');
        root.style.setProperty('--furniture-hover', '');
        root.style.setProperty('--drawing-hover', '');
    
        root.style.setProperty('--photography-hover-border', '');
        root.style.setProperty('--architecture-hover-border', '');
        root.style.setProperty('--sculpture-hover-border', '');
        root.style.setProperty('--furniture-hover-border', '');
        root.style.setProperty('--drawing-hover-border', '');
    }

    function closeNav() {
        const nav = document.querySelector('nav');
        nav.remove();

        // show main content again:
        const main = document.querySelector('main');
        main.style.display = '';

        // allow y-axis scrolling again:
        const html = document.querySelector('html');
        html.style.overflowY = '';
        const body = document.querySelector('body');
        body.style.overflowY = '';
    
        removeNavColorAssignments();
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
        }, 120);

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

    function randomizeMargins(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const top = Math.floor(Math.random() * 60);
            const right = Math.floor(Math.random() * 10);
            const bottom = Math.floor(Math.random() * 3);
            const left = Math.floor(Math.random() * 10);
            element.style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
        })
        
    }

    addBorderEffectListeners('header *');

    return {
        getRandomColor,
        addBorderEffectListeners,
        randomizeMargins
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