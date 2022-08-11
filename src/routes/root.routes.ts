import { Router, Request, Response } from "express";

const root = Router();

root.get("/", (request: Request, response: Response) => {
  return response.sendFile("./index.html", {root: __dirname })
});

export default root;
