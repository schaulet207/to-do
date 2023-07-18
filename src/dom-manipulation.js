import { defaultProjects } from "./default-projects.js"

    // DOM manipulation to display UI
    export function displayDefaultProject() {
        const projectsInfoDiv = document.createElement("div");
        projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
        contentDiv.appendChild(projectsInfoDiv);
    }

    export function displayTheForm() {
        document.getElementById("add-todo-form").style.display = "";
    }

    export function addItemtoChecklist() {
        const addItem = document.getElementById("add-to-checklist").value;

        if (addItem !== "") {
            const ul = document.querySelector(".todo-ul");
            const li = document.createElement("li");
            li.textContent = addItem;
            const span = document.createElement("span");
            span.className = "remove-checklist-item";
            const removeIcon = document.createTextNode("/u00D7");
            li.appendChild(span);
            span.appendChild(removeIcon);
            ul.appendChild(li);
            document.getElementById("add-to-checklist").value = "";
        }

        // DOM check for existing check list items already present
        if (document.querySelectorAll("li").length > 0) {
            const nodeListCheckList = document.querySelectorAll("li");

            // DOM to bind click event to each node in nodelist and remove node
            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromChecklist() {
                    checkListItem.remove();
                });
            });
        } else return;
    }

    export function clearForm() {
        const nodeListCheckList = document.querySelectorAll("li");
        for (let i = 0; i < nodeListCheckList.length; i++) {
            nodeListCheckList[i].remove();
        }
        document.getElementById("add-todo").reset();
    }

// export function domManip () {

//     // DOM for heading
//     const contentDiv = document.querySelector('#content');
//     const heading = document.createElement('h1');
//     heading.textContent = 'To-Do List';
//     contentDiv.appendChild(heading);

//     // DOM for default load
//     const infoDiv = document.createElement('div');
//     infoDiv.textContent = defaultProjects().projectTitle;
//     contentDiv.appendChild(infoDiv);
// }