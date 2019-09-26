// Import stylesheets
import './style.css';

var close = document.getElementsByClassName("close");
var list = document.querySelector('ul');
var todos = [];
var all = 0;
var deletedText = 0
var completedText = 'Completed tasks in your todo list : '
var AllText = 'Total number of tasks in your todo list : '
var PendingText = 'Pending tasks in your todo list : '
var input = document.getElementById("myInput");


document.getElementById('button').addEventListener('click', newElement );
document.getElementById('button').addEventListener('click', deleteElement );
list.addEventListener('click',checkElement);

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  debugger;
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("displayArea").appendChild(li);
    todos.push(inputValue);
    console.log(todos);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var cancel = document.createTextNode("\u00D7");
  span.setAttribute('id','close')
  span.className = "close";
  span.appendChild(cancel);
  li.appendChild(span);
}


function deleteElement(){
  for (var i = 0; i < close.length; i++) {
      close[i].onclick = function(i) {
        var div = this.parentElement;
        deletedText = div.textContent;
        console.log(deletedText);
        var a = document.getElementsByTagName(div).value
        //console.log(todos);
        deleteElementFromArray();
        div.remove();
      }
    }
}


function deleteElementFromArray(){
  var x = deletedText.substr(0,deletedText.length-1);
  var y = todos.indexOf(x);
  todos.splice(y,1)
  console.log(todos);
}


function checkElement(ev){
    if (ev.target.tagName === 'LI')
        ev.target.classList.toggle('checked');
}

document.getElementById('Btn1').addEventListener('click', event => {
    var check = document.getElementsByClassName('checked');
    alert(completedText + check.length);  
});

document.getElementById('Btn2').addEventListener('click', event => {
    alert(AllText + todos.length);
});

document.getElementById('Btn3').addEventListener('click', event => {
    var check = document.getElementsByClassName('checked');
    var pending = todos.length-check.length
    alert(PendingText + pending);
});