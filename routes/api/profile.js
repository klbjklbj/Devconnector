const express = require("express");

//We don't need all of express in this file, just the Router
const router = express.Router();

router.get("/test", (req, res) =>
  res.json({
    msg: "Profile works!"
  })
);

module.exports = router;