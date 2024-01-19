const modal = require("../../model/ModalTitleModel/ModalTitleModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utils/validateMongodbId");
// const cloudinaryUploadImg = require("../utils/cloudinary");
// const fs = require("fs");

const createmodal = async (req, resp) => {
    try {
        const time = {
            Date: Date.now()
        }
        const data = await modal({
            Name: req.body.Name,
            Email: req.body.Email,    
            Phone: req.body.Phone,
            Address: req.body.Address,
            Country: req.body.Country,
            Date: time.Date,
        })
        const result = await data.save();
        resp.send(result);
    } catch (error) {
        resp.status(404).json(`Error: ${error}`)
    }
}

const getdata = asyncHandler(async (req, resp) => {
    try {
        const data = await modal.find()
        resp.json(data);
    } catch (error) {
        resp.status(404).json(`Error: ${error.message}`)

    }
})

const deletedata = asyncHandler(async (req, resp) => {
    // validateMongoDbId(id);
    try {
        let result = await modal.deleteOne({ _id: req.params.id },
            {
                $set: req.body
            })
        resp.json(result);
    } catch (error) {

        resp.status(404).json(`Error: ${error.message}`)
    }
})

const getsingledata = asyncHandler(async (req, resp) => {
    try {
        let result = await modal.findOne({ _id: req.params.id })
        resp.json(result);
    } catch (error) {
        resp.status(404).json(`Error: ${error.message}`)
    }
})

const updatedata = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedData = await modal.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedData);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createmodal,
    getdata,
    deletedata,
    updatedata,
    getsingledata
};




// {
//     "Name": "sonu",
//     "Email": "sonu@gmail.com",
//     "Phone":34343,
//     "Address": "indore",
//     "Country": "india"
// }