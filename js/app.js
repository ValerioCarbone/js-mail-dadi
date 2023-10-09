// # Mail
// - Creare array con mail utenti
const mailsArray = ['pincopallino@gmail.com', 'valeriocarbone@gmail.com', 'boolean123@gmail.com' ,'paolorosso@gmail.com', 'tizio123@gmail.com' ,'caio123@gmail.com'];
console.log(mailsArray);
console.log(mailsArray.length);
console.log(mailsArray[0])
// - Chiedere tramite prompt la mail all'utente
let userMail = prompt('Inserisci la tua mail');

// - Verificare se l'email è presente
//      - Inizializzare una variabile che sia il numero delle'email contenute nell'array
let numberMailsArray = mailsArray.length - 1;

//      - Creare un ciclo for
//      - Controllare l'email inserita con ogni mail presente nell'array
//      - Stampare messaggio in funzione del risultato
for (let i = 0 ; i <= numberMailsArray ; i++) {
    if (userMail === mailsArray[i]) {
        console.log('Email corretta')
        i = numberMailsArray
    }
    else {
        console.log('Email errata')
    }
}



// # Dadi
// - Generare numero randomico per l'utente
// - Generare numero randomico per il computer
// - Confrontare i numeri
// - Stampare messaggio vincitore
