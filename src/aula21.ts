// Aula 2 sobre herança

class Funcionario {
  protected id:number;
  public nome:string;
  public idade:number;
  private funcao:string;
  constructor(nome:string, idade:number, funcao:string) {
    this.id = this.gerarId(),
    this.nome = nome,
    this.idade = idade,
    this.funcao = funcao
  }

  gerarId():number {
    let id = Math.round(Math.random()*1000)+1
    return id
  }
}

class Programador extends Funcionario {
  public modelo:string;
  constructor(nome:string, idade:number, funcao:string, modelo:string) {
    super(nome, idade, funcao)
    this.modelo = modelo
  }
}

const pedro = new Programador("Pedro", 21, "Programador", "Híbrido")

console.log(pedro)