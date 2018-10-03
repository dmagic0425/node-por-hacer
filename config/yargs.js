const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea',
    type: 'boolean'
};

const filtar = {
    alias: 'f',
    desc: 'Filtra las tareas con un determinado estatus',
    type: 'boolean'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea por hacer', { descripcion, completado })
    .command('listar', 'Lista los datos por esatus', { filtar })
    .command('borrar', 'Borra un registro de una tarea especifica', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
};