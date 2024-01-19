const db = require("../Models/DoctorRegistrationModel");

const postdata = async (req, res) => {
    try {
        const {
            fullname,
            contactNo,
            email,
            permanentAddress,
            dateOfBirth,
            gender,
            languageSpoken,
            hospitalName,
            workExperience,
            boardCertifications,
            stateLicense,
            speciality,
            Website
        } = req.body

        const existing = await db.findOne({ email });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Email already exists in the database"
            });
        }
        const img = req.uploadedImageUrl
        const insertdata = await db.create(
            {
                fullname,
                contactNo,
                email,
                permanentAddress,
                dateOfBirth,
                gender,
                languageSpoken,
                hospitalName,
                workExperience,
                boardCertifications,
                stateLicense,
                speciality,
                Website,
                image: img,
                // ...req.body
            }
        );
        res.status(200).json(insertdata);
    } catch (error) {
        res.status(500).json(error)
    }
};

const getdata = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json({
            success: true,
            findalldata,
            message: "Get all registration data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


const getsingle = async (req, res) => {
    try {
        const findsingle = await db.findOne({ _id: req.params.id })
        res.status(200).json({
            success: true,
            findsingle,
            message: "Get single registration data"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


const deletedata = async (req, res) => {
    try {
        const deletedata = await db.deleteOne({ _id: req.params.id })
        res.status(200).json({
            success: true,
            deletedata,
            message: "Delete registration success"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const updatedata = async (req, res) => {
    try {
        const {
            fullname,
            contactNo,
            permanentAddress,
            dateOfBirth,
            gender,
            languageSpoken,
            hospitalName,
            workExperience,
            boardCertifications,
            stateLicense,
            speciality,
            Website
        } = req.body

        const img = req.uploadedImageUrl
        const update = await db.upadteMany(
            { _id: req.params.id },
            {
                $set: {
                    fullname,
                    contactNo,
                    permanentAddress,
                    dateOfBirth,
                    gender,
                    languageSpoken,
                    hospitalName,
                    workExperience,
                    boardCertifications,
                    stateLicense,
                    speciality,
                    Website,
                    image: img,
                }
            },
            {new: true}
        );
        res.status(200).json(update);
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
    postdata,
    getdata,
    getsingle,
    deletedata,
    updatedata
}