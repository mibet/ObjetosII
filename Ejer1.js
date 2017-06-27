
var assert= require("assert");

var objeto = {inicio:9, fin:10};
function suma(inicial, final){
   var sum=0;
    for(var i=inicial;i<=final;i++)
      {
        sum+=i;

      }
    return sum;
}

//console.log(suma(objeto.inicio,objeto.fin));

describe("Suma numeros", function(){
  it("inicio:9, fin:10", function(){
    assert.equal("19",suma(objeto.inicio,objeto.fin));
  });
});
