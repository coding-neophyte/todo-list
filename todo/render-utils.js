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
        div.style.color = '#4267b2';
        div.style.fontWeight = 'bold';
        li.append(div, add);
        ul.append(li);
        // add.style.color = 'white';
        // add.style.backgroundColor = '#4267b2';
        // add.style.borderRadius = '5px';
        // add.classList.add('finishedButton');
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
