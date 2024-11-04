const sequalize= require('../config/database');
const ProductModel= require('./product');

const Product= ProductModel(sequalize);

module.exports={
    sequalize,
    Product
};