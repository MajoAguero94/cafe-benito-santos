import mongoose from "mongoose";
//localhost es igual 127.0.0.1
// const url = "mongodb://localhost:27017/cafe-benito-santos" esta es la direccion local
const url = "mongodb+srv://MajoAguero94:Maria22@cluster0.7wx6cid.mongodb.net/cafe_benito_santos"
mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("bd conectada")
})