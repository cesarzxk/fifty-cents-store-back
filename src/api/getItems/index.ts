import { Response } from "express";
import dataFormatter from "../../services/dataFormatter";
import options from "../options/";
import dataFilter from "../../services/dataFilter";
import dataSearch from "../../services/dataSearch";
import dataOrderly from "../../services/dataOrderly";
import axios from "axios";

type productType = {
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

export default async function getItems(
  res: Response,
  locale: string[],
  material?: string[],
  category?: string[],
  id?: string,
  search?: string,
  orderlyBy?: "smaller" | "bigger" | undefined
) {
  let newData = [] as productType[];
  for (let i = 0; i < locale.length; i++) {
    const data = await getdata(locale[i], id);

    if (id) {
      newData = [data as productType];
    } else {
      newData = [...newData, ...(data as productType[])];
    }
  }

  if (orderlyBy) {
    newData = dataOrderly({
      isSmaller: orderlyBy == "smaller",
      data: newData,
      price: true,
    }) as productType[];
  }

  if (material || category) {
    return res
      .status(200)
      .json(dataFilter(newData, material, category, search))
      .end();
  } else {
    if (search) {
      const dataSearched = dataSearch(newData, search) as productType[] | [];
      if (dataSearched.length === 0) {
        return res.status(404).end();
      }
      return res.status(200).json(dataSearched).end();
    } else {
      return res
        .status(200)
        .json(id ? newData[0] : newData)
        .end();
    }
  }
}

async function getdata(locale: string, id: string | undefined) {
  const url = options(locale, id).host + options(locale, id).path;
  const { data } = await axios.get(url);

  return dataFormatter(data, locale);
}
