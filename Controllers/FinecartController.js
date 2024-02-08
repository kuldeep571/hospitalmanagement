const db = require("../Models/FinecartModel");

const postdata = async (req, res) => {
    try {
        const {
            name,
            price,
            description,
            brand,
            category,
            rating,
            image,
            video,
            image1,
            image2,
            image3,
            image4,
            modelName,
            style,
            colour,
            screenSize,
            about_this_item,
            manufacturer,
            asin,
            voltage,
            item_weight,
            special_feature,
            speaker_type,
            wattage,
            standing_screen_display_size,
            aspect_ratio,
            memory_storage_capacity,
            ram_memory_installed_size
        } = req.body

        const insertdata = await db.create(
            {
                name,
                price,
                description,
                brand,
                category,
                rating,
                image,
                video,
                image1,
                image2,
                image3,
                image4,
                modelName,
                style,
                colour,
                screenSize,
                about_this_item,
                manufacturer,
                asin,
                voltage,
                item_weight,
                special_feature,
                speaker_type,
                wattage,
                standing_screen_display_size,
                aspect_ratio,
                memory_storage_capacity,
                ram_memory_installed_size
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
            rating,
            image,
            video,
            image1,
            image2,
            image3,
            image4,
            modelName,
            style,
            colour,
            screenSize,
            about_this_item,
            manufacturer,
            asin,
            voltage,
            item_weight,
            special_feature,
            speaker_type,
            wattage,
            standing_screen_display_size,
            aspect_ratio,
            memory_storage_capacity,
            ram_memory_installed_size
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
                    rating,
                    image,
                    video,
                    image1,
                    image2,
                    image3,
                    image4,
                    modelName,
                    style,
                    colour,
                    screenSize,
                    about_this_item,
                    manufacturer,
                    asin,
                    voltage,
                    item_weight,
                    special_feature,
                    speaker_type,
                    wattage,
                    standing_screen_display_size,
                    aspect_ratio,
                    memory_storage_capacity,
                    ram_memory_installed_size
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
    Putdata,
}