const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('DataBase/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar ', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DataBase/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardaDB();

    return porHacer
}

const getListado = (completado) => {
    cargarDB();

    if (completado === true) {
        let NuevoListado = listadoPorHacer.filter(tarea => tarea.completado === completado);
        return NuevoListado;
    } else if (completado === false) {
        let NuevoListado = listadoPorHacer.filter(tarea => tarea.completado === completado);
        return NuevoListado;
    } else {
        return listadoPorHacer;
    }
}


const actualiza = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();

        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let listaNueva = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === listaNueva.length) {
        return false;
    } else {
        listadoPorHacer = listaNueva;
        guardaDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualiza,
    borrar
}