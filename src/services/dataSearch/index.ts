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

function dataSearch(data: dataType | dataType[], keyword: string) {
  if (Array.isArray(data)) {
    let newData = data.filter((item) => {
      const newkeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().toLowerCase()
      const newName = item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().toLowerCase()

      if (newName.search(newkeyword) != -1) {
        return true;
      } else {
        return false;
      }
    });
    return newData;
  } else {
      const newkeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().toLowerCase()
      const newName = data.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().toLowerCase()

    if (newName.search(newkeyword) != -1) {
      return true;
    } else {
      return false;
    }
  }
}

export default dataSearch;
