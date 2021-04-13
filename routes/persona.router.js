var express = require('express');
var router = express.Router();
var jwt=require('jsonwebtoken');
var pers=require('../controllers/persona.controller');
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
  router.get('/lista/:token',isAuthenticated, pers.lista);
  router.post('/insertar', pers.insertar);
  router.delete('/borrar/:id', pers.borrar);
  router.put('/editar/:id',pers.editar);
  router.get('/:id', pers.getitem);
  router.get('/busqueda/:busqueda',pers.buscar );
//router.delete('/borrar/:id', cp.borrar);

module.exports = router;