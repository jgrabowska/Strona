-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 29 Cze 2022, 17:47
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `magazyn`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `stn`
--

CREATE TABLE `stn` (
  `id` int(11) NOT NULL,
  `ST` int(11) NOT NULL,
  `Nazwa` text COLLATE utf8_polish_ci NOT NULL,
  `Nr_seryjny` text COLLATE utf8_polish_ci NOT NULL,
  `Osoba_poz` text COLLATE utf8_polish_ci NOT NULL,
  `Wydano` date NOT NULL,
  `Do_zwrotu` date NOT NULL,
  `Notatki` text COLLATE utf8_polish_ci NOT NULL,
  `Konserwacja` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `stn`
--

INSERT INTO `stn` (`id`, `ST`, `Nazwa`, `Nr_seryjny`, `Osoba_poz`, `Wydano`, `Do_zwrotu`, `Notatki`, `Konserwacja`) VALUES
(5, 2022060001, 'Laptop Dell Vostro 5490', '21JDSAO', 'Zbigniew Kowalski', '2022-06-01', '2022-06-08', 'Brak uwag', '2022-05-01'),
(6, 2022050003, 'Laptop Lenovo ThinkPad T430', '218JAS0923', 'Halina Fąfara', '2022-05-24', '2022-05-26', 'Zarysowany ekran przed wydaniem', '2022-05-26'),
(7, 2021110020, 'Smartfon Apple iPhone 13', 'JAS0923', 'Halina Fąfara', '2022-05-24', '2022-05-26', 'Problem z baterią', '2022-04-03'),
(8, 202001011, 'Laptop Dell Vostro 5502', '18WFW213', 'Franciszek Maj', '2022-03-01', '2022-03-06', 'Brak uwag', '2022-03-31'),
(9, 2021120103, 'Laptop Dell Latitude E5250', '789WQ45SD', 'Sylwester Fąfara', '2022-02-01', '2022-02-28', 'Wydany razem z myszką', '2021-12-31'),
(11, 2020020001, 'Laptop Dell Latitude 3350', '09ASD2RQ', 'Anna Pierzchała', '2022-05-16', '2022-05-26', 'Zarysowany ekran przed wydaniem', '2022-05-26'),
(12, 2022010005, 'Laptop Lenovo ThinkPad X260', '9084SAD721', 'Aleksandra Strzałkowska', '2022-01-16', '2022-02-01', 'Brak uwag', '2022-02-01'),
(13, 2022050003, 'Laptop Lenovo ThinkPad X230', '248DFU24821F', '', '0000-00-00', '0000-00-00', 'Na magazynie', '2022-04-01');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `stn`
--
ALTER TABLE `stn`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `stn`
--
ALTER TABLE `stn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
