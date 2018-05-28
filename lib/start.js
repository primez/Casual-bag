'use strict';

/* global itemsTemplate, catalogFunctions*/

document.getElementById('holder').innerHTML = itemsTemplate.newArrivals({
    items: window.catalog.sort(catalogFunctions.compareByDateDesc)
});