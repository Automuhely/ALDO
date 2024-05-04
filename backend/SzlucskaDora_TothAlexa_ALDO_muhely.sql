-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 03, 2024 at 10:01 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `muhely`
--

-- --------------------------------------------------------

--
-- Table structure for table `autos`
--

CREATE TABLE `autos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `alvazszam` varchar(17) NOT NULL,
  `marka` varchar(20) NOT NULL,
  `motorkod` varchar(6) NOT NULL,
  `evjarat` int(11) NOT NULL,
  `rendszam` varchar(10) NOT NULL,
  `becenev` varchar(20) DEFAULT NULL,
  `ugyfel` bigint(20) UNSIGNED NOT NULL,
  `hitelesitett` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `autos`
--

INSERT INTO `autos` (`id`, `alvazszam`, `marka`, `motorkod`, `evjarat`, `rendszam`, `becenev`, `ugyfel`, `hitelesitett`, `created_at`, `updated_at`) VALUES
(1, '12345678901234567', 'Mercedes', 'abc', 2000, 'abc123', 'Bogár', 1, 0, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(2, '12345678907894562', 'Bmw', 'guf', 2001, 'dan123', 'Danteas', 1, 0, '2024-05-02 18:08:43', '2024-05-03 17:37:30'),
(3, '30mjKSCvuAPKT8NNB', 'Opel', 'TOA', 1910, 'bya-443', 'Emőke', 8, 0, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(4, '53RWBEadrWg2Mlvid', 'Honda', '0wL', 1981, 'obm-140', 'Léna', 7, 0, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(5, 'xV1H392fJXlj9hi8W', 'Lexus', 'MdH', 1973, 'dao-609', 'Pista', 3, 0, '2024-05-02 18:08:43', '2024-05-02 20:46:19'),
(6, 'vpMPcPSaVUbVeWb4O', 'Ford', '1fR', 1997, 'ati-232', 'Boróka', 2, 0, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(7, 'qIIp3TG3Ou2hlQjG7', 'Opel', 'uaV', 1977, 'qjv-389', 'János', 5, 0, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(8, 'IS19kiDdv5Bc2JgMj', 'Honda', 'beg', 1992, 'xtf-813', 'Léna', 4, 0, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(9, 'EVTWCJ9dg9EjYx54M', 'Ford', 'oIe', 1947, 'svw-574', 'László', 8, 0, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(10, 'MKmjSfOQCMox2rB21', 'Alfa Romeo', 'jcj', 1999, 'pjh-650', 'Barnaasd', 1, 0, '2024-05-02 18:08:43', '2024-05-03 17:37:22'),
(11, 'YjHUeVPU30nLzKOnC', 'Mercedes', 'kQe', 1894, 'aki-733', 'Gábor', 7, 0, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(12, 'Agi1meeNbjHuP5pEO', 'BMW', 'aGs', 2021, 'uyg-792', 'Zita', 1, 0, '2024-05-02 18:08:43', '2024-05-02 18:08:43');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('a@gmail.com|127.0.0.1', 'i:1;', 1714687168),
('a@gmail.com|127.0.0.1:timer', 'i:1714687168;', 1714687168),
('aldo@gmail.com|127.0.0.1', 'i:1;', 1714687180),
('aldo@gmail.com|127.0.0.1:timer', 'i:1714687180;', 1714687180);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feladats`
--

