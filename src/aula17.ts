class Banda {
  nome:string;
  genero:string;
  integrantes:string[];

  constructor(nome:string, genero:string, integrantes:string[]){
    this.nome = nome,
    this.genero = genero,
    this.integrantes = integrantes
  }
}

const banda1 = new Banda(
  "Metallica",
  "Thrash Metal",
  ["James", "Kirk", "Lars", "Cliff"]
)

console.log(banda1)