// Creates the ToDO array
let toDoArray = [];

// Factory function to create a list
export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    console.log("Called toDo module... creating now");
    console.log({Title, Description, DueDate, Priority, CheckList});
    console.log("Pushing this to the array");
    toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
    console.log(toDoArray);
    return { Title, Description, DueDate, Priority, CheckList };
}