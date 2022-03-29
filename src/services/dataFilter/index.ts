import dataSearch from "../dataSearch";

type dataType = {
  hasDiscount: boolean;
  name: string;
  images: string[];
  description: string;
  price: string;
  discountValue: string;
  material: string;
  category: string;
  id: string;
  locale: string;
};

export default function dataFilter(
  newData: dataType[],
  material?: string[],
  category?: string[],
  search?: string
) {
  const productsFiltred = newData.filter((item) => {
    let isMaterialInFilters;
    if (material != undefined) {
      isMaterialInFilters = false;
      for (let i = 0; i < material.length; i++) {
        if (item.material == material[i]) {
          isMaterialInFilters = true;
        }
      }
    }
    let isCategoryInFilters;
    if (category != undefined) {
      isCategoryInFilters = false;

      for (let j = 0; j < category.length; j++) {
        if (item.category == category[j]) {
          isCategoryInFilters = true;
        }
      }
    }

    let isSearched;

    search && dataSearch(item, search);

    if (
      isCategoryInFilters == true &&
      isMaterialInFilters == true &&
      isSearched == true
    ) {
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
