"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dataSearch(data, keyword) {
    if (Array.isArray(data)) {
        var newData = data.filter(function (item) {
            var newkeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
            var newName = item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
            if (newName.search(newkeyword) != -1) {
                return true;
            }
            else {
                return false;
            }
        });
        return newData;
    }
    else {
        var newkeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
        var newName = data.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
        if (newName.search(newkeyword) != -1) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = dataSearch;
