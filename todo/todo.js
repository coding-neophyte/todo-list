import { addTodos, getTodos } from '../local-storage.js';
import { renderTodos } from './render-utils.js';

const toDo = getTodos();
const submitTodo = document.getElementById('submit-todo');
const signOut = document.getElementById('signout');

renderTodos();

submitTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(submitTodo);

    addTodos(data.get('userInput'));
    renderTodos();



});

signOut.addEventListener('click', () => {
    window.location = '../index.html';
});
