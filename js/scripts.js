'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// TE-capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

//TE- capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)

// ARRAY PARA AÑADIR LOS SOCIOS
// crear variable de tipo array
var socios = new Array();
// estructuramos el array con la clase Socio
class Socio {
  constructor(id, nombre, apellido) {
  this.id = id; //asigna el valor del parámetro id a la propiedad id del objeto Socio
  this.nombre = nombre;
  this.apellido= apellido;
  }
}
// definimos la función que coge los datos JSON y los devuelve parseados
cargarSociosJSON() ;{
  // declaramos variable para almacenar los datos Json parseados
  //utilizamos la función fetch para enviar una solicitud al servidor que responderá
  //con los datos json que alojaremos en la variable
  const datosSocios = fetch(request).then(response => response.json())
  return datosSocios
}
// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  TE - funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = 'model/datosSocios.json'

  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
    response.json().then(data => {
      console.log('Datos', data)
    })
  })
}


//METODO AÑADIR SOCIOS AL ARRAY CUANDO ARRANCA LA WEB

function aniadirSociosInicialesArray () {
// declaramos variable para almacenar los datos JSON
 const datosSocios = cargarSociosJSON();
//Recorremos el array de datos JSON
 datosSocios.forEach(socio => {
  //creamos un nuevo objeto Socio con los datos del socio
  const nuevoSocio=new Socio(
    socio.id,
    socio.nombre,
    socio.apellido);
  //añadimos el nuevo objeto Socio al final del array socios con el método push()
     arraySocios.push(nuevoSocio);
 })
}


//METODO PARA CAPTURAR LOS DATOS DEL SOCIO DEL FORMULARIO
// los campos de texto son fnombre y fapellido
function capturarDatosSocio () {
  // TODO: recoger los el nombre y apellido del HTML
  // llamada a la función crearSocio pasándole los valores de las cajas de index
  // crea un nuevo objeto Socio con los valores nombre y apellido
  crearSocio(
    document.getElementById("fnombre").value,
    document.getElementById("fapellido").value);
  
 console.log(socios);

}
//METODO PARA CREAR UN SOCIO PASÁNDOLE EL NOMBRE Y APELLIDO Y AÑADIRLO AL ARRAY
//declaramos la función con los dos parámetros
function crearSocio (nombre, apellido) {
//añadimos un nuevo objeto Socio al final del array socios. Creamos el id del objeto 
  socios.push(new Socio(crearID(), nombre, apellido)); 
}

//METODO PARA CREAR EL ID DEL SOCIO EN FUNCIÓN DEL ULTIMO ID DEL ARRAY SOCIOS 

function crearID () {
  // devuelve la longitud del array socios y le suma 1
  return socios.length + 1; 
}

// EJERCICIO 2
/*
//METODO QUE ELIMINA LA LISTA PINTADA PREVIAMENTE EN EL CONTENEDOR ASIGNADO 
  PARA PINTAR SOCIOS, RECORRE EL ARRAY CON UN BUCLE Y PINTA LOS SOCIOS 
*/
function pintarListaSocios () {
  //declaramos la variable que almacena la lista de socios generada
  const listaSociosGenerada = "<ul>";
  //borramos todo lo que hay en el div
  contenedorEscribirSocios.innerHTML = "";
  //bucle para recorrer y pintar el array de socios
  //en cada iteración del bucle se genera una nueva etiqueta <li> con la información del socio
    socios.forEach(socio => {
      function pintarListaSocios () {
        const listaSociosGenerada = "<ul>";
        //TODO: borramos todo lo que hay en el div
        contenedorEscribirSocios.innerHTML = "";
        //el bucle recorre el array
        socios.forEach(socio => {
        // a la variable le añadimos cada socio nuevo con sus propiedades
          listaSociosGenerada += "<li>Socio numero " + socio.id + ": " + socio.nombre + " " + socio.apellido + "</li>";
        });
        //añadimos la etique de cierre </ul> al final de la lista de socios generada
        listaSociosGenerada += "</ul>";
        //añadimos los socios al div
        contenedorEscribirSocios.innerHTML = listaSociosGenerada;
  //reemplazamos el contenido del elemento contenedorEscribirSocios con la lista de socios
  contenedorEscribirSocios.innerHTML = listaSociosGenerada;
        }
      }
  )}
// ------------------- MAIN ------------------------

// añadimos los socios iniciales cuando empieza el programa
aniadirSociosInicialesArray();
//TE-fin de programa
console.log('Acaba el programa')
/* RESULTADO DE LA EJECUCION node .\scripts.js
Empieza el programa
Datos [{"id":1,"nombre":"Iker","apellido":"Arana"},{"id":2,"nombre":"Julia","apellido":"Elorza"},{"id":3,"nombre":"Andoni","apellido":"Irizar"}]
Socio numero 1: Iker Arana
Socio numero 2: Julia Elorza
Socio numero 3: Andoni Irizar
Acaba el programa 
 */
