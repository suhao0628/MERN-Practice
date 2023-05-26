const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json());
// const logger = (req, res, next) => {
//   console.log("Middle ran");
//   console.log(req.method);
// };

//Routes
app.get("/", (req, res) => {
  res.send("home page");
});

//Create a task
app.post("/api/tasks", async (req, res) => {
  console.log(req.body);
  res.send("Task created");
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
