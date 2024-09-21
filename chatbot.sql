-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2024 at 01:36 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatbot`
--

-- --------------------------------------------------------

--
-- Table structure for table `bot_ques_master`
--

CREATE TABLE `bot_ques_master` (
  `id` int(11) NOT NULL,
  `question_id` varchar(20) NOT NULL,
  `parent_id` varchar(20) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `answer_type` varchar(30) NOT NULL,
  `create_date_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bot_ques_master`
--

INSERT INTO `bot_ques_master` (`id`, `question_id`, `parent_id`, `question`, `answer`, `answer_type`, `create_date_time`) VALUES
(1, 'QWER1', 'QWER1', 'Welcome Message', 'Welcome to Smartping, trusted by over 7000 brands with mulitple solutions that create great customer experience.', 'text', '0000-00-00 00:00:00'),
(2, 'QWER2', 'QWER1', '', 'To assist you accordingly, please let me know if you are:', 'text', '0000-00-00 00:00:00'),
(3, 'QWER3', 'QWER1', '', 'New Customer\nExisting Customer\nDLT Support\nFAQs', 'button', '0000-00-00 00:00:00'),
(4, 'QWER4', 'QWER4', 'New Customer', 'Please select an option to proceed:', '', '0000-00-00 00:00:00'),
(5, 'QWER5', 'QWER4', '', 'Enterprise\nReseller\nGovernment\nChannel Partner', '', '0000-00-00 00:00:00'),
(6, 'QWER6', 'QWER6', 'Enterprise', 'What would you like to do:', '', '0000-00-00 00:00:00'),
(7, 'QWER7', 'QWER6', '', 'Book a product demo\nOthers\nGo Back\nBack to Main Menu', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `new_bot_q_master`
--

CREATE TABLE `new_bot_q_master` (
  `id` int(11) NOT NULL,
  `admin_id` varchar(50) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `bot_id` varchar(50) NOT NULL,
  `business_no` varchar(15) NOT NULL,
  `question_id` varchar(50) NOT NULL,
  `parent_id` varchar(50) NOT NULL,
  `ques_title` varchar(255) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` text NOT NULL,
  `msg_type` varchar(30) NOT NULL,
  `media_url` varchar(255) NOT NULL,
  `created_date` varchar(50) NOT NULL,
  `created_time` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `new_bot_q_master`
--

