// Aula 4 sobre herança

class Funcionario {
  private id:number;
  public nome:string;
  protected cargo:string;
  constructor(nome:string, cargo:string) {
    this.id = this.gerarId(),
    this.nome = nome,
    this.cargo = cargo
  }
  gerarId():number {
    let id = Math.round(Math.random()*100)+1
    return id
  }
  infos():void {
    console.log(`Id: ${this.id}`)
    console.log(`Nome: ${this.nome}`)
    console.log(`Cargo: ${this.cargo}`)
  }
}

class Programador extends Funcionario {
  private modalidade:string;
  constructor(nome:string, cargo:string, modalidade:string) {
    super(nome, cargo),
    this.modalidade = modalidade
  }
}

const pedro = new Programador("Pedro", "Programandor", "Híbrido")

console.log(pedro.infos())