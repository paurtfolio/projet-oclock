const Article = require('../models/article');

const articlesController = {
    getAllArticles: async (req, res) => {
        try {
            const allArticles = await Article.findAll()
            res.status(200).json(allArticles)
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
    getArticlesByLabel : async (req, res) => {
        const { label } = req.params;
        try {     
            const allArticles = await Article.findAll({ where: { label: label } });
            if (allArticles) {
                res.status(200).json(allArticles);
            } else {
                res.status(404).json('Ces articles n\'existent pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    getOneArticle : async (req, res) => {
        try {     
            const id = parseInt(req.params.id);
            const oneArticle = await Article.findByPk(id);
            if (oneArticle) {
                res.status(200).json(oneArticle);
            } else {
                res.status(404).json('Cet article n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
    // si article mis en favori, impossible de supprimer l'article en question
    deleteArticle: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const article = await Article.findByPk(id);
            await article.destroy()
            res.status(200).json(article);
            // Puis on redirige vers la page d'accueil
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
};

module.exports = articlesController;