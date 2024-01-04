const express  = require("express");
const router = express.Router();
// const reqs = require("../controller/demo")
const demoData = require("../controller/demoData")

router.get("/",demoData);
// router.get('/api',reqs)

module.exports = router  