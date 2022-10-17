const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const userPost = require("../controller/userInformationController");

router.get("/getuser", userController.getUser);
router.get("/getInfo/:id", userController.getInfo);
router.post("/userPost", userPost.postInformation);

module.exports = router;
