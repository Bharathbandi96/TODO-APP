// Import stylesheets
import './style.css';

var close = document.getElementsByClassName("close");
var todos = [];
var todos1= [];
var closed = 0;
var all = 0;
var completed = 0;
var checkClose = 0;


document.getElementById('button').addEventListener('click', function () {
    var list = document.getElementById('myUL');
    //list.innerHTML = ''; //resetting the list
    var todoInput = document.getElementById('myInput').value;
    todos.push(todoInput)

    // var item = document.createElement("li");
    for (var i = 0; i < todos.length; i++) {
      var listItem = document.createTextNode(todos[i]);
      var li = document.createElement("li");
      li.appendChild(listItem);
      document.getElementById("myInput").value = "";
      list.append(li);
      todos1.push(todoInput)
      all = todos1.length;
      todos.pop(todoInput);
    }

    console.log(todos1);


    var span = document.createElement("list");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    debugger;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        debugger;
        var div = this.parentElement;
        div.style.display = "none";
        //console.log(i);
        div.className = '';
        //todos1.pop();

        closed++;
      }}
    })

// Add a "checked" symbol when clicking on a list item

    var list = document.querySelector('ul');
    debugger;
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') 
        ev.target.classList.toggle('checked');
      });

    var completedText = 'The number of tasks completed are : '
    var AllText = 'The total number of tasks are : '
    var PendingText = 'The number of tasks pending are : '

    document.getElementById('Btn1').addEventListener('click', event => {
      var check = document.getElementsByClassName('checked');
      localStorage.clear;
      alert(completedText + check.length);  
    });

    // document.getElementById('Btn2').addEventListener('click',function(){location.reload()});

    document.getElementById('Btn2').addEventListener('click', event => {
        // var total = document.getElementsByTagName('LI');
        // total.length-closed;
        // var total = all-closed;
        alert(AllText + todos1.length);
    });

    document.getElementById('Btn3').addEventListener('click', event => {
        var check = document.getElementsByClassName('checked');
        var pending = todos1.length-check.length
        alert(PendingText + pending);
    });