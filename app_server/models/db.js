// require('./');

const mongoose = require("mongoose");
const dbURL = "localhost:27017/pawii.latihan-uts";

mongoose.connect(dbURI, {
  // useNewUrlParser: true
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("Connection error: " + err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconeected");
});
