//Spread Operator: permite expandir cada uno de los datos de un elemento iterable dentro de otro elemento
let peliculasDeAccion = ["End Game", "Iron man III", "Capitán América"];
let peliculasComedia = ["Mi pobre Angelito", "Que pasó ayer"];

let peliculas = [...peliculasDeAccion, ...peliculasComedia];

//console.log(peliculas);

let generoComedias = {
    nombreGenero: "comedia",
    popularidad: 3
}

let miPobreAngelito = {
    nombre: "Mi pobre Angelito",
    duracion: 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre: "Que pasó ayer",
    duracion: 110,
    ...generoComedias
}

//console.log(miPobreAngelito);
//console.log(quePasoAyer);

let notas = [9.3, 6,10,20];
//console.log(Math.max(...notas));

//-------------------------------------------------------------------------
//El parámetro rest se escribe de la misma manera que el operador spread, pero se utiliza
//durante la definición de la función, y no durante su ejecución
function peliculasVistas(...nombresDePeliculas){
    //console.log(nombresDePeliculas);
    for(let i=0; i<nombresDePeliculas.length; i++){
        //console.log("La persona ya vio " + nombresDePeliculas[i]);
    }
}

peliculasVistas("Hola", "End Game", "Betty","Mi pobre Angelito");

function miFuncion(param1, param2, ...otros){
   // console.log(otros);
}
miFuncion("a", "b", "c", "d", "e", "f");

//Podemos definir una función que acepté cualquier número de argumentos
function sumar(...numeros){//el parámetro rest captura todos los argumentos restantes, simpre debe ser el último parámetro de la función
    return numeros.reduce((acum,num) => acum += num);
};
console.log(sumar(1,4,5,6,9,2));


