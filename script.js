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

    function assignColorsToNavElements() {
        if (window.innerWidth > 749) {
            const nav = document.querySelector('nav');
    
            nav.style.setProperty('--photography-hover', getRandomColor());
            nav.style.setProperty('--architecture-hover', getRandomColor());
            nav.style.setProperty('--sculpture-hover', getRandomColor());
            nav.style.setProperty('--furniture-hover', getRandomColor());
            nav.style.setProperty('--drawing-hover', getRandomColor());

            nav.style.setProperty('--photography-hover-border', getRandomColor());
            nav.style.setProperty('--architecture-hover-border', getRandomColor());
            nav.style.setProperty('--sculpture-hover-border', getRandomColor());
            nav.style.setProperty('--furniture-hover-border', getRandomColor());
            nav.style.setProperty('--drawing-hover-border', getRandomColor());
        }
    }

    // function assignColorsToPageElements() {
    //     if (window.innerWidth > 749) {
    //         const main = document.querySelector('main');

    //         main.style.setProperty('--y-divider-hover', getRandomColor());

    //         main.style.setProperty('--x-divider-1-hover', getRandomColor());
    //         main.style.setProperty('--x-divider-2-hover', getRandomColor());
    //         main.style.setProperty('--x-divider-3-hover', getRandomColor());
    //         main.style.setProperty('--x-divider-5-hover', getRandomColor());
    //         main.style.setProperty('--x-divider-6-hover', getRandomColor());

    //         main.style.setProperty('--project-1-hover', getRandomColor());
    //         main.style.setProperty('--project-2-hover', getRandomColor());
    //         main.style.setProperty('--project-3-hover', getRandomColor());
    //         main.style.setProperty('--project-4-hover', getRandomColor());
    //         main.style.setProperty('--project-5-hover', getRandomColor());
    //         main.style.setProperty('--project-6-hover', getRandomColor());
    //         main.style.setProperty('--project-7-hover', getRandomColor());

    //         main.style.setProperty('--bg-1-hover', getRandomColor());
    //         main.style.setProperty('--bg-2-hover', getRandomColor());
    //         main.style.setProperty('--bg-3-hover', getRandomColor());
    //         main.style.setProperty('--bg-4-hover', getRandomColor());
    //         main.style.setProperty('--bg-5-hover', getRandomColor());
    //         main.style.setProperty('--bg-6-hover', getRandomColor());
    //         main.style.setProperty('--bg-7-hover', getRandomColor());

    //         main.style.setProperty('--project-title-1-hover', getRandomColor());
    //         main.style.setProperty('--project-title-2-hover', getRandomColor());
    //         main.style.setProperty('--project-title-3-hover', getRandomColor());
    //         main.style.setProperty('--project-title-4-hover', getRandomColor());
    //         main.style.setProperty('--project-title-5-hover', getRandomColor());
    //         main.style.setProperty('--project-title-6-hover', getRandomColor());
    //         main.style.setProperty('--project-title-7-hover', getRandomColor());

    //         main.style.setProperty('--project-title-1-text', getRandomColor());
    //         main.style.setProperty('--project-title-2-text', getRandomColor());
    //         main.style.setProperty('--project-title-3-text', getRandomColor());
    //         main.style.setProperty('--project-title-4-text', getRandomColor());
    //         main.style.setProperty('--project-title-5-text', getRandomColor());
    //         main.style.setProperty('--project-title-6-text', getRandomColor());
    //         main.style.setProperty('--project-title-7-text', getRandomColor());
    //     }
    // }

    function randomizeMargins(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const top = Math.floor(Math.random() * 60);
            const right = Math.floor(Math.random() * 15);
            const bottom = Math.floor(Math.random() * 3);
            // const left = Math.floor(Math.random() * 2);
            element.style.margin = `${top}px ${right}px ${bottom}px 0`;
        })
        
    }

    return {
        getRandomColor,
        addBorderEffectListeners,
        randomizeMargins,
        assignColorsToNavElements,
        // assignColorsToPageElements
    }

})();

// module for page rendering functions:
const Render = (function() {

    // home:
    function home() {
        const main = document.querySelector('main');
        main.innerHTML = `
            <div class="home-projects">
                <div class="project project-1 left-column third-derivative">
                    <div class="bg bg-1">
                        <span class="project-title project-title-1">
                            third derivative
                        </span>
                    </div>
                </div>
                <div class="x-divider x-divider-1"></div>
                <div class="project project-2 left-column remainder">
                    <div class="bg bg-2">
                        <span class="project-title project-title-2">
                            remainder
                        </span>
                    </div>
                </div>
                <div class="x-divider x-divider-2"></div>
                <div class="project project-3 left-column one-by-one">
                    <div class="bg bg-3">
                        <span class="project-title project-title-3">
                            one by one
                        </span>
                    </div>
                </div>
                <div class="x-divider x-divider-3"></div>
                <div class="project project-4 left-column druids">
                    <div class="bg bg-4">
                        <span class="project-title project-title-4">
                            druids
                        </span>
                    </div>
                </div>
                <div class="y-divider"></div>
                <div class="project project-5 right-column offroad">
                    <div class="bg bg-5">
                        <span class="project-title project-title-5">
                            OFFROAD
                        </span>
                    </div>
                </div>
                <div class="x-divider x-divider-5"></div>
                <div class="project project-6 right-column greenwood">
                    <div class="bg bg-6">
                        <span class="project-title project-title-6">
                            greenwood
                        </span>
                    </div>
                </div>
                <div class="x-divider x-divider-6"></div>
                <div class="project project-7 right-column dirty-delta">
                    <div class="bg bg-7">
                        <span class="project-title project-title-7">
                            dirty delta
                        </span>
                    </div>
                </div>
            </div>
        `;

        Effects.randomizeMargins('.project');
        // Effects.assignColorsToPageElements();

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

        Effects.assignColorsToNavElements();

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
    
    }

    return {
        home,
        nav
    }

})();

// on page load:
(function() {
        // render homepage:
        Render.home();

        // add dynamic border effects to header & main elements:
        Effects.addBorderEffectListeners('header *');
        Effects.addBorderEffectListeners('main *');

        // add click listener to header elements:
        const logo = document.querySelector('.logo-container');
        logo.addEventListener('click', Render.nav);
        const jordan = document.querySelector('.jordan');
        jordan.addEventListener('click', Render.nav);
        const walters = document.querySelector('.walters');
        walters.addEventListener('click', Render.nav);
})();