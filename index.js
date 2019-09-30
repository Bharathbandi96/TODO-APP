import './style.css';

var close = document.getElementsByClassName("close");
var ulList = document.querySelector('ul');
var todos = [];
var all = 0;
var deletedText = 0
var completedText = 'Completed tasks in your todo list : '
var allText = 'Total number of tasks in your todo list : '
var pendingText = 'Pending tasks in your todo list : '

function init(){
  todoEventListners();
  displayTodoListItems();
  todoHasItems();
  //addItemOnEnter()
}

function todoEventListners(){
  document.getElementById('button').addEventListener('click', newElement );
  //document.getElementById('button').addEventListener('keypress',addItemOnEnter);
  document.getElementById('button').addEventListener('click', deleteElement );
  ulList.addEventListener('click',checkElement);
  document.getElementById('Btn1').addEventListener('click', displayCompletedItems);
  document.getElementById('Btn2').addEventListener('click', displayTotalItems);
  document.getElementById('Btn3').addEventListener('click', displayPendingItems);
}

// function addItemOnEnter() {
//   var input = document.getElementById("myInput").value;
//   input.addEventListener("keyup", function(event) {
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13) {
//       document.getElementById("button").addEventListener('click',newElement);
//     }
//   });
// }

function newElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    todos.push(inputValue);
    addItemsToLocalStorage();
    getTodoListItems();
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    document.getElementById("displayArea").appendChild(li);
    var span = document.createElement("SPAN");
    var cancel = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cancel);
    li.appendChild(span);
    todoHasItems();
  }
  document.getElementById("myInput").value = "";
}

function displayTodoListItems(){
  getTodoListItems();
  for(var i=0; i<todos.length; i++){
    var li = document.createElement("li");
    var inputValue = todos[i];
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    document.getElementById("displayArea").appendChild(li);
    var span = document.createElement("SPAN");
    var cancel = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cancel);
    li.appendChild(span);
    addItemsToLocalStorage();
    deleteElement();
  }
}

function todoHasItems(){
  var hasItems = document.getElementById("displayArea").hasChildNodes();
  if(!hasItems)
  	document.getElementById("displayArea").append('No tasks right now... Enjoy');
}

function addItemsToLocalStorage(){
  localStorage.setItem('myTodoItems', JSON.stringify(todos));
}

function getTodoListItems(){
  var todoItems = localStorage.getItem('myTodoItems');
  if(todoItems!=null){
  todos = JSON.parse(todoItems);
  }
  return todos;
}

function checkElement(ev){
  if (ev.target.tagName === 'LI')
    ev.target.classList.toggle('checked');
}

function deleteElement(){
  getTodoListItems();
  for (var i = 0; i < close.length; i++) {
      close[i].onclick = function(i) {
        var div = this.parentElement;
        deletedText = div.textContent;
        var a = document.getElementsByTagName(div).value
        deleteElementFromArray();
        div.remove();
        addItemsToLocalStorage();
        todoHasItems();
      }
  }
}

function deleteElementFromArray(){
  var itemDeleted = deletedText.substr(0,deletedText.length-1);
  var itemIndex = todos.indexOf(itemDeleted);
  todos.splice(itemIndex,1)
}

function displayCompletedItems(){
  var check = document.getElementsByClassName('checked');
  alert(completedText + check.length); 
}

function displayTotalItems(){
  alert(allText + todos.length);
}

function displayPendingItems(){
  var check = document.getElementsByClassName('checked');
  var pending = todos.length-check.length
  alert(pendingText + pending);
}

init();