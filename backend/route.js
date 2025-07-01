const express = require("express");
const route = express.Router();
const control = require("./controller");

route.get("/", control.getAll);
route.post("/", control.createData);
route.put("/:id", control.updateData);
route.delete("/:id", control.deleteData);

module.exports = route;
