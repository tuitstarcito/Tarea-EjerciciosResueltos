/*Ejercicio 1
Dado un numero, devolver  la tabla de multiplicar completa
Ejemplo:
-Ejecuto la funcion:
tablaMultiplicar(5)
-Me devuelve este resultado:
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
Como hacerlo:
-Funcion con parametro "numero"
-variable con texto encabezado
-bucle de 1 al 10
-concatenar a la variable string con la multiplicacion y el resultado
*/

function ejercicio1TablaMultiplicar(numero) {
  let result = `Tabla del numero ${numero}: \n`;
  for (let i = 0; i < 10; i++) {
    let multiplicacion = i * numero;
    // console.log(multiplicacion);
    result += `${i} X ${numero} = ${multiplicacion} \n`;
  }

  return result;
}
console.log(ejercicio1TablaMultiplicar(5));

/*Ejercicio 2
Tienes una cadena de texto , comprobar si es un palindromo o no. Los palindromos
son palabras que se leen igual aun estando invertidas.
Ejemplo: ana , bob , otto, luzazul ,
No tengas encuenta espacios o simbolos(+-?'*"")
-Ejecutas la funcion:
palindromo("miguel")//devuelve: false
palindromo("ana")//devuelve: true
Como hacerlo:
-Funcion con parametro "texto"
-Separar el texto en un arreglo de letras
-Darle la vuelta
-Unir el arreglo de letras  en un string y comparar con el parametro
*/
function ejercicio2Palindromo(cadena) {
  let invertido = cadena.split('').reverse().join('');
  if (invertido === cadena) {
    return true;
  } else {
    return false;
  }
}
console.log(`Es un palindromo? ${ejercicio2Palindromo('juan')}`);

/**Ejercicio 3
*Dado una palabra buscarla en una frase y devolver cuantas veces aparece en ella.
*La palabra y la frase deben ser parametros de la funcion 
*Ejemplo: 
*countCoincide("el multiverso de marvel es mejor que el multiverso de DC","multiverso")//devuelve: 2
*countCoincide("juan hace el paso de anita","anito")//devuelve:0
Como hacerlo:
-Funcion con dos parametros 'frase' y 'busqueda'
-Poner el string y limpiarlo
-Comprobar si la busqueda esta incluida en la frase
-Crear un array de la palabras de la frase
-Mapear esas palabras y hacer un contador  de cada una
-Devolver el contador de la busqueda
*/
function ejercicio3CountCoincide(frase, busqueda) {
  let limpiandoTexto = frase.toLowerCase().replace(/[¡!.,-]/gi, '');
  let resultado = 0;
  if (limpiandoTexto.includes(busqueda)) {
    let palabras = limpiandoTexto.split(' ');
    let map = {};

    for (const palabra of palabras) {
      if (map[palabra]) {
        map[palabra]++;
      } else {
        map[palabra] = 1;
      }
    }
    // console.log(palabras);
    // console.log(map);
    resultado = map[busqueda];
  } else {
    resultado = 0;
  }
  return resultado;
}
console.log(
  ejercicio3CountCoincide(
    'el multiverso de marvel es mejor que el multiverso de DC, multiverso multiverso',
    'multiverso'
  )
); //4

/*Ejercicio
Dado una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar metodos propios del lenguaje, 
solo estructuras de control
Ejemplo:
invertir("hola") //devuelve: "aloh"
invertir("quique") //devuelve: "euqiuq"
Como hacerlo:
-Funcion con parametro texto
-Crear una variable para guardar  la cadena invertida
-Bucle que recora el string y c¿guarde los caracteres en la variable
*/

function invertirOrden(texto) {
  let reverse = '';

  for (let i = texto.length - 1; i >= 0; i--) {
    reverse += texto[i];
  }
  return reverse;
}

console.log(invertirOrden('hola'));
console.log(invertirOrden('quique'));

/**Ejercicio
* ¿Cuanto es el X por ciento de Y?
* Ejemplo:
* equisPorciento(10,120) //devuelve: 12
* equisPorciento(20,100)//devuelve: 20
* Como hacerlo:
-Funcion con parametros porcentaje y numero
-Crear una variable para  la operacion del procentaje 
-Devolver el string que responda a la pregunta del enunciado
*/

function equisPorCiento(porcentaje, numero) {
  let result = (porcentaje * numero) / 100;
  return `El ${porcentaje}% de ${numero} es igual a ${result}`;
}

console.log(equisPorCiento(10, 120));
console.log(equisPorCiento(20, 100));

/**Ejercicio
 * Dado dos numeros devolver cuantos numeros IMPARES hay entre ellas.
 * Ejemplo:
 * impares(1,10) //devuelve:4
 */

