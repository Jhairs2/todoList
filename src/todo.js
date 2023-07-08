import { compareAsc, parseISO } from "date-fns";

const createTodo = (title, description, dueDate, priority, complete = false) => {
    return { title, description, dueDate, priority, complete }

}

const todoLibrary = () => {
    const list = [];

    const add = (title, description, dueDate, priority) => {
        list.push(createTodo(title, description, dueDate, priority));
        sort();
    }
    const getList = () => {
        return list;
    }

    const getTodo = (index) => {
        return list[index];
    }

    const remove = (index) => {
        list.splice(index, 1)
    }

    const complete = (index) => {
        list[index].complete = true;
    }

    const edit = (index, command, change) => {
        list[index][command] = change;
    }

    const sort = () => {
        let tmp;
        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                if (compareAsc(parseISO(list[i].dueDate), parseISO(list[j].dueDate)) == 1) {
                    tmp = list[j];
                    list[j] = list[i];
                    list[i] = tmp;

                }
            }

        }

    }

    return { add, remove, getList, edit, complete, getTodo }
}

const projectLibrary = () => {
    const projectList = [];

    const add = () => {
        const project = todoLibrary();
        projectList.push(project);
    }

    const getProject = (id) => {
        return projectList[id];
    }

    return {add, getProject}


}

export { todoLibrary, projectLibrary };