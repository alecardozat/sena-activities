// EJERCICIO 2
const edadForm = document.getElementById('edad-form');
const inputEdad = document.getElementById('edad');
const contadorEdad = document.getElementById('contador-input-edad');

const cellMenores = document.getElementById('cell-menores');
const cellMayores = document.getElementById('cell-mayores');
const cellAdultosMayores = document.getElementById('cell-adultos-mayores');
const cellMinima = document.getElementById('cell-minima');
const cellMaxima = document.getElementById('cell-maxima');
const cellPromedio = document.getElementById('cell-promedio');

const edades = [];
const MAX_PERSONAS = 10;

edadForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const edad = parseInt(inputEdad.value, 10);
    edades.push(edad);
    edadForm.reset();

    if(edades.length < MAX_PERSONAS){
        contadorEdad.textContent = edades.length + 1;
    }else{
        inputEdad.disabled = true;
        edadForm.querySelector('button').disabled = true;
        contadorEdad.parentElement.textContent = '10 edades ingresadas';
    }
    checkEdades();
});

function checkEdades(){
    const menores = edades.reduce((prev, curr)=> curr < 18 ? ++prev : prev, 0);
    const mayores = edades.reduce((prev, curr)=> curr >= 18 ? ++prev : prev, 0);
    const adultosMayores = edades.reduce((prev, curr)=> curr >= 60 ? ++prev : prev, 0);

    const minima = edades.reduce((prev, curr)=> prev < curr ? prev : curr, edades[0]);
    const maxima = edades.reduce((prev, curr) => prev > curr ? prev : curr, edades[0]);
    const promedio = edades.reduce((prev, curr) => prev + curr, 0) / edades.length;

    cellMenores.textContent = menores;
    cellMayores.textContent = mayores;
    cellAdultosMayores.textContent = adultosMayores;
    cellMinima.textContent = minima;
    cellMaxima.textContent = maxima;
    cellPromedio.textContent = promedio.toFixed(2);
}