/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : wx

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2020-05-18 10:12:20
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
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=201 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES ('181', 'lIBSgXn6qD9kETAkeOQCq', '万古最强宗', null, 'https://www.23us.la//BookFiles/BookImages/wanguzuiqiangzong.jpg', '万古最强宗', '掌门被杀，宗门大乱，只剩一群老弱病残！　　　　刚穿越的林笑知晓这一切傻眼当场。　　　　定人心，诛小人，…...');
INSERT INTO `books` VALUES ('182', '2fmuoxmCCP2CRP-YTDR1T', '联盟之魔王系统', null, 'https://www.23us.la//BookFiles/BookImages/lianmengzhimowangxitong.jpg', '联盟之魔王系统', '【18年热血爆笑电竞文】理科学神陈牧，年级第一，目标最高学府，却被系统选中，必须去打英雄联盟，还要拿到世…...');
INSERT INTO `books` VALUES ('183', 'jSUAjEB3lRdF_ljUH5lFv', '终极斗罗', null, 'https://www.23us.la//BookFiles/BookImages/zhongjidouluo.jpg', '终极斗罗', '一万年后，冰化了。斗罗联邦科考队在极北之地科考时发现了一个有着金银双色花纹的蛋，用仪器探察之后，发现里…...');
INSERT INTO `books` VALUES ('184', '6D8Q5E_8lfaiHw9aGFfPw', '重生之都市仙尊', null, 'https://www.23us.la//BookFiles/BookImages/zhongshengzhidoushixianzun.jpg', '重生之都市仙尊', '“一代仙尊”洛尘遭人偷袭，重生回到地球。　　地位普通的他，面对女朋友的鄙视，情敌的嘲讽，父母的悲惨生活…...');
INSERT INTO `books` VALUES ('185', 'jbxaVrs6W04gAz4bjQVRx', '伏天氏', null, 'https://www.23us.la//BookFiles/BookImages/futianshi.jpg', '伏天氏', '东方神州，有人皇立道统，有圣贤宗门传道，有诸侯雄踞一方王国，诸强林立，神州动乱千万载，执此之时，一代天…...');
INSERT INTO `books` VALUES ('186', '_O7RpTEUD70LyLbrGV2o0', '最强狂兵', null, 'https://www.23us.la//BookFiles/BookImages/59959.jpg', '最强狂兵', '一代兵王含恨离开部队，销声匿迹几年后，逆天强者强势回归都市，再度掀起血雨腥风！简单粗暴是我的行事艺术，…...');
INSERT INTO `books` VALUES ('187', '5-0m0BWZXhp25WBJUvt0-', '九阳帝尊', null, 'https://www.23us.la//BookFiles/BookImages/56480.jpg', '九阳帝尊', '   一场奇遇，一头比山岳还要大的金翅大鹏，成了少年楚晨的分身，从此他获得了进入神墓的资格，神…...');
INSERT INTO `books` VALUES ('188', '6ds0RnMwfRbwpMS1kCQkA', '篮坛少帅', null, 'https://www.23us.la//BookFiles/BookImages/lantanshaoshuai.jpg', '篮坛少帅', '一个来自未来的业余篮球爱好者，孤身闯荡美职篮，成就王朝教父。...');
INSERT INTO `books` VALUES ('189', 'wJYakfuF3Uw8EQ6pM5ZOC', '仙武神煌', null, 'https://www.23us.la//BookFiles/BookImages/xianwushenhuang.jpg', '仙武神煌', '大道飘渺，顺之者殒，竞出者生。　　 一介凡人，仙道争锋　　 推荐锤子已经完本书《抗战之钢铁风暴》种田…...');
INSERT INTO `books` VALUES ('190', '8Wqc3X-7qNyLQQt4-eYKE', '洪荒之截教首徒', null, 'https://www.23us.la//BookFiles/BookImages/62633.jpg', '洪荒之截教首徒', '重生洪荒，成为截教首徒，肩负中兴截教的重任。奈何神通不及天数，圣人之下，一切皆为蝼蚁，元雷想要中兴截教…...');
INSERT INTO `books` VALUES ('191', 'XHgeGKFMhp4w0h1o9P31o', '极品小农场', null, 'https://www.23us.la//BookFiles/BookImages/2517.jpg', '极品小农场', ' 异国他乡，悠哉小农民。 啤酒，小菜，牛羊烧烤，小池塘，三五鱼虾，一锅汤。 春有百花秋有月,夏有…...');
INSERT INTO `books` VALUES ('192', 'EGVlvfMiIMospOn1g_tHi', '文娱万岁', null, 'https://www.23us.la//BookFiles/BookImages/wenyuwansui.jpg', '文娱万岁', '这是一个片场暴君肆虐在文娱大时代的故事，一个背负此岸之繁华，成就彼岸之神话的故事——　　可以说是非常扯…...');
INSERT INTO `books` VALUES ('193', 'x1vsJELk3iAudIEenn_g1', '大唐好相公', null, 'https://www.23us.la//BookFiles/BookImages/datanghaoxianggong.jpg', '大唐好相公', '武德六年，大唐初定，百废待兴。　　太子稳坐东宫，李世民野心勃勃。　　武将定江山，文臣思治国。　　穿越来…...');
INSERT INTO `books` VALUES ('194', '1a7HJ8KKAURolEofKnN0e', '明朝小侯爷', null, 'https://www.23us.la//BookFiles/BookImages/mingchaoxiaohouye.jpg', '明朝小侯爷', '穿越成明朝极品二世祖了，生活简直不要太幸福！调戏调戏美女丫头，带着小厮横行街头，啧啧，人生还得有点理想…...');
INSERT INTO `books` VALUES ('195', 'Be0XR0kXv34GS9aXLjkYg', '末世大回炉', null, 'https://www.23us.la//BookFiles/BookImages/97245.jpg', '末世大回炉', '【上古世纪主题征文（15万字以上长篇作品）】 丧尸爆发，人类绝境来临，地球磁场瞬变，一切回归最初，回到…...');
INSERT INTO `books` VALUES ('196', 'Vi7FgzCAx_32U1e_3YBJH', '末世异形主宰', null, 'https://www.23us.la//BookFiles/BookImages/77381.jpg', '末世异形主宰', '末世来临，野外化成丛林，城市变成废墟，社会秩序彻底崩溃。 变异进化的狂暴生物，颠覆人类认知的嗜血虫子…...');
INSERT INTO `books` VALUES ('197', 'aDn0IFYM7iBhZTkrTuGYV', '星战风暴', null, 'https://www.23us.la//BookFiles/BookImages/130.jpg', '星战风暴', ' 军校考试临近，二十八的基因数被直接取消了考试资格。 替朋友送个情书，结果却掉到了湖中，殉情之名不…...');
INSERT INTO `books` VALUES ('198', 'Tm28368mTtYZiptsSG3Ou', '纵猎天下', null, 'https://www.23us.la//BookFiles/BookImages/zonglietianxia.jpg', '纵猎天下', '拿着凑合的工资，开着凑合的车子，看看凑合的风景，过着凑合的日子……　　不过当陆宽带着十五年的记忆重生，…...');
INSERT INTO `books` VALUES ('199', 'zNxHghN3Xo5Idix9zkSaq', '农家老太太', null, 'https://www.23us.la//BookFiles/BookImages/103880.jpg', '农家老太太', '#http://_1{color:#FF0000;font-weight:bold;border-style:double;} 比穿成农家小寡妇还惨的是什么？ …...');
INSERT INTO `books` VALUES ('200', 'oM-n91mRjP802WoSbxPYN', '重生学霸：军长老公，好体力！', null, 'https://www.23us.la//BookFiles/BookImages/zhongshengxueba：junzhanglaogong，haotili！.jpg', '重生学霸：军长老公，好体力！', '七窍流血，身体腐烂，活活被蛇虫鼠蚁咬死。意外重回中考当天，夏晴势要那些贱人生不如死！却不想命运附赠腹黑…...');

-- ----------------------------
-- Table structure for directory
-- ----------------------------
DROP TABLE IF EXISTS `directory`;
CREATE TABLE `directory` (
  `directoryId` int(20) NOT NULL,
  `bookId` int(20) DEFAULT NULL,
  `directoryTitle` varchar(255) DEFAULT NULL,
  `directoryUrl` varchar(255) DEFAULT NULL,
  `directoryFileUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`directoryId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of directory
-- ----------------------------

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) DEFAULT NULL,
  `goods_name` varchar(255) DEFAULT NULL,
  `price` double(255,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------

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
INSERT INTO `user` VALUES ('1', '小米发s', '1128228373', '11', '17266262662', 'admin', 'admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoxMTI4MjI4MzczLCJpYXQiOjE1ODk3Njc0OTcsImV4cCI6MTU4OTc3MTA5N30.MLvUXP28Dr2oyIFfnn5-SWvH4pWsyXgBYBG59zpcTKE', 'http://127.0.0.1:7001/public/uploads/94a46ce74d34f75495a3a43136032af7.jpg', 'admin');
