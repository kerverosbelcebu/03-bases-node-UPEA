/**
 * importamos o llamos la funcion para crear
 * archivos, ver documentacion
 */
const fs= require('fs');

// aplicamos desestructuracion

const{crearArchivo}=require('./helpers/multiplicar');

const argv=require('./config/yargs');
const color = require('colors');//importamos colores
console.clear();

// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.b);
//const base=6;
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo=>console.log(
        nombreArchivo.rainbow, 'creado'))
    .catch(err=>console.log(err));



// fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
//     if(err) throw err;
//     console.log(`tabla-${base}.txt creado`);
// })
