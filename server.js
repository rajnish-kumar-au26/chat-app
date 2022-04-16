require("dotenv").config();
require("./config/dbConnect");
const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));
