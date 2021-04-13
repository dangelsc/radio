var mongoose=require('mongoose');
let schema=mongoose.Schema({
    //columnas-campos(field)
    nombre:{
        type:String,
        required:[true,"Este campo es necesario"]},
    appaterno:{
        type:String,
        required:[true,"Este campo es necesario"]},
    apmaterno:{
        type:String,
        required:[true,"Este campo es necesario"]},
    ci:{
        type:String,
        required:[true,"Este campo es necesario"]},
    nit:{
        type:String,
        required:[true,"Este campo es necesario"]},
    
    telefono:{
        type:String},
    direccion:{
        type:String,
        required:[true,"Este campo es necesario"]},
    estado:{
        type:Number,
        default:1},
    cargo:{
            type:String,
            required:[true,"Este campo es necesario"]},
    login:{
            type:String,
            required:[true,"Este campo es necesario"]
        },
    password:{type:String,
            required:[true,"Este campo es necesario"]},
},
{
    //nombre de la coleccion(tabla)
    collection:'tbpersona',
    //columnas de auditoria
    timestamps: true
}
);
module.exports=mongoose.model('tbpersona',schema);