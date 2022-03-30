type brazilian = {
  nome: string;
  descricao: string;
  categoria: string;
  imagem: string;
  preco: string;
  material: string;
  departamento: string;
  id: string;
};

type european = {
  hasDiscount: boolean;
  name: string;
  gallery: string[];
  description: string;
  price: string;
  discountValue: string;
  details: {
    adjective: string;
    material: string;
  };
  id: string;
};

type itemType = european[] | brazilian[] | brazilian | european;

function dataFormatter(items: itemType, locale: string) {
  let newItems;

  if (Array.isArray(items)) {
    newItems = items.map((item: brazilian | european) => {
      if (locale == "brazilian") {
        const newitem = item as brazilian;
        return {
          hasDiscount: false,
          name: newitem.nome,
          images: [newitem.imagem],
          description: newitem.descricao,
          price: newitem.preco,
          discountValue: 0.0,
          material: newitem.material,
          category: newitem.categoria,
          id: newitem.id,
          locale: locale,
        };
      } else {
        const newitem = item as european;
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
  } else {
    if (locale == "brazilian") {
      const newitem = items as brazilian;
      newItems = {
        hasDiscount: false,
        name: newitem.nome,
        images: [newitem.imagem],
        description: newitem.descricao,
        price: newitem.preco,
        discountValue: 0.0,
        material: newitem.material,
        category: newitem.categoria,
        id: newitem.id,
        locale: locale,
      };
    } else {
      const newitem = items as european;
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

export default dataFormatter;
