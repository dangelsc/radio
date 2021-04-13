var mongoose=require('mongoose');
let schema=mongoose.Schema({
    //columnas-campos(field)
    date:{
        type:String,
        required:[true,"Este campo es necesario"]},
    entrevistado:{
        type:String},
    descripcionevento:{
        type:String,
        required:[true,"Este campo es necesario"]},
    canalprincipal:{
        type:String,
        required:[true,"Este campo es necesario"]},
    estado:{
        type:Number,
        default:1},
    idprograma:{type:mongoose.Schema.ObjectId,
        ref:'programa'},
     idusuario:{type:mongoose.Schema.ObjectId,
        ref:'usuario'}
},

{
    //nombre de la coleccion(tabla)
    collection:'tbplanificacion',
    //columnas de auditoria
    timestamps: true
}
);
module.exports=mongoose.model('tbplanificacion',schema);