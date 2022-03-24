type dataType = {
    hasDiscount: boolean,
    name: string,
    images: string[],
    description: string,
    price: string,
    discountValue:string,
    material: string,
    category: string,
    id: string,
    locale:string
}


function dataSearch(data:dataType | dataType[], keyword:string){
    if(Array.isArray(data)){
        let newData = data.filter(item=>{
                if(item.name.search(keyword) != -1){
                    return true
                }else{
                    return false
                }
            }
        )
        return newData;

    }else{
        if(data.name.search(keyword) != -1){
            return true
        }else{
            return false
        }
    }
   
}

export default dataSearch;
