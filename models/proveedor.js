const { Schema, model } = require('mongoose');

const ProveedorSchema = Schema({
   
    Nombreproveedor: {
        type: String,
        required: [true, 'el nombre del proveedor es obligatorio']
    },
    Telefono: {
        type: Number,
        required: [true, 'El telefono es obligatorio obligatorio']
    },
    Correo: {
        type: String,
        required: [true, 'El correo es obligatoria obligatorio']
    },
    Direccion: {
        type: String,
        required: [true, 'La Direccion es obligatoria obligatoria']
    },
    Tipodeproducto: {
        type: String,
        enum: ['Shampoos', 'Acondicionador','Gominas','Geles'],
        required: [true, 'El tipo de producto es obligatorio']
    },
    descripcionproveedor: {
        type: String,
        required: [true, 'la descripcion del producto es obligatorio']
    },
});

module.exports = model('Proveedor', ProveedorSchema);
