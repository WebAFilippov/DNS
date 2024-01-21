import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import { corsOptions } from "./config/corsOptions.js";
import Router from "./routes/Router.js";

const PORT = process.env.PORT || 8000;
const MONGO_DB = process.env.MONGO_DB;

const app = express();

app.use(morgan("dev"))
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))

app.use("/api", Router);

mongoose.connect(MONGO_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`Server started on ${PORT}`));
});
