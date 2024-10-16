document.addEventListener("DOMContentLoaded", function() {
    // Menu toggle
    let menu = document.querySelector('#menu-ico');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    };

    // ScrollReveal animations
    const sr = ScrollReveal({
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: false
    });

    sr.reveal('.hero-text', { delay: 200, origin: 'top' });
    sr.reveal('.hero-img', { delay: 450, origin: 'top' });
    sr.reveal('.icons', { delay: 450, origin: 'left' });

    sr.reveal('.about-text', { delay: 200, origin: 'top' });
    sr.reveal('.about-img', { delay: 450, origin: 'top' });
    sr.reveal('.meet-text', { delay: 200, origin: 'top' });
    sr.reveal('.team', { delay: 450, origin: 'top' });
    sr.reveal('.services-text', { delay: 200, origin: 'top' });
    sr.reveal('.services-list', { delay: 450, origin: 'top' });

    sr.reveal('.our-organization', { delay: 200, origin: 'left' });
    sr.reveal('.our-organization-img', { delay: 200, origin: 'right' });
    sr.reveal('.what-we-do', { delay: 200, origin: 'right' });
    sr.reveal('.what-we-do-images img', { delay: 200, origin: 'bottom', interval: 200 });
    sr.reveal('.what-we-do-section h1', { delay: 200, origin: 'top' });

    sr.reveal('.community h1', { delay: 200, origin: 'top' });
    sr.reveal('.community-item', { delay: 200, origin: 'bottom', interval: 200 });
    sr.reveal('.community-item-img img', { delay: 200, origin: 'bottom', interval: 200 });

    // Add animation for the whole news section
    sr.reveal('.news-content', { delay: 200, origin: 'bottom' });

    // Scroll Settings
    const scrollUpIcon = document.querySelector('.scroll-up i');
    const scrollUpContainer = document.querySelector('.scroll-up');
    const sections = document.querySelectorAll('section');

    scrollUpContainer.style.display = 'none';

    scrollUpIcon.onclick = (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', () => {
        const firstSectionHeight = sections[0].offsetHeight;
        if (window.scrollY > firstSectionHeight) {
            scrollUpContainer.style.display = 'block';
        } else {
            scrollUpContainer.style.display = 'none';
        }
    });

    // For transitioning cards
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
});