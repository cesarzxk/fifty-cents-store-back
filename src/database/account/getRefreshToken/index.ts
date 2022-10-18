import { Response } from "express";
import main from "../..";
import refreshTokenModel from "../../../models/token";

async function getRefreshToken(response: Response, userId: string) {
  await main();

  return await refreshTokenModel.findOne({ _userId: userId }).then((result) => {
    if (result) {
      return { error: undefined, refreshToken: result.refreshToken };
    }
    return { error: response.status(401).end() };
  });
}
export default getRefreshToken;
