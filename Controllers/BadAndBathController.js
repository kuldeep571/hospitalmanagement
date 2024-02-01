const db = require("../Models/BadAndBathModel");

const postdata = async (req, res) => {
    try {
        const {
            name,
            price,
            description,
            brand,
            category,
            cuttedprice,
            image,
            video,
            image1,
            image2,
            image3,
            image4,
            rating,
            modelName,
            style,
            colour,
            screenSize,
            about_this_item,
        } = req.body

        const insertdata = await db.create(
            {
                name,
                price,
                description,
                brand,
                category,
                cuttedprice,
                image,
                video,
                image1,
                image2,
                image3,
                image4,
                rating,
                modelName,
                style,
                colour,
                screenSize,
                about_this_item,
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
        res.status(200).json(findalldata);
    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    }
};


const getsingle = async (req, res) => {
    try {
        const findsingle = await db.findOne({ _id: req.params.id })
        res.status(200).json(findsingle)
    } catch (error) {
        res.status(500).json(error);
    }
}


const deletedata = async (req, res) => {
    try {
        const deletedata = await db.deleteOne({ _id: req.params.id })
        res.status(200).json(deletedata)
    } catch (error) {
        res.status(500).json(error)
    }
}

const Putdata = async (req, res) => {
    try {
        const {
            name,
            price,
            description,
            brand,
            category,
            cuttedprice,
            image,
            video,
            image1,
            image2,
            image3,
            image4,
            rating,
            modelName,
            style,
            colour,
            screenSize,
            about_this_item,
        } = req.body;
        let data = await db.updateMany(
            { _id: req.params.id },
            {
                $set: {
                    name,
                    price,
                    description,
                    brand,
                    category,
                    cuttedprice,
                    image,
                    video,
                    image1,
                    image2,
                    image3,
                    image4,
                    rating,
                    modelName,
                    style,
                    colour,
                    screenSize,
                    about_this_item,
                },
            }
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

const getPaginatedData = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 10;
        const skip = (page - 1) * pageSize;

        // Fetch data from the database with pagination
        const data = await db.find()
            .skip(skip)
            .limit(pageSize);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = {
    postdata,
    getdata,
    getsingle,
    deletedata,
    Putdata,
    getPaginatedData
}