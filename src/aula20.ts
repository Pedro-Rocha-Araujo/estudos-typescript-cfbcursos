// Aula sobre herança

export class Funcionario {
  public nome:string;
  public idade:number;
  private funcao:string;

  constructor(nome:string, idade:number, funcao:string) {
    this.nome = nome,
    this.idade = idade,
    this.funcao = funcao
  }
}

class Programador extends Funcionario {

}

const pedroca = new Programador("Pedro", 21, "Programador")

console.log(pedroca)