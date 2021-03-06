const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.getUser );
router.put("/:id", UserController.updateUserByID);

module.exports = router;