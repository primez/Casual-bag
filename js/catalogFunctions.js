let catalogFunctions = (function () {
    return {
        compareByDateDesc: function (a, b) {
            let aDate = new Date(a.dateAdded);
            let bDate = new Date(b.dateAdded);

            return bDate - aDate;
        }
    };
})();

