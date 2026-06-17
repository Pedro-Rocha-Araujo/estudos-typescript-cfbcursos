// Aula sobre Spread e Rest operator

const somarNumeros = (...numeros:number[]):number => {
  let soma:number = 0
  numeros.map((numero:number):void=>{
    soma+=numero
  })
  return soma
}

console.log(somarNumeros(1, 2, 3))