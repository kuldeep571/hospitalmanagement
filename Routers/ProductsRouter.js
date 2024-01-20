const express = require('express');
const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({storage: storage})
// const uploadedcloudinaryImages = require('../Middlewares/singleImgUpload')
const {
    postdata,
    getdata,
    getsingle,
    deletedata,
    Putdata,
} = require("../Controllers/ProductsController");

const router = express.Router();

router.post('/', postdata);

router.put('/:id', Putdata);

router.get('/', getdata);

router.get('/:id', getsingle);

router.delete('/:id', deletedata);

module.exports = router;