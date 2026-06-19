// Aula 3 sobre Herança

class Funcionario {
  private id:number;
  public nome:string;
  protected funcao:string;
  constructor(nome:string, funcao:string) {
    this.id = this.gerarId()
    this.nome = nome,
    this.funcao = funcao
  }
  private gerarId():number {
    let id = Math.round(Math.random()*100000)+1
    return id
  }
}

class Programador extends Funcionario {
  private modalidade:string;
  constructor(modalidade:string, nome:string, funcao:string) {
    super(nome, funcao),
    this.modalidade = modalidade
  }
}

const p1 = new Programador("Pedro", "Front-end", "Híbrido")

console.log(p1)