// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;


// document.addEventListener('keyup',function(event){
//   if(event.keyCode == 13){
//     const toDo = input.value;
//     if(toDo){
//       addTodo(toDo,id,false,false);
//       List.push(
//         {
//           name:toDo,
//           id:id,
//           done:false,
//           trash:false

//         }
//       );
//       input.value='';
//       id++;
//     }
//   }
// });
  // function add(){
  //   var todos = [];
  //       document.getElementById('addBtn').addEventListener('click', function () {
  //   var list = document.getElementById('toDoList');
  //   list.innerHTML = ''; //resetting the list
  //         var todoInput = document.getElementById('Cbox').value;
  //       todos.push(todoInput)  

  //       var item = document.createElement("li");
  //       for (var i = 0; i < todos.length; i++) {
  //           var listItem = document.createTextNode(todos[i]);
  //         var li = document.createElement("li");
  //     li.appendChild(document.createTextNode(todos[i]));
  //     list.append(li);
  //       }
  //     });
  // }

   var todos = [];
    document.getElementById('button').addEventListener('click', function () {
 var list = document.getElementById('toDoList');
 list.innerHTML = ''; //resetting the list
      var todoInput = document.getElementById('todoInput').value;
    todos.push(todoInput)  

        var item = document.createElement("li");
    for (var i = 0; i < todos.length; i++) {
        var listItem = document.createTextNode(todos[i]);
       var li = document.createElement("li");
  li.appendChild(document.createTextNode(todos[i]));
  list.append(li);
    }

    var item = document.createElement("value");
    for (var i = 0; i < todos.length; i++) {
        var listItem = document.createTextNode(todos[i]);
       var value = document.createElement("value");
  value.appendChild(document.createTextNode(todos[i]));
  list.append(value);
    }

  });

    var i = 1;      // COUNTER, FOR CHECKBOX ID.

  
  


