var Empleado= require("../models/empleado.model");
var Cargo= require("../models/cargo.model");
var bcrypt=require('bcrypt');
//var Roles= require("./models/roles.model");

let rol1=new Cargo({nombre:'Gerente',estado:1});
rol1.save();
let rol2=new Cargo({nombre:'Periodista',estado:1});
rol2.save();
let rol3=new Cargo({nombre:'Locutor',estado:1});
rol3.save();

let p=new Empleado({
    nombre:'pancho',
    login:'pancho',
    cedula:'123123',
    cargo:rol1._id,
    appaterno:'pancho',
    apmaterno:'pancho',
    password:bcrypt.hashSync('pancho',10),
});
p.save();

/*calculo
    2*5+2= x
resultado del sistema
    x
resultado esperado
    15
match
    x==15
*/