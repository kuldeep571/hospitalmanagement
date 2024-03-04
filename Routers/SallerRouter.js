const express = require('express');
const {
    postdata,
    getdata,
    getsingle,
    deletedata,
    update
}=require("../Controllers/SallerController");

const router = express.Router();


router.post('/', postdata);

router.get('/', getdata);

router.get('/:id', getsingle);

router.delete('/:id', deletedata)

router.put('/:id', update)


module.exports = router;