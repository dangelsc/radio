var express = require('express');
var router = express.Router();
var jwt=require('jsonwebtoken');
var plani=require('../controllers/planificacion.controller');
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
  router.get('/lista/:token',isAuthenticated, plani.lista);
  router.post('/insertar', plani.insertar);
  router.delete('/borrar/:id', plani.borrar);
  router.put('/editar/:id',plani.editar);
  router.get('/:id', plani.getitem);

//router.delete('/borrar/:id', cp.borrar);

module.exports = router;