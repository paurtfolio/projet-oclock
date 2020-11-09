BEGIN;
--
-- Contenu de la table 'user'
--

INSERT INTO "user" ("lastName", "firstName", "email", "birthdate", "gender", "height", "estimatedSleepTime", "weightGoal", "password", "is_admin") VALUES
('MAMP', 'PMAM', 'test@test.com', '1990-04-20', 'male', '174', '7', '70', 'coucou123', 'true'),
('jon', 'doe', 'blabla@test.com', '1990-05-25', 'male', '173', '5', '70', 'salut123', 'false');

-- --------------------------------------------------------

--
-- Contenu de la table 'weight'
--

INSERT INTO "weight" ("user_id", "date", "weight", "imc") VALUES
(1, '2020-09-28 07:00:00', '70', '23'),
(2, '2020-09-10 01:00:00', '68', '22');

-- --------------------------------------------------------

--
-- Contenu de la table 'article'
--

INSERT INTO "article" ("title", "content", "source", "media", "label") 
VALUES
('Comment l''abus de sucre transforme notre cerveau', 'Nous adorons les gâteries sucrées. Mais trop de sucre dans notre alimentation peut causer un gain de poids et l''obésité, le diabète de type 2 ainsi que la carie dentaire. Nous savons qu''il vaut mieux éviter les bonbons, la crème glacée, les biscuits, les gâteaux et les boissons gazeuses, mais il est parfois très difficile d''y résister. C''est comme si notre cerveau était programmé pour avoir envie de ces aliments. Le corps fonctionne au sucre – au glucose pour être précis. Le glucose alimente les cellules qui nous composent, y compris celles du cerveau (les neurones). Nos lointains ancêtres étaient des charognards. Comme les aliments sucrés constituent une excellente source d''énergie, l''évolution a fait en sorte que nous les trouvions particulièrement bons. Les aliments au goût désagréable, amer ou aigre peuvent être toxiques, avariés ou pas assez mûrs, et donc entraîner des maladies.', 'https://www.ouest-france.fr/leditiondusoir/data/71879/reader/reader.html#!preferred/1/package/71879/pub/102193/page/13s', 'https://www.ouest-france.fr/leditiondusoir/data/71879/NextGenData/Image-1024-1024-13378859.jpg', 'alimentation'),
('Bien manger, 10 règles alimentaires pour une bonne santé', 'Première règle, limiter les aliments ultra-transformés. Cette règle, très simple, vise à limiter l''alimentation d''origine industrielle, source de sucre et d''additifs inutiles et potentiellement toxiques. Vous contrôlez ce que vous avalez quand vous cuisinez des aliments frais, mais pas quand il s''agit d''aliments industriels. En plus, ces aliments sont souvent prédigérés, extrudés, excessivement chauffés, mous, ce qui peut se traduire à la longue par des problèmes de santé. Il faut savoir aussi que les aliments transformés peuvent renfermer des niveaux élevés de substances indésirables et toxiques qu''on appelle AGE. Deuxième règle, consommer plus de la moitié de sa nourriture sous forme végétale. Cette règle stipule qu''il faudrait consommer plus de la moitié de sa nourriture, en poids, sous la forme de végétaux crus, secs, fermentés ou cuits ; ce régime alimentaire s''accorde parfaitement à notre physiologie digestive et à notre microbiote intestinal, c''est-à-dire aux bonnes bactéries qui vivent en nous et contribuent à notre santé. En suivant cette règle, vous optimisez aussi les apports en fibres. Présentes dans les légumes et les fruits frais ou secs, les céréales, les légumes secs, les fibres ont une influence sur le taux de sucre sanguin et le transit.', 'https://www.lanutrition.fr/10-regles-pour-bien-manger', 'https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/assiette_biremplie_shutterstock_165933947.jpg', 'alimentation'),
('Faut-il limiter les protéines pour augmenter notre longévité ?', 'Manger moins, c''est-à-dire diminuer les calories, permettrait de vivre plus longtemps d''après les spécialistes de la longévité. Mais peut-être que ce ne sont pas tant les calories qu''il faudrait limiter que les protéines. Diminuer ses apports énergétiques sur la journée, par exemple en sautant un repas (jeûne intermittent) ou en mangeant moins à chaque repas semble contribuer à augmenter l''espérance de vie. C''est en tout cas ce qu''indiquent les études chez les animaux depuis plusieurs décennies. ''''La restriction calorique, associée à une alimentation adéquate, est sans doute le procédé antivieillissement le plus efficace connu à ce jour'''' écrivent les Drs Fung et DiNicolantonio dans La Solution longévité. Un procédé appliqué de manière culturelle dans certaines régions du monde, les zones bleues qui comptent le plus de centenaires, comme Okinawa, où il est de coutume d''arrêter de manger lorsque sa satiété atteint 80%. Résultats : en mangeant 20% de calories de moins que le reste des Japonais, les habitants d''Okinawa ont aussi plus de chances qu''eux de vivre plus longtemps en bonne santé.', 'https://www.lanutrition.fr/faut-il-limiter-les-proteines-pour-augmenter-notre-longevite', 'https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/shutterstock_571277470.jpg', 'alimentation'),
('Chocapic : un aliment recommandé par le Nutriscore...', 'Nestlé vient de lancer une campagne marketing importante autour du Nutri-score B obtenu par les Chocapic, ses célèbres céréales du petit déjeuner. Influenceurs et journalistes sont ainsi invités à communiquer autour de cette bonne nouvelle, notamment grâce à un jeu vidéo dédié. Petit souci : le Nutriscore n''est pas un indice nutritionnel fiable comme LaNutrition l''explique depuis plusieurs années, notamment parce qu''il ne prend pas en compte le degré de transformation des aliments. Et cet exemple est emblématique de comment cet indice peut être détourné au profit des industriels. Car les Chocapic, malgré le bon Nutriscore, sont en réalité un aliment ultra-transformé. Comme plus de 50 % des produits de cette catégorie B !', 'https://www.lanutrition.fr/chocapic-un-aliment-ultra-transforme-recommande-par-le-nutriscore', 'https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/shutterstock_1129769495.jpg', 'alimentation'),
('Sport et mal de dos : les bons réflexes', 'Au cours de leur vie, quatre personnes sur cinq souffrent d’un mal de dos. Ce dernier, souvent localisé en bas de la colonne vertébrale, est appelé lombalgie. Si ce mal est courant, il ne doit pas être considéré comme une fatalité. Il existe un remède naturel prouvé : l''activité physique ! Sport et mal de dos = le duo gagnant ! Découvrez les bons gestes et les exercices qui soulagent le dos. Selon une étude OpinionWay1  de 2017, neuf Français sur dix ont déjà été touchés par le mal de dos. La lombalgie touche à tous les âges. Une souffrance qui concerne néanmoins davantage les femmes (61%, contre 39% d’hommes). Les jeunes ont tendance à ne pas considérer la gravité même si 84% des 18-24 ans déclarent avoir déjà eu mal au dos. Les sportifs ne sont pas non plus épargnés. Que faire en cas de mal de dos ? Quels exercices peuvent soulager ? Mathieu Joubel, kinésithérapeute du sport et préparateur athlétique au cabinet K-Sports à Rennes, apporte des éclaircissements.', 'http://www.athletesdubienetre.fr/sport-mal-de-bons-reflexes/', 'http://www.athletesdubienetre.fr/wp-content/uploads/massage-2722936_1920-1024x683.jpg', 'sport'),
('Vers quel sport se tourner pour chasser le stress ?', 'Certaines personnes auront tendance à choisir des activités qui défoulent comme exutoire, quand d''autres se tourneront vers des pratiques plus douces. De nature stressée et sensible, Lucile Dugal, est une jeune entrepreneuse qui a fondé Porridge Lab et découvert le yoga, il y a un an. ''''C’est ainsi que j’ai appris à gérer mon stress. Lorsque votre passion (ndlr : la cuisine) s’avère être votre métier, vous y pensez constamment. J’ai réussi à mettre en place une routine du soir et du matin afin de m’aider à canaliser mon énergie. Cela m''a permis d''aborder le quotidien avec plus de sérénité''''. Si Lucile était plutôt de la team défouloir avec une pratique du fitness et du trail, elle aspire, aujourd’hui à 30 ans, à des activités plus en adéquation avec son mode de vie et qui l''aident à gérer son mental. ''''Il y a trois ans, je pratiquais du yoga grâce à des vidéos sur YouTube, ce rituel est devenu quotidien. Le yoga permet de bouger et d''étirer mon corps afin d''être plus alerte et productive avant d''attaquer la journée mais aussi de travailler sur la respiration pour gérer mon stress''''. Cécile Espinasse pratiquait intensément des activités cardio comme le cycling indoor. Rédactrice indépendante, elle s''est également tournée vers le yoga et la méditation pour évacuer les tensions de la journée et la pression du freelance. ''''Le relâchement se voit même sur mon visage. Après une journée sous tension, j’ai les traits tirés. Je me rends au yoga et c’est magique ! Mon corps et mon esprit ressortent totalement détendus''''.', 'http://www.athletesdubienetre.fr/vers-quel-sport-se-tourner-pour-chasser-le-stress/', 'http://www.athletesdubienetre.fr/wp-content/uploads/sport-canin-selection-sports-avec-votre-chien.jpg', 'sport'),
('Le yoga pour mieux respirer', 'Parmi les 13,5 millions de coureurs réguliers, ils sont de plus en plus à s’adonner au yoga en parallèle de leurs sorties, et à vanter les mérites de cette pratique. Un oeil sur les réseaux sociaux suffit à confirmer cette yogamania chez les runners. Un engouement également bien visible sur le terrain : de nombreux yogas géants sont proposés avant le départ des courses ou à l’arrivée, en guise de cocooning post-effort.… Simple phénomène de mode ? Non, balaye Pascal Jover, co-fondateur du Running-Yoga. Féru de course à pied longue distance, Pascal Jover fait partie des premiers convaincus de la complémentarité des deux activités. Tombé dans la marmite du yoga 20 ans plus tôt, il se nourrit de cet équilibre entre ces univers au point de se former et de transmettre les enseignements du yoga aux runners.
En 2015, le sportif crée avec Bénédicte Opsomer, professeure de yoga, le Running Yoga, une approche 100 % pensée pour le runner. Pour Pascal Jover, si le mix yoga et running fonctionne autant, c’est d’abord grâce au travail respiratoire. Le yoga permet de se réapproprier sa respiration et invite à mieux respirer. Dans toutes les postures proposées en Running Yoga par exemple, on est posé sur le rythme respiratoire, ce qui rééduque et approfondit la respiration Sans la conscience du souffle, difficile de progresser en course à pied, dixit notre expert. Le tapis de yoga serait donc un moyen de mieux respirer une fois lancé sur le bitume, pour notre runner-yoguiste. Le yoga augmente la souplesse de la cage thoracique  et optimise le fonctionnement du diaphragme (le principal muscle respiratoire). Le coureur va pouvoir s’entraîner plus efficacement, notamment améliorer ses performances et sa vitesse de course. Mieux respirer favorise aussi la régénération cellulaire après la course et optimise la récupération. ''''Une pratique régulière fait baisser l’état inflammatoire dans le corps'''', ajoute encore le spécialiste.', 'http://www.athletesdubienetre.fr/yoga-super-allie-des-runners/', 'https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'sport'),
('5 applications qui récompensent votre activité sportive', '1) Running Heroes
Cette plateforme d''encouragement à la course à pied propose des récompenses sous forme de bons de réductions auprès de nombreux partenaires. Connectez votre appli de running ou votre montre GPS à Running Heroes qui récupère ainsi vos performances et les convertit en points.
Vous aimerez : les grandes marques associées (Polar, Nike, Garmin, TomTom, New Balance, Tag Heuer, Spotify, Rossignol…) avec de belles dotations à la clef ! Si vous aimez pédaler, sachez aussi que Cycling Heroes gratifie désormais vos efforts ! ...', 'http://www.athletesdubienetre.fr/5-applis-qui-recompensent-votre-activite-sportive/', 'http://www.athletesdubienetre.fr/wp-content/uploads/running-heroes-appli.jpg', 'sport'),
('10 minutes pour s''initier à la PNL', 'Moins de 10 minutes pour s''initier aux concepts principaux de la programmation neuro-linguistique (PNL). Qui sait, vous découvrirez peut-être les clés d''un futur changement dans votre vie ? PNL est l’acronyme pour Programmation Neuro-Linguistique et constitue une technique de communication, mise au point dans les années 1970, nous aidant à nous transformer positivement. Au lieu de s''attarder aux origines de nos comportements, la PNL mise plutôt sur l''observation de nos réactions. On dit qu''elle s''intéresse plus au comment qu''au pourquoi. Le mot programmation peut étonner, mais il est lourd de sens. En effet, nous avons tous des façons de réagir, de penser et d''agir. Ce sont nos programmes personnels. En les observant avec un thérapeute, on arrive soit à les reproduire, soit à les modifier. Grâce à notre capacité neurologique (neuro), on arrive à puiser dans nos expériences de vie et nos perceptions pour faire des corrélations entre elles. En fait, avec toutes nos observations sur nos réactions, on se constitue, peu à peu, une boîte d’outils qui nous permettra, ensuite, de mieux réagir dans diverses situations.', 'https://www.canalvie.com/sante-beaute/bien-etre/programmation-neuro-linguistique-1.1811167', 'https://www.canalvie.com/polopoly_fs/1.1874207.1473182550!/image/pnl.jpg_gen/derivatives/cvlandscape_670_377/pnl.jpg', 'bienetre'),
('10 façons d''éviter la fatigue', '1 - Dormir suffisamment. On ne le dira jamais assez, le sommeil c’est la santé !. Alors, comment rester en forme quand nos nuits sont perturbées ? Si vous pensez souffrir de l''un des très nombreux troubles du sommeil existants, selon l''organisation à but non lucratif Fondation Sommeil, il est peut-être temps de consulter un professionnel de la santé. Dans tous les cas, se coucher à des heures régulières et laisser le stress hors du lit sont la clé pour un sommeil de qualité. Et si vous êtes tout de même fatigué(e), une sieste de 20 minutes en journée, idéalement entre midi et 15 h, pourrait bien vous requinquer. 2 - Faire de l’exercice. Difficile de trouver la motivation pour bouger quand on est épuisé(e)... Pourtant, le sport a pour effet de nous donner un regain d’énergie. Comment ? Les neurotransmetteurs qui agissent sur le bien-être et le stress, les endorphines et la sérotonine, sont sécrétées par notre organisme après 30 minutes d’efforts soutenus. Et si on vous disait que de bouger régule aussi notre horloge interne et favorise le sommeil ?...', 'https://www.canalvie.com/sante-beaute/bien-etre/articles-bien-etre/10-trucs-pour-eviter-fatigue-1.1395939', 'https://www.canalvie.com/polopoly_fs/1.13495116.1600111279!/image/trucs-eviter-fatigue3-.jpg_gen/derivatives/cvlandscape_670_377/trucs-eviter-fatigue3-.jpg', 'bienetre'),
('10 conseils pour vivre heureux', 'Un jour ou l''autre, au cours de notre vie, nous sommes confrontés à des questions existentielles et à des remises en question. Les épreuves, les événements malheureux, les différends irritants qui se présentent sur notre route ont une grande influence sur notre cheminement. Comment trouver le bonheur malgré les problèmes ? Comment faire pour être heureux dans la vie ? Certains êtres humains ont des prédispositions au bonheur, d''autres auront besoin de soutien psychologique ou d''assistance médicale, lors d''une dépression, par exemple. Voici quelques pistes pour nous aider à préserver l''équilibre du bonheur... 1. Oublier le passé. Vivre le moment présent ! Au risque d''être saturé par ce concept, il s''agit pourtant d''un conseil plus que précieux. Nous ne pouvons rien modifier du passé, souvent ponctué d''événements malheureux que nous regrettons. Ruminer ces pensées nous empêche de vivre sereinement et positivement. Quant à l''avenir, nous n''en savons rien et nous ne pouvons en être garants. Vivre pleinement le moment présent en accomplissant toutes les tâches qui s''y rattachent nous permet d''apprécier la vie et les richesses qu''elle nous offre.', 'https://www.canalvie.com/sante-beaute/bien-etre/articles-bien-etre/comment-vivre-heureux-1.1366291', 'https://www.canalvie.com/polopoly_fs/1.8489727.1539267842!/image/vivre_heureux.jpg_gen/derivatives/cvlandscape_670_377/vivre_heureux.jpg', 'bienetre'),
('Accros aux téléphones intelligents', 'Le phénomène est même à l’origine d’un néologisme : la nomophobie. Les gens craignent d’oublier leur téléphone, ou leur chargeur, à la maison. Une étude réalisée en Grande-Bretagne démontre que le fait de se retrouver sans téléphone portable engendre un stress comparable au trac qui vous gagne le jour de votre mariage ou dans les heures qui précèdent un rendez-vous chez le dentiste chez 66 % des utilisateurs. Renversant ! Il est toutefois possible de se libérer de cette dépendance : Effectuez quelques sorties sans votre téléphone. Il vous manquera les premières fois, mais vous vous y habituerez. Puis, rangez-le durant toute une semaine. Activez l''option ''''Ne pas déranger'''' la nuit et vous ne serez plus dérangé par les notifications des messages et applications. Les appels rentreront selon les paramètres que vous aurez programmé... Même si les experts ne parlent pas de dépendance au sens clinique du terme, les utilisateurs, eux, n''hésitent pas à utiliser ce terme pour expliquer leur besoin viscéral de consulter ce petit appareil. Pourtant, voilà seulement quelques années, il n''était absolument pas nécessaire...', 'https://www.canalvie.com/sante-beaute/bien-etre/articles-bien-etre/accro-cellulaire-1.1325851', 'https://www.canalvie.com/polopoly_fs/1.3606280.1517931296!/image/cellulaires.jpg_gen/derivatives/cvlandscape_670_377/cellulaires.jpg', 'bienetre'),
('Qu''est-ce que le véganisme ?', 'Le véganisme est un mode de vie qui s''efforce d''éviter toute utilisation d''animaux pour la nourriture, les vêtements, les divertissements, les expériences ou tout autre fin. Bien que cette description semble très réductrice, le véganisme ouvre tout un monde de nouvelles possibilités, de produits et d’idées. C’est un mode de vie basé sur le respect et la compassion et sur des principes de base tels que le droit à la vie et à l’autodétermination. Alimentation : Une alimentation végane est exempte de produits d''origine animale. Des exemples évidents sont la viande, le poisson, le poulet, les produits laitiers (lait animal, yaourt, fromage, beurre …), les oeufs, le miel, la gélatine et les bouillons à base de viande. ''''Que mangez-vous encore?!'''' est la question la plus fréquente. Heureusement, il y a de bonnes nouvelles : avec les légumes, les légumineuses, les fruits secs, les graines et les céréales, vous pouvez faire presque tout, de la restauration rapide à la nourriture crue, pour tout ce que vous voulez. Pour plus d''informations, visitez nos conseils d''alimentation pratiques ou commencez avec nos recettes véganes.', 'https://bevegan.be/fr/au-sujet-de-veganisme/quest-ce-que-le-veganisme/', 'http://paurtfolio.fr/projets/apo/pexels-photo-2377164.jpg', 'alimentation'),
('Crossfit, qu''est-ce-que c''est ?', 'Très en vogue depuis quelques années, le crossfit est un programme combinant plusieurs activités physiques et sportives. Il inclut notamment la musculation, la gymnastique et l''haltérophilie. Ce sport se base, entre autres, sur divers exercices dont les gestes se rapprochent de ceux que vous réalisez dans la vie de tous les jours : s''asseoir, se lever, s''accroupir… Durant une séance de crossfit, grimper, sauter et frapper seront également au programme.
Avec le crossfit, vous pourrez travailler trois éléments à la fois : votre endurance, votre force et votre aérobie...', 'https://www.sport-et-fitness.fr/crossfit-qu-est-ce-que-c-est/', 'https://854858.smushcdn.com/1843420/wp-content/uploads/2019/07/explications-crossfit.jpg', 'sport'),
('Le bien-être au travail', 'C''est quoi le bien-être au bureau ? Nouveau levier stratégique, facteur de compétitivité, outil de GRH, si vous savez maintenant à quoi sert le bien-être au travail, ça ne vous dit toujours pas ce que c’est. Alors que finalement, tout part de là. Commençons par sa définition littérale. D''après le dictionnaire Larousse, le bien-être est ''''un état agréable résultant de la satisfaction des besoins du corps et du calme de l''esprit''''. Ce n''est donc pas qu''une affaire de santé, d''ergonomie et de conditions matérielles. Au bureau, le bien-être dépend de nombreuses dimensions telles que le management, la relation à la vie privée, le rythme de travail, les relations entre collègues ou encore la sensation d''être utile à l''entreprise. Pour viser ce sentiment d''équilibre, de sérénité et de bonheur, il faut alors se soucier autant du corps que de l''esprit et les satisfaire tous deux. Et c''est là que les choses se compliquent. S''il en faudra peu à certains pour être satisfaits, il en faudra beaucoup plus à d''autres. Notre niveau de satisfaction est très personnel et subjectif. Et toute la difficulté est de le voir mais aussi de le comprendre.', 'http://www.bienetretravail.fr/', 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg', 'bienetre');
-- --------------------------------------------------------

--
-- Contenu de la table 'favorite_article'
--

INSERT INTO "favorite_article" ("user_id", "article_id") VALUES
(1,1),
(1,4),
(1,5);

-- --------------------------------------------------------

--
-- Contenu de la table 'food_type'
--

INSERT INTO food_type(name,value) VALUES ('Abricot',43);
INSERT INTO food_type(name,value) VALUES ('Ananas',55);
INSERT INTO food_type(name,value) VALUES ('Banane',88);
INSERT INTO food_type(name,value) VALUES ('Canneberges',46);
INSERT INTO food_type(name,value) VALUES ('Cerises',50);
INSERT INTO food_type(name,value) VALUES ('Citron',35);
INSERT INTO food_type(name,value) VALUES ('Coing',38);
INSERT INTO food_type(name,value) VALUES ('Cynorrhodon',162);
INSERT INTO food_type(name,value) VALUES ('Figue',107);
INSERT INTO food_type(name,value) VALUES ('Fraises',32);
INSERT INTO food_type(name,value) VALUES ('Framboises',36);
INSERT INTO food_type(name,value) VALUES ('Fruit de la passion',97);
INSERT INTO food_type(name,value) VALUES ('Gingembre',80);
INSERT INTO food_type(name,value) VALUES ('Grenade',74);
INSERT INTO food_type(name,value) VALUES ('Kiwi',51);
INSERT INTO food_type(name,value) VALUES ('Litchi',66);
INSERT INTO food_type(name,value) VALUES ('Mandarine',50);
INSERT INTO food_type(name,value) VALUES ('Mangue',62);
INSERT INTO food_type(name,value) VALUES ('Melon jaune',54);
INSERT INTO food_type(name,value) VALUES ('Mûres',43);
INSERT INTO food_type(name,value) VALUES ('Myrtilles',35);
INSERT INTO food_type(name,value) VALUES ('Orange sanguine',45);
INSERT INTO food_type(name,value) VALUES ('Pamplemousse',50);
INSERT INTO food_type(name,value) VALUES ('Pastèque',30);
INSERT INTO food_type(name,value) VALUES ('Pêche',41);
INSERT INTO food_type(name,value) VALUES ('Poire',55);
INSERT INTO food_type(name,value) VALUES ('Pomme',52);
INSERT INTO food_type(name,value) VALUES ('Prune',47);
INSERT INTO food_type(name,value) VALUES ('Raisins',70);
INSERT INTO food_type(name,value) VALUES ('Rhubarbe',21);
INSERT INTO food_type(name,value) VALUES ('Artichaut',47);
INSERT INTO food_type(name,value) VALUES ('Asperge',18);
INSERT INTO food_type(name,value) VALUES ('Aubergine',24);
INSERT INTO food_type(name,value) VALUES ('Avocat',160);
INSERT INTO food_type(name,value) VALUES ('Betterave',43);
INSERT INTO food_type(name,value) VALUES ('Blettes',19);
INSERT INTO food_type(name,value) VALUES ('Brocoli',35);
INSERT INTO food_type(name,value) VALUES ('Carotte',36);
INSERT INTO food_type(name,value) VALUES ('Champignons',22);
INSERT INTO food_type(name,value) VALUES ('Chou chinois',13);
INSERT INTO food_type(name,value) VALUES ('Chou-fleur',25);
INSERT INTO food_type(name,value) VALUES ('Chou frisé',49);
INSERT INTO food_type(name,value) VALUES ('Chou-rave',27);
INSERT INTO food_type(name,value) VALUES ('Chou rouge',29);
INSERT INTO food_type(name,value) VALUES ('Choux de Bruxelles',43);
INSERT INTO food_type(name,value) VALUES ('Concombre',15);
INSERT INTO food_type(name,value) VALUES ('Courgette',20);
INSERT INTO food_type(name,value) VALUES ('Cresson',19);
INSERT INTO food_type(name,value) VALUES ('Épinards',23);
INSERT INTO food_type(name,value) VALUES ('Fenouil',31);
INSERT INTO food_type(name,value) VALUES ('Haricots verts',25);
INSERT INTO food_type(name,value) VALUES ('Maïs',108);
INSERT INTO food_type(name,value) VALUES ('Oignon',40);
INSERT INTO food_type(name,value) VALUES ('Patates douces',76);
INSERT INTO food_type(name,value) VALUES ('Petits pois',82);
INSERT INTO food_type(name,value) VALUES ('Piment',40);
INSERT INTO food_type(name,value) VALUES ('Poireau',31);
INSERT INTO food_type(name,value) VALUES ('Poivron',21);
INSERT INTO food_type(name,value) VALUES ('Pomme de terre',86);
INSERT INTO food_type(name,value) VALUES ('Potiron',19);
INSERT INTO food_type(name,value) VALUES ('Radis',16);
INSERT INTO food_type(name,value) VALUES ('Roquette',25);
INSERT INTO food_type(name,value) VALUES ('Salade iceberg',14);
INSERT INTO food_type(name,value) VALUES ('Agneau',216);
INSERT INTO food_type(name,value) VALUES ('Bacon',385);
INSERT INTO food_type(name,value) VALUES ('Blanc de poulet',100);
INSERT INTO food_type(name,value) VALUES ('Chipolata',340);
INSERT INTO food_type(name,value) VALUES ('Entrecôte',166);
INSERT INTO food_type(name,value) VALUES ('Escalope de veau',166);
INSERT INTO food_type(name,value) VALUES ('Filet de bœuf',188);
INSERT INTO food_type(name,value) VALUES ('Filet mignon',157);
INSERT INTO food_type(name,value) VALUES ('Jambon cru',192);
INSERT INTO food_type(name,value) VALUES ('Jambon cuit',290);
INSERT INTO food_type(name,value) VALUES ('Merguez',279);
INSERT INTO food_type(name,value) VALUES ('Steak haché',210);
INSERT INTO food_type(name,value) VALUES ('Bar',105);
INSERT INTO food_type(name,value) VALUES ('Colin',91);
INSERT INTO food_type(name,value) VALUES ('Dorade',91);
INSERT INTO food_type(name,value) VALUES ('Hareng',122);
INSERT INTO food_type(name,value) VALUES ('Maquereau',201);
INSERT INTO food_type(name,value) VALUES ('Poulpe',61);
INSERT INTO food_type(name,value) VALUES ('Sardine',162);
INSERT INTO food_type(name,value) VALUES ('Saumon',208);
INSERT INTO food_type(name,value) VALUES ('Sole',75);
INSERT INTO food_type(name,value) VALUES ('Thon',144);
INSERT INTO food_type(name,value) VALUES ('Truite',122);
INSERT INTO food_type(name,value) VALUES ('Crème fleurette',215);
INSERT INTO food_type(name,value) VALUES ('Crème fraîche',292);
INSERT INTO food_type(name,value) VALUES ('Emmental',382);
INSERT INTO food_type(name,value) VALUES ('Faisselle',89);
INSERT INTO food_type(name,value) VALUES ('Fromage blanc 0 %',67);
INSERT INTO food_type(name,value) VALUES ('Fromage de chèvre',207);
INSERT INTO food_type(name,value) VALUES ('Gruyère',392);
INSERT INTO food_type(name,value) VALUES ('Lait',47);
INSERT INTO food_type(name,value) VALUES ('Lait de coco',136);
INSERT INTO food_type(name,value) VALUES ('Mozzarella',330);
INSERT INTO food_type(name,value) VALUES ('Œuf',145);
INSERT INTO food_type(name,value) VALUES ('Yaourt nature',62);
INSERT INTO food_type(name,value) VALUES ('Coquillettes',122);
INSERT INTO food_type(name,value) VALUES ('Farfalle',157);
INSERT INTO food_type(name,value) VALUES ('Fusillis',153);
INSERT INTO food_type(name,value) VALUES ('Gnocchis',126);
INSERT INTO food_type(name,value) VALUES ('Feuilles de lasagne',131);
INSERT INTO food_type(name,value) VALUES ('Macaronis',178);
INSERT INTO food_type(name,value) VALUES ('Pâtes au blé complet',135);
INSERT INTO food_type(name,value) VALUES ('Spaghettis',162);
INSERT INTO food_type(name,value) VALUES ('Tagliatelles',164);
INSERT INTO food_type(name,value) VALUES ('Baguette',280);
INSERT INTO food_type(name,value) VALUES ('Brioche',386);
INSERT INTO food_type(name,value) VALUES ('Campaillette',245);
INSERT INTO food_type(name,value) VALUES ('Chouquettes',406);
INSERT INTO food_type(name,value) VALUES ('Croissant',400);
INSERT INTO food_type(name,value) VALUES ('Pain au chocolat',435);
INSERT INTO food_type(name,value) VALUES ('Pain aux raisins',330);
INSERT INTO food_type(name,value) VALUES ('Pain complet',230);
INSERT INTO food_type(name,value) VALUES ('Pain de mie',288);
INSERT INTO food_type(name,value) VALUES ('Biscuits au chocolat',512);
INSERT INTO food_type(name,value) VALUES ('Cheeseburger',250);
INSERT INTO food_type(name,value) VALUES ('Chips',239);
INSERT INTO food_type(name,value) VALUES ('Kebab',506);
INSERT INTO food_type(name,value) VALUES ('Frites',291);
INSERT INTO food_type(name,value) VALUES ('Nutella',547);
INSERT INTO food_type(name,value) VALUES ('Pizza',199);

--------------------------------------------------------

--
-- Contenu de la table 'food'
--

INSERT INTO "food" ("user_id", "food_type_id", "date", "caloryTotal", "quantity", "emotion") VALUES
(1, 1, '2020-12-10 14:00:00', '1280', '300', 'happy');

--------------------------------------------------------

--
-- Contenu de la table 'water'
--

INSERT INTO "water" ("user_id", "date", "water") VALUES
(1, '2020-11-10 11:00:00', '2'),
(2, '2020-10-10 15:00:00', '150');

-- --------------------------------------------------------

--
-- Contenu de la table 'sleep'
--

INSERT INTO "sleep" ("user_id", "date", "sleepHours") VALUES
(1, '2020-12-10', '9'),
(2, '2020-04-12', '12');

-- --------------------------------------------------------

--
-- Contenu de la table 'sport_type'
--

INSERT INTO sport_type(name,value) VALUES ('Handball',800);
INSERT INTO sport_type(name,value) VALUES ('Water-polo',600);
INSERT INTO sport_type(name,value) VALUES ('Rugby',650);
INSERT INTO sport_type(name,value) VALUES ('Basket',500);
INSERT INTO sport_type(name,value) VALUES ('Volley',450);
INSERT INTO sport_type(name,value) VALUES ('Foot',400);
INSERT INTO sport_type(name,value) VALUES ('Pelote basque',800);
INSERT INTO sport_type(name,value) VALUES ('Squash',600);
INSERT INTO sport_type(name,value) VALUES ('Tennis',400);
INSERT INTO sport_type(name,value) VALUES ('Judo',800);
INSERT INTO sport_type(name,value) VALUES ('Boxe',600);
INSERT INTO sport_type(name,value) VALUES ('Karaté',600);
INSERT INTO sport_type(name,value) VALUES ('Aviron',600);
INSERT INTO sport_type(name,value) VALUES ('Kayak',850);
INSERT INTO sport_type(name,value) VALUES ('Natation',600);
INSERT INTO sport_type(name,value) VALUES ('Course à pied',800);
INSERT INTO sport_type(name,value) VALUES ('Roller',600);
INSERT INTO sport_type(name,value) VALUES ('Cyclisme',500);
INSERT INTO sport_type(name,value) VALUES ('Corde à sauter',700);
INSERT INTO sport_type(name,value) VALUES ('Step',600);
INSERT INTO sport_type(name,value) VALUES ('Zumba',530);
INSERT INTO sport_type(name,value) VALUES ('Ski de fond',500);
INSERT INTO sport_type(name,value) VALUES ('Escalade',540);
INSERT INTO sport_type(name,value) VALUES ('Ski (descente)',300);

-- --------------------------------------------------------

--
-- Contenu de la table 'sport'
--

INSERT INTO "sport" ("user_id", "sport_type_id", "date", "caloryTotal", "duration", "intensity", "emotion") VALUES
(1, 1, '2020-04-10 18:00:00', '1080', '60', 'effort intense', 'happy'),
(2, 1, '2020-01-09 17:00:00', '1092', '120', 'effort intense', 'happy');

--------------------------------------------------------

--
-- Contenu de la table 'task'
--

INSERT INTO "task" ("user_id", "title") VALUES
(1, 'reussir ce fabuleux projet'),
(2, 'obtenir son titre rncp');

COMMIT;