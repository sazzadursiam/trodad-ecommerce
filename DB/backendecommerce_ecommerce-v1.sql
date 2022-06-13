-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 13, 2022 at 09:56 AM
-- Server version: 10.2.44-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backendecommerce_ecommerce-v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `btnLink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `title`, `image`, `btnLink`, `created_at`, `updated_at`) VALUES
(1, 'Banner - 1', '/Images/Banners/1655117180.jpg', 'https://www.google.com/', '2022-06-13 12:35:05', '2022-06-13 14:46:39'),
(3, 'Slider - 1', '/Images/Banners/1655117193.jpg', 'https://www.google.com/', '2022-06-13 14:19:20', '2022-06-13 14:46:33');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brandName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brandImage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shortDesc` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '0: Not showin, 1: showing in brands page and menu',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brandName`, `slug`, `brandImage`, `shortDesc`, `status`, `created_at`, `updated_at`) VALUES
(3, 'Adidas', 'adidas', '/Images/Brands/1654778751.png', NULL, 1, '2022-06-09 16:45:51', '2022-06-09 16:45:51'),
(4, 'Nike', 'nike', '/Images/Brands/1654778821.png', '<p>good quailty</p><p><br></p>', 1, '2022-06-09 16:47:01', '2022-06-12 11:26:28');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parrentCatId` int(11) NOT NULL DEFAULT 0,
  `shortDesc` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '0: In-active, 1: Active means show in menu',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `parrentCatId`, `shortDesc`, `status`, `created_at`, `updated_at`) VALUES
