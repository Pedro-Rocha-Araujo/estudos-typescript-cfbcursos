// Aula sobre namespaces

namespace Animais {
  export class Animal {
    nome:string;
    constructor(nome:string) {
      this.nome = nome
    }
  }
}

let cachorro = new Animais.Animal("Cachorro Caramelo")

console.log(cachorro)