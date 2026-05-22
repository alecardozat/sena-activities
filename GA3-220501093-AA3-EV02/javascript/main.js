// EJERCICIO 1
const figuraSelector = document.getElementById('figura-selector');
const figureInput = document.getElementById('figure-form');
const areaOutput = document.getElementById('area-output');
const perimeterOutput = document.getElementById('perimeter-output');

const canvas = document.getElementById('figura');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 3;
ctx.font = 'bold 20px sans-serif';

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const FIGURAS = {
    circulo: {
        inputs: ['radio'],
        calc: (data) => ({ area: Math.PI * data.radio ** 2, perimetro: 2 * Math.PI * data.radio })
    },
    cuadrado: {
        inputs: ['lado'],
        calc: (data) => ({ area: data.lado ** 2, perimetro: 4 * data.lado })
    },
    rectangulo: {
        inputs: ['base', 'altura'],
        calc: (data) => ({ area: data.base * data.altura, perimetro: 2 * (data.base + data.altura) })
    },
    triangulo: {
        inputs: ['base', 'altura', 'ladoA', 'ladoB'],
        calc: (data) => ({ area: (data.base * data.altura) / 2, perimetro: data.base + data.ladoA + data.ladoB })
    }
}

figureInput.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(figureInput);
    const values = Object.fromEntries(formData.entries());

    const numericValues = {};
    for (let key in values) numericValues[key] = parseFloat(values[key]);

    const result = FIGURAS[figuraSelector.value].calc(numericValues);

    areaOutput.innerText = result.area.toFixed(2);
    perimeterOutput.innerText = result.perimetro.toFixed(2);
});

printCircle();

figuraSelector.addEventListener('change', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const option = event.target.value;
    switch (option) {
        case 'circulo':
            printCircle();
            break;
        case 'cuadrado':
            printSquare();
            break;
        case 'rectangulo':
            printRectangle();
            break;
        case 'triangulo':
            printTriangle();
            break;
    }
});

function printCircle() {
    updateFigureForm('circulo');
    const radius = 120;

    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radius, radius, 0, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.stroke();

    ctx.fillText('r', centerX + (radius / 2), centerY - 10);
}

function printSquare() {
    updateFigureForm('cuadrado');
    const size = 200;
    const x = centerX - (size / 2);
    const y = centerY - (size / 2);

    ctx.beginPath();
    ctx.rect(x, y, size, size);
    ctx.closePath();
    ctx.stroke();

    ctx.fillText('a', x + size + 10, centerY + 5);
}

function printRectangle() {
    updateFigureForm('rectangulo');
    const width = 300;
    const height = 150;
    const x = centerX - (width / 2);
    const y = centerY - (height / 2);

    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.closePath();
    ctx.stroke();

    ctx.fillText('a', x + width + 10, centerY + 10);
    ctx.fillText('b', centerX, y + height + 25);
}

function printTriangle() {
    updateFigureForm('triangulo');
    const base = 300;
    const height = 200;

    const topX = centerX;
    const topY = centerY - (height / 2);

    const bottomY = centerY + (height / 2);
    const leftX = centerX - (base / 2);
    const rightX = centerX + (base / 2);

    ctx.beginPath();
    ctx.moveTo(topX, topY);
    ctx.lineTo(leftX, bottomY);
    ctx.lineTo(rightX, bottomY);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(topX, topY);
    ctx.lineTo(topX, bottomY);
    ctx.stroke();

    ctx.fillText('h', topX + 10, centerY + 20);
    ctx.fillText('a', leftX + (base / 4) - 20, centerY - 10);
    ctx.fillText('b', rightX - (base / 4) + 10, centerY - 10);
    ctx.fillText('base', centerX, bottomY + 26);
}

function updateFigureForm(figura) {
    figureInput.innerHTML = '';
    const config = FIGURAS[figura];

    config.inputs.forEach(inputName => {
        const label = document.createElement('label');
        label.innerText = `${inputName}: `;

        const input = document.createElement('input');
        input.type = 'number';
        input.name = inputName;
        input.required = true;
        input.min = 1;

        const div = document.createElement('div');
        div.appendChild(label);
        div.appendChild(input);

        figureInput.appendChild(div);
    });

    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.innerHTML = 'INGRESAR';
    figureInput.appendChild(btn);
}

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

edadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const edad = parseInt(inputEdad.value, 10);
    edades.push(edad);
    edadForm.reset();

    if (edades.length < MAX_PERSONAS) {
        contadorEdad.textContent = edades.length + 1;
    } else {
        inputEdad.disabled = true;
        edadForm.querySelector('button').disabled = true;
        contadorEdad.parentElement.textContent = '10 edades ingresadas';
    }
    checkEdades();
});

