document.write("hola" + "</br>");

/* Primer ejercicio de la prueba */

var nombre = "piñas";
var cantidad = 20;
var precio = 2200;

var total = precio * cantidad;

document.write("precio: "+total + "</br>");

if(cantidad > 10){
    total = total * 0.8
} else{
    total = total * 0.9
}

document.write("El nuevo precio es: " + total + "</br>")