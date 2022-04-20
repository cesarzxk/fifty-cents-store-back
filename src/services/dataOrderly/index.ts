type dataOrderlyProps = {
  price: boolean;
  data: dataTYpe[];
  isSmaller: boolean;
};

type dataTYpe = {
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

export function dataOrderly({ price, isSmaller, data }: dataOrderlyProps) {
  let dataSorted = data.slice();
  if (price) {
    if (isSmaller) {
      dataSorted = dataSorted.sort((a: dataTYpe, b: dataTYpe) => {
        if (parseFloat(a.price) < parseFloat(b.price)) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      dataSorted = dataSorted.sort((a: dataTYpe, b: dataTYpe) => {
        if (parseFloat(a.price) > parseFloat(b.price)) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }
  return dataSorted;
}

export default dataOrderly;
