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
    }

    else if (timeFilter.value == "week") {
        for (let i = 0; i < todoList.length; i++) {
            if (isThisWeek(parseISO(todoList[i].dueDate))) {
                cardHolder.addCard(todoList[i], i);
                changeBorderColor(todoList[i], i);
            }
        }
    }

    else {
        for (let i = 0; i < todoList.length; i++) {
            cardHolder.addCard(todoList[i], i);
            changeBorderColor(todoList[i], i);
        }

    }
    addListenersToCard(library)

}

const changeBorderColor = (todo, id) => {
    const card = getCard(id);
    if(todo.priority == "Low") {
        card.style.borderLeft = "thick solid green";
        card.style.borderRight = "thick solid green";
    }
    else if(todo.priority == "Medium") {
        card.style.borderLeft = "thick solid yellow";
        card.style.borderRight = "thick solid yellow";
    }
    else if(todo.priority == "High") {
        card.style.borderLeft = "thick solid Red";
        card.style.borderRight = "thick solid Red";
    }
}


export { getCard, clearDisplay, updateDisplay }
