const express = require('express');
const router = express.Router();

const Product = require('../models/products');

router.get('/', async (req,res)=>{
    const products= await Product.find();
    console.log(products);
    res.json(products);
})

router.post('/', async (req,res) => {
    const {id_business,id,nombre,cantidad,valor} = req.body;
    const product = new Product({
        id_business:id_business,
        id:id,
        nombre:nombre,
        cantidad:cantidad,
        valor:valor
    });
    await product.save();
    res.json({status: 'Product add sucessfull'});
});

router.delete('/:id', async (req,res) =>{
    await Product.findByIdAndDelete(req.params.id);
    res.json({status: 'Producto eliminado'});
});

module.exports = router;