const appoinment = require("../../model/AddAppoinmentModel/AddAppoinmentModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utils/validateMongodbId");
// const cloudinaryUploadImg = require("../utils/cloudinary");
// const fs = require("fs");
const addappoinment = async (req, resp) => {
    try {
        const time = {
            Date: Date.now()
        }
        // const discountFactor = req.body.Discount / 100;
        const discountAmount = req.body.VisitCharges * req.body.Discount / 100;
        const grandTotal = req.body.VisitCharges - discountAmount;
        const data = await appoinment({
            Patients: req.body.Patients,
            userdata: req.user,
            VisitCharges: req.body.VisitCharges,
            Doctors: req.body.Doctors,
            Discount: req.body.Discount,
            userdata: req.body.userdata,
            VisitDiscription: req.body.VisitDiscription,
            userdata: req.body.userdata,
            GrandTotal: grandTotal,
            Date: time.Date,
            AvailableSlots: req.body.AvailableSlots,
        })
        const result = await data.save();
        resp.send(result);
    } catch (error) {
        console.log("error", error);
        resp.status(404).json(`Error: ${error}`)
    }
}

const getdata = asyncHandler(async (req, resp) => {
    try {
        const data = await appoinment.find()
            .populate('userdata')
        resp.json(data);
    } catch (error) {
        resp.status(404).json(`Error: ${error.message}`)

    }
})

const deletedata = asyncHandler(async (req, resp) => {
    // validateMongoDbId(id);
    try {
        let result = await appoinment.deleteOne({ _id: req.params.id },
            {
                $set: req.body
            })
        resp.json(result);
    } catch (error) {

        resp.status(404).json(`Error: ${error.message}`)
    }
})

const getsingledata = asyncHandler(async (req, resp) => {
    // validateMongoDbId(id);
    try {
        let result = await appoinment.findOne({ _id: req.params.id })
            .populate('userdata')
        resp.json(result);
    } catch (error) {
        resp.status(404).json(`Error: ${error.message}`)
    }
})

const updatedata = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const time = {
            Date: Date.now()
        }
        // const discountFactor = req.body.Discount / 100;
        // const discountAmount = req.body.VisitCharges * discountFactor;
        // const grandTotal = req.body.VisitCharges - discountAmount;


        const Patients = req.body.Patients;
        const Doctors = req.body.Doctors;

        const VisitDiscription = req.body.VisitDiscription;
        const AvailableSlots = req.body.AvailableSlots;
        const VisitCharges = req.body.VisitCharges
        const discountAmount = req.body.Discount;
        const total = req.body.VisitCharges * req.body.Discount / 100;
        const updatedData = await appoinment.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    Patients: Patients,
                    Doctors: Doctors,
                    VisitDiscription: VisitDiscription,
                    AvailableSlots: AvailableSlots,
                    VisitCharges: VisitCharges,
                    Discount: discountAmount,
                    GrandTotal: total
                }
            },
            {
                new: true,
            });
        res.json(updatedData);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    addappoinment,
    getdata,
    deletedata,
    updatedata,
    getsingledata
};



// {
//     "Patients": "rohan",
//     "VisitCharges": 500,
//     "Doctors": "rohit",
//     "Discount": 5,
//     "VisitDiscription": "jdgk1jgkj",
//     "AvailableSlots": "iewufioudoiw"
// }