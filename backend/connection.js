const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const { DB_USER, DB_PW } = process.env;
mongoose.connect(
  `mongodb+srv://viren:viren123@cluster0.dw2tqix.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb");
  }
);