CREATE TABLE `feladats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `megnevezes` varchar(50) NOT NULL,
  `munkadij` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `feladats`
--

INSERT INTO `feladats` (`id`, `megnevezes`, `munkadij`, `created_at`, `updated_at`) VALUES
(1, 'Gumicsere', 15000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(2, 'Általános ellenőrzés', 15000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(3, ' a', 15000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(4, ' ab', 15000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(5, ' ac', 15000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(6, ' ad', 15000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(7, ' ae', 15000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(8, 'Mr. Irving, a korlátra.', 77301, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(9, 'Gyűjtött sok söpredéket.', 46833, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(10, 'Akkor kisült egy nagy.', 45439, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(11, 'De a pikkelyezést ne.', 52467, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(12, 'Zsebre dugott kézzel.', 38342, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(13, 'Az utasok nagy része.', 57988, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(14, 'De hát ez nem sokat ér.', 71008, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(15, 'A király iszgatott volt.', 69254, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(16, 'Mr. Gouldot. - És ha.', 73569, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(17, 'Három dollárért ingyen.', 28807, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(18, 'Ilyenkor kisorsolnak.', 87926, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(19, 'A lábam úgy fájt, hogy.', 54074, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(20, 'José, a pincér állandó.', 91475, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(21, 'Mosolyogni meg remekül.', 28628, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(22, 'Sapkájának ellenzője.', 40396, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(23, 'Mer sziftelen kutya ez.', 72352, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(24, 'Ember! Ne tréfáljon!.', 96127, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(25, 'Azon a helyen nem volt.', 72123, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(26, 'És elhordja a papírokat.', 59492, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(27, 'Mi a St. Antoniók angol.', 60704, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(28, 'Mer most jut eszembe.', 39699, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(29, 'Inkognitó az, ha valaki.', 65616, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(30, 'Bob Warinst szabadon.', 44258, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(31, 'Engem is elintéznek, ha.', 89915, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(32, 'Most váratlanul értem.', 83476, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(33, 'Velő nagyot kiáltott.', 45249, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(34, 'Különben mint írni és.', 79214, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(35, 'Nehéz húzni a jókora.', 63449, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(36, 'Már éppen hozzáfogtak.', 96595, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(37, 'Igazán? - Igen. Volt.', 61641, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(38, 'Hollo-Sztárnulunak, de.', 90917, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(39, 'Az ön környezetében mit.', 54021, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(40, 'Bedobta? - Be. Ilyenkor.', 57041, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(41, 'Mr. Irving. De ez nem.', 48325, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(42, 'Eszért él ma is, csak.', 55070, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(43, 'A király tulajdonosa.', 88468, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(44, 'Utálattal látták, hogy.', 80042, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(45, 'Vigyázz! - sziszegte a.', 39540, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(46, 'Tulipánt keresi. - Hát.', 42787, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(47, 'A Nagy Bivaly kihúzta.', 71422, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(48, 'Ki lehet az, akinek a.', 26911, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(49, 'Megvan a kés! - Hol?.', 41495, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(50, 'José, mint egy fáradt.', 45638, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(51, 'De a legszembeötlőbb.', 47503, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(52, 'Kegyelmes. - Maga olyan.', 60151, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(53, 'Hej, pincér! Jöjjön a.', 26053, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(54, 'Amit ezzel a fiúval itt.', 96898, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(55, 'Vanekre. De hirtelen.', 27927, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(56, 'NEM VÁLLAL FELELŐSSÉGET.', 30973, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(57, 'Azután lesújtott! De a.', 75317, '2024-05-02 18:08:44', '2024-05-02 18:08:44');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_03_16_140713_create_personal_access_tokens_table', 1),
(5, '2024_03_16_141440_create_autos_table', 1),
(6, '2024_03_16_141514_create_munkalaps_table', 1),
(7, '2024_03_16_141600_create_feladats_table', 1),
(8, '2024_03_16_143710_create_munkalap_tetels_table', 1),
(9, '2024_04_01_144929_create_munka_ars_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `munkalaps`
--

CREATE TABLE `munkalaps` (
  `munkalapszam` bigint(20) UNSIGNED NOT NULL,
  `auto` bigint(20) UNSIGNED NOT NULL,
  `ugyfel` bigint(20) UNSIGNED NOT NULL,
  `munkavezeto` bigint(20) UNSIGNED NOT NULL,
  `altalanosLeiras` varchar(255) NOT NULL,
  `elvitel_ido` date DEFAULT NULL,
  `statusz` tinyint(4) NOT NULL,
  `uzembentarto` bigint(20) UNSIGNED NOT NULL,
  `szamlaszam` varchar(30) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `munkalaps`
--

INSERT INTO `munkalaps` (`munkalapszam`, `auto`, `ugyfel`, `munkavezeto`, `altalanosLeiras`, `elvitel_ido`, `statusz`, `uzembentarto`, `szamlaszam`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 2, 'Általános szervíz, átvizsgálás...', NULL, 1, 1, '1234568', '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(2, 2, 1, 2, 'Kerékcsere, nyomásellenőrzés', NULL, 1, 1, '1234567', '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(3, 2, 1, 2, 'Fóliázás, olajcsere', NULL, 1, 1, '12345613', '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(4, 5, 6, 2, 'Mi?... Miféle alvilág?! - Hát... bizonyára.', NULL, 2, 6, '965857', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(5, 12, 3, 2, 'Batáviából szöktem. - Mit akar tőle? - kérdezte.', NULL, 2, 2, '588574', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(6, 2, 4, 2, 'Távoli vonatfütty hangzott elnyújtottan az.', NULL, 2, 3, '735348', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(7, 4, 5, 2, 'Vacsorához langusztát követelt, és Chateau Irát.', NULL, 2, 3, '394716', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(8, 4, 8, 2, 'Isten kegyelméből nagybátyám és nevelőm, aki.', NULL, 2, 5, '363020', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(9, 8, 7, 2, 'Irving. De ez nem Fülig Jimmy? Megragadta.', NULL, 1, 7, '304785', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(10, 4, 6, 2, 'Hallgattak. Eszek úgy hallgatnak itt feketébe.', NULL, 0, 4, '394907', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(11, 8, 8, 2, 'Rakjál ki mindent a zsebedből - szólt a Főorvos.', NULL, 2, 7, '852086', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(12, 6, 6, 2, 'Mr. Greenwood... - Igazán sajnálom fiam, mert.', NULL, 2, 5, '126005', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(13, 9, 8, 2, 'Gyanús alak. Orvul megtámadta Tulipánt. De azt.', NULL, 0, 2, '806023', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(14, 7, 3, 2, 'Hol jártál? - Megint az elhelyezőbe viszel.', NULL, 2, 6, '548744', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(15, 3, 8, 2, 'Tempózó jobb karja hatalmas ívben átcsap egy.', NULL, 2, 1, '879529', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(16, 4, 6, 2, 'Valaki rászólt, hogy ne írjam alá. A király a.', NULL, 0, 1, '974860', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(17, 10, 7, 2, 'Vöröskarom is. - Nem kell szökni! A Radzeer.', NULL, 2, 5, '267480', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(18, 11, 7, 2, 'Úgy van. Most szépen tedd ide a közelbe. Ne.', NULL, 1, 4, '602869', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(19, 6, 3, 2, 'A tükörben megpillantotta az igazi Trebitschet.', NULL, 1, 6, '931599', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(20, 10, 7, 2, 'A pincér dobálta vízbe az összes St. Antoniót és.', NULL, 2, 6, '953486', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(21, 3, 3, 2, 'Volt a lényében valami csodálatos közöny és.', NULL, 2, 8, '786308', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(22, 8, 6, 2, 'Marhaság! - sivította Petters. - Kevesen.', NULL, 2, 5, '368768', '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(23, 3, 3, 2, 'Almira szigetébe a fővároshoz. A parton egy.', NULL, 2, 5, '893420', '2024-05-02 18:08:44', '2024-05-02 18:08:44');

-- --------------------------------------------------------

--
-- Table structure for table `munkalap_tetels`
--

CREATE TABLE `munkalap_tetels` (
  `feladat_id` bigint(20) UNSIGNED NOT NULL,
  `munkalapszam` bigint(20) UNSIGNED NOT NULL,
  `szerelo` bigint(20) UNSIGNED NOT NULL,
  `leiras` varchar(100) NOT NULL,
  `alkatresz` varchar(50) DEFAULT NULL,
  `alk_marka` varchar(20) DEFAULT NULL,
  `mennyiseg` tinyint(4) DEFAULT NULL,
  `alkatresz_ar` int(11) DEFAULT NULL,
  `alk_rend_ido` date DEFAULT NULL,
  `alk_beerk_ido` date DEFAULT NULL,
  `munka_kezd_ido` date DEFAULT '2024-01-01',
  `munka_vegz_ido` date DEFAULT NULL,
  `statusz` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `munkalap_tetels`
--

INSERT INTO `munkalap_tetels` (`feladat_id`, `munkalapszam`, `szerelo`, `leiras`, `alkatresz`, `alk_marka`, `mennyiseg`, `alkatresz_ar`, `alk_rend_ido`, `alk_beerk_ido`, `munka_kezd_ido`, `munka_vegz_ido`, `statusz`, `created_at`, `updated_at`) VALUES
(1, 2, 2, 'Közben a folyosó végén már.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(2, 15, 2, 'Kegyelmes látogatást tettek.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(3, 21, 2, 'Pudingok? - kérdezte kissé.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(3, 22, 2, 'Nézd a hülye, hát nem valami.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(5, 15, 2, 'Fülig Jimmy pillanatnyilag.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(7, 11, 2, 'Ez leleplezi a parton! Vége.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(8, 10, 2, 'Négy óra húsz perckor José.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(12, 3, 2, 'St. Antonio főherceg néven.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(21, 5, 2, 'Viszont az ügyvédnek elmúlt.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(25, 13, 2, 'No mi az, kérem? - mondta.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(27, 17, 2, 'Hová lett a szája. Az a bal.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(27, 23, 2, 'Nem... érti?!... Megőrülök!.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(28, 5, 2, 'Itt a bőrtok, a fésű és a.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(30, 3, 2, 'Igen. Különben hasba szúrom!.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(31, 11, 2, 'Isten áldjon, Helena. - Hová.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(35, 5, 2, 'Fred váratlanul megjelent.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(35, 10, 2, 'Ő könyvelte el, amit Piszkos.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(36, 6, 2, 'Most mentünk a főleg várba.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(38, 1, 2, 'Ki vagy? - Nem hát! Hiába.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(39, 20, 2, 'Az a bal szememen át szúr a.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(41, 17, 2, 'Hohó! Azért, mert magába.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(43, 20, 2, 'Ha az ember innen? - Nem.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(45, 14, 2, 'Gyerünk. Igazatok van! A.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(46, 19, 2, 'Kegyetlen, de bölcs szokás.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(47, 20, 2, 'Jól visszavágtam. Mer ha én.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(52, 6, 2, 'Már maga is megbolondult?.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(52, 10, 2, 'Ott nem is szoruló benyomás.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(52, 19, 2, 'De legcsodálatosabban hatott.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(53, 6, 2, 'Csak gyorsan vízbe vele! Itt.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44'),
(55, 4, 2, 'Engem tőrbe csaltak! Nem.', NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-01', NULL, NULL, '2024-05-02 18:08:44', '2024-05-02 18:08:44');

-- --------------------------------------------------------

--
-- Table structure for table `munka_ars`
--

CREATE TABLE `munka_ars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `megnevezes` varchar(50) NOT NULL,
  `ara` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `munka_ars`
