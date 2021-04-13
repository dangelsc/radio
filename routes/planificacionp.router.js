var express = require('express');
var router = express.Router();
var jwt=require('jsonwebtoken');
var planip=require('../controllers/planificacionp.controller');
/* GET home page. */
var isAuthenticated = function (req, res, next) {
  
  jwt.verify(req.params.token, 'shhhhh', 
  function(err, decoded) {
   
     if(err)
     return res.status(200).json({estado:0,error:err}); 
    else if(decoded.user)
    {
      req.user=decoded.user;
      next();
    }else
      return res.status(200).json({estado:0}); 
    //console.log(decoded.foo) // bar
  });
    
  //next();
   
  }
  router.get('/lista/:token',isAuthenticated, planip.lista);
  router.post('/insertar', planip.insertar);
  router.delete('/borrar/:id', planip.borrar);
  router.put('/editar/:id',planip.editar);
  router.get('/:id', planip.getitem);

//router.delete('/borrar/:id', cp.borrar);

module.exports = router;