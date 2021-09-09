import { completeTodos, getTodos } from '../local-storage.js';

const ul = document.getElementById('todos');

export function renderTodos() {

    const pullTodo = getTodos();
    ul.textContent = '';
    for (let doList of pullTodo) {
        const div = document.createElement('div');
        const li = document.createElement('li');
        const add = document.createElement('button');

        add.textContent = 'Finished';
        div.textContent = doList.todo;
        li.append(div, add);
        ul.append(li);


        if (doList.completed === true) {
            div.style.textDecoration = 'line-through';
            add.disabled = true;
        }
        add.addEventListener('click', () => {
            completeTodos(doList.id);

            div.style.textDecoration = 'line-through';
            add.disabled = true;

        });

    }

}
