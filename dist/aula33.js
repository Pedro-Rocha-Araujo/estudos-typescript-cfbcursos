var Eletronicos;
(function (Eletronicos) {
    class Computador {
        processador;
        ram;
        placa;
        constructor(processador, ram, placa) {
            this.processador = processador,
                this.ram = ram;
            this.placa = placaAmd;
        }
    }
    Eletronicos.Computador = Computador;
    class PlacaVideo {
        nome;
        vram;
        constructor(nome, vram) {
            this.nome = nome,
                this.vram = vram;
        }
    }
    Eletronicos.PlacaVideo = PlacaVideo;
    const placaAmd = new PlacaVideo("AMD", 8);
})(Eletronicos || (Eletronicos = {}));
const pc = new Eletronicos.Computador("Ryzen5", 16);
console.log(pc);
export {};
//# sourceMappingURL=aula33.js.map