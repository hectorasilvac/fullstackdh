let notas = [1,2,3,4,5];

//hacer una operacion por cada uno de los elementos del array
let notasHasta300 = notas.map(function(numero){
    return numero * 20;
});
//map me devuelve un nuevo array donde cada valor fue multiplicado * 0
//console.log(notasHasta100);
let url = ["Lorena", "Pamela"];
let urlCompleto = url.map(function(valor)
{
    return "http:// " + valor;
});
//console.log(urlCompleto);

//Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce directamente en las pantallas del 
//aeropuerto y, a modo de travesura, queremos atrasar una hora cada partida. Nuestro trabajo será utilizar el método map para poder 
//lograrlo y almacenar la lista en una variable nueva llamada horariosAtrasados.

let horariosPartida = [12, 14, 18, 21];
let horariosAtrasado = horariosPartida.map(function(horario){
    return horario - 1;
});
//console.log(horariosAtrasado);


//------------------------------------------------------------------------------------------------------------------------------------
//sber notas aprobadas >=7
let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;
});
//console.log(notasAprobadas);
let  notasDesaprobadas = notas.filter(function(numero){
    return numero < 7;
});
console.log(notasDesaprobadas);

let edades = [22,8,5,6,5];
let mayoresDeEdad = edades.filter(function(edad){
    return edad >= 18;
});
//console.log(mayoresDeEdad);

//Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un 
//recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. 
//Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
console.log(estudiantes[estudiantes.length-1]);
let aprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado == true;
});
//console.log(aprobados);
let desaprobados = estudiantes.filter(estudiante => estudiante.aprobado == false);
//console.log(desaprobados);
//---------------------------------------------------------------------------------------------------------------------------------


//suma de todas las notas
let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero;
});
//console.log(sumaNotas);
let multiplicacion = notas.reduce(function(estado, valor){
    return estado * valor;
});
//console.log(multiplicacion);



//Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.
//Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
let vueltas = [5, 8, 12, 3, 22];
let totalVueltas = vueltas.reduce(function(estado, valor){
    return estado + valor;
});
//console.log(totalVueltas);

//---------------------------------------------------------------------------------------------------------------------------------
//realizar una operacion por cada elemeto del array
notas.forEach(function(valor, indice){
    //console.log(indice);
    //console.log(valor);
    //console.log("En la posicion " + indice + " tengo el valor " + valor)
});
notas.forEach(function(valor){
    //console.log(valor);
});

url.forEach(function(valor){
    let nuevoArray = [ ];
    //console.table("http//:" + valor);
});

//Para este ejercicio tenemos el array listaDeSupermercado. Nuestro trabajo será mostrar cada ítem de esa lista por consola 
//utilizando un foreach.
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach(function(item){
    //console.log(item);
});

let numeros = [-1, -9, -4, 0, 1, 3, 5, 7, 10 ,11];
let numerosPositivos = numeros.filter( numero => numero > 0);




