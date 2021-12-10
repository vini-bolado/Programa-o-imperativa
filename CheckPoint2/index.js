let alunos = require('./alunos');


function medNotas(array) {
    let idadeBoaAval = array.filter((alunos) => {
      return alunos.nota == 3;
    });