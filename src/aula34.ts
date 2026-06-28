namespace Eletronicos {
  abstract class Computador {
    processador:string;
    ram:number;
    placa?:Placa;
    constructor(processador:string, ram:number, placa?:Placa) {
      this.processador = processador;
      this.ram = ram;
      placa?this.placa = placa:this.placa;
    }
  }

  export class Placa {
    vram:number;
    constructor(vram:number) {
      this.vram = vram;
    }
  }

  export class Notebook extends Computador {
    carregador: "fonte" | "cabo"
    constructor(processador:string, ram:number, carregador:"fonte"|"cabo", placa?:Placa) {
      super(processador, ram, placa);
      this.carregador = carregador;
    }
  }
}

const gforce = new Eletronicos.Placa(8)

const note = new Eletronicos.Notebook("AMD", 16, "cabo")

console.log(note)