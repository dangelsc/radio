var express = require('express');
var router = express.Router();
var jwt=require('jsonwebtoken');
var usuu=require('../controllers/usuario.controller');
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
  router.get('/lista/:token',isAuthenticated, usuu.lista);
  router.post('/insertar', usuu.insertar);
  router.delete('/borrar/:id', usuu.borrar);
  router.put('/editar/:id',usuu.editar);
  router.get('/:id', usuu.getitem);
//router.delete('/borrar/:id', cp.borrar);

module.exports = router;