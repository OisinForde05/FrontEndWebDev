let MyArray: string[] = []; //An Array containing Strings

function addTask(task: string):number{

    MyArray.push(task); //pushes string to array
    console.log(task + " has been inserted to the Array"); //Prints what string has been added to the Array
    return MyArray.length; //returns number of elements in the array after insertion
}


function listAllTasks():void{

    MyArray.forEach (function(element){ //ForEach loop to scan through the Array

        console.log("String " + element + " is in MyArray");//Prints out each item in the array
    });
}

function deleteTask(task: string){

    let num:number;
    let index:number = MyArray.indexOf(task);//Getting index of task in myArray

    if(index > -1){ //trying to find if the item is in the array
        MyArray.splice(index, 1);//Deletes index 1 from the array
        console.log("String: " + task + " has been removed from MyArray");
        }
    else{ //print not found if item isnt in the array
        console.log("String: " + task + " is not in MyArray");
    }

    return MyArray.length;
}
    

//test to see if the functions work
addTask("Work"); 
listAllTasks();
deleteTask("Stuff");
deleteTask("Work");