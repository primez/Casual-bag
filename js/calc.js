/* global _*/

let calculator = (function () {
    return {
        add: function (x, y) {
            return x + y;
        }
    };

})();

let headerTag = document.querySelector('header');
let navPanel = headerTag.querySelector('nav');
let dropdownButton = navPanel.querySelector('.switcher');
let dropdownContent = navPanel.querySelector('.nav-menu');
let openIcon = navPanel.querySelector('.nav-icon');
let closeIcon = navPanel.querySelector('.nav-icon-close');

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
    let aDate = new Date(a.dateAdded);
    let bDate = new Date(b.dateAdded);

    return - (aDate - bDate);
}

let tmpl = document.getElementById('ul-templ').innerHTML.trim();
tmpl = _.template(tmpl);
document.getElementById('holder').innerHTML = tmpl({
    items: window.catalog
});
