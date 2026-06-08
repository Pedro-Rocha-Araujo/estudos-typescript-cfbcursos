"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome = "";
    idade = 0;
    sexo = "";
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}
let p1 = new Pessoa("Pedro", 21, "M");
console.log(p1.nome);
//# sourceMappingURL=aula03.js.map