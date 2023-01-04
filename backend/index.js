import express from "express";
import equipment from "./routes/equipment.js";
import material from "./routes/material.js";
import home from "./routes/home.js";
import about from "./routes/about.js";
import cart from "./routes/cart.js";
import login from "./routes/login.js";
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

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

// app.use("/", home);
app.use("/signup", signup);
// app.use("/", login);
// app.use("/equipment", equipment);
// app.use("/material", material);
// app.use("/", cart);
// app.use("/", about);

console.log("Listening...");
