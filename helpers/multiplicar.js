const fs = require("fs");
var colors = require("colors");

const crearArchivo = async (base, listar, hasta) => {
  try {
    let salida,
      consola = ``;
    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${"x".blue} ${i} = ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("====================");
      console.log(`Tabla del ${base}`.rainbow);
      console.log("====================");
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return await `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
