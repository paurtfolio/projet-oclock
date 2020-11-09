const { Article, Food, Sleep, Sport, Task, User, Sport_type, Food_type } = require('../models');
const Weight = require('../models/weight');
const Water = require('../models/water');

const dashboardController = {
    getAllInfos: async (req, res) => {
        try {
            // Récupération des informations du user
            const id = parseInt(req.params.id);
            const user = await User.findByPk(id, {
                // Récupération des informations de sleep, food, sport, water, weight, task, article_fav
                include: [
                    {association: 'foods', include: ['foods_type']},
                    {association: 'sports', include: ['sports_type']},
                    {association: 'weights'},
                    {association: 'waters'},
                    {association: 'tasks'},
                    {association: 'articles'},
                    {association: 'sleeps'},
                ]
            });
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    postDataSport: async (req, res) => {
        try {
            const dataSport = new Sport({
                duration: req.body.sportTime,
                intensity: req.body.sportIntensity,
                // emotion: req.body.emotion,
                user_id: parseInt(req.params.id),
                sport_type_id: parseInt(req.body.sportType),
            });
            if (dataSport) {
                const calory = await Sport_type.findByPk(dataSport.sport_type_id);
                let intensity = '';
                switch(dataSport.intensity) {
                    case "1" :
                        intensity = 0.8
                        break;
                        case "2" : 
                        intensity = 1
                        break;
                        case "3" : 
                        intensity = 1.30
                        break;
                    }
                    
                    const caloryTotal = (parseInt(calory.value) * dataSport.duration / 60) * intensity;
                    dataSport.dataValues.caloryTotal = caloryTotal;           
                    await dataSport.save();
                res.status(200).json(dataSport);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    postDataFood: async (req, res) => {
        console.log(req.body);
        try {
            const dataFood = new Food({
                // date: req.body.date,
                quantity: req.body.foodQuantity,
                // emotion: req.body.emotion,
                user_id: parseInt(req.params.id),
                food_type_id: parseInt(req.body.foodType),
            });
            console.log('dataFood', dataFood);
            if (dataFood) {
                const calory = await Food_type.findByPk(dataFood.food_type_id);
                // console.log('calory', calory);
                const quantity = dataFood.quantity;
                console.log('quantity', quantity);
                const caloryTotal = (parseInt(calory.value) / 100) * quantity;
                // console.log('caloryTotal', caloryTotal);
                dataFood.caloryTotal = parseInt(caloryTotal);
                await dataFood.save();
                res.status(200).json(dataFood);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    postDataWeight: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataWeight = new Weight({
                user_id: idUser,
                date: req.body.date,
                weight: req.body.weight,
                imc: req.body.imc,
            });
            if (dataWeight) {
                await dataWeight.save();
                res.status(200).json(dataWeight);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    postDataWater: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataWater = new Water({
                user_id: idUser,
                date: req.body.date,
                water: req.body.water,
            });
            if (dataWater) {
                await dataWater.save();
                res.status(200).json(dataWater);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    postDataSleep: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataSleep = new Sleep({
                user_id: idUser,
                // date: req.body.date,
                sleepHours: req.body.sleepHours,
            });
            if (dataSleep) {
                await dataSleep.save();
                res.status(200).json(dataSleep);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
    getAllTask: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const allTask = await Task.findAll({
                where: {
                    user_id: idUser
                }
            })
            res.status(200).json(allTask)
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    createTask: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataTask = new Task({
                user_id: idUser,
                title: req.body.title,
            });
            if (dataTask) {
                await dataTask.save();
                res.status(200).json(dataTask);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    deleteTask: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataTask = await Task.findByPk(idUser);
            await dataTask.destroy();
            res.status(200).json('Cette tâche est bien supprimée');
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    updateTask: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataTask = await Task.findByPk(idUser);
            if (!dataTask) {
                res.status(404).json({error: 'Cette tâche n\'existe pas'});
            } else {
                await dataTask.update(req.body);
                res.status(200).json(dataTask);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    toggleFavArticle: async (req, res) => {
        try {
            // récupération des id
            const userId = parseInt(req.params.user_id);
            const articleId = parseInt(req.params.article_id);

            const addArticle = await Article.findByPk(articleId, {
                include: {
                    association:'users',
                    where : { id: userId }
                }
            });
            if (addArticle) {
                await addArticle.removeUser(userId);
            } else {
                const article = await Article.findByPk(articleId);
                const addUser = await User.findByPk(userId);
                await article.addUser(addUser);
            }
            const user = await User.findByPk(userId, {
                // Récupération des informations de sleep, food, sport, water, weight, task, article_fav
                include: [
                    {association: 'articles'},
                ]
            });
            // console.log(user.articles);
            res.status(200).json(user.articles);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
        // const findUser = addArticle.users.find(element => element.id === userId);
        // console.log('findUser', findUser);
        // if (!addArticle) {
        //     return res.status(404).json('Article non trouvé');
        // }
        // // on récupère le user
        // const addUser = await User.findByPk(userId);
        // if (!addUser) {
        //     return res.status(404).json('User non trouvé');
        // }
        // // on retire le user à l'article grâce à sequelize
        // await addArticle.addUser(addUser);
        // // on doit recharger l'article si on veut voir la modification dans notre réponse
        // await addArticle.reload();
        // // on envoit la réponse
        // res.json(addArticle);
    // postAllArticleFav: async (req, res) => {
    //     // récupération des id
    //     const userId = req.params.user_id;
    //     const articleId = req.params.article_id;

    //     // on récupère la l'article
    //     const addArticle = await Article.findByPk(articleId, {
    //         include: 'users'
    //     });
    //     if (!addArticle) {
    //         return res.status(404).json('Article non trouvé');
    //     }
    //     // on récupère le user
    //     const addUser = await User.findByPk(userId);
    //     if (!addUser) {
    //         return res.status(404).json('User non trouvé');
    //     }
    //     // on retire le user à l'article grâce à sequelize
    //     await addArticle.addUser(addUser);
    //     // on doit recharger l'article si on veut voir la modification dans notre réponse
    //     await addArticle.reload();
    //     // on envoit la réponse
    //     res.json(addArticle);
    // },
    // // dissociation de user avec l'article
    // removeArticleFromUser: async (req, res) => {
    //     // récupération des id
    //     const userId = req.params.user_id;
    //     const articleId = req.params.article_id;
    //     // console.log(req.params.user_id);
    //     // console.log(req.params.article_id);
    //     // on récupère l'article'
    //     const addArticle = await Article.findByPk(articleId, {
    //         include: 'users'
    //     });
    //     if (!addArticle) {
    //         return res.status(404).json('Article non trouvé');
    //     }
    //     // on récupère le user
    //     const addUser = await User.findByPk(userId);
    //     if (!addUser) {
    //         return res.status(404).json('User non trouvé');
    //     }
    //     // on retire le user à l'article grâce à sequelize
    //     await addArticle.removeUser(addUser);
    //     // on doit recharger l'article si on veut voir la modification dans notre réponse
    //     await addArticle.reload();
    //     // on envoit la réponse
    //     res.json(addArticle);
    // },
};
// const idUser = parseInt(req.params.id);
// const ArticleFav = new Article({
//     user_id: idUser,
//     article_id: req.params.article_id,
// });
// if (ArticleFav) {
//     await ArticleFav.save();
//     res.status(200).json(ArticleFav);
// }
module.exports = dashboardController;