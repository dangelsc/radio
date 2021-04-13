var Activo=require('../models/activo.model');
module.exports={
    lista:function(req,res){
        console.log("*********");
        console.log(req.user);
        console.log("usuario login",req.user._id);
        
        Activo.find({estado:1},function(err,query){
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
        var x=req.body.objeto;
        let q=x.substr(0,1)
        req.body.codigo="HIT-"+q+'-2021';
        let acti=new Activo(req.body);
        acti.save((err,dato)=>{
            
            if(err){
                return res.status(500).json({estado:0,msg:'Tiene error algo que no sabemos'});
            }else
            {
                return res.status(200).json({estado:1,dato:dato});
            }
        });
    },
    editar:function(req,res){
        var x=req.body.objeto;
        let q=x.substr(0,1)
        req.body.codigo="HIT-"+q+'-2021';
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

    getitem:function(req,res){
        Activo.findOne({estado:1, _id:req.params.id},(err,dato)=>{
            if(err)
                return res.json({bien:0, msg:"Se tiene algunos problemas", errors:err});
            else{
                return res.json({bien:1, datos:dato, token:dato._id, msg:"Recuperado ok!!"});
            }
        })
    },

};
