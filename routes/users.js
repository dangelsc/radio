var express = require('express');
var router = express.Router();
var passport=require('passport');
var User=require('../models/empleado.model');
var jwt=require('jsonwebtoken');
var bcrypt=require('bcrypt');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', 
function(req,res){

  User.findOne({ 'login' :  req.body.login }, 
    function(err, user) {
      // In case of any error, return using the done method
      if (err)
        res.redirect('/login');
      // Username does not exist, log error & redirect back
      //Recuperando el usuario
      console.log("usuarioooo",user);
      if (!user){
        console.log('User Not Found with username '+user);
        //return done(null, false);
        res.redirect('/login');
              //req.flash('message', 'User Not found.'));                 
      }
      // User exists but wrong password, log the error 
      if (!bcrypt.compareSync(req.body.password,user.password))//!isValidPassword(user, password)){
      { console.log('Invalid Password');
        //return done(null, false); 
        res.redirect('/login');
        //return done(null, false); 
           // req.flash('message', 'Invalid Password'));
      }
      // User and password both match, return user from 
      // done method which will be treated like success
      console.log("siii", user);
      var token = jwt.sign({ user: user }, 'shhhhh');
  console.log("tokenn",token)
  return res.status(200).json({
    estado:1,
    token:token,
  });
  //    return res.redirect('/menu');
      //return done(null, user);
    }
  );
}
/*passport.authenticate('login', {
  successRedirect: '/users/gettoken',
  failureRedirect: '/users/salir'
  
})*/);
router.get('/signout', function(req, res) {
  req.logout();
  res.redirect('/');
});
router.get('/gettoken',function(req,res){
  
  console.log(req.user)
  var token = jwt.sign({ foo: 'bar',id:'tonto el que se logueo' }, 'shhhhh');
  console.log("tokenn",token)
  res.status(200).json({
    estado:1,
    token:token
  });
})
router.get('/salir',function(req,res){
  
  var token = jwt.sign({ foo: 'bar',id:'tonto el que se logueo' }, 'shhhhh');
  res.status(200).json({
    estado:0
    });
})
module.exports = router;

