'use strict';

(function () {
    var headerTag = document.querySelector('header');
    var navPanel = headerTag.querySelector('nav');
    var dropdownButton = navPanel.querySelector('.switcher');
    var dropdownContent = navPanel.querySelector('.nav-menu');
    var openIcon = navPanel.querySelector('.nav-icon');
    var closeIcon = navPanel.querySelector('.nav-icon-close');

    dropdownButton.addEventListener('click', function () {
        headerTag.classList.toggle('push-content');
        dropdownContent.classList.toggle('dropdown-content');
        openIcon.classList.toggle('dropdown-content');
        closeIcon.classList.toggle('dropdown-content');
        navPanel.classList.toggle('button-border');
    });
})();

(function () {
    var searchPanel = document.querySelector('.search-panel');
    var search = searchPanel.querySelector('#search-field');
    var backgroundWhite = searchPanel.querySelector('.gradient-white');
    var magnifier = searchPanel.querySelector('.search-icon');

    magnifier.addEventListener('click', function () {
        search.classList.toggle('collapsed');
        backgroundWhite.classList.toggle('collapsed');
    });
})();