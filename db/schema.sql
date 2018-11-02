-- Deleting the database if it exists
DROP DATABASE IF EXISTS icecream_db;

-- Creating the new database
CREATE DATABASE icecream_db;

-- Telling MySQL to use the icecream_db
USE icecream_db;

-- Creating a table in the icecream_db
CREATE TABLE icecream (
    id INT NOT NULL AUTO_INCREMENT,
    icecream_name VARCHAR(300) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);