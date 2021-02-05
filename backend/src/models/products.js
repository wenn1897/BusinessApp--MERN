const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    id_business: {type: Number, required:true},
    id: {type: Number, required: true},
    nombre: {type:String, required:true},
    cantidad:{type:Number, required:true},
    valor:{type:Number, required:true}
    });

module.exports = mongoose.model('Product', ProductSchema);