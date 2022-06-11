-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2022 at 01:51 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce-v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brandId` int(11) NOT NULL DEFAULT 0,
  `categoryId` int(11) NOT NULL DEFAULT 0,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shortDescription` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` double NOT NULL,
  `packSize1` int(11) DEFAULT NULL,
  `unitPrice1` double DEFAULT NULL,
  `variantPrice1` double DEFAULT NULL,
  `oldPrice1` double DEFAULT NULL,
  `flagText1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isNew1` int(11) DEFAULT NULL,
  `isNewPrice1` int(11) DEFAULT NULL,
  `packSize2` int(11) DEFAULT NULL,
  `packSize3` int(11) DEFAULT NULL,
  `packSize4` int(11) DEFAULT NULL,
  `packSize5` int(11) DEFAULT NULL,
  `unitPrice2` double DEFAULT NULL,
  `unitPrice3` double DEFAULT NULL,
  `unitPrice4` double DEFAULT NULL,
  `unitPrice5` double DEFAULT NULL,
  `variantPrice2` double DEFAULT NULL,
  `variantPrice3` double DEFAULT NULL,
  `variantPrice4` double DEFAULT NULL,
  `variantPrice5` double DEFAULT NULL,
  `oldPrice2` double DEFAULT NULL,
  `oldPrice3` double DEFAULT NULL,
  `oldPrice4` double DEFAULT NULL,
  `oldPrice5` double DEFAULT NULL,
  `flagText2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `flagText3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `flagText4` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `flagText5` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isNew2` int(11) DEFAULT 0,
  `isNew3` int(11) NOT NULL DEFAULT 0,
  `isNew4` int(11) NOT NULL DEFAULT 0,
  `isNew5` int(11) NOT NULL DEFAULT 0,
  `isNewPrice2` int(11) NOT NULL DEFAULT 0,
  `isNewPrice3` int(11) NOT NULL DEFAULT 0,
  `isNewPrice4` int(11) NOT NULL DEFAULT 0,
  `isNewPrice5` int(11) NOT NULL DEFAULT 0,
  `isNew` int(11) NOT NULL DEFAULT 0,
  `isNewPrice` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
