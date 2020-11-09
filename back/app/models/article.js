const Sequelize = require('sequelize');
const sequelize = require('../database');

class Article extends Sequelize.Model {};

Article.init({
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    source: Sequelize.STRING,
    media: Sequelize.STRING,
    label: Sequelize.STRING
}, {
    sequelize,
    tableName: "article"
});


module.exports = Article;
