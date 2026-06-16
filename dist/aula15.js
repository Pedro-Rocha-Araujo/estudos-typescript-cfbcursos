"use strict";
// Aula sobre Spread e Rest operator
Object.defineProperty(exports, "__esModule", { value: true });
const somarNumeros = (...numeros) => {
    let soma = 0;
    numeros.map((numero) => {
        soma += numero;
    });
    return soma;
};
console.log(somarNumeros(1, 2, 3));
//# sourceMappingURL=aula15.js.map