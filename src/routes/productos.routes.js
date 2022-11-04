import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controller";
import { check } from "express-validator";
//instanciar el router

const router = Router();
//app.get("/", (req, res)=>{
//  res.send("hola desde el backend en la peticion get")

//})

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto", "El nombre del producto es obligatorio")
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage("El producto debe tener entre 2 y 50 caracteres"),
      check("precio", "El precio del producto es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("El precio debe ser numerico")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error(
              "El precio debe ser mayor a 1 y menor o igual a 10000"
            );
          }
        }),
      check("imagen", "La url es obligatoria")
        .notEmpty()
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("Debe enviar una URL valida"),
      check("categoria", "La categoria es obligatoria")
        .notEmpty()
        .isIn(["Bebida-caliente", "Bebida-fria", "Dulce", "Salado"])
        .withMessage("La categoria debe ser valida"),
    ],
    crearProducto
  )
  .delete();
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(
    [
      check("nombreProducto", "El nombre del producto es obligatorio")
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage("El producto debe tener entre 2 y 50 caracteres"),
      check("precio", "El precio del producto es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("El precio debe ser numerico")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error(
              "El precio debe ser mayor a 1 y menor o igual a 10000"
            );
          }
        }),
      check("imagen", "La url es obligatoria")
        .notEmpty()
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("Debe enviar una URL valida"),
      check("categoria", "La categoria es obligatoria")
        .notEmpty()
        .isIn(["Bebida-caliente", "Bebida-fria", "Dulce", "Salado"])
        .withMessage("La categoria debe ser valida"),
    ],
    editarProducto
  )
  .delete(borrarProducto);

export default router;
