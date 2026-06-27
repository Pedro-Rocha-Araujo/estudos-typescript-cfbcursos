namespace Eletronicos {
  export class Computador {
    processador:string;
    ram:number;
    placa?:object;

    constructor(processador:string, ram:number, placa?:object) {
      this.processador = processador,
      this.ram = ram
      this.placa = placaAmd
    }
  }

  export class PlacaVideo {
    nome:string;
    vram:number;
    constructor(nome:string, vram:number) {
      this.nome = nome,
      this.vram = vram
    }
  }

  const placaAmd = new PlacaVideo("AMD", 8)
}

const pc = new Eletronicos.Computador("Ryzen5", 16)

console.log(pc)