-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 27, 2022 at 03:02 AM
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
-- Table structure for table `add_to_carts`
--

CREATE TABLE `add_to_carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userId` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productId` int(11) NOT NULL,
  `packSize` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `unitPrice` double NOT NULL,
  `price` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `add_to_carts`
--

INSERT INTO `add_to_carts` (`id`, `userId`, `userType`, `productId`, `packSize`, `qty`, `unitPrice`, `price`, `created_at`, `updated_at`) VALUES
(1, 'e1f44812-636e-4b1e-b3d9-a71785065159', 'Not-Reg', 16, 1, 1, 189, 189, '2022-06-26 13:12:45', '2022-06-26 13:12:45'),
(2, '1', 'Reg', 13, 1, 1, 34.99, 34.99, '2022-06-26 13:13:55', '2022-06-26 13:15:01');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `phone`, `address`, `city`, `image`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Sazzad', 'admin@gmail.com', '01747083028', NULL, NULL, NULL, '$2y$10$dc7Td2.1em1gRYSZ4XmI5O1nse73PDLJpYWZrkcvGAxNFsfNrUrAy', NULL, NULL);

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
(1, 'Slider - 1', '/Images/Banners/1655707592.png', '#', '2022-06-20 10:46:32', '2022-06-20 10:46:32'),
(2, 'Slider -2', '/Images/Banners/1655707614.png', '#', '2022-06-20 10:46:54', '2022-06-20 10:46:54');

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
(2, 'ACE', 'ace', '/Images/Brands/1655706884.png', '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">ACE är ett nytt All White-varumärke från den dansk-baserade tillverkaren Ministry Of Snus. ACE kommer i fyra olika smaker med hög nikotinhalt på 18 mg/g.</span></p>', 1, '2022-06-20 10:34:44', '2022-06-20 10:34:44'),
(3, 'AG Snus', 'ag-snus', '/Images/Brands/1655707007.png', '<p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">AG Snus har anor ända sedan mitten av 1800-talet. 1864 startade nämligen Georg Gundersen tillverkningen av snus, grovskuren tobak och spunnen tobak i Assens tobaksfabrik. I samma fabrik har det sedan dess tillverkats snus och tobak i massa olika utformningar.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Assens tobaksfabrik har sedan starten varit ett familjeägt företag. Från Georg Gundersen och fem generationer framåt. Alex Gundersen tog över företaget 2009 och byggde då en ny, modern snusfabrik. Ett år senare etablerade han AG Snus och inledde försäljningen av snus på den svenska marknaden. Då genom märket Kapten.</p>', 1, '2022-06-20 10:36:47', '2022-06-20 10:36:47'),
(4, 'Blue Ocean', 'blue-ocean', '/Images/Brands/1655707093.png', '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Blue Ocean utvecklas och produceras av AG Snus.&nbsp;AG:s snusproduktion grundas i&nbsp;hela fem generationers erfarenhet av tobak. Snuset från Blue Ocean hämtar inspiration från omgivningarna och designen håller ett klassiskt maritimt tema.</span></p>', 1, '2022-06-20 10:38:13', '2022-06-20 10:38:13'),
(5, 'Bull Dog', 'bull-dog', '/Images/Brands/1655720322.png', '<div class=\"row intro m-b-30\" style=\"box-sizing: border-box; margin-left: -15px; margin-right: -15px; margin-bottom: 30px;\"><div class=\"col-sm-9 col-xs-12\" style=\"box-sizing: border-box; position: relative; min-height: 1px; padding-left: 15px; padding-right: 15px; float: left; width: 877.5px;\"><div class=\"page-text\" style=\"box-sizing: border-box;\">Bull dog är kritvita&nbsp;snusportioner med en extremt stark nikotinupplevelse i torra nikotinportioner. Rinner mindre och håller längre&nbsp;än vanliga White-portioner.</div></div></div><div class=\"row\" style=\"box-sizing: border-box; margin-left: -15px; margin-right: -15px;\"><div class=\"col-sm-3 col-xs-6 m-b-30\" style=\"box-sizing: border-box; position: relative; min-height: 1px; padding-left: 15px; padding-right: 15px; float: left; width: 292.5px; margin-bottom: 30px; color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><br></div><div class=\"col-sm-3 col-xs-6 m-b-30\" style=\"box-sizing: border-box; position: relative; min-height: 1px; padding-left: 15px; padding-right: 15px; float: left; width: 292.5px; margin-bottom: 30px; color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><br></div><br class=\"Apple-interchange-newline\"></div>', 1, '2022-06-20 10:39:21', '2022-06-20 14:18:42'),
(6, 'Byron', 'byron', '/Images/Brands/1655707276.png', '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Under 1800-talet öppnades den allra första Byron-fabriken av de kubanska cigarrmakarna, och kusinerna, Jose och Eusebio. Nu paketeras just samma cigarrtradition i snusformat. Snus från Byron har inslag av bergamott och tobak och skapar därmed en klassiskt svensk snussmak. Snuset finns&nbsp;i fyra olika varianter. Dessa är: Byron White, Byron Portion, Byron Anis Portion och Byron Señorita Portion.</span></p>', 1, '2022-06-20 10:41:16', '2022-06-20 10:41:16');

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
(1, 'Snus', 'snus', 0, NULL, 1, '2022-06-20 10:24:26', '2022-06-20 10:24:26'),
(2, 'All White Portion', 'all-white-portion', 0, NULL, 1, '2022-06-20 10:24:50', '2022-06-20 10:24:50'),
(3, 'Göra Eget Snus', 'gora-eget-snus', 0, NULL, 1, '2022-06-20 10:25:12', '2022-06-20 10:25:12'),
(4, 'Mixpack', 'mixpack', 0, NULL, 1, '2022-06-20 10:25:39', '2022-06-20 10:25:39'),
(5, 'Lössnus', 'lossnus', 1, '<p>Vi har ett komplett sortiment av lössnus från alla kända varumärken. För dig som vill ha en ökad upplevelse i ditt snusade har vi också starkt lössnus. Vi erbjuder allt från 1 dosa till&nbsp;<strong style=\"color: rgb(0, 0, 255);\">stock snus</strong>, och 30-pack. Enkelt och bekvämt med snabb leverans hem till dörren.</p>', 1, '2022-06-20 10:33:26', '2022-06-20 10:33:26'),
(7, 'Nikotinfritt snus', 'nikotinfritt-snus', 1, '<p>Nikotinfritt snus är ett alternativ till snus som är helt fritt från tobak och nikotin. Det är ett passande val för dig som vill trappa ner lite eller helt sluta snusa. Vi på Snusbolaget har ett stort sortiment av nikotinfritt snus från en uppsjö av olika varumärken. Till exempel:&nbsp;Kickup,&nbsp;Onico,&nbsp;Qvitt&nbsp;och&nbsp;XQS. Gällande snus och amning, eller snus och graviditet, passar Onico bra! Se även&nbsp;nikotinpåsar utan tobak, som&nbsp;Velo&nbsp;&amp;&nbsp;Zyn.</p>', 1, '2022-06-20 10:36:52', '2022-06-20 10:36:52'),
(8, 'Portionssnus', 'portionssnus', 1, '<p>Portionssnus&nbsp;på nätet hittar du här. Vi har ett fullständigt sortiment av samtliga kända varumärken. Här hittar du stark portionssnus, extra stark portionssnus, long portionssnus och slim portionssnus som är av högsta kvalitet. Vi erbjuder olika packstorlekar, från 1-pack till&nbsp;stock snus, och 30-pack. Köp ditt portionssnus online här.</p>', 1, '2022-06-20 10:37:51', '2022-06-20 10:37:51'),
(9, 'Snuff och tuggtobak', 'snuff-och-tuggtobak', 1, '<p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Här hittar du vårt utbud av snuff/luktsnus/nässnus och tuggtobak. Snuff är ett tobakspulver som dras upp i näsan och det har ofta en fräsch mintarom som räcker&nbsp;länge. Luktsnuset kommer från märkena OddWolf,&nbsp;Gletscherprise, Ozona och Gawith.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Tuggtobak är en sorts snus som ska tuggas för att släppa ut smakerna,&nbsp;sedan snusas det som vanligt eller mellan kinden och käken. Tuggtobaken kommer från populära Oliver Twist, DOS och Piccanell</p>', 1, '2022-06-20 10:39:34', '2022-06-20 10:39:34'),
(10, 'Slim', 'slim', 2, '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">All White portion är en tobaksfri nikotinportion med vita portioner. De slimmade påsarna får en bekväm passform under läppen och finns i varierande styrkor.</span></p>', 1, '2022-06-20 10:41:51', '2022-06-20 10:41:51'),
(11, 'Mini', 'mini', 2, '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">All White portion Mini är små och diskreta nikotinportioner med mängder av olika smaker och styrkor.</span></p>', 1, '2022-06-20 10:42:27', '2022-06-20 10:42:27'),
(12, 'Normal', 'normal', 2, '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">All White portion är en tobaksfri nikotinportion med vita portioner. De Normalstora påsarna får en klassisk passform under läppen och finns i varierande styrkor och smaker.</span></p>', 1, '2022-06-20 10:42:58', '2022-06-20 10:42:58'),
(13, 'Snussatser Lös', 'snussatser-los', 3, '<p>Snussatser och råtobak för lössnus hittar du här. Både klassiskt snus som tillagas i ugn och snussatser som är klara efter några dagars kylförvaring. Att&nbsp;göra eget snus&nbsp;är enkelt och kostar från ca 4,83 kr/dosan.</p>', 1, '2022-06-20 10:45:15', '2022-06-20 10:45:15'),
(14, 'Snussatser Portion', 'snussatser-portion', 3, '<p>Enklare än såhär blir det inte att&nbsp;göra eget snus. Du kan snusa snuset direkt som det är eller tillsätta lite vatten för att få en blötare prilla. Vill du ändra smak på snuset kan du använda en arom efter tycke och smak!</p>', 1, '2022-06-20 10:46:08', '2022-06-20 10:46:08'),
(15, 'Snusaromer & snuskryddor', 'snusaromer-snuskryddor', 3, '<p>Gör eget snus&nbsp;och smaksätt det precis som du vill med våra snusaromer, essenser och snuskryddor. Vi har ett stort sortiment av snusaromer och snuskryddor som finns i många olika smaker.</p>', 1, '2022-06-20 10:47:01', '2022-06-20 10:47:01'),
(16, 'Tillbehör', 'tillbehor', 3, '<p>Snussprutor, snusdosor och prismaster Här hittar du alla tillbehör till snus och snussatser. Fuktighetsreglerande medel för dig som vill ha fuktigare eller fastare snus, snusdosor så att du kan förvara ditt&nbsp;hemgjorda snus&nbsp;och mycket annat.</p>', 1, '2022-06-20 11:22:16', '2022-06-20 11:22:16'),
(17, 'White Portion', 'white-portion', 1, '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Här hittar du ett fullständigt sortiment av klassiska och nya varumärken inom white portion. White portion är ett snus som rinner mindre och smakar längre. Du kan beställa allt från 1-pack till&nbsp;</span>stock snus<span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">, och 30-pack. Hitta ditt white portionssnus från populära varumärken som<span>&nbsp;</span></span>One snus<span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">,<span>&nbsp;</span></span>Lundgrens<span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>och<span>&nbsp;</span></span>General XR<span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>- enkelt och bekvämt med snabb leverans.</span></p>', 1, '2022-06-23 10:37:42', '2022-06-23 10:37:42'),
(18, 'Snustillbehör', 'snustillbehor', 1, '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Här hittar du tillbehör för portionssnus och lössnus. Bland annat produkter från Prismaster och Icetool.</span></p>', 1, '2022-06-23 10:41:11', '2022-06-23 10:41:11'),
(19, 'Mini Portion', 'mini-portion', 1, '<p><strong style=\"box-sizing: border-box; font-weight: 600; color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Mini portionssnus</strong><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>är ett diskret sätt att snusa på. Både dosorna och prillorna är av ett mindre format. Här finner du ett stort sortiment av mini portionssnus. Beställ online hos oss, alltid med snabb leverans.</span></p>', 1, '2022-06-23 10:41:58', '2022-06-23 10:41:58'),
(20, 'Snusdosor', 'snusdosor', 1, '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Här presenterar vi vårt utbud av snusdosor. Allt ifrån enkla dosor av plast till avancerade designerdosor av metall. I de flesta fall kan du lägga en vanlig snusdosa inuti våra metalldosor. På så sätt behöver inte portionspåsar och lössnus ligga löst.</span></p>', 1, '2022-06-23 10:42:41', '2022-06-23 10:42:41'),
(21, 'Snusarkivet', 'snusarkivet', 1, '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">I snusarkivet kommer du att hitta&nbsp;snus som inte längre existerar på marknaden. Det är produkter som av olika anledningar inte längre säljs men har varit en del&nbsp;i vårt snus historia. Här hittar du dina gamla favoriter och har möjlighet att&nbsp;lära dig mer om&nbsp;snuset som en&nbsp;gång i tiden har funnits.&nbsp;</span></p>', 0, '2022-06-23 10:43:33', '2022-06-26 09:43:59');

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
-- Table structure for table `journal_categories`
--

CREATE TABLE `journal_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categoryName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryslug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postCount` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `journal_categories`
--

INSERT INTO `journal_categories` (`id`, `categoryName`, `categoryslug`, `postCount`, `created_at`, `updated_at`) VALUES
(1, 'Debatt', 'debatt', 2, '2022-06-22 14:47:52', '2022-06-23 12:30:09'),
(2, 'Guider', 'guider', 1, '2022-06-22 15:18:11', '2022-06-23 12:28:20'),
(3, 'Intervjuer', 'intervjuer', 1, '2022-06-22 15:18:16', '2022-06-23 12:25:31');

-- --------------------------------------------------------

--
-- Table structure for table `journal_posts`
--

CREATE TABLE `journal_posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `categoryId` int(11) NOT NULL DEFAULT 0,
  `shortDescription` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `journal_posts`
