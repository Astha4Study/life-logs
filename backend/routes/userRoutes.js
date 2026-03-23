const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userController");

router.get("/user", getUsers);

router.post("/", createUser);

module.exports = router;
