export const listarProductos = (req, res)=>{
    res.send("hola desde el backend en la peticion get")

};

export const crearProducto = (req, res)=>{

    console.log(req.body)
    //validar el objeto recibido

    //guardar en la bas de datos
    res.send("aqui se tendria que crear un producto")

};