import express from "express";
import products from "./routes/products.js";
import signup from "./routes/signup.js";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

mongoose.set('strictQuery', false);
const url =
  "mongodb+srv://mubeen070:Tucky32145@cluster0.ytdjjmc.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to db"));

const app = express();
app.listen(5000);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: true, credentials: true }));

app.use("/signup", signup);
app.use("/products", products);


console.log("Listening...");
