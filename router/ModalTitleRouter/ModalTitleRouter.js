const express = require("express");
const { createmodal, getdata, deletedata, updatedata, getsingledata} =require('../../controller/ModalTitleController/ModalTitleController')
const router = express.Router();


router.post("/",createmodal)
router.get("/", getdata)
router.get("/:id", getsingledata)
router.put("/:id",updatedata)
router.delete("/:id",deletedata)

module.exports = router;