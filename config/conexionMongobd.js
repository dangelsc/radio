
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbhit', 
{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conexion","Exitosa!!!!!!");
});



module.exports = mongoose;