function impares(inicio, final) {
  let counter = 0;

  for (let i = inicio; i <= final; i++) {
    if (i % 2 == 1) {
      counter = counter + 1;
    }
  }
  return `Entre ${inicio} y ${final} hay ${counter} números impares`;
}

console.log(impares(1, 18));

/**Ejercicio
 * Dado un numero entero, inviertelo y devuelve de nuevo el numero
 * Ejemplo:
 * invertirNumero(78)//devuelve: 87
 */

function invertirNumero(numero) {
  let reverse = '';
  let string = numero.toString();

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return parseInt(reverse);
}

console.log(invertirNumero(78));

/**Ejercicio
 * Dado dos arreglos, devolver un arreglo con los elementos comunes entre ambos
 * Ejemplo:
 * elementosComunes([1,2,3,4,5,7],[5.6.7.8]) //devuelve: [5,7]
 */

function elementosComunes(arrayUno, arrayDos) {
  let iguales = [];

  for (let i = 0; i < arrayUno.length; i++) {
    if (arrayDos.includes(arrayUno[i]) == true) {
      iguales.push(arrayUno[i]);
    }
  }
  return iguales;
}
console.log(elementosComunes([1, 2, 3, 4, 5, 7], [5, 6, 7, 8]));

/**Ejercicio
 * Dado un numero, devolver una escalera con escalones de "[-]", usando el numero como base y nivel de la escalera
 * Ejemplo:
 * escalera(4) //devuelve:
 * [-]
 * [-][-]
 * [-][-][-]
 * [-][-][-][-]
 */

function escalera(number) {
  let escalon = `[-] `;
  let result = `Escalera de ${number} escalones \n`;

  for (let i = 1; i <= number; i++) {
    let peldano = escalon.repeat(i);
    result += `${peldano} \n`;
  }
  return result;
}

console.log(escalera(10));

/**Ejercicio
 * Dado un numero mostrar todos los numeros desde ese numero hasta el 0 pero en intervalos de 9 en 9 en una lista con guiones
 * donde cada numero debe empezar con n°
 * Ejemplo:
 * hastaCero(50) //devuelve
 * --- Del 50 al 0 ---
 * -n°50
 * -n°41
 * -n°32
 * -n°23
 * -n°14
 * -n°5
 * ---FIN---
 */

function hastaCero(numero) {
  let result = `--- Del ${numero} al 0 --- \n`;

  for (let i = numero; i >= 0; i -= 9) {
    result += `N° ${i} \n`;
  }
  return result + `--- FIN ---`;
}

console.log(hastaCero(50));

/**Ejercicio
 * Dado un arreglo, dividirlo en tantos sub arreglos como sea necesario basandonos en un numero que indique su tamaño.
 * Dividirlo en arreglos de X elementos
 * Ejemplo:
 * divideArreglo([4,5,6,7,9],2) //devuelve [[4,5],[6,7],[9]]
 */

function divideArreglo(array, divisor) {
  let newArray = [];

  for (let i = 0; i < array.length; i += divisor) {
    newArray.push(array.slice(i, i + divisor));
  }
  return newArray;
}

console.log(divideArreglo([4, 5, 6, 7, 9], 2));

/**Ejercicio
 * Dado una cadena de texto, devolver el caracter mas usado.
 * Ejemplo:
 * masUsado("programandoandoconganas") //devuelve: Caracter que mas se repite es :a
 */

function masUsado(texto) {
  //Convierto el texto en un arreglo
  const array = texto.split('');

  // Creo un contador de caracteres y lo almaceno en un objeto
  const counter = array.reduce((a, b) => ((a[b] = a[b] + 1 || 1), a), {});

  // Evalua los valores de cada clave y obtiene el mayor
  const mayor = Math.max(...Object.values(counter));

  // Funciona para retornar de un objeto, la llave segun el valor que le pase
  function getKeyByValue(object, value) {
    for (let prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value) return prop;
      }
    }
  }

  // Obtengo la llave segun  el valor en este caso el mayor
  result = getKeyByValue(counter, mayor);

  return `El caracter que más se repite es: ${result}`;
}

console.log(masUsado('programandoandoconganas'));

/**Ejercicio
 * Dado una cadena de texto , devolver  cuantas vocales(a,e,i,o,u) tiene
 * Ejemplo:
 * vocales("programandoandoconganas") //devuelve: 9
 */

function vocales(texto) {
  // const array = texto.split('');
  let count = 0;
  const vocales = ['a', 'e', 'i', 'o', 'u'];

  for (let letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) {
      count++;
    }
  }

  // return count;
  return `La cantidad de vocales en '${texto}' es: ${count}`;
}

console.log(vocales('programandoandoconganas'));
