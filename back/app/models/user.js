const Sequelize = require('sequelize');
const sequelize = require('../database');

class User extends Sequelize.Model {}; 

User.init({
    lastName: Sequelize.STRING,
    firstName: Sequelize.STRING,
    email: Sequelize.STRING,
    birthdate: Sequelize.DATE,
    gender: Sequelize.STRING,
    height: Sequelize.INTEGER,
    estimatedSleepTime: Sequelize.INTEGER,
    password: Sequelize.STRING,
    is_admin: Sequelize.BOOLEAN
}, {
    sequelize,
    tableName: "user"
});


module.exports = User;
