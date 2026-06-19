"use strict";
// Aula 3 sobre Herança
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    id;
    nome;
    funcao;
    constructor(nome, funcao) {
        this.id = this.gerarId();
        this.nome = nome,
            this.funcao = funcao;
    }
    gerarId() {
        let id = Math.round(Math.random() * 100000) + 1;
        return id;
    }
}
class Programador extends Funcionario {
    modalidade;
    constructor(modalidade, nome, funcao) {
        super(nome, funcao),
            this.modalidade = modalidade;
    }
}
const p1 = new Programador("Pedro", "Front-end", "Híbrido");
console.log(p1);
//# sourceMappingURL=aula22.js.map