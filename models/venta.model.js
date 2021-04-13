var mongoose=require('mongoose');

let schema=mongoose.Schema({
    //columnas-campos(field)
    //nit
    idcliente:[{type:mongoose.Schema.ObjectId, ref:'persona'}],
    razonsocial:{ type:String, required:[true,"Este campo es necesario"]},
    fecha:{type:String, required:[true,"Este campo es necesario"]},
    idusuario:[{type:mongoose.Schema.ObjectId, ref:'usuario'}],
    detalle:[
    {
        segpubinst:{type:Number},
        segpubcun:{type:Number},
        monto:{type:Number},
        idprograma:[{type:mongoose.Schema.ObjectId, ref:'programa'}]
    }
    ],  
    total:{type:Number},      
    estado:{
        type:Number,
        default:1
    }
},
{
    //nombre de la coleccion(tabla)
    collection:'tbventa',
    //columnas de auditoria
    timestamps: true
}
);
module.exports=mongoose.model('tbventa',schema);
