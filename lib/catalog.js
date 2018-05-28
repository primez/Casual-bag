'use strict';

/* global catalogFunctions, itemsTemplate*/

document.getElementById('catalog-holder').innerHTML = itemsTemplate.newArrivals({
    items: window.catalog.sort(catalogFunctions.compareByDateDesc)
});