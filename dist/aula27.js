// Aula 1 de interfaces
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
export {};
//# sourceMappingURL=aula27.js.map