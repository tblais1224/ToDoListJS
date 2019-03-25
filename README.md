//version 1
//have a place to store todos
var todos = ["item 1", "item 2", "item 3", "item 4"];

//have a way to display todos
console.log("My todos:", todos);

//have a way to add new todos
todos.push("new todo");

//have a way to change a todo
todos[0] = "change todo";

//have a way to delete a todo , 
//splice says position to start deleting and how many items to delete
todos.splice(0, 1);