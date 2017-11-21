window.addEventListener('load', begin);

var addList = document.getElementById('addList');
var form = document.getElementById('form');
var nameList = document.getElementById('name-list');
var button = document.getElementById('button-id');

function createList(event) {
  event.target.classList.toggle('display-none');
  form.classList.toggle('display-none');
}

function begin() {
  addList.addEventListener('click', createList)
}
/*function begin() {
  addList.addEventListener('click', newList)
  button.addEventListener('click', createList)
}
//verificamos si hay texto en el input
function createList(){
  if(nameList.value){
    form.classList.toggle('display-none'); //a todas las clase displaynone, oculta
    var div = document.createElement('a');
    a.innerHTML = nameList.value;
  }
}*/

//REPASO metodos que esperan que disparen el load(evento)
/*1° window.addEventListener('load', function(){ //crea un evento
});
2° window.addEventListener('load', begin) //creas un evento 
function begin(){ //funcion anonima
}
3° window.onload = begin; //llamas al evento
4° window.load = function(){} //crea un evento */