# NodeJs Mysql CRUD Assignment

## Overview

A simple Node.js application showcasing basic CRUD operations with a MySQL database for user registration:

-   **Create Database:** Creates or verifies the existence of the `RegistrationDb` database.

-   **Create Table:** Defines the `Register` table with fields (`ID`, `Name`, `Email`, `DateOfBirth`) and validation constraints.

-   **Insert Data:** Adds sample user records to the `Register` table.

-   **Read Data:** Displays all records in a tabular format using `console.table`.

-   **Delete Data:** Removes a specific record from the `Register` table.

## Setup

Make sure you have the following installed on your local machine:

-   Node.js: [Download and Install Node.js](https://nodejs.org/)
-   MySQL: [Download and Install MySQL](https://dev.mysql.com/downloads/)

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Soham56/In18-Labs-Pvt-Assignment.git
cd /In18-Labs-Pvt-Assignment
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root directory and add the following environment variables:

```env
MYSQL_HOSTNAME=your_mysql_hostname
MYSQL_USERNAME=your_mysql_username
MYSQL_PASSWORD=your_mysql_password
```

Replace `your_mysql_hostname`, `your_mysql_username`, and `your_mysql_password` with your MySQL database credentials.

## Run the Application

```bash
node app.js
```

This will create the database, table, insert sample data, perform read and delete operations, and display the results in the console.
