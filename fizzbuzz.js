/**Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. 
 * Para números divisibles por 3, imprime "Fizz" en vez del número y para números divisibles por 5 (pero no por 3), 
 * imprime "Buzz".
 * 
 * Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", 
 * para números que sean divisibles tanto por 3 como por 5 
 * (y que siga imprimiendo "Fizz" o "Buzz" para números divisibles por sólo uno de ellos). */


for (let numero = 1; numero <= 100; numero++) {

    if (numero % 3 == 0) {

        console.log("Fizz");

    } else {

        console.log(numero);

    }

}