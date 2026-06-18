"use strict";
// Aula sobre modificadores de acesso
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    modelo;
    marca;
    ligado;
    constructor(modelo, marca, ligado) {
        this.modelo = modelo,
            this.marca = marca,
            this.ligado = ligado;
    }
    ligarDesligar() {
        if (this.ligado === true) {
            this.ligado = false;
            console.log(`Agora o ${this.modelo} está desligado!`);
        }
        else {
            this.ligado = true;
            console.log(`Agora o ${this.modelo} está ligado!`);
        }
    }
}
const carro1 = new Carro("Corolla", "Toyota", false);
carro1.ligarDesligar();
carro1.ligarDesligar();
carro1.ligarDesligar();
//# sourceMappingURL=aula19.js.map