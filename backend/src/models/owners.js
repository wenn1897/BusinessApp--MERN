const mongoose = require('mongoose');
const {Schema} = mongoose;

const OwnerSchema = new Schema({
    id_business:{type:Number, require:true},
    documento: {type: String, required:true},
    id: {type: Number, required: true},
    nombre: {type:String, required:true},
    correo:{type:String, required:true}
    });

module.exports = mongoose.model('Owner', OwnerSchema);