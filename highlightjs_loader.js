/* Highlight JS Loader v1.0
(c)2015 Ali.Dbg, MIT License
https://github.com/alidbg/highlight.js_loader
*/
function loadhj() {
    var code = document.getElementsByTagName("code"), l = code.length, u = 'undefined', i = 0;
    for (i; i < l; i++) {
        code[i].setAttribute("onclick", "selhj(this)");
        code[i].innerHTML = code[i].innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
        if (typeof hljs != u) hljs.highlightBlock(code[i]);
        code[i].innerHTML = '<span class="line-number"></span>' + code[i].innerHTML;
        var g = code[i].innerHTML.split(/\n/g).length, a = 1;
        for (a; a <= g; a++) {
            var b = code[i].getElementsByTagName("span")[0];
            b.innerHTML += "<span>" + (a) + "</span>"
        }
    }
    if (typeof jQuery != u && jQuery.fn.niceScroll) $("code").niceScroll()
};

function selhj(i) {
    if (!confirm("Select All?")) return;
    try{r = document.createRange();
        s = window.getSelection();
        s.removeAllRanges();
        r.setStart(i, 1);
        r.setEnd(i, i.childNodes.length);
        s.addRange(r)
        } catch (e) {
        var t = document.body.createTextRange();
        t.moveToElementText(i);
        t.select()
    }
};

function writehjcss() {
    var c = "\n";
    c+= "<style type=\"text\/css\">";
    c+= "code {";
    c+= "-webkit-border-radius: .4em;";
    c+= "-moz-border-radius: .4em;";
    c+= "border-radius: .4em;";
    c+= "direction: ltr;";
    c+= "white-space: pre;";
    c+= "overflow:auto;"
    c+= "max-height: 60em;";
    c+= "margin: .5em auto;";
    c+= "padding: .5em;";
    c+= "background-color: #F1F1F1;";
    c+= "display: block}";
    c+= "code .line-number {";
    c+= "-webkit-user-select: none;";
    c+= "-moz-user-select: none;";
    c+= "-ms-user-select: none;";
    c+= "user-select: none;";
    c+= "margin: .1em 1em .1em -1em;";
    c+= "border-right: 1px solid;";
    c+= "text-align: right;";
    c+= "float: left;";
    c+= "display: block}";
    c+= "code .line-number span {";
    c+= "padding: 0 .5em 0 1em;";
    c+= "display: block}";
    c+= "<\/style>";
    return c
};

document.write( writehjcss() );
window.onload = function () { loadhj() };