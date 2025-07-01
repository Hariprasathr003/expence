const express = require("express");
const cors = require("cors");
const route = require("./route");
require("dotenv").config();

const app = express();
const Port = process.env.port || 4000;

app.use(cors());
app.use(express.json());
app.use("/api/expence", route);

app.listen(Port, () => {
  console.log(`Run the express server ${Port}`);
});
