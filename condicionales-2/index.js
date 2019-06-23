document.write("hola" + "</br>");

/* Segundo Ejercicio de la Prueba */

var metros = 2;
var kilometros = 0;
var decimetros = 0;

if(metros % 2 == 0){
    kilometros = metros / 1000
}else{
    decimetros = metros * 10
}

document.write("kilometros: " + kilometros + "</br>")
document.write("decimetros: " + decimetros + "</br>")