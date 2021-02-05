const express = require('express');
const router = express.Router();

const Busine = require('../models/business');

router.get('/', async (req,res)=>{
    const busine= await Busine.find();
    console.log(busine);
    res.json(busine);
})

router.post('/', async (req,res) => {
    const {id,nombre,direccion,categoria,fechaCrea} = req.body;
    const busine = new Busine({
        id:id,
        nombre:nombre,
        direccion:direccion,
        categoria:categoria,
        fechaCrea: fechaCrea
    });
    await busine.save();
    res.json({status: 'Business add sucessfull'});
});

router.delete('/:id', async (req,res) =>{
    await Busine.findByIdAndDelete(req.params.id);
    res.json({status: 'Negocio eliminado'});
});

module.exports = router;