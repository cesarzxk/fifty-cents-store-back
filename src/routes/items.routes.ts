import { Router, Request, Response } from "express";
import getItems from "../api/getItems";

const itemsRouter = Router();

itemsRouter.get("/", (request: Request, response: Response) => {
  if (request.query.locale && request.query.id) {
    getItems(
      response,
      request.query.locale as string[],
      undefined,
      undefined,
      request.query.id as string,
      undefined,
      request.query.orderlyBy as "smaller" | "bigger" | undefined
    );
  } else {
    if (request.query.locale) {
      getItems(
        response,
        request.query.locale as string[],
        request.query.material as string[],
        request.query.category as string[],
        undefined,
        request.query.search as string,
        request.query.orderlyBy as "smaller" | "bigger" | undefined
      );
    } else {
      response.status(404).send("Erro! locale não especificado!").end();
    }
  }
});

export default itemsRouter;
