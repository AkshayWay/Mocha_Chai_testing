const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const app = express();
const userRoute = require("./Users");

app.use("/user", userRoute);

module.exports = router;
