triangolo_rettangolo = ({
    base: 10,
    altezza: 15
})

var hypotenuse = Math.sqrt(Math.pow(triangolo_rettangolo.base,2) + Math.pow(triangolo_rettangolo.base,2))
console.log(hypotenuse)

var perimetro = hypotenuse + triangolo_rettangolo.base + triangolo_rettangolo.base
console.log(perimetro)
var area = parseInt(triangolo_rettangolo.base * triangolo_rettangolo.base)/2
console.log(area)



