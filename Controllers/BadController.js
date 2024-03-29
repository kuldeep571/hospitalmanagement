const db = require("../Models/BadModel");

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
            material,
            rating,
            video,
            image1,
            image2,
            image3,
            image4,
            style,
            colour,
            screenSize,
            about_this_item,
            manufacturer,
            item_weight,
            product_dimensions,
            special_feature,
            finish_type,
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
                material,
                rating,
                video,
                image1,
                image2,
                image3,
                image4,
                style,
                colour,
                screenSize,
                about_this_item,
                manufacturer,
                item_weight,
                product_dimensions,
                special_feature,
                finish_type,
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
            material,
            rating,
            video,
            image1,
            image2,
            image3,
            image4,
            style,
            colour,
            screenSize,
            about_this_item,
            manufacturer,
            item_weight,
            product_dimensions,
            special_feature,
            finish_type,
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
                    material,
                    rating,
                    video,
                    image1,
                    image2,
                    image3,
                    image4,
                    style,
                    colour,
                    screenSize,
                    about_this_item,
                    manufacturer,
                    item_weight,
                    product_dimensions,
                    special_feature,
                    finish_type,
                },
            }
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

module.exports = {
    postdata,
    getdata,
    getsingle,
    deletedata,
    Putdata
}