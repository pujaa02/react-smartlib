-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: myreact_app
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(255) DEFAULT NULL,
  `author_img` varchar(255) DEFAULT NULL,
  `author_desc` text,
  `creadted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Don Norman\n','/uploads/auth.webp','Donald Arthur Norman is an American researcher, professor, and author. Norman is the director of The Design Lab at University of California, San Diego. He is best known for his books on design, especially The Design of Everyday Things. ','2024-04-15 01:24:21',NULL),(2,'collan hover','/uploads/auth.webp','She is currently best fiction writer in newyork times .','2024-04-15 01:24:21',NULL),(3,'Munshi Prem Chand','image.png','Premchand worked as a teacher until 1921, when he joined Mohandas K. Gandhi\'s \nNoncooperation Movement. As a writer, he first gained renown for his Urdu-language novels and short \nstories. Except in Bengal, the short story had not been an accepted literary form in northern \nIndia until Premchand\'s works appeared','2024-04-20 00:33:50',NULL),(4,'Chitra Banerjee','image.png','She is a Professor of Creative Writing at Houston University and has \ntaught at Diablo College and Foothill College in California','2024-04-20 00:33:50',NULL),(5,'Héctor García','image.png','Héctor García and Francesc Miralles are the coauthors of The Book of Ichigo Ichie and The Four-Way Path. Héctor is a citizen of Japan, where he has lived for over a \ndecade, and is the author of A Geek in Japan, a #1 bestseller in Japan.','2024-04-20 00:33:50',NULL),(6,'Mayur Kalbag','image.png','Mayur Vivek Kalbag is one of the \'leading international trainers\' from Mumbai, India. He has been imparting his knowledge and skills on subjects related to Management Development, Advanced leadership & enhancing Organizational\n Productivity through Human Capital Development since the past 20 years.','2024-04-20 00:33:50',NULL);
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books_author`
--

