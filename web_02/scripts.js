document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('nav');
    const toggle = document.createElement('div');
    toggle.innerHTML = '&#9776;';
    toggle.className = 'nav-toggle';
    document.body.insertBefore(toggle, nav);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
