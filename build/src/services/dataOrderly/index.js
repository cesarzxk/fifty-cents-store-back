"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataOrderly = void 0;
function dataOrderly(_a) {
    var price = _a.price, isSmaller = _a.isSmaller, data = _a.data;
    var dataSorted = data.slice();
    if (price) {
        if (isSmaller) {
            dataSorted = dataSorted.sort(function (a, b) {
                if (parseFloat(a.price) < parseFloat(b.price)) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
        else {
            dataSorted = dataSorted.sort(function (a, b) {
                if (parseFloat(a.price) > parseFloat(b.price)) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
    }
    return dataSorted;
}
exports.dataOrderly = dataOrderly;
exports.default = dataOrderly;
