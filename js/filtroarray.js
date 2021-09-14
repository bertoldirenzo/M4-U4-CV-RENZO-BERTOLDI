var alumnos = [

    {

        nombre: 'Juan Gomez',

        nota: 7,

    }, {

        nombre: 'Pedro Rodriguez',

        nota: 4,

    }, {

        nombre: 'Roxana García',

        nota: 8,

    }, {

        nombre: 'Luciano Lopez',

        nota: 5,

    }, {

        nombre: 'Fernanda Gimenez',

        nota: 6,

    }, {

        nombre: 'Florencia Martinez',

        nota: 10,

    }, {

        nombre: 'Raul Sanchez',

        nota: 7,

    }, {

        nombre: 'Sandra Figueroa',

        nota: 8,

    }

];

listaaprobados.addEventListener('click', function () {
    document.getElementById("mensajeap").value = '';
    aprobados = alumnos.filter(num => num.nota >= 7);
    for (i = 0; i < aprobados.length; i++) {
        document.getElementById("mensajeap").value += aprobados[i].nombre + ' aprobó con un ' + aprobados[i].nota + '. ' + "\n";
    }
});

window.addEventListener('load', function () {
    document.getElementById("mensajeap").value = '';
    document.getElementById("mensaje").value = '';
}
)