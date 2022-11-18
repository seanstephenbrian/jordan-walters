// module for special effects:
const Effects = (function() {

    function applyBorderEffect(e) {
        const element = e.target;

        element.style.color = getRandomColor();
        const num = (Math.floor(Math.random() * 11) + 5) / 10;
        element.style.border = num + 'px solid ' + getRandomColor();

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

    function assignColorToPageTitle() {
        if (window.innerWidth > 749) {
            const pageTitle = document.querySelector('.page-title');
            pageTitle.style.setProperty('--page-title-hover', getRandomColor());
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
        assignColorToPageTitle
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

        // add dynamic border effects to header & main elements:
        Effects.addBorderEffectListeners('header *');
        Effects.addBorderEffectListeners('main *');
        // randomize margins around project preview images:
        Effects.randomizeMargins('.project');

        // add click listeners for photo project pages:
        addProjectClickListener('third derivative', '2022', 'third-derivative', 40);
        addProjectClickListener('remainder', '2020', 'remainder', 20);
        addProjectClickListener('one by one', '2017 - ongoing', 'one-by-one', 6);
        addProjectClickListener('druids', '2016 - 2019', 'druids', 24);
        addProjectClickListener('offroad', '2020', 'offroad', 10);
        addProjectClickListener('greenwood', '2019', 'greenwood', 17);
        addProjectClickListener('dirty delta', '2018', 'dirty-delta', 19);

    }

    // method to add a click listener which renders a project page:
    function addProjectClickListener(title, date, path, length) {
        const link = document.querySelector(`.${path}`);
        link.addEventListener('click', () => {
            project(title, date, path, length);
        });
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

        // add click listener to close icon and JW icon:
        closeIcon.addEventListener('click', closeNav);
        logoImg.addEventListener('click', closeNav);

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

        // assign random :hover border colors to nav elements, add border effect to only the icons:
        Effects.assignColorsToNavElements();
        Effects.addBorderEffectListeners('.close-icon');
        Effects.addBorderEffectListeners('.nav-logo');

        // hide y overflow:
        const html = document.querySelector('html');
        html.style.overflowY = 'hidden';
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden';

        // add click listeners to nav items:
        // (for now the only one is 'photography', which just re-renders the home view:)
        const photoLink = document.querySelector('.photography');
        photoLink.addEventListener('click', () => {
            home();
            closeNav();
        });

    }

    // project:
    function project(projectTitle, projectDate, projectPath, projectLength) {

        // clear contents on main section:
        const main = document.querySelector('main');
        main.classList.add('project-page');
        main.innerHTML = '';

        // create page elements:

        const title = document.createElement('div');
        title.className = 'page-title';
        title.textContent = projectTitle;
        main.appendChild(title);

            const date = document.createElement('div');
            date.className = 'date';
            date.textContent = projectDate;
            title.appendChild(date);

        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        main.appendChild(wrapper);

            // create containers for 'back' icon, image, and 'forward' icon:
            const backContainer = document.createElement('div');
            backContainer.className = 'back-container';
            wrapper.appendChild(backContainer);

                const back = document.createElement('img');
                back.classList.add('back', 'hide');
                back.src = 'img/svg/back.svg';
                back.setAttribute('alt', 'previous photo');
                backContainer.appendChild(back);

                // create empty div to hook previous image preview onto:
                const previous = document.createElement('div');
                previous.className = 'previous';
                backContainer.appendChild(previous);
                
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            wrapper.appendChild(imageContainer);

                const image = document.createElement('img');
                image.className = 'image';
                // load the first project image:
                image.setAttribute('src', `img/projects/${projectPath}/1.jpg`);
                // set dataset-index and dataset-length which will be used by the changePhoto function:
                image.dataset.project = projectPath;
                image.dataset.index = 1;
                image.dataset.length = projectLength;
                imageContainer.appendChild(image);

            const forwardContainer = document.createElement('div');
            forwardContainer.className = 'forward-container';
            wrapper.appendChild(forwardContainer);

                const forward = document.createElement('img');
                forward.className = 'forward';
                forward.src = 'img/svg/forward.svg';
                forward.setAttribute('alt', 'next photo');
                forwardContainer.appendChild(forward);

                // create empty div to hook next image preview onto:
                const next = document.createElement('div');
                next.className = 'next';
                forwardContainer.appendChild(next);

        // add listeners to forward/back icons:
        back.addEventListener('click', () => {
            changeImage('back');
        });
        forward.addEventListener('click', () => {
            changeImage('forward');
        })
        
        // add effects to page title: 
        Effects.addBorderEffectListeners('.page-title');
        title.addEventListener('mouseover', () => {
            Effects.assignColorToPageTitle();
        });
    }

    function changeImage(direction) {
        const image = document.querySelector('.image');
        const projectPath = image.dataset.project;
        const currentIndex = parseInt(image.dataset.index);
        const projectLength = parseInt(image.dataset.length);
        let nextIndex;
        if (direction === 'back') {
            nextIndex = currentIndex - 1;
        } else if (direction === 'forward') {
            nextIndex = currentIndex + 1;
        }
        image.src = `img/projects/${projectPath}/${nextIndex}.jpg`;
        image.dataset.index = nextIndex;

        // hide back button if index is 1, make sure it is visible if not:
        const back = document.querySelector('.back');
        if (nextIndex === 1) {
            
            back.classList.add('hide');
        } else {
            back.classList.remove('hide');
        }
        // hide forward button if index = projectLength, make sure it is visible if not: 
        const forward = document.querySelector('.forward');
        if (nextIndex === projectLength) {
            forward.classList.add('hide');
        } else {
            forward.classList.remove('hide');
        }

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

        

        // add click listener to header elements:
        const logo = document.querySelector('.logo-container');
        logo.addEventListener('click', Render.nav);
        const jordan = document.querySelector('.jordan');
        jordan.addEventListener('click', Render.nav);
        const walters = document.querySelector('.walters');
        walters.addEventListener('click', Render.nav);
})();