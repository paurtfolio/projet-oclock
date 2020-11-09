const Sequelize = require('sequelize');
const sequelize = require('../database');

class Task extends Sequelize.Model {};

Task.init({
    title: Sequelize.STRING,
}, {
    sequelize,
    tableName: "task"
});


module.exports = Task;