(5, 'Mixpack', 'mixpack', 0, NULL, 1, '2022-06-07 15:03:14', '2022-06-07 15:06:32'),
(7, 'Snuff', 'snuff', 0, NULL, 1, '2022-06-07 15:05:44', '2022-06-07 15:05:44'),
(8, 'All White Portion', 'all-white-portion', 0, NULL, 1, '2022-06-07 15:06:16', '2022-06-07 15:06:16'),
(9, 'Make Your Own Snus', 'make-your-own-snus', 0, NULL, 1, '2022-06-07 15:07:41', '2022-06-07 15:07:41'),
(10, 'Lossnus', 'lossnus', 7, NULL, 1, '2022-06-07 15:09:38', '2022-06-07 15:09:38'),
(11, 'Portionssnus', 'portionssnus', 7, NULL, 1, '2022-06-07 15:10:31', '2022-06-07 15:10:31'),
(12, 'White Portion', 'white-portion', 7, NULL, 1, '2022-06-07 15:10:49', '2022-06-07 15:10:49'),
(13, 'Mini Portion', 'mini-portion', 7, NULL, 1, '2022-06-07 15:11:06', '2022-06-07 15:11:06'),
(14, 'Slim', 'slim', 8, NULL, 1, '2022-06-07 15:11:25', '2022-06-07 15:11:25'),
(15, 'Mini', 'mini', 8, NULL, 1, '2022-06-07 15:11:34', '2022-06-07 15:11:34'),
(16, 'Normal', 'normal', 8, NULL, 1, '2022-06-07 15:11:42', '2022-06-07 15:11:42'),
(17, 'Snussatser Lös', 'snussatser-los', 9, NULL, 1, '2022-06-07 15:12:34', '2022-06-07 15:12:34'),
(18, 'Snussatser Portion', 'snussatser-portion', 9, NULL, 1, '2022-06-07 15:12:48', '2022-06-07 15:12:48'),
(19, 'Snusaromer & snuskryddor', 'snusaromer-snuskryddor', 9, NULL, 1, '2022-06-07 15:13:02', '2022-06-07 15:13:02'),
(20, 'Tillbehör göra eget snus', 'tillbehor-gora-eget-snus', 9, NULL, 1, '2022-06-07 15:13:51', '2022-06-07 15:13:57'),
(21, 'FAQ make your own snus', 'faq-make-your-own-snus', 9, NULL, 1, '2022-06-07 15:14:16', '2022-06-12 11:28:16');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_05_31_111342_create_brands_table', 1),
(6, '2022_06_01_074806_create_categories_table', 1),
(7, '2022_06_02_081200_create_sub_categories_table', 1),
(8, '2022_06_05_101258_create_products_table', 2),
(9, '2022_06_06_073309_create_product_attrs_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brandId` int(11) NOT NULL DEFAULT 0,
  `categoryId` int(11) NOT NULL DEFAULT 0,
  `subCategoryId` int(11) DEFAULT NULL,
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
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `sku`, `brandId`, `categoryId`, `subCategoryId`, `image`, `shortDescription`, `description`, `price`, `packSize1`, `unitPrice1`, `variantPrice1`, `oldPrice1`, `flagText1`, `isNew1`, `isNewPrice1`, `packSize2`, `packSize3`, `packSize4`, `packSize5`, `unitPrice2`, `unitPrice3`, `unitPrice4`, `unitPrice5`, `variantPrice2`, `variantPrice3`, `variantPrice4`, `variantPrice5`, `oldPrice2`, `oldPrice3`, `oldPrice4`, `oldPrice5`, `flagText2`, `flagText3`, `flagText4`, `flagText5`, `isNew2`, `isNew3`, `isNew4`, `isNew5`, `isNewPrice2`, `isNewPrice3`, `isNewPrice4`, `isNewPrice5`, `isNew`, `isNewPrice`, `created_at`, `updated_at`) VALUES
(4, 'Product - 1', 'product-1', NULL, 4, 8, 16, '/Images/Products/1654949895.png', NULL, NULL, 270, 1, 25, NULL, 340, 'test-1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, '2022-06-11 16:18:15', '2022-06-11 16:18:15'),
(5, 'Product - 4', 'product-4', NULL, 3, 7, 11, '/Images/Products/1654950225.png', NULL, NULL, 150, 2, 140, NULL, 200, 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, '2022-06-11 16:23:45', '2022-06-11 16:23:45'),
(6, 'Product - 5', 'product-5', NULL, 2, 9, 17, '/Images/Products/1654950445.png', NULL, NULL, 250, 2, 52, NULL, 350, 'test-4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, '2022-06-11 16:27:25', '2022-06-11 16:27:25'),
(7, 'Product - 2', 'product-2', NULL, 3, 9, 17, '/Images/Products/1654950651.png', NULL, NULL, 150, 2, 50, NULL, 130, 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, '2022-06-11 16:30:51', '2022-06-11 16:30:51'),
(8, 'Product - 3', 'product-3', NULL, 4, 7, 10, '/Images/Products/1654950821.jpg', NULL, NULL, 300, 3, 45, NULL, 320, 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, '2022-06-11 16:33:41', '2022-06-11 16:33:41'),
(10, 'Product - 6', 'product-6', NULL, 2, 7, 11, '/Images/Products/1654951333.png', NULL, NULL, 150, 1, 120, NULL, 160, 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, '2022-06-11 16:42:13', '2022-06-11 16:42:13'),
(11, 'Product - 7', 'product-7', NULL, 3, 7, 11, '/Images/Products/1654951746.png', NULL, NULL, 120, 1, 45, NULL, 150, 'test', NULL, NULL, 5, 10, NULL, NULL, 35, 30, NULL, NULL, NULL, NULL, NULL, NULL, 185, 320, NULL, NULL, 'test-2', 'test-3', NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, '2022-06-11 16:49:06', '2022-06-11 16:49:06'),
(12, 'Product - 8', 'product-8', NULL, 4, 8, 15, '/Images/Products/1654951977.jpg', NULL, NULL, 100, 1, 40, NULL, 120, 'test', NULL, NULL, 3, 5, NULL, NULL, 35, 30, NULL, NULL, NULL, NULL, NULL, NULL, 115, 180, NULL, NULL, 'test-2', 'test-3', NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, '2022-06-11 16:52:57', '2022-06-11 16:52:57'),
(17, 'Product - 9', 'product-9', NULL, 3, 8, 14, '/Images/Products/1655125152.png', NULL, NULL, 150, 1, 150, 150, 160, 'test', NULL, NULL, 3, NULL, NULL, NULL, 120, NULL, NULL, NULL, 360, NULL, NULL, NULL, 380, NULL, NULL, NULL, 'test-2', NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, '2022-06-13 16:59:12', '2022-06-13 16:59:12'),
(18, 'Product - 10', 'product-10', 'Art 1655126875', 4, 5, 0, '/Images/Products/1655126875.jpg', '<p>VOLT Pearls Midnight Mint Strong All White Portion\r\nVOLT Pearls Midnight Mint has a noticeably cooling and fresh taste of peppermint and menthol. The new Pearls technology means that the contents of the bag are shaped like small pearls, which gives a new mouthfeel.</p>', '<p>VOLT Pearls Midnight Mint Strong All White Portion\r\nVOLT Pearls Midnight Mint has a noticeably cooling and fresh taste of peppermint and menthol. The new Pearls technology means that the contents of the bag are shaped like small pearls, which gives a new mouthfeel.</p>', 150, 1, 150, 150, 180, 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, '2022-06-13 17:27:55', '2022-06-13 17:27:55');

-- --------------------------------------------------------

--
-- Table structure for table `product_attrs`
--

CREATE TABLE `product_attrs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productId` int(11) NOT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `packSize` int(11) NOT NULL,
  `unitPrice` double NOT NULL,
  `price` double NOT NULL,
  `oldPrice` double NOT NULL,
  `flagText` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isNew` tinyint(4) NOT NULL DEFAULT 0,
  `isNewPrice` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_attrs`
--

INSERT INTO `product_attrs` (`id`, `productId`, `sku`, `quantity`, `packSize`, `unitPrice`, `price`, `oldPrice`, `flagText`, `isNew`, `isNewPrice`, `created_at`, `updated_at`) VALUES
(1, 9, 'Art - 62a44613d4f93', NULL, 2, 23, 43, 545, 'sdfsdf', 1, 1, '2022-06-11 11:36:51', '2022-06-11 11:36:51'),
(2, 0, 'Art - 62a44680df334', NULL, 2, 33, 44, 555, 'sdafsf', 1, 1, '2022-06-11 11:38:40', '2022-06-11 11:38:40'),
(3, 11, 'Art - 62a446d69139f', NULL, 2, 33, 44, 55, 'dfgdf', 1, 1, '2022-06-11 11:40:06', '2022-06-11 11:40:06'),
(4, 12, 'Art - 62a44dbf19ee3', NULL, 23, 4, 34, 54, 'rwef', 1, 1, '2022-06-11 12:09:35', '2022-06-11 12:09:35');

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parrentCatId` int(11) DEFAULT NULL,
  `shortDesc` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '0: In-active, 1: Active means show in menu',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postalCode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_attrs`
--
ALTER TABLE `product_attrs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_attrs_sku_unique` (`sku`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `product_attrs`
--
ALTER TABLE `product_attrs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
