import { defaultProjects } from "./default-projects.js"

// DOM manipulation to display UI
export function domManip () {

    // DOM for heading
    const contentDiv = document.querySelector('#content');
    const heading = document.createElement('h1');
    heading.textContent = 'To-Do List';
    contentDiv.appendChild(heading);

    // DOM for default load
    const infoDiv = document.createElement('div');
    infoDiv.textContent = defaultProjects().projectTitle;
    contentDiv.appendChild(infoDiv);
}