# dbproject
DBMS extra credit. Instead of using the traditional mySQL / PHP Approach, I decided to use mySQL, React, Node, and Express.

The react project will run fine, but the data will not show because the database is ran locally. In order for this to work on your machine you must download phpmyadmin, install all the modules in the project (run "npm install"), and create a new DB on your local machine.

Once you have installed phpmyadmin (xampp) and created a new db, edit the information in the routes.js file (API folder) to connect to your db. Upon successful connection, you can run all the routes to create and insert data for the tables.

Once the tables are completed, run "npm start" and "node routes.js" to run the react project as well as the server which connects to the mysql DB. Now, you should be able to see the data in the react project.
