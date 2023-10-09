// # Mail
// - Creare array con mail utenti
const mailsArray = ['pincopallino@gmail.com', 'valeriocarbone@gmail.com', 'boolean123@gmail.com' ,'paolorosso@gmail.com', 'tizio123@gmail.com' ,'caio123@gmail.com'];

// - Chiedere tramite prompt la mail all'utente
let userMail = prompt('Inserisci la tua mail');

// - Verificare se l'email è presente
//      - Inizializzare una variabile che sia il numero delle'email contenute nell'array
let numberMailsArray = mailsArray.length - 1;

//      - Creare un ciclo for
//      - Controllare l'email inserita con ogni mail presente nell'array
//      - Stampare messaggio in funzione del risultato
let message = ('Email inserita non corretta');

for (let i = 0 ; i <= numberMailsArray ; i++) {
    if (userMail === mailsArray[i]) {
        message = ('Email corretta')
        i = numberMailsArray
    }
}

console.log(message);



// # Dadi
// - Generare numero randomico per l'utente
// - Generare numero randomico per il computer
// - Confrontare i numeri
// - Stampare messaggio vincitore

let numberUser = parseInt(getRandomArbitrary(1, 6));

let numberComputer = parseInt(getRandomArbitrary(1, 6));

let numbersRandomArray = [numberUser, numberComputer];

numbersRandomArray.toSorted();

let winner = numbersRandomArray[0];
let messageWinner;

if (winner === numberUser) {
    messageWinner = 'Vittoria Utente'
}
else if (winner === numberComputer) {
    messageWinner = 'Vittoria Computer'
}

else{
    messageWinner = 'Pareggio'
}

console.log('Il tuo numero: '+ numberUser + ' Il numero del computer: '+ numberComputer + ' Il risultato è: ' + messageWinner )

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  