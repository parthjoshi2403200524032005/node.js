const express  = require("express");
const router = express.Router();
// const reqs = require("../controller/demo")
// const demoData = require("../controller/demoData")

// router.get("/",demoData);
// router.get('/api',reqs)

const { findAllUsers,  createDemoData, getSingleUser } = require("../controller/demoData")



router.get("/bv/ghj", createDemoData)
router.get("/fetch", getSingleUser)
router.get("/bv/abc", findAllUsers)

module.exports = router  