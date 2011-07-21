var pessoa = {
  bens : [],
  nome : "Guilherme",
  sobrenome : "Cavalcanti",
  nomeCompleto : function(){
    return this.nome + " " + this.sobrenome;
  },
  addBens : function(bem){
    this.bens.push(bem);
    return this.bens;
  },
  imprimir : function(){
    /*
    for(var i = 0; i < this.bens[i]; i++){
      console.log(this.bens[i]);
    }
    */

    for(var i in this.bens){
      if(this.bens[i] === undefined) {
        console.log("nada");
      } else {
        console.log(this.bens[i]);
      }
    }
  }
};

function soma(a,b){
  return a + b;
}
/*
pessoa.nomeCompleto = function(){
  return this.nome + " " + this.sobrenome;
}
*/


