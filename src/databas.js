import mongoose from "mongoose";
//localhost es igual 127.0.0.1
const url = "mongodb://localhost:27017/cafe-benito-santos"
mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("bd conectada")
})