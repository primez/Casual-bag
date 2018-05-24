'use strict';

/* global _*/

var calculator = function () {
    return {
        add: function add(x, y) {
            return x + y;
        }
    };
}();

var headerTag = document.querySelector('header');
var navPanel = headerTag.querySelector('nav');
var dropdownButton = navPanel.querySelector('.switcher');
var dropdownContent = navPanel.querySelector('.nav-menu');
var openIcon = navPanel.querySelector('.nav-icon');
var closeIcon = navPanel.querySelector('.nav-icon-close');

function switchVisibility() {
    headerTag.classList.toggle('push-content');
    dropdownContent.classList.toggle('dropdown-content');
    dropdownContent.classList.toggle('menu-border');
    openIcon.classList.toggle('dropdown-content');
    closeIcon.classList.toggle('dropdown-content');
    navPanel.classList.toggle('button-border');
}

dropdownButton.addEventListener('click', switchVisibility);

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
