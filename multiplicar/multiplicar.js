//requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    
    console.log('=================='.green);
    console.log(`===TABLA DEL ${base}====`.green);
    console.log('=================='.green);

    for(let i = 1; i <= limite; i++){
        let resultado = i * base;

        console.log(`${base} x ${i} = ${resultado}\n`.yellow);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise( (resolve, reject) => {

        if( !Number(base) ){
            reject(`El valor introducido ${base}, no es un numero`.red);
            return
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            let resultado = i * base;

            data += `${base} x ${i} = ${resultado}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) 
                reject(err);
            else    
                resolve(`tabla-${base}-al-${limite}.txt`)
    
            
        });

    });
}

module.exports = {
    listarTabla,
    crearArchivo
}
