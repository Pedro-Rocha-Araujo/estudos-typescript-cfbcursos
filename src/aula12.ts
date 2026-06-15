// Tipagem de Funções

let pessoa = {
  nome: "Pedro",
  idade: 21,
}

function saudacao(p:any):number {
  console.log(`Olá! Me chamo ${p.nome} e tenho ${p.idade} anos.`)
  return 2026 - p.idade
}

saudacao(pessoa)