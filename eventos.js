var teclas = {
    UP: [38, 87],
    DOWN: [40, 83],
    LEFT: [37, 65],
    RIGHT: [39, 68]
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

//Variables para la seleccion de colores
var color_rojo = document.getElementById("botonRojo");
var color_azul = document.getElementById("botonAzul");
var color_verde = document.getElementById("botonVerde");
var color_amarillo = document.getElementById("botonAmarillo");
var color_morado = document.getElementById("botonMorado");
color_rojo.addEventListener("click", colorRojo);
color_azul.addEventListener("click", colorAzul);
color_verde.addEventListener("click", colorVerde);
color_amarillo.addEventListener("click", colorAmarillo);
color_morado.addEventListener("click", colorMorado);

//Variables y Events para dibujar con mouse o touch
//cuadrito.addEventListener("mousedown", clickMouse);
//cuadrito.addEventListener("mouseup", pararMouse);
cuadrito.addEventListener("mousemove", dibujarMouse);
var estadoClick; //Es el estado del click
var xm, ym; //Guarda coordenadas de x & y

//Variables y funciones para el grosor de la linea

document.getElementById("inputGrosor").addEventListener("input", gruesoLinea);

function gruesoLinea(){
    grosor = this.value;
    console.log(grosor);
}

//dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, grosor, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

//Funciones para los colores
function colorRojo(){
    colorcito = "#FF0D00";
    console.log("Rojo");
}

function colorAzul(){
    colorcito = "#0140FF";
    console.log("Azul");
}

function colorVerde(){
    colorcito = "#38FF01";
    console.log("Verde");
}

function colorAmarillo(){
    colorcito = "#FFEE00";
    console.log("Amarillo");
}

function colorMorado(){
    colorcito = "#E80CDF";
    console.log("Morado");
}

//Funciones para dibujar con mouse o touch


function dibujarMouse(evento){
    if(evento.buttons == 1){
        dibujarLinea(colorcito, grosor, xm, ym, evento.layerX, evento.layerY, papel);
        xm = evento.layerX;
        ym = evento.layerY;
        console.log("Esta dibujando!");
    }
}

//function pararMouse(evento){
//    estadoClick = 0;
//    xm = evento.layerX;
//    ym = evento.layerY;
//}

//funciones para el dibujo
function dibujarTeclado(evento){
    var movimiento = 1;
    switch(evento.keyCode){
        case teclas.UP[0,1]:
            dibujarLinea(colorcito, grosor, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN[0,1]:
            dibujarLinea(colorcito, grosor, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT[0,1]:
            dibujarLinea(colorcito, grosor, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT[0,1]:
            dibujarLinea(colorcito, grosor, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default: console.log("Otra tecla");
        break;
    }
}





