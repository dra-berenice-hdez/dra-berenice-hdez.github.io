document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la fecha actual
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString();

    // Ocultar el menú superior al hacer scroll hacia abajo
    let lastScrollTop = 0;
    const topMenu = document.getElementById('top-menu');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll hacia abajo
            topMenu.classList.add('hidden');
        } else {
            // Scroll hacia arriba
            topMenu.classList.remove('hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
    });

    // Navegación suave para el menú inferior
    document.querySelectorAll('#bottom-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});