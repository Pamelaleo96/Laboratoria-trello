window.addEventListener('load', begin);

var addList = document.getElementById('addList');
var form = document.getElementById('form');
var nameList = document.getElementById('name-list');
var button = document.getElementById('button-id');

function newList(event) {
  event.target.classList.toggle('display-none');
  form.classList.toggle('display-none');
}

function createList(event) {
  event.preventDefault();

  if(nameList.value) {
    form.classList.toggle('display-none');

    var title = nameList.value.toUpperCase();
    var titleElement = document.createElement('div');

    titleElement.textContent = title;

    form.parentElement.insertBefore(titleElement, form);

    var link = document.createElement("a");
    link.setAttribute("href", "#");

    var linkText = document.createTextNode("Añadir una tarea...");
    link.appendChild(linkText);

    /* link.addEventListener("click", createCard); */
    titleElement.parentElement.appendChild(link);
    //---añadimos en clase
    //1° agregamos el evento para ocultar (añadir lista) que se encuentra en el elemento a y poder mostrar el textarea
    link.addEventListener('click', newTask);
  }
}
//-------codigo agregado por mi
//2° paso 2: creamos los 3 elementos que contendra el texto y mostrara al textarea
function newTask (event) {
  event.target.classList.add('display-none');
  var form = document.createElement('form');
  var textArea = document.createElement('textarea');
  var button = document.createElement('input');
//3° paso : Añadir nodos al DOM
// asignar sus padres a los 3 elementos creados
  form.appendChild(textArea);
  form.appendChild(button);
  button.setAttribute('type', 'submit');
  button.value = 'agregar';
  //4° paso asignar sus padres a los 3 elementos creados
  event.target.parentElement.appendChild(form);
}
//-----terminamos la version 3 de trello

function begin() {
  addList.addEventListener('click', newList);
  button.addEventListener('click', createList);
}
