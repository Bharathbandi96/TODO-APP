// Import stylesheets
import './style.css';

var close = document.getElementsByClassName("close");
var todos = [];
var closed = 0;
var x = 0;
var z = 0;

document.getElementById('button').addEventListener('click', function () {
    var list = document.getElementById('myUL');
    list.innerHTML = '';
    var todoInput = document.getElementById('myInput').value;
    todos.push(todoInput)
    
    for (var i = 0; i < todos.length; i++) {
      var listItem = document.createTextNode(todos[i]);
      var li = document.createElement("li");
      li.setAttribute("id",x)
      li.appendChild(listItem);
      document.getElementById("myInput").value = "";
      list.append(li);
 
      var span = document.createElement("list");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    }
    x++;

    var span = document.createElement("list");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    debugger;
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function(i) {
        var div = this.parentElement;
        z = div.getAttribute('id');
        var integer = parseInt(z, 10);
        console.log(todos);
        div.style.display = "none";
        div.className = '';
         closed++;
      }
    }
    })

    var list = document.querySelector('ul');
    debugger;
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') 
        ev.target.classList.toggle('checked');

      });


    var completedText = 'Completed tasks in your todo list : '
    var AllText = 'Total number of tasks in your todo list : '
    var PendingText = 'Pending tasks in your todo list : '

    document.getElementById('Btn1').addEventListener('click', event => {
      var check = document.getElementsByClassName('checked');
      alert(completedText + check.length);  
    });

    document.getElementById('Btn2').addEventListener('click', event => {
        var total = todos.length-closed;
        alert(AllText + total);
    });

    document.getElementById('Btn3').addEventListener('click', event => {
        var check = document.getElementsByClassName('checked');
        var pending = todos.length-closed-check.length
        alert(PendingText + pending);
    });