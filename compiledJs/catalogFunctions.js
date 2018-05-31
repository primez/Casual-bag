"use strict";

var catalogFunctions = function () {
    return {
        compareByDateDesc: function compareByDateDesc(a, b) {
            var aDate = new Date(a.dateAdded);
            var bDate = new Date(b.dateAdded);

            return bDate - aDate;
        }
    };
}();