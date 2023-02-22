const fs =  require('fs');

const crearArchivo = async( base=5, l, h ) => {

  try{

    let salida = '';

    salida += '==================\n';
    salida += ` TABLA DEL ${base} \n`;
    salida += '==================\n';
  
  
    const numeros = Array.from( {length: h}, (_, i) => i+1 );
  
    numeros.forEach( n => {
      salida += `${base} * ${n} = ${base*n}\n`
    } );
  
    l ? console.log(salida) : '';
  
    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
    return `tabla-${base}`;

  }catch (err) {
    throw err;
  }

};

module.exports = {
  crearArchivo
}
