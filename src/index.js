import { createToDo } from "./createList.js";
import { domManip } from "./dom-manipulation.js";
import { defaultProjects } from "./default-projects.js";

    // Call default projects on load
    defaultProjects();

    // Call DOM manipulation module to form UI
    domManip();

    // Create toDo list
    const myToDo = createToDo("Get Essentials", "Go buy water", "7/16/2023", "High", "Water, Food, Clothes");
    const myToDo2 = createToDo("Work", "Finish Odin Project course work", "7/16/2023", "High", "Complete Intermediate Javascript, Complete Advanced HTML & CSS")
    console.log("Show me properties from myToDo1", myToDo);
    console.log("Show me properties from myToDo2", myToDo2);
