// Aula sobre métodos de classes em POO
class Banda {
    nome;
    genero;
    integrantes;
    turne;
    constructor(nome, genero, integrantes, turne) {
        this.nome = nome,
            this.genero = genero,
            this.integrantes = integrantes,
            this.turne = turne;
    }
    tocar() {
        if (this.turne === true) {
            console.log(`A banda ${this.nome} não pode tocar, pois está em turne.`);
        }
        else {
            console.log(`A banda ${this.nome} está tocando.`);
        }
    }
}
const banda1 = new Banda("Metallica", "Thrash Metal", ["James", "Kirk", "Lars", "CLiff"], true);
banda1.tocar();
export {};
//# sourceMappingURL=aula18.js.map