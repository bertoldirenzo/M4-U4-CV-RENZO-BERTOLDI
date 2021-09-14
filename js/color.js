function fondo(color){
    document.body.style.backgroundColor = color;
    document.getElementById("mensajeap").style.backgroundColor = color;
    document.getElementById("mensaje").style.backgroundColor = color;
    document.getElementById("listaaprobados").style.backgroundColor = color;
}
rojo.addEventListener('click', function() {
    fondo('red');   
});

azul.addEventListener('click', function () {
    fondo('blue')
});

verde.addEventListener('click', function () {
  fondo('green')
});