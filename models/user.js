const sequelize = require ('../config/database');
const { DataTypes } = require('sequelize');

// Define the User model
const User = sequelize.define('User', {
  // Define columns for the table
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  agess:{
    type:DataTypes.INTEGER,
    allowNull:true,
  },
});


module.exports = User;