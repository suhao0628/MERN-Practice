const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const mongoose = require("mongoose");

//Routes
app.get("/", (req, res) => {
  res.send("home page");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

//Use this func. to connect the mongoDB anf start the server
// const starrtServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// starrtServer();
