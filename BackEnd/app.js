require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize= require('./config/database');
const productRoutes= require('./routes/productRoutes');

const app= express();

//Middleware
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/products', productRoutes);

//Sincronizar la BBDD
sequelize.authenticate()
    .then(()=>console.log('Conexion establecida con exito'))
    .catch(err => console.log('Error al conectar a la base de datos:',err));

sequelize.sync()
    .then(()=>console.log('Base de datos sincronizada'))
    .catch(err => console.log('Error al sincronizar la base de datos:',err));

//Iniciar el servidor
const PORT= process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});