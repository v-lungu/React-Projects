const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const items = todoList.children;
const todoNr = document.querySelector('.todo-nr b')
const mainTitle = document.querySelector('.main-title')

// todoNr.innerText = items.length;

// button.addEventListener('click', function () {
//     const newItem = document.createElement('li');
//     newItem.classList.add('item');
//     newItem.innerText = `Item ${items.length + 1}`
//     todoList.appendChild(newItem);
//     todoNr.innerText = items.length;
// });

button.addEventListener('keydown', function () {
    mainTitle.classList.toggle('spectacular')
});