--

INSERT INTO `journal_posts` (`id`, `title`, `slug`, `image`, `categoryId`, `shortDescription`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Dags för en nollvision för tobaksrelaterad dödlighet', 'dags-for-en-nollvision-for-tobaksrelaterad-dodlighet', '/Images/Journals/1655964773.png', 1, '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Vi vill att politiken i första hand främjar folkhälsan och skyddar våra unga. Därför behövs en realistisk syn på tobak- och nikotinprodukter. Det skriver Snusbolagets kommunikationschef Markus Lindblad, som anser att det är dags för ett nytänk om tobak- och nikotin i Sverige.</span></p>', '<p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">I nyligen publicerade debattartiklar lyfter Markus Lindblad övergången till snus- och nikotinportioner (tobaksfritt snus) som en viktig orsak till minskat rökande. Av<span>&nbsp;</span>Snusrapporten<span>&nbsp;</span>framgår det att nikotinportionerna, i likhet med det traditionella snuset, används av många brukare för att sluta röka – 45 procent uppger det som den främsta anledningen.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">- En av de tydliga trenderna i vår senaste Snusrapport är att snusarna i allt större utsträckning köper prillor utan tobak. Onlineförsäljningen av nikotinportioner ökade med 88 procent och används regelbundet av 45 procent av Sveriges snusare. Vi ser också att en närmare hälften av de som snusar idag började snusa för att sluta röka. Det här är bra för folkhälsan i Sverige och vi hoppas att lagstiftningen bidrar till att ännu fler liv räddas genom minskat rökande.</p><h3 class=\"\" style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 600; line-height: 27px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 18px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Nya lagar föreslås&nbsp;</h3><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Just nu pågår ett lagstiftningsarbete som kommer att påverka framtiden till snus- och nikotinprodukter i Sverige. Lindblad hänvisar till Snusbolagets<span>&nbsp;</span>Valmanifest, som har tagits fram inför det kommande valet, med förslag kring hur man bland annat kan sträva mot en nollvision av tobaksrelaterad dödlighet:</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">”Flera av våra förslag är konkret lagstiftning för tobak- och nikotinprodukter som i många fall har en hårdare linje än vad lagstiftningen föreslår”, skriver Lindblad och fortsätter:&nbsp;</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">”För att uppnå en nollvision kring tobaksrelaterade dödsfall behöver vi en politik och lagstiftning som värderar produkter utifrån deras individuella skadeverkningar. Desto mer hälsofarlig en produkt är, desto striktare ska produkten regleras. Unga ska inte få tillgång till tobak- och nikotinprodukter och därför behövs strikta åldersgränser. Det är även viktigt att överlämning av produkter till minderårig förbjuds, langning från äldre personer till unga bör vara straffbart.”</p><h3 class=\"\" style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 600; line-height: 27px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 18px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Engagera dig!</h3><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Nu, inför höstens val, måste vi alla engagera oss. Vi har börjat – vad gör du? Ju fler vi är, desto mer kan vi göra tillsammans. Se nedan tips på hur du kan engagera dig idag!</p>', '2022-06-22 15:42:44', '2022-06-23 12:18:06'),
(2, 'Hälsa för ohälsosamma på Post Tobacco', 'halsa-for-ohalsosamma-pa-post-tobacco', '/Images/Journals/1655972731.jpg', 3, '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Senaste avsnittet av<span>&nbsp;</span></span>Hälsa för ohälsosamma<span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>spelades in under&nbsp;symposiet Post Tobacco.</span></p>', '<p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">I Hälsa för ohälsosammas senaste avsnitt medverkar Joar Forssell (L) och Johan Hultberg (M). David Eberhard träffade de båda riksdagsledamöterna på scenen under det globala nikotinsymposiet<span>&nbsp;</span>Post Tobacco, som vi tidigare skrivit om här på Snusjournalen. I avsnittet diskuterar man varför det är så svårt att se nya tobaksfria produkter som ett alternativ till den farliga rökningen. Och hänger den&nbsp;låga andelen män som röker samman med den långa pappaledigheten i Sverige?</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Du hittar avsnittet<span>&nbsp;</span>här</p>', '2022-06-23 12:25:31', '2022-06-23 12:25:31'),
(3, 'Snusåret 2021', 'snusaret-2021', '/Images/Journals/1655972900.png', 2, '<section class=\"header-text\" style=\"box-sizing: border-box; display: block; color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: inherit; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left;\">2021 blev ännu ett roligt snusår med intressanta lanseringar, spännande nykomlingar och helt nya smaker. Häng med på en genomgång av årets höjdpunkter!</p></section><br class=\"Apple-interchange-newline\">', '<h3 class=\"\" style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 600; line-height: 27px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 18px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Årets nykomling</h3><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: 700; font-style: normal; line-height: 24px; font-family: &quot;Open Sans&quot;; color: rgb(102, 102, 102);\">General Harvest</strong></p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Under september lanserade Swedish Match sin nya produkt General Harvest som släpptes både som<span>&nbsp;</span>original portion<span>&nbsp;</span>och<span>&nbsp;</span>white portion. Produkten är gjord på råtobak från södra Brasilien och har en kraftig tobakssmak tillsammans med rostad kakao, läder, höstlöv samt toner av nypon. Ett snus för den som tycker att råvaran är den viktigaste ingrediensen!</p><h3 class=\"\" style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 600; line-height: 27px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 18px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Årets exklusiva produkt</h3><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: 700; font-style: normal; line-height: 24px; font-family: &quot;Open Sans&quot;; color: rgb(102, 102, 102);\">Lundgrens Tornedalen Winter</strong></p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Även i år kniper BAT priset för årets exklusiva släpp.<span>&nbsp;</span>Tornedalen Winter<span>&nbsp;</span>har hämtat inspiration från Tornedalens midvinterlandskap. Den begränsade vinterutgåvan har en ljus tobakskaraktär med toner av blåbärssoppa, mandel och vispad grädde.<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">Vi håller tummarna för att vi får se liknande exklusiva och limiterade utgåvor från Lundgrens nästa år. Kanske dyker en utmanare upp?</p><h3 class=\"\" style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 600; line-height: 27px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 18px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Årets nykomling inom nikotinportioner</h3><hr style=\"box-sizing: content-box; height: 0px; margin-top: 20px; margin-bottom: 20px; border-width: 1px 0px 0px; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image: initial; border-top-style: solid; border-top-color: rgb(238, 238, 238); color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: 700; font-style: normal; line-height: 24px; font-family: &quot;Open Sans&quot;; color: rgb(102, 102, 102);\">Volt</strong></p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Kategorin nikotinportioner har fullständigt exploderat under 2021. I maj lanserade Swedish Match ytterligare ett varumärke som fokuserar på nikotinpåsar –<span>&nbsp;</span>Volt.<br style=\"box-sizing: border-box;\">Volt är ett varumärke som innehåller sex olika produkter med allt från syrligt grönt äpple till kaffe.</p><h3 class=\"\" style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 600; line-height: 27px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 18px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Årets överraskning</h3><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: 700; font-style: normal; line-height: 24px; font-family: &quot;Open Sans&quot;; color: rgb(102, 102, 102);\">Nordic Spirit Melon Square Limited Edition&nbsp;</strong></p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Årets överraskning går till Nordic Spirit med deras<span>&nbsp;</span>Nordic Spirit Melon Square Limited Edition. Den släpptes som en sommarsmak i begränsad upplaga. Det är första gången någonsin vi kan hitta smaken av vattenmelon i snus- eller nikotinportionsformatet och den fungerar riktigt bra!</p>', '2022-06-23 12:28:20', '2022-06-23 12:28:20'),
(4, 'Släpp smaksättningen!', 'slapp-smaksattningen', '/Images/Journals/1655973009.jpg', 1, '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Under våren kommer regeringen att lägga fram förslag som påverkar framtiden till smaksatta nikotinprodukter, och riskerar göra livet svårare för alla dess användare.</span></p>', '<p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Nu måste alla vi som använder dessa produkter, och vi som tycker politikerna bör släppa smaksättningen, protestera så det hörs. Innan det är för sent.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 16px; line-height: 24px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Skriv under vårt upprop, skicka ett e-mail till våra politiker. Säg ifrån, innan politikerna tar makten över smaksättningen.</p>', '2022-06-23 12:30:09', '2022-06-23 12:30:09');

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
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customerId` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `streetAddress` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apartmentAddress` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postCode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orderStatus` int(11) NOT NULL DEFAULT 0 COMMENT '0: Placed',
  `paymentType` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paymentStatus` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `totalAmount` double NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `packSize` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `unitPrice` double NOT NULL,
  `price` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `subCategoryId` int(11) DEFAULT 0,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shortDescription` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` double NOT NULL,
  `discount1` double NOT NULL DEFAULT 0,
  `discount2` double NOT NULL DEFAULT 0,
  `discount3` double NOT NULL DEFAULT 0,
  `discount4` double NOT NULL DEFAULT 0,
  `discount5` double NOT NULL DEFAULT 0,
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
  `isNew` int(11) DEFAULT NULL,
  `isNewPrice` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `sku`, `brandId`, `categoryId`, `subCategoryId`, `image`, `shortDescription`, `description`, `price`, `discount1`, `discount2`, `discount3`, `discount4`, `discount5`, `packSize1`, `unitPrice1`, `variantPrice1`, `oldPrice1`, `flagText1`, `isNew1`, `isNewPrice1`, `packSize2`, `packSize3`, `packSize4`, `packSize5`, `unitPrice2`, `unitPrice3`, `unitPrice4`, `unitPrice5`, `variantPrice2`, `variantPrice3`, `variantPrice4`, `variantPrice5`, `oldPrice2`, `oldPrice3`, `oldPrice4`, `oldPrice5`, `flagText2`, `flagText3`, `flagText4`, `flagText5`, `isNew2`, `isNew3`, `isNew4`, `isNew5`, `isNewPrice2`, `isNewPrice3`, `isNewPrice4`, `isNewPrice5`, `isNew`, `isNewPrice`, `created_at`, `updated_at`) VALUES
