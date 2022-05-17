const arquivos = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": 1.20
    },
    {
        
        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": 1.8
    },
    {
        
        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": 1.68
    },
    {
        
        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": 1.39
    },
    {
        
        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": 1.49
    },
    {
        
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": 1.97
    },
    {
        
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": 1.06
    },
    {
        
        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": 1.20
    },
    {
        
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": 1.6
    },
    {
        
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": 1.48
    }
  ]
  
  var byaltura = arquivos.slice(0);
  byaltura.sort(function(a,b) {
      return a.altura - b.altura;
  });
  
  console.log("Menor altura é: "+ byaltura[0].altura + " e a maior altura é: "+ byaltura[9].altura);
  
  var P_sexo = arquivos.slice(0);
  P_sexo.sort(function(a,b) {
      return a.P_sexo - b.P_sexo;
  });
  
  Altura = 0;
  contador = 0;
  contador2 = 0;

    for (var i in P_sexo) {
        if (P_sexo[i].sexo == "F") {
            Altura+=P_sexo[i].altura
            contador++ 

      }else if   (P_sexo[i].sexo == "M")  {
          contador2++
      }            
  };

    media_altura = Altura / contador

    console.log("A media de Altura mulheres:" +media_altura)
  
    console.log("O numero de Homens é : "+contador2)

