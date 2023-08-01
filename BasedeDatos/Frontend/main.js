let myHeaders = new Headers({
    'Content-type': 'application/json',
})

let registerSection = document.querySelector('.cuadro1');
let allSections = document.querySelector('.all-sections');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');

let completedForm = sessionStorage.getItem('completedForm');

let inputName = document.querySelector('#Name');
let inputLastName = document.querySelector('#SecondName');
let inputDate = document.querySelector('#date');
let inputGenre = document.querySelector('#Genero');
let inputcareer = document.querySelector('#Carrera');
let inputCycle = document.querySelector('#Number');

function submitResults(){
    if(sessionStorage.getItem('completeForms') === '3'){
        registerSection.style.display = "block";
        allSections.style.display = "none";
        button1.textContent = "Enviar Resultados";
        sessionStorage.setItem('completeForms', "valid");
    }else
    if(sessionStorage.getItem('completeForms') === 'valid'){
        let totalPoints = sessionStorage.getItem('totalAdd');
        fetch('http://localhost:1337/api/tests', {
            method:'POST',
            headers: myHeaders,
            body: JSON.stringify({
                "data": {
                    "Nombres": inputName.value,
                    "Apellidos": inputLastName.value,
                    "Genero": inputGenre.value,
                    "Carrera": inputcareer.value,
                    "Fecha": inputDate.value,
                    "Ciclo": inputCycle.value,
                    "Puntos": totalPoints.toString()
                }
            })
        }).then(res=>res.json()).then(res=> {
            console.log(res);
            sessionStorage.clear();
            location.href = 'http://127.0.0.1:5500/BasedeDatos/Frontend/index.html'
        });
    }

}

if(!sessionStorage.getItem('completeForms')){
    sessionStorage.setItem('completeForms', '0');
}

registerSection.style.display = "none";

/* registerSection.style.display = "none"; */



