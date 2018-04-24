(function () {
    var d = document;
    var head = d.getElementsByTagName('head')[0];
    var prefix = 'https://cdn.noticeable.io/v1/libs/';
    var script = d.createElement('script');

    function importWebcomponentsLoader() {
        var script2 = d.createElement('script');
        script2.src = prefix + 'webcomponentsjs/webcomponents-loader.js';
        script2.async = 1;
        script2.onload = function () {
            var link = document.createElement('link');
            link.rel = 'import';
            link.href = prefix + 'noticeable-widget/noticeable-widget.html';

            var cleanup = function () {
                link.removeEventListener('load', loadListener);
                link.removeEventListener('error', errorListener);
            };

            var loadListener = function (event) {
                cleanup();
            };

            var errorListener = function (event) {
                cleanup();
                link.parentNode.removeChild(l);
            };

            link.setAttribute('import-href', '');
            link.addEventListener('load', loadListener);
            link.addEventListener('error', errorListener);

            d.head.appendChild(link);
        };
        head.appendChild(script2);
    }

    if (window.customElements) {
        script.src = prefix + 'webcomponentsjs/custom-elements-es5-adapter.js';
        script.async = 1;
        script.onload = function () {
            importWebcomponentsLoader();
        };
        head.appendChild(script);
    } else {
        importWebcomponentsLoader();
    }
})();
