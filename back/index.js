require('dotenv').config();
const userMiddleware = require('./app/middlewares/userMiddleware');
// Express
const express = require('express');
const session = require('express-session');
const app = express();

// router
const router = require('./app/router');
const bodyParser = require('body-parser');

// Initialisation de la lecture de paramètre post ( création de req.body )
app.use(bodyParser.urlencoded({ extended: true }));
// router
app.use(bodyParser.json());

const PORT = process.env.PORT || 5050;

// Initialisation des sessions
app.use(
	session({
        // Un mot de passe qui sert à encoder le session_id
        secret: 'monsupersecret', 
        // Force à sauvegarder dans l'espace de stockage des sessions même si la session n'a pas été modifiée
        resave: true, 
        // Force à sauvegarder dans l'espace de stockage des sessions même si la session n'a pas initialisée
		saveUninitialized: true, 
		cookie: {
            maxAge: 8 * 60 * 60 * 1000
		},
	}),
);

// Ici on utilise notre custom user middleware afin de remplir la variable locals.connected_user
// app.use(userMiddleware);

// middleware CORS pour autoriser l'accées à l'API d'un autre domaine

app.use((req, res, next) => {
    // on autorise l'accés au front
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    // partage des cookies
    res.header('Access-Control-Allow-Credentials', true);
    // partage des données entres origins
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE');
    next();
});

app.use(router);

// launch server
app.listen( PORT,  () => {
    console.log(`Listening on ${PORT}`);
});