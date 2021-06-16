var palla = {
    Nome: 'palla',
    Peso: 10
}

console.log(palla)

var nuovo = prompt('Inserisci il nuovo peso della palla')

palla.Peso = nuovo

console.log(nuovo)


var giochi = [];

giochi.push(palla)

console.log(giochi)

var nome_ask = prompt('Inserisci il nuovo nome')
var peso_ask = prompt('Inserisci il nuovo peso')



giochi.push({
    Nome: nome_ask,
    Peso: peso_ask
})