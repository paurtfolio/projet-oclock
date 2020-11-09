const bcrypt = require('bcrypt');
const User = require('../models/user');


const userController = {
    signupAction: async (req, res) => {
        try {
            const { lastName, firstName, email, password, confirmedPassword } = req.body;
            // on créé une const contenant un array d'erreur
            const bodyError=[];
            // si l'utilisateur ne rempli les input, il reçoit une alert
            if (lastName.trim() === '') {
				bodyError.push('Merci de saisir votre nom');
            }
            if (firstName.trim() === '') {
				bodyError.push('Merci de saisir votre prénom');
			}
            if (email.trim() === '') {
				bodyError.push('Merci de saisir une adresse email');
			}
			if (password.trim() === '') {
				bodyError.push('Merci de saisir un mot de passe');
            }
			if (password !== confirmedPassword) {
				bodyError.push('Les 2 mots de passe sont différents');
			}
			// On vérifie que l'utilisateur est présent en BDD
            const user = await User.findOne({ where: { email: email } });
            if (user) {
                bodyError.push('Cet utilisateur existe déjà');
            }
            if (bodyError.length) {
                res.status(400).json(bodyError);
            } else {
                // on stock le password crypté
                const passwordEncrypted = bcrypt.hashSync(password, 10);
                let newUser = User.build({
                    lastName : req.body.lastName,
                    firstName : req.body.firstName,
                    email : req.body.email,
                    password: passwordEncrypted,
                });
                // await newUser.save();
                // res.status(200).json(newUser);
                const save = await newUser.save(user);
                const messageInscription = 'Inscription successful';
                const messageErrorInscription = 'Inscription aborted';

                if (save.id) {
                    res.status(200).json(messageInscription)
                } else {
                    res.status(500).json(messageErrorInscription)
                }
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
    
    loginAction: async (req, res) => {
        const { email, password } = req.body;
        // on créé une const contenant un array d'erreur
        const bodyError=[];
		try {
			// On vérifie que l'utilisateur est présent en BDD
        const user = await User.findOne({ where: { email: email } });
        // console.log(user);
			if (!user) {
                bodyError.push(`Cet utilisateur n'existe pas`);
                res.status(404).json(bodyError);
			} else {
                // L'utilisateur existe bien en BDD, on va donc tester son mot de passe
                if (!bcrypt.compareSync(password, user.password)) {
                    // Si le mot de passe n'est pas le bon alors on va envoyer une erreur
                    bodyError.push(`Le mot de passe est incorrect`);
                    res.status(404).json(bodyError);
                }
                // L'utilisateur existe en BDD, et le mot de passe est correct
                // Il faut donc connecter cet utilisateur
                // On le stocke dans la session
                // req.session.user = user.toJSON();
                req.session.user = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }
                // On oublie pas de supprimer le mot de passe
                delete req.session.user.password;
                // delete user.password;
                const messageConnexion = 'Connexion successful';
                console.log('req.session.user', req.session.user);
                // console.log(req.session.user);
                res.status(200).json({message: messageConnexion, session: req.session.user, user: user});
                // Puis on redirige vers la page d'accueil
                // res.redirect('/');
            }
		} catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
		}
    },

    getProfile: async (req, res) => {
        try {
            const id = parseInt(req.params.id);

            const user = await User.findByPk(id);
            // On oublie pas de supprimer le mot de passe et is_admin
            user.password = undefined;
            user.is_admin = undefined;
            // on renvoie les informations au front
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
    
    updateProfile: async (req, res) => {
        try {
            // const { lastName, firstName, birthdate, gender, height, estimatedSleepTime, password } = req.body;
            const id = parseInt(req.params.id);
            const user = await User.findByPk(id);
            if (!user) {
                res.status(404).json({error: 'Cet utilisateur n\'existe pas'});
            } else {
                
                await user.update(req.body);
                res.status(200).json(user);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    deleteProfile: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const user = await User.findByPk(id);
            await user.destroy();
            res.status(200).json(user);
            // Puis on redirige vers la page d'accueil
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    logoutAction: async (req, res) => {
        try {
            // // tableau d'erreur
            // const messageTab = [];
            // // si l'utilisateur n'est pas connecter on renvoie la session a false avec un message
            // if (req.session.user.connected_user === false) {
            //     const messageLogout = 'Aucun utilisateur n\'est connecté';
            //     messageTab.push({messageLogout: messageLogout});
            //     return res.status(404).json({message: messageTab, session: req.session.user});
            // };
            // // si l'utilisateur est connecter on lui renvoie sa session avec un message de confirmation
            // if (req.session.user.connected_user === true){
            //     req.session.user = {connected_user: false};
            //     const messageLogout = 'Déconnexion de l\'utilisateur ok';
            //     messageTab.push({messageLogout: messageLogout});
            //     return res.status(200).json({message: messageTab, session: req.session.user});
            // };
            req.session.destroy();
            res.status(200).json({isLogged: false});
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
    // on interroge le bakc pour savoir si on a une session
    isLogged: (req, res) => {
        console.log(req.session.user);
        if (req.session.user) {
            // oubli pas de rajouter le async ligne 178
            // const user = await User.findByPk(req.session.user.id);
            res.json({
                id: req.session.user.id,
                firstName: req.session.user.firstName,
                lastName: req.session.user.lastName,
                email: req.session.user.email,
                isLogged: true,
            });
        } else {
            res.json({
                isLogged: false,
            });
        }
    },
};

module.exports = userController;