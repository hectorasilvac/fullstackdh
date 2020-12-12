const fs = require('fs');

let tareas = fs.readFileSync('./tareas.json');
tareas = JSON.parse(tareas);

const tareasPendientes = tareas.filter(tarea => tarea.estado == 'en progreso');

let input = process.argv[2];

switch(input) {
    case 'listar':
        tareasPendientes.forEach(tarea => console.table(tarea.titulo));
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción');
        break;
    default:
        console.log('No entiendo qué quieres hacer.');
}

function filtrarPorEstado() {

}

function leerPorEstado(estado) {
    
}
