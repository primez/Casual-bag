'use strict';

/* global _*/

var calculator = function () {
    return {
        add: function add(x, y) {
            return x + y;
        }
    };
}();

window.catalog.sort(compare);
console.log(window.catalog);

function compare(a, b) {
    var aDate = new Date(a.dateAdded);
    var bDate = new Date(b.dateAdded);

    return -(aDate - bDate);
}

var tmpl = document.getElementById('ul-templ').innerHTML.trim();
tmpl = _.template(tmpl);
document.getElementById('holder').innerHTML = tmpl({
    items: window.catalog
});
"use strict";

/*global calculator*/

var sum = calculator.add(4, 7);
console.log(sum);
