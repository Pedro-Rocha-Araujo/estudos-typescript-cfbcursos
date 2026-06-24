// Aula sobre Generics

function retornaMensagem<a, b>(nome:a, idade:b):void {
  return console.log(`Olá: ${nome}, de ${idade} anos`)
}

retornaMensagem<string, string>("Pedro", "21")
retornaMensagem<string, number>("Pedro", 21)