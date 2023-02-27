-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema PocketPay
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `PocketPay`;
USE `PocketPay` ;

-- -----------------------------------------------------
-- Table `PocketPay`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PocketPay`.`user` (
  `id` INT NOT NULL,
  `first_name` VARCHAR(45) DEFAULT NULL,
  `last_name` VARCHAR(45) DEFAULT NULL,
  `date_of_birth` DATE DEFAULT NULL,
  `mobile_number` VARCHAR(50) DEFAULT NULL,
  `email` VARCHAR(150) DEFAULT NULL,
  `password` VARCHAR(200) DEFAULT NULL,
  `created_at` DATE DEFAULT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `PocketPay`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PocketPay`.`address` (
  `id` INT NOT NULL,
  `address_line` VARCHAR(300) DEFAULT NULL,
  `city` VARCHAR(45) DEFAULT NULL,
  `postal_code` VARCHAR(45) DEFAULT NULL,
  `created_at` DATE DEFAULT NULL,
  PRIMARY KEY (`id`));
-- -----------------------------------------------------
-- Table `PocketPay`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PocketPay`.`account` (
  `id` VARCHAR(45) NOT NULL,
  `account_number` VARCHAR(45) DEFAULT NULL,
  `account_type` VARCHAR(45) DEFAULT NULL,
  `ifsc_number` VARCHAR(45) DEFAULT NULL,
  `balance` FLOAT DEFAULT NULL,
  `created_at` DATE DEFAULT NULL,
  PRIMARY KEY (`id`));
-- -----------------------------------------------------
-- Table `PocketPay`.`business_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PocketPay`.`business_details` (
  `id`INT NOT NULL,
  `registration_number` VARCHAR(45) DEFAULT NULL,
  `name` VARCHAR(45) DEFAULT NULL,
  `role` VARCHAR(45) DEFAULT NULL,
  `created_at` DATE DEFAULT NULL,
  PRIMARY KEY (`id`));
-- -----------------------------------------------------
-- Table `PocketPay`.`transaction_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PocketPay`.`transaction_details` (
  `id` INT NOT NULL,
  `sender_amount` FLOAT DEFAULT NULL,
  `received_amount` FLOAT DEFAULT NULL,
  `guranteed_amount` FLOAT DEFAULT NULL,
  `transfer_fee` FLOAT DEFAULT NULL,
  `total_fee` FLOAT DEFAULT NULL,
  `status` INT DEFAULT NULL,
  `created_at` DATE DEFAULT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO `PocketPay`.`user` (`id`,  `first_name`, `last_name`, `date_of_birth`, `mobile_number`, `email`, `password`, `created_at`) VALUES (1,'Ross','Gerner','1998-02-19','+44 020 7947 6330', 'ross.gener@gmail.com', 'Ross@123', '2023-01-30 10:10:10');

INSERT INTO `PocketPay`.`address` (`id`,  `address_line`, `city`, `postal_code`, `created_at`) VALUES (500, '43 Bishopthorpe Road','Pencoed','CF35 7RJ','2023-01-30 10:10:10');

INSERT INTO `PocketPay`.`account` (`id`,  `account_number`, `account_type`, `ifsc_number`, `balance`, `created_at`) VALUES (1000, '123456885865', 'Checking','ABFJ12929G',100000, '2023-01-30 10:10:10');

INSERT INTO `PocketPay`.`business_details` (`id`,  `registration_number`, `name`, `role`, `created_at`) VALUES (2000, '2020ZEN5367GJ', 'Zentech Solutions Pvt Ltd', 'Director', '2023-01-30 10:10:10');

INSERT INTO `PocketPay`.`transaction_details` (`id`,  `sender_amount`,`received_amount`, `guranteed_amount`, `transfer_fee`, `total_fee`, `status`, `created_at`) VALUES ( 3000, 100, 113.98, 1.20048, 3.69, 996.31, 1, '2023-01-30 10:10:10');
