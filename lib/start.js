'use strict';

/* global itemsTemplate, catalogFunctions*/

document.getElementById('arrivals-holder').innerHTML = itemsTemplate.newArrivals({
    items: window.catalog.sort(catalogFunctions.compareByDateDesc)
});