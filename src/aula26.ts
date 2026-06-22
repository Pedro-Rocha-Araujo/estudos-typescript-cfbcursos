abstract class Funcionario {
  id:number;
  nome:string;
  cargo:string;
  constructor(nome:string, cargo:string) {
    this.id = this.gerarId(),
    this.nome = nome,
    this.cargo = cargo
  }
  gerarId():number {
    let id = Math.round(Math.random()*100)
    return id
  }
}

class Programador extends Funcionario {
  modalidade:string;
  constructor(nome:string, cargo:string, modalidade:string) {
    super(nome, cargo),
    this.modalidade = modalidade
  }
}

const pedro = new Programador("Pedro", "Back-end", "Híbrido")

console.log(pedro)