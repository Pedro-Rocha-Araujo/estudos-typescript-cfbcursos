// Aula 2 sobre interfaces

interface contratar {
  contrato():boolean
}

class Banda implements contratar {
  nome:string;
  turne:boolean;
  constructor(nome:string) {
    this.nome = nome, 
    this.turne = this.contrato()
  }
  contrato() {
    return true
  }
}



const banda = new Banda("Metallica")

console.log(banda)