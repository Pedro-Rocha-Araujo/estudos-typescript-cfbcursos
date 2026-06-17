"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banda {
    nome;
    genero;
    integrantes;
    constructor(nome, genero, integrantes) {
        this.nome = nome,
            this.genero = genero,
            this.integrantes = integrantes;
    }
}
const banda1 = new Banda("Metallica", "Thrash Metal", ["James", "Kirk", "Lars", "Cliff"]);
console.log(banda1);
//# sourceMappingURL=aula17.js.map