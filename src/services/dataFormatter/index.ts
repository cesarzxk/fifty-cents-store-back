type brazilian ={
    nome: string,
    descricao: string,
    categoria: string,
    imagem: string,
    preco: string,
    material: string,
    departamento: string,
    id: string
}

type european ={
    hasDiscount: boolean,
    name: string,
    gallery: string[],
    description: string,
    price: string,
    discountValue: string,
    details: {
        adjective: string,
        material: string
    },
    id: string
}

type itemType = european[] | brazilian[] | brazilian | european

function dataFormatter(items:itemType, locale:string){
    let newItems;

    if(Array.isArray(items)){
        newItems = items.map((item:brazilian|european) => 
            {  
                return{
                    hasDiscount:    locale == 'brazilian'? false:item.hasDiscount,
                    name:           locale == 'brazilian'? item.nome:item.name,
                    images:         locale == 'brazilian'? [item.imagem]:item.gallery,
                    description:    locale == 'brazilian'? item.descricao:item.description,
                    price:          locale == 'brazilian'? item.preco:item.price,
                    discountValue:  locale == 'brazilian'? 0.0:item.discountValue,
                    material:       locale == 'brazilian'? item.material:item.details.material,
                    category:       locale == 'brazilian'? item.categoria:item.details.adjective,
                    id:             item.id,
                    locale:         locale
                }
            })
    }else{
        newItems = {
            hasDiscount:    locale == 'brazilian'? false:items.hasDiscount,
            name:           locale == 'brazilian'? items.nome:items.name,
            images:         locale == 'brazilian'? [items.imagem]:items.gallery,
            description:    locale == 'brazilian'? items.descricao:items.description,
            price:          locale == 'brazilian'? items.preco:items.price,
            discountValue:  locale == 'brazilian'? 0.0:items.discountValue,
            material:       locale == 'brazilian'? items.material:items.details.material,
            category:       locale == 'brazilian'? items.departamento:items.details.adjective,
            id:             items.id,
            locale:         locale
        }
    }
    return newItems;
}

export default dataFormatter;