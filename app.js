var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const fileUpload = require('express-fileupload');
var session=require('express-session')


var app = express();
console.log("Iniciando!!!!!!!!!!!!!!!!!!!!!");




app.use(fileUpload());

const cors = require('cors');
var corsOptions = {
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
//app.use(morgan('dev'));
app.use(cors(corsOptions));


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbhit');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  //cout<<"bien"
  console.log("conexion exitosa");
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'asdasdasdas',
  resave:false,
  saveUninitialized:true,
   //cookie:{secure:true}}
  })
  );

// Configuring Passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
var User=require('./models/user.model');



app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
// passport/login.js
passport.use('login', new LocalStrategy({
  passReqToCallback : true,
    usernameField: 'login',
    passwordField: 'password'
  
},
function(req, username, password, done) { 
  // check in mongo if a user with username exists or not
  User.findOne({ 'login' :  username }, 
    function(err, user) {
      // In case of any error, return using the done method
      if (err)
        return done(err);
      // Username does not exist, log error & redirect back
      //Recuperando el usuario
      console.log("usuarioooo",user);
      if (!user){
        console.log('User Not Found with username '+username);
        return done(null, false);
              //req.flash('message', 'User Not found.'));                 
      }
      // User exists but wrong password, log the error 
      if (password!=user.password)//!isValidPassword(user, password)){
      { console.log('Invalid Password');
        return done(null, false); 
        //return done(null, false); 
           // req.flash('message', 'Invalid Password'));
      }
      // User and password both match, return user from 
      // done method which will be treated like success
      console.log("siii", user);
      return done(null, user);
    }
  );
}));





app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});


app.use((req,res,next)=>{
  console.log("usuario conectado",req.user)
  res.locals.user=req.user; next()})
//esers
app.use('/', indexRouter);
app.use('/users', usersRouter);
//Activo
var acti=require('./routes/activo.router');
app.use('/activo', acti);
//Programa
var proga=require('./routes/programa.router');
app.use('/programa', proga);
//Empleado
var emple=require('./routes/empleado.router');
app.use('/empleado', emple);
//Programacion
var progam=require('./routes/programacion.router');
app.use('/programacion', progam);
//Planificacion
var plan=require('./routes/planificacion.router');
app.use('/planificacion', plan);
//Usuario
var usss=require('./routes/usuario.router');
app.use('/usuario', usss);
//cliente
var per=require('./routes/persona.router');
app.use('/cliente', per);
//cliente
var plap=require('./routes/planificacionp.router');
app.use('/planificacionp', plap);

//Venta
var vent=require('./routes/venta.router');
app.use('/venta', vent)

/*

*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
