// Import stylesheets
import './style.css';

var close = document.getElementsByClassName("close");
var todos = [];
var allTodos = [];
var deleted = [];
var closed = [];
var all = 0;
var setAttr = 0;
var getAttr = 0;

document.getElementById('button').addEventListener('click', function () {
    var list = document.getElementById('displayArea');
    //list.innerHTML = ''; //resetting the list
    var todoInput = document.getElementById('myInput').value;
    todos.push(todoInput)
    for (var i = 0; i < todos.length; i++) {
      var listItem = document.createTextNode(todos[i]);
      var li = document.createElement("li");
      li.setAttribute("id",setAttr)
      li.appendChild(listItem);
      document.getElementById("myInput").value = "";
      list.append(li);
      allTodos.push(todoInput)
      closed.push(todoInput)
      todos.pop(todoInput);
    }
    setAttr++;

    var span = document.createElement("list");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function(i) {
        var div = this.parentElement;
        getAttr = div.getAttribute('id');
        deleted.unshift(closed[getAttr]);
        console.log(deleted);
        div.style.display = "none";
        div.className = '';
        allTodos.pop();
      }
    }
    })

    var list = document.querySelector('ul');
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
        alert(AllText + allTodos.length);
    });

    document.getElementById('Btn3').addEventListener('click', event => {
        var check = document.getElementsByClassName('checked');
        var pending = allTodos.length-check.length
        alert(PendingText + pending);
    });