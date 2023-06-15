const Sequelize = require('sequelize');

const sequelize = require('../database');

const Product = sequelize.define('product', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true 
    },
    price: Sequelize.INTEGER,
    name:Sequelize.STRING
});

module.exports = Product;