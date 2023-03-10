PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `adonis_schema` (`id` integer not null primary key autoincrement, `name` varchar(255) not null, `batch` integer not null, `migration_time` datetime default CURRENT_TIMESTAMP);
INSERT INTO adonis_schema VALUES(1,'database/migrations/1670375623004_users',1,'2023-03-06 17:30:02');
INSERT INTO adonis_schema VALUES(2,'database/migrations/1670377892468_questions',1,'2023-03-06 17:30:02');
INSERT INTO adonis_schema VALUES(3,'database/migrations/1678048237370_themes',1,'2023-03-06 17:30:02');
INSERT INTO adonis_schema VALUES(4,'database/migrations/1678121832267_tags',1,'2023-03-06 17:30:02');
INSERT INTO adonis_schema VALUES(5,'database/migrations/1678121865705_question_tag',1,'2023-03-06 17:30:02');
CREATE TABLE `adonis_schema_versions` (`version` integer not null);
INSERT INTO adonis_schema_versions VALUES(2);
CREATE TABLE `users` (`id` integer not null primary key autoincrement, `email` varchar(255) not null, `password` varchar(180) not null, `remember_me_token` varchar(255) null, `created_at` datetime not null, `updated_at` datetime not null);
INSERT INTO users VALUES(1,'test@example.com','$scrypt$n=16384,r=8,p=1$2w8FgPynAOI+6rUG1eChOw$2FAW1yE78RFYr2v/r7VQiWVtrqFiSY7sCuOuPK65UA/SA/Ok52aQyjYCbZfWhRRzFUoS9k8qaAJAaI0eTQji6Q',NULL,'2023-03-06 17:30:02','2023-03-06 17:30:02');
CREATE TABLE `questions` (`id` integer not null primary key autoincrement, `title` varchar(255) not null, `correct_answer` varchar(255) not null, `invalid_answer1` varchar(255) not null, `invalid_answer2` varchar(255) not null, `theme_id` integer null, `created_at` datetime, `updated_at` datetime, foreign key(`theme_id`) references `themes`(`id`) on delete SET NULL);
INSERT INTO questions VALUES(1,'Quelle est la capitale de la Suède ?','Stockholm, comme le syndrome.','Paris, comme la capitale de la France.','Ikea, comme le truc avec les meubles là.',1,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(2,'Parmi ces 3 villes, laquelle ne se trouve pas au pays du fusil semi-automatique AR-15 (on parle des Etats-Unis si vous ne l’aviez pas) ?','“Minsk”, dans l’Ohio','“Belgrade”, dans le Montana','“Berlin”, dans le New Hampshire',1,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(3,'Lequel de ces pays est également appelé “Pays des aigles”','L’Albanie','Les Etats-Unis','Le Piafabekistan',1,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(4,'Parmi ces 3 propositions, quelle entreprise a été fondée en 1889 (soit 2 ans avant la naissance de Michel Drucker) ?','Nintendo','Ford','Disney',2,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(5,'Quel ancien chef du gouvernement Britannique a notamment été connu pour avoir brisé la grève des mineurs dans les années 1980 ?','Margaret Thatcher','Winston Churchill','Boris Johnson',2,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(6,'Où a eu lieue la “Guerre du cochon” ?','Dans l’actuelle zone des Îles San Juan.','A Cuba, sur la “baie des cochons” pour être exact.','Dans la boucherie kosher “Chez José” à Aubervilliers.',2,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(7,'Qui est Iris XVI ?','Un cheval abattu par les vilains nazis pour un acte de rébellion','La femme de Louis XVI','Le pharaon entre Iris XV et Iris XVII',2,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(8,'En 1903, quel physicien a reçu le Prix Nobel de Physique grâce aux travaux de sa femme (alors que lui, il avait rien foutu) ?','Pierre Curie','Albert Einstein','Enrico Fermi',3,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(9,'Par quel président l’équipe d’Afrique du Sud s’est vue remettre le trophée de la Coupe du Monde de Rugby en 1995 ?','Nelson Mandela','Barack Obama','Mikhaïl Gorbatchev',6,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(10,'Quel nom de mammifère est attribué au champion de cyclisme Bernard Hinault ?','Le Blaireau','Le Coq','L’Eléphant',6,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(11,'Dans quel bâtiment coupes t-on du bois ?','Dans une scierie.','En Syrie.','Deux secondes, je demande à Siri.',9,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(12,'Quel est le nom de l’émission TV qui a inspiré ce jeu ?','Burger Quiz','Question pour un Champion','Koh-Lanta',9,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(13,'Quel duo célèbre n’est pas connu pour ses sketchs télévisés et ses films de comédie ?','Bigflo et Oli','Laurel et Hardy','Eric et Ramzy',9,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(14,'Dans le jeu vidéo “Grand Theft Auto: Vice City”, quel est le nom du personnage principal incarné par le joueur ?','Tommy Vercetti','Tommy Niature','Tommy Mimathy',12,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(15,'Qu’est-ce que le “Sfumato” ?','Une technique de peinture inventée par Leonard de Vinci.','Le calumet de la paix utilisé par Buffalo Bill lors de ses spectacles.','Un opéra italien. 🤌',13,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO questions VALUES(16,'Quelle est le nom de l’étoile la plus proche de la Terre ?','Le Soleil','Proxima Centauri','Etoiles, le streamer',15,'2023-03-06 17:30:03','2023-03-06 17:30:03');
CREATE TABLE `themes` (`id` integer not null primary key autoincrement, `name` varchar(255) not null, `emoji` varchar(255) not null, `slug` varchar(255) not null, `created_at` datetime, `updated_at` datetime);
INSERT INTO themes VALUES(1,'Géographie','🌍','geographie','2023-03-06 17:30:02','2023-03-06 17:30:02');
INSERT INTO themes VALUES(2,'Histoire','⏳','histoire','2023-03-06 17:30:02','2023-03-06 17:30:02');
INSERT INTO themes VALUES(3,'Sciences','🔬','sciences','2023-03-06 17:30:02','2023-03-06 17:30:02');
INSERT INTO themes VALUES(4,'Cinéma','🎬','cinema','2023-03-06 17:30:02','2023-03-06 17:30:02');
INSERT INTO themes VALUES(5,'Musique','🎵','musique','2023-03-06 17:30:02','2023-03-06 17:30:02');
INSERT INTO themes VALUES(6,'Sport','⚽️','sport','2023-03-06 17:30:02','2023-03-06 17:30:02');
INSERT INTO themes VALUES(7,'Littérature','📚','litterature','2023-03-06 17:30:02','2023-03-06 17:30:02');
INSERT INTO themes VALUES(8,'Technologie','💻','technologie','2023-03-06 17:30:02','2023-03-06 17:30:02');
INSERT INTO themes VALUES(9,'Culture générale','📖','culture-generale','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO themes VALUES(10,'Animaux','🐶','animaux','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO themes VALUES(11,'Séries & TV','📺','series-tv','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO themes VALUES(12,'Jeux vidéo','🎮','jeux-video','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO themes VALUES(13,'Art','🎨','art','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO themes VALUES(14,'Droit','⚖️','droit','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO themes VALUES(15,'Espace','🪐','espace','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO themes VALUES(16,'Insolite','🤯','insolite','2023-03-06 17:30:03','2023-03-06 17:30:03');
CREATE TABLE `tags` (`id` integer not null primary key autoincrement, `name` varchar(255) not null, `slug` varchar(255) not null, `created_at` datetime, `updated_at` datetime);
INSERT INTO tags VALUES(1,'Tag A','tag-a','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO tags VALUES(2,'Tag B','tag-b','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO tags VALUES(3,'Tag C','tag-c','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO tags VALUES(4,'Tag D','tag-d','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO tags VALUES(5,'Tag E','tag-e','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO tags VALUES(6,'Tag F','tag-f','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO tags VALUES(7,'Tag G','tag-g','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO tags VALUES(8,'Tag H','tag-h','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO tags VALUES(9,'Tag I','tag-i','2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO tags VALUES(10,'Tag J','tag-j','2023-03-06 17:30:03','2023-03-06 17:30:03');
CREATE TABLE `question_tag` (`id` integer not null primary key autoincrement, `question_id` integer, `tag_id` integer, `created_at` datetime, `updated_at` datetime, foreign key(`question_id`) references `questions`(`id`), foreign key(`tag_id`) references `tags`(`id`));
INSERT INTO question_tag VALUES(1,1,3,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(2,2,7,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(3,2,8,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(4,2,10,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(5,3,3,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(6,3,1,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(7,3,5,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(8,4,10,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(9,4,7,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(10,5,6,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(11,5,5,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(12,5,2,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(13,6,9,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(14,6,7,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(15,7,6,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(16,7,7,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(17,8,7,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(18,8,9,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(19,8,2,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(20,9,2,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(21,9,4,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(22,10,10,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(23,10,1,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(24,11,7,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(25,11,4,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(26,12,6,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(27,13,7,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(28,13,9,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(29,13,10,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(30,14,5,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(31,14,10,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(32,14,2,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(33,15,3,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(34,16,6,'2023-03-06 17:30:03','2023-03-06 17:30:03');
INSERT INTO question_tag VALUES(35,16,3,'2023-03-06 17:30:03','2023-03-06 17:30:03');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('adonis_schema',5);
INSERT INTO sqlite_sequence VALUES('users',1);
INSERT INTO sqlite_sequence VALUES('themes',16);
INSERT INTO sqlite_sequence VALUES('tags',10);
INSERT INTO sqlite_sequence VALUES('questions',16);
INSERT INTO sqlite_sequence VALUES('question_tag',35);
CREATE UNIQUE INDEX `users_email_unique` on `users` (`email`);
CREATE UNIQUE INDEX `question_tag_question_id_tag_id_unique` on `question_tag` (`question_id`, `tag_id`);
COMMIT;
