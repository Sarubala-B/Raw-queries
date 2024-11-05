const  {Sequelize}  = require('sequelize');

// Create a new Sequelize instance with MariaDB connection details
const sequelize = new Sequelize('db4', 'root', 'Sarubala', {
  host: 'localhost',
  dialect: 'mariadb',
  
});

module.exports = sequelize;

