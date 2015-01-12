/*! Highlight JS Loader v2.0 | https://github.com/alidbg/highlight.js_loader */
(function() {
    'use strict';
    var doc = document;
    doc.write("\n<style>code{border-radius:.4em;word-wrap:normal;direction:ltr;white-space:pre;overflow:auto;max-height:50em;margin:.5em auto;padding:.5em;background-color:#eee;display:block}[class^=\"hljs-\"],[class*=\" hljs-\"]{margin:0;padding:0;}code .linum{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;text-align:right;float:left;padding:0;margin:.1em 1em .1em -1em;border-right:.1em solid}code .linum span{padding:0 .5em 0 1em;display:block}<\/style>");
    doc.addEventListener("DOMContentLoaded", function() {
        var code = doc.getElementsByTagName("code"), u = 'undefined', i = 0;
        for (i; i < code.length; i++) {
            var c = code[i], o = "onclick", s = "selhj(this)";
            if(c.getAttribute(o) == s) break;
            c.innerHTML = c.innerHTML.replace(/<br[^>]*>$/mgi, "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
            c.setAttribute(o, s);
            if (typeof hljs != u) hljs.highlightBlock(c);
            c.innerHTML = '<span class="linum"></span>' + c.innerHTML;
            var g = c.innerHTML.split(/\n/).length, a = 1;
            for (a; a <= g; a++)(c.getElementsByTagName("span")[0]).innerHTML += "<span>" + a + "</span>"
        }
        if (typeof jQuery != u && jQuery.fn.niceScroll) $("code").niceScroll()
    })
})();

var selhj = function(i) {
    if (!confirm("Select All?")) return 0;
    var r = document.createRange(),
        s = window.getSelection();
    s.removeAllRanges();
    r.setStart(i, 1);
    r.setEnd(i, i.childNodes.length);
    s.addRange(r)
};