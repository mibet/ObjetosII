var assert=require("assert");

function paciente(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
  this.genero=genero;
  this.ciudad=ciudad;
  this.pais=pais;
  this.ficha=function(){
    return "Nombre: "+this.nombre+" "+this.apellido+" Edad: "+this.edad+" Pais: "+this.pais;
  }
}

var p1=new paciente("Bertha","Contreras",15,"F","Arequipa","Peru");

//console.log(p1.ficha());

describe("Ficha de paciente",function(){
  it("Bertha, Contreras, 15, F, Arequipa , Peru", function(){
    assert.equal("Nombre: Bertha Contreras Edad: 15 Pais: Peru",p1.ficha());
  })
});
