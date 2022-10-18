import { Response } from "express";
import { v4 } from "uuid";
import main from "../..";
import refreshTokenModel from "../../../models/token";

async function setRefreshToken(userId: string) {
  const refreshtoken = v4();
  await main();

  return await refreshTokenModel
    .findOne({ _userId: userId })
    .then(async () => {
      await refreshTokenModel.deleteOne({ _userId: userId });

      return await refreshTokenModel
        .create({ _userId: userId, refreshToken: refreshtoken })
        .then((result) => {
          return refreshtoken;
        });
    })
    .catch(async () => {
      return await refreshTokenModel
        .create({ _userId: userId, refreshToken: refreshtoken })
        .then((result) => {
          return refreshtoken;
        });
    });
}
export default setRefreshToken;
