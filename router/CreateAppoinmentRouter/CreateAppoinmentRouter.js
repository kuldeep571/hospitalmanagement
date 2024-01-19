const express = require("express");
const { createappoinment, getdata, deletedata, updatedata, getsingledata} =require('../../controller/CreateAppoinmentController/CreateAppoinmentCtrl')
const router = express.Router();


router.post("/",createappoinment)
router.get("/", getdata)
router.get("/:id", getsingledata)
router.put("/:id",updatedata)
router.delete("/:id",deletedata)

module.exports = router;