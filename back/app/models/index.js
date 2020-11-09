const Article = require('./article');
const Food = require('./food');
const Sleep = require('./sleep');
const Sport = require('./sport');
const Task = require('./task');
const User = require('./user');
const Weight = require('./weight');
const Water = require('./water');
const Food_type = require('./food_type');
const Sport_type = require('./sport_type');

// Relations

// Un user à plusieurs article en fav
User.belongsToMany(Article, {
    // alias de l'association
    as: "articles",
    // "via la table de liaison qui s'appelle ..."
    through: 'favorite_article',
    // le nom de la clé de user dans la table de liaison
    foreignKey: "user_id",
    // le nom de la clé de user dans la table de liaison
    otherKey: "article_id",
});
// ... et la réciproque !
Article.belongsToMany(User, {
    as: "users",
    through: 'favorite_article',
    foreignKey: 'article_id',
    otherKey: 'user_id',
});

// Un user à plusieurs données de sport
User.hasMany(Sport, {
    foreignKey: "user_id",
    as: "sports"
});

// Un tracker sport à un seul user
Sport.belongsTo(User, {
    foreignKey: "user_id",
    as: "user_sport"
});

// une donnée type peut avoir plusieurs enregistrements sports
Sport_type.hasMany(Sport, {
    foreignKey: "sport_type_id",
    as: "sport"
});

// Un enregistrement sport ne peut avoir qu'un seul type
Sport.belongsTo(Sport_type, {
    foreignKey: "sport_type_id",
    as: "sports_type"
});

// une donnée type peut avoir plusieurs enregistrements foods
Food_type.hasMany(Food, {
    foreignKey: "food_type_id",
    as: "food"
});

// Un enregistrement food ne peut avoir qu'un seul type
Food.belongsTo(Food_type, {
    foreignKey: "food_type_id",
    as: "foods_type"
});

// Un user à plusieurs données de sleep
User.hasMany(Sleep, {
    foreignKey: "user_id",
    as: "sleeps"
});

// Un user à plusieurs données de weight
User.hasMany(Weight, {
    foreignKey: "user_id",
    as: "weights"
});

// Un user à plusieurs données de water
User.hasMany(Water, {
    foreignKey: "user_id",
    as: "waters"
});

// Un tracker weight à un seul user
Weight.belongsTo(User, {
    foreignKey: "user_id",
    as: "user_weight"
});

// Un tracker water à un seul user
Water.belongsTo(User, {
    foreignKey: "user_id",
    as: "user_water"
});

// Un tracker sleep à un seul user
Sleep.belongsTo(User, {
    foreignKey: "user_id",
    as: "user_sleep"
});

// Un user à plusieurs données de food
User.hasMany(Food, {
    foreignKey: "user_id",
    as: "foods"
});

// Un tracker food à un seul user
Food.belongsTo(User, {
    foreignKey: "user_id",
    as: "user_food"
});

// Un user à plusieurs données de task
User.hasMany(Task, {
    foreignKey: "user_id",
    as: "tasks"
});

// Un task à un seul user
Task.belongsTo(User, {
    foreignKey: "user_id",
    as: "user_task"
});

module.exports = { Article, Food, Sleep, Sport, Task, User, Food_type, Sport_type };
