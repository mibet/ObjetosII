var assert= require("assert");

function coders(nombre,edad,ocupacion,genero){
  this.nombre=nombre;
  this.edad=edad;
  this.ocupacion=ocupacion;
  this.genero=genero;
  this.mensaje=function(){
    if(this.genero=="Femenino"){
      if(this.edad>17){
        if((this.ocupacion=="Estudiante Laboratoria") || (this.ocupacion=="Web Developers"))
          {
            return "You're Awesome";
          }
      }else{
        return "Por casii :|";
      }
    }else{
      return "Lo sentimos :("
    }
  }
}


var p1= new coders("Tamara", 22, "Estudiante Laboratoria", "Femenino");

/*
var p2= new coders("Mario", 15, "Estudiante", "Masculino");
var p3= new coders("Talia", 26, "Web Developers", "Femenino");
console.log(p1.mensaje());
console.log(p2.mensaje());
console.log(p3.mensaje());
*/

describe("Las Super Coder",function(){
  it("Tamara, 22, Estudiante Laboratoria, Femenino", function(){
    assert.equal("You're Awesome",p1.mensaje());
  });
});
