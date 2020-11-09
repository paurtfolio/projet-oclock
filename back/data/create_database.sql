BEGIN TRANSACTION;

-- on commence par détruire toutes les tables si elles existent
DROP TABLE IF EXISTS "user", "weight", "article", "favorite_article", "food", "food_type", "water", "sleep", "sport", "sport_type", "task" CASCADE;

-- création des tables
CREATE TABLE "user" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" DATE,
    "gender" TEXT,
    "height" INTEGER,
    "estimatedSleepTime" INTEGER,
    "weightGoal" INTEGER,
    "password" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT FALSE
);

-- la table 'weight'
CREATE TABLE "weight" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "weight" NUMERIC,
    "imc" INTEGER
);

--
-- Structure de la table 'article'
--

CREATE TABLE "article" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "media" TEXT NOT NULL,
    "label" TEXT NOT NULL
);

--
-- Structure de la table 'favorite_article'
--

CREATE TABLE "favorite_article" (
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "article_id" INTEGER REFERENCES "article"("id") NOT NULL
);



--
-- Structure de la table 'aliment_type'
--

CREATE TABLE "food_type" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

--
-- Structure de la table 'food'
--

CREATE TABLE "food" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "food_type_id" INTEGER REFERENCES "food_type"("id") NOT NULL,
    "date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "caloryTotal" INTEGER,
    "quantity" INTEGER NOT NULL,
    "emotion" TEXT
);

-- la table 'water'
CREATE TABLE "water" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "water" INTEGER
);

--
-- Structure de la table 'sleep'
--

CREATE TABLE "sleep" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "date" DATE DEFAULT CURRENT_TIMESTAMP,
    "sleepHours" INTEGER NOT NULL
);

--
-- Structure de la table 'sport_type'
--

CREATE TABLE "sport_type" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

--
-- Structure de la table 'sport'
--

CREATE TABLE "sport" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "sport_type_id" INTEGER REFERENCES "sport_type"("id") NOT NULL,
    "date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "caloryTotal" INTEGER,
    "duration" INTEGER NOT NULL,
    "intensity" TEXT NOT NULL,
    "emotion" TEXT
);

--
-- Structure de la table 'task'
--

CREATE TABLE "task" (
    "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "title" TEXT NOT NULL
);

COMMIT;