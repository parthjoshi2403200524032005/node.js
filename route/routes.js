const express  = require("express");
const router = express.Router();
const reqs = require("../controller/demo")

router.get("/",reqs)

module.exports = router