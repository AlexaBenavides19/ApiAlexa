const express=require('express');

const dbConnection=require('../database/config')


class server{
    constructor(){
        this.app=express();
        this.port= process.env.PORT || 8087
        this.productoPath='/api/producto'
        this.proveedorPhat='/api/proveedor' 
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    middlewares() //Directorio Publico
    {
        this.app.use(express.static(__dirname + "/public"));
    }
    routes()
    {
        this.app.use(this.productoPath, require('../routes/producto'))
        this.app.use(this.productoPath, require('../routes/proveedor'))
    }
    async dbConectar(){
        await dbConnection()
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}
module.exports= server