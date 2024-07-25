// script.js
let todoList = [];
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoListElement = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todo = {
            text: todoText,
            completed: false
        };
        todoList.push(todo);
        renderTodoList();
        todoInput.value = '';
    }
}

function renderTodoList() {
    todoListElement.innerHTML = '';
    todoList.forEach((todo, index) => {
        const todoElement = document.createElement('li');
        todoElement.classList.add('todo-item');
        todoElement.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn" data-index="${index}">Delete</button>
            <button class="edit-btn" data-index="${index}">Edit</button>
        `;
        todoListElement.appendChild(todoElement);
    });
}

todoListElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        todoList.splice(index, 1);
        renderTodoList();
    } else if (e.target.classList.contains('edit-btn')) {
        const index = e.target.dataset.index;
        const todo = todoList[index];
        todo.text = prompt('Enter new text:', todo.text);
        renderTodoList();
    }
});