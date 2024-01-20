const db = require("../Models/AddAppoinmentModel");

const postdata = async (req, res) => {
    try {
        const {
            patients,
            visitCharges,
            Doctors,
            Discount,
            visitDescription,
            availableSlots,
        } = req.body

        const calculatedGrandTotal = visitCharges - Discount;

        const insertdata = await db.create(
            {
                patients,
                visitCharges,
                Doctors,
                Discount,
                visitDescription,
                grandTotal: calculatedGrandTotal,
                availableSlots
            }
        );
        res.status(200).json(insertdata);
    } catch (error) {
        res.status(500).json(error.message)
    }
};

const getdata = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json({
            success: true,
            findalldata,
            message: "Get All Appoinment Data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getTodayData = async (req, res) => {
    try {
        const currentDate = new Date();
        const startOfToday = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate()
        );
        const todayData = await db.find({ date: { $gte: startOfToday } });

        res.status(200).json({
            success: true,
            todayData,
            message: "Get today's data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const getYesterdayData = async (req, res) => {
    try {
        const currentDate = new Date();

        // Calculate the start of yesterday
        const startOfYesterday = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - 1,
            0, 0, 0, 0
        );

        // Calculate the end of yesterday
        const endOfYesterday = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            0, 0, 0, 0
        );

        const yesterdayData = await db.find({
            date: { $gte: startOfYesterday, $lt: endOfYesterday }
        });

        res.status(200).json({
            success: true,
            yesterdayData,
            message: "Get yesterday's data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


const getUpcomingData = async (req, res) => {
    try {
        const currentTimestamp = Date.now();
        const upcomingData = await db.find({ date: { $gt: currentTimestamp } }).sort({ date: 1 });

        res.status(200).json({
            success: true,
            upcomingData,
            message: "Get all upcoming data",
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
            message: "Get Single Appoinment Data"
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
            message: "Delete Appoinment Success"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const putdata = async (req, res) => {
    try {
        const {
            patients,
            visitCharges,
            Doctors,
            Discount,
            visitDescription,
            availableSlots,
        } = req.body

        const calculatedGrandTotal = visitCharges - Discount;

        const updatedata = await db.updateMany(
            { _id: req.params.id },
            {
                $set: {
                    patients,
                    visitCharges,
                    Doctors,
                    Discount,
                    visitDescription,
                    grandTotal: calculatedGrandTotal,
                    availableSlots
                }
            },
            {new: true}
        );
        res.status(200).json(updatedata);
    } catch (error) {
        res.status(500).json(error.message)
    }
};

module.exports = {
    postdata,
    getdata,
    getsingle,
    deletedata,
    getTodayData,
    getUpcomingData,
    putdata,
    getYesterdayData
}