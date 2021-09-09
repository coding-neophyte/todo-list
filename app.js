// import functions and grab DOM elements

import { setUser, getUser } from './local-storage.js';
import { user } from './user.js';
// initialize global state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state


const newUser = document.getElementById('signup-page');
const existingUser = document.getElementById('login-page');

newUser.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(newUser);
    const userData = {
        name: data.get('username'),
        password: data.get('password'),
        todos: []
    };


    setUser(userData);
    window.location = '../todo/todo.html';




});


existingUser.addEventListener('submit', (e) => {
    e.preventDefault();



    const existing = getUser() || {};
    const data = new FormData(existingUser);
    if (existing.name === data.get('username') && existing.password === data.get('password')) {
        window.location = '../todo/todo.html';
    } else {
        alert('error wrong username or password combination');
    }
});
