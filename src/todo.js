const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let myTodos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(myTodos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    myTodos = myTodos.filter((todo) => todo.id !== parseInt(li.id));
    console.log(myTodos);
    saveTodos();
}

function paintTodoList(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    };
    myTodos.push(newTodoObj);
    paintTodoList(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    myTodos = parsedTodos;
    parsedTodos.forEach(paintTodoList);
}