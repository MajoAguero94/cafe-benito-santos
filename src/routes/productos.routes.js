import { Router} from "express";
import { borrarProducto, crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controller";

//instanciar el router

const router = Router();
//app.get("/", (req, res)=>{
  //  res.send("hola desde el backend en la peticion get")

//})


router.route("/productos").get(listarProductos).post(crearProducto).delete();
router.route("/productos/:id").get(obtenerProducto).put(editarProducto).delete(borrarProducto)

export default router