// Import stylesheets
import './style.css';


// Create a "close" button and append it to each list item


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }

  }
 
    var todos = [];
    var todos1= [];
    //var count=0;
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
          todos.pop(todoInput);
        }
      console.log(todos1);
      var span = document.createElement("list");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
      }}
    })




// Add a "checked" symbol when clicking on a list item
var count=0;
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




