var Todo = /** @class */ (function () {
    function Todo() {
        this.myTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTasks.push(task); //pushes string to array
        console.log(task + " has been added to myTask"); //Prints what string has been added to the Array
        return this.myTasks.length; //returns number of elements in the array after insertion
    };
    Todo.prototype.listAllTasks = function () {
        this.myTasks.forEach(function (element) {
            console.log("String " + element + " is in MyArray"); //Prints out each item in the array
        });
    };
    Todo.prototype.deleteTasks = function (task) {
        var num;
        var index = this.myTasks.indexOf(task); //Getting index of task in myArray
        if (index > -1) { //trying to find if the item is in the array
            this.myTasks.splice(index, 1); //Deletes index 1 from the array
            console.log("String: " + task + " has been removed from MyArray");
        }
        else { //print not found if item isnt in the array
            console.log("String: " + task + " is not in MyArray");
        }
        return this.myTasks.length;
    };
    return Todo;
}());
var myTodo = new Todo();
//Test to see if class works
myTodo.addTask("Test");
myTodo.listAllTasks();
myTodo.deleteTasks("Test");
myTodo.deleteTasks("Test2");
