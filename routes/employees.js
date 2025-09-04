// Employee CRUD routes
const express = require("express");
const router = express.Router();

// TODO: implement CRUD
router.get("/", (req, res) => {
  res.send("List employees");
});

module.exports = router;