DROP TABLE IF EXISTS `books_author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books_author` (
  `books_author_id` int NOT NULL AUTO_INCREMENT,
  `prime_book_id` int DEFAULT NULL,
  `author_id` int DEFAULT NULL,
  PRIMARY KEY (`books_author_id`),
  KEY `prime_book_id` (`prime_book_id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `books_author_ibfk_1` FOREIGN KEY (`prime_book_id`) REFERENCES `books_detail` (`prime_book_id`) ON DELETE CASCADE,
  CONSTRAINT `books_author_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books_author`
--

LOCK TABLES `books_author` WRITE;
/*!40000 ALTER TABLE `books_author` DISABLE KEYS */;
INSERT INTO `books_author` VALUES (1,1,1),(2,2,2),(3,3,2),(4,4,1),(5,5,1),(6,7,1),(7,8,5),(8,6,3);
/*!40000 ALTER TABLE `books_author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books_detail`
--

DROP TABLE IF EXISTS `books_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books_detail` (
  `prime_book_id` int NOT NULL AUTO_INCREMENT,
  `book_title` varchar(255) DEFAULT NULL,
  `book_desc` text,
  `genre_id` int DEFAULT NULL,
  `book_img` varchar(255) DEFAULT NULL,
  `book_publication` varchar(255) DEFAULT NULL,
  `book_publication_year` year DEFAULT NULL,
  `book_ISBN` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT (now()),
  `modified_at` timestamp NULL DEFAULT NULL,
  `books_lang` varchar(255) DEFAULT NULL,
  `total_book` int DEFAULT NULL,
  `remaining_book` int DEFAULT NULL,
  `isdeleted` tinyint NOT NULL DEFAULT '0',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`prime_book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books_detail`
--

LOCK TABLES `books_detail` WRITE;
/*!40000 ALTER TABLE `books_detail` DISABLE KEYS */;
INSERT INTO `books_detail` VALUES (1,'The Design of Everyday Things','The Design of Everyday Things is a best-selling book by \ncognitive scientist and usability engineer Donald Norman about how design serves as the communication between\n object and user, and how to optimize that conduit of \n communication in order to make the experience of using\n the object pleasurable.',6,'/uploads/image.png','Basic Books',1988,'978-0-465-06710-7','2024-04-15 01:19:46',NULL,'English',NULL,NULL,0,NULL),(2,'Palace of illusion','This book containes the story of mahabharata from Draupadi\'s point of view',1,'/uploads/related1.jpg','Pan Macmillan India',2008,'asddf','2024-04-15 01:19:46',NULL,'English',NULL,NULL,0,NULL),(3,'Aghori','This book describe about the mystries life of aghories',2,'/uploads/related2.jpg','Mayur Kalbag',2022,'dfgf','2024-04-15 01:19:46',NULL,'English',NULL,NULL,0,NULL),(4,'Ikigai','The Japanese Secret to a Long and Happy Life',3,'/uploads/related3.jpg','sadffh',2017,'sdfgd','2024-04-15 01:19:46',NULL,'English',NULL,NULL,0,NULL),(5,'Push ki raat',' This is the story of a tenant \nfarmer named Halku and his plight against land lordship prevalent in those times',4,'/uploads/related4.jpg','Raj Shree Prakashan',2016,'asffdf','2024-04-15 01:19:46',NULL,'English',NULL,NULL,0,NULL),(6,'never never','this is fiction book.',5,'/uploads/related5.png','newyorkbook',2022,'uhfsduoihfvoidshv','2024-04-15 01:19:46',NULL,'English',NULL,NULL,0,NULL),(7,'La Psicologia de Los Objetos Cotidianos','Sorprendente la exactitud con\nla que el autor precio en futuro. Leer el libro más de 15 años después de ser escrito y ver cómo el \nautor no solo adivino el futuro sino que los errores de diseño que predijo son cierto hace que el libro\n sea muy ilustrativo',6,'/uploads/la_psico_.jpg','Editorial Nerea,',2014,'8489569185','2024-04-18 06:39:43',NULL,'Spanish',NULL,NULL,0,NULL),(8,'Design for a Better World','Design for a Better World',1,'/uploads/designforworld.jpg','The MIT Press ',NULL,'  0262047950','2024-04-18 06:43:17',NULL,' ‎ English',NULL,NULL,0,NULL);
/*!40000 ALTER TABLE `books_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books_log`
--

DROP TABLE IF EXISTS `books_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books_log` (
  `borrowed_id` int NOT NULL AUTO_INCREMENT,
  `reader_id` int DEFAULT NULL,
  `book_id` int DEFAULT NULL,
  `borrow_date` timestamp NULL DEFAULT NULL,
  `return_date` timestamp NULL DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT (now()),
  `modified_at` timestamp NULL DEFAULT (now()),
  PRIMARY KEY (`borrowed_id`),
  KEY `reader_id` (`reader_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `books_log_ibfk_1` FOREIGN KEY (`reader_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `books_log_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `inventory` (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books_log`
--

LOCK TABLES `books_log` WRITE;
/*!40000 ALTER TABLE `books_log` DISABLE KEYS */;
INSERT INTO `books_log` VALUES (1,1,1,'2024-04-10 00:17:54','2024-04-24 08:38:04','return','2024-04-10 00:17:54','2024-04-24 08:38:04'),(2,2,3,'2024-04-01 00:17:54','2024-04-24 08:39:14','return','2024-04-10 00:17:54','2024-04-24 08:39:14'),(4,1,11,'2024-04-10 00:17:54','2024-04-24 09:11:43','return','2024-04-10 00:17:54','2024-04-24 09:11:43'),(5,2,15,'2024-04-10 00:17:54','2024-04-24 23:52:11','return','2024-04-10 00:17:54','2024-04-24 23:52:11'),(6,2,4,'2024-04-15 01:17:54','2024-05-01 03:22:38','return','2024-04-15 01:17:54','2024-05-01 03:22:38'),(7,2,12,'2024-04-14 01:17:54',NULL,'pending','2024-04-14 01:17:54','2024-04-14 01:17:54'),(8,2,17,'2024-03-13 01:17:54',NULL,'pending','2024-03-13 01:17:54','2024-03-13 01:17:54'),(9,2,22,'2024-04-12 01:17:54',NULL,'pending','2024-04-12 01:17:54','2024-04-12 01:17:54'),(10,2,26,'2024-04-12 01:17:54',NULL,'pending','2024-04-12 01:17:54','2024-04-12 01:17:54'),(11,2,27,'2024-04-11 01:17:54',NULL,'pending','2024-04-11 01:17:54','2024-04-11 01:17:54'),(12,1,7,'2024-04-20 00:42:33','2024-04-24 08:38:09','return','2024-04-20 00:42:33','2024-04-24 08:38:09'),(14,1,17,'2024-04-20 00:42:33',NULL,'pending','2024-04-20 00:42:33','2024-04-20 00:42:33'),(15,1,21,'2024-04-20 00:42:33',NULL,'pending','2024-04-20 00:42:33','2024-04-20 00:42:33'),(20,1,1,'2024-04-20 00:42:38',NULL,'return','2024-04-20 00:42:38','2024-04-20 00:42:38'),(22,1,6,'2024-04-20 00:42:38',NULL,'pending','2024-04-20 00:42:38','2024-04-20 00:42:38'),(24,1,15,'2024-04-20 00:42:38',NULL,'pending','2024-04-20 00:42:38','2024-04-20 00:42:38'),(25,1,28,NULL,NULL,'return','2024-04-29 04:17:08','2024-04-29 04:17:08');
/*!40000 ALTER TABLE `books_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp_details`
--

DROP TABLE IF EXISTS `emp_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_details` (
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `rel_status` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `bd` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp_details`
--

LOCK TABLES `emp_details` WRITE;
/*!40000 ALTER TABLE `emp_details` DISABLE KEYS */;
INSERT INTO `emp_details` VALUES (1,'puja','moravadiya','developer','puja@abc.com','9313003213','female','unmarried','talala','surat','ahmedabad','gujarat','394510','2002-11-30','2024-05-30 11:42:16','2024-05-30 12:14:06'),(2,'Riannon','Ellord','developer','riannon@123gmail.com','7896541236','male','unmarried','mehasana','mehasana','mehasana','gujarat','584769','2003-05-06','2024-05-30 11:42:58','2024-05-30 11:42:58'),(11,'maya','sharma','development','maya@123gmail.com','7896541236','female','unmarried','talala','surat','ahmedabad','gujarat','39451015','2004-05-06','2024-05-31 04:41:04','2024-05-31 04:41:04');
/*!40000 ALTER TABLE `emp_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `genre_id` int NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT (now()),
  `modified_at` timestamp NULL DEFAULT (now()),
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Fiction','2024-04-15 01:09:31','2024-04-15 01:09:31'),(2,'Noval','2024-04-15 01:09:31','2024-04-15 01:09:31'),(3,'Mystry','2024-04-15 01:09:31','2024-04-15 01:09:31'),(4,'Thriller','2024-04-15 01:09:31','2024-04-15 01:09:31'),(5,'Horror','2024-04-15 01:09:31','2024-04-15 01:09:31'),(6,'Design','2024-04-15 01:09:31','2024-04-15 01:09:31');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `prime_book_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT (now()),
  `modified_at` timestamp NULL DEFAULT NULL,
  `availability_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`book_id`),
  KEY `prime_book_id` (`prime_book_id`),
  CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`prime_book_id`) REFERENCES `books_detail` (`prime_book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (1,1,'2024-04-15 01:39:44',NULL,'0'),(2,2,'2024-04-15 07:00:37',NULL,'0'),(3,3,'2024-04-15 07:00:46',NULL,'0'),(4,4,'2024-04-15 07:00:53',NULL,'0'),(5,4,'2024-04-15 07:00:57',NULL,'0'),(6,4,'2024-04-15 07:00:58',NULL,'0'),(7,3,'2024-04-15 07:01:02',NULL,'0'),(8,1,'2024-04-15 07:01:02',NULL,'0'),(9,7,'2024-04-15 07:01:02',NULL,'0'),(10,2,'2024-04-10 00:17:54',NULL,'0'),(11,3,'2024-04-10 00:17:54',NULL,'0'),(12,3,'2024-04-10 00:17:54',NULL,'0'),(13,3,'2024-04-10 00:17:54',NULL,'0'),(14,3,'2024-04-10 00:17:54',NULL,'0'),(15,3,'2024-04-10 00:17:54',NULL,'0'),(16,4,'2024-04-10 00:17:54',NULL,'0'),(17,4,'2024-04-10 00:17:54',NULL,'0'),(18,4,'2024-04-10 00:17:54',NULL,'0'),(19,4,'2024-04-10 00:17:54',NULL,'0'),(20,4,'2024-04-10 00:17:54',NULL,'0'),(21,5,'2024-04-10 00:17:54',NULL,'0'),(22,5,'2024-04-10 00:17:54',NULL,'0'),(23,5,'2024-04-10 00:17:54',NULL,'0'),(24,5,'2024-04-10 00:17:54',NULL,'0'),(25,5,'2024-04-10 00:17:54',NULL,'0'),(26,6,'2024-04-10 00:17:54',NULL,'0'),(27,7,'2024-04-10 00:17:54',NULL,'0'),(28,8,'2024-04-10 00:17:54',NULL,'0');
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `rating_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `book_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT (now()),
  `modified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`rating_id`),
  KEY `user_id` (`user_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `inventory` (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (1,1,1,5,'2024-04-15 01:46:17',NULL),(2,2,2,4,'2024-04-15 01:46:18',NULL),(3,1,3,3,'2024-04-15 01:46:19',NULL),(4,2,4,2,'2024-04-15 01:46:20',NULL),(5,1,5,1,'2024-04-15 01:46:21',NULL),(6,1,1,5,'2024-04-15 01:46:21',NULL),(7,1,8,5,'2024-04-15 01:46:21',NULL);
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `bd` date NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `access_key` varchar(255) DEFAULT NULL,
  `isdeleted` int NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'puja','moravadiya','puja@abc.com','8745961245','female','2004-06-27','$2a$07$0g/QkNiTlAzxyyEm7HKHN.y8cHXhetKrYCHr26iPZHBi0W4YyvS.G','Wz4fw6CE1Ktb',0,'2024-06-01 04:34:03','2024-06-01 06:09:44'),(2,'Riannon','Ellord','riannon@123gmail.com','4512784512','male','2002-06-10','$2a$07$sL625yQT3ppGg4puGKYaOezeVyaCTK7xBXchKaleBvOxrxcDOWaD2','q7tEkox3wWMt',0,'2024-06-01 07:05:23','2024-06-01 07:05:42');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `watch_lists`
--

DROP TABLE IF EXISTS `watch_lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `watch_lists` (
  `watchlist_id` int NOT NULL AUTO_INCREMENT,
  `reader_id` int DEFAULT NULL,
  `prime_book_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT (now()),
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`watchlist_id`),
  KEY `reader_id` (`reader_id`),
  KEY `book_id` (`prime_book_id`),
  CONSTRAINT `watch_lists_ibfk_1` FOREIGN KEY (`reader_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `watch_lists_ibfk_2` FOREIGN KEY (`prime_book_id`) REFERENCES `inventory` (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `watch_lists`
--

LOCK TABLES `watch_lists` WRITE;
/*!40000 ALTER TABLE `watch_lists` DISABLE KEYS */;
INSERT INTO `watch_lists` VALUES (82,1,2,'2024-05-02 04:44:50',1),(88,1,3,'2024-05-02 04:47:04',1),(89,2,1,'2024-05-02 04:47:51',0),(90,2,3,'2024-05-02 04:47:55',0),(91,1,5,'2024-05-02 04:47:59',0),(92,2,3,'2024-05-02 06:13:37',1),(93,1,2,'2024-05-02 06:49:42',1),(95,2,1,'2024-05-02 06:50:10',0),(96,1,4,'2024-05-02 06:50:14',0),(99,2,5,'2024-05-02 23:22:08',0),(101,1,1,'2024-05-03 04:56:49',1),(102,2,3,'2024-05-03 04:56:56',1),(103,1,1,'2024-05-03 04:58:35',1),(104,1,4,'2024-05-03 04:58:43',1),(108,1,1,'2024-05-23 08:03:20',1),(109,1,2,'2024-05-23 08:07:21',0),(110,2,3,'2024-05-23 23:57:50',0),(111,1,3,'2024-05-24 04:46:34',0);
/*!40000 ALTER TABLE `watch_lists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-03 19:19:29
