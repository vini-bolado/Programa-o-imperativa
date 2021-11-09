

function menuMicrondas(prato,tempo){

let menuMicrondas = false

    if(prato == 1 && tempo == 10 ){

        console.log("Prato pronto bom apetite");

    }else if(prato == 1 && tempo <10){

        
        console.log("tempo insuficiente");

    }else if(prato == 1 && tempo >=20 &&  tempo <30){

        console.log("A comida queimou");
        
    }else if(prato == 1 && tempo >=30)

        console.log("Kabbummmm!!!");




    if(prato == 2 && tempo ==  8 ){

        console.log("Prato pronto bom apetite");
        
    }else if(prato == 2 && tempo < 8){
        
        console.log("tempo insuficiente");

    }else if(prato == 2 && tempo >=16 && tempo <24){

        console.log("A comida queimou");

    }else if(prato == 2 && tempo >=24)

        console.log("Kabbummmm!!!");




    if(prato == 3 && tempo ==  15 ){

        console.log("Prato pronto bom apetite");
        
    }else if(prato == 3 && tempo < 15){
        
        console.log("tempo insuficiente");

    }else if(prato == 3 && tempo >=30 && tempo < 45){

        console.log("A comida queimou");

    }else if(prato == 3 && tempo >=45)

        console.log("Kabbummmm!!!");




    if(prato == 4 && tempo ==  12 ){

        console.log("Prato pronto bom apetite");
        
    }else if(prato == 4 && tempo < 12){
        
        console.log("tempo insuficiente");

    }else if(prato == 4 && tempo >=24 && tempo < 36){

        console.log("A comida queimou");

    }else if(prato == 4 && tempo >=36)

        console.log("Kabbummmm!!!");




    if(prato == 5 && tempo ==  8 ){

        console.log("Prato pronto bom apetite");
        
    }else if(prato == 5 && tempo < 8){
        
        console.log("tempo insuficiente");

    }else if(prato == 5 && tempo >=16 && tempo < 24){

        console.log("A comida queimou");
    
    }else if(prato == 5 && tempo >=24){

        console.log("Kabbummmm!!!");
    }
   
    else if(prato >5){

        console.log("Prato inexistente");
    }
    
}


    menuMicrondas(2,5);

