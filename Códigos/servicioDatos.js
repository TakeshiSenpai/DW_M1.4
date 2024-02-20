let finDeTransmisionDeDatos = function(id){
    console.log('Transferencia', id, 'terminada');
    return Promise.resolve(); // Resolvemos la Promise una vez que se ha completado la transferencia
}

let obtenDatosDeInternet = function (id, duracion) {
    console.log('Proceso', id, 'obteniendo datos de internet');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(finDeTransmisionDeDatos(id)); // Resolvemos la Promise una vez que se ha completado la transferencia
        }, duracion);
    });
}

module.exports.getDatos = obtenDatosDeInternet;
