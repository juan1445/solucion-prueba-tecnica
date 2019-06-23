document.write("hola" + "</br>");

/* Quinto ejercicio */

var n = 21;
var i = 1
var sp = 0;
var cp = 0;
var ci = 0;

for(i=1; i <= 5;){
console.log(n)
if(n % 2 == 0){
    sp = sp + n;
    cp = cp + 1;
}else{
    ci = ci + 1;
}
i = i + 1;
}
console.log(ci/(ci + cp))

if(cp != 0){
    console.log(sp/cp)
}
