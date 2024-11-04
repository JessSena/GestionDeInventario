require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequalize= require('./config/database');
const productRoutes= require('./routes/productRoutes');

const app= express();

//Middleware
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/products', productRoutes);

//Sincronizar la BBDD
sequalize.sync()
    .then(()=>console.log('Base de datos sincronizada'))
    .catch(err => console.log('Error al sincronizar la base de datos:',err));

//Iniciar el servidor
const PORT= process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log('Servidor corriendo en el puerto ${PORT}');
});