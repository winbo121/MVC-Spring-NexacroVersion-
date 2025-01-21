-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: home
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `code_tb`
--

DROP TABLE IF EXISTS `code_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `code_tb` (
  `code` varchar(100) DEFAULT NULL,
  `value` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `code_tb`
--

LOCK TABLES `code_tb` WRITE;
/*!40000 ALTER TABLE `code_tb` DISABLE KEYS */;
INSERT INTO `code_tb` VALUES ('A','Apple'),('B','Banana');
/*!40000 ALTER TABLE `code_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cd_mst`
--

DROP TABLE IF EXISTS `tb_cd_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cd_mst` (
  `CD_VAL` varchar(3) NOT NULL,
  `CD_NM` varchar(20) DEFAULT NULL,
  `CD_VAL1` varchar(2) NOT NULL,
  `CD_NM1` varchar(20) DEFAULT NULL,
  `REG_DT` date DEFAULT NULL,
  `UPD_DT` date DEFAULT NULL,
  PRIMARY KEY (`CD_VAL`,`CD_VAL1`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cd_mst`
--

LOCK TABLES `tb_cd_mst` WRITE;
/*!40000 ALTER TABLE `tb_cd_mst` DISABLE KEYS */;
INSERT INTO `tb_cd_mst` VALUES ('001','주문상태','A','주문대기','2025-01-15','2025-01-15'),('001','주문상태','B','주문접수','2025-01-15','2025-01-15'),('001','주문상태','C','주문취소','2025-01-15','2025-01-15'),('001','주문상태','D','설치완료','2025-01-15','2025-01-15'),('001','주문상태','E','설치취소','2025-01-15','2025-01-15'),('002','고객구분','C','법인','2025-01-15','2025-01-15'),('002','고객구분','P','개인','2025-01-15','2025-01-15'),('002','고객구분','R','임직원','2025-01-15','2025-01-15');
/*!40000 ALTER TABLE `tb_cd_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cust`
--

DROP TABLE IF EXISTS `tb_cust`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cust` (
  `CUST_CD` int NOT NULL AUTO_INCREMENT,
  `CUST_GBCD` varchar(1) DEFAULT NULL,
  `CUST_NM` varchar(20) DEFAULT NULL,
  `PHONE` varchar(13) DEFAULT NULL,
  `BIRTHBISNO` varchar(12) DEFAULT NULL,
  `ADDR` varchar(100) DEFAULT NULL,
  `REG_DT` date DEFAULT NULL,
  `UPD_DT` date DEFAULT NULL,
  PRIMARY KEY (`CUST_CD`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cust`
--

LOCK TABLES `tb_cust` WRITE;
/*!40000 ALTER TABLE `tb_cust` DISABLE KEYS */;
INSERT INTO `tb_cust` VALUES (1,'C','네이버','03112345678','081-25-11111','서울시 강남구','2025-01-15','2025-01-15'),(2,'C','카카오','03111111222','082-25-22222','서울시 서초구','2025-01-15','2025-01-15'),(3,'C','삼성전자','0230199999','083-26-33333','서울시 송파구','2025-01-15','2025-01-15'),(4,'C','현대차','01012345678','084-26-4444','서울시 성동구','2025-01-15','2025-01-15'),(5,'P','부길동','01012345677','19101010','서울시 광진구','2025-01-15','2025-01-15'),(6,'P','김감찬','01012341234','10000101','서울시 강동구','2025-01-15','2025-01-15'),(7,'P','박지문덕','01098765432','3100101','서울시 중랑구','2025-01-15','2025-01-15'),(8,'P','홍순신','01077777777','14100101','서울시 동대문구','2025-01-15','2025-01-15');
/*!40000 ALTER TABLE `tb_cust` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_item`
--

DROP TABLE IF EXISTS `tb_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_item` (
  `ITEM_CD` varchar(10) NOT NULL,
  `ITEM_NM` varchar(20) DEFAULT NULL,
  `REG_DT` date DEFAULT NULL,
  `UPD_DT` date DEFAULT NULL,
  PRIMARY KEY (`ITEM_CD`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_item`
--

LOCK TABLES `tb_item` WRITE;
/*!40000 ALTER TABLE `tb_item` DISABLE KEYS */;
INSERT INTO `tb_item` VALUES ('A0001','테슬라 모델X','2025-01-15','2025-01-15'),('A0002','현대 아이오닉6','2025-01-15','2025-01-15'),('A0003','엘지 그램','2025-01-15','2025-01-15'),('A0004','삼성 갤럭시','2025-01-15','2025-01-15'),('A0005','애플 아이폰','2025-01-15','2025-01-15');
/*!40000 ALTER TABLE `tb_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_ord`
--

DROP TABLE IF EXISTS `tb_ord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_ord` (
  `ORD_NO` int NOT NULL AUTO_INCREMENT,
  `ITEM_CD` varchar(10) DEFAULT NULL,
  `CUST_CD` varchar(20) DEFAULT NULL,
  `ORD_STAT_CD` varchar(1) DEFAULT NULL,
  `REG_DT` date DEFAULT NULL,
  `UPD_DT` date DEFAULT NULL,
  PRIMARY KEY (`ORD_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_ord`
--

LOCK TABLES `tb_ord` WRITE;
/*!40000 ALTER TABLE `tb_ord` DISABLE KEYS */;
INSERT INTO `tb_ord` VALUES (1,'A0001','1','B','2025-01-15','2025-01-15'),(4,'A0004','2','D','2025-01-15','2025-01-15'),(5,'A0005','2','D','2025-01-15','2025-01-15'),(6,'A0001','1','D','2025-01-15','2025-01-15'),(7,'A0001','3','D','2025-01-15','2025-01-15'),(8,'A0002','3','D','2025-01-15','2025-01-15'),(9,'A0002','4','D','2025-01-15','2025-01-15'),(10,'A0003','4','D','2025-01-15','2025-01-15'),(11,'A0001','5','D','2025-01-15','2025-01-15'),(12,'A0003','2','D','2025-01-15','2025-01-15'),(13,'A0003','2','D','2025-01-15','2025-01-15'),(14,'A0004','4','D','2025-01-15','2025-01-15'),(15,'A0004','3','D','2025-01-15','2025-01-15'),(16,'A0003','1','D','2025-01-15','2025-01-15'),(17,'A0003','4','D','2025-01-15','2025-01-15'),(18,'A0005','5','E','2025-01-15','2025-01-15'),(19,'A0004','6','E','2025-01-15','2025-01-15'),(20,'A0002','7','E','2025-01-15','2025-01-15'),(21,'A0001','1','E','2025-01-15','2025-01-15');
/*!40000 ALTER TABLE `tb_ord` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_user` (
  `LOGIN_ID` varchar(20) NOT NULL,
  `PWD` varchar(20) DEFAULT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `PHONE` varchar(20) DEFAULT NULL,
  `REG_DT` date DEFAULT NULL,
  `UPD_DT` date DEFAULT NULL,
  PRIMARY KEY (`LOGIN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_board`
--

DROP TABLE IF EXISTS `tbl_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_board` (
  `postId` int NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `contents` text,
  `regId` varchar(20) DEFAULT NULL,
  `regDate` date DEFAULT NULL,
  `communityId` varchar(16) DEFAULT NULL,
  `hitCount` int DEFAULT NULL,
  PRIMARY KEY (`postId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_board`
--

LOCK TABLES `tbl_board` WRITE;
/*!40000 ALTER TABLE `tbl_board` DISABLE KEYS */;
INSERT INTO `tbl_board` VALUES (1,'title1','content..',NULL,'2025-01-15','1',10),(2,'title2','content..',NULL,'2025-01-15','2',8),(3,'title3','content..',NULL,'2025-01-15','2',8),(4,'title4','content..',NULL,'2025-01-15','2',8),(5,'title5','content..',NULL,'2025-01-15','2',8),(6,'title6','content..',NULL,'2025-01-15','2',8),(7,'title7','content..',NULL,'2025-01-15','2',8),(8,'title8','content..',NULL,'2025-01-15','2',8),(9,'title9','content..',NULL,'2025-01-15','2',8),(10,'title10','content..',NULL,'2025-01-15','2',8),(11,'title11','content..',NULL,'2025-01-15','2',8),(12,'title12','content..',NULL,'2025-01-15','2',8),(13,'title13','content..',NULL,'2025-01-15','2',8),(14,'title14','content..',NULL,'2025-01-15','2',8),(15,'title15','content..',NULL,'2025-01-15','2',8),(16,'title16','content..',NULL,'2025-01-15','2',8),(17,'title17','content..',NULL,'2025-01-15','2',8),(18,'title18','content..',NULL,'2025-01-15','2',8),(19,'title19','content..',NULL,'2025-01-15','2',8),(20,'title20','content..',NULL,'2025-01-15','2',8),(21,'title21','content..',NULL,'2025-01-15','2',8),(22,'title22','content..',NULL,'2025-01-15','2',8),(23,'title23','content..',NULL,'2025-01-15','2',8);
/*!40000 ALTER TABLE `tbl_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user` (
  `userId` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `enName` varchar(20) DEFAULT NULL,
  `compPhone` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `cellPhone` varchar(20) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `jobPosition` varchar(20) DEFAULT NULL,
  `assignment` varchar(20) DEFAULT NULL,
  `officerYn` varchar(20) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `zipCode` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `compZipCode` varchar(20) DEFAULT NULL,
  `compAddress` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `deptId` varchar(20) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user`
--

LOCK TABLES `tbl_user` WRITE;
/*!40000 ALTER TABLE `tbl_user` DISABLE KEYS */;
INSERT INTO `tbl_user` VALUES ('hong','홍길동','hong gil dong','02-2140-7700','02-2140-7700','010-1111-2222','투비소프트','과장','개발','Y','02-2140-7798','223232','서울시 강남구 봉은사로','223232','서울시 강남구 봉은사로','hong@tobesoft.com','DEPT-001','1111');
/*!40000 ALTER TABLE `tbl_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-21 13:44:43
