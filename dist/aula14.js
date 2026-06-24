// Arrow Function
const somarValores = (numeros) => {
    let soma = 0;
    numeros.map((item) => {
        soma += item;
    });
    return soma;
};
console.log(somarValores([1, 2, 3]));
export {};
//# sourceMappingURL=aula14.js.map