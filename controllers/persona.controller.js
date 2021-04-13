var Persona=require('../models/persona.model');
module.exports={
    lista:function(req,res){
        Persona.find({estado:1},function(err,query){
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
        let pers=new Persona(req.body);
        pers.save((err,dato)=>{
            if(err){
                return res.status(500).json({estado:0,msg:'Tiene error algo que no sabemos'});
            }else
            {
                return res.status(200).json({estado:1,dato:dato});
            }
        });
    },
    editar:function(req,res){
        Persona.findByIdAndUpdate(req.params.id,req.body,(err,dato)=>{
        if(err){
            return res.json({bien:0, msg:"Se tiene algunos problemas",errors:err});
        }else
        {
            return res.status(200).json({estado:1,dato:dato});
        }
    });
    },
    borrar:function(req,res,next){
        Persona.findByIdAndUpdate(req.params.id,
                {estado:0},(err,dato)=>{
            if(err)
                return res.json({bien:0, msg:"Se tiene algunos problemas", errors:err});
            else{
                return res.json({bien:1, datos:dato, token:dato._id});
            }
        })
    },

    getitem:function(req,res){
        Persona.findOne({estado:1, _id:req.params.id},(err,dato)=>{
            if(err)
                return res.json({bien:0, msg:"Se tiene algunos problemas", errors:err});
            else{
                return res.json({bien:1, datos:dato, token:dato._id, msg:"Recuperado ok!!"});
            }
        })
    },
    buscar:function(req,res,next){
        Persona.find({estado:1,nit:{$regex: req.params.busqueda}},(err,dato)=>{
            if(err)
                return res.status(400)
                .json({datos:[],bien:0,msg:'paso algo con el server'+err});
            if(!dato)
                return res.status(400)
                .json({datos:[],bien:0,msg:'no se nada'});
            return res.status(200)
                .json({datos:dato,bien:1, token:dato._id, msg:"Recuperado ok!!"});   
        });
     
    }

};
