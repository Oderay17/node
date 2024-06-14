const fs = require('fs');

const crearArchivo = async(tabla = 7) => {        
        
console.log(`:::::::::::::::::::::::::::::`);
console.log(`      Tabla del:7   `);
console.log(`:::::::::::::::::::::::::::::`);
 
let salida = '';
            for (let i = 1; i <= 10; i++){
                salida += `${tabla} x ${i} = ${tabla * i}\n`;
            }

            console.log(salida);

             fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);
             
                //return `tabla-${tabla}.txt`;
                console.log`tabla-${tabla}.txt`;

            
           

             }


             
    module.exports = {
        crearArchivo
    }

    