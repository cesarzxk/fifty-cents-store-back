import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

export async function tokenAuthenticator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  dotenv.config();

  const token = req.headers.authorization?.split(" ");
  if (token != undefined && token[0] == "Bearer" && process.env.SECRET) {
    jwt.verify(token[1], process.env.SECRET, (err) => {
      if (err)
        return res
          .status(409)
          .json({ auth: false, message: "Failed to authenticate token." })
          .end();
      next();
    });
  } else {
    return res.status(401).end();
  }
}
