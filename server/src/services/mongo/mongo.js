const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL

mongoose.connection.once("open", () => {
  console.log("Mongoose running..");
})
mongoose.connection.on("error", (err) => {
  console.error(err);
})

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = {
  mongoConnect
}