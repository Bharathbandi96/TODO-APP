// Import stylesheets
import './style.css';

var close = document.getElementsByClassName("close");
var list = document.querySelector('ul');
var todos = [];
var all = 0;
var completedText = 'Completed tasks in your todo list : '
var AllText = 'Total number of tasks in your todo list : '
var PendingText = 'Pending tasks in your todo list : '


document.getElementById('button').addEventListener('click', newElement );
document.getElementById('button').addEventListener('click', deleteElement );
list.addEventListener('click',checkElement);

var input = document.getElementById("myInput");

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

  var span = document.createElement("Button");
  var cancel = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(cancel);
  li.appendChild(span);
}

function deleteElement(){
  for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        console.log(i);
        todos.splice(i,1);
        var div = this.parentElement;
        console.log(todos);
        div.remove();
      }
    }
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