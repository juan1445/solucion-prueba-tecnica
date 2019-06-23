document.write("hola" + "</br>");

/* Tercer ejercicio de la prueba */

var nombre = "john";
var edad = 15;
var dias = 0;
var horas = 0;

if(edad >= 18){
    dias = edad * 365;
}else if(edad % 2 == 0){
    horas = edad * 365 * 24
}else {
    document.write(nombre + ", hola" + "</br>");
}

document.write(nombre + " ha vivido: " + dias + " dias" + "</br>")
document.write("ha vivido: " + horas + "</br>")