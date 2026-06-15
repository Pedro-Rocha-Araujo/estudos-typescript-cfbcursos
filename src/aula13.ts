// Parâmetros opcionais

function somar(n1:number, n2:number, n3?:number):number {
  if(!n3){
    return n1+n2
  }
  return n1+n2+n3
}

console.log(somar(1,3))