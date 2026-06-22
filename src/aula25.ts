// Métodos Getter e Setter

class Funcionario {
  id:number;
  public nome:string;
  private cargo:string;
  constructor(nome:string, cargo:string) {
    this.id = this.gerarId(),
    this.nome = nome,
    this.cargo = cargo
  }
  gerarId():number {
    let id = Math.round(Math.random()*100) 
    return id
  }

  set setNome(nome:string) {
    this.nome = nome
  }
}

class Programador extends Funcionario {
  private modalidade:string;
  constructor(nome:string, cargo:string, modalidade:string) {
    super(nome, cargo),
    this.modalidade = modalidade
  }

  get getModalidade():string {
    return this.modalidade
  }
}

const pedro = new Programador("Pedro", "Back-end", "Híbrido")

console.log(pedro.setNome="Pedro Rocha Araujo")
console.log(pedro)