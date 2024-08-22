import { Router, Request, Response } from "express";
import getItems from "../api/getItems";

const itemsRouter = Router();

itemsRouter.get("/", (request: Request, response: Response) => {
  try {
    console.log(request.query);
    if (request.query.locale && request.query.id) {
      getItems(
        response,
        Array.isArray(request.query.locale)
          ? (request.query.locale as string[])
          : [request.query.locale as string],
        undefined,
        undefined,
        request.query.id as string,
        undefined,
        undefined
      );
    } else {
      getItems(
        response,
        (request.query.locale as string[]) || ["brazilian", "european"],
        (request.query.material as string[]) || undefined,
        (request.query.category as string[]) || undefined,
        undefined,
        (request.query.search as string) || "",
        request.query.orderlyBy as "smaller" | "bigger" | undefined
      );
    }
  } catch (e) {
    response.status(500).json(e).end();
  }
});

export default itemsRouter;
