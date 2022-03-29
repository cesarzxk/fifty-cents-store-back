import { Response } from "express";
import * as bcrypt from "bcrypt";

import accountModel from "../../../models/account";
import generateToken from "../../../services/generateToken";
import main from "../..";

async function getAccount(res: Response, email: string, password: string) {
  try {
    await main();
    const user = await accountModel.findOne({ email: email });
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        return res
          .status(200)
          .json({
            _id: user._id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            token: generateToken(user._id),
          })
          .end();
      } else {
        return res.status(401).end();
      }
    });
  } catch {
    return res.status(401).end();
  }
}

export default getAccount;
