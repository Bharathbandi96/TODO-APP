import './style.css';

var close = document.getElementsByClassName("close");
var ulList = document.querySelector('ul');
var todos = [];
var all = 0;
var enterKeyCode = 13;
var onEmptyListShowMessage = 'OOPS... Your List Is Empty'
var onEmptyInputFiled = 'You must write something!'
var completedText = 'Completed tasks in your list : '
var allText = 'Total number of tasks in your list : '
var pendingText = 'Pending tasks in your list : '

function init(){
  attachEventListners();
  displayTodoListItems();
  isEmpty();
}

function attachEventListners(){
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
    if (event.keyCode === enterKeyCode) {
      todos.push(input);
      addItemsToLocalStorage();
      renderItemsFromLocalStorage();
      display(input);
      deleteItemFromList();
      inputFieldReset();
    }
}

function displayNewItem() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert(onEmptyInputFiled);
  } else {
    todos.push(inputValue);
    addItemsToLocalStorage();
    renderItemsFromLocalStorage();
    display(inputValue);
    isEmpty();
  }
  inputFieldReset();
}

function inputFieldReset(){
  document.getElementById("myInput").value = "";
  document.getElementById('myInput').focus();
}

function displayTodoListItems(){
  renderItemsFromLocalStorage();
  for(var i=0; i<todos.length; i++){
    display(todos[i]);
    isEmpty();
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
}

function isEmpty(){
  var hasItems = document.getElementById("displayArea").hasChildNodes();
  if(!hasItems){
    document.getElementById("displayArea").append(onEmptyListShowMessage);
  }
}

function addItemsToLocalStorage(){
  localStorage.setItem('myTodoItems', JSON.stringify(todos));
}

function renderItemsFromLocalStorage(){
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
  renderItemsFromLocalStorage();
  for (var i = 0; i < close.length; i++) {
      close[i].onclick = function(i) {
        var div = this.parentElement;     
        deleteItemFromArray(div.textContent);
        div.remove();
        addItemsToLocalStorage();
        isEmpty();
      }
  }
}

function deleteItemFromArray(deletedText){
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
