import { isToday, isThisWeek, parseISO } from "date-fns";
import { addListenersToCard } from "./events";
import { createCard } from "./todoCard";


const getCard = (id) => {
    const card = document.querySelector(`[data-id="${id}"]`);
    return card;
}

const clearDisplay = () => {
    document.querySelector(".todo-section").replaceChildren();
}

const updateDisplay = (library) => {
    clearDisplay();
    const todoList = library.getList();
    const cardHolder = createCard();
    const timeFilter = document.getElementById("time-filter");

    if (timeFilter.value == "today") {
        for (let i = 0; i < todoList.length; i++) {
            if (isToday(parseISO(todoList[i].dueDate))) {
                cardHolder.addCard(todoList[i], i);
                changeBorderColor(todoList[i], i);
            }
        }
        noTaskMessage();
    }

    else if (timeFilter.value == "week") {
        for (let i = 0; i < todoList.length; i++) {
            if (isThisWeek(parseISO(todoList[i].dueDate))) {
                cardHolder.addCard(todoList[i], i);
                changeBorderColor(todoList[i], i);
            }
        }
        noTaskMessage();
    }

    else {
        for (let i = 0; i < todoList.length; i++) {
            cardHolder.addCard(todoList[i], i);
            changeBorderColor(todoList[i], i);
        }
        noTaskMessage();

    }
    addListenersToCard(library)

}

const changeBorderColor = (todo, id) => {
    const card = getCard(id);
    if (todo.priority == "Low") {
        card.style.borderLeft = " 15px solid green";
        card.style.borderRight = "15px solid green";
    }
    else if (todo.priority == "Medium") {
        card.style.borderLeft = "15px solid yellow";
        card.style.borderRight = "15px solid yellow";
    }
    else if (todo.priority == "High") {
        card.style.borderLeft = "15px solid Red";
        card.style.borderRight = "15px solid Red";
    }
}

const noTaskMessage = () => {
    const cards = document.querySelectorAll(".todo-card");

    if (cards.length == 0) {
        const emptyMessage = document.createElement("p");
        const cardSection = document.querySelector(".todo-section");
        emptyMessage.classList.add("empty-message");
        emptyMessage.textContent = "No task available";
        cardSection.append(emptyMessage);


    }
}


export { getCard, clearDisplay, updateDisplay }
