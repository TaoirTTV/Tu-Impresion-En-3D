// Tu Impresión en 3D — consentimiento de cookies
// Ningún script de analítica o publicidad se carga hasta que el usuario lo acepta
// (art. 22.2 LSSI, RGPD y Guía sobre el uso de las cookies de la AEPD).
(function () {
    var KEY = 'tui3d-consent';
    var VERSION = 1;
    var MAX_AGE = 365 * 24 * 60 * 60 * 1000; // se vuelve a preguntar a los 12 meses
    var GA_ID = 'G-LY1S7E92S2';
    var CLARITY_ID = 'ktegsbj2gy';
    var ADS_CLIENT = 'ca-pub-9463405593849277';
    var loaded = { analytics: false, ads: false };
    var banner;

    function read() {
        try {
            var c = JSON.parse(localStorage.getItem(KEY));
            if (c && c.v === VERSION && Date.now() - c.t < MAX_AGE) return c;
        } catch (e) {}
        return null;
    }

    function save(analytics, ads) {
        var c = { v: VERSION, t: Date.now(), analytics: !!analytics, ads: !!ads };
        try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
        return c;
    }

    function addScript(src, crossorigin) {
        var s = document.createElement('script');
        s.async = true;
        s.src = src;
        if (crossorigin) s.crossOrigin = 'anonymous';
        document.head.appendChild(s);
    }

    function loadAnalytics() {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { dataLayer.push(arguments); };
        gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
        });
        gtag('js', new Date());
        gtag('config', GA_ID, { allow_google_signals: false });
        addScript('https://www.googletagmanager.com/gtag/js?id=' + GA_ID);

        window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
        addScript('https://www.clarity.ms/tag/' + CLARITY_ID);
        window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });
    }

    function loadAds() {
        addScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + ADS_CLIENT, true);
    }

    function apply(c) {
        if (c.analytics && !loaded.analytics) { loaded.analytics = true; loadAnalytics(); }
        if (c.ads && !loaded.ads) { loaded.ads = true; loadAds(); }
    }

    // Borra las cookies propias de analítica al retirar el consentimiento
    function clearAnalyticsCookies() {
        var host = location.hostname;
        var domains = ['', host, '.' + host, '.' + host.replace(/^www\./, '')];
        document.cookie.split(';').forEach(function (part) {
            var name = part.split('=')[0].trim();
            if (!/^(_ga|_gid|_gat|_clck|_clsk|CLID|ANONCHK|MR|MUID|SM)/.test(name)) return;
            domains.forEach(function (d) {
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
            });
        });
    }

    function decide(analytics, ads) {
        var prev = read();
        var c = save(analytics, ads);
        hide();
        if (prev && ((prev.analytics && !c.analytics) || (prev.ads && !c.ads))) {
            // Los scripts ya cargados no se pueden descargar: limpiamos y recargamos
            clearAnalyticsCookies();
            location.reload();
            return;
        }
        apply(c);
    }

    function build() {
        banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-labelledby', 'cc-title');
        banner.setAttribute('aria-describedby', 'cc-desc');
        banner.hidden = true;
        banner.innerHTML =
            '<div class="cookie-inner">' +
                '<h2 id="cc-title">Tu privacidad</h2>' +
                '<p id="cc-desc">Usamos cookies técnicas, necesarias para que la web funcione, y, solo si nos das tu consentimiento, cookies de terceros para analizar cómo se usa la web (Google Analytics y Microsoft Clarity) y para mostrar publicidad (Google AdSense). Puedes aceptarlas, rechazarlas o elegir cuáles permites, y cambiar de opinión en cualquier momento desde «Configurar cookies» en el pie de página. Más información en nuestra <a href="/cookies.html">política de cookies</a>.</p>' +
                '<div class="cookie-prefs" hidden>' +
                    '<label class="cookie-opt"><input type="checkbox" checked disabled><span><strong>Técnicas (siempre activas)</strong>Imprescindibles para que la web funcione y para recordar tu elección sobre las cookies.</span></label>' +
                    '<label class="cookie-opt"><input type="checkbox" name="analytics"><span><strong>Analíticas</strong>Google Analytics y Microsoft Clarity: estadísticas de visitas y de uso de la web para mejorarla.</span></label>' +
                    '<label class="cookie-opt"><input type="checkbox" name="ads"><span><strong>Publicitarias</strong>Google AdSense: muestra anuncios en el blog y puede personalizarlos según tu navegación.</span></label>' +
                '</div>' +
                '<div class="cookie-actions">' +
                    '<button type="button" class="btn btn-ghost" data-cc="reject">Rechazar todas</button>' +
                    '<button type="button" class="btn btn-ghost" data-cc="config">Configurar</button>' +
                    '<button type="button" class="btn btn-ghost" data-cc="save" hidden>Guardar mi selección</button>' +
                    '<button type="button" class="btn btn-ghost" data-cc="accept">Aceptar todas</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(banner);

        banner.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-cc]');
            if (!btn) return;
            var action = btn.getAttribute('data-cc');
            if (action === 'accept') decide(true, true);
            else if (action === 'reject') decide(false, false);
            else if (action === 'config') showPrefs();
            else if (action === 'save') {
                decide(banner.querySelector('[name="analytics"]').checked, banner.querySelector('[name="ads"]').checked);
            }
        });
    }

    function showPrefs() {
        var c = read() || {};
        banner.querySelector('[name="analytics"]').checked = !!c.analytics;
        banner.querySelector('[name="ads"]').checked = !!c.ads;
        banner.querySelector('.cookie-prefs').hidden = false;
        banner.querySelector('[data-cc="config"]').hidden = true;
        banner.querySelector('[data-cc="save"]').hidden = false;
    }

    function show(withPrefs) {
        if (!banner) build();
        banner.querySelector('.cookie-prefs').hidden = true;
        banner.querySelector('[data-cc="config"]').hidden = false;
        banner.querySelector('[data-cc="save"]').hidden = true;
        if (withPrefs) showPrefs();
        banner.hidden = false;
        banner.querySelector('h2').setAttribute('tabindex', '-1');
        if (withPrefs) banner.querySelector('h2').focus();
    }

    function hide() {
        if (banner) banner.hidden = true;
    }

    var current = read();
    if (current) apply(current);

    function init() {
        if (!current) show(false);
        document.addEventListener('click', function (e) {
            if (e.target.closest('[data-cookie-settings]')) {
                e.preventDefault();
                show(true);
            }
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
