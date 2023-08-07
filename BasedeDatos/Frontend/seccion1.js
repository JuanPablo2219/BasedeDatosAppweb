const APIURL = 'http://localhost:1337/api';
const http = 'http://127.0.0.1:5500/BasedeDatos/Frontend/paginaP.html#';

let form = document.querySelector(".form");
let submitButton = document.querySelector('.submit-button');
let questionNames = [];
let title = document.querySelector('.title');
let questions = sessionStorage.getItem('questions');

function displayQuestion(DATA) {
    let labelFragment = document.createDocumentFragment();
    let optionFragment = document.createDocumentFragment();

    fecthOptions().then(res => res.json()).then(res => console.log(res));
    DATA.data.forEach((question, index) => {
        let label = document.createElement("label");
        label.innerHTML = question.attributes.descripcion;


        if (index < 7 && questions == "1") {
            console.log(question.attributes.descripcion);
            title.innerHTML = "¡ SECCIÓN EMOCIONALES !";
            createForm(question, label, optionFragment, labelFragment);
            form.appendChild(optionFragment);
        }
        if (index >= 7 && index < 14 && questions == "2") {
            title.innerHTML = "¡ SECCIÓN COGNITIVAS !";
            createForm(question, label, optionFragment, labelFragment);
            form.appendChild(optionFragment);
        }
        if (index >= 14 && index < 21 && questions == "3") {
            title.innerHTML = "¡ SECCIÓN FÍSICAS !";
            createForm(question, label, optionFragment, labelFragment);
            form.appendChild(optionFragment);
        }

    });

    form.appendChild(labelFragment);
}

function createForm(question, label, optionFragment, labelFragment) {
    let optionValue = 0;
    form.appendChild(label);
    questionNames.push(question.attributes.descripcion);
    question.attributes.ID.data.forEach(option => {
        let optionContainer = document.createElement('div');
        let radioButton = document.createElement('input');
        radioButton.type = "radio";
        radioButton.id = option.id;
        radioButton.value = optionValue.toString();
        radioButton.name = question.attributes.descripcion;
        let optionElement = document.createElement('label');
        optionElement.textContent = option.attributes.descripcion;
        optionElement.htmlFor = option.id;
        optionElement.className = "seccion1"

        optionContainer.appendChild(radioButton);
        optionContainer.appendChild(optionElement);

        optionFragment.appendChild(optionContainer);
        optionValue++;
    })
}

async function fetchData(endpion) {
    try {
        const RESPONSE = await fetch(`${APIURL}/${endpion}?populate=*`);
        const DATA = await RESPONSE.json();
        return DATA;

    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

function fecthOptions() {
    return fetch(APIURL + '/preguntas?populate=*');
}

function submitForm() {
    let completeForms = Number(sessionStorage.getItem('completeForms'));

    const formData = new FormData(form);
    let totalAdd = 0;

    for (let name of questionNames) {
        if (formData.get(name) === null) return;
    }

    questionNames.forEach(name => {
        totalAdd += Number(formData.get(name));
    })
    totalAdd += Number(sessionStorage.getItem('totalAdd'));
    sessionStorage.setItem('totalAdd', totalAdd.toString());
    completeForms = Number(completeForms) + 1;
    console.log(completeForms);
    sessionStorage.setItem('completeForms', completeForms.toString());
    console.log(totalAdd);
    sessionStorage.setItem('completedForm', questions);

    window.location.href = http;
}

fetchData('preguntas')
    .then(DATA => {
        console.log("datosobtenido:", DATA.data);
        displayQuestion(DATA);
    });