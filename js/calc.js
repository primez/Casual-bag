/* global _*/

let calculator = (function () {
    return {
        add: function (x, y) {
            return x + y;
        }
    };

})();

window.catalog.sort(compare);
console.log(window.catalog);

function compare(a, b) {
    let aDate = new Date(a.dateAdded);
    let bDate = new Date(b.dateAdded);

    return - (aDate - bDate);
}

let tmpl = document.getElementById('ul-templ').innerHTML.trim();
tmpl = _.template(tmpl);
document.getElementById('holder').innerHTML = tmpl({
    items: window.catalog
});
