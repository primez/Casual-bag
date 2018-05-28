/* global _*/

let itemsTemplate = (function () {
    let newArrivalsTemplate = document.getElementById('ul-templ').innerHTML.trim();
    return {
        newArrivals: _.template(newArrivalsTemplate)
        };
})();