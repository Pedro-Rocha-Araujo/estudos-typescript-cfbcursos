var Eletronicos;
(function (Eletronicos) {
    class Computador {
        processador;
        ram;
        placa;
        constructor(processador, ram, placa) {
            this.processador = processador;
            this.ram = ram;
            placa ? this.placa = placa : this.placa;
        }
    }
    class Placa {
        vram;
        constructor(vram) {
            this.vram = vram;
        }
    }
    Eletronicos.Placa = Placa;
    class Notebook extends Computador {
        carregador;
        constructor(processador, ram, carregador, placa) {
            super(processador, ram, placa);
            this.carregador = carregador;
        }
    }
    Eletronicos.Notebook = Notebook;
})(Eletronicos || (Eletronicos = {}));
const gforce = new Eletronicos.Placa(8);
const note = new Eletronicos.Notebook("AMD", 16, "cabo");
console.log(note);
export {};
//# sourceMappingURL=aula34.js.map