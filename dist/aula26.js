"use strict";
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
        let id = Math.round(Math.random() * 100);
        return id;
    }
}
class Programador extends Funcionario {
    modalidade;
    constructor(nome, cargo, modalidade) {
        super(nome, cargo),
            this.modalidade = modalidade;
    }
}
const pedro = new Programador("Pedro", "Back-end", "Híbrido");
console.log(pedro);
//# sourceMappingURL=aula26.js.map