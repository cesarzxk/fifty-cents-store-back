"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dataSearch_1 = __importDefault(require("../dataSearch"));
function dataFilter(newData, material, category, search) {
    var productsFiltred = newData.filter(function (item) {
        var isMaterialInFilters;
        if (material != undefined) {
            isMaterialInFilters = false;
            for (var i = 0; i < material.length; i++) {
                if (item.material == material[i]) {
                    isMaterialInFilters = true;
                }
            }
        }
        var isCategoryInFilters;
        if (category != undefined) {
            isCategoryInFilters = false;
            for (var j = 0; j < category.length; j++) {
                if (item.category == category[j]) {
                    isCategoryInFilters = true;
                }
            }
        }
        var isSearched;
        search && (0, dataSearch_1.default)(item, search);
        if (isCategoryInFilters == true &&
            isMaterialInFilters == true &&
            isSearched == true) {
            return true;
        }
        if (isCategoryInFilters == true && isMaterialInFilters == true) {
            return true;
        }
        if (isCategoryInFilters == true && isMaterialInFilters == undefined) {
            return true;
        }
        if (isCategoryInFilters == undefined && isMaterialInFilters == true) {
            return true;
        }
        return false;
    });
    return productsFiltred;
}
exports.default = dataFilter;
