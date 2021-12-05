const somar = (numeroA,numeroB) => {

    console.log('recebi um numero: '+ numeroA)

    return numeroA + numeroB
}


console.log(somar(20 ,30));



// Micro desafios

// Transforme as seguintes funções em arrow functions:

1
function print(mensagem){
    console.log(mensagem)
  }
   
  print("Olá, bom dia")


let print = mensagem => console.log('Ola,bom dia!!!')


    print();

////////////////////////////

2
  function soma(n1, n2){
    return n1 + n2
  }
   
  console.log(soma(10, 10))

let soma = (n1,n2) => {

    return n1 + n2
}

console.log(soma(5,9));