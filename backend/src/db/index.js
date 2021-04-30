// library
const mongoose = require("mongoose");

// key url_mongodb
const { url_mongodb } = require("../keys");

// connection configuration
mongoose.connect(url_mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// open connection
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", url_mongodb);
});

// error connection
db.on("error", (error) => {
  console.error("connection error:", error);
});
