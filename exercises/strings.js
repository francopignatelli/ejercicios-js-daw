// Ejercicio: Strings

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).
var texto1 = "hola mundo";
var textoMayusculas = texto1.toUpperCase();
console.log("Texto en mayúsculas: " + textoMayusculas);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva
// variable (utilizar substring).
var texto2 = "abcdefghijklm";
var primerosCincoCaracteres = texto2.substring(0, 5);
console.log("Primeros cinco caracteres: " + primerosCincoCaracteres);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).
var texto3 = "abcdefghijklm";
var ultimosTresCaracteres = texto3.substring(texto3.length - 3);
console.log("Últimos tres caracteres: " + ultimosTresCaracteres);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
// el operador +).
var texto4 = "ejercicio";
var primeraLetraMayuscula = texto4.substring(0, 1).toUpperCase() + texto4.substring(1).toLowerCase();
console.log("Primera letra mayúscula: " + primeraLetraMayuscula);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
// blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
// variable (utilizar indexOf).
var texto5 = "hola mundo";
var posicionEspacioBlanco = texto5.indexOf(" ");
console.log("Posición del primer espacio en blanco: " + posicionEspacioBlanco);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +).
var texto6 = "ejercicio practico";
var primerEspacio = texto6.indexOf(" ");
var primeraPalabra = texto6.substring(0, primerEspacio);
var segundaPalabra = texto6.substring(primerEspacio + 1);
var nuevoTexto = primeraPalabra.substring(0, 1).toUpperCase() + primeraPalabra.substring(1).toLowerCase() + " " +
                 segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();
console.log("Nuevo texto: " + nuevoTexto);
