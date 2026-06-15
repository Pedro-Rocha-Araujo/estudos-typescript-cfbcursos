"use strict";
// Tipagem de Funções
Object.defineProperty(exports, "__esModule", { value: true });
let pessoa = {
    nome: "Pedro",
    idade: 21,
};
function saudacao(p) {
    console.log(`Olá! Me chamo ${p.nome} e tenho ${p.idade} anos.`);
    return 2026 - p.idade;
}
saudacao(pessoa);
//# sourceMappingURL=aula12.js.map