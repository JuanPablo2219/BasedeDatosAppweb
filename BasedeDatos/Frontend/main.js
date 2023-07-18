document.addEventListener("DOMContentLoaded", async () => {
    const APIURL = 'http://localhost:1337/';


    try {
        const RESPONSE = await fetch(`${APIURL}/Preguntas`);
        const DATA = await RESPONSE.json();
        console.log(DATA);

    } catch (error) {
        console.log('Error al obtener datos');
    }
});


const QUESTION =  [];

const  APPELEMENT = document.getElementById('seccion-one');

QUESTION.forEach(item => {
    const LIST = document.createElement('li');
    LIST.textContent = item.descibcion;

    APPELEMENT.appendChild(LIST)
})
