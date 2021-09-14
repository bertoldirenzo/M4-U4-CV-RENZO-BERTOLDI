var mensaje = document.getElementById('mensaje');
var contador = document.getElementById('contador');

mensaje.addEventListener('input', function (e) {
    const target = e.target;
    var longitudMax = target.getAttribute('maxlength');
    var longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});