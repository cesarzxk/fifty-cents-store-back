import * as Mongo from "mongoose";
import accountSchema from "../../schemas/account";

const accountModel = Mongo.model("createAccount", accountSchema);

export default accountModel;
