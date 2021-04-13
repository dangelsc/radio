var cone=require('../config/conexionMongobd');
var mongoose=require('mongoose');
let schema=mongoose.Schema({
    //columnas-campos(field)
    
    nombre:{
            type:String,
            required:[true,"Este campo es necesario"]},
    estado:{
            type:Number,
            default:1},
},
{
    //nombre de la coleccion(tabla)
    collection:'tbcargo',
    //columnas de auditoria
    timestamps: true
}
);
module.exports=mongoose.model('tbcargo',schema);
