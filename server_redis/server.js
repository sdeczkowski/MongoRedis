require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const todoRoutes = require("./redis");

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/todo", todoRoutes);

app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`));
