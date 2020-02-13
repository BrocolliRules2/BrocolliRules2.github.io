function testFunc(){

var units=document.getElementById("units").value;
var manning=document.getElementById("manning").value;
var radius=document.getElementById("radius").value;
var slope=document.getElementById("slope").value;
  
document.getElementById("ans").innerHTML=calc((units),(manning),(radius),(slope));


function calc(Kn, n, R, S) {

var V;
if (Kn==1) {
  V=((1.486/n)*R**(2/3)*S**(1/2));
} else    {
  V=((1/n)*R**(2/3)*S**(1/2));
  
}
  return V;
}
}
