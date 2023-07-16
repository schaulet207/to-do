// Factory function
export const defaultProjects = () => {

    console.log("Loading default project into array");
    let projects = [];
    console.log("Pushing title into the array");
    let projectTitle = "Default";
    projects.push({ projectTitle });
    console.log(projects);
    return { projects, projectTitle };
}