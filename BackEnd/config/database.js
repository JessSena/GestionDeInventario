const {Sequelize}= require ('sequelize');
const { options } = require('../routes/productRoutes');

const sequelize= new Sequelize(process.env.DB_NAME, null,null,{
    host: process.env.DB_HOST,
    dialect:'mssql',
    dialectOptions:{
        options:{
            trustServerCertificate:true
        }
    },
});

module.exports = sequelize;