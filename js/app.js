// # Mail

// - Creare array con mail utenti
const mailsArray = ['pincopallino@gmail.com', 'valeriocarbone@gmail.com', 'boolean123@gmail.com' ,'paolorossi@gmail.com', 'tizio123@gmail.com' ,'caio123@gmail.com'];

// - Chiedere tramite prompt la mail all'utente
let userMail = prompt('Inserisci la tua mail');

// - Verificare se l'email è presente
//      - Inizializzare una variabile che sia il numero delle'email contenute nell'array
let numberMailsArray = mailsArray.length - 1;

//      - Creare un ciclo for
//      - Controllare l'email inserita con ogni mail presente nell'array
let message = ('Email inserita non corretta');

for (let i = 0 ; i <= numberMailsArray ; i++) {
    if (userMail === mailsArray[i]) {
        message = ('Email corretta')
        i = numberMailsArray
    }
}

//      - Stampare messaggio in funzione del risultato
console.log(message);



// # Dadi

// - Generare numero randomico per l'utente
let numberUser = parseInt(getRandomArbitrary(1, 6));
// - Generare numero randomico per il computer
let numberComputer = parseInt(getRandomArbitrary(1, 6));

// - Confrontare i numeri
let numbersRandomArray = [numberUser, numberComputer];

//     - Inizializzare un'array che contenga i due numeri estratti;
//     - Utlizzare la funzione toSorted per metterli in ordine
let winner = numbersRandomArray.toSorted()[numbersRandomArray.length-1];

// - Stampare messaggio vincitore in base al risultato
let messageWinner;

if(numberUser === numberComputer){
    messageWinner = 'Pareggio'
}

else if (winner === numberUser) {
    messageWinner = 'Vittoria utente'
}
else if (winner === numberComputer) {
    messageWinner = 'Vittoria computer'
}

console.log('Il tuo numero: '+ numberUser + ' Il numero del computer: '+ numberComputer + ' Il risultato è ' + messageWinner )




function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  