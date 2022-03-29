"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dataSearch(data, keyword) {
    if (Array.isArray(data)) {
        var newData = data.filter(function (item) {
            if (item.name.search(keyword) != -1) {
                return true;
            }
            else {
                return false;
            }
        });
        return newData;
    }
    else {
        if (data.name.search(keyword) != -1) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = dataSearch;
