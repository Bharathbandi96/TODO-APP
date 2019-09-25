// Import stylesheets
import './style.css';
var todos = [];
var todos1 = [];
var closed = 0;
var z = 0;
var a;

document.getElementById('button').addEventListener('click', function () {
    var list = document.getElementById('myUL');
    list.innerHTML = '';
    var todoInput = document.getElementById('myInput').value;
    todos.push(todoInput);
    todos1.push(todoInput);
    
    for (var i = 0; i < todos.length; i++) {
      var listItem = document.createTextNode(todos[i]);
      var li = document.createElement("li");
      li.setAttribute("id",i)
      li.appendChild(listItem);
      document.getElementById("myInput").value = "";
      list.append(li);
 
      var span = document.createElement("list");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
      
    }
//console.log(todos)
    
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function(i) {
        var div = this.parentElement;
        z = div.getAttribute('id');
        var integer = parseInt(z, 10);
        //console.log(integer)
        a = todos1.splice(z,1,'');
        //console.log(typeof(todos1));
        // todos = todos1.filter(test);
        // console.log(todos);
        console.log(todos.indexOf(a));
        div.style.display = "none";
        div.className = '';
        closed++;
      }
    }
    })
    
    function test(ele,indx,arr){
      if(arr[indx] != ''){
        return ele;
      }
    }
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
        var total = todos.length-closed;
        alert(AllText + total);
    });

    document.getElementById('Btn3').addEventListener('click', event => {
        var check = document.getElementsByClassName('checked');
        var pending = todos.length-closed-check.length
        alert(PendingText + pending);
    });