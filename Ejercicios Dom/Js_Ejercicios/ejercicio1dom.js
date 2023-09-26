//Zyanya
//obtner elementos
//Id
const title = document.getElementById('title1');
//Clase obtenemos varios elementos que coincidan
const subtitle = document.getElementsByClassName ('Subtitulo')
// QuerySelector regresa el primer dato que coincide puede ser un ID o una clase
const secondTitle = document.querySelector('.Subtitulo');
//querryselector all obtiene una lista de nodos
const subtitles = document.querySelectorAll('.Subtitulo');


console.log(title, subtitle, subtitles);

//secondTitle.value = "DOM API"; 
secondTitle.innerHTML = "DOM API";


// Ejercicio1 

//////////////////////////////////////
// -Obtener la información
// -Crear un container para cada perfil (Tarjeta con la clase de profile)
// -Crear elemento para user _name
// """ para descripción - description
// """ para edad - age
// """" lista de bandas --> Iterar por cada banda 
//////////////////////////////////7//

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

const CARD_SECTION = document.getElementById('profiles');


const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile','container'); //Podemos enviar cuantos parámetros queramos
    return card;
}

const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        bands: []
    }   
    return userElements;
}


const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age;
    userElements.description.textContent = user.description;
    //userElements.bands.textContent = user.bands;



   const bandList = user.fav_music.bands.map(e => {
        const pElement = document.createElement('p');
        pElement.textContent = e; 
        return pElement;
    })

    userElements.bands = bandList;
    return userElements;
}


const renderElements =(card, elements) => {
    card.append(elements.user_name, elements.age, elements.description);
    
    const bandsContainer = document.createElement('div');
    bandsContainer.classList.add('bands');
    elements.bands.forEach(e => {
        bandsContainer.append(e);
    });
    card.append(bandsContainer);
}


users.forEach(user => {
    const card = createCard();
    const userElements = createDescription();
    
    const elementsWithData = populateElements (user, userElements);
    renderElements (card, elementsWithData);
    CARD_SECTION.append(card);

})

//EJERCICIO
// 1. Agregar las bandas



/*const ul = document.getElementById('bands');

        user.bands.forEach(band => {
        const li =  document.createElement('li');
        li.textContent = band; 
        ul.appendChild(li);
        })*/