const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  // .connect("mongodb+srv://dhaba:dhaba@dhaba.zqk3rj4.mongodb.net/test")
  .connect('mongodb://127.0.0.1:27017/dhaba')
  .then(() => {
    console.log(`db connected`);
  })
  .catch((err) => {
    console.log(err);
  });
