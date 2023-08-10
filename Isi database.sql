/*
 Navicat Premium Data Transfer

 Source Server         : Database Lokal
 Source Server Type    : MySQL
 Source Server Version : 50733
 Source Host           : localhost:3306
 Source Schema         : simple

 Target Server Type    : MySQL
 Target Server Version : 50733
 File Encoding         : 65001

 Date: 11/08/2023 06:19:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Records of master_agama
-- ----------------------------
INSERT INTO `master_agama` VALUES (1, 'ISLAM');
INSERT INTO `master_agama` VALUES (2, 'KRISTEN PROTESTAN');
INSERT INTO `master_agama` VALUES (3, 'KRISTEN KATOLIK');
INSERT INTO `master_agama` VALUES (4, 'HINDU');
INSERT INTO `master_agama` VALUES (5, 'BUDHA');
INSERT INTO `master_agama` VALUES (6, 'KONGHUCU');



-- ----------------------------
-- Records of master_jenis_pelatihan
-- ----------------------------
INSERT INTO `jenis_pelatihan` VALUES (1, 'Pelatihan Dasar Calon Pegawai Negeri Sipil', 'LATSAR');
INSERT INTO `jenis_pelatihan` VALUES (2, 'Pelatihan Kepemimpinan Pengawas', 'PKP');
INSERT INTO `jenis_pelatihan` VALUES (3, 'Pelatihan Kepemimpinan Administrator', 'PKA');

-- ----------------------------
-- Records of master_pangkat
-- ----------------------------
INSERT INTO `master_pangkat` VALUES (1, 'Juru', 'I.a');
INSERT INTO `master_pangkat` VALUES (2, 'Juru Muda Tingkat I', 'I.b');
INSERT INTO `master_pangkat` VALUES (3, 'Juru Tingkat I', 'I.d');
INSERT INTO `master_pangkat` VALUES (4, 'Pengatur Muda', 'II.a');
INSERT INTO `master_pangkat` VALUES (5, 'Pengatur Muda TK.I', 'II.b');
INSERT INTO `master_pangkat` VALUES (6, 'Pengatur', 'II.c');
INSERT INTO `master_pangkat` VALUES (7, 'Pengatur TK.I', 'II.d');
INSERT INTO `master_pangkat` VALUES (8, 'Penata Muda', 'III.a');
INSERT INTO `master_pangkat` VALUES (9, 'Penata Muda TK.I', 'III.b');
INSERT INTO `master_pangkat` VALUES (10, 'Penata', 'III.c');
INSERT INTO `master_pangkat` VALUES (11, 'Penata TK.I', 'III.d');
INSERT INTO `master_pangkat` VALUES (12, 'Pembina', 'IV.a');
INSERT INTO `master_pangkat` VALUES (13, 'Pembina TK.I', 'IV.b');
INSERT INTO `master_pangkat` VALUES (14, 'Pembina Utama Muda', 'IV.c');
INSERT INTO `master_pangkat` VALUES (15, 'Pembina Utama Madya', 'IV.d');
INSERT INTO `master_pangkat` VALUES (16, 'Pembina Utama', 'IV.e');


-- ----------------------------
-- Records of master_roles
-- ----------------------------
INSERT INTO `master_roles` VALUES (1, 'admin', '1');
INSERT INTO `master_roles` VALUES (2, 'pengajar', '1');
INSERT INTO `master_roles` VALUES (3, 'peserta', '1');

