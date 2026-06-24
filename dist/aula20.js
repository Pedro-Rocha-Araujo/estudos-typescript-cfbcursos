// Aula sobre herança
export class Funcionario {
    nome;
    idade;
    funcao;
    constructor(nome, idade, funcao) {
        this.nome = nome,
            this.idade = idade,
            this.funcao = funcao;
    }
}
class Programador extends Funcionario {
}
const pedroca = new Programador("Pedro", 21, "Programador");
console.log(pedroca);
//# sourceMappingURL=aula20.js.map