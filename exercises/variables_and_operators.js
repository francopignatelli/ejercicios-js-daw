// Ejercicio: Variables y Operadores

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor
// de la suma de ambos números en una 3er variable.
var numero1 = 5;
var numero2 = 7;
var suma = numero1 + numero2;
console.log("La suma de " + numero1 + " y " + numero2 + " es igual a: " + suma);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una
// 3er variable.
var string1 = "Hola";
var string2 = " mundo";
var concatenacion = string1 + string2;
console.log("La concatenación de '" + string1 + "' y '" + string2 + "' es igual a: '" + concatenacion + "'");

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de
// letras del string) guardando el resultado de la suma en una 3er variable (utilizar
// length).
var palabra1 = "JavaScript";
var palabra2 = "ECMAScript";
var longitudTotal = palabra1.length + palabra2.length;
console.log("La longitud total de '" + palabra1 + "' y '" + palabra2 + "' es igual a: " + longitudTotal);