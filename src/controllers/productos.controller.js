import { validationResult } from "express-validator";
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
    //manejar los errores de la validacion
    const errors = validationResult(req);
    //console.log(errors.isEmpty() dvuelve errores
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      })
    }
   //console.log(req.body);
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


export const editarProducto = async (req,res)=>{
  try {
 //manejar los errores de la validacion
 const errors = validationResult(req);
 //console.log(errors.isEmpty() dvuelve errores
 if(!errors.isEmpty()){
   return res.status(400).json({
     errors: errors.array()
   })
 }

    //obtener el parametro (req.params.id)
    //obtener los datos del body validados (req.body)
    //guardar o actualizar l producto en una base de datos
await Producto.findByIdAndUpdate(req.params.id, req.body);
res.status(200).json({
  mensaje: 'El producto fue editado correctamente'
})
  } catch (error) {
    console.log(error)
    res.status(400).json({
      mensaje: 'Error al intentar editar un producto'
    })
  }
}
export const borrarProducto = async (req,res)=>{
  try {
    //obtener el parametro (req.params.id)
   
    //borrar el producto en una base de datos
await Producto.findByIdAndDelete(req.params.id);
res.status(200).json({
  mensaje: 'El producto fue eliminado correctamente'
})
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje: 'Error al intentar borrar un producto'
    })
  }
}