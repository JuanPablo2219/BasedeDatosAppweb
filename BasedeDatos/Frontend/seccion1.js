const APIURL = 'http://localhost:1337/api';

let form = document.querySelector(".form")

function displayQuestion(DATA) {
    fecthOptions(DATA.data[0].id).then(res => res.json()).then(res => console.log(res));
    DATA.data.forEach((question, index) => {
        console.log(question.attributes.descripcion);
        let label = document.createElement("label");
        label.innerHTML = question.attributes.descripcion
        if (index < 7) form.appendChild(label);
    });
}

async function fetchData(endpion) {
    try {
        const RESPONSE = await fetch(`${APIURL}/${endpion}`);
        const DATA = await RESPONSE.json();
        return DATA;

    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

function fecthOptions(id) {
    return fetch(APIURL + '/preguntas/' + id);
}

fetchData('preguntas')
    .then(DATA => {
        console.log("datosobtenido:", DATA.data);
        displayQuestion(DATA);
    });