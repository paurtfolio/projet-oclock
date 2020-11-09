const Sequelize = require('sequelize');
const sequelize = require('../database');

class Water extends Sequelize.Model {};

Water.init({
    date: Sequelize.DATE,
    water: Sequelize.INTEGER
}, {
    sequelize,
    tableName: "water"
});


module.exports = Water;
