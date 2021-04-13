var mongoose=require('mongoose');
let schema=mongoose.Schema({
    //columnas-campos(field)
    date:{
        type:String,
        required:[true,"Este campo es necesario"]},
    tema1:{
        type:String,
        required:[true,"Este campo es necesario"]},
    puntos1:{
        type:String,
        required:[true,"Este campo es necesario"]},
    tema2:{
        type:String},
    puntos2:{
        type:String},
    tema3:{
        type:String},
    puntos3:{
        type:String},
    estado:{
        type:Number,
        default:1},
    idprograma:{type:mongoose.Schema.ObjectId,
        ref:'programa'},
    idplanificacion:{type:mongoose.Schema.ObjectId,
        ref:'planificacion'},
     idusuario:{type:mongoose.Schema.ObjectId,
        ref:'usuario'}
},

{
    //nombre de la coleccion(tabla)
    collection:'tbplanificacionp',
    //columnas de auditoria
    timestamps: true
}
);
module.exports=mongoose.model('tbplanificacionp',schema);