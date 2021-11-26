const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://noman:noman123@cluster0.acqet.mongodb.net/fooduproject?retryWrites=true&w=majority";

const dbConnect = async () => {
  try {
      await mongoose.connect(dbUrl);
    console.log("connected to db");
  } catch (error) {
    console.log("error in db Connection ....", error);
  }
};

module.exports = dbConnect;