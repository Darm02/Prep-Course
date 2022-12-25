// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  matriz = [];
  i = 0;
  for (let clave in objeto) {
    matriz[i] = new Array(2);
    matriz[i][0] = clave;
    matriz[i][1] = objeto[clave];
    i++;
  }

  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  original = string.split('');
  arrayDistintos = [];

  original.forEach((element) => {
    if (arrayDistintos.includes(element) !== true) {
      arrayDistintos.push(element);
    }
  });

  cantidadesLetras = [];
  iterador = 0;

  for (i = 0; i < arrayDistintos.length; i++) {

    contador = 0;
    for (j = 0; j < original.length; j++) {
      if (arrayDistintos[i] === original[j]) {
        contador++;
      }
    }
    cantidadesLetras[i] = contador;
    iterador++;

  }

  const nuevoObjeto = {};

  for (i = 0; i < arrayDistintos.length; i++) {
    nuevoObjeto[arrayDistintos[i]] = cantidadesLetras[i];
  }

  return nuevoObjeto;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  arreglo = s.split('');

  arregloSinMayusculas = arreglo.filter(function (letra) {
    if (!(letra === letra.toUpperCase())) {
      return letra;
    }
  });

  arregloMayusculas = arreglo.filter(function (letra) {
    if ((letra === letra.toUpperCase())) {
      return letra;
    }
  });

  nuevo = "";

  for (i = 0; i < arregloMayusculas.length; i++) {
    nuevo += arregloMayusculas[i];
  }

  for (i = 0; i < arregloSinMayusculas.length; i++) {
    nuevo += arregloSinMayusculas[i];
  }

  return nuevo;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  array = str.split(" ");

  arrayConvertido = array.map(
    function (element) {
      splitString = element.split('');
      arrayReverse = splitString.reverse();
      newString = arrayReverse.join("");
      return newString;
    }
  );

  stringConvertido = arrayConvertido.join(" ");
  return stringConvertido;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  cadena = numero.toString();

  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  cadenaInvertida = reverseString(cadena);
  
  if(cadena === cadenaInvertida){
      return "Es capicua";
  }else{
      return "No es capicua";
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  arreglo = cadena.split('');

  SinABC = arreglo.filter(function (letra) {
    if (!(letra === 'a' || letra === 'b' ||letra === 'c')) {
      return letra;
    }
  });

  return SinABC.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  arrSorted = arr.sort( 
    function(a,b){
      return a.length - b.length;
    }
  );

  return arrSorted;

}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  arrayInterseccion = [];
  i = 0;
  arreglo1.forEach((element) => {
    encontrado = arreglo2.find(element2 => element2 === element);
    if(encontrado != undefined){
        arrayInterseccion[i] = encontrado;
        i++;
    }
  });
  return arrayInterseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

