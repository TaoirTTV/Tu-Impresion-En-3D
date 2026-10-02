// Tu Impresión en 3D — interacciones comunes
(function () {
    // Menú móvil
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('main-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.addEventListener('click', function (e) {
            if (e.target.closest('a')) {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.focus();
            }
        });
    }

    // Galería de producto
    document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
        var slides = gallery.querySelectorAll('.gallery-main img');
        var thumbs = gallery.querySelectorAll('.gallery-thumbs button');
        if (slides.length < 2) return;
        var current = 0;

        function show(i) {
            current = (i + slides.length) % slides.length;
            slides.forEach(function (s, n) { s.classList.toggle('is-active', n === current); });
            thumbs.forEach(function (t, n) { t.setAttribute('aria-current', n === current ? 'true' : 'false'); });
        }

        gallery.querySelector('.gallery-btn.prev').addEventListener('click', function () { show(current - 1); });
        gallery.querySelector('.gallery-btn.next').addEventListener('click', function () { show(current + 1); });
        thumbs.forEach(function (t, n) { t.addEventListener('click', function () { show(n); }); });
    });

    // Selector de variante con enlace de pedido (p. ej. tamaño de foto)
    document.querySelectorAll('[data-variant-select]').forEach(function (select) {
        var button = document.getElementById(select.getAttribute('data-variant-select'));
        if (!button) return;
        function update() {
            var opt = select.options[select.selectedIndex];
            button.href = opt.getAttribute('data-url');
            var price = document.querySelector('[data-variant-price]');
            if (price) price.textContent = opt.getAttribute('data-price');
        }
        select.addEventListener('change', update);
        update();
    });

    // Vídeos de YouTube: el reproductor solo se carga cuando el usuario lo pide
    document.querySelectorAll('[data-youtube]').forEach(function (box) {
        box.querySelector('button').addEventListener('click', function () {
            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube-nocookie.com/embed/' + box.getAttribute('data-youtube') + '?autoplay=1';
            iframe.title = box.getAttribute('data-title');
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;
            box.replaceWith(iframe);
        });
    });

    // Año actual en el pie
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
})();
