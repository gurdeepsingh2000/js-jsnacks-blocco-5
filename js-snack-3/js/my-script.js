var numbers = [2,4,6];
var result = 0

for(var x = 0; x < numbers.length ; x++){
    result += numbers[x];
}

var final_result = result / numbers.length;

console.log(final_result)



//------------------------------\\

var result1 = 0

var basket = [
{
    nome: 'Lebron',
    cognome: 'James',
    anno: 2012,
    punteggio: 89,
},

{
    nome: 'Luka',
    cognome: 'Doncic',
    anno: 2017,
    punteggio: 120,
},

{
    nome: 'Jimmy',
    cognome:'Butler',
    anno: 2020,
    punteggio:102,
}
]

for (var x = 0; x < basket.length ; x++){
    result1 += basket[x].punteggio;
    for (var k in basket[x]){
       console.log(k, basket[x][k])
    }
}

var final_type = parseInt(result1 / basket.length);

console.log(final_type)