INSERT INTO `new_bot_q_master` (`id`, `admin_id`, `created_by`, `bot_id`, `business_no`, `question_id`, `parent_id`, `ques_title`, `question`, `answer`, `msg_type`, `media_url`, `created_date`, `created_time`, `status`) VALUES
(68, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '240907155315b1q1', 'Wel_101', 'WELCOME', 'HII', 'Welcome to Manthon\ntype 1 for bulk sms\ntype 2 for voice sms\ntype 3 for obd call\n', 'textsms', '', '2024-09-07', '15:53:15', '1'),
(69, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '240907155400mLTi', '240907155315b1q1', 'a', '1', '\ntype 1 for bulk trans sms', 'textsms', '', '2024-09-07', '15:54:00', '1'),
(70, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '240907155431iqrL', '240907155315b1q1', 'b', '2', '\ntype 1 for bulk trans voice\ntype 2 for pro voice', 'textsms', '', '2024-09-07', '15:54:31', '1'),
(71, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '2409071555035kCL', '240907155315b1q1', 'c', '3', '\ntype 1 for bulk trans obd\ntype 2 for pro obd', 'textsms', '', '2024-09-07', '15:55:03', '1'),
(72, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '240907155557B2jo', '240907155400mLTi', 'a.1', '1', 'Thank you for your bulk trans sms', 'textsms', '', '2024-09-07', '15:55:57', '1'),
(73, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '240907155649L254', '240907155431iqrL', 'b.1', '1', 'type 1 for bulk trans send voice\ntype 2 for pro send voice pdf', 'textsms', '', '2024-09-07', '15:56:49', '1'),
(74, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '240907155713JlMK', '240907155431iqrL', 'b.2', '2', 'Thank you for your voice sms', 'textsms', '', '2024-09-07', '15:57:13', '1'),
(75, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '2409071558157PuX', '2409071555035kCL', 'c.1', '1', 'type 1 for bulk trans send pro voice', 'textsms', '', '2024-09-07', '15:58:15', '1'),
(76, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '240907155846hwt4', '2409071555035kCL', 'c.2', '2', 'Thank you for your pro obd', 'textsms', '', '2024-09-07', '15:58:46', '1'),
(77, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '24090717314986UH', '240907155557B2jo', 'a.1.1', '1', 'Type 1 for more details', 'textsms', '', '2024-09-07', '17:31:49', '1'),
(78, 'manthanadmin', 'user_id', '240902174957cLNI', '8888881111', '240907175509pbHV', '240907155557B2jo', 'aa', '2', 'type 2 for exit your loop', 'textsms', '', '2024-09-07', '17:55:09', '1'),
(79, 'manthanadmin', 'mayankmotors', '240909165044UOTQ', '74221', '240913103315H9HL', 'Wel_101', 'Welcome Message', 'Hi', 'Welcome to Manthan It Solutions\nType 1 For Bulk sms\nType 2 For OBD call\nType 3 For voice process', 'textsms', '', '2024-09-13', '10:33:15', '1'),
(80, 'manthanadmin', 'mayankmotors', '240909165044UOTQ', '74221', '240913103707mTEq', '240913103315H9HL', 'Bulk SMS', '1', 'Thankyou For contacting us', 'pdf', 'botUploads\\1726204027097-23868824-Solved RPF 5 Jan 2019 Paper with Solutions.pdf', '2024-09-13', '10:37:07', '1'),
(81, 'manthanadmin', 'mayankmotors', '240909165044UOTQ', '74221', '240913104602vn8i', '240913103315H9HL', 'OBD Call', '2', 'Type 1 for  pro OBD Call\nType 2 for Trans OBD Call', 'textsms', '', '2024-09-13', '10:46:02', '1'),
(82, 'manthanadmin', 'mayankmotors', '240909165044UOTQ', '74221', '2409131058490VQI', '240913104602vn8i', 'OBD call ans ', '1', 'This is Pro OBD call guidance Image ', 'media', 'botUploads\\1726205329532-651731589-pexels-pixabay-60597.jpg', '2024-09-13', '10:58:49', '1'),
(83, 'manthanadmin', 'mayankmotors', '240909165044UOTQ', '74221', '240913121439MAyK', '240913104602vn8i', 'Obd Trans call', '2', 'This is OBD Trans Call PDF', 'pdf', 'botUploads\\1726209879857-284458351-Admin Dashboard.pdf', '2024-09-13', '12:14:39', '1'),
(84, 'manthanadmin', 'mayankmotors', '240909165044UOTQ', '74221', '240913141610458V', '240913103315H9HL', 'Voice process', '3', 'This is a sample audio.Type 1 for video', 'media', 'botUploads\\1726217170504-889606369-sample-9s.mp3', '2024-09-13', '14:16:10', '1'),
(85, 'manthanadmin', 'mayankmotors', '240909165044UOTQ', '74221', '240913142637Elsq', '240913141610458V', 'Voice process video', '1', 'Here is your sample Video.\nThankyou for contacting Us.', 'media', 'botUploads\\1726217797778-925432236-big_buck_bunny_720p_2mb.mp4', '2024-09-13', '14:26:37', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bot_ques_master`
--
ALTER TABLE `bot_ques_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_bot_q_master`
--
ALTER TABLE `new_bot_q_master`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bot_ques_master`
--
ALTER TABLE `bot_ques_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `new_bot_q_master`
--
ALTER TABLE `new_bot_q_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
