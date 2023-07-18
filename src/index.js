import { createToDo } from "./createList.js";
import { displayDefaultProject, displayTheForm, addItemtoChecklist, clearForm } from "./dom-manipulation.js";
import { defaultProjects } from "./default-projects.js";
import './style.css';

    // Call default projects on load
    // defaultProjects();

    // Call DOM manipulation module to form UI
    defaultProjects();

    // Click events module
    let clickEventsModule = (function() {
        // Click event for displaying the form
        const addNewToDo = document.querySelector(".add-todo-button");
        addNewToDo.addEventListener("click", displayTheForm);

        // Click event for adding an item to the checklist on the form
        const addToChecklist = document.querySelector(".add-to-checklist");
        addToChecklist.addEventListener("click", addItemtoChecklist);

        // Click event to clear the form
        const clearButton = document.querySelector(".reset-button");
        clearButton.addEventListener("click", clearForm);

    })();

    // Create toDo list
    const myToDo = createToDo("Get Essentials", "Go buy water", "7/16/2023", "High", "Water, Food, Clothes");
    const myToDo2 = createToDo("Work", "Finish Odin Project course work", "7/16/2023", "High", "Complete Intermediate Javascript, Complete Advanced HTML & CSS")
    console.log("Show me properties from myToDo1", myToDo);
    console.log("Show me properties from myToDo2", myToDo2);
