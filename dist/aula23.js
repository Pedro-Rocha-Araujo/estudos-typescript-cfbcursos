"use strict";
// Aula 4 sobre herança
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    id;
    nome;
    cargo;
    constructor(nome, cargo) {
        this.id = this.gerarId(),
            this.nome = nome,
            this.cargo = cargo;
    }
    gerarId() {
        let id = Math.round(Math.random() * 100) + 1;
        return id;
    }
    infos() {
        console.log(`Id: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
    }
}
class Programador extends Funcionario {
    modalidade;
    constructor(nome, cargo, modalidade) {
        super(nome, cargo),
            this.modalidade = modalidade;
    }
}
const pedro = new Programador("Pedro", "Programandor", "Híbrido");
console.log(pedro.infos());
//# sourceMappingURL=aula23.js.map