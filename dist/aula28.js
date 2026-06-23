"use strict";
// Aula 2 sobre interfaces
Object.defineProperty(exports, "__esModule", { value: true });
class Banda {
    nome;
    turne;
    constructor(nome) {
        this.nome = nome,
            this.turne = this.contrato();
    }
    contrato() {
        return true;
    }
}
const banda = new Banda("Metallica");
console.log(banda);
//# sourceMappingURL=aula28.js.map