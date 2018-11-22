-- MySQL dump 10.13  Distrib 5.6.35, for osx10.9 (x86_64)
--
-- Host: localhost    Database: strapi
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `core_store`
--

DROP TABLE IF EXISTS `core_store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `core_store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(255) DEFAULT NULL,
  `value` longtext,
  `type` varchar(255) DEFAULT NULL,
  `environment` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `SEARCH_CORE_STORE` (`key`,`value`,`type`,`environment`,`tag`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_store`
--

LOCK TABLES `core_store` WRITE;
/*!40000 ALTER TABLE `core_store` DISABLE KEYS */;
INSERT INTO `core_store` VALUES (1,'db_model_core_store','{\"key\":{\"type\":\"string\"},\"value\":{\"type\":\"text\"},\"type\":{\"type\":\"string\"},\"environment\":{\"type\":\"string\"},\"tag\":{\"type\":\"string\"}}','object',NULL,NULL),(2,'db_model_users-permissions_permission','{\"type\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"controller\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"action\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"enabled\":{\"type\":\"boolean\",\"required\":true,\"configurable\":false},\"policy\":{\"type\":\"string\",\"configurable\":false},\"role\":{\"model\":\"role\",\"via\":\"permissions\",\"plugin\":\"users-permissions\",\"configurable\":false}}','object',NULL,NULL),(3,'db_model_users-permissions_user','{\"username\":{\"type\":\"string\",\"minLength\":3,\"unique\":true,\"configurable\":false,\"required\":true},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true},\"provider\":{\"type\":\"string\",\"configurable\":false},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"private\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"confirmed\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"role\":{\"model\":\"role\",\"via\":\"users\",\"plugin\":\"users-permissions\",\"configurable\":false}}','object',NULL,NULL),(4,'db_model_upload_file','{\"name\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"hash\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"sha256\":{\"type\":\"string\",\"configurable\":false},\"ext\":{\"type\":\"string\",\"configurable\":false},\"mime\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"size\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"url\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"provider\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"related\":{\"collection\":\"*\",\"filter\":\"field\",\"configurable\":false},\"created_at\":{\"type\":\"timestamp\"},\"updated_at\":{\"type\":\"timestampUpdate\"}}','object',NULL,NULL),(5,'db_model_users-permissions_role','{\"name\":{\"type\":\"string\",\"minLength\":3,\"required\":true,\"configurable\":false},\"description\":{\"type\":\"string\",\"configurable\":false},\"type\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"permissions\":{\"collection\":\"permission\",\"via\":\"role\",\"plugin\":\"users-permissions\",\"configurable\":false,\"isVirtual\":true},\"users\":{\"collection\":\"user\",\"via\":\"role\",\"plugin\":\"users-permissions\",\"isVirtual\":true}}','object',NULL,NULL),(6,'db_model_upload_file_morph','{\"upload_file_id\":{\"type\":\"integer\"},\"related_id\":{\"type\":\"integer\"},\"related_type\":{\"type\":\"text\"},\"field\":{\"type\":\"text\"}}','object',NULL,NULL),(7,'core_application','{\"name\":\"Default Application\",\"description\":\"This API is going to be awesome!\"}','object','',''),(8,'plugin_users-permissions_grant','{\"email\":{\"enabled\":true,\"icon\":\"envelope\"},\"discord\":{\"enabled\":false,\"icon\":\"comments\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/discord/callback\",\"scope\":[\"identify\",\"email\"]},\"facebook\":{\"enabled\":false,\"icon\":\"facebook-official\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/facebook/callback\",\"scope\":[\"email\"]},\"google\":{\"enabled\":false,\"icon\":\"google\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/google/callback\",\"scope\":[\"email\"]},\"github\":{\"enabled\":false,\"icon\":\"github\",\"key\":\"\",\"secret\":\"\",\"redirect_uri\":\"/auth/github/callback\",\"scope\":[\"user\",\"user:email\"]},\"microsoft\":{\"enabled\":false,\"icon\":\"windows\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/microsoft/callback\",\"scope\":[\"user.read\"]},\"twitter\":{\"enabled\":false,\"icon\":\"twitter\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/twitter/callback\"}}','object','',''),(9,'plugin_content-manager_schema','{\"generalSettings\":{\"search\":true,\"filters\":true,\"bulkActions\":true,\"pageEntries\":10},\"models\":{\"plugins\":{\"upload\":{\"file\":{\"label\":\"File\",\"labelPlural\":\"Files\",\"orm\":\"bookshelf\",\"search\":true,\"filters\":true,\"bulkActions\":true,\"pageEntries\":10,\"defaultSort\":\"id\",\"sort\":\"ASC\",\"editDisplay\":{\"availableFields\":{\"name\":{\"label\":\"Name\",\"type\":\"string\",\"description\":\"\",\"name\":\"name\",\"editable\":true,\"placeholder\":\"\"},\"hash\":{\"label\":\"Hash\",\"type\":\"string\",\"description\":\"\",\"name\":\"hash\",\"editable\":true,\"placeholder\":\"\"},\"sha256\":{\"label\":\"Sha256\",\"type\":\"string\",\"description\":\"\",\"name\":\"sha256\",\"editable\":true,\"placeholder\":\"\"},\"ext\":{\"label\":\"Ext\",\"type\":\"string\",\"description\":\"\",\"name\":\"ext\",\"editable\":true,\"placeholder\":\"\"},\"mime\":{\"label\":\"Mime\",\"type\":\"string\",\"description\":\"\",\"name\":\"mime\",\"editable\":true,\"placeholder\":\"\"},\"size\":{\"label\":\"Size\",\"type\":\"string\",\"description\":\"\",\"name\":\"size\",\"editable\":true,\"placeholder\":\"\"},\"url\":{\"label\":\"Url\",\"type\":\"string\",\"description\":\"\",\"name\":\"url\",\"editable\":true,\"placeholder\":\"\"},\"provider\":{\"label\":\"Provider\",\"type\":\"string\",\"description\":\"\",\"name\":\"provider\",\"editable\":true,\"placeholder\":\"\"}},\"fields\":[\"name\",\"hash\",\"sha256\",\"ext\",\"mime\",\"size\",\"url\",\"provider\"],\"relations\":[]},\"info\":{\"name\":\"file\",\"description\":\"\"},\"connection\":\"default\",\"collectionName\":\"upload_file\",\"attributes\":{\"name\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"hash\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"sha256\":{\"type\":\"string\",\"configurable\":false},\"ext\":{\"type\":\"string\",\"configurable\":false},\"mime\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"size\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"url\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"provider\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"related\":{\"collection\":\"*\",\"filter\":\"field\",\"configurable\":false}},\"globalId\":\"UploadFile\",\"globalName\":\"UploadFile\",\"primaryKey\":\"id\",\"associations\":[{\"alias\":\"related\",\"type\":\"collection\",\"related\":[],\"nature\":\"manyMorphToMany\",\"autoPopulate\":true,\"filter\":\"field\"}],\"fields\":{\"name\":{\"label\":\"Name\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"name\",\"sortable\":true,\"searchable\":true},\"hash\":{\"label\":\"Hash\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"hash\",\"sortable\":true,\"searchable\":true},\"sha256\":{\"label\":\"Sha256\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"sha256\",\"sortable\":true,\"searchable\":true},\"ext\":{\"label\":\"Ext\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"ext\",\"sortable\":true,\"searchable\":true},\"mime\":{\"label\":\"Mime\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"mime\",\"sortable\":true,\"searchable\":true},\"size\":{\"label\":\"Size\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"size\",\"sortable\":true,\"searchable\":true},\"url\":{\"label\":\"Url\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"url\",\"sortable\":true,\"searchable\":true},\"provider\":{\"label\":\"Provider\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"provider\",\"sortable\":true,\"searchable\":true}},\"listDisplay\":[{\"name\":\"id\",\"label\":\"Id\",\"type\":\"string\",\"sortable\":true,\"searchable\":true},{\"label\":\"Name\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"name\",\"sortable\":true,\"searchable\":true},{\"label\":\"Hash\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"hash\",\"sortable\":true,\"searchable\":true},{\"label\":\"Sha256\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"sha256\",\"sortable\":true,\"searchable\":true},{\"label\":\"Ext\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"ext\",\"sortable\":true,\"searchable\":true}],\"relations\":{\"related\":{\"alias\":\"related\",\"type\":\"collection\",\"related\":[],\"nature\":\"manyMorphToMany\",\"autoPopulate\":true,\"filter\":\"field\",\"description\":\"\",\"label\":\"Related\",\"displayedAttribute\":\"id\"}}}},\"users-permissions\":{\"permission\":{\"label\":\"Permission\",\"labelPlural\":\"Permissions\",\"orm\":\"bookshelf\",\"search\":true,\"filters\":true,\"bulkActions\":true,\"pageEntries\":10,\"defaultSort\":\"id\",\"sort\":\"ASC\",\"editDisplay\":{\"availableFields\":{\"type\":{\"label\":\"Type\",\"type\":\"string\",\"description\":\"\",\"name\":\"type\",\"editable\":true,\"placeholder\":\"\"},\"controller\":{\"label\":\"Controller\",\"type\":\"string\",\"description\":\"\",\"name\":\"controller\",\"editable\":true,\"placeholder\":\"\"},\"action\":{\"label\":\"Action\",\"type\":\"string\",\"description\":\"\",\"name\":\"action\",\"editable\":true,\"placeholder\":\"\"},\"enabled\":{\"label\":\"Enabled\",\"type\":\"boolean\",\"description\":\"\",\"name\":\"enabled\",\"editable\":true,\"placeholder\":\"\"},\"policy\":{\"label\":\"Policy\",\"type\":\"string\",\"description\":\"\",\"name\":\"policy\",\"editable\":true,\"placeholder\":\"\"}},\"fields\":[\"type\",\"controller\",\"action\",\"enabled\",\"policy\"],\"relations\":[\"role\"]},\"info\":{\"name\":\"permission\",\"description\":\"\"},\"connection\":\"default\",\"collectionName\":\"users-permissions_permission\",\"attributes\":{\"type\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"controller\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"action\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"enabled\":{\"type\":\"boolean\",\"required\":true,\"configurable\":false},\"policy\":{\"type\":\"string\",\"configurable\":false},\"role\":{\"model\":\"role\",\"via\":\"permissions\",\"plugin\":\"users-permissions\",\"configurable\":false}},\"globalId\":\"UsersPermissionsPermission\",\"globalName\":\"UsersPermissionsPermission\",\"primaryKey\":\"id\",\"associations\":[{\"alias\":\"role\",\"type\":\"model\",\"model\":\"role\",\"via\":\"permissions\",\"nature\":\"manyToOne\",\"autoPopulate\":true,\"dominant\":true,\"plugin\":\"users-permissions\"}],\"fields\":{\"type\":{\"label\":\"Type\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"type\",\"sortable\":true,\"searchable\":true},\"controller\":{\"label\":\"Controller\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"controller\",\"sortable\":true,\"searchable\":true},\"action\":{\"label\":\"Action\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"action\",\"sortable\":true,\"searchable\":true},\"enabled\":{\"label\":\"Enabled\",\"description\":\"\",\"type\":\"boolean\",\"disabled\":false,\"name\":\"enabled\",\"sortable\":true,\"searchable\":true},\"policy\":{\"label\":\"Policy\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"policy\",\"sortable\":true,\"searchable\":true}},\"listDisplay\":[{\"name\":\"id\",\"label\":\"Id\",\"type\":\"string\",\"sortable\":true,\"searchable\":true},{\"label\":\"Type\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"type\",\"sortable\":true,\"searchable\":true},{\"label\":\"Controller\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"controller\",\"sortable\":true,\"searchable\":true},{\"label\":\"Action\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"action\",\"sortable\":true,\"searchable\":true},{\"label\":\"Enabled\",\"description\":\"\",\"type\":\"boolean\",\"disabled\":false,\"name\":\"enabled\",\"sortable\":true,\"searchable\":true}],\"relations\":{\"role\":{\"alias\":\"role\",\"type\":\"model\",\"model\":\"role\",\"via\":\"permissions\",\"nature\":\"manyToOne\",\"autoPopulate\":true,\"dominant\":true,\"plugin\":\"users-permissions\",\"description\":\"\",\"label\":\"Role\",\"displayedAttribute\":\"name\"}}},\"role\":{\"label\":\"Role\",\"labelPlural\":\"Roles\",\"orm\":\"bookshelf\",\"search\":true,\"filters\":true,\"bulkActions\":true,\"pageEntries\":10,\"defaultSort\":\"id\",\"sort\":\"ASC\",\"editDisplay\":{\"availableFields\":{\"name\":{\"label\":\"Name\",\"type\":\"string\",\"description\":\"\",\"name\":\"name\",\"editable\":true,\"placeholder\":\"\"},\"description\":{\"label\":\"Description\",\"type\":\"string\",\"description\":\"\",\"name\":\"description\",\"editable\":true,\"placeholder\":\"\"},\"type\":{\"label\":\"Type\",\"type\":\"string\",\"description\":\"\",\"name\":\"type\",\"editable\":true,\"placeholder\":\"\"}},\"fields\":[\"name\",\"description\",\"type\"],\"relations\":[\"permissions\",\"users\"]},\"info\":{\"name\":\"role\",\"description\":\"\"},\"connection\":\"default\",\"collectionName\":\"users-permissions_role\",\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":3,\"required\":true,\"configurable\":false},\"description\":{\"type\":\"string\",\"configurable\":false},\"type\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"permissions\":{\"collection\":\"permission\",\"via\":\"role\",\"plugin\":\"users-permissions\",\"configurable\":false,\"isVirtual\":true},\"users\":{\"collection\":\"user\",\"via\":\"role\",\"plugin\":\"users-permissions\",\"isVirtual\":true}},\"globalId\":\"UsersPermissionsRole\",\"globalName\":\"UsersPermissionsRole\",\"primaryKey\":\"id\",\"associations\":[{\"alias\":\"permissions\",\"type\":\"collection\",\"collection\":\"permission\",\"via\":\"role\",\"nature\":\"oneToMany\",\"autoPopulate\":true,\"dominant\":true,\"plugin\":\"users-permissions\"},{\"alias\":\"users\",\"type\":\"collection\",\"collection\":\"user\",\"via\":\"role\",\"nature\":\"oneToMany\",\"autoPopulate\":true,\"dominant\":true,\"plugin\":\"users-permissions\"}],\"fields\":{\"name\":{\"label\":\"Name\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"name\",\"sortable\":true,\"searchable\":true},\"description\":{\"label\":\"Description\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"description\",\"sortable\":true,\"searchable\":true},\"type\":{\"label\":\"Type\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"type\",\"sortable\":true,\"searchable\":true}},\"listDisplay\":[{\"name\":\"id\",\"label\":\"Id\",\"type\":\"string\",\"sortable\":true,\"searchable\":true},{\"label\":\"Name\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"name\",\"sortable\":true,\"searchable\":true},{\"label\":\"Description\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"description\",\"sortable\":true,\"searchable\":true},{\"label\":\"Type\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"type\",\"sortable\":true,\"searchable\":true}],\"relations\":{\"permissions\":{\"alias\":\"permissions\",\"type\":\"collection\",\"collection\":\"permission\",\"via\":\"role\",\"nature\":\"oneToMany\",\"autoPopulate\":true,\"dominant\":true,\"plugin\":\"users-permissions\",\"description\":\"\",\"label\":\"Permissions\",\"displayedAttribute\":\"type\"},\"users\":{\"alias\":\"users\",\"type\":\"collection\",\"collection\":\"user\",\"via\":\"role\",\"nature\":\"oneToMany\",\"autoPopulate\":true,\"dominant\":true,\"plugin\":\"users-permissions\",\"description\":\"\",\"label\":\"Users\",\"displayedAttribute\":\"username\"}}},\"user\":{\"label\":\"User\",\"labelPlural\":\"Users\",\"orm\":\"bookshelf\",\"search\":true,\"filters\":true,\"bulkActions\":true,\"pageEntries\":10,\"defaultSort\":\"id\",\"sort\":\"ASC\",\"editDisplay\":{\"availableFields\":{\"username\":{\"label\":\"Username\",\"type\":\"string\",\"description\":\"\",\"name\":\"username\",\"editable\":true,\"placeholder\":\"\"},\"email\":{\"label\":\"Email\",\"type\":\"email\",\"description\":\"\",\"name\":\"email\",\"editable\":true,\"placeholder\":\"\"},\"provider\":{\"label\":\"Provider\",\"type\":\"string\",\"description\":\"\",\"name\":\"provider\",\"editable\":true,\"placeholder\":\"\"},\"password\":{\"label\":\"Password\",\"type\":\"password\",\"description\":\"\",\"name\":\"password\",\"editable\":true,\"placeholder\":\"\"},\"resetPasswordToken\":{\"label\":\"ResetPasswordToken\",\"type\":\"string\",\"description\":\"\",\"name\":\"resetPasswordToken\",\"editable\":true,\"placeholder\":\"\"},\"confirmed\":{\"label\":\"Confirmed\",\"type\":\"boolean\",\"description\":\"\",\"name\":\"confirmed\",\"editable\":true,\"placeholder\":\"\"},\"blocked\":{\"label\":\"Blocked\",\"type\":\"boolean\",\"description\":\"\",\"name\":\"blocked\",\"editable\":true,\"placeholder\":\"\"}},\"fields\":[\"username\",\"email\",\"provider\",\"password\",\"resetPasswordToken\",\"confirmed\",\"blocked\"],\"relations\":[\"role\"]},\"info\":{\"name\":\"user\",\"description\":\"\"},\"connection\":\"default\",\"collectionName\":\"users-permissions_user\",\"attributes\":{\"username\":{\"type\":\"string\",\"minLength\":3,\"unique\":true,\"configurable\":false,\"required\":true},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"private\":true},\"confirmed\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"role\":{\"model\":\"role\",\"via\":\"users\",\"plugin\":\"users-permissions\",\"configurable\":false}},\"globalId\":\"UsersPermissionsUser\",\"globalName\":\"UsersPermissionsUser\",\"primaryKey\":\"id\",\"associations\":[{\"alias\":\"role\",\"type\":\"model\",\"model\":\"role\",\"via\":\"users\",\"nature\":\"manyToOne\",\"autoPopulate\":true,\"dominant\":true,\"plugin\":\"users-permissions\"}],\"fields\":{\"username\":{\"label\":\"Username\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"username\",\"sortable\":true,\"searchable\":true},\"email\":{\"label\":\"Email\",\"description\":\"\",\"type\":\"email\",\"disabled\":false,\"name\":\"email\",\"sortable\":true,\"searchable\":true},\"provider\":{\"label\":\"Provider\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"provider\",\"sortable\":true,\"searchable\":true},\"password\":{\"label\":\"Password\",\"description\":\"\",\"type\":\"password\",\"disabled\":false,\"name\":\"password\",\"sortable\":true,\"searchable\":true},\"resetPasswordToken\":{\"label\":\"ResetPasswordToken\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"resetPasswordToken\",\"sortable\":true,\"searchable\":true},\"confirmed\":{\"label\":\"Confirmed\",\"description\":\"\",\"type\":\"boolean\",\"disabled\":false,\"name\":\"confirmed\",\"sortable\":true,\"searchable\":true},\"blocked\":{\"label\":\"Blocked\",\"description\":\"\",\"type\":\"boolean\",\"disabled\":false,\"name\":\"blocked\",\"sortable\":true,\"searchable\":true}},\"listDisplay\":[{\"name\":\"id\",\"label\":\"Id\",\"type\":\"string\",\"sortable\":true,\"searchable\":true},{\"label\":\"Username\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"username\",\"sortable\":true,\"searchable\":true},{\"label\":\"Email\",\"description\":\"\",\"type\":\"email\",\"disabled\":false,\"name\":\"email\",\"sortable\":true,\"searchable\":true},{\"label\":\"Provider\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"provider\",\"sortable\":true,\"searchable\":true},{\"label\":\"Password\",\"description\":\"\",\"type\":\"password\",\"disabled\":false,\"name\":\"password\",\"sortable\":true,\"searchable\":true}],\"relations\":{\"role\":{\"alias\":\"role\",\"type\":\"model\",\"model\":\"role\",\"via\":\"users\",\"nature\":\"manyToOne\",\"autoPopulate\":true,\"dominant\":true,\"plugin\":\"users-permissions\",\"description\":\"\",\"label\":\"Role\",\"displayedAttribute\":\"name\"}}}}},\"homepage\":{\"label\":\"Homepage\",\"labelPlural\":\"Homepages\",\"orm\":\"bookshelf\",\"search\":true,\"filters\":true,\"bulkActions\":true,\"pageEntries\":10,\"defaultSort\":\"id\",\"sort\":\"ASC\",\"editDisplay\":{\"availableFields\":{\"tout1-title\":{\"label\":\"Tout1-title\",\"type\":\"string\",\"description\":\"\",\"name\":\"tout1-title\",\"editable\":true,\"placeholder\":\"\"},\"tout1-description\":{\"label\":\"Tout1-description\",\"type\":\"string\",\"description\":\"\",\"name\":\"tout1-description\",\"editable\":true,\"placeholder\":\"\"}},\"fields\":[\"tout1-title\",\"tout1-description\"],\"relations\":[]},\"info\":{\"name\":\"homepage\",\"description\":\"Homepage content\"},\"connection\":\"default\",\"collectionName\":\"homepage\",\"attributes\":{\"tout1-title\":{\"default\":\"\",\"type\":\"string\"},\"tout1-description\":{\"default\":\"\",\"type\":\"string\"}},\"globalId\":\"Homepage\",\"globalName\":\"Homepage\",\"primaryKey\":\"id\",\"associations\":[],\"fields\":{\"tout1-title\":{\"label\":\"Tout1-title\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"tout1-title\",\"sortable\":true,\"searchable\":true},\"tout1-description\":{\"label\":\"Tout1-description\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"tout1-description\",\"sortable\":true,\"searchable\":true}},\"listDisplay\":[{\"name\":\"id\",\"label\":\"Id\",\"type\":\"string\",\"sortable\":true,\"searchable\":true},{\"label\":\"Tout1-title\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"tout1-title\",\"sortable\":true,\"searchable\":true},{\"label\":\"Tout1-description\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"tout1-description\",\"sortable\":true,\"searchable\":true}],\"relations\":{}},\"productpage\":{\"label\":\"Productpage\",\"labelPlural\":\"Productpages\",\"orm\":\"bookshelf\",\"search\":true,\"filters\":true,\"bulkActions\":true,\"pageEntries\":10,\"defaultSort\":\"id\",\"sort\":\"ASC\",\"editDisplay\":{\"availableFields\":{\"blurb\":{\"label\":\"Blurb\",\"type\":\"string\",\"description\":\"\",\"name\":\"blurb\",\"editable\":true,\"placeholder\":\"\"}},\"fields\":[\"blurb\"],\"relations\":[]},\"info\":{\"name\":\"productpage\",\"description\":\"Product page template data\"},\"connection\":\"default\",\"collectionName\":\"productpage\",\"attributes\":{\"blurb\":{\"default\":\"\",\"type\":\"string\"}},\"globalId\":\"Productpage\",\"globalName\":\"Productpage\",\"primaryKey\":\"id\",\"associations\":[],\"fields\":{\"blurb\":{\"label\":\"Blurb\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"blurb\",\"sortable\":true,\"searchable\":true}},\"listDisplay\":[{\"name\":\"id\",\"label\":\"Id\",\"type\":\"string\",\"sortable\":true,\"searchable\":true},{\"label\":\"Blurb\",\"description\":\"\",\"type\":\"string\",\"disabled\":false,\"name\":\"blurb\",\"sortable\":true,\"searchable\":true}],\"relations\":{}}},\"layout\":{\"user\":{\"actions\":{\"create\":\"User.create\",\"update\":\"User.update\",\"destroy\":\"User.destroy\",\"deleteall\":\"User.destroyAll\"},\"attributes\":{\"username\":{\"className\":\"col-md-6\"},\"email\":{\"className\":\"col-md-6\"},\"provider\":{\"className\":\"d-none\"},\"resetPasswordToken\":{\"className\":\"d-none\"},\"role\":{\"className\":\"d-none\"}}},\"homepage\":{\"attributes\":{\"tout1-title\":{\"appearance\":\"\"},\"tout1-description\":{\"appearance\":\"\"}}},\"productpage\":{\"attributes\":{\"blurb\":{\"appearance\":\"\"}}}}}','object','',''),(10,'plugin_email_provider','{\"provider\":\"sendmail\",\"name\":\"Sendmail\",\"auth\":{\"sendmail_default_from\":{\"label\":\"Sendmail Default From\",\"type\":\"text\"},\"sendmail_default_replyto\":{\"label\":\"Sendmail Default Reply-To\",\"type\":\"text\"}}}','object','development',''),(11,'plugin_upload_provider','{\"provider\":\"local\",\"name\":\"Local server\",\"enabled\":true,\"sizeLimit\":1000000}','object','development',''),(12,'plugin_users-permissions_email','{\"reset_password\":{\"display\":\"Email.template.reset_password\",\"icon\":\"refresh\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"­Reset password\",\"message\":\"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>\"}},\"email_confirmation\":{\"display\":\"Email.template.email_confirmation\",\"icon\":\"check-square-o\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Account confirmation\",\"message\":\"<p>Thank you for registering!</p>\\n\\n<p>You have to confirm your email address. Please click on the link below.</p>\\n\\n<p><%= URL %>?confirmation=<%= CODE %></p>\\n\\n<p>Thanks.</p>\"}}}','object','',''),(13,'plugin_users-permissions_advanced','{\"unique_email\":true,\"allow_register\":true,\"email_confirmation\":false,\"email_confirmation_redirection\":\"http://localhost:1337/admin\",\"default_role\":\"authenticated\"}','object','',''),(14,'db_model_page_home','{\"tout1-title\":{\"default\":\"\",\"type\":\"string\"},\"tout1-desription\":{\"default\":\"\",\"type\":\"string\"},\"created_at\":{\"type\":\"timestamp\"},\"updated_at\":{\"type\":\"timestampUpdate\"}}','object',NULL,NULL),(15,'db_model_homepage','{\"tout1-title\":{\"default\":\"\",\"type\":\"string\"},\"tout1-description\":{\"default\":\"\",\"type\":\"string\"},\"created_at\":{\"type\":\"timestamp\"},\"updated_at\":{\"type\":\"timestampUpdate\"}}','object',NULL,NULL),(16,'db_model_productpage','{\"blurb\":{\"default\":\"\",\"type\":\"string\"},\"created_at\":{\"type\":\"timestamp\"},\"updated_at\":{\"type\":\"timestampUpdate\"}}','object',NULL,NULL);
/*!40000 ALTER TABLE `core_store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homepage`
--

DROP TABLE IF EXISTS `homepage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `homepage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tout1-title` varchar(255) DEFAULT NULL,
  `tout1-description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `SEARCH_HOMEPAGE` (`tout1-title`,`tout1-description`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homepage`
--

LOCK TABLES `homepage` WRITE;
/*!40000 ALTER TABLE `homepage` DISABLE KEYS */;
INSERT INTO `homepage` VALUES (1,'Tout 1 title!','Tout 1 description!','2018-11-21 01:43:14','2018-11-21 01:43:14');
/*!40000 ALTER TABLE `homepage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `page_home`
--

DROP TABLE IF EXISTS `page_home`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `page_home` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Tout1 title` varchar(255) DEFAULT NULL,
  `Tout1 description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tout1-desription` varchar(255) DEFAULT NULL,
  `tout1-title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `SEARCH_PAGE_HOME` (`Tout1 title`,`Tout1 description`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page_home`
--

LOCK TABLES `page_home` WRITE;
/*!40000 ALTER TABLE `page_home` DISABLE KEYS */;
INSERT INTO `page_home` VALUES (2,NULL,NULL,'2018-11-21 01:41:04','2018-11-21 01:41:04','Description!','Tout 1 title!');
/*!40000 ALTER TABLE `page_home` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productpage`
--

DROP TABLE IF EXISTS `productpage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productpage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `blurb` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `SEARCH_PRODUCTPAGE` (`blurb`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productpage`
--

LOCK TABLES `productpage` WRITE;
/*!40000 ALTER TABLE `productpage` DISABLE KEYS */;
INSERT INTO `productpage` VALUES (1,'This is a test blurb for the product page.','2018-11-21 05:06:24','2018-11-21 05:06:24');
/*!40000 ALTER TABLE `productpage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload_file`
--

DROP TABLE IF EXISTS `upload_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `upload_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `hash` varchar(255) DEFAULT NULL,
  `sha256` varchar(255) DEFAULT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `mime` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `SEARCH_UPLOAD_FILE` (`name`,`hash`,`sha256`,`ext`,`mime`,`size`,`url`,`provider`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload_file`
--

LOCK TABLES `upload_file` WRITE;
/*!40000 ALTER TABLE `upload_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `upload_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload_file_morph`
--

DROP TABLE IF EXISTS `upload_file_morph`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `upload_file_morph` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `upload_file_id` int(11) DEFAULT NULL,
  `related_id` int(11) DEFAULT NULL,
  `related_type` longtext,
  `field` longtext,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `SEARCH_UPLOAD_FILE_MORPH` (`related_type`,`field`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload_file_morph`
--

LOCK TABLES `upload_file_morph` WRITE;
/*!40000 ALTER TABLE `upload_file_morph` DISABLE KEYS */;
/*!40000 ALTER TABLE `upload_file_morph` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users-permissions_permission`
--

DROP TABLE IF EXISTS `users-permissions_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users-permissions_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `controller` varchar(255) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `policy` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `SEARCH_USERS_PERMISSIONS_PERMISSION` (`type`,`controller`,`action`,`policy`)
) ENGINE=InnoDB AUTO_INCREMENT=307 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users-permissions_permission`
--

LOCK TABLES `users-permissions_permission` WRITE;
/*!40000 ALTER TABLE `users-permissions_permission` DISABLE KEYS */;
INSERT INTO `users-permissions_permission` VALUES (1,'content-manager','contentmanager','models',1,'',1),(2,'content-manager','contentmanager','find',1,'',1),(3,'content-manager','contentmanager','count',1,'',1),(4,'content-manager','contentmanager','findone',1,'',1),(5,'content-manager','contentmanager','create',1,'',1),(6,'content-manager','contentmanager','update',1,'',1),(7,'content-manager','contentmanager','updatesettings',1,'',1),(8,'content-manager','contentmanager','delete',1,'',1),(9,'content-manager','contentmanager','deleteall',1,'',1),(10,'content-type-builder','contenttypebuilder','getmodels',1,'',1),(11,'content-type-builder','contenttypebuilder','getmodel',1,'',1),(12,'content-type-builder','contenttypebuilder','getconnections',1,'',1),(13,'content-type-builder','contenttypebuilder','createmodel',1,'',1),(14,'content-type-builder','contenttypebuilder','updatemodel',1,'',1),(15,'content-type-builder','contenttypebuilder','deletemodel',1,'',1),(16,'content-type-builder','contenttypebuilder','autoreload',1,'',1),(17,'content-type-builder','contenttypebuilder','checktableexists',1,'',1),(18,'email','email','send',1,'',1),(19,'email','email','getenvironments',1,'',1),(20,'email','email','getsettings',1,'',1),(21,'email','email','updatesettings',1,'',1),(22,'settings-manager','settingsmanager','menu',1,'',1),(23,'settings-manager','settingsmanager','environments',1,'',1),(24,'settings-manager','settingsmanager','languages',1,'',1),(25,'settings-manager','settingsmanager','databases',1,'',1),(26,'settings-manager','settingsmanager','database',1,'',1),(27,'settings-manager','settingsmanager','databasemodel',1,'',1),(28,'settings-manager','settingsmanager','get',1,'',1),(29,'settings-manager','settingsmanager','update',1,'',1),(30,'settings-manager','settingsmanager','createlanguage',1,'',1),(31,'settings-manager','settingsmanager','deletelanguage',1,'',1),(32,'settings-manager','settingsmanager','createdatabase',1,'',1),(33,'settings-manager','settingsmanager','updatedatabase',1,'',1),(34,'settings-manager','settingsmanager','deletedatabase',1,'',1),(35,'settings-manager','settingsmanager','autoreload',1,'',1),(36,'upload','upload','upload',1,'',1),(37,'upload','upload','getenvironments',1,'',1),(38,'upload','upload','getsettings',1,'',1),(39,'upload','upload','updatesettings',1,'',1),(40,'upload','upload','find',1,'',1),(41,'upload','upload','findone',1,'',1),(42,'upload','upload','count',1,'',1),(43,'upload','upload','destroy',1,'',1),(44,'upload','upload','search',1,'',1),(45,'users-permissions','auth','callback',1,'',1),(46,'users-permissions','auth','changepassword',1,'',1),(47,'users-permissions','auth','connect',1,'',1),(48,'users-permissions','auth','forgotpassword',1,'',1),(49,'users-permissions','auth','register',1,'',1),(50,'users-permissions','auth','emailconfirmation',1,'',1),(51,'users-permissions','user','find',1,'',1),(52,'users-permissions','user','me',1,'',1),(53,'users-permissions','user','findone',1,'',1),(54,'users-permissions','user','create',1,'',1),(55,'users-permissions','user','update',1,'',1),(56,'users-permissions','user','destroy',1,'',1),(57,'users-permissions','user','destroyall',1,'',1),(58,'users-permissions','userspermissions','createrole',1,'',1),(59,'users-permissions','userspermissions','deleteprovider',1,'',1),(60,'users-permissions','userspermissions','deleterole',1,'',1),(61,'users-permissions','userspermissions','getpermissions',1,'',1),(62,'users-permissions','userspermissions','getpolicies',1,'',1),(63,'users-permissions','userspermissions','getrole',1,'',1),(64,'users-permissions','userspermissions','getroles',1,'',1),(65,'users-permissions','userspermissions','getroutes',1,'',1),(66,'users-permissions','userspermissions','index',1,'',1),(67,'users-permissions','userspermissions','init',1,'',1),(68,'users-permissions','userspermissions','searchusers',1,'',1),(69,'users-permissions','userspermissions','updaterole',1,'',1),(70,'users-permissions','userspermissions','getemailtemplate',1,'',1),(71,'users-permissions','userspermissions','updateemailtemplate',1,'',1),(72,'users-permissions','userspermissions','getadvancedsettings',1,'',1),(73,'users-permissions','userspermissions','updateadvancedsettings',1,'',1),(74,'users-permissions','userspermissions','getproviders',1,'',1),(75,'users-permissions','userspermissions','updateproviders',1,'',1),(76,'content-manager','contentmanager','models',0,'',2),(77,'content-manager','contentmanager','find',0,'',2),(78,'content-manager','contentmanager','count',0,'',2),(79,'content-manager','contentmanager','findone',0,'',2),(80,'content-manager','contentmanager','create',0,'',2),(81,'content-manager','contentmanager','update',0,'',2),(82,'content-manager','contentmanager','updatesettings',0,'',2),(83,'content-manager','contentmanager','delete',0,'',2),(84,'content-manager','contentmanager','deleteall',0,'',2),(85,'content-type-builder','contenttypebuilder','getmodels',0,'',2),(86,'content-type-builder','contenttypebuilder','getmodel',0,'',2),(87,'content-type-builder','contenttypebuilder','getconnections',0,'',2),(88,'content-type-builder','contenttypebuilder','createmodel',0,'',2),(89,'content-type-builder','contenttypebuilder','updatemodel',0,'',2),(90,'content-type-builder','contenttypebuilder','deletemodel',0,'',2),(91,'content-type-builder','contenttypebuilder','autoreload',1,'',2),(92,'content-type-builder','contenttypebuilder','checktableexists',0,'',2),(93,'email','email','send',0,'',2),(94,'email','email','getenvironments',0,'',2),(95,'email','email','getsettings',0,'',2),(96,'email','email','updatesettings',0,'',2),(97,'settings-manager','settingsmanager','menu',0,'',2),(98,'settings-manager','settingsmanager','environments',0,'',2),(99,'settings-manager','settingsmanager','languages',0,'',2),(100,'settings-manager','settingsmanager','databases',0,'',2),(101,'settings-manager','settingsmanager','database',0,'',2),(102,'settings-manager','settingsmanager','databasemodel',0,'',2),(103,'settings-manager','settingsmanager','get',0,'',2),(104,'settings-manager','settingsmanager','update',0,'',2),(105,'settings-manager','settingsmanager','createlanguage',0,'',2),(106,'settings-manager','settingsmanager','deletelanguage',0,'',2),(107,'settings-manager','settingsmanager','createdatabase',0,'',2),(108,'settings-manager','settingsmanager','updatedatabase',0,'',2),(109,'settings-manager','settingsmanager','deletedatabase',0,'',2),(110,'settings-manager','settingsmanager','autoreload',1,'',2),(111,'upload','upload','upload',0,'',2),(112,'upload','upload','getenvironments',0,'',2),(113,'upload','upload','getsettings',0,'',2),(114,'upload','upload','updatesettings',0,'',2),(115,'upload','upload','find',0,'',2),(116,'upload','upload','findone',0,'',2),(117,'upload','upload','count',0,'',2),(118,'upload','upload','destroy',0,'',2),(119,'upload','upload','search',0,'',2),(120,'users-permissions','auth','callback',0,'',2),(121,'users-permissions','auth','changepassword',0,'',2),(122,'users-permissions','auth','connect',1,'',2),(123,'users-permissions','auth','forgotpassword',0,'',2),(124,'users-permissions','auth','register',0,'',2),(125,'users-permissions','auth','emailconfirmation',0,'',2),(126,'users-permissions','user','find',0,'',2),(127,'users-permissions','user','me',1,'',2),(128,'users-permissions','user','findone',0,'',2),(129,'users-permissions','user','create',0,'',2),(130,'users-permissions','user','update',0,'',2),(131,'users-permissions','user','destroy',0,'',2),(132,'users-permissions','user','destroyall',0,'',2),(133,'users-permissions','userspermissions','createrole',0,'',2),(134,'users-permissions','userspermissions','deleteprovider',0,'',2),(135,'users-permissions','userspermissions','deleterole',0,'',2),(136,'users-permissions','userspermissions','getpermissions',0,'',2),(137,'users-permissions','userspermissions','getpolicies',0,'',2),(138,'users-permissions','userspermissions','getrole',0,'',2),(139,'users-permissions','userspermissions','getroles',0,'',2),(140,'users-permissions','userspermissions','getroutes',0,'',2),(141,'users-permissions','userspermissions','index',0,'',2),(142,'users-permissions','userspermissions','init',1,'',2),(143,'users-permissions','userspermissions','searchusers',0,'',2),(144,'users-permissions','userspermissions','updaterole',0,'',2),(145,'users-permissions','userspermissions','getemailtemplate',0,'',2),(146,'users-permissions','userspermissions','updateemailtemplate',0,'',2),(147,'users-permissions','userspermissions','getadvancedsettings',0,'',2),(148,'users-permissions','userspermissions','updateadvancedsettings',0,'',2),(149,'users-permissions','userspermissions','getproviders',0,'',2),(150,'users-permissions','userspermissions','updateproviders',0,'',2),(151,'content-manager','contentmanager','models',0,'',3),(152,'content-manager','contentmanager','find',0,'',3),(153,'content-manager','contentmanager','count',0,'',3),(154,'content-manager','contentmanager','findone',0,'',3),(155,'content-manager','contentmanager','create',0,'',3),(156,'content-manager','contentmanager','update',0,'',3),(157,'content-manager','contentmanager','updatesettings',0,'',3),(158,'content-manager','contentmanager','delete',0,'',3),(159,'content-manager','contentmanager','deleteall',0,'',3),(160,'content-type-builder','contenttypebuilder','getmodels',0,'',3),(161,'content-type-builder','contenttypebuilder','getmodel',0,'',3),(162,'content-type-builder','contenttypebuilder','getconnections',0,'',3),(163,'content-type-builder','contenttypebuilder','createmodel',0,'',3),(164,'content-type-builder','contenttypebuilder','updatemodel',0,'',3),(165,'content-type-builder','contenttypebuilder','deletemodel',0,'',3),(166,'content-type-builder','contenttypebuilder','autoreload',1,'',3),(167,'content-type-builder','contenttypebuilder','checktableexists',0,'',3),(168,'email','email','send',0,'',3),(169,'email','email','getenvironments',0,'',3),(170,'email','email','getsettings',0,'',3),(171,'email','email','updatesettings',0,'',3),(172,'settings-manager','settingsmanager','menu',0,'',3),(173,'settings-manager','settingsmanager','environments',0,'',3),(174,'settings-manager','settingsmanager','languages',0,'',3),(175,'settings-manager','settingsmanager','databases',0,'',3),(176,'settings-manager','settingsmanager','database',0,'',3),(177,'settings-manager','settingsmanager','databasemodel',0,'',3),(178,'settings-manager','settingsmanager','get',0,'',3),(179,'settings-manager','settingsmanager','update',0,'',3),(180,'settings-manager','settingsmanager','createlanguage',0,'',3),(181,'settings-manager','settingsmanager','deletelanguage',0,'',3),(182,'settings-manager','settingsmanager','createdatabase',0,'',3),(183,'settings-manager','settingsmanager','updatedatabase',0,'',3),(184,'settings-manager','settingsmanager','deletedatabase',0,'',3),(185,'settings-manager','settingsmanager','autoreload',1,'',3),(186,'upload','upload','upload',0,'',3),(187,'upload','upload','getenvironments',0,'',3),(188,'upload','upload','getsettings',0,'',3),(189,'upload','upload','updatesettings',0,'',3),(190,'upload','upload','find',0,'',3),(191,'upload','upload','findone',0,'',3),(192,'upload','upload','count',0,'',3),(193,'upload','upload','destroy',0,'',3),(194,'upload','upload','search',0,'',3),(195,'users-permissions','auth','callback',1,'',3),(196,'users-permissions','auth','changepassword',1,'',3),(197,'users-permissions','auth','connect',1,'',3),(198,'users-permissions','auth','forgotpassword',1,'',3),(199,'users-permissions','auth','register',1,'',3),(200,'users-permissions','auth','emailconfirmation',1,'',3),(201,'users-permissions','user','find',0,'',3),(202,'users-permissions','user','me',1,'',3),(203,'users-permissions','user','findone',0,'',3),(204,'users-permissions','user','create',0,'',3),(205,'users-permissions','user','update',0,'',3),(206,'users-permissions','user','destroy',0,'',3),(207,'users-permissions','user','destroyall',0,'',3),(208,'users-permissions','userspermissions','createrole',0,'',3),(209,'users-permissions','userspermissions','deleteprovider',0,'',3),(210,'users-permissions','userspermissions','deleterole',0,'',3),(211,'users-permissions','userspermissions','getpermissions',0,'',3),(212,'users-permissions','userspermissions','getpolicies',0,'',3),(213,'users-permissions','userspermissions','getrole',0,'',3),(214,'users-permissions','userspermissions','getroles',0,'',3),(215,'users-permissions','userspermissions','getroutes',0,'',3),(216,'users-permissions','userspermissions','index',0,'',3),(217,'users-permissions','userspermissions','init',1,'',3),(218,'users-permissions','userspermissions','searchusers',0,'',3),(219,'users-permissions','userspermissions','updaterole',0,'',3),(220,'users-permissions','userspermissions','getemailtemplate',0,'',3),(221,'users-permissions','userspermissions','updateemailtemplate',0,'',3),(222,'users-permissions','userspermissions','getadvancedsettings',0,'',3),(223,'users-permissions','userspermissions','updateadvancedsettings',0,'',3),(224,'users-permissions','userspermissions','getproviders',0,'',3),(225,'users-permissions','userspermissions','updateproviders',0,'',3),(253,'application','homepage','find',1,'',1),(254,'application','homepage','findone',1,'',1),(255,'application','homepage','count',1,'',1),(256,'application','homepage','create',1,'',1),(257,'application','homepage','update',1,'',1),(258,'application','homepage','destroy',1,'',1),(259,'application','homepage','createrelation',1,'',1),(260,'application','homepage','updaterelation',1,'',1),(261,'application','homepage','destroyrelation',1,'',1),(262,'application','homepage','find',0,'',2),(263,'application','homepage','findone',0,'',2),(264,'application','homepage','count',0,'',2),(265,'application','homepage','create',0,'',2),(266,'application','homepage','update',0,'',2),(267,'application','homepage','destroy',0,'',2),(268,'application','homepage','createrelation',0,'',2),(269,'application','homepage','updaterelation',0,'',2),(270,'application','homepage','destroyrelation',0,'',2),(271,'application','homepage','find',1,'',3),(272,'application','homepage','findone',1,'',3),(273,'application','homepage','count',1,'',3),(274,'application','homepage','create',0,'',3),(275,'application','homepage','update',0,'',3),(276,'application','homepage','destroy',0,'',3),(277,'application','homepage','createrelation',0,'',3),(278,'application','homepage','updaterelation',0,'',3),(279,'application','homepage','destroyrelation',0,'',3),(280,'application','productpage','find',1,'',1),(281,'application','productpage','findone',1,'',1),(282,'application','productpage','count',1,'',1),(283,'application','productpage','create',1,'',1),(284,'application','productpage','update',1,'',1),(285,'application','productpage','destroy',1,'',1),(286,'application','productpage','createrelation',1,'',1),(287,'application','productpage','updaterelation',1,'',1),(288,'application','productpage','destroyrelation',1,'',1),(289,'application','productpage','find',0,'',2),(290,'application','productpage','findone',0,'',2),(291,'application','productpage','count',0,'',2),(292,'application','productpage','create',0,'',2),(293,'application','productpage','destroy',0,'',2),(294,'application','productpage','update',0,'',2),(295,'application','productpage','createrelation',0,'',2),(296,'application','productpage','updaterelation',0,'',2),(297,'application','productpage','destroyrelation',0,'',2),(298,'application','productpage','find',0,'',3),(299,'application','productpage','findone',0,'',3),(300,'application','productpage','count',0,'',3),(301,'application','productpage','create',0,'',3),(302,'application','productpage','update',0,'',3),(303,'application','productpage','destroy',0,'',3),(304,'application','productpage','createrelation',0,'',3),(305,'application','productpage','updaterelation',0,'',3),(306,'application','productpage','destroyrelation',0,'',3);
/*!40000 ALTER TABLE `users-permissions_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users-permissions_role`
--

DROP TABLE IF EXISTS `users-permissions_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users-permissions_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `SEARCH_USERS_PERMISSIONS_ROLE` (`name`,`description`,`type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users-permissions_role`
--

LOCK TABLES `users-permissions_role` WRITE;
/*!40000 ALTER TABLE `users-permissions_role` DISABLE KEYS */;
INSERT INTO `users-permissions_role` VALUES (1,'Administrator','These users have all access in the project.','root'),(2,'Authenticated','Default role given to authenticated user.','authenticated'),(3,'Public','Default role given to unauthenticated user.','public');
/*!40000 ALTER TABLE `users-permissions_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users-permissions_user`
--

DROP TABLE IF EXISTS `users-permissions_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users-permissions_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `SEARCH_USERS_PERMISSIONS_USER` (`username`,`provider`,`resetPasswordToken`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users-permissions_user`
--

LOCK TABLES `users-permissions_user` WRITE;
/*!40000 ALTER TABLE `users-permissions_user` DISABLE KEYS */;
INSERT INTO `users-permissions_user` VALUES (1,'rw3iss','rw3iss@gmail.com','local','$2a$10$H274/tl.tIrbMRwYpk5vfOF3dzGr1b9xpZk4RPMcso9H2JuQsdHqe',NULL,1,NULL,1);
/*!40000 ALTER TABLE `users-permissions_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-20 22:55:12
