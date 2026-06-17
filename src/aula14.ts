// Arrow Function

const somarValores = (numeros:number[]):number => {
  let soma:number=0
  numeros.map((item:number):void=>{
    soma+=item
  })
  return soma
}

console.log(somarValores([1, 2, 3]))