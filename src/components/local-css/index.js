// only a demo - ;D
var LocalCSS = function (css, html) {
    for (var p in css) {
        if (css.hasOwnProperty(p)) {
            var m = html.match(new RegExp('class[\\s]*=[\\s]*"[^"]*?' + p + '[^"]*?"', 'g'));
            (m || []).map(function (item) {
                html = html.replace(item, item.split('"' + p + '"').join('"' + css[p] + '"'));
                html = html.replace(item, item.split('"' + p + ' ').join('"' + css[p] + ' '));
                html = html.replace(item, item.split(' ' + p + '"').join(' ' + css[p] + '"'));
                html = html.replace(item, item.split(' ' + p + ' ').join(' ' + css[p] + ' '));
            });
        }
    }
    return html;
};

export default LocalCSS;
