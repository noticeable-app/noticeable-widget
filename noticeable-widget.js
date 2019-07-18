(function () {
    var d = document;
    var head = d.head;
    var prefix = 'https://cdn.noticeable.io/v1/libs/';

    function importWebcomponentsLoaderAndWidget(loadPolyfill) {
        var webcomponentsLoaderScript = d.createElement('script');
        webcomponentsLoaderScript.src = prefix + 'webcomponentsjs/' + (loadPolyfill ? 'webcomponents-lite' : 'webcomponents-loader') + '.js';
        webcomponentsLoaderScript.onload = function () {
            var noticeableWidgetLink = document.createElement('link');
            noticeableWidgetLink.rel = 'import';
            noticeableWidgetLink.href = prefix + 'noticeable-widget/noticeable-widget.html';

            var cleanup = function () {
                noticeableWidgetLink.removeEventListener('load', loadListener);
                noticeableWidgetLink.removeEventListener('error', errorListener);
            };

            var loadListener = function (event) {
                cleanup();
            };

            var errorListener = function (event) {
                cleanup();
                noticeableWidgetLink.parentNode.removeChild(noticeableWidgetLink);
            };

            noticeableWidgetLink.setAttribute('import-href', '');
            noticeableWidgetLink.addEventListener('load', loadListener);
            noticeableWidgetLink.addEventListener('error', errorListener);

            head.appendChild(noticeableWidgetLink);
        };

        head.insertBefore(webcomponentsLoaderScript, head.firstChild);
    }

    if (window.customElements) {
        var customElementsAdapterScript = d.createElement('script');
        customElementsAdapterScript.src = prefix + 'webcomponentsjs/custom-elements-es5-adapter.js';
        customElementsAdapterScript.onload = function () {
            importWebcomponentsLoaderAndWidget(false);
        };

        head.insertBefore(customElementsAdapterScript, head.firstChild);
    } else {
        importWebcomponentsLoaderAndWidget(true);
    }
})();
