function renderNav() {

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
}

(function addInitialListeners() {
    // add click listener to header logo:
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', renderNav);
})();