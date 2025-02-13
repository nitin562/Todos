let url = process.env.db //this is url for mongodb and localhost nhi user karna, iski jagah 127.0.0.1 use karna vrna error.

const mongoose = require("mongoose"); //import mongoose

const connectToMongo = async () => {
  // to connect to mongodb using url where iNotebook will get created automatically as database
  try {
    await mongoose.connect(url); //asynchronous in nature
  console.log("Connected")
  } catch (error) {
    console.log("Not Connected-",error)
  }
};
module.exports = { connectionfunc: connectToMongo, sk: "sssh" }; //export the function
