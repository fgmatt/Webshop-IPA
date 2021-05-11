// library
const mongoose = require("mongoose");

// key url_mongodb
const { url_mongodb_testing } = require("../../keys");

// connection configuration
mongoose.connect(url_mongodb_testing, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// open connection
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", url_mongodb_testing);
});

// error connection
db.on("error", (err) => {
  console.error("connection error:", err);
});
