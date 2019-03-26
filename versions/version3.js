//going to put everything from requirments into objects

var todoList = {
    todos: ["item 1", "item 2", "item 3", "item 4"],

    displayTodos: function() { //dont need to name function in method because it has key value name
        console.log('My todos:', this.todos);
    },

    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },

    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },

    deleteTodos: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};
