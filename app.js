const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
var colors = require("colors");

console.clear();

crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo.green, "creado".green))
  .catch((err) => console.log(err));
