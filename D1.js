/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali   in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i data tiypes in javascript sono le categorie di variabili che ci possono essere nel nostro codice e ci possono eseere 
le stringhe il loro contenuto viene messo tra apici, poi i number il contenuto sono numeri interi o con virgola boolean che daranno come risposta
true/false, poi troviamo undefind e null il primo è quando il programma non trova il contenuto della variabile il secondo si usa
quando intenzionalmente c'è l'assenza di un valore.   */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
 let myName='Andrea';
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numero1=15;
let numero2=15;
console.log(numero1+numero2);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x=12;
console.log(x);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName='la ventura';
console.log(myName);


/* const auto='ferrari';
auto='Fiat';
console.log(auto);*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let numero4= 4;
console.log(x-numero4);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1='john';
let name2='John';
console.log('i 2 nomi sono uguali?',name1===name2.toLowerCase());
/* let name1='john';
let name2='John';
console.log(name1!==name2);*/
