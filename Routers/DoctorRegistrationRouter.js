const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage})
const uploadedcloudinaryImages = require('../Middlewares/singleImgUpload')
const {
    postdata,
    getdata,
    getsingle,
    deletedata,
    updatedata
} = require("../Controllers/DoctorRegistrationController");

const router = express.Router();


router.post('/', upload.single("image"), uploadedcloudinaryImages, postdata);

router.get('/', getdata);

router.get('/:id', getsingle);

router.delete('/:id', deletedata);

router.put('/:id', updatedata);

module.exports = router;