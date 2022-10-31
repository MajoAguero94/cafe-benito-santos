import { Router} from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controller";

//instanciar el router

const router = Router();
//app.get("/", (req, res)=>{
  //  res.send("hola desde el backend en la peticion get")

//})


router.route("/productos").get(listarProductos).post(crearProducto).delete();


export default router