import { addTodos, getTodos } from '../local-storage.js';
import { renderTodos } from './render-utils.js';

const toDo = getTodos();
const submitTodo = document.getElementById('submit-todo');

renderTodos();

submitTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(submitTodo);

    addTodos(data.get('userInput'));
    renderTodos();



});
