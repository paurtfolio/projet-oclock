const FoodType = require('../models/food_type');

const foodTypeController = {
    getAllFoodsType: async (req, res) => {
        try {
            const allfoodsType = await FoodType.findAll()
            res.status(200).json(allfoodsType)
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
};

module.exports = foodTypeController;