(1, 'General Lössnus', 'general-lossnus', 'Art 1655893707', 1, 1, 5, '/Images/Products/1655712738.png', '<p>General Lös är ett lössnus med en kraftig och kryddig tobakssmak. Smaken har peppriga övertoner och en antydan av citrus. En klassiker från 1866!</p>', '<p>Om produkten General Lössnus</p><p>General Lös har kommit att bli en riktig klassiker i snusvärlden. Ett av världens största snusvarumärken som säljs i enorma mängder i Sverige och runt om i Europa. Receptet från 1866 var och är fortfarande hemligt.</p><p>Snuset har en kryddig och fyllig tobakssmak med inslag av bergamott, te, torkat gräs och läder. Kombinationen av kryddighet och syrlighet gör snuset välbalanserat. Ett lössnus som är lättbakat och smidigt formar en perfekt prilla. General snus har satt standarden för vad snus är, både i Sverige och resten av världen. Här hittar du alla våra produkter från General</p><p>INNEHÅLLSDEKLARATION</p><p>Vatten, Tobak, Fuktighetsbevarande medel (E 1520), Smakförstärkare (koksalt), Surhetsreglerande medel (E 500), Aromer inklusive rökarom. (Halt-, pH- och viktangivelserna är riktvärden).</p><p>HALTER</p><p>FUKTHALT 58 %</p><p>NIKOTINHALT 0,75 %</p><p>PH-VÄRDE 8,4</p><p>VIKT/DOSA 42 g</p>', 60, 0, 10, 9, 11, 0, 1, 60, 60, NULL, NULL, NULL, NULL, 10, 20, 30, NULL, 54, 54.6, 53.4, 60, 540, 1092, 1602, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2022-06-20 12:12:18', '2022-06-22 14:28:27'),
(2, 'Onico Pure White Slim Nikotinfritt Snus', 'onico-pure-white-slim-nikotinfritt-snus', 'Art 1655713689', 3, 1, 7, '/Images/Products/1655713689.png', '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Nya Onico Pure White Slim har en smak av pepparmint och en hint av eukalyptus och vanilj.</span></p>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten Onico Pure White Slim Nikotinfritt Snus</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Onico<span>&nbsp;</span>Pure White är helt nikotinfri och har långsmala prillor för en mer diskret och bättre passform under läppen. Låg rinninghet och långvarig smakupplevelse.</p>', 39, 0, 13, 13, 0, 0, 1, 39, 39, NULL, NULL, NULL, NULL, 10, 30, NULL, NULL, 33.93, 33.93, 39, 39, 339.3, 1017.9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-20 12:28:09', '2022-06-20 12:28:09'),
(4, 'VELO Ice Cool Mint Slim Strong All White Portion', 'velo-ice-cool-mint-slim-strong-all-white-portion', 'Art 1655717604', 5, 2, 10, '/Images/Products/1655717604.png', '<p><strong style=\"box-sizing: border-box; font-weight: 700; font-style: normal; line-height: 21px; font-family: &quot;Open Sans&quot;; color: rgb(102, 102, 102); font-size: 14px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">LYFT byter namn till VELO.&nbsp;</strong><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">VELO Ice Cool Mint Slim Strong All White Portions kritvita portioner har en intensiv smak av mint och nikotinhalten ligger på 14 mg/g.&nbsp;</span></p>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten VELO Ice Cool Mint Slim Strong All White Portion</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Konceptet i VELO Ice Cool Mint Slim Strong All White Portions är kort och gott vita, smakrika nikotinportioner utan tobak. Den intensiva och kylande smaken av mint ger dig upplevelsen av en kall vinterdag. Smaken innehåller även toner av krispig pepparmynta med inslag av sötma och örter</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Portionerna är tillverkade av fiber från eukalyptus och tall, med ett adderat nikotinextrakt, utvunnet från tobak.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">LYFT blir<span>&nbsp;</span>VELO. Under första delen av 2022 bytte LYFT namn till VELO. Produkterna som&nbsp;fanns&nbsp;under LYFT-varumärket blir VELO. Produkterna har samma smak och nikotinstyrka - det enda som skiljer är namnet på dosan.&nbsp;</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Antal portioner: 21&nbsp;st<br style=\"box-sizing: border-box;\">Vikt per portion: 0,7 g</p>', 45.49, 0, 7, 12, 33, 16, 1, 45.49, 45.49, NULL, NULL, NULL, NULL, 5, 10, 20, 30, 42.31, 40.03, 30.48, 38.21, 211.53, 400.31, 609.57, 1146.35, NULL, NULL, 799.8, NULL, NULL, NULL, '20-PACK', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-20 13:33:24', '2022-06-20 13:33:24'),
(5, 'VELO Ice Cool Mint Slim Strong All White Portion', '1655718064-velo-ice-cool-mint-slim-strong-all-white-portion', 'Art 1655718064', 6, 2, 11, '/Images/Products/1655718064.png', '<h1 style=\"box-sizing: border-box; font-size: 26px; margin: 0px 0px 10px; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 39px; color: rgb(38, 38, 38); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">VOLT Mystic Blue Mini All White Portion</h1><article class=\"product-text\" style=\"box-sizing: border-box; display: block; margin-top: 10px; margin-bottom: 20px; color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: inherit; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left;\">VOLT Mystic Blue är här i mini format! Den har samma friska och bäriga smak med toner av blåbär, uns vanilj och pepparmint fast i diskreta mini portioner.</p></article>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten VOLT Mystic Blue Mini All White Portion</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">VOLT Mystic Blue är en av de senaste tillskotten i VOLT familjen! Den har en spännande smak av blåbär avrundad men med toner av vanilj samt pepparmint som ger en led och mild känsla. En intensiv svalka med en viss sötma. Portionerna kommer i formatet mini med samma snabba smak- och nikotinleverans. Nikotinhalten ligger på 9mg nikotin per gram.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: 700; font-style: normal; line-height: 21px; font-family: &quot;Open Sans&quot;; color: rgb(102, 102, 102);\">VOLT</strong></p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">VOLT är tobaksfria vita nikotinpåsar med fräscha smaker i överraskande kombinationer, som till exempel Cool Crisp, Frosted Apple och Java Shake. Intressanta nya personligheter i alla styrkor, så hitta just din favorit och ge fantasin vingar</p>', 42.99, 0, 54, 29, 16, 0, 1, 42.99, 42.99, NULL, NULL, NULL, NULL, 5, 10, 30, NULL, 19.78, 30.52, 36.11, 42.99, 98.88, 305.23, 1083.35, 42.99, 199.99, 379.9, 379.9, NULL, 'NYTT PRIS', 'NYTT PRIS', NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-20 13:41:04', '2022-06-20 13:41:04'),
(6, 'Skruf Super White Fresh Max #6', 'skruf-super-white-fresh-max-6', 'Art 1655718388', 6, 2, 12, '/Images/Products/1655718388.png', '<h1 style=\"box-sizing: border-box; font-size: 34px; margin: 0px 0px 10px; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 51px; color: rgb(38, 38, 38); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Skruf Super White Fresh Max #6</h1><article class=\"product-text\" style=\"box-sizing: border-box; display: block; margin-top: 10px; margin-bottom: 20px; color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: inherit; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left;\">Skruf Super White Fresh Max #6 en extra stark All White Portion i original format, utan tobak med en isande smak av mint. En ultrastark variant av Skruf Super White Slim Fresh #5.</p></article>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten Skruf Super White Fresh Max #6</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: 700; font-style: normal; line-height: 21px; font-family: &quot;Open Sans&quot;; color: rgb(102, 102, 102);\">SKRUF SUPER WHITE FRESH MAX EXTRA STARK - NIKOTIN UTAN TOBAK</strong></p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Skruf Super White Fresh Max #6 är det senaste tillskottet i Skruf-familjen. Produkten&nbsp;kommer i helvita original-stora påsar som inte missfärgar tänderna och eliminerar den klassiska snuslukten.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Den har en extra stark nikotinhalt&nbsp;på hela 23&nbsp;mg nikotin per gram.</p>', 42.99, 0, 7, 11.5, 15, 0, 1, 42.99, 42.99, NULL, NULL, NULL, NULL, 5, 10, 30, NULL, 39.98, 38.05, 36.54, 42.99, 199.9, 380.46, 1096.24, 42.99, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-20 13:46:28', '2022-06-20 13:46:28'),
(7, 'Ozona President Luktsnus', 'ozona-president-luktsnus', 'Art 1655721223', 4, 1, 9, '/Images/Products/1655721223.png', '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Ozona President är ett luktsnus med arom av mint.</span></p>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten Ozona President Luktsnus</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Ozona President har en ren mintarom. Ozona President har sitt ursprung i Tyskland och produceras av Pöschl. Allt du behöver göra för att använda luktsnus är att ta en liten nypa av det, placera det i vardera näsborre och lukta lätt. Man behöver inte lukta särskilt kraftigt bara så att det inte rinner ut, ungefär som att lukta på en blomma. Känslan av nässnus lägger sig relativt snabbt men aromen sitter i länge. För att få bort tobaken, blås bara ut, ungefär som att snyta sig.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Luktsnus, då ofta kallat snuff, kan ses som föregångaren till dagens våta snus. Luktsnus var det självklara sättet att använda tobak i Europa på 1600-talet. Det fortsatte vara det i över 200 års tid, tills det snus vi känner till i dag fick sitt stora genombrott.</p>', 37.59, 0, 13, 0, 0, 0, 1, 37.59, 37.59, NULL, NULL, NULL, NULL, 10, NULL, NULL, NULL, 32.7, 37.59, 37.59, 37.59, 327.03, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-20 14:33:43', '2022-06-20 14:33:43'),
(8, 'Swedsnus Express 20 Dosor Standardmald Lös', 'swedsnus-express-20-dosor-standardmald-los', 'Art 1655721524', 3, 3, 13, '/Images/Products/1655721524.png', '<article class=\"product-text\" style=\"box-sizing: border-box; display: block; margin-top: 10px; margin-bottom: 20px; color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: inherit; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left;\">Ingen bakning nödvändig - Tillsätt endast vatten och eventuell arom. Populär och kramvänlig lössnus med standardmalning ifrån Swedsnus småländska snusfabrik. En kundfavorit tillverkad enligt svensk hantverkstradition. Ger ca. 20 dosor färdigt lössnus</p></article>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten Swedsnus Express 20 Dosor Standardmald Lös</h2><ul style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 10px; color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><li style=\"box-sizing: border-box;\">Originalet på marknaden sedan 2012.</li><li style=\"box-sizing: border-box;\">Lång hållbarhet.</li><li style=\"box-sizing: border-box;\">Tillsätt bara vatten.</li><li style=\"box-sizing: border-box;\">Färdigberedd på 5 minuter.</li><li style=\"box-sizing: border-box;\">Ingen bakning nödvändig.</li><li style=\"box-sizing: border-box;\">Ger ca. 20 dosor lössnus.</li><li style=\"box-sizing: border-box;\">Burk för förvaring av färdigt snus.</li></ul><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Swedsnus Express Lössnus är gjord av tobak av högsta premiumkvalitet. Genom en unik process har Swedsnus skapat originalet för ett ”gör-det-själv-lössnus” som man slipper att baka i ugn eller tryckkokare. Man bereder den enkelt genom att bara tillsätta vatten enligt medföljande instruktioner. Den kan användas naturell som den är, kryddas på egen hand eller med Swedsnus specialanpassade Expressaromer för bästa resultat och krambarhet. Använd gärna också Swedsnus Konsistenspåse - Suveränt effektiv för att bearbeta sitt lössnus! Snuset tillverkas enligt svensk hantverksmässig tradition i Swedsnus egen fabrik i Småland. Swedsnus Express Standardmald Lössnus ger ca. 0,75 kilo färdigt lössnus!</p>', 399, 0, 0, 0, 0, 0, 1, 399, 399, NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, 399, 399, 399, 399, 798, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-20 14:38:44', '2022-06-20 14:38:44'),
(9, 'Swedsnus Rebell Naturell 400 – Snusa Direkt!', 'swedsnus-rebell-naturell-400-snusa-direkt', 'Art 1655721746', 3, 3, 13, '/Images/Products/1655721746.png', '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Färdiga att snusa direkt. Välbalanserad tobaksblandning med tydlig, naturlig smak och lätta toner av rök. Miljösmart förpackning innehållande ca 400 portioner, motsvarande ca 20 dosor.</span></p>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten Swedsnus Rebell Naturell 400 – Snusa Direkt!</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Rebell Naturell White Portion har en tydlig naturlig smak av tobak av högsta kvalitet som balanseras med en lätt rökig ton. Smaken är bland det närmaste man kan komma ett historiskt och traditionellt svenskt snus från förr i tiden, då tobaksbladen ofta torkades över öppen spis. Mild och ren tobakssmak med lång varaktighet</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Portionerna är White Semi-Dry och har därför lite lägre rinnighet än vanliga White portioner, men kan enkelt fuktas lite om man föredrar en blötare prilla. Snuset tillverkas enligt svensk hantverksmässig tradition i Swedsnus egen fabrik i Småland. Färdiga att snusa direkt!</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Se liknande produkter<span>&nbsp;</span>HÄR!</p>', 229, 0, 0.5, 2, 3, 0, 1, 229, 229, NULL, NULL, NULL, NULL, 2, 3, 4, NULL, 227.85, 224.42, 222.13, 229, 455.71, 673.26, 888.52, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-20 14:42:26', '2022-06-20 14:42:26'),
(10, 'Swedsnus Expressarom Special', 'swedsnus-expressarom-special', 'Art 1655721930', 2, 3, 15, '/Images/Products/1655721930.png', '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Bästsäljande klassisk svensk snussmaksättning sedan 1800-talet! Naturligt utvunnen Bergamott med milda citrustoner i perfekt kombination med en lätt touch av rök. Räcker till ca 40 dosor.</span></p>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten Swedsnus Expressarom Special</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Swedsnus Expressaromer är anpassade för Swedsnus Express Lössnus. De kan med fördel användas till samtliga&nbsp;snussatser, antingen som de är eller i kombination med varandra för att variera smak efter eget tycke.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">För Swedsnus Express 20 Dosor Lössnus rekommenderas att man blandar 0,5 dl Expressarom med omkring 3,5 – 4 dl vatten. Öppnad flaska kan sparas.</p>', 49, 0, 0, 0, 0, 0, 1, 49, 49, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 49, 49, 49, 49, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-20 14:45:30', '2022-06-20 14:45:30'),
(11, 'Prillan Portionspåsar (200 st)', 'prillan-portionspasar-200-st', 'Art 1655722086', 2, 3, 16, '/Images/Products/1655722086.png', '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Prillan Portionspåsar för egen tillverkning av portionssnus baserat på lössnussatser. Glöm inte snussprutan, säljes separat</span></p>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten Prillan Portionspåsar (200 st)</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Prillan Portionspåsar passar utmärkt att använda till lössnussatser för att göra portioner av ditt favoritsnus som kanske bara finns som lös. Förpackningen räcker till 200 påsar portionssnus.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Längden på påsarna är 7cm och du klipper själv ner dem till den storlek du önskar och viker ihop dem. Du kan fylla påsarna själv eller genom att använda den färdiga snussprutan från Prillan (säljs separat)</p>', 49, 0, 0, 0, 0, 0, 1, 49, 49, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 49, 49, 49, 49, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-20 14:48:06', '2022-06-20 14:48:06'),
(12, 'LD Salmiak Portionssnus', 'ld-salmiak-portionssnus', 'Art 1655893970', 3, 1, 8, '/Images/Products/1655893970.png', '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">LD Salmiak Portion är ett snus med smak av tobak och salmiak.</span></p>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten LD Salmiak Portionssnus</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">LD Salmiak Portion är ett snus med smak av salmiak. Smaken är relativt mild, och riktar sig mest till snusaren som föredrar en smak av saltlakrits. LD Salmiak Portion tillverkas av Nordic Snus som har sin fabrik belägen i Vårgårda, södra Sverige.</p>', 30.99, 0, 19, 35, 23, 23, 1, 30.99, 30.99, NULL, NULL, NULL, NULL, 10, 15, 30, 50, 25.1, 20.14, 23.86, 23.86, 251.02, 302.15, 715.87, 1193.11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-22 14:32:50', '2022-06-22 14:32:50'),
(13, 'Knox Karaktär Blue White Portionssnus', 'knox-karaktar-blue-white-portionssnus', 'Art 1655967561', 3, 1, 17, '/Images/Products/1655967561.png', '<p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Knox Karaktär Blue White är ett white-portionssnus som har en traditionell tobakskaraktär med toner av bergamott och enbär.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: 700; font-style: normal; line-height: 21px; font-family: &quot;Open Sans&quot;; color: rgb(102, 102, 102);\">OBS! Ny dosdesign.&nbsp;Under en övergångsperiod så kan nya och äldre dos-versioner förekomma.</strong></p>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten Knox Karaktär Blue White Portionssnus</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Knox Karaktär Blue White Portion är ett white-portionssnus som kombinerar tobakssmak med inslag av citrus och enbär. Portionerna kan beskrivas som fullpackade och har därför en form som kan passa många.&nbsp;</p>', 34.99, 0, 18, 24.68, 18.58, 0, 1, 34.99, 34.99, NULL, NULL, NULL, NULL, 10, 11, 30, NULL, 28.69, 26.35, 28.49, 34.99, 286.92, 289.9, 854.67, NULL, NULL, NULL, NULL, NULL, NULL, '11-PACK', '30-PACK', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-23 10:59:21', '2022-06-23 10:59:21'),
(14, 'Filt Snuspapper', 'filt-snuspapper', 'Art 1655967913', 3, 1, 18, '/Images/Products/1655967913.png', '<p><span style=\"color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Filt Snuspapper innehåller tre meter filt som du kan tillverka ditt eget portionssnus med. Perfekt för den som gillar större/mindre portioner.</span></p>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten Filt Snuspapper</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Bakom Filt Snuspapper&nbsp;ligger idén&nbsp;att erbjuda fler valmöjligheter till snusare, precis som rökare har med egenrullade cigaretter. Att använda Filt till sitt&nbsp;snus är dock mycket lättare än att rulla en cigarett. Riv bara av en lagom stor bit papper, ta lite lössnus ur din dosa, lägg det&nbsp;mitt på pappret och vik ihop.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om du gör en portion som väger 3 eller 0,5 gram spelar ingen roll.&nbsp;Vikningen håller ändå ihop under läppen när pappret blir fuktigt. Filt Snuspapper är alltså perfekt för den som vill skräddarsy sin snusupplevelse.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Förpackningen innehåller 3 meter snuspapper, detta&nbsp;räcker ungefär till tre dosor snus.</p>', 19, 0, 0, 0, 0, 0, 1, 19, 19, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 19, 19, 19, 19, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-23 11:05:13', '2022-06-23 11:05:13');
INSERT INTO `products` (`id`, `name`, `slug`, `sku`, `brandId`, `categoryId`, `subCategoryId`, `image`, `shortDescription`, `description`, `price`, `discount1`, `discount2`, `discount3`, `discount4`, `discount5`, `packSize1`, `unitPrice1`, `variantPrice1`, `oldPrice1`, `flagText1`, `isNew1`, `isNewPrice1`, `packSize2`, `packSize3`, `packSize4`, `packSize5`, `unitPrice2`, `unitPrice3`, `unitPrice4`, `unitPrice5`, `variantPrice2`, `variantPrice3`, `variantPrice4`, `variantPrice5`, `oldPrice2`, `oldPrice3`, `oldPrice4`, `oldPrice5`, `flagText2`, `flagText3`, `flagText4`, `flagText5`, `isNew2`, `isNew3`, `isNew4`, `isNew5`, `isNewPrice2`, `isNewPrice3`, `isNewPrice4`, `isNewPrice5`, `isNew`, `isNewPrice`, `created_at`, `updated_at`) VALUES
(15, 'On! Spicy Margarita 6mg Strong', 'on-spicy-margarita-6mg-strong', 'Art 1655971933', 3, 1, 19, '/Images/Products/1655971933.png', '<article class=\"product-text\" style=\"box-sizing: border-box; display: block; margin-top: 10px; margin-bottom: 20px; color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">On! Spicy Margarita är små diskreta nikotinportioner med en tydlig smak av lime i kombination med en gnutta hetta. Finns i styrkorna<span>&nbsp;</span>3mg<span>&nbsp;</span>och 6mg nikotin per portion.</article>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten On! Spicy Margarita 6mg Strong</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">On! Spicy Margarita har en frisk smak av lime i kombination av heta chilifrukter.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Nikotinpåsarna är små och diskreta och kommer med en nikotinhalt på 9,5 mg nikotin per gram.</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Spicy Margarita kommer i två olika styrkor - en som innehåller 3mg nikotin per portion (9,5 mg/g) och en som innehåller 6 mg nikotin per portion (19 mg/g)</p>', 40.99, 0, 6.5, 22, 12, 16, 1, 40.99, 40.99, NULL, NULL, NULL, NULL, 5, 6, 10, 30, 38.33, 31.97, 36.07, 34.43, 191.63, 191.83, 360.71, 1032.95, NULL, 230.94, NULL, NULL, NULL, 'NYTT PRIS', NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-23 12:12:13', '2022-06-23 12:12:13'),
(16, 'Snusdosa', 'snusdosa', 'Art 1655972046', 3, 1, 20, '/Images/Products/1655972046.png', '<article class=\"product-text\" style=\"box-sizing: border-box; display: block; margin-top: 10px; margin-bottom: 20px; color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">En snygg snusdosa i rostfritt stål för portion eller -lössnus.</article>', '<h2 style=\"box-sizing: border-box; font-family: &quot;Open Sans&quot;; font-weight: 700; line-height: 36px; color: rgb(38, 38, 38); margin: 0px 0px 10px; font-size: 24px; font-style: normal; padding: 10px 0px 0px; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Om produkten Snusdosa</h2><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Tighta jeans? Ibland händer det att snusdosan pajar. Det är därför vi har snusdosor i rostfritt stål, dessa går definitivt inte sönder. Sedan gör det inget att den är sjukt snygg. Du kan fylla dosan med antingen lössnus eller portionssnus. Snusdosan är framtagen av Dacapo Silver och passar perfekt som present till dig eller din snusvän!</p><p style=\"box-sizing: border-box; margin: 0px 0px 20px; text-transform: none; font-size: 14px; line-height: 21px; font-family: &quot;Open Sans&quot;; font-weight: 400; font-style: normal; color: rgb(102, 102, 102); text-align: left; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Tips. Om du har den här dosan i kylen hålls snuset kallare en längre tid än hos en vanlig plastdosa.</p>', 189, 0, 0, 0, 0, 0, 1, 189, 189, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 189, 189, 189, 189, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-06-23 12:14:06', '2022-06-23 12:14:06');

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

-- --------------------------------------------------------

--
-- Table structure for table `product_ratings`
--

CREATE TABLE `product_ratings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rating` double NOT NULL,
  `ratingTitle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ratingComments` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ratingUser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productId` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0: Pending, 1:Approved',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `streetAddress` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apartmentAddress` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profileImage` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postCode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `country`, `streetAddress`, `apartmentAddress`, `city`, `district`, `profileImage`, `postCode`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'user', 'user@gmail.com', '41411353553', NULL, NULL, NULL, NULL, NULL, '/Images/user/profile/1656248430.png', NULL, NULL, '$2y$10$n0kPtQxkf5UimhCMJUY3jeOkjABHyZrucpIG2EBcwJDBG7hsEIxou', NULL, '2022-06-26 16:55:36', '2022-06-26 17:01:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_to_carts`
--
ALTER TABLE `add_to_carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

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
-- Indexes for table `journal_categories`
--
ALTER TABLE `journal_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `journal_posts`
--
ALTER TABLE `journal_posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
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
-- Indexes for table `product_ratings`
--
ALTER TABLE `product_ratings`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `add_to_carts`
--
ALTER TABLE `add_to_carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
-- AUTO_INCREMENT for table `journal_categories`
--
ALTER TABLE `journal_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `journal_posts`
--
ALTER TABLE `journal_posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `product_attrs`
--
ALTER TABLE `product_attrs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_ratings`
--
ALTER TABLE `product_ratings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
