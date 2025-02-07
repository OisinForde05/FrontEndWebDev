interface myInterface{
    myTasks: Array<string>; //Type of Array with Strings
    addTask(task:string):number; //Returns number of elements
    deleteTasks(task:string); //Returns number of elements

}

class Todo implements myInterface{ //using a class that implements from the interface
    
    myTasks: string[] = [];

    addTask(task: string): number {
        this.myTasks.push(task); //pushes string to array
        console.log(task + " has been added to myTask"); //Prints what string has been added to the Array
        return this.myTasks.length; //returns number of elements in the array after insertion
    }

    listAllTasks(): void {
        this.myTasks.forEach (function(element){ //ForEach loop to scan through the Array

            console.log("String " + element + " is in MyArray");//Prints out each item in the array
        });

    }

    deleteTasks(task: string){

        let num:number;
        let index:number = this.myTasks.indexOf(task);//Getting index of task in myArray

        if(index > -1){ //trying to find if the item is in the array
            this.myTasks.splice(index, 1);//Deletes index 1 from the array
            console.log("String: " + task + " has been removed from MyArray");
            }
        else{ //print not found if item isnt in the array
            console.log("String: " + task + " is not in MyArray");
        }

        return this.myTasks.length;
        }
}

let myTodo = new Todo();

//Test to see if class works
myTodo.addTask("Test");
myTodo.listAllTasks();
myTodo.deleteTasks("Test");
myTodo.deleteTasks("Test2");