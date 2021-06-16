/*
Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
nome
cognome
age
descrizione

Per nome, cognome ed age assegnate direttamente nel codice i valori che volete. 
ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.

{
  nome: 'Pippo',
  cognome: 'Baudo',
  age: 80,
  descrizione: ''
} 

Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, 
salviamola quindi all’interno della sua proprietà. 

Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;) 

Stampiamo con un console.log il risultato di questo array di studenti aggiornato.

Bonus
Visualizzare nell’html questi dati in una forma tabellare.
*/

var output = document.getElementById('text')

var ArrayStudenti = [
    {
        nome: 'Ciro',
        cognome: 'Immobile',
        age: 17,
        descrizione: ''
    },

    {
        nome: 'Lorenzo',
        cognome: 'Insigne',
        age: 19,
        descrizione: ''
    },

    {
        nome: 'Marco',
        cognome: 'Verratti',
        age: 18,
        descrizione: ''
    },
]


for(var x = 0; x < ArrayStudenti.length; x++){
    var ask_description = prompt('Inserisci una descrizione per lo studente')
    ArrayStudenti[x].descrizione = ask_description
    for (var k in ArrayStudenti[x]) {
        output.innerHTML += k + ' ' + ArrayStudenti[x][k] + '<br>';
    }
}

console.log(ArrayStudenti)

