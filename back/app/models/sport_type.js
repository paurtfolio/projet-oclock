const Sequelize = require('sequelize');
const sequelize = require('../database');

class Sport_type extends Sequelize.Model {};

Sport_type.init({
    name: Sequelize.STRING,
    value: Sequelize.STRING,
}, {
    sequelize,
    tableName: "sport_type"
});


module.exports = Sport_type;