function hiddenButtons(){
    if(completedForm === "1" || sessionStorage.getItem('displayButton2')){
        button2.style.display = "none";
        sessionStorage.setItem('displayButton2', "false");
    }
    if(completedForm === "2" || sessionStorage.getItem('displayButton3')){
        button3.style.display = "none";
        sessionStorage.setItem('displayButton3', "false");
    }
    if(completedForm === "3" || sessionStorage.getItem('displayButton4')){
        button4.style.display = "none";
        sessionStorage.setItem('displayButton4', "false");
    }

}
hiddenButtons();
console.log(button2);



























    
    // jasson,stringlive

    // const DATA_CONTAINER = {
    //     "data": [
    //         { "id": 6, "attributes": { "descripcion": "1.", "createdAt": "2023-07-17T13:49:52.783Z", "updatedAt": "2023-07-18T01:18:58.274Z", "publishedAt": "2023-07-18T01:18:58.270Z" } },
    //         { "id": 7, "attributes": { "descripcion": "2.", "createdAt": "2023-07-17T13:57:33.354Z", "updatedAt": "2023-07-17T13:57:33.354Z", "publishedAt": "2023-07-18T01:21:19.627Z" } },
    //         { "id": 8, "attributes": { "descripcion": "3.", "createdAt": "2023-07-17T14:19:21.846Z", "updatedAt": "2023-07-17T14:19:21.846Z", "publishedAt": "2023-07-18T01:21:19.627Z" } },
    //         { "id": 9, "attributes": { "descripcion": "4.", "createdAt": "2023-07-17T14:34:42.692Z", "updatedAt": "2023-07-17T14:34:42.692Z", "publishedAt": "2023-07-18T01:21:19.627Z" } },
    //         { "id": 10, "attributes": { "descripcion": "5.", "createdAt": "2023-07-17T14:34:49.834Z", "updatedAt": "2023-07-17T14:34:49.834Z", "publishedAt": "2023-07-18T01:21:19.627Z" } }, 
    //         { "id": 11, "attributes": { "descripcion": "6.", "createdAt": "2023-07-17T14:34:59.425Z", "updatedAt": "2023-07-17T14:35:18.886Z", "publishedAt": "2023-07-18T01:21:19.627Z" } },
    //         { "id": 12, "attributes": { "descripcion": "7.", "createdAt": "2023-07-17T14:35:30.237Z", "updatedAt": "2023-07-17T14:35:30.237Z", "publishedAt": "2023-07-18T01:21:19.627Z" } },
    //         { "id": 13, "attributes": { "descripcion": "8.", "createdAt": "2023-07-17T14:35:39.997Z", "updatedAt": "2023-07-17T14:35:39.997Z", "publishedAt": "2023-07-18T01:21:19.627Z" } },
    //         { "id": 14, "attributes": { "descripcion": "9.", "createdAt": "2023-07-17T14:35:46.138Z", "updatedAt": "2023-07-17T14:35:46.138Z", "publishedAt": "2023-07-18T01:21:24.748Z" } },
    //         { "id": 15, "attributes": { "descripcion": "10.", "createdAt": "2023-07-17T14:35:52.189Z", "updatedAt": "2023-07-17T14:35:52.189Z", "publishedAt": "2023-07-18T01:21:14.662Z" } },
    //         { "id": 16, "attributes": { "descripcion": "11.", "createdAt": "2023-07-17T14:36:10.471Z", "updatedAt": "2023-07-17T14:36:10.471Z", "publishedAt": "2023-07-18T01:21:14.662Z" } },
    //         { "id": 17, "attributes": { "descripcion": "12.", "createdAt": "2023-07-17T14:36:15.935Z", "updatedAt": "2023-07-17T14:36:15.935Z", "publishedAt": "2023-07-18T01:21:14.662Z" } },
    //         { "id": 18, "attributes": { "descripcion": "13.", "createdAt": "2023-07-17T14:36:22.527Z", "updatedAt": "2023-07-17T14:36:22.527Z", "publishedAt": "2023-07-18T01:21:14.662Z" } },
    //         { "id": 19, "attributes": { "descripcion": "14.", "createdAt": "2023-07-17T14:36:29.725Z", "updatedAt": "2023-07-17T14:36:29.725Z", "publishedAt": "2023-07-18T01:21:14.662Z" } },
    //         { "id": 20, "attributes": { "descripcion": "15.", "createdAt": "2023-07-17T14:36:35.619Z", "updatedAt": "2023-07-17T14:36:35.619Z", "publishedAt": "2023-07-18T01:21:14.662Z" } },
    //         { "id": 21, "attributes": { "descripcion": "16", "createdAt": "2023-07-17T14:36:41.003Z", "updatedAt": "2023-07-17T14:36:41.003Z", "publishedAt": "2023-07-18T01:21:14.662Z" } },
    //         { "id": 22, "attributes": { "descripcion": "17.", "createdAt": "2023-07-17T14:36:49.674Z", "updatedAt": "2023-07-17T14:36:49.674Z", "publishedAt": "2023-07-18T01:21:14.662Z" } },
    //         { "id": 23, "attributes": { "descripcion": "18.", "createdAt": "2023-07-17T14:36:55.725Z", "updatedAt": "2023-07-17T14:36:58.925Z", "publishedAt": "2023-07-18T01:21:14.662Z" } },
    //         { "id": 24, "attributes": { "descripcion": "19.", "createdAt": "2023-07-17T14:37:55.265Z", "updatedAt": "2023-07-17T14:37:55.265Z", "publishedAt": "2023-07-18T01:21:19.627Z" } },
    //         { "id": 25, "attributes": { "descripcion": "20.", "createdAt": "2023-07-17T14:38:01.380Z", "updatedAt": "2023-07-17T14:38:01.380Z", "publishedAt": "2023-07-18T01:21:19.627Z" } },
    //         { "id": 26, "attributes": { "descripcion": "21.", "createdAt": "2023-07-17T14:38:08.222Z", "updatedAt": "2023-07-17T14:38:08.222Z", "publishedAt": "2023-07-18T01:21:19.627Z" } },
    //     ],
    //     "meta": {
    //         "pagination": { "page": 1, "pageSize": 25, "pageCount": 1, "total": 21 }
    //     }
    // };