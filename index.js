const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const api = express();

const routes = require("./api/routes/routes.js")
console.log("Server listening!")

api.use(morgan("dev"));
api.use(cors());
api.use(express.json());
api.use("/api",routes);
//pepe
api.listen(process.env.PORT || 3000);

mongoose.connect(process.env.MONGO_URL,{ dbName: process.env.MONGO_DB})