--

INSERT INTO `munka_ars` (`id`, `megnevezes`, `ara`, `created_at`, `updated_at`) VALUES
(2, 'Fékolaj cseréje', 6000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(3, 'Légtömegmérő cseréje', 7000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(4, 'Féktárcsa csere', 10000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(5, 'Futómű beállítás', 8000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(6, 'Kipufogórendszer javítás', 5500, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(7, 'Lökhárító festés', 20000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(8, 'Kerékcsere és kiegyensúlyozás', 4000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(9, 'Fékbetét csere', 8000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(10, 'Féktárcsa és fékbetét csere', 12000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(11, 'Légfilter csere', 3000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(12, 'Üzemanyagszűrő csere', 2500, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(13, 'Szívó és töltőcső cseréje', 6000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(14, 'Hűtőfolyadék cseréje', 4000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(15, 'Fékfolyadék csere', 3500, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(16, 'Vízpumpa cseréje', 7000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(17, 'Hűtőventillátor cseréje', 8000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(18, 'Generátor javítása', 6500, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(19, 'Indítómotor javítása', 7000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(20, 'Fékcső cseréje', 4500, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(21, 'Futómű felfüggesztés javítása', 8500, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(22, 'Kormánymű javítása', 7500, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(23, 'Kuplung és nyomócsapágy cseréje', 11000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(24, 'Szélvédőcsere', 15000, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(25, 'Fékrendszer javítása', 9000, '2024-05-02 18:08:43', '2024-05-02 18:08:43');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `telefon` varchar(15) NOT NULL,
  `cim` varchar(150) NOT NULL,
  `szulido` date DEFAULT '2000-01-01',
  `szerepkor` varchar(15) NOT NULL DEFAULT 'ugyfel',
  `adoazonosito` varchar(15) DEFAULT NULL,
  `adoszam` varchar(15) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `telefon`, `cim`, `szulido`, `szerepkor`, `adoazonosito`, `adoszam`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Szerelo Admin', '06702001234', '1234 Budapest, Vezér út 1.', '1980-01-01', 'vezetoszerelo', '12345678911', NULL, 'vezetoszerelo@aldo.hu', NULL, '$2y$12$M1tQNsjLuNVnLKiiuKses.W.oRg/7aJJR190AcneySOiZ4gGXBEfm', NULL, '2024-05-02 18:08:42', '2024-05-02 18:08:42'),
(2, 'Szerelő János', '06702001135', '1234 Budapest, Szerelők útja 1.', '1980-01-02', 'szerelo', '12345674911', NULL, 'szerelo@aldo.hu', NULL, '$2y$12$YftaQ2H5svmd3es2KXuzxu1Pk4v9umwUWwYIue3knulZ/n9PMIsC2', NULL, '2024-05-02 18:08:42', '2024-05-02 20:01:48'),
(3, 'Felhasználó Béla', '06702001235', '1234 Budapest, Béla utca 1.', '1980-01-02', 'ugyfel', '12345674911', NULL, 'user@gmail.com', NULL, '$2y$12$Ji7fmhvjGqUsOUNwsfOYEuwB8pDUlSHkhbOlstwuRh8/QHVQjY4vS', NULL, '2024-05-02 18:08:43', '2024-05-02 20:46:37'),
(4, 'Céges Elek', '06702001125', '1234 Budapest, Cég útja 1.', '1980-01-02', 'ugyfel', NULL, '1234567491', 'ceges@ceg.hu', NULL, '$2y$12$uVq5Tle0POVrwrQb5XqTbueO8lJ97fPciuU2bktds4edVdV7Xa116', NULL, '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(5, 'Péter-Deák Henrietta', '06-09-096-7554', '8943 Budapest, Takács határsor 5. 19. emelet', '2005-05-16', 'ugyfel', '8285319476', '98285319476', 'panna.horvath@example.com', '2024-05-02 18:08:43', '$2y$12$pM/kAYkGUbCAMibwfndyZueCiWkcTtbXQEc92Yeafn4ZSmqosAHm.', 'VdG4wAOoMm', '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(6, 'Prof. Budainé Aranka', '+36-41-689-8109', '4008 Budapest, Gábor köz 11. 38. ajtó', '2012-01-18', 'ugyfel', '8285319476', '98285319476', 'arpad65@example.net', '2024-05-02 18:08:43', '$2y$12$pM/kAYkGUbCAMibwfndyZueCiWkcTtbXQEc92Yeafn4ZSmqosAHm.', 'tlcP2dCRpe', '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(7, 'Bakos Evelin', '06-39-821-6570', '0603 Budapest, Vince sétány 9.', '1974-07-03', 'ugyfel', '8285319476', '98285319476', 'bogdan.milan@example.net', '2024-05-02 18:08:43', '$2y$12$pM/kAYkGUbCAMibwfndyZueCiWkcTtbXQEc92Yeafn4ZSmqosAHm.', 'octxVbreE5', '2024-05-02 18:08:43', '2024-05-02 18:08:43'),
(8, 'Farkasné László Beatrix', '06-81-061-7268', '5316 Budapest, Lengyel játszótér 98. 10. ajtó', '2006-05-07', 'ugyfel', '8285319476', '98285319476', 'mira.varga@example.org', '2024-05-02 18:08:43', '$2y$12$pM/kAYkGUbCAMibwfndyZueCiWkcTtbXQEc92Yeafn4ZSmqosAHm.', '7fEsm06wty', '2024-05-02 18:08:43', '2024-05-02 18:08:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autos`
--
ALTER TABLE `autos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `autos_alvazszam_unique` (`alvazszam`),
  ADD UNIQUE KEY `autos_motorkod_unique` (`motorkod`),
  ADD UNIQUE KEY `autos_rendszam_unique` (`rendszam`),
  ADD KEY `autos_ugyfel_foreign` (`ugyfel`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `feladats`
--
ALTER TABLE `feladats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `munkalaps`
--
ALTER TABLE `munkalaps`
  ADD PRIMARY KEY (`munkalapszam`),
  ADD KEY `munkalaps_auto_foreign` (`auto`),
  ADD KEY `munkalaps_ugyfel_foreign` (`ugyfel`),
  ADD KEY `munkalaps_munkavezeto_foreign` (`munkavezeto`),
  ADD KEY `munkalaps_uzembentarto_foreign` (`uzembentarto`);

--
-- Indexes for table `munkalap_tetels`
--
ALTER TABLE `munkalap_tetels`
  ADD PRIMARY KEY (`feladat_id`,`munkalapszam`),
  ADD KEY `munkalap_tetels_munkalapszam_foreign` (`munkalapszam`),
  ADD KEY `munkalap_tetels_szerelo_foreign` (`szerelo`);

--
-- Indexes for table `munka_ars`
--
ALTER TABLE `munka_ars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

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
-- AUTO_INCREMENT for table `autos`
--
ALTER TABLE `autos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feladats`
--
ALTER TABLE `feladats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `munkalaps`
--
ALTER TABLE `munkalaps`
  MODIFY `munkalapszam` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `munka_ars`
--
ALTER TABLE `munka_ars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `autos`
--
ALTER TABLE `autos`
  ADD CONSTRAINT `autos_ugyfel_foreign` FOREIGN KEY (`ugyfel`) REFERENCES `users` (`id`);

--
-- Constraints for table `munkalaps`
--
ALTER TABLE `munkalaps`
  ADD CONSTRAINT `munkalaps_auto_foreign` FOREIGN KEY (`auto`) REFERENCES `autos` (`id`),
  ADD CONSTRAINT `munkalaps_munkavezeto_foreign` FOREIGN KEY (`munkavezeto`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `munkalaps_ugyfel_foreign` FOREIGN KEY (`ugyfel`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `munkalaps_uzembentarto_foreign` FOREIGN KEY (`uzembentarto`) REFERENCES `users` (`id`);

--
-- Constraints for table `munkalap_tetels`
--
ALTER TABLE `munkalap_tetels`
  ADD CONSTRAINT `munkalap_tetels_feladat_id_foreign` FOREIGN KEY (`feladat_id`) REFERENCES `feladats` (`id`),
  ADD CONSTRAINT `munkalap_tetels_munkalapszam_foreign` FOREIGN KEY (`munkalapszam`) REFERENCES `munkalaps` (`munkalapszam`),
  ADD CONSTRAINT `munkalap_tetels_szerelo_foreign` FOREIGN KEY (`szerelo`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
