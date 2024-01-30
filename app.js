// requiring dotenv for enabling environment variables
require("dotenv").config();

// mysql package
const mysql = require("mysql2/promise");

const startApplication = async () => {
    // providing mysql credentials
    const mysqlDb = await mysql.createConnection({
        host: process.env.MYSQL_HOSTNAME,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
    });

    //Connecting to the database
    await mysqlDb.connect();

    // Droping database if it already exists (fresh start)
    await mysqlDb.query("DROP DATABASE IF EXISTS RegistrationDb");
    // Creating the database
    await mysqlDb.query("CREATE DATABASE RegistrationDb");
    // Go to the perticular database
    await mysqlDb.query("USE RegistrationDb");
    // Droping the table if it already exists (fresh table creation)
    await mysqlDb.query("DROP TABLE IF EXISTS Register");

    // Create Operation (creating the database with given fields)
    await mysqlDb.query(
        "CREATE TABLE Register (\
            ID INT PRIMARY KEY AUTO_INCREMENT,\
            Name VARCHAR(255) NOT NULL,\
            Email VARCHAR(255) NOT NULL,\
            DateOfBirth DATE,\
            CONSTRAINT Invalid_Email CHECK (Email REGEXP '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,4}$'),\
            CONSTRAINT Invalid_Name CHECK (Name REGEXP '^[A-Za-z ]+$'))"
    );

    // Insert Operation
    await mysqlDb.query(
        "INSERT INTO Register (Name, Email, DateOfBirth) VALUES\
        ('John Doe', 'john.doe@example.com', '1990-05-15'),\
        ('Jane Smith', 'jane.smith@example.com', '1985-08-20'),\
        ('Bob Johnson', 'bob.johnson@example.com', '1978-12-10'),\
        ('Alice Williams', 'alice.williams@example.com', '1995-03-25'),\
        ('Charlie Brown', 'charlie.brown@example.com', '1980-06-30')\
        "
    );

    // Read Operation
    let [readData] = await mysqlDb.query("SELECT * FROM Register");
    console.table(readData);

    // Delete Operation
    await mysqlDb.query("DELETE FROM Register WHERE ID = 1");

    // Reading Data after deletion on row with ID = 1
    let [afterDeleteData] = await mysqlDb.query("SELECT * FROM Register");
    console.table(afterDeleteData);
};

// Starting the application
startApplication();
