import { updateDisplay, getCard } from "./display";
import { collapsibleContent } from "./todoCard";
import { sendAddFormData, sendEditFormData, sendProjectFormData } from "./form";




const taskStatus = (card) => {
    card.classList.toggle("completed");
}

const addListenersToCard = (library) => {
    collapsibleEvents(library);

}

const showAddFormBtnEvent = () => {
    const form = document.getElementById("add-task-form");
    const projectBtn = document.getElementById("show-project-form-btn");
    const addTaskBtn = document.getElementById("show-form-btn");
    addTaskBtn.addEventListener("click", () => {
        form.classList.toggle("active");
        projectBtn.classList.toggle("active");
        addTaskBtn.classList.toggle("active");

    })
}

const showProjectAddFormBtnEvent = () => {
    const form = document.getElementById("add-project-form");
    const projectBtn = document.getElementById("show-project-form-btn");
    const addTaskBtn = document.getElementById("show-form-btn");
    projectBtn.addEventListener("click", () => {
        form.classList.toggle("active");
        projectBtn.classList.toggle("active");
        addTaskBtn.classList.toggle("active");

    })
}

const addTaskFormEvent = (library) => {
    const form = document.getElementById("add-task-form");

    form.addEventListener("submit", (e) => {
        const currentLibrary = getCurrentLibrary();
        e.preventDefault();
        sendAddFormData(form, library.getProject(currentLibrary));

    })
}

const addProjectFormEvent = (projects) => {
    const form = document.getElementById("add-project-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        sendProjectFormData(form, projects);

    })
}

const cancelTaskFormEvent = () => {
    const form = document.getElementById("add-task-form");
    const addTaskBtn = document.getElementById("show-form-btn");
    const projectBtn = document.getElementById("show-project-form-btn");
    const cancelBtn = document.getElementById("cancel-add-btn");
    cancelBtn.addEventListener("click", () => {
        form.classList.toggle("active");
        addTaskBtn.classList.toggle("active");
        projectBtn.classList.toggle("active");
        form.reset()

    })

}
const cancelProjectFormEvent = () => {
    const form = document.getElementById("add-project-form");
    const addTaskBtn = document.getElementById("show-form-btn");
    const projectBtn = document.getElementById("show-project-form-btn");
    const cancelBtn = document.getElementById("cancel-add-project-btn");
    cancelBtn.addEventListener("click", () => {
        form.classList.toggle("active");
        projectBtn.classList.toggle("active");
        addTaskBtn.classList.toggle("active");
        form.reset()

    })

}

const submitEditFormEvent = (library, id) => {
    const form = document.querySelector(`[data-form-id="${id}"]`);
    form.addEventListener("submit", (e) => {

        e.preventDefault();
        sendEditFormData(form, library, id);

    })
}

const collapsibleEvents = (library) => {
    const cards = document.querySelectorAll(".todo-card");
    const coll = collapsibleContent();

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            const id = e.currentTarget.dataset.id;

            if (e.target.tagName == "IMG") {
                if (e.target.classList.contains("delete-button")) {

                    library.remove(id);
                    updateDisplay(library);
                }

                else if (e.target.classList.contains("edit-button")) {
                    const card = getCard(id);
                    card.nextElementSibling.classList.toggle("active");
                    coll.showCollapsibleContent(library, card, "edit");
                    submitEditFormEvent(library, id);

                }

            }

            else if (e.target.tagName == "BUTTON") {
                const card = getCard(id);
                card.nextElementSibling.classList.toggle("active");
                coll.showCollapsibleContent(library, card, "details");


            }

            else if (e.target.classList.contains("task-check")) {
                if (e.target.checked) {
                    taskStatus(getCard(id));
                    library.getTodo(id).complete = true;
                }
                else {
                    taskStatus(getCard(id));
                    library.getTodo(id).complete = false;
                }

            }
        })
    })
}

const timeFilterEvent = (library) => {
    const timeFilter = document.getElementById("time-filter");
    timeFilter.selected = timeFilter.options[2];

    timeFilter.addEventListener("change", () => {
        const currentLibrary = getCurrentLibrary();
        updateDisplay(library.getProject(currentLibrary));
    })
}

const pageInteractivity = (library) => {
    showAddFormBtnEvent();
    showProjectAddFormBtnEvent();
    addTaskFormEvent(library);
    addProjectFormEvent(library)
    cancelTaskFormEvent();
    cancelProjectFormEvent();
    timeFilterEvent(library);
    projectView(library);
}

const projectView = (library) => {
    const projectList = document.getElementById("project-list");
    projectList.addEventListener("change", () => {
        const currentLibrary = projectList.value;
        try {
            updateDisplay(library.getProject(currentLibrary));
        }

        catch (error) {
            console.log("no list");
        }
    })
}
const getCurrentLibrary = () => {
    const projectList = document.getElementById("project-list");
    const currentLibrary = projectList.value;


    return currentLibrary;
}

export { addListenersToCard, pageInteractivity, getCurrentLibrary };