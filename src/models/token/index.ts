import Mongo from "mongoose";
import refreshTokenSchema from "../../schemas/token";

const refreshTokenModel = Mongo.model("createRefreshToken", refreshTokenSchema);

export default refreshTokenModel;
