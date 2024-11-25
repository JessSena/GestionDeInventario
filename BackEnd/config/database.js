const {Sequelize}= require ('sequelize');

const sequelize = new Sequelize('GestionInventario', 'miusuario', 'miclave', {
    host: 'localhost', 
    dialect: 'mssql',
    dialectOptions: {
      trustServerCertificate: true, 
    },
  });

module.exports = sequelize;