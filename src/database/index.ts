import Mongoose from "mongoose";

export default async function main() {
  process.env.SERVER && (await Mongoose.connect(process.env.SERVER));
}
