"use strict";

var calculator = function () {
    return {
        add: function add(x, y) {
            return x + y;
        }
    };
}();
"use strict";

/*global calculator*/

var sum = calculator.add(4, 7);
console.log(sum);
