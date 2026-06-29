// Aula sobre desestruturação

let cores = ["Vermelho", "Verde", "Azul"]

console.log("Array de cores -> ", cores)

let [c1, c2] = cores

console.log(c1, c2)

console.log("=============================")

const pessoa = {
  nome: "Pedro",
  idade: 21,
  sexo: "M"
}

let {nome, idade, sexo} = pessoa

console.log(nome, idade, sexo)