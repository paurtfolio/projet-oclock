const Sequelize = require('sequelize');
const sequelize = require('../database');

class Food extends Sequelize.Model {};

Food.init({
    date: Sequelize.DATE,
    quantity: Sequelize.INTEGER,
    emotion: Sequelize.STRING,
    caloryTotal: Sequelize.INTEGER
}, {
    sequelize,
    tableName: "food"
});


module.exports = Food;
