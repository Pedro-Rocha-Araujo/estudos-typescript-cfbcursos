class Pessoa {
  nome = ""
  idade = 0
  sexo = ""
  constructor(nome:string, idade:number, sexo:string){
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
  }
}

let p1 = new Pessoa("Pedro", 21, "M")
console.log(p1.nome)