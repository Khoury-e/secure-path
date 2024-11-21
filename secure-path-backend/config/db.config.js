const mongoose = require("mongoose");

exports.connectToDB = () => {
  mongoose.set("strictQuery", false);

  const mongoDB = "mongodb://127.0.0.1/securepath_dev";

  main().catch((err) => console.log(err));
  async function main() {
    await mongoose.connect(mongoDB);
  }
};
