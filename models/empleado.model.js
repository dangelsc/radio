var cone=require('../config/conexionMongobd');
var mongoose=require('mongoose');
let schema=mongoose.Schema({
    //columnas-campos(field)
    cedula:{
        type:String,
        required:[true,"Este campo es necesario"]},
    descripsion:{
        type:String,
    },
    estado:{
        type:Number,
        default:1},
    nombre:{
            type:String,
            required:[true,"Este campo es necesario"]},
    appaterno:{
            type:String,
            required:[true,"Este campo es necesario"]},
    apmaterno:{
            type:String,

    },
    telefono:{
            type:String},
    direccion:{
            type:String,
    },
    estado:{
            type:Number,
            default:1},
    cargo:{
            type:mongoose.Schema.ObjectId,
            ref:'tbcargo'},
    login:{
                type:String,
                required:[true,"Este campo es necesario"]
            },
    password:{type:String,
                required:[true,"Este campo es necesario"]},
},
{
    //nombre de la coleccion(tabla)
    collection:'tbempleado',
    //columnas de auditoria
    timestamps: true
}
);
module.exports=mongoose.model('tbempleado',schema);
