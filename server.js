const express = require('express');
const mongoose = require("mongoose"); //importing mongoose library
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();
const app = express();

const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");
const hotelRouter = require("./routes/hotels.router");
const categoryRouter = require("./routes/category.router");
const singleHotelRouter = require("./routes/singlehotel.router")
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router")
const connectDB = require("./config/dbconfig");



app.use(express.json());
console.log("Above DB connection")
connectDB();

const PORT = 3500;
app.get("/", (req, res) => {
    res.send("Hello Geeks");
  });
app.use("/api/hoteldata", hotelDataAddedToDBRouter);//add hotels

app.use("/api/categorydata",categoryDataAddedToDBRouter);//add categories

app.use("/api/hotels",hotelRouter);//display hotels

app.use("/api/category",categoryRouter);//Display categories

app.use("/api/hotels",singleHotelRouter);

app.use("/api/auth",authRouter);

app.use("/api/wishlist",wishlistRouter);


mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
      console.log("Server is Up and Running");
    });
  });