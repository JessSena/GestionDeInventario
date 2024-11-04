const {DataTypes} = require ('sequalize');
const sequalize= require('../config/database');

const Product= sequalize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull:false,
    },
});

module.exports = Product;