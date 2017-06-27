var assert= require("assert");

function retornar(arr){
 var res="";

  var texto={};
  for(var i=0;i<arr.length;i++)
    {
      texto[ (i+1)] = arr[i];
      res +="propiedad"+ (i+1) +"-->"+arr[i]+ ";";

  }
  return res;
}

//console.log(retornar([6,5,4,3,2,1]));
//console.log(texto);

describe("Objeto de Arreglo", function(){
  it("[6,5,4,3,2,1]",function(){
    assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1;",retornar([6,5,4,3,2,1]));
  });
});
