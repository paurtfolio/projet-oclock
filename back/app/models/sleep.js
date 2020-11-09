const Sequelize = require('sequelize');
const sequelize = require('../database');

class Sleep extends Sequelize.Model {};

Sleep.init({
    date: Sequelize.DATE,
    sleepHours: Sequelize.INTEGER,
}, {
    sequelize,
    tableName: "sleep"
});


module.exports = Sleep;
