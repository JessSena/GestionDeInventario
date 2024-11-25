const sequelize= require('../config/database');
const ProductModel= require('./product');

const Product= ProductModel(sequelize);

module.exports={
    sequelize,
    Product
};