document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var href = link.getAttribute('href');
            var targetID = link.getAttribute('data-target');

            if (href.startsWith('#')) {
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else {
                var targetPage = href.split('#')[0];
                var targetAnchor = href.split('#')[1];

                window.location.href = targetPage + '#' + targetAnchor;

                window.addEventListener('load', function() {
                    var target = document.querySelector('#' + targetAnchor);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });

                        // Remove o hash da barra de endereço após a rolagem
                        window.history.replaceState(null, null, targetPage);
                    }
                });
            }
        });
    });

    if (window.location.hash) {
        var target = document.querySelector(window.location.hash);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Remove o hash da barra de endereço após a rolagem
            window.history.replaceState(null, null, window.location.pathname);
        }
    }
});