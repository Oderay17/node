/*const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

const tabla = 7;
crearArchivo(tabla)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));
//.catch(err => console.log(err));*/
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')

/*.option('b',{
alias: 'base',
type: 'number',
demandOption: true 
})
.check((argv, options)=>{
   if(isNaN(argv.b)){
      throw 'La base tiene que ser un numero'
   }
   return true;
})
.argv;
*/
console.clear();
console.log(argv);

crearArchivo(argv.b)
   .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
   .catch(err => console.log(err));


   //const [,, arg3 = 'base = 5'] = process.argv;
   //const [, base = 5] = arg3.split('=');

   /*crearArchivo(base)
   .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
   .catch(err => console.log(err));*/