function adicionar (x , y) {

    console.log("a soma de" + x + "e" + y +"é:");

    return(x + y);

}

console.log(adicionar(20,3));


function subtracao(x, y){

    return(x - y);

}
console.log(subtracao(50,19));





function quadradoDoNumero(x){
    return(x * x);

}
function multiplicacao(x,y){

    return (x * y);
}

console.log(multiplicacao(20,15))

function divisao(x,y){

    return (x/y);

}
console.log(divisao(0,9));

function quadradoDoNumero(z){
    return(multiplicacao(z,z));
    
}
    console.log(quadradoDoNumero(4));

    function mediaDeTresNumeros(a , b , c){

        return divisao((adicionar(a,b) + c) , 3 )
        
    }
    console.log(mediaDeTresNumeros(12,24,36));

    function calculaPorcentagem(p, o){
        return divisao (multiplicacao (p, o), 100)
    }
    
    console.log (calculaPorcentagem(1800, 33))

    function geradorDePorcentagem(x,y){

        return divisao(multiplicacao(x,100),y)

    }
           console.log(geradorDePorcentagem(13,100));





 