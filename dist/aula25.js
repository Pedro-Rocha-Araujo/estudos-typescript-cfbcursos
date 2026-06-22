"use strict";
// Métodos Getter e Setter
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
    set setNome(nome) {
        this.nome = nome;
    }
}
class Programador extends Funcionario {
    modalidade;
    constructor(nome, cargo, modalidade) {
        super(nome, cargo),
            this.modalidade = modalidade;
    }
    get getModalidade() {
        return this.modalidade;
    }
}
const pedro = new Programador("Pedro", "Back-end", "Híbrido");
console.log(pedro.setNome = "Pedro Rocha Araujo");
console.log(pedro);
//# sourceMappingURL=aula25.js.map