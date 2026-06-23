"use strict";
// Aula 1 de interfaces
Object.defineProperty(exports, "__esModule", { value: true });
let banda = {
    nome: "Metallica",
    genero: "Thrash Metal",
    turne: false,
    tocar() {
        if (this.turne === true) {
            return console.log("A banda em questão já está em tune");
        }
        return console.log("A banda está tocando!");
    }
};
console.log(banda);
//# sourceMappingURL=aula27.js.map