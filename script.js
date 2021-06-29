const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const name = document.getElementById('personName');
const dateToday = document.getElementById('date');

const todos = JSON.parse(localStorage.getItem('todos'));
let person = prompt("Please enter your name:", "Harry Potter");
name.innerText = person;

var today = new Date();
var date = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate();
dateToday.innerText = date;


if (todos) {
  todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  addTodo();
});

function addTodo(todo){
  let todoText = input.value;

  if(todo){
    todoText = todo.text;
  }

  if(todoText){
    const todoEL = document.createElement('li');
    const icon = document.createElement('i');
    icon.classList.add("fas","fa-times-circle");
    
    if (todo && todo.completed) {
      todoEL.classList.add('completed');
    }
    todoEL.innerText = todoText;

    todoEL.addEventListener('click', () => {
      todoEL.classList.toggle('completed');
      updateLS();
    });

    icon.addEventListener('click', (e) =>  {
      e.preventDefault();
      todoEL.remove();
      updateLS();
    });
    todoEL.appendChild(icon);
    todosUL.appendChild(todoEL);
    input.value = '';

    updateLS();
  }
}

function updateLS() {
  todosEL = document.querySelectorAll('li');
  const todos = [];
  let i = 1;

  todosEL.forEach(todoEL => {
    i++;
    todos.push({
      text: todoEL.innerText,
      completed: todoEL.classList.contains('completed')
    });
    // todos.
  });

  localStorage.setItem('todos',JSON.stringify(todos));
}


