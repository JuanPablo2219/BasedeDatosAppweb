const APIURL = 'http://localhost:1337/api';

async function fetchData(endpion) {
    try {
        const RESPONSE = await fetch(`${APIURL}/${endpion}`);
        const DATA = await RESPONSE.json();
        return DATA;

    } catch (error) {
        console.log('Error fetching data:', error);
    }
}



function displayData(DATA) {
    let a = document.createElement('div');

    const DATA_CONTAINER = document.getElementById('seccion-one');
    DATA_CONTAINER.innerHTML = JSON.stringify(DATA, null, 2);
    console.log(DATA.data[0].attributes.descripcion)

    DATA_CONTAINER.appendChild(a);
}

fetchData('preguntas')
    .then(DATA => {
        console.log("datos obtenido:", DATA);
        displayData(DATA);
    });