document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Scroll Animation Logic (Optimized) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible to save memory
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // --- 2. Side Menu Logic (Safe Mode for Scalability) ---
    const menuToggleBtn = document.getElementById('menu-toggle');
    const closeMenuBtn = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    // Only run menu logic if the elements actually exist on the page
    if (sideMenu && menuOverlay) {
        function openMenu() {
            sideMenu.classList.add('open');
            menuOverlay.classList.add('open');
            document.body.style.overflow = 'hidden'; 
        }

        function closeMenu() {
            sideMenu.classList.remove('open');
            menuOverlay.classList.remove('open');
            document.body.style.overflow = ''; 
        }

        if (menuToggleBtn) menuToggleBtn.addEventListener('click', openMenu);
        if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);
    }
});