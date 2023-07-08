import { updateDisplay } from "./display";

const sendAddFormData = (form, library) => {
    const formElements = form.elements;
    const projectBtn = document.getElementById("show-project-form-btn");
    const addTaskBtn = document.getElementById("show-form-btn");
    library.add(formElements.task.value, formElements.description.value, formElements.date.value, formElements.priority.value);
    updateDisplay(library);
    form.classList.toggle("active");
    projectBtn.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
    form.reset();
}

const sendProjectFormData = (form, projects) => {
    const projectList = document.getElementById("project-list");
    const addTaskBtn = document.getElementById("show-form-btn");
    const newProject = document.createElement("option"); 
    const projectBtn = document.getElementById("show-project-form-btn");

    const formElements = form.elements;
    newProject.textContent = formElements.project.value;
    

    projectList.add(newProject);
    newProject.selected = newProject;

    projects.add();
    

    for(let i = 0; i < projectList.length; i++) {
        projectList.options[i].value = i;
    }

    form.classList.toggle("active");
    projectBtn.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
    updateDisplay(projects.getProject(newProject.value));
    form.reset();
}

const sendEditFormData = (form, library, id) => {
    const formElements = form.elements;
    const newTask = formElements.newTask.value;
    const newDescription = formElements.newDescription.value
    const newDate = formElements.newDate.value
    const newPriority = formElements.newPriority.value

    library.edit(id, "title", newTask);
    library.edit(id, "description", newDescription);
    library.edit(id, "dueDate", newDate);
    library.edit(id, "priority", newPriority);
    updateDisplay(library);
    form.parentNode.parentNode.classList.toggle("active");
    form.reset();

}




export { sendAddFormData, sendEditFormData, sendProjectFormData }