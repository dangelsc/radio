var mongoose=require('mongoose');
let schema=mongoose.Schema({
    //columnas-campos(field)
    nombreprograma:{
        type:String,
        required:[true,"Este campo es necesario"]},
    genero:{
        type:String,
        required:[true,"Este campo es necesario"]},
    horainicio:{
        type:String,
        required:[true,"Este campo es necesario"]},
    horafin:{
        type:String,
        required:[true,"Este campo es necesario"]},
    estado:{
        type:Number,
        default:1},
    idusuario:{type:mongoose.Schema.ObjectId,
        ref:'usuario'}
},
{
    //nombre de la coleccion(tabla)
    collection:'tbprograma',
    //columnas de auditoria
    timestamps: true
}
);
module.exports=mongoose.model('tbprograma',schema);
