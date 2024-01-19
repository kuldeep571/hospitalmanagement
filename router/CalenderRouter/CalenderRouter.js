const express = require("express");
const { create, getdata, deletedata, updatedata, getsingledata} =require('../../controller/CalenderController/CalenderController')
const router = express.Router();


router.post("/",create)
router.get("/", getdata)
router.get("/:id", getsingledata)
router.put("/:id",updatedata)
router.delete("/:id",deletedata)

module.exports = router;