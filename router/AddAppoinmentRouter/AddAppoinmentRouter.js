const express = require("express");
const { addappoinment, getdata, deletedata, updatedata, getsingledata} =require('../../controller/AddAppoinmentController/AddAppoinmentCtrl')
const router = express.Router();


router.post("/",addappoinment)
router.get("/", getdata)
router.get("/:id", getsingledata)
router.put("/:id",updatedata)
router.delete("/:id",deletedata)

module.exports = router;