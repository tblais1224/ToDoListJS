var todoList = {
    todos: [],

    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },

    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
    },

    deleteTodos: function (position) {
        this.todos.splice(position, 1);
    },

    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // for (var i = 0; i < totalTodos; i++) {
        //     if (this.todos[i].completed === true) {
        //         completedTodos++;
        //     }
        // }

        //using the forEach is cleaner and less code than above for loop
        this.todos.forEach(function (todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });
        //this is compiled version of below commented out code
        this.todos.forEach(function (todo) {
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        });
        // if (completedTodos === totalTodos) {
        //     // for (var i = 0; i < totalTodos; i++) {
        //     //     this.todos[i].completed = false;
        //     // }
        //     this.todos.forEach(function (todo) {
        //         todo.completed = falsde;
        //     })
        // } else {
        //     // for (var i = 0; i < totalTodos; i++) {
        //     //     this.todos[i].completed = true;
        //     this.todos.forEach(function (todo) {
        //         todo.completed = true;
        //     })
        // }
    }
};

// //document represents the dom in index.html
// var displayTodosButton = document.getElementById("displayTodosButton");
// // when button is clicked run function
// displayTodosButton.addEventListener('click', function () {
//     todoList.displayTodos();
// });
// var toggleAllButton = document.getElementById("toggleAllButton");
// // when button is clicked run function
// toggleAllButton.addEventListener('click', function () {
//     todoList.toggleAll();
// });

// for handling onclick events in html
var handlers = {
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function () {
        var addTodoText = document.getElementById("addTodoText");
        todoList.addTodo(addTodoText.value);
        //using .values gives you whatever is input into html from addtodotext
        addTodoText.value = "";
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById(
            "changeTodoPositionInput"
        );
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(
            changeTodoPositionInput.valueAsNumber,
            changeTodoTextInput.value
        );
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function (position) {
        todoList.deleteTodos(position);
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById(
            "toggleCompletedPositionInput"
        );
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    }
};

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";

        //below for loop code using for each loop
        todoList.todos.forEach(function (todo, position) {
            var todoLi = document.createElement("li");
            var todoTextWithCompletion = "";
            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText + ' ';
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText + ' ';
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
    },

    // for (let i = 0; i < todoList.todos.length; i++) {
    //     var todoLi = document.createElement("li");
    //     var todo = todoList.todos[i];
    //     var todoTextWithCompletion = "";

    //     if (todo.completed === true) {
    //         todoTextWithCompletion = "(x) " + todo.todoText + ' ';
    //     } else {
    //         todoTextWithCompletion = "( ) " + todo.todoText + ' ';
    //     }

    //     todoLi.id = i;
    //     todoLi.textContent = todoTextWithCompletion;
    //     todoLi.appendChild(this.createDeleteButton());
    //     todosUl.appendChild(todoLi);
    // }




    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton'
        return deleteButton;
    },

    setUpEventListeners: function () {
        var todosUl = document.querySelector('ul');
        //use inspect and console on delete button to track the onclick variables and call them with event.target.etc...
        todosUl.addEventListener('click', function (event) {
            //get element that was clicked on
            var elementClicked = event.target;
            //check if elementClicked is a delete button
            if (elementClicked.className === 'deleteButton') {
                // run handlers.deleteTodo(position)
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

//this ensure eventListeners are always running 
view.setUpEventListeners();

//google dom event delegation!