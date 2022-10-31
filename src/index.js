import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
//llamar a la conexion de la base de datos
import "./databas";
//crear una instancia de express
const app = express();
//configurar un puerto
app.set("port", process.env.PORT || 4000)
app.listen( app.get("port"), ()=>{
    console.log("estoy en el puerto "+ app.get("port") );
})
//middlewares: son funciones q se ejecutan antes de llegr a las rutas
app.use (cors());//permite peticiones remotas

//permite recibir y usar objetos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//inforacion extra
app.use(morgan("dev"))
//cargar un archivo estatico
app.use(express.static(path.join(__dirname,"../public")))


//rutas
app.get("/", (req, res)=>{
    res.send("hola desde el backend en la peticion get")

})

