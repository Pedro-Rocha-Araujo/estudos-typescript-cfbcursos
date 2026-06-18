// Aula sobre métodos de classes em POO

class Banda {
  nome:string;
  genero:string;
  integrantes:string[];
  turne:boolean;

  constructor(nome:string, genero:string, integrantes:string[], turne:boolean) {
    this.nome = nome,
    this.genero = genero,
    this.integrantes = integrantes,
    this.turne = turne
  }

  tocar():void {
    if(this.turne === true) {
      console.log(`A banda ${this.nome} não pode tocar, pois está em turne.`)
    } else {
      console.log(`A banda ${this.nome} está tocando.`)
    }
  } 
}

const banda1 = new Banda(
  "Metallica", 
  "Thrash Metal", 
  ["James", "Kirk", "Lars", "CLiff"], 
  true
)

banda1.tocar()