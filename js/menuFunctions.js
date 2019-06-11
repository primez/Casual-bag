(function () {
    let headerTag = document.querySelector('header');
    let navPanel = headerTag.querySelector('nav');
    let dropdownButton = navPanel.querySelector('.switcher');
    let dropdownContent = navPanel.querySelector('.nav-menu');
    let openIcon = navPanel.querySelector('.nav-icon');
    let closeIcon = navPanel.querySelector('.nav-icon-close');

    dropdownButton.addEventListener('click', function () {
        headerTag.classList.toggle('push-content');
        dropdownContent.classList.toggle('dropdown-content');
        openIcon.classList.toggle('dropdown-content');
        closeIcon.classList.toggle('dropdown-content');
        navPanel.classList.toggle('button-border');
    });
})();

(function () {
    let searchPanel = document.querySelector('.search-panel');
    let search = searchPanel.querySelector('#search-field');
    let backgroundWhite = searchPanel.querySelector('.gradient-white');
    let magnifier = searchPanel.querySelector('.search-icon');

    magnifier.addEventListener('click', function () {
        search.classList.toggle('collapsed');
        backgroundWhite.classList.toggle('collapsed');
    });
})();