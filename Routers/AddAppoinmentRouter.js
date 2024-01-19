const express = require('express');

const {
    postdata,
    getdata,
    getsingle,
    deletedata,
    getTodayData,
    putdata
} = require("../Controllers/AddAppoinmentController");

const router = express.Router();

router.post('/', postdata);

router.get('/', getdata);

router.get('/getdataDate', getTodayData);

// router.get('/getupcoming', getUpcomingData)

router.get('/:id', getsingle);

router.delete('/:id', deletedata);

router.put('/:id', putdata);


module.exports = router;
