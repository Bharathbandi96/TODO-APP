import './style.css';

var close = document.getElementsByClassName("close");
var ulList = document.querySelector('ul');
var todos = [];
var all = 0;
var deletedText = 0
var onEmptyListShowMessage = 'OOPS... Your List Is Empty'
var onEmptyInputFiled = 'You must write something!'
var completedText = 'Completed tasks in your todo list : '
var allText = 'Total number of tasks in your todo list : '
var pendingText = 'Pending tasks in your todo list : '

function init(){
  addEventListners();
  displayTodoListItems();
  ifListIsEmpty();
  //addItemOnEnter()
}

function addEventListners(){
  document.getElementById('button').addEventListener('click', displayNewItem);
  document.getElementById('myInput').addEventListener('keypress',addItemOnEnter);
  document.getElementById('button').addEventListener('click', deleteItemFromList );
  ulList.addEventListener('click',changeItemState);
  document.getElementById('Btn1').addEventListener('click', displayCompletedItemsCount);
  document.getElementById('Btn2').addEventListener('click', displayTotalItemsCount);
  document.getElementById('Btn3').addEventListener('click', displayPendingItemsCount);
}

function addItemOnEnter() {
  var input = document.getElementById("myInput").value;
    if (event.keyCode === 13) {
      todos.push(input);
      addItemsToLocalStorage();
      renderTodoListItems();
      display(input);
    }
}

function displayNewItem() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert(onEmptyInputFiled);
  } else {
    todos.push(inputValue);
    addItemsToLocalStorage();
    renderTodoListItems();
    display(inputValue);
  }
  document.getElementById("myInput").value = "";
  document.getElementById('myInput').focus();
  ifListIsEmpty();
}

function displayTodoListItems(){
  renderTodoListItems();
  for(var i=0; i<todos.length; i++){
    display(todos[i]);
    ifListIsEmpty();
    addItemsToLocalStorage();
    deleteItemFromList();
  }
}

function display(item){
  var li = document.createElement("li");
  var inputValue = item;
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  document.getElementById("displayArea").appendChild(li);
  var span = document.createElement("SPAN");
  var cancel = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(cancel);
  li.appendChild(span);
  ifListIsEmpty();
}

function ifListIsEmpty(){
  var hasItems = document.getElementById("displayArea").hasChildNodes();
  if(!hasItems){
    document.getElementById("displayArea").append(onEmptyListShowMessage);
  }
}

function addItemsToLocalStorage(){
  localStorage.setItem('myTodoItems', JSON.stringify(todos));
}

function renderTodoListItems(){
  var todoItems = localStorage.getItem('myTodoItems');
  if(todoItems!=null){
  todos = JSON.parse(todoItems);
  }
  return todos;
}

function changeItemState(ev){
  if (ev.target.tagName === 'LI')
    ev.target.classList.toggle('checked');
}

function deleteItemFromList(){
  renderTodoListItems();
  for (var i = 0; i < close.length; i++) {
      close[i].onclick = function(i) {
        var div = this.parentElement;
        deletedText = div.textContent;
        var a = document.getElementsByTagName(div).value
        deleteItemFromArray();
        div.remove();
        addItemsToLocalStorage();
        ifListIsEmpty();
      }
  }
}

function deleteItemFromArray(){
  var itemDeleted = deletedText.substr(0,deletedText.length-1);
  var itemIndex = todos.indexOf(itemDeleted);
  todos.splice(itemIndex,1)
}

function displayCompletedItemsCount(){
  var check = document.getElementsByClassName('checked');
  alert(completedText + check.length); 
}

function displayTotalItemsCount(){
  alert(allText + todos.length);
}

function displayPendingItemsCount(){
  var check = document.getElementsByClassName('checked');
  var pending = todos.length-check.length
  alert(pendingText + pending);
}

init();