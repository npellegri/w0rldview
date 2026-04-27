// Prevent default browser context menu when right-clicking inside Cytoscape containers
// This ensures Dash Cytoscape receives the right-click (cxttap) events.
(function () {
    function disableContextMenuForCy(id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            return false;
        }, false);
    }

    // Try to attach after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            disableContextMenuForCy('cytoscape-1');
            disableContextMenuForCy('cytoscape-2');
        });
    } else {
        disableContextMenuForCy('cytoscape-1');
        disableContextMenuForCy('cytoscape-2');
    }

    // If Cytoscape elements are added later, observe DOM and attach when they appear
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
            if (m.addedNodes && m.addedNodes.length) {
                m.addedNodes.forEach(function (node) {
                    if (node.id === 'cytoscape-1' || node.id === 'cytoscape-2') {
                        node.addEventListener('contextmenu', function (e) { e.preventDefault(); return false; }, false);
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
