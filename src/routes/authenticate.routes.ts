import { Router, Request, Response } from "express";
import getAccount from "../database/account/getAccount";

const authenticateRouter = Router();

authenticateRouter.post("/", (request: Request, response: Response) => {

  request.body.email && request.body.email != ""
    ? request.body.password && request.body.password != ""
      ? getAccount(response, request.body.email, request.body.password)
      : response.status(412).json({ condition: "password" }).end()
    : response.status(412).json({ condition: "email" }).end();
});

export default authenticateRouter;
