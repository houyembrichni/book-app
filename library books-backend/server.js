const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const connectToDb = require("./config/connectDb");
const bookRouter = require("./routers/BookRouter");
const authRouter = require("./routers/authRouter");
const userRouter = require('./routers/userRouter')
const cors=require('cors');
const path=require('path')
//app
const app = express();

app.use(cors())
//data base connection
connectToDb();
//pardsing
app.use(express.json());

app.use("/api/auth", authRouter);
//book routes
app.use("/api/books", bookRouter);
//authentication routes
//user routes
app.use('/api/user',userRouter)
//handlers


app.all("*", (req, res) => {
  res.json({ status: "error", data: "page not found" });
});

app.use((err, req, res, next) => {
  res.json({ status: "error", data: err });
});
mongoose.connection.once("open", () => {
  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
  });
});
