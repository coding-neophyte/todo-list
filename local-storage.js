const USER = 'USER';

export function getUser() {
    const pullUser = localStorage.getItem(USER);
    const parseUser = JSON.parse(pullUser);

    return parseUser;
}

export function setUser(user) {
    const stringUser = JSON.stringify(user);
    localStorage.setItem(USER, stringUser);
}

export function setTodos(todos) {
    const user = getUser();

    user.todos = todos;
    setUser(user);
}




export function getTodos() {
    const user = getUser();

    return user.todos;
}

export function addTodos(newTodoItem) {
    const pullTodos = getTodos();
    const addNewTodo = {
        id: Math.ceil(Math.random() * 50),
        todo: newTodoItem,
        completed: 'false'
    };
    pullTodos.push(addNewTodo);
    setTodos(pullTodos);
}


export function completeTodos(id) {
    const pullTodos = getTodos();
    console.log(pullTodos);
    const findTodo = pullTodos.find((todo) => todo.id === id);

    findTodo.completed = true;

    setTodos(pullTodos);
}
