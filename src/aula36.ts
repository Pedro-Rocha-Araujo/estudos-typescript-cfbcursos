// Aula 2 sobre desestruturação

let [n1, n2=null, ...n3] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(n1, n2, n3)

const frase = "Meu nome é Pedro"

let [...corte] = frase.split(" ")

console.log(corte)

const frase2 = "Olá! Como vai?"

console.log(frase2.split(""))