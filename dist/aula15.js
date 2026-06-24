// Aula sobre Spread e Rest operator
const somarNumeros = (...numeros) => {
    let soma = 0;
    numeros.map((numero) => {
        soma += numero;
    });
    return soma;
};
console.log(somarNumeros(1, 2, 3));
export {};
//# sourceMappingURL=aula15.js.map