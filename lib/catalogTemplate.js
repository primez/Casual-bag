'use strict';

/* global _*/

var itemsTemplate = function () {
    var newArrivalsTemplate = document.getElementById('ul-templ').innerHTML.trim();
    return {
        newArrivals: _.template(newArrivalsTemplate)
    };
}();