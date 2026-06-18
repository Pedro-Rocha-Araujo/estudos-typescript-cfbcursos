// Aula sobre modificadores de acesso

class Carro {
  public modelo:string;
  public marca:string;
  private ligado:boolean;
  constructor(modelo:string, marca:string, ligado:boolean) {
    this.modelo = modelo,
    this.marca = marca,
    this.ligado = ligado
  }

  ligarDesligar():void {
    if(this.ligado === true) {
      this.ligado = false
      console.log(`Agora o ${this.modelo} está desligado!`)
    } else {
      this.ligado = true
      console.log(`Agora o ${this.modelo} está ligado!`)
    }
  }
}

const carro1 = new Carro("Corolla", "Toyota", false)

carro1.ligarDesligar()
carro1.ligarDesligar()
carro1.ligarDesligar()