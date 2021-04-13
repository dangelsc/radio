var mongoose=require('mongoose');
let schema=mongoose.Schema({
    //columnas-campos(field)
    codigousuario:{
        type:String,
        required:[true,"Este campo es necesario"]},
    nombre:{
        type:String,
        required:[true,"Este campo es necesario"]},
    appaterno:{
        type:String,
        required:[true,"Este campo es necesario"]},
    apmaterno:{
        type:String},
    telefono:{
        type:String},
    direccion:{
        type:String,
        required:[true,"Este campo es necesario"]},
    cedula:{
        type:String,
        required:[true,"Este campo es necesario"]},
    cargo:{
        type:String,
        required:[true,"Este campo es necesario"]},
    login:{
        type:String,
        required:[true,"Este campo es necesario"]
    },
    password:{type:String,
        required:[true,"Este campo es necesario"]},
    estado:{
        type:Number,
        default:1
    },
},
{
    //nombre de la coleccion(tabla)
    collection:'tbuser',
    //columnas de auditoria
    timestamps: true
}
);
module.exports=mongoose.model('tbuser',schema);