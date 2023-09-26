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


//EJERCICIO 2

//Perfil usuario: nombre, edad y descripción 

const user = {
    name: 'Name',
    age: 'Age',
    description: 'Description'
}

function createUser(user){
    document.getElementById('username').textContent = user.name;
    document.getElementById('age').textContent = user.age;
    document.getElementById('desc').textContent = user.description;
}

createUser(user);

//GUARDAR NOMBRE, EDAD Y DESCRIPCIÓN
const inputName = document.getElementById('name');
const userName = document.getElementById('username');
const inputAge = document.getElementById('ages');
const userAge = document.getElementById ('age');
const inputDescription = document.getElementById('description');
const userDescription = document.getElementById('desc');

//BOTÓN
const profileBtn = document.getElementById('ProfileBtn');

//Imprime al dar clic al botón
profileBtn.addEventListener('click',() => {
    userName.textContent = inputName.value;
    userAge.textContent = inputAge.value;
    userDescription.textContent = inputDescription.value;
})



//EJERCICIO
// 1. Agregar las bandas
// 2. Push
// evitar las bandas para el ejercicio 2
//Obtener la info del usuario desde inputs y mostrar en tarjetas 
//Desde un solo formulario puedo obtener (recordar función push a un array)


