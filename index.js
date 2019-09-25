// Import stylesheets
import './style.css';

var close = document.getElementsByClassName("close");
var list = document.querySelector('ul');
var todos = [];
// var allTodos = [];
// var deleted = [];
// var closed = [];
var all = 0;
var setAttr = 0;
var getAttr = 0;
var completedText = 'Completed tasks in your todo list : '
var AllText = 'Total number of tasks in your todo list : '
var PendingText = 'Pending tasks in your todo list : '


document.getElementById('button').addEventListener('click', newElement );
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
  span.className = "close";
  span.appendChild(cancel);
  li.appendChild(span);
}

document.getElementById('button').addEventListener('click', deleteElement );

function deleteElement(){
  for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        console.log(todos.splice(i,1));
        div.remove();
      }
    }
}



list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI')
      ev.target.classList.toggle('checked');
});


    
document.getElementById('Btn1').addEventListener('click', event => {
    var check = document.getElementsByClassName('checked');
    alert(completedText + check.length);  
});

document.getElementById('Btn2').addEventListener('click', event => {
    alert(AllText + allTodos.length);
});

document.getElementById('Btn3').addEventListener('click', event => {
    var check = document.getElementsByClassName('checked');
    var pending = allTodos.length-check.length
    alert(PendingText + pending);
});