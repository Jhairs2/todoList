import editIcon from './assets/pencil-outline.svg';
import removeIcon from './assets/trash-can-outline.svg';

const createCard = () => {

    const makeCardContainer = () => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        return cardContainer;
    }

    const makeCard = (id) => {
        const card = document.createElement("div");
        card.classList.add("todo-card");
        card.setAttribute("data-ID", id);

        return card;
    }

    const makeIconContainer = () => {
        const iconContainer = document.createElement("div");
        iconContainer.classList.add("icon-container");

        return iconContainer;
    }

    const makeCollapsible = () => {
        const coll = document.createElement("div");
        coll.classList.add("collapsible");

        return coll;
    }

    const makeCheckBox = (todo) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-check");
        checkbox.checked = todo.complete;
        return checkbox;
    }

    const makeTitle = (todo) => {
        const title = document.createElement("p");
        title.classList.add("todo-title");
        title.textContent = todo.title;

        return title;
    }

    const makeDate = (todo) => {
        const date = document.createElement("p");
        date.classList.add("todo-date");
        date.textContent = todo.dueDate;

        return date;
    }



    const makeButtons = () => {
        const detailsBtn = document.createElement("button");
        detailsBtn.classList.add("details-button");
        detailsBtn.textContent = "DETAILS";

        const editBtn = document.createElement("img");
        editBtn.classList.add("edit-button");
        editBtn.src = editIcon;

        const removeBtn = document.createElement("img");
        removeBtn.classList.add("delete-button");
        removeBtn.src = removeIcon;

        return { detailsBtn, editBtn, removeBtn };

    }

    const makeCardContent = (todo, id) => {
        const cardContainer = makeCardContainer();
        const card = makeCard(id);
        const coll = makeCollapsible();
        const icons = makeIconContainer();
        const buttons = makeButtons();

        icons.append(buttons.detailsBtn, buttons.editBtn, buttons.removeBtn)
        card.append(makeCheckBox(todo), makeTitle(todo), makeDate(todo), icons);

        if(todo.complete == true) {
            console.log("it ran");
            card.classList.toggle("completed");
        }

        cardContainer.append(card, coll);

        return cardContainer;
    }

    const addCard = (todo, id) => {
        const main = document.querySelector(".todo-section");
        const card = makeCardContent(todo, id);

        main.append(card);

    }

    return { addCard }
}


const collapsibleContent = () => {

    const clearCollapsible = (card) => {
        card.nextElementSibling.replaceChildren();

    }

    const showTitle = (library, card) => {
        const taskTitleCont = document.createElement("div");
        const titleLable = document.createElement("p");
        const title = document.createElement("p");


        titleLable.textContent = "Task: ";
        title.textContent = library.getTodo(card.dataset.id).title;

        taskTitleCont.append(titleLable, title);

        return taskTitleCont;
    }

    const showDate = (library, card) => {
        const taskDateCont = document.createElement("div");
        const dateLabel = document.createElement("p");
        const date = document.createElement("p");

        dateLabel.textContent = "Due Date: ";
        date.textContent = library.getTodo(card.dataset.id).dueDate;

        taskDateCont.append(dateLabel, date);

        return taskDateCont;
    }

    const showPriority = (library, card) => {
        const taskPriorityCont = document.createElement("div");
        const priorityLabel = document.createElement("p");
        const priority = document.createElement("p");

        priorityLabel.textContent = "Priority: ";
        priority.textContent = library.getTodo(card.dataset.id).priority;

        taskPriorityCont.append(priorityLabel, priority);

        return taskPriorityCont;

    }

    const showDescription = (library, card) => {
        const taskDescriptionCont = document.createElement("div");
        const descriptionLabel = document.createElement("p");
        const description = document.createElement("p");

        descriptionLabel.textContent = "Description: ";
        description.textContent = library.getTodo(card.dataset.id).description;

        taskDescriptionCont.append(descriptionLabel, description);

        return taskDescriptionCont;

    }

    const makeEditTitle = (library, card) => {
        const newTitle = document.createElement("input");
        newTitle.setAttribute("id", "newTask");
        newTitle.type = "text";
        newTitle.value = library.getTodo(card.dataset.id).title;

        return newTitle;
    }


    const makeEditDate = (library, card) => {
        const newDate = document.createElement("input");
        newDate.setAttribute("id", "newDate");
        newDate.type = "date";
        newDate.value = library.getTodo(card.dataset.id).dueDate;

        return newDate;
    }

    const makeEditDescription = (library, card) => {
        const newDescription = document.createElement("input");
        newDescription.setAttribute("id", "newDescription");
        newDescription.type = "text";
        newDescription.value = library.getTodo(card.dataset.id).description;

        return newDescription;
    }

    const makeEditPriority = (library, card) => {
        const newPriority = document.createElement("select");
        newPriority.setAttribute("id", "newPriority");

        const values = ["Low", "Medium", "High"]

        for (let i = 0; i < 3; i++) {
            const elem = document.createElement("option");
            elem.value = values[i];
            elem.textContent = values[i];

            newPriority.add(elem);

        }

        newPriority.value = library.getTodo(card.dataset.id).priority;

        return newPriority;
    }

    const makeEditBtn = (card) => {
        const btn = document.createElement("button");
        btn.type = "submit";
        btn.setAttribute("data-button-id", card.dataset.id);
        btn.classList.add("edit-confirm");
        btn.textContent = "Confirm Edits";

        return btn
    }



    const makeDetailsCollapsibleContent = (library, card) => {
        clearCollapsible(card);
        const detailsContainer = document.createElement("div");
        const title = showTitle(library, card);
        const date = showDate(library, card);
        const priority = showPriority(library, card);
        const description = showDescription(library, card);

        detailsContainer.append(title, date, priority, description);

        return detailsContainer;
    }

    const makeTopEditSection = (library, card) => {
        const topSection = document.createElement("div");
        topSection.classList.add("edit-top-section");

        const newTitle = makeEditTitle(library, card);
        const newDate = makeEditDate(library, card);
        const newPriority = makeEditPriority(library, card);

        topSection.append(newTitle, newDate, newPriority);

        return topSection;

    }

    const makeBottomEditSection = (library, card) => {
        const bottomSection = document.createElement("div");
        bottomSection.classList.add("edit-bottom-section");

        const newDescription = makeEditDescription(library, card);
        const editBtn = makeEditBtn(card);

        bottomSection.append(newDescription, editBtn);

        return bottomSection;

    }

    const makeEditCollapsibleContent = (library, card) => {
        clearCollapsible(card);
        const editContainer = document.createElement("div");
        const editForm = document.createElement("form");
        const topSection = makeTopEditSection(library, card);
        const bottomSection = makeBottomEditSection(library, card);


        editForm.classList.add("edit-form");
        editForm.setAttribute("data-form-id", card.dataset.id);

        editForm.append(topSection, bottomSection);
        editContainer.append(editForm);

        return editContainer;
    }

    const showCollapsibleContent = (library, card, type) => {

        if (type == "edit") {
            const editColl = makeEditCollapsibleContent(library, card);
            card.nextElementSibling.append(editColl)
        }
        else {
            const detailsColl = makeDetailsCollapsibleContent(library, card);
            card.nextElementSibling.append(detailsColl);
        }

    }

    return { showCollapsibleContent }
}



export { createCard, collapsibleContent };
