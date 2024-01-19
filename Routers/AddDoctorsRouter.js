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
    Putdata
} = require("../Controllers/AddDoctorsController");

const router = express.Router();


router.post('/', upload.single("image"), uploadedcloudinaryImages, postdata);

router.put('/:id', upload.single("image"), uploadedcloudinaryImages, Putdata);

router.get('/', getdata);

router.get('/:id', getsingle);

router.delete('/:id', deletedata);

module.exports = router;