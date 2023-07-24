import './static/styles.css';
import { projectLibrary} from './todo.js';
import { updateDisplay} from './display.js';
import { pageInteractivity} from './events';


const todo = projectLibrary()
const name = document.getElementById("project-list");
todo.add();
console.log(todo.getProject(0))
pageInteractivity(todo);


todo.getProject(0).add("Wash Dishes", "Need soap", "2023-07-08", "Medium");
updateDisplay(todo.getProject(0));


