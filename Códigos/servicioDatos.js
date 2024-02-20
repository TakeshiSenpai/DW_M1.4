let finDeTransmisionDeDatos = function(id){
    console.log('Transferencia', id, 'terminada');
    return Promise.resolve(); 
}

let obtenDatosDeInternet = function (id, duracion) {
    console.log('Proceso', id, 'obteniendo datos de internet');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(finDeTransmisionDeDatos(id)); 
        }, duracion);
    });
}

module.exports.getDatos = obtenDatosDeInternet;
