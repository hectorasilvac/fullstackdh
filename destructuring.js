let cursos = ["Programación", "MKT", "UX", "Data Science", "UI"];

//Destructuracion de array
let [programacion, , ux] = cursos;
//console.log(cursos);
//console.log(programacion);
//console.log(ux);

//---------------------------------------------------------------------------------------------------------------------------------------
let persona = {
    nombre: "Carli",
    edad: 26,
    domicilio: "Calle Falsa 123"
}

//Destruturacion de objeto literal
//let {nombre, domicilio} = persona;
let {nombre, edad: age} = persona; //cambiarle el nombre a la variable.
//console.log(persona);
console.log(nombre);
console.log(age);
