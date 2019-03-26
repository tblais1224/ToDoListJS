//going to put everything from requirments into objects

var todoList = {
  todos: [],

  displayTodos: function() {
    //dont need to name function in method because it has key value name
    console.log("My todos:", this.todos);
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodos: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
