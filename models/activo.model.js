var mongoose=require('mongoose');
let schema=mongoose.Schema({
    //columnas-campos(field)
    codigo:{
        type:String,
        required:[true,"Este campo es necesario"]},
    objeto:{
        type:String,
        required:[true,"Este campo es necesario"]},
    descripsion:{
        type:String,
        required:[true,"Este campo es necesario"]},
    observaciones:{
        type:String,
        required:[true,"Este campo es necesario"]},
    condicion:{
        type:String,
        //required:[true,"Este campo es necesario"]
    },
    estado:{
        type:Number,
        default:1},
     idusuario:{type:mongoose.Schema.ObjectId,
        ref:'usuario'}
},
{
    //nombre de la coleccion(tabla)
    collection:'tbactivo',
    //columnas de auditoria
    timestamps: true
}
);
module.exports=mongoose.model('tbactivo',schema);