const express = require('express');
const {
    postdata,
    getdata,
    getsingle,
    deletedata,
    Putdata,
    getPaginatedData
} = require("../Controllers/NewProController");

const router = express.Router();

router.post('/', postdata);

router.put('/:id', Putdata);

router.get('/', getdata);

router.get('/:id', getsingle);

router.delete('/:id', deletedata);

router.get('/paginated', getPaginatedData);

module.exports = router;