var Empleado=require('../models/empleado.model');
module.exports={
    lista:function(req,res){
    Empleado.find({estado:1/*,rol:"empleado"*/},function(err,query){
            if(err)
                res.json({
                    bien:0,
                    msg:"Se tiene algunos problemas",
                    errors:err}
                );
            else
                res.json({bien:1,datos:query});
        })
    },
    insertar:function(req,res){
        //req.body.rol='empleado';
        let emple=new Empleado(req.body);
        
        emple.save((err,dato)=>{
            if(err){
                return res.status(500).json({estado:0,msg:'Tiene error algo que no sabemos'});
            }else
            {
                return res.status(200).json({estado:1,dato:dato});
            }
        });
    },
    
    editar:function(req,res){
        Activo.findByIdAndUpdate(req.params.id,req.body,(err,dato)=>{
        if(err){
            return res.json({bien:0, msg:"Se tiene algunos problemas",errors:err});
        }else
        {
            return res.status(200).json({estado:1,dato:dato});
        }
    });
    },
    borrar:function(req,res,next){
        Activo.findByIdAndUpdate(req.params.id,
                {estado:0},(err,dato)=>{
            if(err)
                return res.json({bien:0, msg:"Se tiene algunos problemas", errors:err});
            else{
                return res.json({bien:1, datos:dato, token:dato._id});
            }
        })
    },
    
};