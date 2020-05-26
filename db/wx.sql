/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : wx

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2020-05-26 17:47:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bookId` varchar(255) NOT NULL,
  `bookName` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `bookImage` varchar(255) DEFAULT NULL,
  `bookUrl` varchar(255) DEFAULT NULL,
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci,
  `bookType` varchar(255) DEFAULT NULL,
  `bookSource` varchar(255) DEFAULT NULL,
  `bookSourceUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=214 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES ('212', '81JFC6atVFcCwH8fissdd', '幻想世界的游戏', '栩魍楠', '//bookcover.yuewen.com/qdbimg/349573/1018114306/150', null, '\n                                   在人们的幻想中什么都是完美的。但是如果存在着一个充满幻想的世界会怎样？在一场幻想游戏中努力战斗，这即是主人公的目标…\n                                ', null, '1', 'https://book.qidian.com/info/1018114306');

-- ----------------------------
-- Table structure for book_conent
-- ----------------------------
DROP TABLE IF EXISTS `book_conent`;
CREATE TABLE `book_conent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bookId` varchar(255) DEFAULT NULL,
  `directoryId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `bookContent` longtext,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1109 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book_conent
-- ----------------------------
INSERT INTO `book_conent` VALUES ('535', '81JFC6atVFcCwH8fissdd', 'VsEy5GQhP8DLOECQFMW8f', '\n            <p>&#x3000;&#x3000;&#x4F60;&#x6709;&#x6CA1;&#x6709;&#x60F3;&#x8FC7;&#x8FD9;&#x6837;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1F;&#x8FD9;&#x6BCF;&#x5206;&#x6BCF;&#x79D2;&#x95F4;&#xFF0C;&#x6709;&#x65E0;&#x6570;&#x4EBA;&#x90FD;&#x5728;&#x8FDB;&#x884C;&#x7740;&#x65E0;&#x6BD4;&#x5E7C;&#x7A1A;&#xFF0C;&#x65E0;&#x6BD4;&#x65B0;&#x5947;&#x7684;&#x5E7B;&#x60F3;&#xFF0C;&#x4F46;&#x662F;&#x5982;&#x679C;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x5355;&#x7EAF;&#x7531;&#x5E7B;&#x60F3;&#x7EC4;&#x6210;&#x4E16;&#x754C;&#xFF0C;&#x4F60;&#x4F1A;&#x600E;&#x6837;&#x505A;&#x5462;&#xFF1F;</p><p>&#x3000;&#x3000;&#x5728;&#x4E00;&#x6761;&#x660F;&#x6697;&#x7684;&#x8D70;&#x5ECA;&#x4E0A;&#xFF0C;&#x706F;&#x5149;&#x5FFD;&#x6697;&#x5FFD;&#x706D;&#x3002;&#x4E00;&#x4F4D;&#x9AD8;&#x4E2D;&#x751F;&#x5954;&#x8DD1;&#x5728;&#x8D70;&#x5ECA;&#x7684;&#x4E2D;&#x592E;&#xFF0C;&#x4ED6;&#x53EB;&#x5F90;&#x6960;&#xFF0C;&#x73B0;&#x5728;&#x6B63;&#x4E0E;&#x5E7B;&#x60F3;&#x4E2D;&#x7684;&#x602A;&#x7269;&#x6218;&#x6597;&#x7740;&#x3002;&#x4E00;&#x53EA;&#x957F;&#x7740;&#x7F8A;&#x5934;&#x7684;&#x602A;&#x7269;&#x8DDF;&#x5728;&#x4ED6;&#x7684;&#x8EAB;&#x540E;&#x3002;</p><p>&#x3000;&#x3000;&#x5F90;&#x6960;&#x8FB9;&#x8DD1;&#x8FB9;&#x56DE;&#x5934;&#x6CE8;&#x610F;&#x7740;&#x90A3;&#x4E2A;&#x602A;&#x7269;&#xFF0C;&#x4F30;&#x7B97;&#x7740;&#x81EA;&#x5DF1;&#x4E0E;&#x5B83;&#x7684;&#x8DDD;&#x79BB;&#x3002;&#x4F46;&#x662F;&#x8FD9;&#x6837;&#x65E0;&#x610F;&#x4E49;&#x7684;&#x8FFD;&#x9010;&#x8FCE;&#x6765;&#x4E86;&#x7ED3;&#x675F;&#xFF0C;&#x5F90;&#x6960;&#x5728;&#x8D70;&#x5ECA;&#x7684;&#x5C3D;&#x5934;&#x505C;&#x4E86;&#x4E0B;&#x6765;&#xFF0C;&#x90A3;&#x53EA;&#x602A;&#x7269;&#x4E5F;&#x6162;&#x4E86;&#x4E0B;&#x6765;&#xFF0C;&#x72F0;&#x72DE;&#x7684;&#x8138;&#x4E0A;&#x6D6E;&#x73B0;&#x51FA;&#x7B11;&#x610F;&#x3002;</p><p>&#x3000;&#x3000;&#x201C;&#x6CA1;&#x529E;&#x6CD5;&#x4E86;&#x2026;&#x201D;</p><p>&#x3000;&#x3000;&#x5F90;&#x6960;&#x9762;&#x5BF9;&#x602A;&#x7269;&#x4ECE;&#x8170;&#x95F4;&#x62D4;&#x51FA;&#x5315;&#x9996;&#x3002;&#x7A81;&#x7136;&#x4E00;&#x9053;&#x95EA;&#x7535;&#x7167;&#x4EAE;&#x6574;&#x4E2A;&#x8D70;&#x5ECA;&#xFF0C;&#x540C;&#x65F6;&#x4E5F;&#x8BA9;&#x5F90;&#x6960;&#x770B;&#x6E05;&#x4E86;&#x602A;&#x7269;&#x3002;</p><p>&#x3000;&#x3000;&#x8DB3;&#x6709;&#x4E24;&#x7C73;&#x9AD8;&#xFF0C;&#x957F;&#x7740;&#x7F8A;&#x5934;&#x3001;&#x72AC;&#x9F7F;&#x3001;&#x718A;&#x638C;&#x3001;&#x9A6C;&#x817F;&#xFF0C;&#x50CF;&#x662F;&#x7531;&#x5404;&#x51E0;&#x79CD;&#x52A8;&#x7269;&#x80E1;&#x4E71;&#x7EC4;&#x6210;&#x7684;&#x3002;&#x602A;&#x7269;&#x6162;&#x60A0;&#x60A0;&#x7684;&#x9760;&#x8FD1;&#x7740;&#xFF0C;&#x4EFF;&#x4F5B;&#x4E00;&#x4E2A;&#x730E;&#x4EBA;&#x770B;&#x7740;&#x9677;&#x9631;&#x91CC;&#x730E;&#x7269;&#x3002;&#x5F88;&#x5FEB;&#x4ED6;&#x4EEC;&#x8DDD;&#x79BB;&#x53EA;&#x5269;&#x51E0;&#x6B65;&#x4E4B;&#x9065;&#xFF0C;&#x53CC;&#x65B9;&#x7D27;&#x7D27;&#x7684;&#x6CE8;&#x89C6;&#x5BF9;&#x65B9;&#x3002;</p><p>&#x3000;&#x3000;&#x5F88;&#x5FEB;&#xFF0C;&#x602A;&#x7269;&#x7A81;&#x7136;&#x5F00;&#x59CB;&#x4E86;&#x5B83;&#x7684;&#x8FDB;&#x653B;&#xFF0C;&#x5B83;&#x50CF;&#x5200;&#x4E00;&#x822C;&#x950B;&#x5229;&#x7684;&#x722A;&#x5B50;&#x8FC5;&#x901F;&#x7684;&#x5411;&#x5F90;&#x6960;&#x6251;&#x53BB;&#x3002;&#x5F90;&#x6960;&#x7ACB;&#x523B;&#x4FA7;&#x8EAB;&#x8EB2;&#x8FC7;&#xFF0C;&#x540C;&#x65F6;&#x5C06;&#x5229;&#x5203;&#x624E;&#x8FDB;&#x602A;&#x7269;&#x7684;&#x624B;&#x638C;&#x91CC;&#x3002;&#x602A;&#x7269;&#x75DB;&#x82E6;&#x5927;&#x53EB;&#xFF0C;&#x5E76;&#x5C06;&#x5DE6;&#x722A;&#x626B;&#x5411;&#x4ED6;&#x3002;&#x5F90;&#x6960;&#x5C06;&#x5315;&#x9996;&#x62D4;&#x51FA;&#x987A;&#x52BF;&#x8E72;&#x4E0B;&#xFF0C;&#x722A;&#x5B50;&#x53EA;&#x5272;&#x4E0B;&#x51E0;&#x6839;&#x5934;&#x53D1;&#xFF0C;&#x4F46;&#x602A;&#x7269;&#x5DF2;&#x7ECF;&#x5F20;&#x8840;&#x76C6;&#x5927;&#x53E3;&#x51B2;&#x5411;&#x4E86;&#x4ED6;&#xFF0C;&#x5F90;&#x6960;&#x53EA;&#x5F97;&#x7528;&#x5315;&#x9996;&#x9632;&#x5FA1;&#x3002;</p><p>&#x3000;&#x3000;&#x602A;&#x7269;&#x7D27;&#x7D27;&#x5730;&#x54AC;&#x4F4F;&#x7740;&#x5F90;&#x6960;&#x552F;&#x4E00;&#x7684;&#x6B66;&#x5668;&#xFF0C;&#x5728;&#x50F5;&#x6301;&#x4E00;&#x4F1A;&#x540E;&#x5F90;&#x6960;&#x7684;&#x53F3;&#x624B;&#x5F00;&#x59CB;&#x9178;&#x75DB;&#x8D77;&#x6765;&#xFF0C;&#x540C;&#x65F6;&#x602A;&#x7269;&#x7684;&#x53CC;&#x722A;&#x518D;&#x6B21;&#x53D1;&#x8D77;&#x653B;&#x51FB;&#x3002;&#x5C31;&#x5728;&#x722A;&#x5B50;&#x8981;&#x523A;&#x5165;&#x5F90;&#x6960;&#x8863;&#x670D;&#x7684;&#x4E00;&#x5239;&#x90A3;&#xFF0C;&#x4ED6;&#x731B;&#x5730;&#x671D;&#x602A;&#x7269;&#x80F8;&#x53E3;&#x8E22;&#x4E86;&#x4E00;&#x811A;&#xFF0C;&#x602A;&#x7269;&#x5728;&#x75DB;&#x82E6;&#x77AC;&#x95F4;&#x677E;&#x5F00;&#x4E86;&#x7259;&#x9F7F;&#xFF0C;&#x4ED6;&#x8D81;&#x673A;&#x62FF;&#x51FA;&#x5315;&#x9996;&#xFF0C;&#x5FEB;&#x901F;&#x4F4E;&#x4E0B;&#x8EAB;&#x4F53;&#xFF0C;&#x8EB2;&#x5F00;&#x602A;&#x7269;&#x7684;&#x4E24;&#x53EA;&#x722A;&#x5B50;&#x3002;</p><p>&#x3000;&#x3000;&#x6B64;&#x65F6;&#x602A;&#x7269;&#x7531;&#x4E8E;&#x91CD;&#x5FC3;&#x4E0D;&#x7A33;&#x5411;&#x524D;&#x503E;&#x5012;&#xFF0C;&#x5F90;&#x6960;&#x987A;&#x52BF;&#x6ED1;&#x5230;&#x602A;&#x7269;&#x80CC;&#x540E;&#xFF0C;&#x7528;&#x5315;&#x9996;&#x5728;&#x5B83;&#x8170;&#x90E8;&#x780D;&#x53BB;&#xFF0C;&#x84DD;&#x8272;&#x7684;&#x8840;&#x6E85;&#x5230;&#x4ED6;&#x8EAB;&#x4E0A;&#x3002;&#x56E0;&#x4E3A;&#x53D7;&#x4F24;&#x6D41;&#x8840;&#xFF0C;&#x602A;&#x7269;&#x5F00;&#x59CB;&#x66B4;&#x8E81;&#x5730;&#x6012;&#x543C;&#xFF0C;&#x5B83;&#x7C97;&#x58EE;&#x7684;&#x817F;&#x7528;&#x529B;&#x8E39;&#x5411;&#x540E;&#x65B9;&#xFF0C;&#x8FD9;&#x6B21;&#x5F90;&#x6960;&#x5E76;&#x6CA1;&#x80FD;&#x8EB2;&#x8FC7;&#xFF0C;&#x4ED6;&#x88AB;&#x8E39;&#x98DE;&#x4E09;&#x56DB;&#x7C73;&#x3002;</p><p>&#x3000;&#x3000;&#x5F90;&#x6960;&#x521A;&#x7AD9;&#x8D77;&#x6765;&#xFF0C;&#x602A;&#x7269;&#x7684;&#x722A;&#x5B50;&#x5C31;&#x53C8;&#x6251;&#x4E86;&#x4E0A;&#x6765;&#xFF0C;&#x4ED6;&#x7684;&#x5DE6;&#x81C2;&#x88AB;&#x5212;&#x4F24;&#x5728;&#xFF0C;&#x6574;&#x4E2A;&#x4EBA;&#x4E5F;&#x88AB;&#x62CD;&#x5012;&#x5728;&#x5730;&#x4E0A;&#x3002;&#x4F46;&#x90A3;&#x602A;&#x7269;&#x5E76;&#x4E0D;&#x60F3;&#x7ED9;&#x4ED6;&#x7559;&#x4E00;&#x4E1D;&#x5598;&#x606F;&#x7684;&#x4F59;&#x5730;&#xFF0C;&#x602A;&#x7269;&#x5DE6;&#x53F3;&#x722A;&#x7EE7;&#x7EED;&#x6025;&#x4FC3;&#x5730;&#x4EA4;&#x66FF;&#x653B;&#x51FB;&#x7740;&#xFF0C;&#x9762;&#x5BF9;&#x8FD9;&#x6837;&#x7684;&#x5C40;&#x9762;&#xFF0C;&#x5F90;&#x6960;&#x53EA;&#x5F97;&#x5728;&#x4E0D;&#x505C;&#x5728;&#x5730;&#x4E0A;&#x7FFB;&#x6EDA;&#x5BFB;&#x627E;&#x673A;&#x4F1A;&#x3002;</p><p>&#x3000;&#x3000;&#x5F88;&#x5FEB;&#x602A;&#x7269;&#x52A8;&#x4F5C;&#x6162;&#x4E86;&#x4E0B;&#x6765;&#xFF0C;&#x5F90;&#x6960;&#x770B;&#x51C6;&#x65F6;&#x673A;&#x4E00;&#x8DC3;&#x800C;&#x8D77;&#x523A;&#x4E2D;&#x602A;&#x7269;&#x773C;&#x775B;&#x3002;&#x731B;&#x70C8;&#x5730;&#x5267;&#x75DB;&#x4F7F;&#x5F97;&#x5B83;&#x6124;&#x6012;&#x5C06;&#x5F90;&#x6960;&#x671D;&#x65C1;&#x8FB9;&#x5899;&#x58C1;&#x649E;&#x53BB;&#x3002;&#x5F90;&#x6960;&#x8FC5;&#x901F;&#x62BD;&#x51FA;&#x5315;&#x9996;&#xFF0C;&#x8DC3;&#x8FC7;&#x602A;&#x7269;&#x5934;&#x9876;&#xFF0C;&#x602A;&#x7269;&#x7684;&#x5934;&#x91CD;&#x91CD;&#x649E;&#x5728;&#x5899;&#x4E0A;&#xFF0C;&#x4E58;&#x5B83;&#x8FD8;&#x6CA1;&#x7AD9;&#x7A33;&#xFF0C;&#x5F90;&#x6960;&#x53C8;&#x4E00;&#x6B21;&#x594B;&#x529B;&#x523A;&#x5411;&#x5B83;&#x7684;&#x80CC;&#x90E8;&#x3002;&#x4ECE;&#x4E0A;&#x5230;&#x4E0B;&#x5212;&#x5F00;&#x4E86;&#x4E00;&#x9053;&#x5DE8;&#x5927;&#x7684;&#x4F24;&#x75D5;&#x3002;</p><p>&#x3000;&#x3000;&#x602A;&#x7269;&#x8FD8;&#x4E0D;&#x6B7B;&#x5FC3;&#x4F3C;&#x7684;&#x60F3;&#x722C;&#x8D77;&#x6765;&#xFF0C;&#x5F90;&#x6960;&#x7528;&#x5C3D;&#x5168;&#x529B;&#x5C06;&#x5315;&#x9996;&#x523A;&#x8FDB;&#x4E86;&#x602A;&#x7269;&#x7684;&#x5FC3;&#x810F;&#xFF0C;&#x5B83;&#x6700;&#x7EC8;&#x5012;&#x5728;&#x5730;&#x4E0A;&#x4E0D;&#x518D;&#x52A8;&#x5F39;&#x4E86;&#x3002;&#x786E;&#x8BA4;&#x602A;&#x7269;&#x6B7B;&#x53BB;&#x518D;&#x65E0;&#x52A8;&#x4F5C;&#xFF0C;&#x5F90;&#x6960;&#x5728;&#x624D;&#x7AD9;&#x8D77;&#x6765;&#x8EAB;&#xFF0C;&#x5E76;&#x7528;&#x8896;&#x5B50;&#x64E6;&#x62ED;&#x624B;&#x4E2D;&#x7684;&#x5315;&#x9996;&#xFF0C;&#x4ED6;&#x8D70;&#x5230;&#x7A97;&#x524D;&#xFF0C;&#x7A97;&#x5916;&#x4E91;&#x5C42;&#x4E2D;&#x592A;&#x9633;&#x5929;&#x8FB9;&#x5347;&#x8D77;&#x3002;</p><p>&#x3000;&#x3000;&#x201C;&#x5929;&#x2026;&#x4EAE;&#x4E86;&#x2026;&#x201D;&#x5F90;&#x6960;&#x4E4F;&#x529B;&#x5730;&#x8BF4;&#x5230;&#x3002;</p><p>&#x3000;&#x3000;&#x5FFD;&#x7136;&#x4E4B;&#x95F4;&#x4E00;&#x9635;&#x94C3;&#x58F0;&#x54CD;&#x8D77;&#xFF0C;&#x602A;&#x7269;&#x7684;&#x8EAB;&#x4F53;&#x6D88;&#x5931;&#x4E86;&#x5468;&#x56F4;&#x7684;&#x4E00;&#x5207;&#x5F00;&#x59CB;&#x7834;&#x788E;&#x843D;&#x5165;&#x865A;&#x7A7A;&#x2026;</p><p>&#x3000;&#x3000;</p><p> \n        </p>');

-- ----------------------------
-- Table structure for directory
-- ----------------------------
DROP TABLE IF EXISTS `directory`;
CREATE TABLE `directory` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `bookId` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `directoryTitle` varchar(255) DEFAULT NULL,
  `bookContentUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `directoryId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1327 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of directory
-- ----------------------------
INSERT INTO `directory` VALUES ('753', '81JFC6atVFcCwH8fissdd', '幻想的战斗', 'https://read.qidian.com/chapter/nLLpmRwhYgmFWAW488FdBA2/UMWqoerOMY7gn4SMoDUcDQ2', 'VsEy5GQhP8DLOECQFMW8f');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `userId` int(20) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `account` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `headImg` varchar(255) DEFAULT NULL,
  `authority` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '小米发s', '1128228373', '11', '17266262662', 'admin', 'admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoxMTI4MjI4MzczLCJpYXQiOjE1ODk4Njg0MjksImV4cCI6MTU4OTg3MjAyOX0.Am3Y3KjAYc8xflUKVZ9rzxLnKQHFr9KNnqKwRlkzWwo', 'http://127.0.0.1:7001/public/uploads/94a46ce74d34f75495a3a43136032af7.jpg', 'admin');
