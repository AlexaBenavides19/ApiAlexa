const { response } = require('express');
const Proveedor = require('../models/proveedor'); // Cambiar el nombre del modelo si es diferente

const getProveedor = async (req, res = response) => {
    let mensaje = '';
    try {
        const proveedores = await Proveedor.find()
        mensaje = proveedores.mensaje
    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje
    })
}

const postProveedor = async (req, res = response) => {
    const body = req.query;
    let mensaje = '';
    const proveedor = new Proveedor(body); // Cambiar el nombre del modelo si es diferente
    try {
        await proveedor.save();
        mensaje = 'Proveedor registrado';
    } catch (error) {
        mensaje = 'Error';
    }
    res.json({
        mensaje
    });
};

const putProveedor = async (req, res = response) => {
    const body = req.query;
    let mensaje = '';
    try {
        await Proveedor.findOneAndUpdate({ Nombreproveedor: body.Nombreproveedor, Telefono: body.Telefono, Correo: body.Correo, Direccion: body.Direccion, Tipodeproducto: body.Tipodeproducto, descripcionproveedor: body.descripcionproveedor });
        mensaje = 'Proveedor Actualizado';
    } catch (error) {
        mensaje = 'Error';
    }
    res.json({
        mensaje
    });
};

const deleteProveedor = async (req, res = response) => {
    const body = req.query;
    let mensaje = '';
    try {
        await Proveedor.findOneAndUpdate({ Nombreproveedor: body.Nombreproveedor, Telefono: body.Telefono, Correo: body.Correo, Direccion: body.Direccion, Tipodeproducto: body.Tipodeproducto, descripcionproveedor: body.descripcionproveedor });
        mensaje = 'Proveedor Borrado';
    } catch (error) {
        mensaje = 'Error';
    }
    res.json({
        mensaje
    });
};

module.exports = {
    getProveedor,
    postProveedor,
    putProveedor,
    deleteProveedor
};
