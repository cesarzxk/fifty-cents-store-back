import { Schema } from "mongoose";

const refreshTokenSchema = new Schema(
  {
    _userId: {
      type: String,
      unique: true,
      required: true,
      ref: "user",
    },
    refreshToken: {
      type: String,
      unique: true,
      required: true,
    },
    expireAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "refreshTokens" }
);

export default refreshTokenSchema;
