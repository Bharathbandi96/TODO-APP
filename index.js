// Import stylesheets
import './style.css';

var close = document.getElementsByClassName("close");
var todos = [];
var closed = 0;
var all = 0;
var completed = 0;
var x = 0;
var z = 0;
// var checkClose = 0;

document.getElementById('button').addEventListener('click', function () {
    var list = document.getElementById('myUL');
    list.innerHTML = ''; //resetting the list
    var todoInput = document.getElementById('myInput').value;
    todos.push(todoInput)
    

    // var item = document.createElement("li");
    
    for (var i = 0; i < todos.length; i++) {
      var listItem = document.createTextNode(todos[i]);
      var li = document.createElement("li");
      li.setAttribute("id",x)
      li.appendChild(listItem);
      document.getElementById("myInput").value = "";
      list.append(li);
      all = todos.length;
 
      var span = document.createElement("list");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    }
    x++;

    //console.log(todos1);

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
        console.log(todos.splice(integer,1,''));
        console.log(todos);
        div.style.display = "none";
        div.className = '';
        // todos1.pop();
        // closed++;
        //console.log(todos1);
      }
    }
    })
    
    // function checkbox(ele,indx,arr){
    //   document.getElementById('Btn1').addEventListener('click', event => {
    //   for(var i=0;i<arr.length;i++){
    //     if(ele in todos1)
    //       var check = document.getElementsByClassName('checked');
    //   }
    //   return check;  
    // });

    // } 

// Add a "checked" symbol when clicking on a list item

    var list = document.querySelector('ul');
    debugger;
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') 
        ev.target.classList.toggle('checked');
        //console.log(todos2.filter(checkbox).keys());
      });


    var completedText = 'Completed tasks in your todo list : '
    var AllText = 'Total number of tasks in your todo list : '
    var PendingText = 'Pending tasks in your todo list : '

    document.getElementById('Btn1').addEventListener('click', event => {
      var check = document.getElementsByClassName('checked');
      alert(completedText + check.length);  
    });

    // document.getElementById('Btn2').addEventListener('click',function(){location.reload()});

    document.getElementById('Btn2').addEventListener('click', event => {
        // var total = document.getElementsByTagName('LI');
        // total.length-closed;
        // var total = all-closed;
        alert(AllText + todos.length);
    });

    document.getElementById('Btn3').addEventListener('click', event => {
        var check = document.getElementsByClassName('checked');
        var pending = todos.length-check.length
        alert(PendingText + pending);
    });