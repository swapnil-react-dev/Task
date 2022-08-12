const express = require ("express");
const app =express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8888;
app.use(cors());
require("./B-End/models/db");
app.use(bodyParser.json());
app.use("/api/get/products", require("./B-End/route/product.route"));
app.listen(port ,() => console.log(`Server is listening on port${port}`));




