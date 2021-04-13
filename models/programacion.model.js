var mongoose=require('mongoose');
let schema=mongoose.Schema({
    //columnas-campos(field)
    dia:{
        type:String,
        required:[true,"Este campo es necesario"]},
    estado:{
        type:Number,
        default:1},
    idprograma:[{type:mongoose.Schema.ObjectId,
        ref:'programa'}],
    idusuario:[{type:mongoose.Schema.ObjectId,
        ref:'usuario'}],

},
{
    //nombre de la coleccion(tabla)
    collection:'tbprogramacion',
    //columnas de auditoria
    timestamps: true
}
);
module.exports=mongoose.model('tbprogramacion',schema);