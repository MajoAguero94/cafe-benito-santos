import Producto from "../models/producto";

export const listarProductos =async (req, res) => {
  try {
    //Buscar productos
const productos = await Producto.find()

    //Devolver al frontend el arreglo de productos
    res.status(200).json(productos);
  } catch (error) {
  console.log(error)
  //enviar respuesta al frontend
  res.status(404).json({
    mensaje: "Ocurrio un error"
  })
  }
};

export const obtenerProducto =async (req, res) => {
  try {
    //obtener el parametro
console.log(req.params.id)
    //buscar en la base de datos el objeto o el producto que coincide con el parametro
    const productoBuscado = await Producto.findById(req.params.id)
    
    //responder al frontend
   res.status(200).json(productoBuscado);
  } catch (error) {
  console.log(error)
  //enviar respuesta al frontend
  res.status(404).json({
    mensaje: "Ocurrio un error al buscar un producto"
  })
  }
};

export const crearProducto = async (req, res) => {
  try {
    console.log(req.body);
    //validar el objeto recibido
    // creo el objeto con mongoose
    const productoNuevo = new Producto(req.body);
    //guardar en la base de datos
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "EL PRODUCTO FUE CREADO CORRECTAMENTE",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar agregar un nuevo producto",
    });
  }
};
