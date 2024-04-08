/*
Cree una función JS que acepte 4 argumentos.
Suma los dos primeros argumentos,
luego los dos segundos y
multiplícalos.
Si el número creado es mayor que 50, la consola registra
"¡El número es mayor que 50!".
Si es más pequeño, la consola registra 
"¡El número es menor que 50!"
*/

let operations_one = function (a, b, c, d) {
  return (a+b);
};
console.log ( operations_one(1, 2, 3, 4) );
  if (operations_one > 50) {
  console.log('¡El número es mayor que 50!');
  } else {
    console.log('¡El número es menor que 50!');
}

let operations_two = function (a, b, c, d) {
  return (c+d);
};
console.log ( operations_two(1, 2, 3, 4) );
  if (operations_two > 50) {
  console.log('¡El número es mayor que 50!');
  } else {
    console.log('¡El número es menor que 50!');
}

let operations_three = function (a, b, c, d) {
  return (a+b)*(c+d);
};
console.log ( operations_three(1, 2, 3, 4) );
  if (operations_three > 50) {
  console.log('¡El número es mayor que 50!');
  } else {
    console.log('¡El número es menor que 50!');
}
