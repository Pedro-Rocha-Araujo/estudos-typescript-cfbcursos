"use strict";
// Aula sobre herança
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
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