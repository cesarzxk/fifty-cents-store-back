"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dataFormatter(items, locale) {
    var newItems;
    if (Array.isArray(items)) {
        newItems = items.map(function (item) {
            if (locale == "brazilian") {
                var newitem = item;
                return {
                    hasDiscount: false,
                    name: newitem.nome,
                    images: [newitem.imagem],
                    description: newitem.descricao,
                    price: newitem.preco,
                    discountValue: 0.0,
                    material: newitem.material,
                    category: newitem.departamento,
                    id: newitem.id,
                    locale: locale,
                };
            }
            else {
                var newitem = item;
                return {
                    hasDiscount: newitem.hasDiscount,
                    name: newitem.name,
                    images: newitem.gallery,
                    description: newitem.description,
                    price: newitem.price,
                    discountValue: newitem.discountValue,
                    material: newitem.details.material,
                    category: newitem.details.adjective,
                    id: newitem.id,
                    locale: locale,
                };
            }
        });
    }
    else {
        if (locale == "brazilian") {
            var newitem = items;
            newItems = {
                hasDiscount: false,
                name: newitem.nome,
                images: [newitem.imagem],
                description: newitem.descricao,
                price: newitem.preco,
                discountValue: 0.0,
                material: newitem.material,
                category: newitem.departamento,
                id: newitem.id,
                locale: locale,
            };
        }
        else {
            var newitem = items;
            newItems = {
                hasDiscount: newitem.hasDiscount,
                name: newitem.name,
                images: newitem.gallery,
                description: newitem.description,
                price: newitem.price,
                discountValue: newitem.discountValue,
                material: newitem.details.material,
                category: newitem.details.adjective,
                id: newitem.id,
                locale: locale,
            };
        }
    }
    return newItems;
}
exports.default = dataFormatter;
