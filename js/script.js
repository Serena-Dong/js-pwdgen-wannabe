/* 

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21

*/


//* Preparo l'elemento che deve essere riempito
const placeholder = document.getElementById('password');

//* Chiedo all'utente il nome
const nome = prompt('Nome?');

//* Chiedo all'utente il cognome
const cognome = prompt('Cognome?');

//* Chiedo all'utente il colore preferito
const colore = prompt('Colore Preferito?');


//* Colleziono i dati e li inserisco nella risposta
placeholder.innerText =  nome + cognome + colore + 21;

