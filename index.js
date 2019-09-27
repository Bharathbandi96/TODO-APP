// Import stylesheets
import './style.css';

var close = document.getElementsByClassName("close");
var list = document.querySelector('ul');
var todos = [];
var all = 0;
var deletedText = 0
var completedText = 'Completed tasks in your todo list : '
var allText = 'Total number of tasks in your todo list : '
var pendingText = 'Pending tasks in your todo list : '

function init(){
  todoEventListners();
  displayTodoListItems();
}

function newElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    todos.push(inputValue);
    addItemsToLocalStorage();
    getTodoListItems();
    displayTodoListItems();
  }
  document.getElementById("myInput").value = "";
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
      }
  }
}

function deleteElementFromArray(){
  var itemDeleted = deletedText.substr(0,deletedText.length-1);
  var itemIndex = todos.indexOf(itemDeleted);
  todos.splice(itemIndex,1)
}

function displayTodoListItems(){
  getTodoListItems();
  list.innerHTML = '';
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
    getTodoListItems();
    deleteElement();
  }
}

function displayCompletedItems(){
  var check = document.getElementsByClassName('checked');
  alert(completedText + check.length); 
}

function displayTotalIdems(){
  alert(allText + todos.length);
}

function displayPendingItems(){
  var check = document.getElementsByClassName('checked');
  var pending = todos.length-check.length
  alert(pendingText + pending);
}

function todoEventListners(){
  document.getElementById('button').addEventListener('click', newElement );
  document.getElementById('button').addEventListener('click', deleteElement );
  list.addEventListener('click',checkElement);
  document.getElementById('Btn1').addEventListener('click', displayCompletedItems);
  document.getElementById('Btn2').addEventListener('click', displayTotalIdems);
  document.getElementById('Btn3').addEventListener('click', displayPendingItems);
}

init();