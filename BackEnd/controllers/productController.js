const Product = require('../models/product');

//Crear un nuevo producto
exports.createProduct= async (req,res) =>{
    try{
        const product= await Product.create(req.body);
        res.status(201).json(product);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

//Obtener todos los productos
exports.getProducts= async(req, res)=>{
    try{
        const products= await Product.findAll();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//Obtener un producto
exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params; 
        const product = await Product.findOne({ where: { id: id } }); 

        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" }); 
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};
//Actualizar un producto
exports.updateProduct= async (req,res) =>{
    try{
        const product = await Product.findByPk(req.params.id);
        if(!product){
            return res.status(404).json({message: 'Producto no encontrado'});
        }
        await product.update(req.body);
        res.status(200).json(product);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

//Eliminar un producto
exports.deleteProduct= async (req,res) =>{
    try{
        const product = await Product.findByPk(req.params.id);
        if(!product){
            return res.status(404).json({message: 'Producto no encontrado'});
        }
        await product.destroy();
        res.status(204).send();
    }catch(error){
        res.status(500).json({error: error.message});
    }
};