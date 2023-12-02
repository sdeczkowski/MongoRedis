require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const todoRoutes = require("./routes/todo");

const port = process.env.PORT || 3002;
const connection = require("./db");

app.use(express.json());
app.use(cors());
connection();

app.use("/api/todo", todoRoutes);

app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`));
