function podeSubir (altura,acompanhante){



    if(altura <= 2.00 && altura >= 1.40){
        podeSubir = true
        //return true;
        console.log("Acesso Autorizado");

    }
        else if(altura <=1.40 && altura >=1.20 && acompanhante){
            podeSubir = true
            //return true
            console.log("Acesso Autorizado somente com acompanhante");

        }   
        else if(altura <1.20){
            podeSubir = false
            //return false;
            console.log("Acesso Negado");
        }

    
}
    console.log(podeSubir(1.18));
    