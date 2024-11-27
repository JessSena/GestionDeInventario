# GestionDeInventario

**Alumnos: Jessica Sena y Federico Urich**

**Materia: Arquitectura Web**

**Profesor: Fernando Corinaldesi**

**Descripción del Proyecto**
La Empresa X es una compañía mediana dedicada a la fabricación y distribución de productos electrónicos. Con el fin de optimizar sus procesos internos, se ha decidido modernizar su infraestructura tecnológica mediante el desarrollo de diversas aplicaciones y servicios. Este proyecto corresponde a la Aplicación de Gestión de Inventarios, que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos de la empresa.

El objetivo de este proyecto es crear una API RESTful en Node.js y Express, y un Frontend de una sola página (SPA) utilizando Vue.js. Además, la aplicación está integrada con una base de datos Microsoft SQL Server para la persistencia de los datos.

**Tecnologías**
Backend: Node.js, Express
Frontend: Vue.js
Base de Datos: Microsoft SQL Server

**Funcionalidades**
La aplicación de gestión de inventarios incluye las siguientes funcionalidades esenciales:

Alta, baja y modificación de productos.
Registro de entrada y salida de productos.

**Estructura del Proyecto**
El proyecto está dividido en dos partes:

Backend (API): Gestionado con Node.js y Express, proporcionando endpoints para realizar operaciones sobre los productos.
Frontend (SPA): Una aplicación Vue.js que interactúa con la API para presentar y manipular los datos en una interfaz gráfica.

**Instalación**
Requisitos
Node.js 
Microsoft SQL Server y una base de datos configurada para el proyecto.
Vue.js 
Backend

*Clonar el repositorio:*
git clone https://github.com/JessSena/GestionDeInventario.git 

*Instalar las dependencias:*
cd backend
npm install

*Configurar las variables de entorno en el archivo database.js*

*Ejecutar el servidor*
npm run dev (ya que se ha usado nodemon)
Esto iniciará el servidor en http://localhost:5000.

Frontend
*Entrar en la carpeta del frontend:*
cd frontend

*Instala las dependencias:*
npm install

*Inicia la aplicación Vue.js:*
npm run 
Esto abrirá la aplicación en http://localhost:8080.

**Rutas de la API**
*Endpoint de productos*

POST /api/products: Crear un producto
GET /api/products: Obtener todos los productos
PUT /api/products/:id: Actualizar un producto
DELETE /api/products/:id: Eliminar un producto

*Ejemplos de Solicitudes HTTP*
1. Crear un Producto (POST)
POST http://localhost:5000/api/products
Body (JSON):

{
  "name": "Smartphone X1",
  "category": "Teléfonos",
  "quantity": 150,
  "price": 599.99
}

2. Obtener Todos los Productos (GET)
GET http://localhost:5000/api/products

3. Actualizar un Producto (PUT)
PUT http://localhost:5000/api/products/1
Body (JSON):
{
  "name": "Smartphone X2",
  "category": "Teléfonos",
  "quantity": 120,
  "price": 649.99
}

4. Eliminar un Producto (DELETE)
DELETE http://localhost:5000/api/products/1

**Base de Datos**
*Estructura de la tabla Products*

CREATE TABLE Product (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    price FLOAT NOT NULL
);

*Insertar Productos Iniciales*

INSERT INTO Product (name, category, quantity, price)
VALUES 
    ('Smartphone X1', 'Teléfonos', 150, 599.99),
    ('Laptop Pro 15', 'Computadoras', 75, 1299.99),
    ('Auriculares Bluetooth', 'Accesorios', 300, 79.99),
    ('Teclado Mecánico', 'Accesorios', 200, 129.99),
    ('Monitor 24" UHD', 'Monitores', 50, 349.99),
    ('Mouse Inalámbrico', 'Accesorios', 500, 39.99),
    ('Tablet 10"', 'Tabletas', 120, 249.99),
    ('Cargador Rápido USB-C', 'Accesorios', 350, 19.99),
    ('SSD 1TB', 'Almacenamiento', 80, 149.99),
    ('Cámara Web HD', 'Accesorios', 100, 59.99);

**Conclusión**
Con esta API y la SPA de frontend, la aplicación de Gestión de inventarios está lista para permitir una administración eficiente de los productos dentro de la empresa, con la capacidad de realizar operaciones CRUD sobre los productos, además de integrarse con otros servicios como el de gestión de usuarios para validar el acceso.