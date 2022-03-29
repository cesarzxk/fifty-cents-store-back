import * as Mongoose from "mongoose";
require("dotenv").config();

export default async function main() {
  process.env.SERVER && (await Mongoose.connect(process.env.SERVER));
}
