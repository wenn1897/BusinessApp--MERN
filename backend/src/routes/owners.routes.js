const express = require('express');
const router = express.Router();

const Owner = require('../models/owners');

router.get('/', async (req,res)=>{
    const owner= await Owner.find();
    console.log(owner);
    res.json(owner);
})

router.post('/', async (req,res) => {
    const {id_business,documento,id,nombre,correo} = req.body;
    const owner = new Owner({
        id_business:id_business,
        documento: documento,
        id:id,
        nombre:nombre,
        correo:correo
    });
    await owner.save();
    res.json({status: 'Owner add sucessfull'});
});

router.delete('/:id', async (req,res) =>{
    await Owner.findByIdAndDelete(req.params.id);
    res.json({status: 'Encargado eliminado'});
});

module.exports = router;