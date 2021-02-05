const mongoose = require('mongoose');
const {Schema} = mongoose;

const BusineSchema = new Schema({
    id: {type: Number, required: true},
    nombre: {type:String, required:true},
    direccion:{type:String, required:true},
    categoria: {type:String, required:true},
    fechaCrea:{type:Date, require:false, default: Date.now}
});

module.exports = mongoose.model('Busine', BusineSchema);