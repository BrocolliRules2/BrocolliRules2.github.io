function calc(i, iunit, ounit) {
var t;
if (iunit==1) {
  t = i*5280;
} else if (iunit==2) {
  t=i*3280.84;
} else if (iunit==3) {
  t=i/12;
} else if (iunit==4) {
  t=i;
} else if (iunit==5) {
  t=i*30.48;  
} else {
  t=i*3.28084;
}
  
 var tmp = 0;

if (ounit==1) {
  tmp = t/5280;
} else if (ounit==2) {
  tmp=t/3280.84;
} else if (ounit==3) {
  tmp=t*12;
} else if (ounit==4) {
  tmp=t;
} else if (ounit==5) {
  tmp=t/30.48;  
} else {
  tmp=t/3.28084;
}
  
  return tmp;
}


function testFunc(){
var input=document.getElementById("input").value;
var inUnits=document.getElementById("input_units").value;
var outUnits=document.getElementById("output_units").value;

document.getElementById("ans").innerHTML=calc((input),(inUnits),(outUnits));
} 


