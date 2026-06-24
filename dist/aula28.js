// Aula 2 sobre interfaces
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
export {};
//# sourceMappingURL=aula28.js.map