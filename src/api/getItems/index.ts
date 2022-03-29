import http from "http";
import { Response } from "express";
import dataFormatter from "../../services/dataFormatter";
import options from "../options/";
import dataFilter from "../../services/dataFilter";
import dataSearch from "../../services/dataSearch";

type filtersType = {
  category: string[];
  material: string[];
};

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
  locale: string,
  material?: string[],
  category?: string[],
  id?: string,
  search?: string
) {
  http.get(options(locale, id), (result) => {
    var data = "";
    result.on("data", (chunk) => {
      data += chunk;
    });

    result.on("end", () => {
      const newData = dataFormatter(JSON.parse(data), locale) as productType[];

      if (material || category) {
        return res
          .status(200)
          .json(dataFilter(newData, material, category, search))
          .end();
      } else {
        if (search) {
          const dataSearched = dataSearch(newData, search) as
            | productType[]
            | [];

          if (dataSearched.length === 0) {
            console.log(dataSearched);
            return res.status(401).end();
          }
          return res.status(200).json(dataSearched).end();
        } else {
          return res.status(200).json(newData).end();
        }
      }
    });
  });
}
