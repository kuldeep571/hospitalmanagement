const express = require("express");
const { addpro} =require('../controller/usercontroller')

const router = express.Router();


router.post('/', addpro);


module.exports = router;