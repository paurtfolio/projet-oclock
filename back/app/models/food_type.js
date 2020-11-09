const Sequelize = require('sequelize');
const sequelize = require('../database');

class Food_type extends Sequelize.Model {};

Food_type.init({
    name: Sequelize.STRING,
    value: Sequelize.STRING,
}, {
    sequelize,
    tableName: "food_type"
});


module.exports = Food_type;
