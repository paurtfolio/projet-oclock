const SportType = require('../models/sport_type');

const sportTypeController = {
    getAllSportsType: async (req, res) => {
        try {
            const allSportsType = await SportType.findAll()
            res.status(200).json(allSportsType)
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
};

module.exports = sportTypeController;