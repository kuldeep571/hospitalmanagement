const express = require("express");
const { todayappoinment, getdata, deletedata, updatedata, getsingledata} =require('../../controller/TodayAppoinmentController/TodayAppoinmentController')
const router = express.Router();


router.post("/",todayappoinment)
router.get("/", getdata)
router.get("/:id", getsingledata)
router.put("/:id",updatedata)
router.delete("/:id",deletedata)

module.exports = router;