function checkEdades() {
    const menores = edades.reduce((prev, curr) => curr < 18 ? ++prev : prev, 0);
    const mayores = edades.reduce((prev, curr) => curr >= 18 ? ++prev : prev, 0);
    const adultosMayores = edades.reduce((prev, curr) => curr >= 60 ? ++prev : prev, 0);

    const minima = edades.reduce((prev, curr) => prev < curr ? prev : curr, edades[0]);
    const maxima = edades.reduce((prev, curr) => prev > curr ? prev : curr, edades[0]);
    const promedio = edades.reduce((prev, curr) => prev + curr, 0) / edades.length;

    cellMenores.textContent = menores;
    cellMayores.textContent = mayores;
    cellAdultosMayores.textContent = adultosMayores;
    cellMinima.textContent = minima;
    cellMaxima.textContent = maxima;
    cellPromedio.textContent = promedio.toFixed(2);
}

// EJERCICIO 3
const formVectores = document.getElementById('vector-form');
const inputVector = document.getElementById('input-vector');
const vectorResult = document.getElementById('resultado-vector');
const vector1 = document.getElementById('displayV1');
const vector2 = document.getElementById('displayV2');
const warning = formVectores.querySelector('.warning');
const spanCounter = document.getElementById('counter');


let v1 = [];
let v2 = [];
const SIZE_VECTOR = 5;

formVectores.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = parseInt(inputVector.value, 10);

    if (window.getComputedStyle(warning).visibility === 'visible') {
        warning.style.visibility = 'hidden';
    }

    if (v1.length < SIZE_VECTOR) {
        if (v1.length > 0 && input <= v1[v1.length - 1]) {
            showVectorAlert();
            return;
        }
        v1.push(input);
        vector1.innerText = JSON.stringify(v1);
    } else {
        if (v2.length > 0 && input <= v2[v2.length - 1]) {
            showVectorAlert();
            return;
        }
        v2.push(input);
        vector2.innerText = JSON.stringify(v2);
    }

    const totalIngresados = v1.length + v2.length;

    if (totalIngresados < (SIZE_VECTOR * 2)) {
        spanCounter.innerText = totalIngresados + 1;
    } else {
        spanCounter.innerText = "Finalizado";
    }

    if (totalIngresados === (SIZE_VECTOR * 2)) {
        inputVector.disabled = true;
        formVectores.querySelector('button').disabled = true;
        mezclarVectores();
    }

    formVectores.reset();
});

function showVectorAlert() {
    warning.style.visibility = 'visible';
}

function mezclarVectores() {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < v1.length && j < v2.length) {
        if (v1[i] < v2[j]) {
            result.push(v1[i]);
            i++;
        } else {
            result.push(v2[j]);
            j++;
        }
    }

    vectorResult.innerText = result.concat(v1.slice(i)).concat(v2.slice(j));
}

// EJERCICIO 4
const formArtist = document.getElementById('form-artist');
const btnSearch = document.getElementById('btn-search');
const searchIndex = document.getElementById('search-index');
const resultDisplay = document.getElementById('result-display');

const personas = [];
const MAX_QUESTERS = 6;  

class Persona {
    constructor(data){
        Object.assign(this, data);
    }
}

formArtist.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formArtist);
    const value = Object.fromEntries(formData.entries());
    const persona = new Persona(value);

    personas.push(persona);

    if(personas.length === 6){
        formArtist.querySelectorAll('input').forEach(i => i.disabled = true);
        formArtist.querySelector('button').disabled = true;
    }
    formArtist.reset();
});

btnSearch.addEventListener('click', () => {
    const index = parseInt(searchIndex.value);
    
    if (isNaN(index) || index < 0 || index >= personas.length) {
        resultDisplay.innerHTML = `<p style="color:red;">Error: Índice inválido.</p>`;
        return;
    }

    const p = personas[index];
    
    resultDisplay.innerHTML = `
        <div class="card">
            <h4>Información de ${p.name}</h4>
            <p><strong>Cédula:</strong> ${p.dni}</p>
            <p><strong>Cédula:</strong> ${p.email}</p>
            <p><strong>Cédula:</strong> ${p.birthdate}</p>
            <p><strong>Ciudad de Residencia:</strong> ${p.curr_city}</p>
            <p><strong>Ciudad de Residencia:</strong> ${p.origen_city}</p>
            <p><strong>Artista Favorito:</strong> ${p.fav_artist}</p>
            <p><strong>Canciones:</strong> ${p.song1}, ${p.song2}, ${p.song3}.</p>
        </div>
    `;
});