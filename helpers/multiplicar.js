const fs = require('fs');
require('colors');
const crearArchivo=async(base=5, listar=false, hasta=10)=>{
    try {
        console.clear();
        let salida, consola=''; 
        for(let i = 1; i<=hasta;i++){
            salida+=`${base} X ${i} = ${base*i}\n`;
            consola+=`${base} ${'X'.green} ${i} ${'= '.green}${base*i}\n`;
        }
        if(listar){
            console.log("==============".green);
            console.log("Tabla del:", base);
            console.log("==============".green);
            console.log(consola); 
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }    
}

/*
este codigo nos permite trabajar de forma global y 
su sintxis es la siguiente:
*/

module.exports={
    /*
    esto esta apuntando a crearArchivo esta llamando
    a crearArchivo
    funcion:crearArchivo
    */
    crearArchivo
}